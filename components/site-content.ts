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
    width: 696,
    height: 695,
    alt: "BioTransport assessment flow shown on a phone.",
  },
  aboutDoctor: {
    src: "/assets/images/about/screening-doctor.png",
    width: 1024,
    height: 1536,
    alt: "Doctor supporting a screening patient.",
  },
  aboutNurse: {
    src: "/assets/images/about/support-nurse.png",
    width: 1024,
    height: 1389,
    alt: "Support nurse answering a call.",
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
    "This tool provides a preliminary risk screening and is not intended to diagnose diabetes. Always consult a qualified healthcare professional for medical advice.",
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

export const contactContent = {
  eyebrow: "Contact",
  title: "Connect with us for expert healthcare support",
  sectionTitle: "Get in touch with team",
  sectionDescription:
    "Have a question or need help with something? Reach out and our team will respond shortly",
  contactLinks: [
    {
      label: "aninik215@gmail.com",
      href: "mailto:aninik215@gmail.com",
      type: "email" as const,
    },
    // {
    //   label: "+1 234 567 890",
    //   href: "tel:+1234567890",
    //   type: "phone" as const,
    // },
    {
      label: "Pasadena, CA",
      href: "https://google.com/maps/place/Pasadena,+CA/data=!4m2!3m1!1s0x80c2c2dc38330b51:0x52b41161ad18f4a?sa=X&ved=1t:242&ictx=111",
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

export const sharedContent = {
  brand: "BioTransport Systems Development",
  footerDescription:
    "Stay up to date on the latest features and releases by joining our socials",
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "Try now", href: "/try-now" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ],
  footerContact: [
    {
      label: "aninik215@gmail.com",
      href: "mailto:aninik215@gmail.com",
      type: "email" as const,
    },
    {
      label: "Pasadena, CA",
      href: "https://maps.app.goo.gl/BQZR5eSnnjG1gJoT6",
      type: "location" as const,
    },
  ],
  ctaTitle: "Let\u2019s stop diabetes before it steals another life",
  ctaDescription:
    "Check your diabetes risk in under a minute and get instant results.",
};
