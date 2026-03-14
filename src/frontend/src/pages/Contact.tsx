import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  function buildWhatsAppMessage() {
    const lines = [
      "Hello SBZ Enterprises,",
      "",
      "I am submitting an inquiry from your website contact form:",
      "",
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      form.product ? `Product Interest: ${form.product}` : null,
      "",
      `Message: ${form.message}`,
    ]
      .filter((l) => l !== null)
      .join("\n");
    return `https://wa.me/919188520881?text=${encodeURIComponent(lines)}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(buildWhatsAppMessage(), "_blank", "noreferrer");
  }

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
          <h1 className="text-4xl font-bold mb-3">Contact SBZ Enterprises</h1>
          <p className="text-green-200 text-lg">
            For product specifications, pricing, and supply inquiries
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "oklch(0.28 0.10 145)" }}
            >
              Get in Touch
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.93 0.05 145)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(0.42 0.14 145)" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold"
                    style={{ color: "oklch(0.28 0.10 145)" }}
                  >
                    Location
                  </div>
                  <div className="text-sm text-gray-500">India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.93 0.05 145)" }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "oklch(0.42 0.14 145)" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold"
                    style={{ color: "oklch(0.28 0.10 145)" }}
                  >
                    Phone
                  </div>
                  <a
                    href="tel:+919188520881"
                    className="text-sm hover:underline"
                    style={{ color: "oklch(0.42 0.14 145)" }}
                  >
                    +91 91885 20881
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919188520881"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-white font-semibold px-6 py-3 rounded-xl text-sm"
              style={{ backgroundColor: "#25D366" }}
              data-ocid="whatsapp.link"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <p className="text-sm text-gray-400 mt-3">+91 91885 20881</p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "oklch(0.35 0.14 145)" }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    required
                    className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    data-ocid="contact.name_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "oklch(0.35 0.14 145)" }}
                  >
                    Company
                  </label>
                  <input
                    id="contact-company"
                    className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    data-ocid="contact.company_input"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "oklch(0.35 0.14 145)" }}
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    data-ocid="contact.email_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "oklch(0.35 0.14 145)" }}
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    data-ocid="contact.phone_input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-product"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "oklch(0.35 0.14 145)" }}
                >
                  Product Interest
                </label>
                <select
                  id="contact-product"
                  className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm focus:outline-none"
                  value={form.product}
                  onChange={(e) =>
                    setForm({ ...form, product: e.target.value })
                  }
                  data-ocid="contact.product_select"
                >
                  <option value="">Select a product...</option>
                  <option>Cold Pressed Neem Oil</option>
                  <option>Filtered Neem Oil</option>
                  <option>Double Filtered Neem Oil</option>
                  <option>Azadirachtin Extract 300 ppm</option>
                  <option>Azadirachtin Extract 1500 ppm</option>
                  <option>Azadirachtin Extract 3000 ppm</option>
                  <option>Azadirachtin Extract 10000 ppm</option>
                  <option>Multiple Products</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "oklch(0.35 0.14 145)" }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm focus:outline-none resize-none"
                  placeholder="Please describe your requirements, volumes, destination country..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  data-ocid="contact.message_textarea"
                />
              </div>
              <button
                type="submit"
                className="w-full font-semibold text-white py-3 rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                style={{ backgroundColor: "#25D366" }}
                data-ocid="contact.submit_button"
              >
                <MessageCircle className="w-5 h-5" />
                Send Inquiry via WhatsApp
              </button>
              <p className="text-xs text-gray-400 text-center">
                Clicking the button will open WhatsApp with your inquiry
                pre-filled.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
