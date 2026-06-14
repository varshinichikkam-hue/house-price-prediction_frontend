"use client";

import { useState } from "react";
import API from "../services/api";
import PredictionCard from "./PredictionCard";

export default function HouseForm() {
  const [formData, setFormData] = useState({
    bedrooms: "",
    bathrooms: "",
    sqft_living: "",
    sqft_lot: "",
    floors: "",
    waterfront: "",
    view: "",
    condition: "",
    sqft_above: "",
    sqft_basement: "",
    yr_built: "",
    yr_renovated: "",
  });

  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await API.post("/predict", {
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        sqft_living: Number(formData.sqft_living),
        sqft_lot: Number(formData.sqft_lot),
        floors: Number(formData.floors),
        waterfront: Number(formData.waterfront),
        view: Number(formData.view),
        condition: Number(formData.condition),
        sqft_above: Number(formData.sqft_above),
        sqft_basement: Number(formData.sqft_basement),
        yr_built: Number(formData.yr_built),
        yr_renovated: Number(formData.yr_renovated),
      });

      setPrediction(
        String(response.data.predicted_price)
      );

      setTimeout(() => {
        document
          .getElementById("prediction-result")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 100);

    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      bedrooms: "",
      bathrooms: "",
      sqft_living: "",
      sqft_lot: "",
      floors: "",
      waterfront: "",
      view: "",
      condition: "",
      sqft_above: "",
      sqft_basement: "",
      yr_built: "",
      yr_renovated: "",
    });

    setPrediction("");
  };

  const handleDemoData = () => {
    setFormData({
      bedrooms: "3",
      bathrooms: "2",
      sqft_living: "1800",
      sqft_lot: "5000",
      floors: "2",
      waterfront: "0",
      view: "3",
      condition: "4",
      sqft_above: "1500",
      sqft_basement: "300",
      yr_built: "2010",
      yr_renovated: "0",
    });
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between bg-purple-50 border border-purple-200 p-4 rounded-lg">
        <div>
          <h3 className="font-semibold text-purple-700">
            Quick Demo
          </h3>

          <p className="text-sm text-gray-600">
            Fill sample house details instantly.
          </p>
        </div>

        <button
          type="button"
          onClick={handleDemoData}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Fill Sample Data
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          inputMode="numeric"
          name="bedrooms"
          placeholder="Bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="bathrooms"
          placeholder="Bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="sqft_living"
          placeholder="Living Area"
          value={formData.sqft_living}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="sqft_lot"
          placeholder="Lot Area"
          value={formData.sqft_lot}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="floors"
          placeholder="Floors"
          value={formData.floors}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="waterfront"
          placeholder="Waterfront"
          value={formData.waterfront}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="view"
          placeholder="View"
          value={formData.view}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="condition"
          placeholder="Condition"
          value={formData.condition}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="sqft_above"
          placeholder="Sqft Above"
          value={formData.sqft_above}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="sqft_basement"
          placeholder="Sqft Basement"
          value={formData.sqft_basement}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="yr_built"
          placeholder="Year Built"
          value={formData.yr_built}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <input
          type="text"
          inputMode="numeric"
          name="yr_renovated"
          placeholder="Year Renovated"
          value={formData.yr_renovated}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg shadow-sm"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="col-span-2 bg-blue-600 text-white p-4 rounded-lg disabled:bg-gray-400"
        >
          {loading ? "Predicting..." : "Predict Price"}
        </button>

        <PredictionCard price={prediction} />

        <button
          type="button"
          onClick={handleReset}
          className="col-span-2 bg-gray-500 text-white p-4 rounded-lg"
        >
          Reset
        </button>

      </div>
    </>
  );
}