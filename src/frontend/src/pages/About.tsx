import { BarChart2, FileCheck, Globe, Leaf, MapPin, Truck } from "lucide-react";

const functions = [
  {
    icon: Globe,
    title: "Supplier Coordination",
    desc: "We work with verified processing partners across major neem-producing regions in India.",
  },
  {
    icon: FileCheck,
    title: "Quality Verification",
    desc: "Every batch is tested for moisture, acid value, and Azadirachtin content before export.",
  },
  {
    icon: FileCheck,
    title: "Export Documentation",
    desc: "Complete documentation support including CoA, CoO, MSDS, and phytosanitary certificates.",
  },
  {
    icon: Truck,
    title: "Logistics Management",
    desc: "End-to-end logistics coordination from Indian processing centers to international ports.",
  },
  {
    icon: BarChart2,
    title: "International Trade Facilitation",
    desc: "Market expertise to help buyers navigate Indian import/export regulations.",
  },
];

const regions = [
  "Rajasthan",
  "Uttar Pradesh",
  "Tamil Nadu",
  "Karnataka",
  "Andhra Pradesh",
];

export default function About() {
  return (
    <div>
      <section
        className="py-16 px-4 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 145), oklch(0.40 0.13 145))",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Leaf className="w-10 h-10 mx-auto mb-4 text-green-300" />
          <h1 className="text-4xl font-bold mb-4">About SBZ Enterprises</h1>
          <p className="text-green-100 text-lg">
            Facilitating Agricultural Exports from India
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              SBZ Enterprises operates as an export facilitation and trading
              platform connecting global buyers with high-quality agricultural
              products sourced from India.
            </p>
            <p className="text-gray-600">
              Our objective is to simplify international procurement for buyers
              while ensuring transparent sourcing and efficient logistics. Our
              supply network includes processing partners across neem-producing
              regions throughout India.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <h3
              className="font-bold mb-4"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Why India for Neem Oil
            </h3>
            <div className="flex items-start gap-3 mb-4">
              <Leaf
                className="w-5 h-5 mt-0.5 flex-shrink-0"
                style={{ color: "oklch(0.42 0.14 145)" }}
              />
              <div>
                <div className="font-semibold">25+ Million Neem Trees</div>
                <div className="text-sm text-gray-500">
                  India has the world's largest natural population of neem trees
                </div>
              </div>
            </div>
            <div
              className="font-semibold text-sm mb-2"
              style={{ color: "oklch(0.35 0.14 145)" }}
            >
              Major Producing Regions:
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map((r) => (
                <span
                  key={r}
                  className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border"
                  style={{
                    backgroundColor: "oklch(0.93 0.05 145)",
                    color: "oklch(0.35 0.14 145)",
                    borderColor: "oklch(0.80 0.08 145)",
                  }}
                >
                  <MapPin className="w-3 h-3" />
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4"
        style={{ backgroundColor: "oklch(0.97 0.02 145)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "oklch(0.28 0.10 145)" }}
          >
            Key Functions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {functions.map((fn) => (
              <div
                key={fn.title}
                className="bg-white rounded-xl border border-green-100 p-6"
              >
                <fn.icon
                  className="w-8 h-8 mb-3"
                  style={{ color: "oklch(0.42 0.14 145)" }}
                />
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "oklch(0.28 0.10 145)" }}
                >
                  {fn.title}
                </h3>
                <p className="text-sm text-gray-500">{fn.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
