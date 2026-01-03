
import React from 'react';
import { 
  Stethoscope, 
  Smile, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Scissors, 
  CircleDot, 
  Grid 
} from 'lucide-react';

export const DOCTOR_NAME = "Dr. Abhishek Pati";
export const YOUTUBE_VIDEO_ID = "JGVb-oQBpNk"; 
export const SUBSCRIBER_COUNT = "1.41L+";

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'About Doctor', href: '#about' },
  { label: 'Media', href: '#media' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    alt: "Modern Dental Treatment Chair",
    category: "Treatment Room"
  },
  {
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    alt: "Sai Dental Clinic Reception Area",
    category: "Reception"
  },
  {
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    alt: "Sterilized Dental Equipment",
    category: "Equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    alt: "Advanced Digital X-Ray Setup",
    category: "Technology"
  },
  {
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    alt: "Clinic Consultation Area",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    alt: "Comfortable Patient Waiting Lounge",
    category: "Reception"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rahul Mohanty",
    role: "Local Resident",
    feedback: "Dr. Abhishek explained the entire root canal process so clearly. The treatment was absolutely painless, and the clinic's hygiene standards are top-notch.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Ananya Dash",
    role: "Software Engineer",
    feedback: "I was very nervous about my wisdom tooth extraction, but the team made me feel so comfortable. Professional care and very reasonable pricing for the quality provided.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ananya"
  },
  {
    name: "Sanjeeb Kumar",
    role: "Business Owner",
    feedback: "Best dental clinic in Bhubaneswar. I've been following Dr. Abhishek on YouTube for a year and finally visited for implants. The results are amazing!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sanjeeb"
  },
  {
    name: "Priya Sahoo",
    role: "Teacher",
    feedback: "Very ethical approach. They don't suggest unnecessary treatments. My kids also love visiting here because of the friendly environment.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Amit Patnaik",
    role: "Student",
    feedback: "Got my braces done here. Very modern equipment and the staff is extremely helpful with scheduling. Highly recommended for students!",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=amit"
  },
  {
    name: "Sunita Biswal",
    role: "Homemaker",
    feedback: "The clinic is very clean and modern. Dr. Abhishek is very patient and listens to all concerns before starting any procedure. Excellent experience.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sunita"
  }
];

export const YOUTUBE_VIDEOS = [
  {
    id: "JGVb-oQBpNk",
    title: "Dos and Don’ts in Dentistry | Expert Tips",
    category: "Expert Guidance"
  },
  {
    id: "21tRaTr8DTM",
    title: "Essentials for a Top Rated Dental Clinic",
    category: "Clinic Insights"
  },
  {
    id: "PQUdPQJdQLw",
    title: "Root Canal Revealed: Pain-Free Experience",
    category: "Treatment Guide"
  },
  {
    id: "13MWqH43_4M",
    title: "Dental Implants: Expert Explanation",
    category: "Advanced Care"
  },
  {
    id: "vGGqX8RdDC4",
    title: "Improving Patient Experience in Dentistry",
    category: "Professional Tips"
  },
  {
    id: "eZ4NkaAoCls",
    title: "Modern Clinic Interior & Treatment Charges",
    category: "Clinic Tour"
  }
];

export const TREATMENTS = [
  {
    title: 'Dental Implants',
    description: 'Permanent and natural-looking tooth replacement.',
    icon: <CircleDot className="w-8 h-8 text-dental-blue" />,
  },
  {
    title: 'Wisdom Tooth Removal',
    description: 'Safe and painless extraction by experts.',
    icon: <Scissors className="w-8 h-8 text-dental-teal" />,
  },
  {
    title: 'Root Canal Treatment',
    description: 'Save your natural tooth with advanced care.',
    icon: <Activity className="w-8 h-8 text-dental-blue" />,
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten your smile with modern solutions.',
    icon: <Grid className="w-8 h-8 text-dental-teal" />,
  },
  {
    title: 'Smile Designing',
    description: 'Enhance confidence with aesthetic dentistry.',
    icon: <Sparkles className="w-8 h-8 text-dental-blue" />,
  },
  {
    title: 'General Dentistry',
    description: 'Complete oral care for all age groups.',
    icon: <Stethoscope className="w-8 h-8 text-dental-teal" />,
  },
];

export const CONTACT_INFO = {
  address: 'Tamando, Bhubaneswar, Odisha 752054',
  phone: '+91 90000 00000',
  whatsapp: '919000000000',
  email: 'info@saidentalclinic.com',
  timings: 'Mon - Sat: 10:00 AM - 8:00 PM',
  googleMaps: 'https://maps.google.com/?q=Sai+Dental+Clinic+Tamando+Bhubaneswar'
};
