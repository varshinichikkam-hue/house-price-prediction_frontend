export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-2xl font-bold">
        🏠 House Price Predictor
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/predict">Predict</a>
      </div>
    </nav>
  );
}