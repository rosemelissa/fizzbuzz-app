import { useState } from "react";
import { fizzbuzzify } from "../utils/fizzbuzzify";

function FizzBuzz(): JSX.Element {
  const [numberList, setNumberList] = useState<number[]>([]);

  const handleNewNumber = () => {
    return setNumberList([...numberList, numberList.length + 1]);
  };

  return (
    <>
      <h1>FizzBuzz!</h1>
      <p>{numberList.map(fizzbuzzify)}</p>
      <button onClick={handleNewNumber}>Next</button>
    </>
  );
}

export default FizzBuzz;
