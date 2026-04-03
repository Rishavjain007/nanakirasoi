import Hero from '../assets/image/b3.png'
export const heroData = {
  title: "Feeding Hope, One Meal at a Time",
  subtitle:
    "Join us in our mission to eliminate hunger and bring smiles to those in need",
  image: Hero,
  cta: {
    primary: "Donate Now",
    secondary: "Learn More",
  },
};

import image1 from "../assets/image/b2.png"
export const aboutData = {
  mission:
    "At Nanakirasoi, we believe no one should go to bed hungry. Our mission is to provide free, nutritious meals to underprivileged communities and bring hope to those facing food insecurity.",
  vision:
    "A world where every person has access to nutritious food and no one suffers from hunger.",
  values: ["Compassion", "Integrity", "Community", "Dignity", "Service"],
  stats: [
    { number: "50,000+", label: "Meals Served" },
    { number: "1,200+", label: "Families Helped" },
    { number: "150+", label: "Active Volunteers" },
    { number: "25+", label: "Distribution Centers" },
  ],
  image: image1,
};

const images = import.meta.glob('../assets/image/*.{jpg,jpeg}', {
  eager: true,
  import: 'default'
});

export const galleryImages = Object.values(images).map((img, index) => ({
  id: index + 1,
  url: img,
  title: `Image ${index + 1}`,
  description: `Gallery image ${index + 1}`
}));

export const blogPosts = [
  {
    id: 1,
    title: "The Impact of Community Kitchens in Fighting Hunger",
    excerpt:
      "Discover how our community kitchens are making a difference in the lives of thousands of families struggling with food insecurity.",
    date: "2024-03-15",
    author: "Priya Sharma",
    category: "Impact Stories",
    image: "https://images.unsplash.com/photo-1593113628609-8e2e4e6d6f8e",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Volunteer Spotlight: Meet Our Everyday Heroes",
    excerpt:
      "Our volunteers are the backbone of Nanakirasoi. Read inspiring stories of people who dedicate their time to serve the community.",
    date: "2024-03-10",
    author: "Rajesh Kumar",
    category: "Volunteers",
    image: "https://images.unsplash.com/photo-1593113616828-6f22bca04804",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Nutrition Matters: Beyond Just Filling Stomachs",
    excerpt:
      "Learn about our approach to providing not just food, but nutritious meals that support health and well-being.",
    date: "2024-03-05",
    author: "Dr. Anjali Desai",
    category: "Health & Nutrition",
    image: "https://images.unsplash.com/photo-1593113617596-f6b3e2b3f8b1",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "How Your Donation Makes a Real Difference",
    excerpt:
      "Transparency matters. See exactly how your contributions are used to feed families and create lasting impact.",
    date: "2024-02-28",
    author: "Vikram Patel",
    category: "Transparency",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d64955e",
    readTime: "4 min read",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sunita Devi",
    role: "Beneficiary",
    content:
      "During the toughest time of my life, Nanakirasoi provided meals for my family. Their kindness and support gave us hope when we had none. I'm forever grateful.",
    rating: 5,
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Volunteer",
    content:
      "Volunteering with Nanakirasoi has been the most rewarding experience. Seeing the smiles on people's faces when they receive a warm meal is priceless.",
    rating: 5,
    location: "Delhi",
  },
  {
    id: 3,
    name: "Lakshmi Iyer",
    role: "Monthly Donor",
    content:
      "I've been donating to Nanakirasoi for 2 years. Their transparency and genuine impact on communities make me proud to support their mission.",
    rating: 5,
    location: "Bangalore",
  },
  {
    id: 4,
    name: "Mohammed Ansari",
    role: "Beneficiary",
    content:
      "The respect and dignity with which Nanakirasoi serves food is remarkable. They don't just feed stomachs, they feed souls with compassion.",
    rating: 5,
    location: "Hyderabad",
  },
  {
    id: 5,
    name: "Priya Reddy",
    role: "Corporate Partner",
    content:
      "Our company partners with Nanakirasoi for CSR activities. Their organized approach and measurable impact make them an excellent partner.",
    rating: 5,
    location: "Pune",
  },
  {
    id: 6,
    name: "Ramesh Gupta",
    role: "Volunteer Coordinator",
    content:
      "I've worked with many NGOs, but Nanakirasoi's dedication to their cause and efficient operations stand out. A truly impactful organization.",
    rating: 5,
    location: "Chennai",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How can I volunteer with Nanakirasoi?",
    answer:
      "You can register as a volunteer through our Contact page or by visiting our nearest distribution center. We welcome volunteers of all ages and backgrounds. Whether you can spare a few hours a week or a day a month, your contribution makes a difference.",
  },
  {
    id: 2,
    question: "Where does my donation go?",
    answer:
      "100% of your donation goes directly to our food programs. We use funds to purchase ingredients, maintain community kitchens, and operate distribution centers. Our administrative costs are covered by separate grants and corporate partnerships.",
  },
  {
    id: 3,
    question: "How many people do you feed daily?",
    answer:
      "On average, we serve over 2,000 meals daily across our 25+ distribution centers. During special drives and festivals, this number can go up to 5,000 meals per day.",
  },
  {
    id: 4,
    question: "Can I donate food or groceries instead of money?",
    answer:
      "Yes! We accept non-perishable food items, grains, pulses, and cooking oil at our collection centers. Please contact us beforehand to coordinate the donation and ensure we can store the items properly.",
  },
  {
    id: 5,
    question: "Do you provide meals only in specific areas?",
    answer:
      "We currently operate in 25 locations across major cities. However, we're constantly expanding. If you'd like to start a Nanakirasoi center in your area, please reach out to us through the Contact page.",
  },
  {
    id: 6,
    question: "How do you ensure food quality and hygiene?",
    answer:
      "Food safety is our top priority. All our kitchens follow strict hygiene protocols, our staff undergo regular health checks, and we only use fresh, quality ingredients. Our facilities are regularly inspected and certified by local health authorities.",
  },
  {
    id: 7,
    question: "Can I sponsor meals for a specific community or event?",
    answer:
      "Absolutely! We offer meal sponsorship programs where you can sponsor daily meals for a week, month, or any duration. You can also sponsor meals for special occasions, festivals, or in memory of loved ones.",
  },
  {
    id: 8,
    question: "How can my company partner with Nanakirasoi?",
    answer:
      "We welcome corporate partnerships through CSR programs, employee volunteering initiatives, or sponsorships. Contact us at partnerships@nanakirasoi.org to discuss how we can collaborate.",
  },
];

export const donationOptions = [
  {
    id: 1,
    amount: 500,
    impact: "Feeds 10 people for one day",
    popular: false,
  },
  {
    id: 2,
    amount: 1000,
    impact: "Provides meals for a family for a week",
    popular: true,
  },
  {
    id: 3,
    amount: 2500,
    impact: "Supports a community kitchen for a day",
    popular: false,
  },
  {
    id: 4,
    amount: 5000,
    impact: "Feeds 100 people for one day",
    popular: false,
  },
];

export const programs = [
  {
    id: 1,
    title: "Daily Meal Distribution",
    description:
      "Our flagship program serves hot, nutritious meals to homeless individuals and families living below the poverty line. Every day, our volunteers prepare and distribute meals at 25+ locations.",
    icon: "utensils",
  },
  {
    id: 2,
    title: "Community Kitchens",
    description:
      "We operate community kitchens where volunteers and beneficiaries come together to prepare meals. This fosters dignity, community spirit, and provides employment opportunities.",
    icon: "home",
  },
  {
    id: 3,
    title: "Mobile Food Vans",
    description:
      "Our mobile units reach remote areas and underserved communities, ensuring that geography is not a barrier to accessing nutritious food.",
    icon: "truck",
  },
  {
    id: 4,
    title: "Festival Food Drives",
    description:
      "During festivals and special occasions, we organize large-scale food distribution drives, spreading joy and ensuring no one is left behind during celebrations.",
    icon: "heart",
  },
  {
    id: 5,
    title: "Nutrition Education",
    description:
      "We conduct workshops on nutrition, hygiene, and healthy eating habits for beneficiary communities, empowering them with knowledge for better health.",
    icon: "book",
  },
  {
    id: 6,
    title: "Emergency Relief",
    description:
      "During natural disasters and emergencies, our rapid response team provides immediate food relief to affected communities.",
    icon: "shield",
  },
];

export const contactInfo = {
  email: "contact@nanakirasoi.org",
  phone: "+91 98765 43210",
  address: "123 Service Street, Community Center, Mumbai - 400001, India",
  socialMedia: {
    facebook: "https://facebook.com/nanakirasoi",
    twitter: "https://twitter.com/nanakirasoi",
    instagram: "https://instagram.com/nanakirasoi",
    linkedin: "https://linkedin.com/company/nanakirasoi",
  },
};
