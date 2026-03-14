import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

const productName = "Cold Pressed Neem Oil";
const productDetails = `Product: ${productName}\nPrice Range: $1.20–1.80/kg (FOB India)\nExtraction: Mechanical cold pressing\nKey use: Organic farming, cosmetics, Ayurvedic preparations`;
const waMessage = encodeURIComponent(
  `Hello SBZ Enterprises,\n\nI am interested in requesting a price quote for the following product from your website:\n\n${productDetails}\n\nPlease provide pricing, MOQ, and availability. Thank you.`,
);

export default function ColdPressedNeemOil() {
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
          <h1 className="text-4xl font-bold mb-3">Cold Pressed Neem Oil</h1>
          <p className="text-green-200 text-lg">
            100% mechanical extraction preserving natural bioactive compounds
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Product Description
            </h2>
            <p className="text-gray-600 mb-6">
              Cold pressed neem oil is produced through mechanical extraction
              without excessive heat, preserving the natural bioactive compounds
              found in neem seeds. It retains the highest concentration of
              Azadirachtin and other key actives.
            </p>
            <h3
              className="font-semibold mb-3"
              style={{ color: "oklch(0.35 0.14 145)" }}
            >
              Key Characteristics
            </h3>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ["Appearance", "Dark brown to greenish brown oil"],
                  ["Odor", "Strong natural neem aroma"],
                  ["Extraction", "Mechanical cold pressing"],
                  ["Purity", "100% natural oil"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-green-50">
                    <td className="py-2 pr-4 font-medium text-gray-700 w-1/3">
                      {k}
                    </td>
                    <td className="py-2 text-gray-500">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-xl border border-green-100 p-5">
              <h3
                className="font-semibold mb-3"
                style={{ color: "oklch(0.28 0.10 145)" }}
              >
                Technical Specifications
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Specific Gravity", "0.90 – 0.94"],
                    ["Moisture", "Less than 1%"],
                    ["Acid Value", "10 – 20"],
                    ["Azadirachtin", "Naturally present"],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-green-100">
                      <td className="py-1.5 pr-4 text-gray-600">{k}</td>
                      <td
                        className="py-1.5 font-medium"
                        style={{ color: "oklch(0.35 0.14 145)" }}
                      >
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-xl border border-green-100 p-5">
              <h3
                className="font-semibold mb-3"
                style={{ color: "oklch(0.28 0.10 145)" }}
              >
                Applications
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {[
                  "Organic farming and bio pesticide formulations",
                  "Cosmetic products and herbal skin care",
                  "Herbal medicines and Ayurvedic preparations",
                  "Animal care and veterinary products",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <span style={{ color: "oklch(0.42 0.14 145)" }}>•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-xl border border-green-100 p-5">
            <h3
              className="font-semibold mb-2"
              style={{ color: "oklch(0.35 0.14 145)" }}
            >
              Packaging Options
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {[
                "200L HDPE Drums",
                "1000L IBC Tanks",
                "20MT Bulk Tankers",
                "Custom packaging on request",
              ].map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl border border-green-100 p-5">
            <h3
              className="font-semibold mb-2"
              style={{ color: "oklch(0.35 0.14 145)" }}
            >
              Market Price Indicator
            </h3>
            <div
              className="text-2xl font-bold"
              style={{ color: "oklch(0.42 0.14 145)" }}
            >
              $1.20–1.80/kg
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Indicative FOB India price
            </div>
          </div>
          <div className="bg-green-50 rounded-xl border border-green-100 p-5">
            <h3
              className="font-semibold mb-2"
              style={{ color: "oklch(0.35 0.14 145)" }}
            >
              Global Demand
            </h3>
            <p className="text-sm text-gray-600">
              Strong demand from USA, EU, Brazil, and Australia for organic
              farming and cosmetic applications.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/919188520881?text=${waMessage}`}
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
