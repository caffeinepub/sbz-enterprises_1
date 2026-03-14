import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const growthData = [
  { year: 2020, value: 1.8 },
  { year: 2021, value: 2.0 },
  { year: 2022, value: 2.3 },
  { year: 2023, value: 2.6 },
  { year: 2024, value: 3.0 },
  { year: 2026, value: 3.8 },
  { year: 2030, value: 5.5 },
];

const shareData = [
  { name: "India", value: 65 },
  { name: "Others", value: 35 },
];

const importVolume = [
  { country: "USA", value: 35 },
  { country: "Germany", value: 28 },
  { country: "Netherlands", value: 22 },
  { country: "UK", value: 18 },
  { country: "Brazil", value: 15 },
  { country: "Australia", value: 12 },
];

export default function InvestorInsights() {
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
            Investor & Market Insights
          </h1>
          <p className="text-green-200 text-lg">
            Data-driven analysis of the global neem oil and bio pesticide market
          </p>
        </div>
      </section>

      {/* Main growth chart */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{ color: "oklch(0.28 0.10 145)" }}
        >
          Global Neem Oil Market Growth
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Market size in USD Billion, 2020–2030
        </p>
        <div className="bg-white rounded-xl border border-green-100 p-6 shadow-sm">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5f0e5" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                domain={[0, 6]}
                tickFormatter={(v) => `$${v}B`}
              />
              <Tooltip formatter={(v) => [`$${v}B`, "Market Size"]} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="oklch(0.42 0.14 145)"
                strokeWidth={3}
                dot={{ fill: "oklch(0.42 0.14 145)", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-8 px-4"
        style={{ backgroundColor: "oklch(0.97 0.02 145)" }}
      >
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
          {[
            { label: "Bio Pesticide Market 2024", value: "$6.5B" },
            { label: "Bio Pesticide Market 2030", value: "$14B" },
            { label: "Expected CAGR", value: "~13.5%" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-xl border border-green-100 p-6 text-center"
            >
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "oklch(0.42 0.14 145)" }}
              >
                {s.value}
              </div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Two charts side by side */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-green-100 p-6 shadow-sm">
            <h3
              className="font-bold text-center mb-4"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              India's Share in Global Neem Exports
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={shareData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  <Cell fill="oklch(0.42 0.14 145)" />
                  <Cell fill="oklch(0.85 0.05 145)" />
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl border border-green-100 p-6 shadow-sm">
            <h3
              className="font-bold text-center mb-4"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Top Importing Countries
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={importVolume} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5f0e5" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis
                  dataKey="country"
                  type="category"
                  tick={{ fontSize: 11 }}
                  width={70}
                />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="oklch(0.50 0.13 145)"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
