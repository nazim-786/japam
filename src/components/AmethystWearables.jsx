
import { useMemo, useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFilter,
  FaGripHorizontal,
  FaList,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { productData } from "../data/Energystones";

const purposeOptions = [
  { label: "Health", count: 45 },
  { label: "Wealth", count: 8 },
  { label: "Peace", count: 48 },
  { label: "Love", count: 3 },
  { label: "Protection", count: 34 },
  { label: "Balance", count: 43 },
  { label: "Courage", count: 5 },
];

const beadOptions = [
  { label: "Rudraksha", count: 93 },
  { label: "Karungali", count: 6 },
  { label: "Pyrite", count: 2 },
  { label: "Sphatik", count: 1 },
  { label: "Rose Quartz", count: 2 },
  { label: "Tiger Eye", count: 1 },
  { label: "Amethyst", count: 1 },
  { label: "Hematite", count: 1 },
  { label: "Lava", count: 1 },
];

const mukhiOptions = [
  { label: "1 - Ek", count: 3 },
  { label: "2 - Do", count: 3 },
  { label: "3 - Teen", count: 4 },
  { label: "4 - Chaar", count: 5 },
  { label: "5 - Paanch", count: 63 },
  { label: "6 - Chhey", count: 6 },
  { label: "7 - Saat", count: 4 },
];

const platingOptions = [
  { label: "Silver", count: 10 },
  { label: "Gold", count: 41 },
  { label: "DuoTone", count: 6 },
];

const purposeLinks = ["Health", "Peace", "Wealth", "Protection", "Balance"];

const sortOptions = [
  { label: "Best selling", value: "best" },
  { label: "Price low to high", value: "low-high" },
  { label: "Price high to low", value: "high-low" },
  { label: "Newest", value: "newest" },
];

const categoryItems = [
  {
    title: "Bestsellers",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Newest Items",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Energy Stones",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Rudraksha Wearables",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Karungali Wearables",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Spiritual Jewellery",
    image:
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=900&auto=format&fit=crop",
  },
];

function FilterSection({
  title,
  options,
  defaultOpen = true,
  compact = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#e7dfd2] py-4 first:pt-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left text-[15px] font-semibold text-[#1f2340]"
      >
        <span>{title}</span>

        {open ? (
          <FaChevronUp className="text-[12px]" />
        ) : (
          <FaChevronDown className="text-[12px]" />
        )}
      </button>

      {open && (
        <div
          className={`${
            compact ? "mt-3 space-y-2" : "mt-4 space-y-2.5"
          }`}
        >
          {options.map((option) => (
            <label
              key={option.label}
              className="flex cursor-pointer items-center justify-between gap-3 text-[14px] text-[#2d2f3e]"
            >
              <span className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#7c7a7a] accent-[#1f2340]"
                />
                <span>{option.label}</span>
              </span>

              <span className="text-[#6b6b6b]">
                ({option.count})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group rounded-[14px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
      <div className="relative overflow-hidden rounded-[12px] bg-[#f5f1ea]">
        {product.discount && (
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-[4px] bg-[#d93a3a] px-2 py-1 text-[10px] font-bold text-white shadow-sm">
            <span className="text-[10px]">◌</span>
            {product.discount}
          </div>
        )}

        {product.badge && (
          <div className="absolute left-3 top-12 z-10 rounded-[4px] bg-[#d93a3a] px-2 py-1 text-[9px] font-bold tracking-wide text-white shadow-sm">
            {product.badge}
          </div>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="h-[260px] w-full object-cover transition duration-300 group-hover:scale-[1.03] md:h-[220px]"
        />
      </div>

      <div className="mt-3 px-1">
        <h3 className="min-h-[48px] text-[15px] font-medium leading-[1.35] text-[#1f2340] md:text-[16px]">
          {product.title}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-[#d73c3c]">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-[11px]" />
          ))}

          <span className="ml-1 text-[12px] text-[#3a3d4a]">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-[16px] font-bold text-[#1f2340]">
            ₹{product.price}
          </span>

          <span className="text-[13px] text-[#7d7d7d] line-through">
            ₹{product.comparePrice}
          </span>
        </div>
      </div>
    </article>
  );
}

function ProductGrid({ products, viewMode }) {
  return (
    <div
      className={
        viewMode === "list"
          ? "space-y-4"
          : "grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-4"
      }
    >
      {products.map((product) => (
        <div
          key={product.id}
          className={viewMode === "list" ? "flex gap-4" : ""}
        >
          <div className={viewMode === "list" ? "w-40 shrink-0" : ""}>
            <ProductCard product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DiscoverMore() {
  return (
    <section className="mt-12">
      <h2 className="mb-8 text-[28px] font-bold text-[#1f2340] md:text-[34px]">
        Discover More
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-2 md:justify-between md:overflow-visible">
        {categoryItems.map((item) => (
          <div
            key={item.title}
            className="min-w-[150px] flex-1 text-center md:min-w-0"
          >
            <div className="mx-auto h-[150px] w-[150px] overflow-hidden rounded-full border border-[#eae0d6] bg-[#f3efe8] md:h-[168px] md:w-[168px]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-3 text-[15px] font-medium text-[#1f2340] md:text-[16px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AmethystWearables() {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("best");
  const [showCount, setShowCount] = useState(8);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const items = [...productData];

    if (sortBy === "low-high") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      items.sort((a, b) => b.id - a.id);
    }

    return items;
  }, [sortBy]);

  const visibleProducts = filteredProducts.slice(0, showCount);

  return (
    <div className="min-h-screen bg-[#fff3df] text-[#1f2340]">
      <div className="mx-auto max-w-[1360px] px-4 pb-12 pt-6 md:px-6 lg:px-8">
        <div className="mb-4 text-[12px] text-[#1f2340] md:text-[13px]">
          <Link to="/">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="font-medium">Amethyst Wearables</span>
        </div>

        <header className="pt-4 text-center">
          <h1 className="!text-[33px] !font-bold leading-tight text-[#1f2340] md:text-[52px] lg:text-[62px]">
            Amethyst Wearables
          </h1>

          <p className="mt-2 text-[14px] text-[#2d2f3e] md:text-[18px]">
            ({productData.length} products)
          </p>

          <div className="mt-6">
            <p className="text-[15px] font-medium text-[#1f2340] md:text-[22px]">
              What&apos;s your purpose?
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] font-medium text-[#1f2340] md:text-[18px]">
              {purposeLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  className="transition hover:text-[#d83f3f]"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-8 border-t border-[#d7cbbb] md:mt-10" />

        <div className="mt-6 flex flex-col gap-3 border-b border-[#d7cbbb] pb-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-[14px] text-[#1f2340] md:text-[15px]">
            <button
              type="button"
              className="flex items-center gap-2 rounded-md border border-[#d7cbbb] bg-transparent px-3 py-2 md:hidden"
              onClick={() => setMobileDrawerOpen(true)}
            >
              <FaFilter className="text-[12px]" />
              Filter
            </button>

            <div className="hidden items-center gap-3 md:flex">
              <FaFilter className="text-[14px]" />
              <span>Filter</span>
            </div>

            <div className="hidden h-5 w-px bg-[#d7cbbb] md:block" />

            <div className="flex items-center gap-2">
              <span>Sort by</span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-[14px] font-medium text-[#1f2340] outline-none md:text-[15px]"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <FaChevronDown className="text-[10px]" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 text-[#1f2340]">
            <span className="text-[14px] md:text-[15px]">
              View as
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`rounded-md border p-2 ${
                  viewMode === "list"
                    ? "border-[#1f2340] bg-[#eee7df]"
                    : "border-[#d7cbbb] bg-white"
                }`}
              >
                <FaList className="text-[14px]" />
              </button>

              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`rounded-md border p-2 ${
                  viewMode === "grid"
                    ? "border-[#1f2340] bg-[#eee7df]"
                    : "border-[#d7cbbb] bg-white"
                }`}
              >
                <FaGripHorizontal className="text-[14px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="space-y-1">
              <FilterSection
                title="Purpose"
                options={purposeOptions}
              />

              <div className="py-3">
                <button
                  type="button"
                  className="text-[14px] text-[#1f2340] underline decoration-[#8d8d8d] underline-offset-2"
                >
                  Show more
                </button>
              </div>

              <div className="border-b border-[#e7dfd2] py-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold text-[#1f2340]">
                    Price
                  </h3>

                  <FaChevronUp className="text-[12px]" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center rounded-md border border-[#d7cbbb] bg-white px-2 py-2 text-[14px] text-[#686b75]">
                    <span className="mr-1">₹</span>
                    <span>0</span>
                  </div>

                  <div className="flex items-center rounded-md border border-[#d7cbbb] bg-white px-2 py-2 text-[14px] text-[#686b75]">
                    <span className="mr-1">₹</span>
                    <span>250000</span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="relative h-1 rounded-full bg-[#d7cbbb]">
                    <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#1f2340]" />

                    <span className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#1f2340] bg-white" />

                    <span className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#1f2340] bg-white" />
                  </div>
                </div>
              </div>

              <FilterSection
                title="Bead"
                options={beadOptions}
              />

              <FilterSection
                title="Mukhi"
                options={mukhiOptions}
              />

              <div className="py-3">
                <button
                  type="button"
                  className="text-[14px] text-[#1f2340] underline decoration-[#8d8d8d] underline-offset-2"
                >
                  Show more
                </button>
              </div>

              <FilterSection
                title="Plating"
                options={platingOptions}
                compact
              />
            </div>
          </aside>

          <main>
            <ProductGrid
              products={visibleProducts}
              viewMode={viewMode}
            />

            <div className="mt-8 flex flex-col items-center justify-center gap-3 pb-4 text-center">
              <p className="text-[15px] text-[#1f2340]">
                Showing {visibleProducts.length} of{" "}
                {productData.length}
              </p>

              <div className="h-px w-full max-w-[360px] bg-[#d7cbbb]" />

              <button
                type="button"
                onClick={() =>
                  setShowCount((prev) =>
                    Math.min(prev + 8, productData.length)
                  )
                }
                className="rounded-[6px] border border-[#d7cbbb] bg-transparent px-7 py-3 text-[14px] font-semibold tracking-[0.12em] text-[#1f2340] uppercase transition hover:bg-[#f1eae2]"
              >
                Show More
              </button>
            </div>
          </main>
        </div>

        <DiscoverMore />
      </div>

      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 lg:hidden"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-[85%] max-w-[330px] overflow-y-auto bg-[#f4efe7] p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between border-b border-[#d7cbbb] pb-3">
              <h3 className="text-[18px] font-bold text-[#1f2340]">
                Filters
              </h3>

              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="text-[20px]"
              >
                ×
              </button>
            </div>

            <div className="space-y-2">
              <FilterSection
                title="Purpose"
                options={purposeOptions}
              />

              <FilterSection
                title="Bead"
                options={beadOptions}
              />

              <FilterSection
                title="Mukhi"
                options={mukhiOptions}
              />

              <FilterSection
                title="Plating"
                options={platingOptions}
                compact
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

