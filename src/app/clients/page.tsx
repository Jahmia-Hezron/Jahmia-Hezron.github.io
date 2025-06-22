"use client";

import Banner from "@/components/banner";
import ClientsTickerCarousel from "@/components/clientsTickerCarousel";
import PageContainer from "@/components/pageContainer";
import TestimonialCard from "@/components/testimonial";
import { siteContent } from "@/content/siteContent";
import { useAutoRouteScroll } from "@/hooks/useAutoRouteScroll";

const pageOrder = ["/", "/about", "/tech-stack", "/works", "/clients", "/contact"];


export default function ClientPage() {
    useAutoRouteScroll(pageOrder);
    return (

        <main className="clients">
            <Banner>
                <PageContainer>
                    <section className="s-1">
                        <h4>{siteContent.clients.hero.title}</h4>
                        <div className="sensor"><h1>{siteContent.clients.hero.heading}</h1></div>
                    </section>
                </PageContainer>

                <PageContainer>
                    <section className="s-0">
                        <ClientsTickerCarousel logos={siteContent.clients.hero.logos.map((logo: { image: string }) => logo.image)} />
                    </section>
                </PageContainer>

                <PageContainer>
                    <section className="s-0 final">
                        {siteContent.clients.hero.array.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                quote={testimonial.quote}
                            />
                        ))}
                    </section>
                </PageContainer>
            </Banner>
        </main>
    );
}
