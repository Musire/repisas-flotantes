import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqCategory({ title, items, className = "" }) {
  return (
    <div className={`w-full max-w-2xl py-4 ${className}`}>
      {/* Category Heading */}
      {title && (
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 mb-6">
          {title}
        </h2>
      )}
      {/* Accordion Group */}
      <Accordion type="single" collapsible className="w-full divide-y divide-y-border border-t border-b border-border">
        {items?.map((item, index) => (
          <AccordionItem 
            key={item.id || index} 
            value={`item-${index}`}
            className="border-b-0 py-1"
          >
            <AccordionTrigger className="text-left text-base font-normal text-neutral-900 hover:no-underline hover:text-neutral-600 [&[data-state=open]>svg]:rotate-45">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-600 leading-relaxed pt-1 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}