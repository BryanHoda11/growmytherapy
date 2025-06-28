import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
    return (
        <>
            <div className="faq w-[85%] mx-auto my-10">
                <h1 className="text-2xl text-center font-semibold pb-3">FAQs</h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-xl cursor-pointer'>What are your fees?</AccordionTrigger>
                        <AccordionContent className='text-lg'>
                            $200 for Individual session and $240 for Couples session
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-xl cursor-pointer'>Do you accept insurance?</AccordionTrigger>
                        <AccordionContent className='text-lg'>
                            No, but a superbill is provided for self-submission.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-xl cursor-pointer'>Are online sessions available?</AccordionTrigger>
                        <AccordionContent className='text-lg'>
                            Yes — all virtual sessions via Zoom or Google meet.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className='text-xl cursor-pointer'>In which geographical regions do you serve?</AccordionTrigger>
                        <AccordionContent className='text-lg'>
                            I have my clinic in Los Angeles & New York City.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default FAQ
