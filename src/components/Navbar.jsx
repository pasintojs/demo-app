import React from "react";

function Navbar() {
  return (
    <div className="bg-gray-300 max-w-screen-xl mx-auto text-white px-10 py-2 my-2 rounded flex items-center justify-between">
      <div>Menu</div>
      <div>
        <ul className="flex flex-col md:flex-row">
          <li className="mx-5">test1</li>
          <li className="mx-5">test2</li>
          <li className="mx-5">test1</li>
          <li className="mx-5">test2</li>
          <li className="mx-5">test1</li>
          <li className="mx-5">test2</li>
          <li className="mx-5">test1</li>
          <li className="mx-5">test2</li>
          <li className="mx-5">test1</li>
          <li className="mx-5">test2</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
