import HorizontalScroll from "./animation/HorizontalScroll";

export default function News() {
  return (
    <>
      <section id="news" className="mx-auto max-w-6xl px-4 py-10 mt-56">
        <h3 className="mb-20 text-center text-2xl md:text-4xl text-white">
          News
        </h3>
      </section>
      <HorizontalScroll />
      <div className="mb-56"></div>
    </>
  );
}
