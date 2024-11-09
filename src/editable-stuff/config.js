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
      url: "mailto:cindyy.cheng@outlook.com",
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
  message: `Full Stack Developer with 8+ months of hands-on experience in end-to-end web development. 
            Demonstrated success in single-handedly developing and deploying enterprise-level applications. 
            Specialized in React/Next.js development with strong expertise in process automation and optimization.`,
  resume:
    "https://docs.google.com/document/d/1q08x6GW39IhVbfJO4RV1k2fY2PC_5-T5/edit",
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
    "BookNManage",
    "PlatStyle",
    "WeBuy",
    "csv-convertor",
    "CSIS4175-HMS",
  ],
};

const demoLinks = {
  // "BookNManage": "https://booknmanage-135dca335b60.herokuapp.com/"
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
    { name: "JavaScript/TypeScript", value: 90 },
    { name: "Java", value: 80 },
    { name: "Python", value: 80 },
    { name: "AWS, Firebase", value: 80 },
    { name: "Git/GitHub", value: 80 },
    { name: "React, Next.js, HTML/CSS ", value: 90 },
    { name: "Node.js, Express.js, MongoDB", value: 70 },
    { name: "RESTful API", value: 70 },
  ],
  softSkills: [
    { name: "Self-management", value: 90 },
    { name: "Goal-Oriented", value: 75 },
    { name: "Collaboration", value: 80 },
    { name: "Proactive", value: 90 },
    { name: "Time-management", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Organization", value: 90 },
    { name: "Adaptability", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Full-Stack Web Developer or Java Software Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "cindyy.cheng@outlook.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Web Developer", // Here Add Company Name
      companylogo: require("../assets/img/Plantloop.png"),
      date: "APR 2024 – Present",
      description:
        "Developed a full-stack web application with React/Next.js, featuring a public website and internal admin system on AWS.",
      demo: "https://plantloopbiotech.com/",
    },
    {
      role: "Front-End Developer (Freelance)",
      companylogo: require("../assets/img/iov.png"),
      date: "Feb 2024 – Present",
      description:
        "Designed and implemented the frontend interface of an e-commerce website, handling both UI/UX design and frontend development.",
      demo: "https://cindy.d39o8eqpx99mw9.amplifyapp.com/client",
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
