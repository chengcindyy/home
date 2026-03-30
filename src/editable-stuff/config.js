// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Cindy",
  middleName: "",
  lastName: "Cheng",
  message:
    "Full-Stack Developer shipping real products for real users — from e-commerce platforms to automation tools.",
  icons: [
    {
      image: "fas fa-envelope",
      url: "mailto:chengcindyy@gmail.com",
    },
    {
      image: "fa-github",
      url: "https://github.com/chengcindyy",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/cindyc_cc/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/chengcindyy/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  profilePictureLink: "",
  message: `Full-Stack Developer with hands-on experience delivering production web applications,
            automation tools, and internal systems for real clients and users.
            I work across the full stack — React / Next.js frontends, Node.js / tRPC backends,
            PostgreSQL and MongoDB, and cloud deployment on AWS and Fly.dev.
            I enjoy identifying real problems and building tools that people actually use.`,
  resume:
    "https://docs.google.com/document/d/10_zorHdaT9gmI108tU1LDBmvpIg2jonBZHDs5QtvgzA/edit?usp=sharing",
};

// EXPERIENCES SECTION
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Freelance Developer & Client Lead",
      companylogo: require("../assets/img/newtype.webp"),
      date: "Jan 2024 – Dec 2025",
      description:
        "Sole client contact for a 20-month e-commerce platform engagement for a Vancouver print shop. " +
        "Owned all frontend and admin UI — recursive category nav, multi-option product pages, shopping cart, " +
        "order tracking, and a full admin panel with sales dashboard, order/product/customer/promotion management. " +
        "Integrated Square Payments and AWS S3; managed Amplify Gen1→Gen2 migration. ",
      demo: "https://newtypegraphics.com/",
    },
    {
      role: "Web Developer / IT Support",
      companylogo: require("../assets/img/Lastic.webp"),
      date: "Mar 2024 – Jan 2025",
      description:
        "Sole developer on a corporate website (Next.js + Tailwind) for Plantloop Biotech — " +
        "designed, built, and deployed to AWS Amplify within 6 weeks. " +
        "Subsequently built an internal admin system with Cognito auth, MongoDB, inventory CRUD, " +
        "and auto-serialized document management, deployed to production with real company data. " +
        "Also built a Java tool to automate Shopify order extraction and Black Cat shipping export, " +
        "eliminating annual mis-shipment errors during cherry export season.",
    },
  ],
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "chengcindyy", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [ 
    "work-hour-tracker",   // PWA — real users, best showcase
    "csv-convertor",      // Java tool — real business impact
    "image_convertor",      // Java tool
    "kali-mint-notes-and-scripts",
  ],
};

const demoLinks = {
  "work-hour-tracker": "https://work-hour-tracker.fly.dev/"
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript / TypeScript", value: 90 },
    { name: "React / Next.js / Vite", value: 90 },
    { name: "Node.js / tRPC / REST APIs", value: 85 },
    { name: "PostgreSQL / MongoDB", value: 85 },
    { name: "AWS (Amplify, S3, Route 53)", value: 80 },
    { name: "Docker / Fly.dev / GitHub Actions", value: 80 },
    { name: "Java / Bash / Linux", value: 75 },
    { name: "Cybersecurity (Linux hardening, Kali, GPG)", value: 70 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Self-Directed Learning", value: 90 },
    { name: "Product Thinking", value: 90 },
    { name: "Team Collaboration", value: 85 },
    { name: "Communication", value: 85 },
    { name: "Time Management", value: 85 },
    { name: "Customer-Oriented Mindset", value: 85 },
    { name: "Adaptability", value: 80 },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently open to Full-Stack Developer and Web Developer roles across Canada. " +
    "I bring hands-on experience shipping real products for real clients — " +
    "from React frontends to cloud-deployed backends. " +
    "Open to relocating within Canada. Feel free to reach out at",
  email: "chengcindyy@gmail.com",
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  demoLinks,
};