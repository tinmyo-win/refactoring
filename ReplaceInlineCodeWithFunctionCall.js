const states = ["LA", "NY", "MA"]

// let appliesToMass = false;
// for (const s of states) {
//     if (s === "MA") appliesToMass = true;
// }

let appliesToMass = states.includes("MA");

console.log("is apply to mass: ", appliesToMass)