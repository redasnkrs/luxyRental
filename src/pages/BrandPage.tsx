import { useParams } from "react-router-dom";

const BrandPage = () => {
  const { brand } = useParams();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-4 capitalize">{brand} Cars</h1>
      <p className="text-gray-400">Listing all cars for {brand}...</p>
      {/* Content will go here later */}
    </div>
  );
};

export default BrandPage;
