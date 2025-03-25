

// Code your solution here

const batteryBatches = [3, 5, 3, 4, 4, 2, 3, 2, 2, 3]; // Sum = 31

const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

module.exports = { totalBatteries };
