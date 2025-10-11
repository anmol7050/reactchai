// This is what I have done from the video but it is not working so I created this file and copied my work from the file App.jsx

// import { useState, useCallback, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [length, setLenght] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) {
//       str += "0123456789";
//     }
//     if (charAllowed) {
//       str += "!@#$%^&*-+=";
//     }
//     for (let i = 1; i < array.length; i++) {
//       // below char is index actually
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);
//   return (
//     <>
//       <div className="w-full max-w-md max-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
//         <h1 className="text-white text-center my-3">Password Generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//           />
//           <button className="outline none bg-blue-700 text-white px-3 py-0.5 shrink-0">
//             copy
//           </button>
//         </div>
//         <div>
//           <div>
//             <input
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLenght(e.target.value);
//               }}
//             />
//             <label>Length: {length} </label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               defaultValue={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev);
//               }}
//             />
//             <label>Numbers</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
