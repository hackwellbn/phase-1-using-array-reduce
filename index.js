// Code your solution here

const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // Example battery batches

const totalBatteries = batteryBatches.reduce((total, currentBatch) => total + currentBatch, 0);

console.log(totalBatteries); // Output will be the sum of the battery amounts

