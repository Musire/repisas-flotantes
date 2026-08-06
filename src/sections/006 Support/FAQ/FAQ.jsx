import { faq } from "@/data";
import { Section } from "../../../components/Section";
import FaqCategory from "./FaqCategory";

export default function FAQ () {
    return (
        <Section className="flex-col flex items-center">
            {faq?.map(f => {
                return <FaqCategory key={f.id} title={f.title} items={f.items} />
            })}
        </Section>
    );
}