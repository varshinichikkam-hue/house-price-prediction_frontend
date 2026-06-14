export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-6xl mx-auto text-center px-4">

        <h1 className="text-6xl font-bold mb-6">
          House Price Prediction
        </h1>

        <p className="text-xl mb-8">
          Predict house prices instantly using Machine Learning & AI
        </p>

        <a
          href="/predict"
          className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
        >
          Start Prediction
        </a>

      </div>
    </section>
  );
}