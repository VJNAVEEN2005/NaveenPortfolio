import cgpa from './images/cgpa.png';
import aicPecf from './images/aic-pecf.png';
import notesFlutter from './images/notesFlutter.png';
import goalsReact from './images/GoalsReact.png';
import folioflow from './images/folioflow.png';
import ainotes from './images/ainotes.png';
import prepslab from './images/prepslab.png';

export const projectsData = [
    {
        title: "PrepSlab",
        description: "An AI-powered mock test platform that generates practice questions using AI, allowing students to practice and improve their performance through simulated exams and performance tracking.",
        image: prepslab,
        techStack: ["ReactJs", "Tailwind CSS", "AI", "GSAP"],
        link: "https://prepslab.netlify.app/",
        github: "https://github.com/VJNAVEEN2005/PrepSlab",
    },
    {
        title: "AI Notes App",
        description: "An AI-powered notes application that allows users to upload PDFs and interact with them through a chat interface, leveraging modern web technologies.",
        image: ainotes,
        techStack: ["ReactJs", "Tailwind CSS", "AI", "Netlify"],
        link: "https://webaskmypdf.netlify.app/",
        github: "https://github.com/VJNAVEEN2005/Web-AI-Notes-App",
    },
    {
        title: "FolioFlow",
        description: "A powerful, no-code portfolio builder that allows users to create stunning professional portfolios in minutes with an intuitive editor.",
        image: folioflow,
        techStack: ["ReactJs", "Tailwind CSS", "Framer Motion", "GSAP"],
        link: "https://folioflow.netlify.app/",
        github: "https://github.com/VJNAVEEN2005/Profileforge-Web",
    },
    {
        title: "CGPA Calculator",
        description: "Created a CGPA calculator using HTML, CSS, and JavaScript to compute CGPA based on input grades and credits. The project improved my problem-solving skills and provided a practical tool for students",
        image: cgpa,
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://vjnaveen2005.github.io/ptu_cgpa_html/",
        github: "https://github.com/VJNAVEEN2005/ptu_cgpa_html",
    },
    {
        title: "AIC-PECF",
        description: "AIC-PECF is a platform for students to learn and practice programming.",
        image: aicPecf,
        techStack: ["ReactJs", "Framer Motion", "Github"],
        link: "https://www.aicpecf.org/",
        github: "private",
    },
    {
        title: "Flutter Todo App",
        description: "Developed a simple To do list app using that allows users to create and delete tasks. This project enhanced my skills in mobile app development.",
        image: notesFlutter,
        techStack: ["Flutter", "HIVE(Database)"],
        link: "https://todolist-vjn.web.app/",
    },
    {
        title: "Goals-React",
        description: "Developed a goal-setting app using React Native that allows users to set and delete goals. This project improved my skills in React Native and mobile app development.",
        image: goalsReact,
        techStack: ["React Native", "Expo"],
        phone: true,

    },

]

export { cgpa };