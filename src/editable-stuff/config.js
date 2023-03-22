// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mayank",
  middleName: "M.",
  lastName: "Patel",
  message: "Passionate about using technology to change the world.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/patelmayank17",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/monkPatel92",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/patel-mayank17/",
    }
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
//         resume: "https://drive.google.com/file/d/1jFdiLfDp3-ti7v9asyKm8qKxi2UBLksL/view?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mayank.png"),
  imageSize: 375,
  message:
    "My name is Mayank M. Patel. I have been a team player and leader in information and technology for more than 4.5 years and earned a Master of Science in Computer Science and Information Technology in 2018 from Sacred Heart University in Fairfield, Connecticut. My objective is to work in the field of software engineering as a Frontend Developer, Software Automation, or Manual Tester to fulfill my passion for giving back to the community. I enjoy learning about new technologies like cloud computing (AWS, Azure) and working on open source projects in my spare time.",
  resume: require("../editable-stuff/resume.pdf") 
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "patelmayank17",
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/mayank.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/mayank.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "IDE: Visual Studio Code, PyCharm, Eclipse, Microsoft Visual Studio, IntelliJ IDEA", value: 80 },
    { name: "HTML/CSS", value: 85 },
    { name: "JS: React & Redux & NodeJS & Express & JSON", value: 90 },
    { name: "Python: Django", value: 70 },
    { name: "Cloud: AWS (Solution Architecture Certification Upcoming)", value: 57 },
    { name: "SQL, MySQL, NoSQL (MongoDB)", value: 79 },
    { name: "Git/Github/GitLab", value: 85 },
    { name: "Testing Tools: Appium, Selenium, cucumber, Postman, Thunder Client, ADB Script, QXDM, QPST", value: 79 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Quick Learner & Creativity", value: 90 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 72 }
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Front-End Developer or Software Development Engineer in Test opportunity! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "patel_mayank17@yahoo.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/samsung.png'),
      date: 'Sept 2018 - Present'
    },
    {
      role: 'Classroom Learning Assistant (JAVA & DATABASE)',
      companylogo: require('../assets/img/SHU.png'),
      date: 'Jan 2018 – Mar 2018',
    },
    {
      role: 'Full-stack .Net Developer as Intern',
      companylogo: require('../assets/img/ilink.png'),
      date: 'Jan 2014 – May 2014',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
