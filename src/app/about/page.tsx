'use client';

import Banner from "@/components/banner";
import PageContainer from "@/components/pageContainer";
import { siteContent } from "@/content/siteContent";
import { useAutoRouteScroll } from "@/hooks/useAutoRouteScroll";
import CountUp from "react-countup";


const pageOrder = ["/", "/about", "/tech-stack", "/works", "/clients", "/contact"];

export default function AboutPage() {
    useAutoRouteScroll(pageOrder);
    return (
        <main className="about">
            <Banner>
                <PageContainer>
                    <section className="s-1">
                        <h4>{siteContent.about.hero.title}</h4>
                        <h1>{siteContent.about.hero.heading}</h1>
                        {Object.entries(siteContent.about.hero.body).map(([key, value]) => (
                            <p key={key}>{value.p}</p>
                        ))}
                    </section>
                </PageContainer>

                <PageContainer>
                    <section className="s-0 final">
                        <div className="stat-box">
                            <CountUp end={198} duration={3} />
                            <p>Cups of Coffee</p>
                        </div>
                        <div className="stat-box">
                            <CountUp end={14} duration={3} />
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-box">
                            <CountUp end={11} duration={3} />
                            <p>Happy Clients</p>
                        </div>
                    </section>
                </PageContainer>
            </Banner>
        </main>
    );
}
