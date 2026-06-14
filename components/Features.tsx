export default function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-10">
          Why Use Our Predictor?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              ⚡ Fast Predictions
            </h3>
            <p>
              Get instant house price estimates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              🤖 AI Powered
            </h3>
            <p>
              Uses Machine Learning models for prediction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-3">
              📈 Data Driven
            </h3>
            <p>
              Based on real housing market data.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}