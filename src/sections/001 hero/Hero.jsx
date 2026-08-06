import { Carrousel, Section } from "@/components";
import { carrouselImages } from "@/data";
import { HeroArticle } from ".";

export default function Hero () {
    return (
        <Section id="hero-section" className="flex flex-col-reverse xs:max-md:items-center xs:max-md:space-y-20 md:flex-row md:justify-evenly md:space-x-6">
            <HeroArticle />
            <Carrousel images={carrouselImages} />
        </Section>
    );
}