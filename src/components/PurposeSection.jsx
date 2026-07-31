import {
  FaRupeeSign,
  FaHeart,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaPeace,
  FaFistRaised,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";

const purposes = [
  { title: "Wealth", icon: FaRupeeSign },
  { title: "Health", icon: FaHandHoldingHeart },
  { title: "Love", icon: FaHeart },
  { title: "Luck", icon: FaHeart },
  { title: "Protection", icon: FaShieldAlt },
  { title: "Peace", icon: FaPeace },
  { title: "Courage", icon: FaFistRaised },
  { title: "Balance", icon: FaBalanceScale },
];

export default function ShopByPurpose() {
  return (
    <section className="w-full bg-[#e9dcc7] py-12">
      
      {/* Heading Separate */}
      <div className="max-w-[1180px] mx-auto">
        <h2 className="text-center text-[48px] font-bold text-[#1f2340] relative -top-8">
          Shop By Purpose
        </h2>
      </div>

      {/* Cards Separate */}
      <div className="max-w-[1180px] mx-auto -mt-4">
        <div className="flex justify-between items-center gap-5">
          {purposes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="w-[110px] cursor-pointer shrink-0"
              >
                <div className="h-[110px] bg-gradient-to-b from-[#c73f4d] to-[#4a2d4d] flex items-center justify-center">
                  <Icon className="text-white text-[58px]" />
                </div>

                <div className="h-[26px] bg-[#25243c] px-2 flex items-center justify-between">
                  <span className="text-white text-[12px] font-semibold">
                    {item.title}
                  </span>

                  <div className="w-4 h-4 border border-white rounded-full flex items-center justify-center">
                    <FaArrowRight className="text-white text-[8px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}