/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmPerHour = 10000; // velocity (km/h)
const accelerationMetersPerSecondSquared = 3; // acceleration (m/s^2)
const timeSeconds = 36000; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const remainingFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)


const newDistanceKm = initialDistanceKm + (initialVelocityKmPerHour * timeSeconds) //calcultes new distance
const remainingFuel = fuelBurnRateKgPerSecond * timeSeconds //calculates remaining fuel
const newVelocityKmPerHour = calculateNewVelocity(initialVelocityKmPerHour, accelerationMetersPerSecondSquared, timeSeconds) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calculateNewVelocity = (initialVelocityKmPerHour, accelerationMetersPerSecondSquared, timeSeconds) => { 
  return initialVelocityKmPerHour + (accelerationMetersPerSecondSquared * timeSeconds)
}

console.log(`Corrected New Velocity: ${newVelocityKmPerHour } km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






