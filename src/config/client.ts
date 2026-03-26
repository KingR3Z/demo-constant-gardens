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
    { name: "Joanne Rogers", rating: 5, text: "We are absolutely delighted with the results of our new composite decking, expertly installed by Barney and his team. They replaced our old patio with great care and attention to detail, delivering a high-quality finish that has transformed …  ", date: "10 months ago" },
    { name: "Monica Ray", rating: 5, text: "Our old patio was past its best and the constant weeding and sweeping was a real pain.  Barney came along to quote and immediately understood our poorly drawn plan and offered more suggestions that were very welcome.  His work and that of …  ", date: "5 months ago" },
    { name: "Sam Jones", rating: 5, text: "Barney and his team were friendly, attentive and provided us with a good quality service. I have already recommended Constant Gardens to my neighbours and friends. …  ", date: "4 months ago" },
    { name: "Rebecca Mills", rating: 5, text: "We love our new patio and fence! Barney and his team did a fantastic job, communication was great throughout and the work was completed quickly and to a high standard. From the beginning Barney was knowledgeable, professional and knew …  ", date: "9 months ago" },
    { name: "John Marchant", rating: 5, text: "We first contacted Constant Gardens because they were fairly local specialists and had good reviews.  We are extremely pleased we did.  They designed and built a lovely new rear patio and steps for us on a very difficult sloping garden. …  ", date: "4 years ago" },
    { name: "Tom Kilpatrick", rating: 5, text: "Amazing work from start to finish! Barney was professional, reliable & trustworthy throughout the job. Our finished garden has far exceeded our expectations. Friends and neighbours have already asked for Barney's details as he provides such an amicab", date: "5 years ago" },
    { name: "Sandy Scrivener", rating: 5, text: "I can highly recommend Constant Gardens, they were extremely polite, hard working and have completed the job on time to my complete satisfaction. My gazebo looks great. Thank you very much. ", date: "8 months ago" },
    { name: "Louise Glancy", rating: 5, text: "I would definitely recommend Constant Gardens, Barney snd Jack did a fantastic job of my new decking. ", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Constant Gardens | Landscaper in Hailsham",
    description: "Professional landscaper in Hailsham. 5.0-star rated on Google. Call for a free quote.",
  },
};
