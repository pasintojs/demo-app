import { useEffect, useState } from "react";

export default function ProjectsSidebar() {
  const [testValue, setTestValue] = useState(5);
  const [booleanValue, setBooleanValue] = useState(false);
  function clickHandler() {
    setTestValue((prev) => prev + 55);
  }
  useEffect(() => setBooleanValue(true), [testValue]);

  return (
    <>
      {booleanValue && (
        <div
          className="bg-red-100 flex items-center justify-center h-screen"
          onClick={() => setBooleanValue(false)}
        >
          {" "}
          Whatttt{" "}
        </div>
      )}
      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h2>Your Project {testValue}</h2>
        <button
          className="bg-blue-500 text-white rounded-full px-4 py-2"
          onClick={clickHandler}
        >
          Please add your project
        </button>
      </div>
    </>
  );
}
