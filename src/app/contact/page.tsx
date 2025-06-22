"use client";

import Banner from "@/components/banner";
import PageContainer from "@/components/pageContainer";
import { siteContent } from "@/content/siteContent";
import { useAutoRouteScroll } from "@/hooks/useAutoRouteScroll";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const pageOrder = ["/", "/about", "/tech-stack", "/works", "/clients", "/contact"];

export default function ContactPage() {
    useAutoRouteScroll(pageOrder);
    return (
        <main className="contact">
            <Banner>
                <PageContainer>
                    <section className="s-1">
                        <h4>{siteContent.contact.hero.title}</h4>
                        <h1>{siteContent.contact.hero.heading}</h1>
                    </section>
                </PageContainer>

                <PageContainer>
                    <section className="s-0">
                        <a
                            href={siteContent.contact.links.email}
                            className="icon-bubble"
                            title="Email"
                        >
                            <SiGmail className="contact-icon" />
                        </a>

                        <a
                            href={siteContent.contact.links.whatsapp}
                            className="icon-bubble"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="WhatsApp Call"
                        >
                            <FaWhatsapp className="contact-icon" />
                        </a>

                        <a
                            href={siteContent.contact.links.instagram}
                            className="icon-bubble"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Instagram"
                        >
                            <FaInstagram className="contact-icon" />
                        </a>

                        <a
                            href={siteContent.contact.links.gitHub}
                            className="icon-bubble"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                        >
                            <FaGithub className="contact-icon" />
                        </a>

                        <a
                            href={siteContent.contact.links.inkedin}
                            className="icon-bubble"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <FaLinkedin className="contact-icon" />
                        </a>
                    </section>
                </PageContainer>
            </Banner>
        </main>
    );
}
