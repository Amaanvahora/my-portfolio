/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Amaan Vahora",
  logo_name: "Amaan Vahora",
  nickname: "Amaan Vahora",
  full_name: "Amaan Vahora",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Ru3cqTwaxF__gFjEJ-JvYNloefm4e6lJ/view?usp=sharing",
  mail: "mailto:amaanvahora7294@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Amaanvahora",
  linkedin: "https://www.linkedin.com/in/amaan-vahora-443a531b7/",
  gmail: "amaanvahora7294@gmail.com",
  twitter: "https://twitter.com/vahora_amaan/",
  instagram: "https://www.instagram.com/a.m.x.x.n/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Vuejs",
        "⚡ Experienced in crafting secure smart contracts with Solidity and Web3 applications, adapt at deploying decentralized solutions and optimizing transaction efficiency",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#0095D5",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#000000",
            borderRadius: "50%",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing web apps on GCP and AWS",
        "⚡ Deploying deep learning models on cloud to go throught CI/CD.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#0095D5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Certifications by deeplearning.ai and Stanford Online",
        "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "George Brown College",
      subtitle:
        "Ontario College Graduate Certificate in Blockchain Development",
      logo_path: "gbc.png",
      alt_name: "GBC",
      duration: "SEP 2023 - AUG 2024",
      descriptions: [
        "⚡ Studied blockchain architecture, smart contract development, and decentralized applications (DApps)",
        "⚡ Gained expertise in Ethereum, Solidity, and Web3.js for developing secure and efficient blockchain solutions",
        "⚡ Worked on projects involving token creation, decentralized finance (DeFi) platforms, and blockchain-based supply chain management",
        "⚡ Explored consensus mechanisms, cryptographic principles, and blockchain security practices",
        "⚡ Engaged in practical exercises and hackathons to deploy and test smart contracts on various blockchain networks",
      ],

      website_link: "https://www.georgebrown.ca/",
    },
    {
      title: "Durham College",
      subtitle:
        "Ontario College Graduate Certificate in Artificial Intelligence Analysis, Design, & Implementation",
      logo_path: "durham.png",
      alt_name: "DURHAM",
      duration: "JAN 2023 - AUG 2023",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Data visualization, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://durhamcollege.ca/",
    },
    {
      title: "Parul University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "parul.png",
      alt_name: "SETI",
      duration: "JULY 2018 - MARCH 2022",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://paruluniversity.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1zsxmmnMvx0QBx9M88kgFk7YLSaoZ0mIy/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15eSfSG5ihAZjhG0QoCUxdWVqlLKoPfXA/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17d2da4j88MkcY7-Olqci1FLGtExE-YMP/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Machine Learning on Clinical Data",
      subtitle: "Stanford University",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ulLUdJtNwRGqz6aDWhkTWnPiZ8epduoS/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "AI Capstone project in Stanford",
      subtitle: "Stanford University",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/18oGks6X5iRgJ__E7ZKJpDNg18G-9wjSj/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#2AAFED",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XnI03ZvJCeqLGvY36WC-tRPtTRlAb5C7/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1kLK34IS39Ts2uYblKkr9QbMLv5mu83aY/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Microscoft Student Partner",
      subtitle: "Building C# Application",
      logo_path: "Microsoft.png",
      certificate_link:
        "https://drive.google.com/file/d/1VZg7F2Uu6u-fHGMO2vmakP-9RKkk46Hn/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#C5E2EE",
    },
    {
      title: "HACKGujarat",
      subtitle: "2022",
      logo_path: "ino.png",
      certificate_link:
        "https://drive.google.com/file/d/19RcKiPP4YzajKGdLZCKpZoplVuAP-U9F/view?usp=sharing ",
      alt_name: "Microsoft",
      color_code: "#C5E2EE",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "SOFTWARE DEVELOPER",
          company: "Hifinite Health Care",
          company_url: "https://www.hifinite.com/",
          logo_path: "Hifinite.png",
          duration: "Jan 2022 - Ongoing",
          location: "San Diego, USA",
          description:
            "Architect, design, implement, and maintain high-performance, scalable systems on-premises and in the Cloud Execute projects in entirety from feature specification, through architecture, design, implementation, and validation. Created Bi Charts on Aws quick sight as well as wrote SQL queries to present useful data. Deploy code in production, debug, and fix production issues. Present product proposals, architecture, projects, designs, competitive analysis, technology analysis, case studies, escalation post-mortem, etc. to executive staff Possesses sound knowledge of organization's products.Create a work plan with verifiable milestones and time estimates and deliver projects withinestimates.Constructively collaborate with the team during requirements gathering, feature specification,design and code reviews",
          color: "#f10000",
        },
        {
          title: "SOFTWARE DEVELOPER",
          company: "Lytikal Insights",
          company_url: "https://www.lytikal.com/",
          logo_path: "lytikal.png",
          duration: "Apirl 2022 - Dec 2022",
          location: "Work From Home",
          description:
            "Developed 15+ front-end and back-end web pages utilizing Vue.js, Python, Flask, MySQL, Rest API, and Node.js.Execute projects in entirety from feature specification, through architecture, design, implementation, and validation.Fetched data from various APIs using Python, and Flask and displayed it on the screen in the front-end.Deploy code in production, debug, and fix production issues.Constructively collaborate with the team during requirements gathering, feature specification, design and code reviews. Benchmark performance, identify bottlenecks, troubleshoot and improve system. Performance.Handle customer support and operations escalations design and code reviews.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Amaan.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@amaanvahora7294",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "IPL Score Prediction",
      url: "https://github.com/Amaanvahora/IPLscore_prediction",
      description:
        "This project uses machine learning techniques to predict the outcomes of IPL matches involving 8 teams.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Ecommerce Website",
      url: "https://github.com/Amaanvahora/Frontend-Ecommerce",
      description:
        "This repository features a Next.js 13 App Router, React and MySQL stack, Full Stack E-Commerce + Dashboard & CMS, all with Clerk Authentication, Stripe integration.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Client Portfolio",
      url: "https://github.com/Amaanvahora/Manav-Chetwani-portfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Decentralised Prediction Market",
      url: " ",
      description:
        "The decentralized prediction market platform aims to address the prevalent issues of trust, transparency, and accessibility in current prediction markets",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      name: "Image Clustering",
      url: " ",
      description:
        "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      name: "Object + Face Detection",
      url: " ",
      description: "2019 project. Object detection + accurate face detection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
