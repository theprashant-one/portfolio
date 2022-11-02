export interface IProjectData {
    name: string;
    techStack: string;
    about: string[];
    link: string;
    sourceLink: string;
}

export interface IExperienceData {
    date: string;
    position: string;
    place: string;
    desc: string;
    companyName: string;
}

export interface IData {
    name: string;
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
    lineOne: "I build things for the web.",
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
            name: "Instagram Clone",
            about: ["Clone of Instagram", "Clone of Instagram", " Lorem ipsum, dolor sit amet consectetur adipisicing elit.", "Clone of Instagram", " Lorem ipsum, dolor sit amet consectetur adipisicing elit."],
            techStack: "NextJs, React Query, NestJs, Graphql and MongoDB",
            link: "http://www.google.com",
            sourceLink: "https://www.google.com"

        },

        {
            name: "Apartments",
            about: [" Lorem ipsum, dolor sit amet consectetur adipisicing elit.", "Booking App", "Booking App", "Booking App", " Lorem ipsum, dolor sit amet consectetur adipisicing elit."],
            techStack: "React Native, React Query, GoLang and PostgreSQL",
            link: "http://www.google.com",
            sourceLink: "https://www.google.com"

        },

    ],
    contactemail: "mailto:prashantkumar23.eng@gmail.com",
    experience: [
        {
            companyName: "Stratonik",
            date: "2022 - present",
            desc: "dasdasdas",
            position: "Software Developer",
            place: "Chennai"
        }
    ]
}