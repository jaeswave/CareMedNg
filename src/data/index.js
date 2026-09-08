import {
  FaStethoscope,
  FaCalendarCheck,
  FaHouseMedical,
} from "react-icons/fa6";
import { Clock, Heart, CheckCircle, Shield } from "lucide-react";
import { FaUsers, FaHeart, FaShieldAlt } from "react-icons/fa";
import amuwoCardioFetalFlyer from "../assets/amuwo/amuwo-cardio-fetal-flyer.jpg";
import amuwoCtgFlyer from "../assets/amuwo/amuwo-ctg-flyer.jpg";
import amuwoBppBrochure from "../assets/amuwo/amuwo-bpp-brochure.jpg";
import amuwoPartnershipFlyer from "../assets/amuwo/amuwo-partnership-flyer.jpg";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact-us" },
];

export const howItWorks = [
  {
    number: 1,
    title: "Choose a Service",
    description:
      "Select from available diagnostic and medical slots (starting with Holter ECG).",
    Icon: FaStethoscope,
  },
  {
    number: 2,
    title: "Book Instantly",
    description: "Reserve your appointment online, by phone, or via WhatsApp.",
    Icon: FaCalendarCheck,
  },
  {
    number: 3,
    title: "Get Quality Care",
    description:
      "Visit the selected facility or enjoy at-home service where available.",
    Icon: FaHouseMedical,
  },
];

export const whyCaremed = [
  {
    title: "Fast Access",
    description: "Fast access to trusted healthcare providers",
    Icon: Clock,
  },
  {
    title: "Affordable",
    description: "Affordable services powered by underused capacity",
    Icon: Heart,
  },
  {
    title: "Easy Booking",
    description: "Easy booking with no long waits",
    Icon: CheckCircle,
  },
  {
    title: "Quality Assured",
    description: "Quality assured partnerships with vetted clinics and labs",
    Icon: Shield,
  },
];

export const currentService = {
  badge: "Available Now",
  title: "Holter ECG Monitoring",
  description:
    "A 24-hour cardiac rhythm monitor for evaluating palpitations, dizziness, or suspected arrhythmias.",
  points: [
    "Includes device fitting, patient instructions, and physician review",
    "Same-day or next-day appointments",
    "Available at partner clinics or home service (where applicable)",
  ],
  buttonText: "Book Holter ECG",
};

export const upcomingServices = {
  badge: "Coming Soon",
  title: "Expanding Services",
  description: "We're rapidly expanding our service offerings",
  items: [
    "Laboratory Blood Tests",
    "ECG and Echocardiography",
    "General Ultrasound",
    "Radiology Services (CT, MRI)",
    "Specialist Consultations",
  ],
};

export const whoWeServe = [
  {
    icon: FaUsers,
    title: "Individuals",
    description: "Individuals looking for affordable, timely diagnostics",
  },
  {
    icon: FaHeart,
    title: "Clinics",
    description: "Clinics needing overflow support",
  },
  {
    icon: FaShieldAlt,
    title: "Employers & HMOs",
    description: "Employers and HMOs seeking efficient partnerships",
  },
];

export const partnerBenefits = [
  "Seamless patient referrals",
  "Centralized customer support",
  "Transparent reporting",
  "Guaranteed payout per completed service",
];

export const testimonials = [
  {
    name: "Sarah O.",
    location: "Lagos, Nigeria",
    rating: 5,
    quote:
      "Booked my Holter ECG in 2 minutes and had it done same day! Caremed Connect is a game-changer.",
  },
  {
    name: "Emeka T.",
    location: "Abuja, Nigeria",
    rating: 5,
    quote:
      "Fast, reliable, and professional. This platform helped me find a clinic near me in minutes.",
  },
  {
    name: "Aisha B.",
    location: "Kano, Nigeria",
    rating: 4,
    quote:
      "The process was smooth and the follow-up was excellent. Will definitely recommend to friends.",
  },
  {
    name: "John D.",
    location: "Ibadan, Nigeria",
    rating: 5,
    quote:
      "I scheduled my mother's ultrasound using Caremed Connect. It was convenient and efficient.",
  },
  {
    name: "Chidinma U.",
    location: "Enugu, Nigeria",
    rating: 4,
    quote:
      "Loved the ease of use and quick response time. The home service was a bonus!",
  },
];

export const categories = [
  {
    icon: "🫀",
    title: "Cardiac Diagnostics",
    services: [
      "7-day Holter ECG Monitoring",
      "Holter ECG (24/48-hour monitoring)",
      "24-hour Ambulatory Blood Pressure Monitoring (ABPM)",
      "Resting 12-Lead ECG (at home or clinic)",
      "Echocardiography (Heart Ultrasound)",
      "Cardiac Stress Test (Treadmill ECG)",
    ],
  },
  {
    icon: "🧬",
    title: "Laboratory Services",
    services: [
      "Full Blood Count (FBC)",
      "Liver and Kidney Function Tests",
      "Blood Sugar (Fasting/Random/OGTT)",
      "Lipid Profile (Cholesterol Test)",
      "Hormonal Assays",
      "Infectious Disease Screening (HIV, Hepatitis B & C, Malaria)",
      "COVID-19 PCR and Rapid Tests",
      "Cancer Markers (e.g., PSA, CA 125)",
    ],
  },
  {
    icon: "🖥️",
    title: "Radiology & Imaging",
    services: [
      "Ultrasound (General, Obstetric, Abdominal, Pelvic, Breast, etc.)",
      "X-Ray (Chest, Limb, Spine, etc.)",
      "CT Scan (Head, Chest, Abdomen, etc.)",
      "MRI (Brain, Spine, Joint, etc.)",
      "Mammography",
      "Fluoroscopy (HSG, Barium meal, IVU)",
    ],
  },
  {
    icon: "🧠",
    title: "Neurology Diagnostics",
    services: [
      "Electroencephalogram (EEG)",
      "Nerve Conduction Studies (NCS/EMG)",
      "Brain Imaging (MRI/CT Scan)",
    ],
  },
  {
    icon: "👩‍⚕️",
    title: "Specialist Referrals & Booking Support",
    services: [
      "Cardiologist Appointments",
      "Pathologist Review",
      "Radiologist Review",
      "Internal Medicine",
      "Gynecologist & Obstetrician Access",
      "Pediatrician",
      "Endocrinologist (Diabetes, Thyroid, etc.)",
    ],
  },
  {
    icon: "🏠",
    title: "Home-Based & Corporate Services",
    services: [
      "Home ECG & Blood Pressure Monitoring",
      "Home Blood Sample Collection",
      "Corporate Wellness Screening Packages",
      "On-site Diagnostic Camps for Organizations",
    ],
  },
  {
    icon: "📲",
    title: "Booking is Easy",
    services: ["Our Website", "WhatsApp", "Partner Clinics and Facilities"],
  },
];



export   const partnerOptions = [
  {
    id: 1,
    title: "Healthcare Providers",
    description: "Join our network of healthcare professionals",
  },
  {
    id: 2,
    title: "Technology Partners",
    description: "Integrate with our healthcare platform",
  },
  {
    id: 3,
    title: "Corporate Wellness",
    description: "Bring our services to your organization",
  },
];

  export const services = [
    { id: 1, name: "ECG Monitoring" },
    { id: 2, name: "Holter Monitoring" },
    { id: 3, name: "Cardiac Stress Testing" },
    { id: 4, name: "Ambulatory Blood Pressure" },
    { id: 5, name: "Telemedicine Consultation" },
    { id: 6, name: "Home Health Services" },
  ];





  // ---------------------------------------------------------------------------
// Amuwo Odofin Maternal & Child Centre — Cardio-Fetal Diagnostic Partnership
// ---------------------------------------------------------------------------
export const amuwoServices = [
  {
    title: "Biophysical Profile (BPP) + CTG",
    description:
      "Combined ultrasound and non-stress test that scores five key signs of your baby's well-being before birth.",
  },
  {
    title: "Cardiotocography (CTG) / Non-Stress Test",
    description:
      "Monitors your baby's heartbeat and uterine contractions to confirm your baby is doing well.",
  },
  {
    title: "Electrocardiography (ECG)",
    description: "Heart-rhythm check for mothers.",
  },
  {
    title: "Echocardiogram",
    description:
      "Advanced heart ultrasound for both mothers and children.",
  },
  {
    title: "Paediatric Ultrasound",
    description:
      "Gentle, accurate scans for babies and children, including Transfontanelle Ultrasound.",
  },
];

export const amuwoWhyItMatters = [
  {
    title: "Early detection saves lives",
    description:
      "Timely diagnostics can catch complications before they become emergencies.",
  },
  {
    title: "Peace of mind for you and your family",
    description:
      "Regular monitoring means fewer surprises and more confidence through pregnancy.",
  },
  {
    title: "Better outcomes for a healthier tomorrow",
    description:
      "Consistent antenatal care leads to healthier mothers and babies.",
  },
];

export const amuwoGallery = [
  {
    src: amuwoCardioFetalFlyer,
    alt: "Amuwo MCC Cardio-Fetal Diagnostic Service flyer",
  },
  {
    src: amuwoCtgFlyer,
    alt: "Is your baby still kicking? Book your CTG today",
  },
  {
    src: amuwoBppBrochure,
    alt: "Biophysical Profile (BPP) information brochure",
  },
  {
    src: amuwoPartnershipFlyer,
    alt: "Amuwo Odofin Maternal & Child Centre and Caremed Connect partnership flyer",
  },
];

export const amuwoContact = {
  phone: "+2348077779089",
  phoneDisplay: "0807 777 9089",
  email: "support@caremedng.com",
  address: "Amuwo Odofin Maternal & Child Centre, Amuwo Odofin, Lagos",
  whatsappLink:
    "https://wa.me/2348077779089?text=Hello%2C%20I%27d%20like%20to%20book%20a%20Cardio-Fetal%20Diagnostic%20service%20at%20Amuwo%20MCC",
};

// Biophysical Profile (BPP) reference scoring, sourced from the Amuwo MCC
// patient brochure — used on the Amuwo partnership detail page.
export const amuwoBppReasons = [
  "Your pregnancy has gone past your due date.",
  "You have high blood pressure or pre-eclampsia.",
  "You have diabetes.",
  "Your baby's movements have reduced.",
  "Your baby is smaller than expected.",
  "You have too much or too little amniotic fluid.",
  "You have had previous pregnancy complications.",
  "You are carrying twins or other multiple pregnancies.",
  "Your doctor wants to monitor your baby's well-being.",
];

export const amuwoBppAssessment = [
  "Baby's breathing movements",
  "Baby's body movements",
  "Baby's muscle tone",
  "Amount of amniotic fluid",
  "Baby's heart rate response (using CTG/NST)",
];

export const amuwoBppScoring = [
  { range: "8 – 10", meaning: "Your baby is doing well." },
  {
    range: "6",
    meaning: "Your doctor may recommend further monitoring or repeat testing.",
  },
  {
    range: "4 or below",
    meaning:
      "Your doctor may advise urgent assessment or delivery depending on your pregnancy.",
  },
];

export const amuwoUrgentSigns = [
  "Reduced or absent baby movements",
  "Vaginal bleeding",
  "Leaking of fluid",
  "Severe abdominal pain",
  "Regular painful contractions before your due date",
  "Severe headache, blurred vision or swelling",
  "Any symptoms that concern you",
];
