import cgpa from './images/cgpa.png';
import aicPecf from './images/aic-pecf.png';
import notesFlutter from './images/notesFlutter.png';
import goalsReact from './images/GoalsReact.png';

export const projectsData = [
    {
        title: "CGPA Calculator",
        description: "Created a CGPA calculator using HTML, CSS, and JavaScript to compute CGPA based on input grades and credits. The project improved my problem-solving skills and provided a practical tool for students",
        image: cgpa,
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://vjnaveen2005.github.io/ptu_cgpa_html/",
    },
    {
        title: "AIC-PECF",
        description: "AIC-PECF is a platform for students to learn and practice programming.",
        image: aicPecf,
        techStack: ["ReactJs", "Framer Motion", "Github"],
        link: "https://aic-project.netlify.app/",
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

    },

]

export { cgpa };