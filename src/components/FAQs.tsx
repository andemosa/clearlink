import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    title: "How many participants can join a ClearLink video conference?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 2,
    title: "Can I use ClearLink on multiple devices?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 3,
    title: "How does ClearLink ensure the security of my video conferences?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 4,
    title: "Do I need to download any software to use ClearLink?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    id: 5,
    title: "What kind of customer support does ClearLink provide?",
    content:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
];

const FAQs = () => {
  return (
    <section className="w-[90%] mx-auto flex flex-col md:flex-row gap-20 justify-between">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <span className="font-semibold text-clear-700">Support</span>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-grey-800">
          FAQs
        </h2>
        <p className="text-grey-500  max-w-md text-lg">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please&nbsp;
          <span className="underline cursor-pointer">chat to our friendly team</span>.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        {faqs.map(({ content, id, title }) => (
          <Accordion type="single" collapsible key={id}>
            <AccordionItem value={`item-${id}`}>
              <AccordionTrigger className="px-2 lg:px-4 text-grey-900 text-left">{title}</AccordionTrigger>
              <AccordionContent className="bg-grey-50 pl-2 pt-2 pr-6 lg:pl-4 lg:pt-4 lg:pr-8 text-grey-600">{content}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
