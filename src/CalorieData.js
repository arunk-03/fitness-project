const calorieData = {
    caloriesGained: 10000,
    caloriesBurned: 1300,
    caloriesNet: function() {
        return this.caloriesGained - this.caloriesBurned;
    },
    getCaloriesStatus: function() {
        const netCalories = this.caloriesNet();
        let statusMessage = '';
        let colorClass = '';

        if (netCalories < 0) {
            statusMessage = `Lost: ${netCalories}`;
            colorClass = 'text-green-500';  // Green color for calories lost
        } else if (netCalories > 0) {
            statusMessage = `Gained: ${Math.abs(netCalories)}`;
            colorClass = 'text-red-500';  // Red color for calories gained
        } else {
            statusMessage = "None";
            colorClass = 'text-gray-600'; // Gray color for no change
        }

        return { message: statusMessage, colorClass };
    }
};

export default calorieData;