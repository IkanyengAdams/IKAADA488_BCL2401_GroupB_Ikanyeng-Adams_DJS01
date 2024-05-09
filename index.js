/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmPerHour = 10000; // velocity (km/h)
const accelerationMetersPerSecondSquared = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const remainingFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPerSecond = 0.5; // fuel burn rate (kg/s)

// function to calculate new velocity
function calculateNewVelocity(velocity, acceleration, time) {
  if (
    typeof velocity !== "number" ||
    typeof acceleration !== "number" ||
    typeof time !== "number"
  ) {
    throw new Error(
      "Invalid input: velocity, acceleration, and time be in numbers"
    );
  }

  const velocityMetersPerSecond = velocity * (1000 / 3600); // 1km/h = 1000 m / 3600 s

  const newVelocityMetersPerSecond =
    velocityMetersPerSecond + acceleration * time;

  const newVelocityKmPerHour = newVelocityMetersPerSecond * (3600 / 1000);

  return newVelocityKmPerHour;
}

const newDistanceKm =
  initialDistanceKm + initialVelocityKmPerHour * (timeSeconds / 3600); //calcultes new distance

const FuelConsumed = fuelBurnRateKgPerSecond * timeSeconds; //calculates fuel consumed

const remainingFuel = remainingFuelKg - FuelConsumed;

let newVelocityKmPerHour;
try {
  newVelocityKmPerHour = calculateNewVelocity(
    initialVelocityKmPerHour,
    accelerationMetersPerSecondSquared,
    timeSeconds
  );
} catch (error) {
  console.error("Error:", error.message);
  newVelocityKmPerHour = "N/A";
} //calculates new velocity based on acceleration


console.log(`Corrected New Velocity: ${newVelocityKmPerHour} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
