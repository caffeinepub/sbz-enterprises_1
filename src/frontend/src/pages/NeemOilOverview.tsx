import { Leaf } from "lucide-react";

const compounds = [
  {
    name: "Azadirachtin",
    role: "Primary insecticidal compound, disrupts insect growth and reproduction",
  },
  { name: "Nimbin", role: "Antifungal and anti-inflammatory properties" },
  { name: "Salannin", role: "Insect feeding deterrent and repellent" },
  { name: "Gedunin", role: "Antimalarial and antifungal bioactive compound" },
];

const applications = [
  {
    sector: "Agriculture",
    desc: "Natural insecticides and crop protection formulations. Used in organic pest management globally.",
  },
  {
    sector: "Cosmetics",
    desc: "Hair care, skin treatments, anti-dandruff products, and herbal cosmetic formulations.",
  },
  {
    sector: "Pharmaceuticals",
    desc: "Traditional Ayurvedic medicine, therapeutic oils, and herbal medicinal preparations.",
  },
  {
    sector: "Industrial",
    desc: "Eco-friendly soap manufacturing, industrial pest control formulations, and wood preservatives.",
  },
];

export default function NeemOilOverview() {
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
          <h1 className="text-4xl font-bold mb-4">Neem Oil Overview</h1>
          <p className="text-green-100 text-lg">
            Botanical Name: <em>Azadirachta indica</em>
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
              What is Neem Oil?
            </h2>
            <p className="text-gray-600 mb-4">
              Neem oil is extracted from the seeds of the neem tree (
              <em>Azadirachta indica</em>), a fast-growing tree native to the
              Indian subcontinent. It contains several powerful bioactive
              compounds that give it insecticidal, antifungal, antibacterial,
              and medicinal properties.
            </p>
            <p className="text-gray-600">
              India is the world's largest producer of neem-based products, with
              over 25 million neem trees across the country providing a
              sustainable and abundant raw material base.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl border border-green-100 p-6">
            <h3
              className="font-bold mb-4"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Key Bioactive Compounds
            </h3>
            <div className="space-y-3">
              {compounds.map((c) => (
                <div key={c.name} className="flex items-start gap-3">
                  <Leaf
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.42 0.14 145)" }}
                  />
                  <div>
                    <div className="font-semibold text-sm">{c.name}</div>
                    <div className="text-xs text-gray-500">{c.role}</div>
                  </div>
                </div>
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
            Global Applications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((a) => (
              <div
                key={a.sector}
                className="bg-white rounded-xl border border-green-100 p-5"
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "oklch(0.35 0.14 145)" }}
                >
                  {a.sector}
                </h3>
                <p className="text-sm text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
