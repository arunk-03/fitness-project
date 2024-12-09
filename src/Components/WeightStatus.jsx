import { getWeightStatus } from "../WeightData";  // Correct import
import calorieData from "../CalorieData";  // Import calorie data correctly

export default function WeightStatus() {
  // Call the getWeightStatus function with netCalories from calorieData
  const weightStatus = getWeightStatus(calorieData.caloriesNet()); 

  return (
    <div className="flex flex-row bg-white rounded-2xl">
      <p className={`text-[1.8rem] p-5 font-bold text ${weightStatus.colorClass}`}>
        {weightStatus.message}
      </p>
    </div>
  );
}

