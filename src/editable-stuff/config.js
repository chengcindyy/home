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
    " Beginning my adventure in tech innovation, growing with every line of code. ",
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
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  profilePictureLink: "",
  // imageLink: "",
  // imageSize: 375,
  message: `Software Developer with production experience in web systems, automation, and internal tools.
            Comfortable leveraging AI tools to improve debugging, automation, and problem-solving efficiency.`,
  resume:
    "https://docs.google.com/document/d/1MrmsyOfmtH_YSY82ShLAGXo-PVuJc5G7PMiYesCVYSY/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Academic & Side Projects",
  gitHubUsername: "chengcindyy", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "kali-mint-notes-and-scripts",
    "customer-churn-prediction",
    "CSharp-GradeCalculator",
    "csv-convertor",
    "image_convertor",
    "BookNManage",
    "WeBuy",
    "CSIS4175-HMS",
    "platstyle"
  ],
};

const demoLinks = {
  "BookNManage": "https://booknmanage.codingwithcindy.com/"
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      // img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      // img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript / TypeScript", value: 90 },  
    { name: "Tailwind", value: 90 },
    { name: "MongoDB / MS SQL Server", value: 85 },
    { name: "CI/CD, Git / GitHub", value: 85 },
    { name: "AWS (Amplify, Cognito)", value: 80 },
    { name: "Java", value: 80 },
    { name: "Security: Log Analysis / Auditing", value: 70 },
    { name: "C# / Python / Bash", value: 70 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Positive Attitude", value: 90 },
    { name: "Self-Directed Learning", value: 90 },
    { name: "Team Collaboration", value: 85 },
    { name: "Time Management", value: 85 },
    { name: "Communication", value: 85 },
    { name: "Customer-Oriented Mindset", value: 80 },
    { name: "Adaptability", value: 80 },

  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently seeking opportunities in Cybersecurity, particularly Security Analyst roles. With a strong background in web and full-stack development, I'm also open to web development positions that involve security-focused or system-level responsibilities. If you know of any opportunities, have questions, or just want to chat about tech and security, feel free to email me at",
  email: "chengcindyy@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Developer (Web Systems)",
      companylogo: require("../assets/img/Plantloop.webp"),
      date: " AUG 2024 - MAY 2025",
      description:
        "Developed a full-stack web application with React/Next.js, featuring a public website and internal admin system on AWS.",
      demo: "https://plantloopbiotech.com/",
    },
    {
      role: "Software Developer – Front-End Focus (Freelance)",
      companylogo: require("../assets/img/newtype.webp"),
      date: "FEB 2024 – DEC 2025",
      description:
        "E-commerce project involving UI/UX development, Square payment API integration, and final-stage debugging and stabilization.",
      demo: "https://newtypegraphics.com/",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

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
