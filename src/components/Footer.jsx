import { useState } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/japam.in",
    Icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=917888568939",
    Icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/98860235/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/japamofficial",
    Icon: FaFacebookF,
  },
];

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Track Order", href: "#" },
  { label: "Bulk/Wholesale", href: "#" },
  { label: "Returns/Exchange", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Japam on Amazon", href: "#" },
];

const policyLinks = [
  { label: "Refund & Return Policy", href: "#" },
  { label: "Shipping Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cashback Policy", href: "#" },
  { label: "Cancellation Policy", href: "#" },
];

// Mobile Accordion Section Component
const AccordionSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-[#c7bca8]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-0 text-[0.95rem] font-bold text-[#1d1b22] hover:text-[#121521] transition-colors duration-300"
      >
        {title}
        <FaChevronDown
          className={`h-4 w-4 text-[#1d1b22] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 overflow-hidden animation-all duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

function Footer({ logoUrl = "https://japam.in/cdn/shop/files/Copy_of_japam-footer-logo_2.png?v=1758175789&width=150" }) {
  const [openAccordions, setOpenAccordions] = useState({
    quickLinks: false,
    policies: false,
    getInTouch: false,
  });

  const toggleAccordion = (section) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="w-full bg-[#ffeed1] text-[#1a1820]">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden md:flex flex-col gap-8 pt-14 pb-10 md:items-start md:justify-between xl:gap-10">
          <div className="w-full md:max-w-[310px] lg:max-w-[360px]">
            <div className="mb-5">
              <img
                src={logoUrl}
                alt="Japam logo"
                className="h-auto w-[150px] max-w-full object-contain sm:w-[160px]"
              />
            </div>

            <h3 className="text-[1.1rem] font-bold leading-tight text-[#1d1b22] sm:text-[1.1rem]">
              Authentic Spiritual Accessories
            </h3>

            <p className="mt-3 max-w-[390px] text-[0.85rem] leading-6 font-medium text-[#1d1b22]/80">
              Bringing stories of Indian tradition alive through our unique range of wearables, decor, and puja accessories.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2430] text-[#1f2430] transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid w-full gap-4 md:grid-cols-2 md:gap-10 lg:max-w-[520px]">
            <div>
              <h4 className="text-[0.70rem] font-bold text-[#1d1b22] sm:text-[0.95rem]">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-3 text-[0.96rem] text-[#1d1b22]">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="relative inline-block cursor-pointer transition-all duration-300 hover:text-[#121521] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#121521] after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[0.70rem] font-bold text-[#1d1b22] sm:text-[0.95rem]">
                Policies
              </h4>
              <ul className="mt-5 space-y-3 text-[0.96rem] text-[#1d1b22]">
                {policyLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="relative inline-block cursor-pointer transition-all duration-300 hover:text-[#121521] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#121521] after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:max-w-[330px] lg:max-w-[360px]">
            <h4 className="text-[0.70rem] font-bold text-[#1d1b22] sm:text-[0.95rem]">
              Get In Touch
            </h4>

            <p className="mt-5 max-w-[390px] text-[0.96rem] leading-7 font-medium text-[#1d1b22]/80">
              Japam Sevak will help you with tracking, return, cancellations, and more.
            </p>

            <a
              href="#"
              className="mt-3 inline-block text-[0.96rem] font-medium text-[#1d1b22] underline underline-offset-4 hover:text-[#121521] transition-all duration-300"
            >
              Chat with Sevak
            </a>

            <h5 className="mt-7 text-[0.98rem] font-bold text-[#1d1b22] sm:text-[1rem]">
              Japam Spiritual Private Limited
            </h5>

            <p className="mt-3 max-w-[390px] text-[0.96rem] leading-7 font-medium text-[#1d1b22]/85">
              414, Phase 9 Industrial Area,
              <br />
              SAS Nagar,
              <br />
              160062, India
            </p>

            <div className="mt-6 flex w-full max-w-[300px] items-center overflow-hidden rounded-xl border border-[#b7ab9d] bg-[#f3eee5] shadow-sm transition-colors duration-300 focus-within:border-[#6c5f52] focus-within:ring-2 focus-within:ring-[#6c5f52]/20">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-[0.96rem] text-[#1d1b22] placeholder:text-[#6a6059] outline-none"
              />
              <button
                type="button"
                aria-label="Submit email"
                className="flex h-[52px] w-[52px] items-center justify-center border-l border-[#b7ab9d] bg-[#f7f3ee] text-[#1d1b22] transition-colors duration-300 hover:bg-[#e8dfd2]"
              >
                <FaArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Visible Only on Mobile */}
        <div className="md:hidden flex flex-col pt-6 pb-6">
          {/* Mobile Logo and Social Section */}
          <div className="mb-6 pb-6 border-b border-[#c7bca8]">
            <div className="mb-4">
              <img
                src={logoUrl}
                alt="Japam logo"
                className="h-auto w-[120px] max-w-full object-contain"
              />
            </div>

            <h3 className="text-[0.95rem] font-bold leading-tight text-[#1d1b22]">
              Authentic Spiritual Accessories
            </h3>

            <p className="mt-3 text-[0.80rem] leading-5 font-medium text-[#1d1b22]/80">
              Bringing stories of Indian tradition alive through our unique range of wearables, decor, and puja accessories.
            </p>

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1f2430] text-[#1f2430] transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Accordions */}
          <div>
            {/* Quick Links Accordion */}
            <AccordionSection
              title="Quick Links"
              isOpen={openAccordions.quickLinks}
              onToggle={() => toggleAccordion("quickLinks")}
            >
              <ul className="space-y-2 pl-0">
                {quickLinks.map(({ label, href }) => (
                  <li key={label} className="text-[0.85rem] text-[#1d1b22]">
                    <a
                      href={href}
                      className="block py-2 hover:text-[#121521] transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            {/* Policies Accordion */}
            <AccordionSection
              title="Policies"
              isOpen={openAccordions.policies}
              onToggle={() => toggleAccordion("policies")}
            >
              <ul className="space-y-2 pl-0">
                {policyLinks.map(({ label, href }) => (
                  <li key={label} className="text-[0.85rem] text-[#1d1b22]">
                    <a
                      href={href}
                      className="block py-2 hover:text-[#121521] transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            {/* Get In Touch Accordion */}
            <AccordionSection
              title="Get In Touch"
              isOpen={openAccordions.getInTouch}
              onToggle={() => toggleAccordion("getInTouch")}
            >
              <div className="pb-2">
                <p className="text-[0.85rem] leading-5 font-medium text-[#1d1b22]/80 mb-3">
                  Japam Sevak will help you with tracking, return, cancellations, and more.
                </p>

                <a
                  href="#"
                  className="inline-block text-[0.85rem] font-medium text-[#1d1b22] underline underline-offset-2 hover:text-[#121521] transition-all duration-300 mb-4"
                >
                  Chat with Sevak
                </a>

                <h5 className="text-[0.85rem] font-bold text-[#1d1b22] mt-3 mb-2">
                  Japam Spiritual Private Limited
                </h5>

                <p className="text-[0.85rem] leading-5 font-medium text-[#1d1b22]/85 mb-3">
                  414, Phase 9 Industrial Area,
                  <br />
                  SAS Nagar,
                  <br />
                  160062, India
                </p>

                <div className="flex w-full items-center overflow-hidden rounded-lg border border-[#b7ab9d] bg-[#f3eee5] shadow-sm transition-colors duration-300 focus-within:border-[#6c5f52] focus-within:ring-2 focus-within:ring-[#6c5f52]/20">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent px-3 py-2 text-[0.80rem] text-[#1d1b22] placeholder:text-[#6a6059] outline-none"
                  />
                  <button
                    type="button"
                    aria-label="Submit email"
                    className="flex h-[40px] w-[40px] items-center justify-center border-l border-[#b7ab9d] bg-[#f7f3ee] text-[#1d1b22] transition-colors duration-300 hover:bg-[#e8dfd2]"
                  >
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </AccordionSection>
          </div>
        </div>

        <div className="border-t border-[#c7bca8]">
          <div className="flex items-center justify-between py-5 text-[0.95rem] text-[#1d1b22]/80">
            <p>© 2026 Japam.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
