import { cn } from "@/lib/utils";
export default function Section ({ id, className, children }) {
    return (
        <section 
            id={id} 
            className={cn('scroll-mt-16  w-full min-h-[50dvh] py-6 px-6 lg:px-20 ', className)}
        >
            {children}
        </section>
    );
}