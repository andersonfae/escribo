"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularSomatorio = () => {
    const num = parseInt(numero, 10);

    if (!isNaN(num) && num > 0 && Number.isInteger(num)) {
      let somatorio = 0;

      for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          somatorio += i;
        }
      }

      setResultado(`O somatório é: ${somatorio}`);
    } else {
      setResultado("Por favor, insira um número inteiro positivo válido.");
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-white">
      <div className="border border-black p-8 rounded">
        <h1 className="text-2xl font-bold mb-4">
          Somatório de Divisíveis por 3 ou 5
        </h1>
        <label className="block mb-4">
          Insira um número inteiro positivo:
          <input
            type="text"
            className="border border-black rounded"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </label>
        <button
          onClick={calcularSomatorio}
          className="bg-amber-300 text-black px-4 py-2 rounded mx-auto block text-lg font-normal font-['Inter']"
        >
          Calcular
        </button>
        <p className="mt-4">{resultado}</p>
      </div>
    </main>
  );
}
