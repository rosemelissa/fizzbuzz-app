import { useState } from "react";
import { fizzbuzzify } from "../utils/fizzbuzzify";

function FizzBuzz(): JSX.Element {
  const [previousNumbers, rerenderWithNewNumber] = useState<number[]>([]);

  const handleNewNumber = () => {
    return rerenderWithNewNumber([
      ...previousNumbers,
      previousNumbers.length + 1,
    ]);
  };

  return (
    <>
      <h1>FizzBuzz!</h1>
      <p>{previousNumbers.map(fizzbuzzify)}</p>
      <button onClick={handleNewNumber}>Next</button>
    </>
  );
}

export default FizzBuzz;
