import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const importData = [
  { country: "USA", value: 35 },
  { country: "Germany", value: 28 },
  { country: "Netherlands", value: 22 },
  { country: "UK", value: 18 },
  { country: "Brazil", value: 15 },
  { country: "Australia", value: 12 },
  { country: "UAE", value: 10 },
  { country: "S. Africa", value: 8 },
];

const markers: { country: string; cx: number; cy: number }[] = [
  { country: "USA", cx: 185, cy: 195 },
  { country: "UK", cx: 460, cy: 148 },
  { country: "Germany", cx: 495, cy: 158 },
  { country: "Netherlands", cx: 480, cy: 150 },
  { country: "Brazil", cx: 260, cy: 320 },
  { country: "UAE", cx: 590, cy: 222 },
  { country: "S. Africa", cx: 510, cy: 380 },
  { country: "Australia", cx: 790, cy: 370 },
];

export default function GlobalExportMarkets() {
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
          <h1 className="text-4xl font-bold mb-3">Global Export Markets</h1>
          <p className="text-green-200 text-lg">
            India's neem oil reaches buyers across 6 continents
          </p>
        </div>
      </section>

      {/* Trade Map */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2
          className="text-2xl font-bold mb-3 text-center"
          style={{ color: "oklch(0.28 0.10 145)" }}
        >
          Global Neem Oil Trade Map
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Key importing regions &mdash; SBZ exports to all marked countries
        </p>
        <div className="bg-white rounded-xl border border-green-100 p-4 shadow-sm overflow-hidden">
          <svg
            viewBox="0 0 1000 500"
            className="w-full"
            style={{ maxHeight: 380 }}
            role="img"
            aria-label="World map showing neem oil export destinations"
          >
            <title>Global Neem Oil Export Destinations</title>
            <rect width="1000" height="500" fill="#f0f7f0" rx="8" />
            <ellipse
              cx="200"
              cy="200"
              rx="130"
              ry="100"
              fill="#c8e6c9"
              opacity="0.7"
            />
            <ellipse
              cx="260"
              cy="340"
              rx="70"
              ry="90"
              fill="#c8e6c9"
              opacity="0.7"
            />
            <ellipse
              cx="490"
              cy="160"
              rx="60"
              ry="50"
              fill="#c8e6c9"
              opacity="0.7"
            />
            <ellipse
              cx="500"
              cy="310"
              rx="70"
              ry="110"
              fill="#c8e6c9"
              opacity="0.7"
            />
            <ellipse
              cx="680"
              cy="200"
              rx="160"
              ry="100"
              fill="#c8e6c9"
              opacity="0.7"
            />
            <ellipse
              cx="790"
              cy="370"
              rx="75"
              ry="60"
              fill="#c8e6c9"
              opacity="0.7"
            />
            <circle cx="640" cy="230" r="8" fill="#e65c00" />
            <text
              x="640"
              y="252"
              textAnchor="middle"
              fontSize="10"
              fill="#7a3500"
              fontWeight="bold"
            >
              India
            </text>
            {markers.map((m) => (
              <g key={m.country}>
                <line
                  x1="640"
                  y1="230"
                  x2={m.cx}
                  y2={m.cy}
                  stroke="#4caf50"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  opacity="0.5"
                />
                <circle
                  cx={m.cx}
                  cy={m.cy}
                  r="10"
                  fill="#2e7d32"
                  opacity="0.85"
                />
                <text
                  x={m.cx}
                  y={m.cy + 22}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#1b5e20"
                  fontWeight="600"
                >
                  {m.country}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          Schematic representation of key export destinations
        </p>
      </section>

      {/* Bar chart */}
      <section
        className="py-12 px-4"
        style={{ backgroundColor: "oklch(0.97 0.02 145)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-8"
            style={{ color: "oklch(0.28 0.10 145)" }}
          >
            Top Importing Countries (Relative Volume Index)
          </h2>
          <div className="bg-white rounded-xl border border-green-100 p-6 shadow-sm">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={importData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5f0e5" />
                <XAxis dataKey="country" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {importData.map((entry, i) => (
                    <Cell
                      key={entry.country}
                      fill={i === 0 ? "#2e7d32" : "#4caf50"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "oklch(0.28 0.10 145)" }}
        >
          Market Highlights
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              region: "Europe",
              text: "Fastest growing market. EU regulations restricting synthetic pesticides are driving demand for neem-based alternatives.",
            },
            {
              region: "North America",
              text: "USA and Canada have strong demand from organic farming and natural cosmetics sectors.",
            },
            {
              region: "Middle East & Africa",
              text: "UAE serves as a distribution hub. South Africa has a growing organic agriculture sector.",
            },
            {
              region: "Asia Pacific",
              text: "Australia has stringent organic standards and strong demand for certified bio inputs.",
            },
            {
              region: "South America",
              text: "Brazil is one of the largest agricultural markets globally with rising organic adoption.",
            },
          ].map((m) => (
            <div
              key={m.region}
              className="bg-white rounded-xl border border-green-100 p-5"
            >
              <h3
                className="font-semibold mb-2"
                style={{ color: "oklch(0.35 0.14 145)" }}
              >
                {m.region}
              </h3>
              <p className="text-sm text-gray-500">{m.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
