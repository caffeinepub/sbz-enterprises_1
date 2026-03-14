const sectors = [
  {
    name: "Agriculture",
    desc: "Neem oil is widely used in organic farming as a natural insecticide and fungicide. It is effective against over 200 species of insects and is approved for use in certified organic agriculture.",
    uses: [
      "Foliar spray for insect control",
      "Soil drench for root pests",
      "Seed treatment for fungal protection",
      "Post-harvest storage protection",
    ],
    market: "Bio pesticide market >$14B by 2030",
  },
  {
    name: "Cosmetics",
    desc: "Cold pressed and double filtered neem oil is a popular ingredient in natural cosmetics due to its high fatty acid content, Vitamin E, and antibacterial properties.",
    uses: [
      "Anti-acne and skin care formulations",
      "Hair oil and scalp treatments",
      "Anti-dandruff shampoos",
      "Herbal face creams and serums",
    ],
    market: "Natural cosmetics market >$50B by 2027",
  },
  {
    name: "Pharmaceuticals",
    desc: "Neem has been used in traditional Ayurvedic medicine for thousands of years. Modern pharmaceutical companies incorporate neem extracts in various therapeutic formulations.",
    uses: [
      "Topical antimicrobial treatments",
      "Herbal toothpaste and oral care",
      "Anti-parasitic preparations",
      "Immunomodulatory formulations",
    ],
    market: "Herbal medicine market growing at 8% CAGR",
  },
  {
    name: "Veterinary Products",
    desc: "Neem oil is increasingly used in pet care and veterinary products as a natural alternative to chemical-based treatments.",
    uses: [
      "Tick and flea repellent formulations",
      "Animal skin condition treatments",
      "Livestock pest management",
      "Poultry disease prevention",
    ],
    market: "Natural pet care growing rapidly post-2020",
  },
];

export default function IndustryApplications() {
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
          <h1 className="text-4xl font-bold mb-3">Industry Applications</h1>
          <p className="text-green-200 text-lg">
            Neem oil serves diverse industries across global markets
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-5xl mx-auto space-y-12">
        {sectors.map((s, i) => (
          <div
            key={s.name}
            className={`grid md:grid-cols-2 gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ color: "oklch(0.28 0.10 145)" }}
              >
                {s.name}
              </h2>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <div
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "oklch(0.93 0.05 145)",
                  color: "oklch(0.35 0.14 145)",
                }}
              >
                {s.market}
              </div>
            </div>
            <div className="bg-green-50 rounded-xl border border-green-100 p-5">
              <h3
                className="font-semibold mb-3"
                style={{ color: "oklch(0.35 0.14 145)" }}
              >
                Key Uses
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                {s.uses.map((u) => (
                  <li key={u} className="flex items-start gap-2">
                    <span style={{ color: "oklch(0.42 0.14 145)" }}>•</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
