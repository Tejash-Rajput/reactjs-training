import React, { useMemo, useState, useCallback } from "react";
import Navbar from "./components/Navbar";

// const nums = new Array(30_000_000).fill(0).map((_, i) => {
//   return {
//     index: i,
//     isMagical: i === 29_000_000,
//   };
// });

const App = () => {
  const [c, setC] = useState(0);
  // const [numbers, setNumbers] = useState(nums);
  // const [aaa, setAaa] = useState("second")
  const changeAAA = useCallback(() => {
    return "beeeee";
  }, []);

  // const magical = useMemo(() => numbers.find((i) => i.isMagical === true), [numbers]);

  return (
    <div>
      <Navbar aaa={"yoo"} changeAAA={changeAAA} />
      <h1>{c}</h1>
      <button
        onClick={() => {
          setC((prev) => prev + 1);
          // if (c == 10) {
          //   setNumbers(
          //     new Array(10_000_000).fill(0).map((_, i) => {
          //       return {
          //         index: i,
          //         isMagical: i === 9_000_000,
          //       };
          //     })
          //   );
          // }
        }}
      >
        +
      </button>
      {/*<span>magical is {magical?.index}</span> */}
    </div>
  );
};

export default App;
