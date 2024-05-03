"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import Confetti from "react-confetti";

interface FormErrors {
  cardNumber?: boolean;
  nameHolder?: boolean;
  expiry?: boolean;
  cvv?: boolean;
}

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    nameHolder: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.cardNumber?.trim()) {
      newErrors.cardNumber = true;
    }
    if (!formData.nameHolder?.trim()) {
      newErrors.nameHolder = true;
    }
    if (!formData.expiry?.trim()) {
      newErrors.expiry = true;
    }
    if (!formData.cvv?.trim()) {
      newErrors.cvv = true;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsConfettiActive(true);
      redirect("/payment/payment-success");
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="bg-blue-500 text-white font-bold text-3xl p-4 mb-8 rounded-lg w-full max-w-lg text-center">
        Pay for your <span className="text-blue-800">products</span>.
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-md w-full max-w-lg"
      >
        <div className="flex flex-col mb-4">
          <label
            htmlFor="cardNumber"
            className="text-sm font-semibold text-gray-600"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className={`border ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 mt-1 w-full`}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">Card number is required</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="nameHolder"
            className="text-sm font-semibold text-gray-600"
          >
            Name Holder
          </label>
          <input
            type="text"
            id="nameHolder"
            name="nameHolder"
            value={formData.nameHolder}
            onChange={handleChange}
            className={`border ${
              errors.nameHolder ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 mt-1 w-full`}
          />
          {errors.nameHolder && (
            <p className="text-red-500 text-sm mt-1">Name holder is required</p>
          )}
        </div>
        <div className="flex mb-4 flex-col md:flex-row">
          <div className="flex flex-col mb-4 md:mb-0 md:mr-2">
            <label
              htmlFor="expiry"
              className="text-sm font-semibold text-gray-600"
            >
              Expiry
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className={`border ${
                errors.expiry ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 mt-1 w-full`}
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm mt-1">
                Expiry date is required
              </p>
            )}
          </div>
          <div className="flex flex-col ml-0 md:ml-2">
            <label
              htmlFor="cvv"
              className="text-sm font-semibold text-gray-600"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className={`border ${
                errors.cvv ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 mt-1 w-full`}
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">CVV is required</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded-md w-full"
        >
          Pay Now
        </button>
        {isConfettiActive && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            colors={["#FF0000", "#00FF00", "#0000FF"]} // Colores de los confetis
          />
        )}
      </form>
    </div>
  );
}
