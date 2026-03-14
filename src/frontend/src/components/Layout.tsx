import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { type ReactNode, useState } from "react";

const navItems = [
  {
    label: "Products",
    children: [
      { label: "Cold Pressed Neem Oil", href: "/cold-pressed-neem-oil" },
      { label: "Filtered Neem Oil", href: "/filtered-neem-oil" },
      { label: "Double Filtered Neem Oil", href: "/double-filtered-neem-oil" },
      { label: "Azadirachtin Extract", href: "/azadirachtin-extract" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Neem Oil Overview", href: "/neem-oil-overview" },
    ],
  },
  {
    label: "Markets",
    children: [
      { label: "Global Export Markets", href: "/global-export-markets" },
      { label: "Industry Applications", href: "/industry-applications" },
    ],
  },
  {
    label: "Operations",
    children: [
      { label: "Supply Chain", href: "/supply-chain" },
      { label: "Quality Control", href: "/quality-control" },
      { label: "Export Documentation", href: "/export-documentation" },
    ],
  },
  {
    label: "Insights",
    children: [
      { label: "Investor & Market Insights", href: "/investor-insights" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white border-b border-green-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl"
              style={{ color: "oklch(0.35 0.14 145)" }}
              data-ocid="nav.link"
            >
              <img
                src="/assets/generated/sbz-logo-transparent.dim_200x220.png"
                alt="SBZ Enterprises"
                className="h-10 w-auto"
              />
              <span>SBZ Enterprises</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 rounded-md hover:bg-green-50 transition-colors"
                  >
                    {item.label} <ChevronDown className="w-3 h-3" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white border border-green-100 rounded-lg shadow-lg min-w-48 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                          data-ocid="nav.link"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="ml-2 px-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors"
                style={{ backgroundColor: "oklch(0.42 0.14 145)" }}
                data-ocid="nav.link"
              >
                Contact
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-green-100 px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 py-1 mt-2">
                  {item.label}
                </div>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    className="block py-1.5 pl-3 text-sm text-gray-700 hover:text-green-700"
                    data-ocid="nav.link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mt-3 px-4 py-2 text-center text-sm font-semibold text-white rounded-lg"
              style={{ backgroundColor: "oklch(0.42 0.14 145)" }}
              data-ocid="nav.link"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-1">{children}</main>

      <footer
        className="text-white pt-12 pb-6"
        style={{ backgroundColor: "oklch(0.22 0.08 145)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-lg mb-3">
                <img
                  src="/assets/generated/sbz-logo-transparent.dim_200x220.png"
                  alt="SBZ Enterprises"
                  className="h-8 w-auto"
                />
                <span>SBZ Enterprises</span>
              </div>
              <p className="text-green-200 text-sm">
                Facilitating global trade of neem products sourced from India.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="tel:+919188520881"
                  className="flex items-center gap-2 text-green-200 hover:text-white text-sm"
                >
                  <Phone className="w-4 h-4" /> +91 91885 20881
                </a>
                <a
                  href="https://wa.me/919188520881"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-green-200 hover:text-white text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-100">Products</h4>
              <ul className="space-y-1">
                {[
                  ["Cold Pressed Neem Oil", "/cold-pressed-neem-oil"],
                  ["Filtered Neem Oil", "/filtered-neem-oil"],
                  ["Double Filtered Neem Oil", "/double-filtered-neem-oil"],
                  ["Azadirachtin Extract", "/azadirachtin-extract"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="text-green-200 hover:text-white text-sm"
                      data-ocid="nav.link"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-100">Company</h4>
              <ul className="space-y-1">
                {[
                  ["About Us", "/about"],
                  ["Neem Oil Overview", "/neem-oil-overview"],
                  ["Supply Chain", "/supply-chain"],
                  ["Quality Control", "/quality-control"],
                  ["Export Documentation", "/export-documentation"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="text-green-200 hover:text-white text-sm"
                      data-ocid="nav.link"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-100">
                Markets & Insights
              </h4>
              <ul className="space-y-1">
                {[
                  ["Global Export Markets", "/global-export-markets"],
                  ["Industry Applications", "/industry-applications"],
                  ["Investor Insights", "/investor-insights"],
                  ["FAQ", "/faq"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="text-green-200 hover:text-white text-sm"
                      data-ocid="nav.link"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 pt-6 text-center text-green-300 text-sm">
            &copy; 2024 SBZ Enterprises. India. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
