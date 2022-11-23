export interface IProjectData {
    projectName: string;
    techStack: string[];
    about: string;
    githubLink: string;
    sourceLink: string;
    bulletPoints: string[]
}

export interface IExperienceData {
    date: string;
    position: string;
    place: string;
    desc: string[];
    companyName: string;
}

export interface IData {
    name: string;
    resumeLink: string;
    githubLink: string;
    linkedinLink: string;
    instaLink: string;
    lineOne: string;
    lineTwo: string;
    aboutMe: string[];
    getInTouch: string;
    projectData: IProjectData[]
    contactemail: string;
    experience: IExperienceData[]
}

export const data: IData = {
    name: "Prashant Kumar",
    resumeLink: "https://drive.google.com/file/d/1C0FQkjYrEBZ3YPe-707yVtoF1ze3KsHh/view?usp=share_link",
    githubLink: "https://github.com/prashantkumar23",
    linkedinLink: "https://www.linkedin.com/in/prashantkumar23",
    instaLink: "https://www.instagram.com/prashantjdreww/",
    lineOne: "I build stuffs for the web.",
    lineTwo: "I’m a software engineer based in India, specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Stratonik.",
    aboutMe: [`Hello World! 👋 A Web Developer
    based out in India. With love of working on Javascript stack.`,

        `Technology leads, society follows. The move towards increasing
    inclusivity and diversity in the industry through representation
    is of importance to me. I'm excited to make the leap and continue refining my skills with the right company.`, `Also finding unique solutions to complex problems and I’m doing it all
    while making the worst puns you've never heard before. 🤪`, "Aside from my job, I like to run,  play sometimes badminton or go to meetups for keep in sane",],
    getInTouch: `Let's build something awesome together! 👀`,
    projectData: [
        {
            projectName: "Instagram Clone",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas. Quisque id diam vel quam elementum. Duis ut diam quam nulla porttitor massa id neque.",
            techStack: ["NextJS", "React Query", "NestJs", "Graphql", "MongoDB"],
            githubLink: "http://www.google.com",
            sourceLink: "https://www.google.com",
            bulletPoints: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        },

        {
            projectName: "Notes App",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas. Quisque id diam vel quam elementum. Duis ut diam quam nulla porttitor massa id neque.",
            techStack: ["React Native", "React Query", "Supabase", "PostgreSQL"],
            githubLink: "http://www.google.com",
            sourceLink: "https://www.google.com",
            bulletPoints: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        },

        {
            projectName: "Virtual Keyboard",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas. Quisque id diam vel quam elementum. Duis ut diam quam nulla porttitor massa id neque.",
            techStack: ["HTML", "CSS", "Javascript"],
            githubLink: "http://www.google.com",
            sourceLink: "https://www.google.com",
            bulletPoints: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        },

        {
            projectName: "Js Project",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas. Quisque id diam vel quam elementum. Duis ut diam quam nulla porttitor massa id neque.",
            techStack: ["HTML", "CSS", "Javascript"],
            githubLink: "http://www.google.com",
            sourceLink: "https://www.google.com",
            bulletPoints: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        },

    ],
    contactemail: "mailto:prashantkumar23.eng@gmail.com",
    experience: [
        {
            companyName: "Stratonik",
            date: "Jan 2022 - present",
            desc: [" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. ", " Lorem ipsum, dolor sit amet consectetur adipisicing elit.", " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.", " Lorem ipsum, dolor sit amet consectetur adipisicing elit.", " Lorem ipsum, dolor sit amet consectetur adipisicing elit."],
            position: "Software Developer",
            place: "Chennai"
        }
    ]
}