import { MessageCircle } from "lucide-react";

const grades = [
  {
    conc: "300 ppm",
    use: "Entry-level bio pesticide formulations",
    price: "$8–12/kg",
  },
  {
    conc: "1500 ppm",
    use: "Commercial agricultural pesticide blends",
    price: "$18–25/kg",
  },
  {
    conc: "3000 ppm",
    use: "High-strength organic crop protection",
    price: "$35–50/kg",
  },
  {
    conc: "10000 ppm",
    use: "Industrial-scale bio pesticide concentrate",
    price: "Contact for pricing",
  },
];

function gradeWhatsAppLink(grade: {
  conc: string;
  use: string;
  price: string;
}) {
  const msg = encodeURIComponent(
    `Hello SBZ Enterprises,\n\nI am interested in requesting a price quote for the following product from your website:\n\nProduct: Azadirachtin Extract\nConcentration: ${grade.conc}\nUse: ${grade.use}\nPrice Range: ${grade.price}\n\nPlease provide pricing, MOQ, and availability. Thank you.`,
  );
  return `https://wa.me/919188520881?text=${msg}`;
}

const generalWaMessage = encodeURIComponent(
  "Hello SBZ Enterprises,\n\nI am interested in Azadirachtin Extract from your website and would like to request pricing information for available concentrations (300 ppm, 1500 ppm, 3000 ppm, 10000 ppm).\n\nPlease provide pricing, MOQ, and availability. Thank you.",
);

export default function AzadirachtinExtract() {
  return (
    <div>
      <section
        className="py-16 px-4 text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 145), oklch(0.40 0.13 145))",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Azadirachtin Extract</h1>
          <p className="text-green-200 text-lg">
            Standardized concentrates from 300 ppm to 10,000 ppm
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Product Description
            </h2>
            <p className="text-gray-600 mb-4">
              Azadirachtin is the primary active compound responsible for neem's
              powerful insecticidal properties. It disrupts insect growth,
              feeding, and reproduction through multiple biological mechanisms,
              making it highly effective against over 200 insect species.
            </p>
            <p className="text-gray-600">
              Our standardized extracts are used by agricultural chemical
              companies to formulate commercial bio pesticides that comply with
              organic certification standards worldwide.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl border border-green-100 p-6">
            <h3
              className="font-semibold mb-3"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Why Azadirachtin?
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              {[
                "Broad-spectrum insect growth regulator",
                "OMRI listed for organic use",
                "Biodegradable — no soil or water persistence",
                "Approved for use in EU, USA, and Australia",
                "Does not harm beneficial insects at standard doses",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span style={{ color: "oklch(0.42 0.14 145)" }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "oklch(0.28 0.10 145)" }}
        >
          Available Concentrations
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {grades.map((g) => (
            <div
              key={g.conc}
              className="bg-white rounded-xl border border-green-100 p-5"
            >
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: "oklch(0.42 0.14 145)" }}
              >
                {g.conc}
              </div>
              <div className="text-sm text-gray-500 mb-3">{g.use}</div>
              <div
                className="text-sm font-semibold mb-3"
                style={{ color: "oklch(0.35 0.14 145)" }}
              >
                {g.price}
              </div>
              <a
                href={gradeWhatsAppLink(g)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white px-3 py-1.5 rounded-lg"
                style={{ backgroundColor: "#25D366" }}
                data-ocid="product.whatsapp_button"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Request Quote
              </a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={`https://wa.me/919188520881?text=${generalWaMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-white px-8 py-3 rounded-lg"
            style={{ backgroundColor: "#25D366" }}
            data-ocid="product.whatsapp_button"
          >
            <MessageCircle className="w-5 h-5" /> Request Quote via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
