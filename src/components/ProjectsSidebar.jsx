import React from "react";

export default function ProjectsSidebar() {
  const [testValue, setTestValue] = React.useState(5);

  function clickHandler() {
    setTestValue((prev) => prev + 5);
  }
  return (
    <aside>
      <h2>Your Project {testValue}</h2>
      <div>
        <button onClick={clickHandler}>Please add your project</button>
      </div>
      <ul></ul>
    </aside>
  );
}
