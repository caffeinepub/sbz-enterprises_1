import { MessageCircle } from "lucide-react";

const productName = "Filtered Neem Oil";
const productDetails = `Product: ${productName}\nPrice Range: $0.90–1.30/kg (FOB India)\nProcess: Single mechanical filtration\nKey use: Agricultural pesticide formulations, industrial pest control`;
const waMessage = encodeURIComponent(
  `Hello SBZ Enterprises,\n\nI am interested in requesting a price quote for the following product from your website:\n\n${productDetails}\n\nPlease provide pricing, MOQ, and availability. Thank you.`,
);

export default function FilteredNeemOil() {
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
          <h1 className="text-4xl font-bold mb-3">Filtered Neem Oil</h1>
          <p className="text-green-200 text-lg">
            Mechanically filtered for industrial and agricultural applications
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
              Filtered neem oil undergoes mechanical filtration to remove
              suspended particles and impurities. It is widely used in
              agricultural pesticide formulations and bulk industrial
              applications where high purity is not the primary requirement.
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
                  ["Appearance", "Brown colored oil"],
                  ["Odor", "Strong natural neem aroma"],
                  ["Process", "Single mechanical filtration"],
                  ["Primary Use", "Agricultural & industrial"],
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
                Applications
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {[
                  "Agricultural pesticide formulations",
                  "Industrial pest control",
                  "Bulk bio-input manufacturing",
                  "Neem cake processing by-product",
                ].map((a) => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-green-100 p-5">
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
                $0.90–1.30/kg
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Indicative FOB India price
              </div>
            </div>
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
