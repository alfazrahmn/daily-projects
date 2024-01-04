import React from "react";

// use want to create a password generator . you will use useState,useEffect,useCallback and useRef.

// its not that hard you can do this . its so easy i'll give you some hinds 
//tutorials :https://youtu.be/NmSh-YpmDU4?si=LxxoXdjwoHCwF__Z

const App = () => {
 
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          readOnly
          className="outline-none"
          placeholder="password"
          // ref={}
        />
        <button
        // onClick={()=>{

        // }} 
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            // min={8}
            // max={13}
            type="range"
            className="cursor-pointer"
            // onChange={(e) => {
              
            // }}
          />
          <label htmlFor="lenght">Length {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <label htmlFor="lenght">Symbol</label>
          <input
            // defaultChecked={}
            type="checkbox"
            className="cursor-pointer"
            // onClick={() => {
              
            // }}
          />
        </div>
        <div className="flex items-center gap-x-1">
          <label htmlFor="lenght">Number</label>
          <input
            type="checkbox"
            className="cursor-pointer"
            // onClick={() => {
              
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
