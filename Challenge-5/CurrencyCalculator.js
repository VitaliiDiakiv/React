import { useState, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState("");

  useEffect(
    function () {
      async function getCurrencyData() {
        // if (!value || !fromCurrency || !toCurrency) return;
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        console.log(data);

        setConverted(data.rates[toCurrency]);
      }
      if (fromCurrency === toCurrency) return setConverted(value);
      getCurrencyData();
    },
    [value, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {value} {fromCurrency} is &rarr; {converted} {toCurrency}
      </p>
    </div>
  );
}
