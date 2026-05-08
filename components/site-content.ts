export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: ImageAsset;
};

export const images = {
  heroEye: {
    src: "/assets/images/home/hero-eye.webp",
    width: 1024,
    height: 684,
    alt: "Close-up of a human eye used for diabetes screening.",
  },
  visionPhone: {
    src: "/assets/images/home/vision-phone.png",
    width: 858,
    height: 852,
    alt: "BioTransport screening flow shown on a phone.",
  },
  aboutDoctor: {
    src: "/assets/images/about/eye-drawing.webp",
    width: 428,
    height: 428,
    alt: "Eye drawing used for diabetes screening.",
  },
  aboutNurse: {
    src: "/assets/images/about/eye-drawing.webp",
    width: 428,
    height: 428,
    alt: "Eye drawing used for diabetes screening.",
  },
  teamLead: {
    src: "/assets/images/about/team-lead.webp",
    width: 1200,
    height: 800,
    alt: "Lead physician portrait.",
  },
  teamAdvisor: {
    src: "/assets/images/about/advisor.webp",
    width: 400,
    height: 307,
    alt: "Advisor portrait.",
  },
  teamScientist: {
    src: "/assets/images/about/scientist.jpg",
    width: 400,
    height: 400,
    alt: "Scientist portrait.",
  },
  dots: {
    src: "/assets/patterns/dots.svg",
    width: 1200,
    height: 600,
    alt: "Dotted background pattern.",
  },
} satisfies Record<string, ImageAsset>;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Every part of the process was handled with care, empathy, and real support",
    name: "Emily Carter",
    role: "Neurology",
    image: {
      src: "/assets/images/testimonials/emily.webp",
      width: 610,
      height: 658,
      alt: "Emily Carter portrait.",
    },
  },
  {
    quote:
      "Everything from the clean environment to the knowledgeable, attentive staff gave me full confidence in their care & support",
    name: "James Walker",
    role: "Orthopedics",
    image: {
      src: "/assets/images/testimonials/james.png",
      width: 1200,
      height: 1200,
      alt: "James Walker portrait.",
    },
  },
  {
    quote:
      "They not only treated my condition with expertise, but also provided emotional support through the entire process",
    name: "Olivia Bennett",
    role: "General Care",
    image: {
      src: "/assets/images/testimonials/olivia.png",
      width: 1024,
      height: 1024,
      alt: "Olivia Bennett portrait.",
    },
  },
  {
    quote:
      "The doctors were friendly, professional, and made me feel at ease during every step of my visit - they genuinely cared about my comfort and took time to explain everything clearly",
    name: "Ethan Brooks",
    role: "Cardiology",
    image: {
      src: "/assets/images/testimonials/ethan.png",
      width: 736,
      height: 834,
      alt: "Ethan Brooks portrait.",
    },
  },
  {
    quote:
      "Booking my appointment was quick, smooth, and stress-free, with helpful staff guiding me through the process",
    name: "Sophia Mitchell",
    role: "Pediatrics",
    image: {
      src: "/assets/images/testimonials/sophia.jpg",
      width: 500,
      height: 593,
      alt: "Sophia Mitchell portrait.",
    },
  },
  {
    quote:
      "The doctors were friendly, professional, and made me feel at ease during therapy",
    name: "Liam Hayes",
    role: "Neurology",
    image: {
      src: "/assets/images/testimonials/liam.png",
      width: 683,
      height: 785,
      alt: "Liam Hayes portrait.",
    },
  },
  {
    quote: "Booking my appointment was quick, smooth, and totally stress-free",
    name: "Noah Reed",
    role: "Surgical Care",
    image: {
      src: "/assets/images/testimonials/noah.jpg",
      width: 736,
      height: 920,
      alt: "Noah Reed portrait.",
    },
  },
  {
    quote:
      '"The appointment process was quick and easy, with friendly staff guiding me throughout."',
    name: "Ava Collins",
    role: "Gastroenterology",
    image: {
      src: "/assets/images/testimonials/ava.jpg",
      width: 736,
      height: 937,
      alt: "Ava Collins portrait.",
    },
  },
  {
    quote:
      "I appreciated how clearly everything was explained during my visit, which helped ease any worries I had",
    name: "Grace Foster",
    role: "Mental Health",
    image: {
      src: "/assets/images/testimonials/grace.png",
      width: 1601,
      height: 2400,
      alt: "Grace Foster portrait.",
    },
  },
];

export const homeContent = {
  title: "Check Your Diabetes Risk from a Simple Eye Photo in Seconds",
  description:
    "Upload a photo of your eye. Our AI analyzes it and identifies early indicators for follow-up\u2014fast, painless, and fully remote.",
  aboutWords: [
    "Our",
    "AI",
    "analyzes",
    "eye",
    "images",
    "to",
    "detect",
    "early",
    "signs",
    "of",
    "diabetes",
    "risk",
    "and",
    "helps",
    "track",
    "changes",
    "over",
    "time.",
  ],
  visionTitle: "Simple, fast diabetes risk screening",
  visionDescription:
    "Our AI analyzes a single eye image to assess diabetes risk and track changes over time for both patients and clinicians.",
  visionFeatures: [
    "Get results in under 60 seconds",
    "See clear indicators of your risk",
    "Your data stays private and secure",
  ],
  faqs: [
    {
      question: "How often should I use this diagnostic tool?",
      answer:
        "You can use the tool periodically to monitor potential changes, such as once every few weeks or months. However, it should not replace regular checkups with a healthcare professional. If you notice concerning results, follow up with a doctor.",
    },
    {
      question: "How can I interpret the results?",
      answer:
        "Results are presented as risk levels: low, moderate, or high risk. A higher risk result means you should seek medical advice for further testing. A low-risk result does not guarantee the absence of diabetes, but you are at a very low risk.",
    },
    {
      question: "I already have diabetes - can I still use the diabetes risk tool?",
      answer:
        "Yes, this tool can be useful for both people with and without diabetes.",
    },
    {
      question: "Is my personal health information secure?",
      answer:
        "Yes, your data are protected using encryption and secure storage. Images and results are handled confidentially and are not shared without your consent.",
    },
    {
      question: "Do I need a special camera or app?",
      answer:
        "No, there is no special equipment required. You can use your phone's standard camera, whether it is iOS or Android. Just make sure the image is clear and well-lit for the best results.",
    },
    {
      question: "Are these diagnostic tools?",
      answer:
        "No, this is a risk assessment tool, not a diagnostic device. It is designed to provide general insights based on the image you submit. If you have concerns about your health or receive a high-risk result, you should consult a qualified medical professional for proper testing and advice.",
    },
  ],
  useGuidance: {
    title: "Using the diabetes risk tool over time",
    description:
      "The tool can provide additional context when used consistently, but it should always be interpreted alongside regular medical care.",
    sections: [
      {
        title: "For people with diabetes",
        body:
          "The tool may help you observe general trends over time, which can give additional context alongside your regular monitoring routine. For example, it can offer supportive insights as you manage your condition through medication, diet, and lifestyle changes. For more meaningful observations, use the tool consistently and allow enough time after treatment changes, such as starting or adjusting medication, for effects to stabilize. Especially when using medication, the tool should be used after sufficient time has passed for the medication to take effect, so readings reflect its true impact.",
      },
      {
        title: "Clinical monitoring still matters",
        body:
          "This tool does not replace clinically approved methods like continuous glucose monitoring.",
      },
      {
        title: "For people without diabetes",
        body:
          "The tool offers a quick, non-invasive way to estimate potential risk and monitor changes over time. It may help highlight patterns or early indicators that suggest you should seek further medical evaluation.",
      },
      {
        title: "Screening-only reminder",
        body:
          "In all cases, this tool is intended for screening and informational purposes only. It is not designed to diagnose, treat, or prevent any condition. Always consult a qualified healthcare professional for medical advice, testing, or confirmation.",
      },
    ],
  },
};

export const aboutContent = {
  eyebrow: "About us",
  title: "Building a healthier future through early, explainable screening",
  summary: "We use retinal images to flag diabetes risk in seconds",
  heroButton: "Contact us",
  whoWeAreEyebrow: "Who we are",
  whoWeAreTitle: "Detect diabetes risk through a simple eye scan",
  whoWeAreDescription:
    "Our tool analyzes a single eye photo to detect early signs of diabetes\u2014no needles, no lab tests.",
  whoWeAreNote:
    "This tool provides a preliminary risk screening and is not intended to diagnose diabetes. The final interpretation must be made always by a qualified healthcare medical professional.",
  cards: [
    {
      title: "Our Mission",
      body: "Help people detect diabetes risk early using simple, accessible technology.",
    },
    {
      title: "Our Vision",
      body: "A world where anyone can check their diabetes risk in under a minute.",
    },
    {
      title: "Future Goal",
      body: "Make at-home diabetes screening easy, fast, and widely available.",
    },
  ],
  teamEyebrow: "Our Team",
  teamTitle:
    "Physicians, scientists, and engineers behind needle-free diabetes screening",
};

export const blogContent = {
  eyebrow: "Blogs",
  title: "Latest BioTransportAI updates and coverage",
  summary:
    "Read articles and outside coverage about our screening tools, research direction, and early detection work.",
  articles: [
    {
      title:
        "Your Eye May Know Before You Do: AI Diabetes Screening From a Single Photo",
      description:
        "DF Blog covers BioTransportAI's eye-photo diabetes screening approach and the potential for earlier, more accessible risk assessment.",
      source: "DF Blog",
      date: "April 24, 2026",
      href: "https://diabeticfootonline.com/2026/04/24/your-eye-may-know-before-you-do-ai-diabetesscreening-from-a-single-photo-biotransportai/",
      buttonLabel: "Read article",
    },
  ],
};

export const contactContent = {
  eyebrow: "Contact",
  title: "Connect with us for expert healthcare support",
  sectionTitle: "Get in touch with team",
  sectionDescription:
    "Have a question or need help with something? Reach out and our team will respond shortly",
  contactLinks: [
    {
      label: "contact@biotransportai.com",
      href: "mailto:contact@biotransportai.com",
      type: "email" as const,
    },
    // {
    //   label: "+1 234 567 890",
    //   href: "tel:+1234567890",
    //   type: "phone" as const,
    // },
    {
      label: "Pasadena, CA",
      type: "location" as const,
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "John Carter",
    emailLabel: "Email Address",
    emailPlaceholder: "yourname@gmail.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+123 456 789",
    messageLabel: "Message",
    messagePlaceholder: "Type your message here !!!",
    buttonLabel: "Submit your form",
    note: "We'll be back within 48 hours or sooner",
  },
};

export const policyContent = {
  eyebrow: "Terms & privacy",
  title: "Terms, privacy, and screening disclaimer",
  description:
    "Review these terms before using the diabetes screening tool. Continuing means you understand how anonymized images may be used and the limits of the screening result.",
  sections: [
    {
      title: "Consent to use anonymized image data",
      body:
        "By continuing, you agree that BioTransport may use your anonymized image data for analysis, service operation, quality review, and compliance with stated privacy and usage policies.",
    },
    {
      title: "Anonymized image handling",
      body:
        "Uploaded images are handled as anonymized screening data and are not stored with direct identifiers such as name, email, or phone number. Do not include personally identifying information in images or free-text fields.",
    },
    {
      title: "No medical or personal decision responsibility",
      body:
        "The developers and operators assume no responsibility for clinical, medical, or personal decisions made based on the results provided by this tool.",
    },
    {
      title: "Screening-only limitation",
      body:
        "This tool is intended for screening and informational purposes only. It is not designed to diagnose, treat, or prevent any condition. Always consult a qualified healthcare professional for medical advice, testing, or confirmation.",
    },
  ],
};

export const sharedContent = {
  brand: "BioTransport Systems Development",
  footerDescription:
    "Stay up to date on the latest features and releases by joining our socials",
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "Try now", href: "/try-now" },
    { label: "About", href: "/about-us" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
  ],
  footerSocial: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/biotransport-systems-development/",
    },
  ],
  screeningMenu: [
    { label: "Diabetes", href: "/", current: true },
    { label: "Anemia", href: "https://anemia.biotransportai.com/", current: false },
    { label: "Glaucoma", href: "", current: false },
  ],
  footerContact: [
    {
      label: "contact@biotransportai.com",
      href: "mailto:contact@biotransportai.com",
      type: "email" as const,
    },
    {
      label: "Pasadena, CA",
      type: "location" as const,
    },
  ],
  ctaTitle: "Let\u2019s stop diabetes before it steals another life",
  ctaDescription:
    "Check your diabetes risk in under a minute and get instant results.",
};
