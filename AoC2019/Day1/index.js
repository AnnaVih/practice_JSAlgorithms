// The Elves quickly load you into a spacecraft and prepare to launch.
// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
const add = (x, y) => x + y;

const floorish = (val, start = 0) => {
  let fuel = Math.floor(val / 3) - 2;
  if (fuel > 0){
    start += fuel;
    return floorish(fuel, start);
  } else {
    return start;
  }
}

const getFuelFromMass = massArr => {
  return massArr.map(x => floorish(x)).reduce(add)
}

module.exports = getFuelFromMass;