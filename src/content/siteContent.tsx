import { DiGo } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGithub, FaWordpress, FaTrello } from "react-icons/fa6";
import { SiTypescript, SiNextdotjs, SiFlutter, SiDart, SiPostman, SiMysql, SiClickup, SiAdobecreativecloud } from "react-icons/si";

export const siteContent = {
    home: {
        hero: {
            title:
                "HI, I'M HEZRON JAHMIA PRESCI",
            heading:
                "I design and build fast, scalable, user-friendly software Applications."
        }
    },

    about: {
        hero: {
            title:
                "HELLO THERE",
            heading:
                "I AM HEZRON JAHMIA PRESCI",
            body: [
                {
                    "p": "I’m a software engineer and IT specialist based in Kampala, Uganda. I work across the full stack, building applications and digital systems that address practical needs — from user-friendly interfaces to reliable backend services. My experience spans software development, teaching, and IT systems administration, which helps me balance technical solutions with user and organizational needs."
                },
                {
                    "p": "My path in technology started with an interest in multimedia & design, logic and problem-solving. I began with multimedia & design and then transitioned to web development, then broadened into mobile apps, backend systems, and infrastructure management. Along the way, I’ve gained experience with Golang, Flutter, React, Docker, and Kubernetes, delivering a range of projects from client websites to internal tools."
                },
                {
                    "p": "I aim to write clean, maintainable code that serves real purposes. I value work that improves systems or experiences in meaningful ways. Whether I’m designing interfaces, collaborating with teams, or managing deployment processes, I approach my work thoughtfully and with steady attention to detail."
                }
            ]
        }
    },

    techStack: {
        hero: {
            title:
                "MY TECH STACK",
            heading:
                "These are the tools I use to bring ideas to life",
            array: [
                {
                    category: "Frontend",
                    items: [
                        { name: "HTML", icon: FaHtml5 },
                        { name: "CSS", icon: FaCss3Alt },
                        { name: "JavaScript", icon: FaJs },
                        { name: "TypeScript", icon: SiTypescript },
                        { name: "React", icon: FaReact },
                        { name: "Next.js", icon: SiNextdotjs },
                    ],
                },
                {
                    category: "Backend",
                    items: [
                        { name: "Node.js", icon: FaNodeJs },
                        { name: "Golang", icon: DiGo },
                    ],
                },
                {
                    category: "Mobile",
                    items: [
                        { name: "Flutter", icon: SiFlutter },
                        { name: "Dart", icon: SiDart },
                    ],
                },
                {
                    category: "DevOps & Tools",
                    items: [
                        { name: "Docker", icon: FaDocker },
                        { name: "GitHub", icon: FaGithub },
                        { name: "Postman", icon: SiPostman },
                        { name: "MySQL", icon: SiMysql },
                    ],
                },
                {
                    category: "CMS / Platforms",
                    items: [{ name: "WordPress", icon: FaWordpress }],
                },
                {
                    category: "Productivity",
                    items: [
                        { name: "Trello", icon: FaTrello },
                        { name: "ClickUp", icon: SiClickup },
                    ],
                },
                {
                    category: "Design",
                    items: [{ name: "Adobe CC", icon: SiAdobecreativecloud }],
                },
            ]
        }
    },

    projects: {
        hero: {
            title:
                "MY WORKS",
            heading:
                "My most recent projects",
            array: [
                {
                    title: "Depression Diagnosis System (DDS)",
                    category: "Cross-platform Application",
                    image: "/images/projects/placeholder.jpg",
                    image2x: "/images/projects/placeholder.jpg",
                    caption:
                        "I developed the Digital Depression Diagnosis System (DDS) to support psychiatrists at Butabika National Referral Hospital in making more accurate depression diagnoses during clinical consultations. Using Flutter for the front end and Golang for the back end, I built DDS to combine clinical assessment expertise with an intuitive, easy-to-use interface.",
                    link: "",
                },



                {
                    title: "BM Publications",
                    category: "Web Design",
                    image: "/images/projects/bm_publications1.png",
                    image2x: "/images/projects/bm_publications.jpg",
                    caption: "I built this site for a creative agency dedicated to helping talent, culture, and brands discover their voice through storytelling and strategic recognition. Designed to capture BM Publications’ bold and uplifting spirit, the site supports their mission to connect creatives with meaningful opportunities.",
                    link: "https://bmpublications.net",
                },

                {
                    title: "Muhumuza Brian",
                    category: "Web Design",
                    image: "/images/projects/brian_morel1.png",
                    image2x: "/images/projects/brian_morel.jpg",
                    caption: "I built this personal brand site for a dynamic publicist passionate about humanitarian work. From BM Publications to Kyarimpa Cares, Brian’s vision blends creativity, impact, and purpose — and I designed the site to reflect that unique intersection. With clear sections for storytelling, projects, and causes, the site offers a smooth, confident online presence ready to grow alongside his expanding influence.",
                    link: "https://muhumuzabrian.com",
                },


                {
                    title: "LAYI NGO",
                    category: "Web Design",
                    image: "/images/projects/layi_ngo1.png",
                    image2x: "/images/projects/layi_ngo.jpg",
                    caption: "Working with Lumala Abdu Youth Impact (LAYI) was a chance to help amplify a powerful grassroots mission. LAYI is a youth-led nonprofit transforming communities through sports, mentorship, and advocacy. I focused on building a platform that feels hopeful, accessible, and action-driven — one that reflects their impact and gives supporters an easy way to engage.",
                    link: "https://layingo.org",
                },
                {
                    title: "Lexway Advisory",
                    category: "Web Design",
                    image: "/images/projects/lexway_advisory1.png",
                    image2x: "/images/projects/lexway_advisory.jpg",
                    caption: "I built Lexway Advisory to help individuals, entrepreneurs, and institutions handle legal and business processes with ease. From land transactions to business registration, my goal was to simplify complex workflows by offering clear, professional, and efficient tools. Based in Uganda and designed with both local and international users in mind, Lexway is grounded in integrity, innovation, and a deep understanding of the legal environment.",
                    link: "https://lilahaven.zaantu.com",
                },
                {
                    title: "Cozy Interiors UG",
                    category: "Web Design",
                    image: "/images/projects/cozy_interiors1.png",
                    image2x: "/images/projects/cozy_interiors.jpg",
                    caption: "I built this e-commerce site to showcase Cozy Interiors’ beautifully crafted bed and bath essentials. Every design choice—from the soft color palette to the clean product displays—was made to help users feel relaxed, inspired, and a bit pampered. I especially enjoyed balancing performance optimization with a visually comfortable experience.",
                    link: "https://cozyinteriorsug.com",
                },

                {
                    title: "Lila Haven",
                    category: "Web Design",
                    image: "/images/projects/lila_haven1.png",
                    image2x: "/images/projects/lila_haven.jpg",
                    caption: "I built Lila Haven’s website to embody mindful creativity and entrepreneurship, capturing the brand’s grounded and open-minded spirit. The design supports introspection and productivity through a simple, intentional layout that’s free of digital clutter. It reflects a peaceful energy I truly enjoyed bringing to life.",
                    link: "https://lilahaven.zaantu.com",
                },

                {
                    title: "Finora",
                    category: "Cross-platform Application",
                    image: "/images/projects/placeholder.jpg",
                    image2x: "/images/projects/placeholder.jpg",
                    caption: "I created a lightweight, offline-first finance tracking app using Flutter to help users manage their daily income and expenses without needing an internet connection. The app offers budget categorization, straightforward reporting, and reliable data storage that stays intact across sessions.",
                    link: "",
                },
            ]
        }
    },

    clients: {
        hero: {
            title:
                "MY CLIENTS",
            heading:
                "I have been honored to partner up with these clients",
            array: [
                {
                    name: "Brian Muhumuza Bishanga",
                    quote:
                        "Thank you for capturing my vision so well. My portfolio website is just what I needed — professional, clean, and easy to manage.",
                    image: "/images/person_brian.jpg",
                },

                {
                    name: "Lexway Advisory",
                    quote:
                        "We’re really happy with the new site. It clearly presents our services and gives a professional first impression. Great work!",
                    image: "/images/logo_lexway.jpg",
                },

                {
                    name: "BM Publications",
                    quote:
                        "We now have a website that truly reflects our brand. Smooth process, quick turnaround, and a result we’re proud to share.",
                    image: "/images/logo_bm.jpg",
                },
                {
                    name: "Layi Ngo",
                    quote:
                        "So grateful for the beautiful site. Everything was handled with clarity and care — from the design to the final tweaks.",
                    image: "/images/person_layi.jpg",
                },
                {
                    name: "Cozy Interiors",
                    quote:
                        "Our online presence looks stunning now. Thank you for translating our style into such a polished website!",
                    image: "/images/logo_cozy.jpg",
                },
                {
                    name: "Lila Heaven",
                    quote:
                        "The whole process was seamless. From the concept to the launch, every detail was well thought out. We love the final result!",
                    image: "/images/logo_lila.jpg",
                },
                {
                    name: "Kyarimpa Cares",
                    quote:
                        "Thank you for helping us launch our cause online. The site feels warm, trustworthy, and just right for our audience.",
                    image: "/images/logo_kyarimpa.jpg",
                },

            ],

            logos: [
                {
                    image: "/images/logos/1.png",
                },
                {
                    image: "/images/logos/2.png",
                },
                {
                    image: "/images/logos/3.jpg",
                },
                {
                    image: "/images/logos/4.jpg",
                },
                {
                    image: "/images/logos/5.jpg",
                },
                {
                    image: "/images/logos/6.jpg",
                },
                {
                    image: "/images/logos/7.png",
                },
            ]
        }
    },

    contact: {
        hero: {
            title:
                "CONTACT ME",
            heading:
                "Reach out for a new project or just say hello",
        },
        links: {
            inkedin: "https://www.linkedin.com/in/hezron-jahmia-01a165371/",
            gitHub: "https://github.com/Hezron-Jahmia-Presci",
            instagram: "https://www.instagram.com/hezron_jahmia/",
            behance: "https://www.behance.net/JahmiaHezron",
            email: "mailto:hezron.p.jahmia@gmail.com",
            whatsapp: "https://wa.me/256752580722",
            twitter: "https://x.com/HJahmia"
        }
    }
};
