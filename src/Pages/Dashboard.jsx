import React from 'react';
import NavBar from '../Components/NavBar';
import Bottom from '../Components/Bottom';
import CalorieCard from '../Components/CalorieCard';
import calorieData from '../CalorieData';
import { getWeightStatus } from '../WeightData';
import { Link } from 'react-router-dom';  // Correctly importing Link
import WeightStatus from '../Components/WeightStatus';
import WeightChart from '../Components/WeightGraph';

// SideButtons component
function SideButtons({ text, direct }) {
  return (
    <button className="flex flex-col text-black text-[2rem] w-[100%] h-[10%] bg-red-600 items-center justify-center mt-5 rounded-lg shadow-lg">
      <Link to={direct} className="text-white">
        {text}
      </Link>
    </button>
  );
}

export default function DashboardPage() {
  // Use netCalories from calorieData (calculated property)
  const weightStatus = getWeightStatus(calorieData.caloriesNet()); // Calling function correctly

  return (
    <>
      <NavBar />
      <div className="flex">
        {/* Sidebar for navigation */}
        <div className="flex flex-col h-screen w-[20%] bg-white justify-center shadow-lg">
          <SideButtons text={"Dashboard"} direct={'/dashboard'} />
          <SideButtons text={"Settings"} direct={'/settings'} />
        </div>

        {/* Main content */}
        <div className="flex flex-col h-screen w-[80%] bg-gray-100 p-5">
          {/* Row for Calorie Cards */}
          <div className="flex flex-row justify-around space-x-8">
            <CalorieCard heading="Calories Consumed" bodyText={calorieData.caloriesGained} />
            <CalorieCard heading="Calories Burned" bodyText={calorieData.caloriesBurned} />
            <CalorieCard
              heading="Calories Status"
              bodyText={calorieData.getCaloriesStatus().message}
              colorClass={calorieData.getCaloriesStatus().colorClass}
            />
          </div>

          {/* Container for Weight Status and Chart */}
          <div className="flex flex-col justify-center  mt-8  bg-white p-5 rounded-lg shadow-lg h-[80%]">
            <WeightStatus />
            <WeightChart />
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
}

