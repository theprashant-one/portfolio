export interface IProjectData {
    projectName: string;
    techStack: string[];
    about: string;
    githubLink: string;
    sourceLink: string;
    bulletPoints: string[];
    image: string;
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
    projectData: IProjectData[];
    contactemail: string;
    experience: IExperienceData[];
    skillKnown: { name: string, image: string }[]
}

export const data: IData = {
    name: "Prashant Kumar",
    resumeLink:
        "https://drive.google.com/file/d/1CgGpmRoZ4rl9GkCJOzAr35xJcoQtaWQC/view?usp=share_link",
    githubLink: "https://github.com/prashantkumar23",
    linkedinLink: "https://www.linkedin.com/in/prashantkumar23",
    instaLink: "https://www.instagram.com/prashantjdreww/",
    lineOne: "I build stuffs for the Internet",
    lineTwo:
        "I’m a software developer based in India, specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered payroll product for my client at Stratonik.",
    aboutMe: [
        `Hello World! 👋 a software developer
    based out in India. With love of working and making usable software.`,

        `I'm really into using technology to make a positive impact and bring more diversity and inclusivity to the industry. I'm excited to learn and grow with a great team. And who knows, maybe I'll finally figure out how to make a computer laugh 🤪`,
        // "Aside from my job, I like to run,  play sometimes badminton or go to meetups for keep in sane",
    ],
    getInTouch: `Let's build something awesome together! 👀`,
    projectData: [
        {
            projectName: "Pintagram - instagram clone",
            about: "Simple and Aesthetic Insta Clone",
            techStack: ["Typescript", "AWS S3, Cognito, Cloudfront", "NextJS", "React Query", "NestJs", "Graphql", "MongoDB"],
            githubLink: "https://github.com/prashantkumar23/insta-backend",
            sourceLink: "https://pintagram-frontend-production.up.railway.app",
            bulletPoints: [
                "You can Create Post",
                "You can view all the posts posted by other users",
                "Follow and Unfollow people here",
                "View Your profile",
                "You can view other people profile too",
                "Have a thought on someone post? You can comment it too",
                "You can scroll through endless comment jargon on any post",
                "Login and Register",
                "Forgot Password? Insta clone got you!",
                "Reset your password",
                "Search Users on this platform"
            ],
            image: require("./assets/projectimages/1.png")
        },
        {
            projectName: "ENote - Note taking app",
            about:
                "Minimalistic and Simple note taking app",
            techStack: ["Typescript", "React Native", "React Query", "Supabase", "PostgreSQL"],
            githubLink: "http://www.google.com",
            sourceLink: "https://play.google.com/store/apps/details?id=com.undertone.enote&pli=1",
            bulletPoints: [
                "Add Note",
                "Update Note",
                "Delete Note",
                "Reading Mode - so you can read your existing notes",
                "Authentication - Login, Register, Forget Password, Reset Password"
            ],
            image: require("./assets/projectimages/2.png")
        },
        {
            projectName: "Paid Sass App",
            about:
                "Subscribed premium content with stripe. Become a pro and basic user",
            techStack: ["Typescript", "NextJS", "Supabase", "Stripe", "Webhooks"],
            githubLink: "https://github.com/prashantkumar23/paymentapp",
            sourceLink: "https://sass-app-supabase.vercel.app/",
            bulletPoints: [
                "Ability to authenticate using Google OAuth",
                "Subscribe to Base plan and Pro plan",
                "Ability to switch base plan to pro plan and vice versa as needed",
                "Premium user can see the premium content associated with article",
                "Cancel subscription that will end of last month of the plan"
            ],
            image: require("./assets/projectimages/3.png")
        },
        {
            projectName: "The Cozy Kitchen",
            about:
                "Responsive Restaurant Web App",
            techStack: ["HTML", "CSS", "Javascript"],
            githubLink: "https://github.com/prashantkumar23/responsive-web-app",
            sourceLink: "https://prashantkumar23.github.io/responsive-web-app/",
            bulletPoints: [
                " Responsive Web App",
                " With Cool animations",
                " Include multiple pages (Home, Menu, About, Contact)",
                " Responsive form element",
                " Adapatable in multiple screens",
            ],
            image: require("./assets/projectimages/4.png")
        },
    ],
    contactemail: "mailto:prashantkumar23.eng@gmail.com",
    experience: [
        {
            companyName: "Stratonik",
            date: "Jan 2022 - March 2023",
            desc: [
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            ],
            position: "Software Developer",
            place: "Chennai, India",
        },
    ],
    skillKnown: [
        {
            name: "HTML",
            image: require("./assets/skillSvg/html5.png")
        },
        {
            name: "CSS",
            image: require("./assets/skillSvg/css3.png")
        },
        {
            name: "JavaScript",
            image: require("./assets/skillSvg/javascript.png")
        },
        {
            name: "React",
            image: require("./assets/skillSvg/reactjs.png")
        },
        {
            name: "Typescript",
            image: require("./assets/skillSvg/typescript.png")
        },
        {
            name: "NodeJs",
            image: require("./assets/skillSvg/nodejs.png")
        },
        {
            name: "MongoDB",
            image: require("./assets/skillSvg/mongodb.png")
        },
        {
            name: "PostgreSQL",
            image: require("./assets/skillSvg/sql.png")
        },
        {
            name: "GraphQL",
            image: require("./assets/skillSvg/graphql.png")
        },
    ]
};
