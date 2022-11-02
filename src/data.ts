export interface IProjectData {
    name: string;
    techStack: string;
    about: string;
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
    aboutMe: string;
    getInTouch: string;
    projectData: IProjectData[]
    contactemail: string;
    experience: IExperienceData[]
}

export const data: IData = {
    name: "Prashant Kumar",
    lineOne: "I build things for the web.",
    lineTwo: "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.",
    aboutMe: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
    commodi repellat eos! Doloremque reiciendis delectus dolor aliquam
    inventore eligendi fugit perspiciatis accusantium fugiat? Unde vel
    est accusamus culpa, eveniet molestiae! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Deserunt minima optio odio, ad
    sapiente molestias corrupti illum aspernatur laborum ipsa
    consectetur obcaecati explicabo ratione, facilis veniam, id
    voluptates? Molestias, eaque? Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Adipisci, voluptates itaque maxime labore, magni
    distinctio officiis`,
    getInTouch: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at nobis
ipsam est illum hic, maxime possimus, saepe sit architecto, voluptas
veniam tempora vel rerum obcaecati assumenda nulla. Excepturi, a?`,
    projectData: [
        {
            name: "Instagram Clone",
            about: "Clone of Instagram ",
            techStack: "NextJs, React Query, NestJs, Graphql and MongoDB",
            link: "http:www.google.com",
            sourceLink: "https://www.google.com"

        },

        {
            name: "Apartments",
            about: "Booking room app",
            techStack: "React Native, React Query, GoLang, PostgreSQL",
            link: "http:www.google.com",
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