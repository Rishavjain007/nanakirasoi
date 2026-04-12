import Hero from "../assets/image/b3.png";
export const heroData = {
  title: "Meals With Dignity. Hope On Every Plate.",
  subtitle:
    "Nana ki Rasoi is a woman-led and run non-profit, creating inclusive community kitchens, where anyone can enjoy a nourishing meal and pay what they can.",
  image: Hero,
  cta: {
    primary: "Donate Now",
    secondary: "Learn More",
  },
};

import image1 from "../assets/image/b2.png";
export const aboutData = {
  mission:
    "At Nana Ki Rasoi, we are working to build community kitchens where anyone can access a warm, nutritious meal in a space that feels welcoming, respectful, and human. We believe hunger is not just about food; it is also about dignity, comfort, and the need to feel cared for. Our mission is to make hunger relief more humane, one meal at a time.",
  vision: " A world where no one has to choose between hunger and dignity.",
  values: ["Compassion", "Dignity", "Community", "Belonging", "Integrity"],
  stats: [
    { number: "2000+", label: "Meals Served" },
    { number: "200+", label: "Families Helped" },
    { number: "150+", label: "Active Volunteers" },
    { number: "25+", label: "Distribution Centers" },
  ],
  image: image1,
};

const images = import.meta.glob("../assets/image/*.{jpg,jpeg}", {
  eager: true,
  import: "default",
});

export const galleryImages = Object.values(images).map((img, index) => ({
  id: index + 1,
  url: img,
  title: `Image ${index + 1}`,
  description: `Gallery image ${index + 1}`,
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
    question: "⁠What is Nana Ki Rasoi?",
    answer:
      "Nana Ki Rasoi is building dignity-first community kitchens where anyone can access a warm, nutritious meal in a welcoming and respectful space and pay what they can.",
  },
  {
    id: 2,
    question: "What makes Nana Ki Rasoi different?",
    answer:
      "Our focus is on dignity, not charity. We want to create spaces where people can sit, eat, and feel cared for, not stand in line for handouts.",
  },
  {
    id: 3,
    question: "Who can access meals at Nana Ki Rasoi?",
    answer:
      "Our vision is to create spaces that are open and welcoming to anyone who needs a meal, without judgment or exclusion.",
  },
  {
    id: 4,
    question: "⁠What does “pay what you can” mean?",
    answer:
      "Those who are able to contribute may do so, while those who cannot are still welcomed and served with the same dignity and care.",
  },
  {
    id: 5,
    question: " ⁠How does Nana Ki Rasoi help reduce hunger?",
    answer:
      "We aim to reduce hunger through community kitchens that provide fresh meals in dignified spaces, while also strengthening community care and support.",
  },
  {
    id: 6,
    question: "How can I donate or support your work?",
    answer:
      "You can support us through financial contributions, in-kind donations, volunteering, partnerships, or by helping spread the word.",
  },
  {
    id: 7,
    question: "What kinds of donations do you accept?",
    answer:
      "We accept monetary support as well as essentials such as groceries, kitchen supplies, clothing, books, educational materials, and hygiene products, depending on current needs.",
  },
  {
    id: 8,
    question: "⁠How will my donation be used?",
    answer:
      "Donations support meal preparation, kitchen setup, daily operations, staff support, and other community-responsive initiatives.",
  },
  {
    id: 9,
    question: "Do you accept food donations?",
    answer:
      "Yes, depending on our current requirements and quality standards. We request that food donations be coordinated with us in advance.",
  },
  {
    id: 10,
    question: " ⁠How do you ensure food quality and safety?",
    answer:
      "We are committed to clean preparation practices, careful handling, and responsible sourcing to ensure meals are safe and nutritious.",
  },
  {
    id: 11,
    question: " ⁠Can I volunteer with Nana Ki Rasoi?",
    answer:
      "Yes. We welcome people who want to contribute their time and skills to support our work as we grow.",
  },
  {
    id: 12,
    question: "Can organizations or businesses collaborate with you?",
    answer:
      "Yes. We welcome partnerships through sponsorship, in-kind support, employee volunteering, and other collaborative initiatives.",
  },
  {
    id: 13,
    question: "Where do you currently operate?",
    answer:
      "We are currently focused on building our work in Delhi, with the vision of expanding over time.",
  },
  {
    id: 14,
    question: "How can I stay updated on your activities?",
    answer:
      "You can stay updated through our website and social media channels, where we share stories, milestones, and opportunities to get involved.",
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
    title: "Festival & Seasonal Food Drives",
    description:
      "During festivals and other key moments in the year, we organize special food drives to ensure that more people can experience comfort, celebration, and care through a shared meal.",
    icon: "heart",
  },
  {
    id: 2,
    title: "Community Kitchens",
    description:
      "We are building welcoming community kitchens where anyone can access a warm, nutritious meal in a space rooted in dignity, respect, and belonging.",
    icon: "home",
  },
  {
    id: 3,
    title: "Mobile Food Vans",
    description:
      "Our mobile food vans are designed to reach communities where access to reliable meals is limited, helping us take food and care directly to people who need it most.",
    icon: "truck",
  },
  {
    id: 4,
    title: "Community Support Projects",
    description:
      "Beyond meals, we hope to support people through small, need-based initiatives such as clothing drives, hygiene support, educational materials, and other essentials.",
    icon: "utensils",
  },
  {
    id: 5,
    title: "Women-Led Livelihoods",
    description:
      "We want Nana Ki Rasoi to create meaningful livelihood opportunities for women, enabling them to play a central role in running and sustaining community-based food initiatives.",
    icon: "book",
  },
  {
    id: 6,
    title: "Emergency Relief Support",
    description:
      "In times of crisis or urgent need, we aim to respond with immediate food support and essential supplies for affected individuals and families.",
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
