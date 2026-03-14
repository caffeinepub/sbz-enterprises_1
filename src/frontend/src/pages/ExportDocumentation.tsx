import { FileText } from "lucide-react";

const docs = [
  {
    name: "Commercial Invoice",
    desc: "Official invoice detailing product description, quantity, unit price, total value, buyer and seller details, and payment terms.",
  },
  {
    name: "Packing List",
    desc: "Details the number of packages, net and gross weight, dimensions, and packaging type (drums, IBC tanks, etc.).",
  },
  {
    name: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce or Export Promotion Council, confirming Indian origin of goods for customs and duty purposes.",
  },
  {
    name: "Certificate of Analysis (CoA)",
    desc: "Laboratory test report confirming product specifications including moisture content, acid value, Azadirachtin concentration, and purity.",
  },
  {
    name: "MSDS",
    desc: "Material Safety Data Sheet providing safety information, handling instructions, and emergency response procedures required for international shipment.",
  },
  {
    name: "Bill of Lading",
    desc: "Shipping document issued by the carrier confirming receipt of cargo for transport. Required for customs clearance at destination port.",
  },
];

export default function ExportDocumentation() {
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
          <h1 className="text-4xl font-bold mb-3">Export Documentation</h1>
          <p className="text-green-200 text-lg">
            Complete documentation support for international buyers
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          SBZ Enterprises manages all required export documentation to ensure
          seamless customs clearance at international destinations. Below is a
          summary of standard documents provided with every shipment.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((d) => (
            <div
              key={d.name}
              className="bg-white rounded-xl border border-green-100 p-6"
            >
              <FileText
                className="w-7 h-7 mb-3"
                style={{ color: "oklch(0.42 0.14 145)" }}
              />
              <h3
                className="font-semibold mb-2"
                style={{ color: "oklch(0.28 0.10 145)" }}
              >
                {d.name}
              </h3>
              <p className="text-sm text-gray-500">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
