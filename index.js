const headquarters = 42;
const lengthOfManhattanBlocks = 264;
let pickupLocation = 50;

function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - headquarters);
}
console.log(distanceFromHqInBlocks());

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * lengthOfManhattanBlocks;
}
console.log(distanceFromHqInFeet());

function distanceTravelledInFeet(startBlock, destinationBlock) {
  return Math.abs(destinationBlock - startBlock) * lengthOfManhattanBlocks;
}
console.log(distanceTravelledInFeet(38, 34));

function calculatesFarePrice(startBlock, destinationBlock) {
  let distance = distanceTravelledInFeet(startBlock, destinationBlock);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far"; // ✅ Simplified this condition
  }
}
