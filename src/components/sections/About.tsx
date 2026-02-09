"use client";
import Copy from "@/components/ui/animation/Copy";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="mt-56 mb-56 lg:ml-[335px] sm:ml-5 relative"
      >
        <div className="mb-8">
          <h2 className="text-4xl">
            Dedicated <br />
            To Perfection
          </h2>
          <p className="text-about">Experience with the top-notch service</p>
          <p className="text-about">and unmatched car.</p>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <Copy blockColor="#eb3813">
            <p className="w-[507px] text-3xl text-about-2 space-y-3">
              Experience refined performance and timeless design. Drive
              exceptional machines tailored to your journey and crafted for
              comfort and prestige. Elevate every mile with attentive service,
              seamless booking, and signature amenities. Choose from renowned
              marques—meticulously maintained and ready when you are. Indulge in
              effortless arrivals, curated routes, and flexible terms. Your
              road, your rhythm, your statement.
            </p>
          </Copy>
          <div className="about-pic mr-80 "></div>
        </div>
      </section>
    </>
  );
}
