import { FlaskConical, Shield } from "lucide-react";

const tests = [
  {
    name: "Moisture Analysis",
    desc: "Measures water content to ensure oil stability and prevent microbial growth during storage and transit. Maximum acceptable: 1%.",
  },
  {
    name: "Acid Value Testing",
    desc: "Indicates degree of hydrolysis and oil quality. Typical range for cold pressed: 10–20 mg KOH/g.",
  },
  {
    name: "Azadirachtin Content",
    desc: "HPLC analysis confirms the concentration of primary bioactive compound. Critical for bio pesticide formulations.",
  },
  {
    name: "Purity Testing",
    desc: "Ensures absence of adulterants, mineral oils, or other vegetable oils. Confirms 100% neem origin.",
  },
];

const inspectors = [
  {
    name: "SGS",
    desc: "World's leading inspection, verification, testing and certification company",
  },
  {
    name: "Bureau Veritas",
    desc: "Global leader in testing, inspection and certification services",
  },
  {
    name: "Intertek",
    desc: "Total quality assurance provider serving industries worldwide",
  },
];

export default function QualityControl() {
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
          <h1 className="text-4xl font-bold mb-3">
            Quality Control & Certifications
          </h1>
          <p className="text-green-200 text-lg">
            Rigorous testing standards for international compliance
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2
          className="text-2xl font-bold mb-8"
          style={{ color: "oklch(0.28 0.10 145)" }}
        >
          Quality Testing Procedures
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {tests.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl border border-green-100 p-6"
            >
              <FlaskConical
                className="w-7 h-7 mb-3"
                style={{ color: "oklch(0.42 0.14 145)" }}
              />
              <h3
                className="font-semibold mb-2"
                style={{ color: "oklch(0.28 0.10 145)" }}
              >
                {t.name}
              </h3>
              <p className="text-sm text-gray-500">{t.desc}</p>
            </div>
          ))}
        </div>
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "oklch(0.28 0.10 145)" }}
        >
          Third-Party Inspection Partners
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {inspectors.map((ins) => (
            <div
              key={ins.name}
              className="bg-green-50 rounded-xl border border-green-100 p-6 text-center"
            >
              <Shield
                className="w-10 h-10 mx-auto mb-3"
                style={{ color: "oklch(0.42 0.14 145)" }}
              />
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "oklch(0.28 0.10 145)" }}
              >
                {ins.name}
              </h3>
              <p className="text-sm text-gray-500">{ins.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
