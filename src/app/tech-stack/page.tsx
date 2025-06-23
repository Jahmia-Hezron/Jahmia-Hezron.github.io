"use client";

import Banner from "@/components/banner";
import PageContainer from "@/components/pageContainer";
import { siteContent } from "@/content/siteContent";
import { useAutoRouteScroll } from "@/hooks/useAutoRouteScroll";

const pageOrder = ["/", "/about", "/tech-stack", "/works", "/clients", "/contact"];

export default function TechStackPage() {
    useAutoRouteScroll(pageOrder);
    return (
        <main className="tech-stack">
            <Banner>
                <PageContainer>
                    <section className="s-1">
                        <h4>{siteContent.techStack.hero.title}</h4>
                        <h1>{siteContent.techStack.hero.heading}</h1>
                    </section>

                    <section className="s-0 final">
                        {Object.entries(siteContent.techStack.hero.array).map(([key, value]) => (
                            <div className="s-1" key={key}>
                                <h3>{value.category}</h3>
                                <ul>
                                    {Array.isArray(value.items) && value.items.map((tool: { name: string; icon: React.ElementType }) => (
                                        <li key={tool.name} className="s-0">
                                            {tool.icon && <tool.icon className="stack-icon" />}
                                            {tool.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                </PageContainer>
            </Banner>
        </main>
    );
}
