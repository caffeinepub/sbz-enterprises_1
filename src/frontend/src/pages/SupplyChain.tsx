import {
  ArrowRight,
  Cog,
  FileText,
  Filter,
  FlaskConical,
  Leaf,
  Ship,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: Leaf,
    title: "Neem Seeds",
    desc: "Seeds collected from neem-growing regions across India via rural supply networks",
  },
  {
    icon: Truck,
    title: "Rural Collection",
    desc: "Seeds transported from collection points to processing centers",
  },
  {
    icon: Cog,
    title: "Mechanical Extraction",
    desc: "Oil extracted using mechanical cold presses, preserving bioactive compounds",
  },
  {
    icon: Filter,
    title: "Filtration",
    desc: "Oil filtered once or twice depending on grade specifications",
  },
  {
    icon: FlaskConical,
    title: "Quality Testing",
    desc: "Moisture, acid value, Azadirachtin content, and purity analyzed",
  },
  {
    icon: FileText,
    title: "Export Documentation",
    desc: "CoA, CoO, MSDS, packing list and invoice prepared for customs",
  },
  {
    icon: Ship,
    title: "International Shipment",
    desc: "Loaded into 200L drums or IBC tanks and shipped to global buyers",
  },
];

export default function SupplyChain() {
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
          <h1 className="text-4xl font-bold mb-3">Supply Chain & Sourcing</h1>
          <p className="text-green-200 text-lg">
            From neem seed to international delivery — full traceability
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2
          className="text-2xl font-bold text-center mb-3"
          style={{ color: "oklch(0.28 0.10 145)" }}
        >
          Supply Chain Transparency
        </h2>
        <p className="text-center text-gray-500 mb-12">
          SBZ Enterprises coordinates every step from seed sourcing to
          international shipment
        </p>

        {/* Desktop flow */}
        <div className="hidden md:flex items-start justify-between gap-2">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-start flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 text-white"
                  style={{ backgroundColor: "oklch(0.42 0.14 145)" }}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <h3
                  className="font-semibold text-center text-xs mb-1"
                  style={{ color: "oklch(0.28 0.10 145)" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 text-center">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 mt-4 flex-shrink-0 text-green-400" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile flow */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div className="flex items-start gap-4 bg-white rounded-xl border border-green-100 p-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: "oklch(0.42 0.14 145)" }}
                >
                  <step.icon className="w-4 h-4" />
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "oklch(0.28 0.10 145)" }}
                  >
                    Step {i + 1}: {step.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {step.desc}
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-4 bg-green-200 ml-9" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-12 px-4"
        style={{ backgroundColor: "oklch(0.97 0.02 145)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "oklch(0.28 0.10 145)" }}
          >
            SBZ's Role in the Supply Chain
          </h2>
          <p className="text-gray-600">
            SBZ Enterprises acts as the coordination layer — verifying
            suppliers, managing logistics, ensuring documentation compliance,
            and providing buyers with full visibility into the origin and
            processing of their neem oil orders. Our network spans major
            neem-producing regions including Rajasthan, Uttar Pradesh, Tamil
            Nadu, Karnataka, and Andhra Pradesh.
          </p>
        </div>
      </section>
    </div>
  );
}
