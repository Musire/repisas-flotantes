import { Carrousel, Section } from "@/components";
import { carrouselImages } from "@/data";
import { HeroArticle } from ".";

export default function Hero () {
    return (
        <Section id="hero-section" className="flex flex-col-reverse xs:max-lg:items-center xs:max-lg:space-y-10 md:flex-col lg:flex-row lg:justify-evenly md:space-x-6 ">
            <HeroArticle />
            <Carrousel images={carrouselImages} />
        </Section>
    );
}