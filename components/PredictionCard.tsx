export default function PredictionCard({
  price,
}: {
  price: string;
}) {
  if (!price) return null;

  return (
    <div
      id="prediction-result"
      className="col-span-2 bg-green-50 border border-green-300 p-6 rounded-xl text-center"
    >
      <h2 className="text-2xl font-bold mb-2">
        Predicted Price
      </h2>

      <p className="text-4xl font-bold text-green-600">
        ₹ {Number(price).toLocaleString()}
      </p>
    </div>
  );
}