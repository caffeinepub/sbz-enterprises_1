import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Leaf,
  MessageCircle,
  Phone,
  Shield,
  TrendingUp,
} from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const priceData = [
  {
    product: "Cold Pressed Neem Oil",
    grade: "Standard",
    price: "$1.20\u20131.80/kg",
    trend: "\u2191",
    up: true,
  },
  {
    product: "Filtered Neem Oil",
    grade: "Standard",
    price: "$0.90\u20131.30/kg",
    trend: "\u2192",
    up: null,
  },
  {
    product: "Double Filtered Neem Oil",
    grade: "Premium",
    price: "$1.50\u20132.20/kg",
    trend: "\u2191",
    up: true,
  },
  {
    product: "Azadirachtin Extract",
    grade: "300 ppm",
    price: "$8\u201312/kg",
    trend: "\u2191",
    up: true,
  },
  {
    product: "Azadirachtin Extract",
    grade: "1500 ppm",
    price: "$18\u201325/kg",
    trend: "\u2191",
    up: true,
  },
  {
    product: "Azadirachtin Extract",
    grade: "3000 ppm",
    price: "$35\u201350/kg",
    trend: "\u2191",
    up: true,
  },
];

const products = [
  {
    name: "Cold Pressed Neem Oil",
    desc: "100% mechanical extraction, preserving natural bioactive compounds",
    href: "/cold-pressed-neem-oil",
  },
  {
    name: "Filtered Neem Oil",
    desc: "Mechanically filtered for agricultural and industrial applications",
    href: "/filtered-neem-oil",
  },
  {
    name: "Double Filtered Neem Oil",
    desc: "Superior clarity for cosmetic and pharmaceutical use",
    href: "/double-filtered-neem-oil",
  },
  {
    name: "Azadirachtin Extract",
    desc: "Standardized concentrations from 300 ppm to 10,000 ppm",
    href: "/azadirachtin-extract",
  },
];

const industries = [
  "Organic Agriculture",
  "Bio Pesticide Manufacturing",
  "Cosmetic Formulation",
  "Herbal Pharmaceuticals",
  "Veterinary Products",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 145) 0%, oklch(0.35 0.13 145) 60%, oklch(0.50 0.14 145) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
            <Leaf className="w-4 h-4" />
            India's Premier Neem Oil Export Facilitator
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Facilitating Global Export of
            <br />
            <span className="text-green-300">Neem Oil from India</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-8">
            SBZ Enterprises connects international buyers with India's finest
            neem oil producers through a structured, transparent, and reliable
            export network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cold-pressed-neem-oil"
              className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              style={{ color: "oklch(0.35 0.14 145)" }}
            >
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Export Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-green-50 border-b border-green-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-sm text-green-800">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> SGS Inspected
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Bureau Veritas
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Intertek Certified
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-4 h-4" /> Exporting to 20+ Countries
          </div>
          <div className="flex items-center gap-1.5">
            <Leaf className="w-4 h-4" /> 100% Natural Products
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold text-center mb-3"
          style={{ color: "oklch(0.28 0.10 145)" }}
        >
          Key Export Products
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Premium neem-based products sourced from India's finest producers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              className="group block bg-white rounded-xl border border-green-100 p-6 hover:shadow-lg hover:border-green-300 transition-all"
            >
              <div
                className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.93 0.05 145)" }}
              >
                <Leaf
                  className="w-5 h-5"
                  style={{ color: "oklch(0.42 0.14 145)" }}
                />
              </div>
              <h3
                className="font-semibold mb-2"
                style={{ color: "oklch(0.28 0.10 145)" }}
              >
                {p.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{p.desc}</p>
              <span
                className="text-xs font-medium flex items-center gap-1"
                style={{ color: "oklch(0.42 0.14 145)" }}
              >
                View Details <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Price Dashboard */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "oklch(0.97 0.02 145)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-2"
            style={{ color: "oklch(0.28 0.10 145)" }}
          >
            Live Export Price Dashboard
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Indicative market pricing for international buyers
          </p>
          <div className="bg-white rounded-xl border border-green-100 overflow-hidden shadow-sm">
            <table className="w-full" data-ocid="price.table">
              <thead style={{ backgroundColor: "oklch(0.42 0.14 145)" }}>
                <tr className="text-white text-sm">
                  <th className="text-left px-6 py-4 font-semibold">Product</th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Grade / Concentration
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Price Range (USD/kg)
                  </th>
                  <th className="text-center px-4 py-4 font-semibold">Trend</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row) => (
                  <tr
                    key={`${row.product}-${row.grade}`}
                    className={row.up === null ? "bg-white" : "bg-green-50/30"}
                  >
                    <td className="px-6 py-3 text-sm font-medium text-gray-800">
                      {row.product}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {row.grade}
                    </td>
                    <td
                      className="px-4 py-3 text-sm font-semibold"
                      style={{ color: "oklch(0.35 0.14 145)" }}
                    >
                      {row.price}
                    </td>
                    <td className="px-4 py-3 text-center text-lg">
                      <span
                        className={
                          row.up === true
                            ? "text-green-600"
                            : row.up === false
                              ? "text-red-500"
                              : "text-gray-400"
                        }
                      >
                        {row.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            Indicative pricing only &mdash; contact for current rates and bulk
            discounts
          </p>
        </div>
      </section>

      {/* Market Growth */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Global Demand for Neem Products
            </h2>
            <p className="text-gray-600 mb-4">
              The global bio pesticide market is expected to exceed{" "}
              <strong>USD 14 billion by 2030</strong>, with neem extracts
              playing a central role in organic crop protection worldwide.
            </p>
            <p className="text-gray-600 mb-6">
              Europe leads the growth driven by strict regulations limiting
              synthetic pesticides. The USA and Asia-Pacific are fast-expanding
              markets.
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{
                    backgroundColor: "oklch(0.93 0.05 145)",
                    color: "oklch(0.35 0.14 145)",
                    borderColor: "oklch(0.80 0.08 145)",
                  }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-green-100 p-6 shadow-sm">
            <h3
              className="font-semibold mb-4 text-center"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Bio Pesticide Market Size (USD Billion)
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                data={[
                  { y: 2020, v: 1.8 },
                  { y: 2021, v: 2.0 },
                  { y: 2022, v: 2.3 },
                  { y: 2023, v: 2.6 },
                  { y: 2024, v: 3.0 },
                  { y: 2026, v: 3.8 },
                  { y: 2030, v: 5.5 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5f0e5" />
                <XAxis dataKey="y" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="#2d7a3a"
                  strokeWidth={2.5}
                  dot={{ fill: "#2d7a3a", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.35 0.13 145), oklch(0.25 0.10 145))",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <TrendingUp className="w-10 h-10 mx-auto mb-4 text-green-300" />
          <h2 className="text-3xl font-bold mb-4">Ready to Source Neem Oil?</h2>
          <p className="text-green-200 mb-8">
            Contact our export desk for product specifications, pricing, and
            supply chain information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919188520881"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-400 text-green-900 font-semibold px-6 py-3 rounded-lg hover:bg-green-300 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <a
              href="tel:+919188520881"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" /> +91 91885 20881
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
