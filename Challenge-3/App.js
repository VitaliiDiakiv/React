import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setBill("");
    setTip(0);
    setFriendTip(0);
  }
  return (
    <>
      <Bill bill={bill} onBill={setBill} />
      <Tip tip={tip} onTip={setTip}>
        How did you like the service?
      </Tip>
      <Tip tip={friendTip} onTip={setFriendTip}>
        How did your friend like the service?
      </Tip>
      <FinalBill
        bill={bill}
        tip={tip}
        friendTip={friendTip}
        onReset={handleReset}
      />
    </>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ tip, onTip, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => onTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function FinalBill({ bill, tip, friendTip, onReset }) {
  const avgTip = bill * ((tip + friendTip) / 2 / 100);
  і;
  const finalBill = bill + avgTip;

  if (bill)
    return (
      <>
        <h2>
          You pay ${finalBill} (${bill} + ${avgTip} tip)
        </h2>
        <button onClick={onReset}>Reset</button>
      </>
    );
}
