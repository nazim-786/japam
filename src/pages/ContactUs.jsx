const ContactUs = () => {
  const bulletItems = [
    "Order Tracking",
    "Returns & Replacements",
    "Cancellations",
    "Product Information",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f0e6] text-[#1f1b22]">
      <section className="w-full">
        <div className="relative h-[260px] overflow-hidden sm:h-[300px] md:h-[340px] lg:h-[380px] xl:h-[430px]">
          <img
            src="https://japam.in/cdn/shop/files/combo_05_44.jpg?v=1722319897&width=480"
            alt="Contact us"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[25px] font-semibold tracking-[-0.03em] !text-white sm:text-[30px] md:text-[38px] lg:text-[52px] xl:text-[58px]">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1170px] px-4 pb-10 pt-6 sm:px-6 md:px-8 md:pt-8 lg:px-10 xl:px-0">
        <div className="bg-[#efe7dc] px-4 py-8 sm:px-8 sm:py-9 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <p className="text-center text-[15px] font-normal leading-[1.8] text-[#1f1b22] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            Japam Sevak will help and solve all your questions related to:
          </p>

          <ul className="mx-auto mt-6 max-w-[650px] list-disc space-y-2 pl-7 text-left text-[15px] font-medium text-[#1f1b22] sm:mt-7 sm:text-[16px] md:text-[17px]">
            {bulletItems.map((item) => (
              <li key={item} className="leading-[1.8]">
                {item}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 max-w-[980px] space-y-6 text-[14px] leading-[1.9] text-[#1f1b22] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            <p>
              We appreciate all the support and love shown by our customers, and in
              order to assist you better we have developed Japam Sevak from the ground
              up.
            </p>

            <div className="space-y-3">
             <h2 className="text-[19px] font-bold leading-[1.5] !text-red-500 underline underline-offset-4 sm:text-[20px] md:text-[22px]">
  Chat With Japam Sevak
</h2>

              <p>
                Please note our WhatsApp number is used for order related status updates
                and promotions. It is not monitored by agents.
              </p>

              <p>
                For specific queries, please create a new ticket in Japam Sevak under
                &apos;Something Else&apos;.
              </p>

              <p>
                Our business hours for replying on email are: Mon to Sat 10 AM to 5 PM
                - we will try and respond to emails within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
