import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    q: "What is the minimum order quantity for neem oil exports?",
    a: "MOQ typically starts at 1 MT for bulk orders. Full container loads are 18\u201320 MT for drums. We accommodate smaller trial orders for verified buyers.",
  },
  {
    q: "What certifications do your neem oil products carry?",
    a: "Products are tested by SGS, Bureau Veritas, or Intertek on request. A Certificate of Analysis is provided with every shipment. Organic certification is available for select products.",
  },
  {
    q: "Which countries do you export to?",
    a: "We export to USA, EU (Germany, Netherlands, UK, France, Spain), Brazil, South Africa, Australia, UAE, and many more. Contact us for specific country requirements.",
  },
  {
    q: "What is the shelf life of neem oil?",
    a: "Cold pressed neem oil: 12\u201318 months. Filtered variants: 18\u201324 months when stored in a cool, dry place away from sunlight. Azadirachtin extracts: 18\u201324 months sealed.",
  },
  {
    q: "What packaging options are available?",
    a: "200L HDPE drums, 1000L IBC tanks, or bulk tankers for very large orders. Custom labeling available for OEM buyers.",
  },
  {
    q: "How long does shipping take?",
    a: "20\u201335 days by sea to Europe, 25\u201345 days to the Americas. Air freight is available for urgent smaller consignments.",
  },
  {
    q: "Do you provide phytosanitary and organic certificates?",
    a: "Yes, on request and subject to the specific requirements of the importing country. We coordinate with relevant certification bodies.",
  },
  {
    q: "What payment terms do you offer?",
    a: "Standard terms: LC at sight or TT with advance payment. Negotiated terms including partial advance available for established buyers.",
  },
];

export default function FAQ() {
  return (
    <div>
      <section
        className="py-16 px-4 text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 145), oklch(0.40 0.13 145))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-green-200">
            Common questions from international buyers
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i + 1}`}
              className="bg-white border border-green-100 rounded-xl px-2"
              data-ocid={`faq.item.${i + 1}`}
            >
              <AccordionTrigger
                className="text-left font-medium hover:no-underline px-4"
                style={{ color: "oklch(0.28 0.10 145)" }}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600 text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
