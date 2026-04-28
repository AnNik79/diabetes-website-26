'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

type FormValues = {
  which_eye: "left" | "right" | "";
  sex: "M" | "F" | "O" | "";
  age: string;
  eye_disorders: string;
  medications: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

type PredictionResponse = {
  prediction: 0 | 1;
  confidence: number;
  message: string;
  metadata: {
    which_eye: string;
    sex: string;
    age: number;
    eye_disorders: string;
    image_size_bytes: number;
  };
};

const initialValues: FormValues = {
  which_eye: "",
  sex: "",
  age: "",
  eye_disorders: "",
  medications: "",
};

const defaultMessage = "Upload a clear eye photo to check your diabetes risk.";

const RING_RADIUS = 52;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function ResultRing({ result }: { result: PredictionResponse }) {
  const isDiabetic = result.prediction === 1;
  const confidencePct = Math.round(result.confidence * 100);
  const targetOffset = RING_CIRCUMFERENCE * (1 - result.confidence);

  const [dashOffset, setDashOffset] = useState(RING_CIRCUMFERENCE);

  useEffect(() => {
    const id = setTimeout(() => setDashOffset(targetOffset), 80);
    return () => clearTimeout(id);
  }, [targetOffset]);

  return (
    <div className="result-card" data-risk={isDiabetic ? "high" : "low"}>
      <div className="result-ring-wrap">
        <svg
          className="result-ring"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <circle
            cx="60"
            cy="60"
            r={RING_RADIUS}
            className="result-ring-track"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={RING_RADIUS}
            className={`result-ring-fill${isDiabetic ? " result-ring-fill--risk" : " result-ring-fill--safe"}`}
            fill="none"
            strokeDasharray={`${RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="result-ring-center">
          <span className="result-ring-pct">{confidencePct}%</span>
          <span className="result-ring-sub">confidence</span>
        </div>
      </div>

      <div className="result-verdict">
        <span className={`result-badge${isDiabetic ? " result-badge--risk" : " result-badge--safe"}`}>
          {isDiabetic ? "High Risk" : "Low Risk"}
        </span>
        <h3 className="result-title">
          {isDiabetic
            ? "Diabetes risk indicators detected"
            : "No diabetes risk indicators detected"}
        </h3>
        <p className="result-copy">
          {isDiabetic
            ? "Our AI found early markers associated with diabetes risk in your eye photo. Please consult a healthcare professional for a full diagnosis."
            : "No early signs of diabetes risk were detected in your eye photo. Keep up with regular check-ups with your doctor."}
        </p>
      </div>

      <p className="result-disclaimer">
        This is a screening tool only and does not replace a medical diagnosis.
      </p>
    </div>
  );
}

export function TryNowForm() {
  const fileInputId = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [fileName, setFileName] = useState("No image selected yet");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState(defaultMessage);
  const [predictionResult, setPredictionResult] = useState<PredictionResponse | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  function resetFeedback() {
    setSubmitState("idle");
    setMessage(defaultMessage);
    setPredictionResult(null);
  }

  function handleFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (submitState !== "idle" || predictionResult) resetFeedback();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "No image selected yet");
    if (submitState !== "idle" || predictionResult) resetFeedback();
  }

  function handleTermsChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAcceptedTerms(event.target.checked);
    if (submitState !== "idle" || predictionResult) resetFeedback();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const image = formData.get("image");

    if (!(image instanceof File) || image.size === 0) {
      setSubmitState("error");
      setMessage("Please choose an eye image before checking your risk.");
      setPredictionResult(null);
      return;
    }

    if (!values.which_eye) {
      setSubmitState("error");
      setMessage("Please select which eye you are uploading a photo of.");
      setPredictionResult(null);
      return;
    }

    if (!values.sex) {
      setSubmitState("error");
      setMessage("Please select your sex.");
      setPredictionResult(null);
      return;
    }

    if (!values.age.trim()) {
      setSubmitState("error");
      setMessage("Please enter your age before checking your risk.");
      setPredictionResult(null);
      return;
    }

    if (!acceptedTerms) {
      setSubmitState("error");
      setMessage("Please accept the terms and conditions before checking your risk.");
      setPredictionResult(null);
      return;
    }

    setSubmitState("submitting");
    setMessage("Analyzing your eye photo. This may take up to 60 seconds.");
    setPredictionResult(null);

    const details = [
      values.eye_disorders.trim(),
      values.medications.trim() ? `Medications: ${values.medications.trim()}` : "",
    ].filter(Boolean);
    const combined = details.length > 0 ? details.join(". ") : "none";
    formData.set("eye_disorders", combined);
    formData.delete("medications");

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        body: formData,
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMessage =
          payload && typeof payload === "object" && "error" in payload
            ? String(payload.error)
            : "The prediction service returned an unexpected error.";

        setSubmitState("error");
        setMessage(errorMessage);
        setPredictionResult(null);
        return;
      }

      setSubmitState("success");
      setMessage("");
      setPredictionResult(payload as PredictionResponse);
    } catch {
      setSubmitState("error");
      setMessage("Unable to reach the prediction service right now. Try again in a moment.");
      setPredictionResult(null);
    }
  }

  const statusClassName =
    submitState === "error" ? "try-now-status try-now-status--error" : "try-now-status";

  return (
    <div className="hero-demo-card">
      <div className="hero-demo-header">
        <p className="hero-demo-kicker">Live screening</p>
        <h2 className="hero-demo-title">Check your diabetes risk</h2>
        <p className="hero-demo-copy">
          Upload an eye photo, fill in a few details, and get your diabetes risk result in seconds.
        </p>
        <p className="hero-demo-disclaimer">
          If you have recently taken medication, avoid taking the test as it may affect your
          results. For accuracy, take it a few hours before or after your medication.
        </p>
      </div>

      <form className="hero-demo-form" onSubmit={handleSubmit}>
        <div className="upload-guide">
          <div className="upload-guide-image-wrap">
            <Image
              src="/assets/images/try-now/eye-sample.png"
              alt="Example of a good eye photo for diabetes screening — clear, close-up, well-lit."
              width={1051}
              height={799}
              className="upload-guide-image"
            />
            <span className="upload-guide-badge" aria-hidden="true">Example</span>
          </div>
          <div className="upload-guide-text">
            <p className="upload-guide-heading">Your photo should look like this</p>
            <p className="upload-guide-sub">A clear, close-up eye photo gives the most accurate result.</p>
            <ul className="upload-guide-tips">
              {[
                "Close-up of one eye, fully open",
                "Sharp focus — no blur or glare",
                "Good natural or bright indoor lighting",
                "No glasses or tinted lenses",
              ].map((tip) => (
                <li className="upload-guide-tip" key={tip}>
                  <span className="upload-guide-tick" aria-hidden="true" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-demo-form-grid">
          <div className="hero-demo-field-column">
            <label className="form-field hero-demo-upload" htmlFor={fileInputId}>
              <span>Eye image</span>
              <input
                accept="image/*"
                className="hero-demo-file-input"
                id={fileInputId}
                name="image"
                onChange={handleFileChange}
                required
                type="file"
              />
              <small className="hero-demo-file-name">{fileName}</small>
            </label>

            <label className="form-field">
              <span>Which eye</span>
              <select name="which_eye" onChange={handleFieldChange} value={values.which_eye} required>
                <option value="" disabled>Select eye</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </label>

            <label className="form-field">
              <span>Sex</span>
              <select name="sex" onChange={handleFieldChange} value={values.sex} required>
                <option value="" disabled>Select sex</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </label>

            <label className="form-field">
              <span>Age</span>
              <input
                inputMode="numeric"
                min="1"
                name="age"
                onChange={handleFieldChange}
                placeholder="Enter your age"
                required
                type="number"
                value={values.age}
              />
            </label>
          </div>

          <div className="hero-demo-field-column">
            <label className="form-field">
              <span>Any known health conditions?</span>
              <textarea
                name="eye_disorders"
                onChange={handleFieldChange}
                placeholder="E.g. glaucoma, diabetes — or type 'none' if not applicable."
                rows={5}
                value={values.eye_disorders}
              />
            </label>

            <label className="form-field">
              <span>Do you take any medications?</span>
              <textarea
                name="medications"
                onChange={handleFieldChange}
                placeholder="If so, which medication, how much, and when? For example, 30 minutes ago, an hour ago, etc."
                rows={5}
                value={values.medications}
              />
            </label>
          </div>

        </div>

        <label className="terms-consent">
          <input
            checked={acceptedTerms}
            onChange={handleTermsChange}
            required
            type="checkbox"
          />
          <span className="terms-consent-copy">
            By continuing, you agree that you have read and accepted our{" "}
            <Link href="/terms">terms and conditions</Link>. You consent to the use of anonymized
            image data for analysis and stated privacy and usage policies.
          </span>
        </label>

        <button
          className="form-submit-button"
          disabled={submitState === "submitting" || !acceptedTerms}
          type="submit"
        >
          {submitState === "submitting" ? "Checking your risk..." : "Check my risk"}
        </button>

        {message ? (
          <p aria-live="polite" className={statusClassName}>
            {message}
          </p>
        ) : null}

        {predictionResult ? <ResultRing result={predictionResult} /> : null}
      </form>
    </div>
  );
}
