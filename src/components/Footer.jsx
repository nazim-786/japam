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
    label: "Facebook",
    href: "https://www.facebook.com/japamofficial",
    Icon: FaFacebookF,
  },
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

const AccordionSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-[#cfc2ae]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-[15px] font-bold text-[#1d1b22]"
      >
        <span>{title}</span>

        <FaChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

function Footer({
  logoUrl = "https://japam.in/cdn/shop/files/Copy_of_japam-footer-logo_2.png?v=1758175789&width=150",
}) {
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
    <footer className="w-full bg-[#ffeed1] text-[#1d1b22]">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden md:block">

          <div
            className="
              grid
              grid-cols-2
              gap-x-12
              gap-y-12
              pt-14
              pb-14
              lg:grid-cols-[1.35fr_0.85fr_0.85fr_1.15fr]
              lg:gap-x-10
              xl:gap-x-16
              xl:pt-[68px]
              xl:pb-[68px]
            "
          >

            {/* ================= BRAND ================= */}
            <div className="w-full">
              <div className="mb-6">
                <img
                  src={logoUrl}
                  alt="Japam logo"
                  className="
                    h-auto
                    w-[140px]
                    object-contain
                    sm:w-[150px]
                    lg:w-[150px]
                  "
                />
              </div>

              <h3
                className="
                  text-[15px]
                  font-bold
                  leading-[1.3]
                  text-[#1d1b22]
                  lg:text-[15px]
                  xl:text-[16px]
                "
              >
                Authentic Spiritual Accessories
              </h3>

              <p
                className="
                  mt-4
                  max-w-[390px]
                  text-[14px]
                  font-medium
                  leading-[1.65]
                  text-[#1d1b22]
                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                Bringing stories of Indian tradition alive through our unique
                range of wearables, decor, and puja accessories.
              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      text-[#292633]
                      transition-all
                      duration-300
                      hover:scale-110
                    "
                  >
                    <Icon className="h-[21px] w-[21px]" />
                  </a>
                ))}
              </div>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>
              <h4
                className="
                  text-[15px]
                  font-bold
                  text-[#1d1b22]
                  xl:text-[16px]
                "
              >
                Quick Links
              </h4>

              <ul className="mt-5 space-y-[17px]">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="
                        relative
                        inline-block
                        text-[14px]
                        font-normal
                        text-[#1d1b22]
                        transition-all
                        duration-300
                        hover:text-[#121521]
                        after:absolute
                        after:bottom-[-3px]
                        after:left-0
                        after:h-[1px]
                        after:w-full
                        after:origin-left
                        after:scale-x-0
                        after:bg-[#121521]
                        after:transition-transform
                        after:duration-300
                        hover:after:scale-x-100
                        lg:text-[15px]
                      "
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= POLICIES ================= */}
            <div>
              <h4
                className="
                  text-[15px]
                  font-bold
                  text-[#1d1b22]
                  xl:text-[16px]
                "
              >
                Policies
              </h4>

              <ul className="mt-5 space-y-[17px]">
                {policyLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="
                        relative
                        inline-block
                        text-[14px]
                        font-normal
                        text-[#1d1b22]
                        transition-all
                        duration-300
                        hover:text-[#121521]
                        after:absolute
                        after:bottom-[-3px]
                        after:left-0
                        after:h-[1px]
                        after:w-full
                        after:origin-left
                        after:scale-x-0
                        after:bg-[#121521]
                        after:transition-transform
                        after:duration-300
                        hover:after:scale-x-100
                        lg:text-[15px]
                      "
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= GET IN TOUCH ================= */}
            <div className="w-full">
              <h4
                className="
                  text-[15px]
                  font-bold
                  text-[#1d1b22]
                  xl:text-[16px]
                "
              >
                Get In Touch
              </h4>

              <p
                className="
                  mt-5
                  max-w-[340px]
                  text-[14px]
                  font-medium
                  leading-[1.65]
                  text-[#1d1b22]
                  lg:text-[15px]
                "
              >
                Japam Sevak will help you with tracking, return,
                cancellations, and more.
              </p>

              <a
                href="#"
                className="
                  mt-4
                  inline-block
                  text-[14px]
                  font-medium
                  text-[#1d1b22]
                  underline
                  underline-offset-4
                  transition-all
                  duration-300
                  hover:text-[#121521]
                  lg:text-[15px]
                "
              >
                Chat with Sevak
              </a>

              <h5
                className="
                  mt-6
                  text-[15px]
                  font-bold
                  text-[#1d1b22]
                  lg:text-[16px]
                "
              >
                Japam Spiritual Private Limited
              </h5>

              <p
                className="
                  mt-3
                  max-w-[350px]
                  text-[14px]
                  font-medium
                  italic
                  leading-[1.65]
                  text-[#1d1b22]
                  lg:text-[15px]
                "
              >
                414, Phase 9 Industrial Area, SAS Nagar,
                <br />
                160062, India
              </p>

              {/* EMAIL BOX */}
              <div
                className="
                  mt-6
                  flex
                  h-[48px]
                  w-full
                  max-w-[285px]
                  items-center
                  overflow-hidden
                  rounded-[7px]
                  border
                  border-[#c8baa6]
                  bg-[#fff8ed]
                  transition-all
                  duration-300
                  focus-within:border-[#8b7d6b]
                "
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="
                    h-full
                    min-w-0
                    flex-1
                    bg-transparent
                    px-4
                    text-[13px]
                    text-[#1d1b22]
                    outline-none
                    placeholder:text-[#9b9186]
                  "
                />

                <button
                  type="button"
                  aria-label="Submit email"
                  className="
                    flex
                    h-full
                    w-[50px]
                    shrink-0
                    items-center
                    justify-center
                    text-[#292633]
                    transition-all
                    duration-300
                    hover:bg-[#f3e6d2]
                  "
                >
                  <FaArrowRight className="h-[17px] w-[17px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="block md:hidden">

          {/* BRAND SECTION */}
          <div className="pt-8 pb-7">

            <div className="mb-5">
              <img
                src={logoUrl}
                alt="Japam logo"
                className="h-auto w-[135px] object-contain"
              />
            </div>

            <h3 className="text-[15px] font-bold leading-tight">
              Authentic Spiritual Accessories
            </h3>

            <p className="mt-3 max-w-[390px] text-[13px] font-medium leading-[1.65]">
              Bringing stories of Indian tradition alive through our unique
              range of wearables, decor, and puja accessories.
            </p>

            {/* MOBILE SOCIAL ICONS */}
            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    text-[#292633]
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <Icon className="h-[20px] w-[20px]" />
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE ACCORDIONS */}
          <div>

            {/* QUICK LINKS */}
            <AccordionSection
              title="Quick Links"
              isOpen={openAccordions.quickLinks}
              onToggle={() => toggleAccordion("quickLinks")}
            >
              <ul className="pb-4">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="
                        block
                        py-2
                        text-[13px]
                        text-[#1d1b22]
                        transition-colors
                        duration-300
                        hover:text-[#121521]
                      "
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            {/* POLICIES */}
            <AccordionSection
              title="Policies"
              isOpen={openAccordions.policies}
              onToggle={() => toggleAccordion("policies")}
            >
              <ul className="pb-4">
                {policyLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="
                        block
                        py-2
                        text-[13px]
                        text-[#1d1b22]
                        transition-colors
                        duration-300
                        hover:text-[#121521]
                      "
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionSection>

            {/* GET IN TOUCH */}
            <AccordionSection
              title="Get In Touch"
              isOpen={openAccordions.getInTouch}
              onToggle={() => toggleAccordion("getInTouch")}
            >
              <div className="pb-5 pt-1">

                <p className="text-[13px] font-medium leading-[1.6]">
                  Japam Sevak will help you with tracking, return,
                  cancellations, and more.
                </p>

                <a
                  href="#"
                  className="
                    mt-3
                    inline-block
                    text-[13px]
                    font-medium
                    underline
                    underline-offset-4
                  "
                >
                  Chat with Sevak
                </a>

                <h5 className="mt-5 text-[14px] font-bold">
                  Japam Spiritual Private Limited
                </h5>

                <p className="mt-2 text-[13px] font-medium italic leading-[1.6]">
                  414, Phase 9 Industrial Area, SAS Nagar,
                  <br />
                  160062, India
                </p>

                {/* MOBILE EMAIL */}
                <div
                  className="
                    mt-5
                    flex
                    h-[45px]
                    w-full
                    items-center
                    overflow-hidden
                    rounded-[7px]
                    border
                    border-[#c8baa6]
                    bg-[#fff8ed]
                  "
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    className="
                      h-full
                      min-w-0
                      flex-1
                      bg-transparent
                      px-3
                      text-[13px]
                      outline-none
                      placeholder:text-[#9b9186]
                    "
                  />

                  <button
                    type="button"
                    aria-label="Submit email"
                    className="
                      flex
                      h-full
                      w-[45px]
                      shrink-0
                      items-center
                      justify-center
                      text-[#292633]
                    "
                  >
                    <FaArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </AccordionSection>

          </div>

          {/* MOBILE BOTTOM SPACE */}
          <div className="h-5" />
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-[#cfc2ae]">
          <div
            className="
              flex
              min-h-[70px]
              items-center
              justify-start
              py-5
              text-[12px]
              text-[#1d1b22]
              sm:text-[13px]
            "
          >
            <p>© 2026 Japam.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;