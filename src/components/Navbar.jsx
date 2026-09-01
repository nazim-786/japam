import { useContext, useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCommentDots,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart-context";

const navLinks = [
  {
    label: "Rudraksha",
    dropdown: [
      { label: "Rudraksha Braceletes", path: "/rudraksha/bracelets" },
      { label: "Rudraksha Malas", path: "/rudraksha/malas" },
      { label: "Nepali Rudraksha", path: "/rudraksha/nepali-rudraksha" },
    ],
  },
  {
    label: "Energy Stones",
    dropdown: [
      { label: "Pyrite Wearables", path: "/pyrite-wearables" },
      { label: "Rose Quartz Wearables", path: "/rose-quartz-wearables" },
      { label: "Tiger Eye Wearables", path: "/tiger-eye-wearables" },
      { label: "Amethyst Wearables", path: "/amethyst-wearables" },
      { label: "Hematite Wearables", path: "/hematite-wearables" },
    ],
  },
  {
    label: "Karungali",
    dropdown: [],
  },
  {
    label: "Vaastu",
    dropdown: [],
  },
  {
    label: "Rashi/Zodiac",
    dropdown: [],
  },
  {
    label: "Spiritual Jewellery",
    dropdown: [
      { label: "Spiritual Bracelets", path: "/spiritual-bracelets" },
      { label: "Spiritual Necklaces", path: "/spiritual-necklaces" },
    ],
  },
  {
    label: "Gift Hampers",
    dropdown: [
      { label: "Diwali Celebration", path: "/diwali-celebration" },
      { label: "Rakhi Celebration", path: "/rakhi-celebration" },
    ],
  },
  {
    label: "Support",
    dropdown: [
      { label: "Track My Order", path: "/track-order" },
      { label: "Contact Us", path: "/contact-us" },
      "Returns/Exchange",
    ],
  },
];

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#e5d9c3] bg-[#fdfbf9]">

      {/* =====================================================
          TOP BAR
      ===================================================== */}
      <div
        className="
          flex
          items-center
          justify-between
          px-3
          py-2
          sm:px-5
          sm:py-3
          md:px-6
          lg:px-10
          lg:pb-2
          xl:px-12
        "
      >

        {/* LOGO */}
        <div
          className="
            flex
            h-7
            w-20
            cursor-pointer
            items-center
            justify-start
            sm:h-8
            sm:w-24
            md:h-9
            md:w-28
            lg:h-10
            lg:w-[130px]
          "
        >
          <img
            src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60"
            alt="Japam Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* TOP ICONS */}
        <div
          className="
            flex
            items-center
            gap-3
            sm:gap-4
            md:gap-5
            lg:gap-[18px]
          "
        >

          {/* SEARCH */}
          <button
            type="button"
            className="
              relative
              flex
              h-5
              w-5
              items-center
              justify-center
              text-[15px]
              text-[#1a1a2e]
              transition-all
              duration-200
              hover:text-[#d97757]
              sm:h-[22px]
              sm:w-[22px]
              sm:text-[16px]
              md:text-[17px]
              lg:text-[18px]
            "
            aria-label="Search"
          >
            <FaSearch />
          </button>

          {/* PROFILE */}
          <button
            type="button"
            className="
              relative
              flex
              h-5
              w-5
              items-center
              justify-center
              text-[15px]
              text-[#1a1a2e]
              transition-all
              duration-200
              hover:text-[#d97757]
              sm:h-[22px]
              sm:w-[22px]
              sm:text-[16px]
              md:text-[17px]
              lg:text-[18px]
            "
            aria-label="Profile"
          >
            <FaUser />
          </button>

          {/* CART */}
          <button
            type="button"
            className="
              relative
              flex
              h-5
              w-5
              items-center
              justify-center
              text-[15px]
              text-[#1a1a2e]
              transition-all
              duration-200
              hover:text-[#d97757]
              sm:h-[22px]
              sm:w-[22px]
              sm:text-[16px]
              md:text-[17px]
              lg:text-[18px]
            "
            aria-label="Cart"
          >
            <FaShoppingBag />

            {cartItems.length > 0 && (
              <span
                className="
                  absolute
                  -right-2
                  -top-2
                  flex
                  h-4
                  min-w-4
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#fdfbf9]
                  bg-[#d97757]
                  px-1
                  text-[8px]
                  font-semibold
                  leading-none
                  text-white
                  sm:-right-2.5
                  sm:-top-2.5
                  sm:h-[18px]
                  sm:min-w-[18px]
                  sm:text-[10px]
                "
              >
                {cartItems.length}
              </span>
            )}
          </button>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              text-[18px]
              text-[#1a1a2e]
              transition-all
              duration-200
              hover:text-[#d97757]

              lg:hidden
            "
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* =====================================================
          DESKTOP NAVIGATION
          Hidden below lg
      ===================================================== */}
      <div
        className="
          hidden
          items-center
          justify-between
          px-6
          pb-4
          pt-2
          lg:flex
          lg:px-10
          xl:px-12
        "
      >

        {/* NAV MENU */}
        <ul className="m-0 flex list-none items-center gap-5 p-0 xl:gap-[26px]">

          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => {
                if (link.dropdown.length > 0) {
                  setOpenDropdown(link.label);
                }
              }}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div
                className="
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-2
                  border-b-2
                  border-transparent
                  pb-1.5
                  text-[13px]
                  font-medium
                  text-[#1a1a2e]
                  transition-all
                  duration-200
                  hover:border-[#d97757]
                  hover:text-[#d97757]
                  xl:text-[16px]
                "
              >
                {link.label}

                {link.dropdown.length > 0 && (
                  <FaChevronDown
                    className="
                      text-[8px]
                      text-[#1a1a2e]
                      transition-colors
                      duration-200
                      group-hover:text-[#d97757]
                      xl:text-[10px]
                    "
                  />
                )}
              </div>

              {/* DESKTOP DROPDOWN */}
              {openDropdown === link.label &&
                link.dropdown.length > 0 && (
                  <ul
                    className="
                      absolute
                      left-0
                      top-[calc(100%+10px)]
                      z-[1000]
                      m-0
                      min-w-[220px]
                      list-none
                      rounded-[10px]
                      border
                      border-[#f0ece8]
                      bg-white
                      p-2.5
                      shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                    "
                  >
                    {/* Dropdown Arrow */}
                    <span
                      className="
                        absolute
                        -top-2
                        left-5
                        h-3.5
                        w-3.5
                        rotate-45
                        border-l
                        border-t
                        border-[#f0ece8]
                        bg-white
                      "
                    />

                    {link.dropdown.map((item) => {
                      const itemLabel = typeof item === "string" ? item : item.label;
                      const itemPath = typeof item === "string" ? "#" : item.path;

                      if (typeof item === "object" && item !== null) {
                        return (
                          <li
                            key={itemLabel}
                            className="relative"
                          >
                            <Link
                              to={itemPath}
                              className="
                                block
                                border-l-[3px]
                                border-transparent
                                px-5
                                py-2.5
                                text-[14px]
                                font-normal
                                text-[#333]
                                transition-all
                                duration-150
                                hover:border-[#d97757]
                                hover:bg-[#f9f5f0]
                                hover:text-[#d97757]
                              "
                            >
                              {itemLabel}
                            </Link>
                          </li>
                        );
                      }

                      return (
                        <li
                          key={item}
                          className="
                            relative
                            cursor-pointer
                            border-l-[3px]
                            border-transparent
                            px-5
                            py-2.5
                            text-[14px]
                            font-normal
                            text-[#333]
                            transition-all
                            duration-150
                            hover:border-[#d97757]
                            hover:bg-[#f9f5f0]
                            hover:text-[#d97757]
                          "
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                )}
            </li>
          ))}
        </ul>

        {/* SEVAK BUTTON */}
        <button
          type="button"
          className="
            flex
            shrink-0
            items-center
            gap-2
            whitespace-nowrap
            rounded-[25px]
            border-0
            bg-[#1c1c2e]
            px-4
            py-2.5
            text-[12px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#d97757]
            hover:shadow-[0_4px_12px_rgba(217,119,87,0.3)]
            xl:px-5
            xl:text-[13px]
          "
        >
          <FaCommentDots className="text-[13px] xl:text-[14px]" />
          Chat with Sevak
        </button>
      </div>

      {/* =====================================================
          MOBILE / TABLET OVERLAY
      ===================================================== */}
      {isMobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/50
            backdrop-blur-[1px]
          "
          onClick={() => setIsMobileMenuOpen(false)}
        >

          {/* MOBILE DRAWER */}
          <div
            className="
              fixed
              right-0
              top-0
              h-full
              w-[280px]
              max-w-[85vw]
              overflow-y-auto
              bg-white
              p-4
              shadow-[-5px_0_20px_rgba(0,0,0,0.1)]
              sm:w-[320px]
              sm:p-5
              md:w-[360px]
              md:p-6
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* DRAWER HEADER */}
            <div
              className="
                mb-4
                flex
                items-center
                justify-between
                border-b
                border-[#f0ece8]
                pb-4
              "
            >
              <div className="h-8 w-24">
                <img
                  src="https://japam.in/cdn/shop/files/PhotoshopPreview_Image-removebg-preview.png?v=1772086024&width=60"
                  alt="Japam Logo"
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  text-lg
                  text-[#1a1a2e]
                  transition-all
                  duration-200
                  hover:bg-[#f9f5f0]
                  hover:text-[#d97757]
                "
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* MOBILE NAV */}
            <div className="flex flex-col">

              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="
                    border-b
                    border-[#f0ece8]
                  "
                >

                  <div
                    className="
                      flex
                      cursor-pointer
                      items-center
                      justify-between
                      py-3.5
                      text-[15px]
                      font-medium
                      text-[#1a1a2e]
                      transition-colors
                      duration-200
                      hover:text-[#d97757]
                      sm:text-[16px]
                    "
                  >
                    <span>{link.label}</span>

                    {link.dropdown.length > 0 && (
                      <FaChevronDown className="text-[10px]" />
                    )}
                  </div>

                  {/* MOBILE DROPDOWN */}
                  {link.dropdown.length > 0 && (
                    <div className="pb-2 pl-4">

                      {link.dropdown.map((item) => {
                        const itemLabel = typeof item === "string" ? item : item.label;
                        const itemPath = typeof item === "string" ? "#" : item.path;

                        if (typeof item === "object" && item !== null) {
                          return (
                            <Link
                              key={itemLabel}
                              to={itemPath}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="
                                block
                                cursor-pointer
                                border-b
                                border-[#f5f5f5]
                                py-2.5
                                text-[13px]
                                font-normal
                                text-[#555]
                                transition-colors
                                duration-200
                                hover:text-[#d97757]
                                sm:text-[14px]
                              "
                            >
                              {itemLabel}
                            </Link>
                          );
                        }

                        return (
                          <div
                            key={item}
                            className="
                              cursor-pointer
                              border-b
                              border-[#f5f5f5]
                              py-2.5
                              text-[13px]
                              font-normal
                              text-[#555]
                              transition-colors
                              duration-200
                              hover:text-[#d97757]
                              sm:text-[14px]
                            "
                          >
                            {item}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* MOBILE SEVAK BUTTON */}
              <button
                type="button"
                className="
                  mt-5
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[25px]
                  bg-[#1c1c2e]
                  px-5
                  py-3
                  text-[13px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#d97757]
                  sm:text-[14px]
                "
              >
                <FaCommentDots />
                Chat with Sevak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;