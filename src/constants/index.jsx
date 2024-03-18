import { BellCanada, BellMedia, iqor, quantrics  } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    dog,
    dumbbell,
    chart,
    dashboard,
    brainwave,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Bell Media",
        icon: BellMedia,
        iconBg: "#accbe1",
        date: "Mar 2023 - Current",
        points: [
            "Directed and managed the development and maintenance of full-stack web applications using HTML, JavaScript, CSS, and Java, ensuring high-quality code delivery.",
            "Collaborated with cross-functional teams in designing and implementing efficient, scalable software solutions, fostering a collaborative work environment that drove innovation and excellence.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implemented comprehensive code review processes to identify and rectify bugs, maintaining strict code quality standards",
        ],
    },
    {
        title: "Senior Leader",
        company_name: "Bell Canada",
        icon: BellCanada,
        iconBg: "#accbe1",
        date: "Feb 2021 - Mar 2023",
        points: [
            "Determine call center operational strategies through needs assessments, performance reviews, capacity planning, and cost/benefit analyses.",
            "Lead data analytics initiatives to enhance agent performance, resulting in a significant reduction in call center response time",
            "Devise and publish metrics to measure organizational success, providing actionable insights for continuous improvement",
            "Manage employee performance, set clear goals and objectives, and delegate functional leader responsibilities",
        ],
    },
    {
        title: "Manager, Training Delivery",
        company_name: "Quantrics",
        icon: quantrics,
        iconBg: "#d8bfd8",
        date: "Feb 2019 - Apr 2021",
        points: [
            "Designed and implemented a comprehensive sales training program, leading to an outstanding 110% improvement in cross-sell close rate performance within 18 months.",
            "Successfully trained and developed teams of over 900 representatives, consistently driving them to meet and exceed monthly sales objectives.",
            "Orchestrated seamless communication across organizational teams, segments, partners, and vendors to provide necessary support and coaching to agents, ensuring their success.",
            "Championed business processes to determine key performance indicators (KPIs), incentives, and spearheaded blueprint improvements..",
        ],
    },
    {
        title: "Manager, Training Delivery",
        company_name: "iQor",
        icon: iqor,
        iconBg: "#fbc3bc",
        date: "Feb 2017 - Aug 2017 ",
        points: [
            "Utilized performance management strategies to accurately forecast sales trends and create optimized schedules, resulting in a remarkable 10% sales increase within the initial 3 months",
            "Developed and administered a comprehensive universal training curriculum, leveraging technology to enhance training programs for over 200 representatives.",
            "Collaborated with department heads, operations management, key stakeholders, and employees to create educational materials and identify learning objectives.",
            "Championed business processes to determine key performance indicators (KPIs), incentives, and spearheaded blueprint improvements.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: brainwave,
        theme: 'btn-back-pink',
        name: 'Brainwave',
        description: 'Developed and deployed a sleek UI/UX website with React and Tailwind CSS, showcasing seamless user experiences. Leveraging Reacts modularity and Tailwind CSSs utility-first approach.',
        link: 'https://3jaybrainwave.vercel.app/',
    },
    {
        iconUrl: chart,
        theme: 'btn-back-red',
        name: 'AdminApp',
        description: 'Developed a web application designed to monitor and oversee a companys performance.',
        link: 'https://react-admin-threejay20.vercel.app',
    },
    {
        iconUrl: dashboard,
        theme: 'btn-back-red',
        name: 'Dashboard',
        description: 'Developed an administrative dashboard featuring complete authentication functionality, a homepage presenting charts and recent activities, an extensive table for managing companies with Create, Read, Update, and Delete operations alongside search capabilities, and a Kanban board offering real-time synchronization, all implemented using the Refine Framework.',
        link: 'https://justinsdashboard.vercel.app/',
    },
    {
        iconUrl: dumbbell,
        theme: 'btn-back-green',
        name: 'Exercise App',
        description: 'Created and deployed a cutting-edge fitness exercises application using React 18, integrated with APIs from RapidAPI for enhanced functionality and seamless user experience.',
        link: 'https://gym-exercises-threejay20.vercel.app',
    },
    {
        iconUrl: dog,
        theme: 'btn-back-blue',
        name: 'Adopt-A-Pet',
        description: 'A website designed to display a list of adorable animals that are available for adoption.',
        link: 'https://adopt-pet-pearl.vercel.app',
    },
    
    {
        iconUrl: estate,
        theme: 'btn-back-yellow',
        name: 'Real-Estate Application',
        description: 'Showcased ReactJS and NextJS skills by building Realtor - an impressive Real Estate Application. With rental homes and for-sale properties, advanced property filtering, property details page with an image carousel, and much more.',
        link: 'https://real-estate-6emyb9iyq-threejay20.vercel.app',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'Tech Haven',
        description: 'Constructed an exceptional e-commerce webshop featuring an admin dashboard and robust CMS functionality utilizing Next.js 14, Stripe for seamless payments, TypeScript for enhanced reliability, and Payload CMS for efficient content management.',
        link: 'https://e-commerce-threejay.payloadcms.app/',
    },
    
  
];