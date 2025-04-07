import React from "react";

function Navbar() {
  return (
    <div className="container mx-auto text-white bg-orange-500 rounded-2xl   py-2 my-2  flex items-center justify-between">
      <div className="mx-3">Menu</div>
      <div>
        <ul className="flex flex-col md:flex-row mx-3">
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
