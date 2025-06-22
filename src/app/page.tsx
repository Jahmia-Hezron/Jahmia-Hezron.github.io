"use client";

import Banner from "@/components/banner";
import Button from "@/components/button";
import PageContainer from "@/components/pageContainer";
import { siteContent } from "@/content/siteContent";
import { useAutoRouteScroll } from "@/hooks/useAutoRouteScroll";
import { FaInstagram, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
const pageOrder = ["/", "/about", "/tech-stack", "/works", "/clients", "/contact"];

export default function Home() {
	useAutoRouteScroll(pageOrder);
	return (
		<main className="home">
			<Banner>
				<PageContainer>
					<section className="s-1 image">

					</section>
					<section className="s-1">
						<h4>{siteContent.home.hero.title}</h4>
						<h1>{siteContent.home.hero.heading}</h1>

						<section className="s-0">
							<Button
								label="START A PROJECT"
								className="btn-primary"
								href="/contact"
							/>


							<Button
								label="MORE ABOUT ME"
								className="btn-primary"
								href="/about"
							/>
						</section>
					</section>
				</PageContainer>

				<section className="s-2">
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

					<a
						href={siteContent.contact.links.behance}
						className="icon-bubble"
						target="_blank"
						rel="noopener noreferrer"
						title="Behance"
					>
						<FaBehance className="contact-icon" />
					</a>
				</section>

				<div className="home-line"></div>
			</Banner>
		</main>
	);
}
