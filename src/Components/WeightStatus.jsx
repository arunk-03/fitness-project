import { getWeightStatus } from "../WeightData";  // Correct import
import calorieData from "../CalorieData";  // Import calorie data correctly

export default function WeightStatus() {
  // Call the getWeightStatus function with netCalories from calorieData
  const weightStatus = getWeightStatus(calorieData.caloriesNet()); 

  return (
    <div className="flex flex-row bg-white rounded-2xl">
      <p className={`text-[1.8rem] p-5 font-bold text ${weightStatus.colorClass}`}>
        {weightStatus.message} <br />
        <div className="flex flex-col  m-4 text-black">
          <h1 className="m-3">Current Weight: {calorieData.weight} kg</h1>
          <h1 className="m-3">Goal Weight: {calorieData.goalWeight} kg</h1>
         
        </div>
        
      </p>
    </div>
  );
}

