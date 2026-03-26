export const client = {
  // Business Details
  name: "Constant Gardens",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Hailsham.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07956 007411",
  email: "",
  website: "",

  // Location
  address: "Hailsham",
  city: "Hailsham",
  county: "",
  postcode: "",
  basedIn: "Hailsham",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Sam Jones", rating: 5, text: "Barney and his team were friendly, attentive and provided us with a good quality service. I have already recommended Constant Gardens to my neighbours and friends. Sam and Beth, October 2025", date: "4 months ago" },
    { name: "Monica Ray", rating: 5, text: "Our old patio was past its best and the constant weeding and sweeping was a real pain.  Barney came along to quote and immediately understood our poorly drawn plan and offered more suggestions that were very welcome.  His work and that of his team was very professional.  They turned up on time, worked all day, were polite and courteous and every day cleaned and tidied the site.  The weather was not on our side but it didn't stop their enthusiasm for the job.  To say we are pleased with the end result is an understatement.  I keep going out to just sit and look at our new and much improved garden.", date: "5 months ago", badge: "Local Guide" },
    { name: "Sandy Scrivener", rating: 5, text: "I can highly recommend Constant Gardens, they were extremely polite, hard working and have completed the job on time to my complete satisfaction. My gazebo looks great. Thank you very much.", date: "8 months ago" },
    { name: "Rebecca Mills", rating: 5, text: "We love our new patio and fence! Barney and his team did a fantastic job, communication was great throughout and the work was completed quickly and to a high standard. From the beginning Barney was knowledgeable, professional and knew exactly what we wanted. We would highly recommend Constant Gardens to anyone looking at improving their outdoor space.", date: "9 months ago" },
    { name: "Joanne Rogers", rating: 5, text: "We are absolutely delighted with the results of our new composite decking, expertly installed by Barney and his team. They replaced our old patio with great care and attention to detail, delivering a high-quality finish that has transformed our outdoor space. The work was completed efficiently, and the team was professional and friendly throughout. We highly recommend Constant Gardens for anyone looking to improve their garden or outdoor area.", date: "10 months ago" },
    { name: "Stuart Dewhurst", rating: 5, text: "We couldn't be happier with the fantastic job Barney and team did on our driveway! From start to finish, his professionalism, attention to detail, and dedication to quality were outstanding. He took the time to understand our vision, offered helpful suggestions, and ensured the final result exceeded our expectations. The workmanship is flawless, and it’s clear he takes immense pride in his craft. Our driveway has completely transformed the look of our home, and we’ve already received so many compliments from neighbors. Thank you, Barney, for your hard work and exceptional service! Highly recommended!", date: "a year ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Constant Gardens | Landscaper in Hailsham",
    description: "Professional landscaper in Hailsham. 5.0-star rated on Google. Call for a free quote.",
  },
};
