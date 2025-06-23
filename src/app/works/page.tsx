"use client";

import Banner from "@/components/banner";
import MasonryGallery from "@/components/mansoryGallery";
import PageContainer from "@/components/pageContainer";
import { siteContent } from "@/content/siteContent";
import { useAutoRouteScroll } from "@/hooks/useAutoRouteScroll";

const pageOrder = ["/", "/about", "/tech-stack", "/works", "/clients", "/contact"];

export default function WorksPage() {

    useAutoRouteScroll(pageOrder);

    return (
        <main className="works">
            <Banner>
                <PageContainer>
                    <section className="s-1">
                        <h4>{siteContent.projects.hero.title}</h4>
                        <h1>{siteContent.projects.hero.heading}</h1>
                    </section>

                    <section className="s-1 final">
                        <MasonryGallery
                            items={siteContent.projects.hero.array.map(project => ({
                                ...project,
                                thumb: project.image,
                                full: project.image2x
                            }))}
                        />
                    </section>
                </PageContainer>
            </Banner>
        </main>
    );
}
