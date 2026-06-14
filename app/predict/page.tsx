import HouseForm from "../../components/HouseForm";
import Footer from "../../components/Footer";
export default function PredictPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-4xl font-bold mb-3">
          🏠 House Price Predictor
        </h1>

        <p className="text-gray-600 mb-8">
          Enter house details and get an AI-powered price estimate.
        </p>

        <HouseForm />

      </div>

    </div>
  );
}