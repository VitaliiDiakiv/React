// import { useState } from "react";

import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   // const step = 1;
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }
//   function handleNext() {
//     if (step < 3) setStep((s) => s + 1);
//   }

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <StepMessage step={step}> {messages[step - 1]}</StepMessage>

//           <div className="buttons">
//             <Button
//               textcolor="#fff"
//               backgroundColor="#7950f2"
//               onClick={handlePrevious}
//             >
//               <span>👈🏻</span>Previous
//             </Button>
//             <Button
//               textcolor="#fff"
//               backgroundColor="#7950f2"
//               onClick={handleNext}
//             >
//               Next<span>👉🏻</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// function StepMessage({ step, children }) {
//   return (
//     <div className="message">
//       <h3>Step {step}</h3>: {children}
//     </div>
//   );
// }

// function Button({ textcolor, backgroundColor, onClick, children }) {
//   return (
//     <button
//       style={{ backgroundColor: backgroundColor, color: textcolor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

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
  console.log(avgTip);
  const finalBill = bill + avgTip;
  console.log(finalBill);
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
