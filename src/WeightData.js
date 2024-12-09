// WeightData.js
import calorieData from './CalorieData'; // Assuming calorieData is the data you are using

export function getWeightStatus() {
    let status = '';
    let weightChange = 0;
    let colorClass = '';

    const netCalories = calorieData.caloriesNet();

    if (netCalories > 0) {
        status = 'Approximate Weight Gained';
        weightChange = netCalories / 7700; // Calculate weight gained in kg
        colorClass = 'text-red-600'; // Red for weight gained
    } else if (netCalories < 0) {
        status = 'Approximate Weight Lost';
        weightChange = Math.abs(netCalories) / 7700; // Calculate weight lost in kg
        colorClass = 'text-green-600'; // Green for weight lost
    } else {
        status = 'Weight Change';
        weightChange = 0;
        colorClass = 'text-gray-500'; // No change, neutral color
    }

    return {
        message: `${status} - ${weightChange.toFixed(2)} kg`,
        colorClass: colorClass,
    };
}

export default { getWeightStatus }; // Properly exporting the function
