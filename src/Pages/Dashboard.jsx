import React from 'react';
import NavBar from '../Components/NavBar';
import Bottom from '../Components/Bottom';
import CalorieCard from '../Components/CalorieCard';
import calorieData from '../CalorieData';
import { getWeightStatus } from '../WeightData';
import { Link } from 'react-router-dom';  // Correctly importing Link
import WeightStatus from '../Components/WeightStatus';
import WeightChart from '../Components/WeightGraph';
import LeftNavBar from '../Components/LeftNavBar';

// // SideButtons component
// function SideButtons({ text, direct }) {
//   return (
//     <button className="transition-all duration-200 hover:bg-green-200 flex flex-col rounded-lg font-bold font-sans text-[1.1rem] w-[90%] py-4 bg-green-100 items-center text-black justify-center my-3 mx-auto shadow-sm">
//       <Link to={direct} className="w-full">
//         {text}
//       </Link>
//     </button>
//   );
// }

export default function DashboardPage() {
  const weightStatus = getWeightStatus(calorieData.caloriesNet());

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex gap-6 p-6">
        <LeftNavBar />
        
        <div className="flex-1 flex flex-col gap-6">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CalorieCard 
              heading="Calories Consumed" 
              bodyText={calorieData.caloriesGained}
              className="transform hover:scale-105 transition-transform"
            />
            <CalorieCard 
              heading="Calories Burned" 
              bodyText={calorieData.caloriesBurned}
              className="transform hover:scale-105 transition-transform"
            />
            <CalorieCard
              heading="Calories Status"
              bodyText={calorieData.getCaloriesStatus().message}
              colorClass={calorieData.getCaloriesStatus().colorClass}
              className="transform hover:scale-105 transition-transform"
            />
          </div>

          {/* Weight Status and Chart - Updated Layout */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 font-sans mb-2">
                  Weight Progress
                </h2>
                <p className="text-gray-500 text-sm">
                  Track your weight journey over time
                </p>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <span className="text-green-600 font-medium text-sm">
                  Last 30 Days
                </span>
              </div>
            </div>

            <div className="flex gap-8">
              {/* Weight Status Card */}
              <div className="w-1/4 space-y-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-gray-600 text-sm font-medium mb-2">
                    Current Weight
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-800">70.2</span>
                    <span className="text-gray-500 ml-1">kg</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-gray-600 text-sm font-medium mb-2">
                    Target Weight
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-800">68.0</span>
                    <span className="text-gray-500 ml-1">kg</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-gray-600 text-sm font-medium mb-2">
                    Weight Lost
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-green-600">-2.3</span>
                    <span className="text-gray-500 ml-1">kg</span>
                  </div>
                </div>
              </div>

              {/* Weight Chart */}
              <div className="flex-1 relative">
                <div className="absolute inset-0">
                  <WeightChart />
                </div>
              </div>
            </div>
          </div>

          {/* Progress Summary */}
          
          
        </div>
      </div>
      <Bottom />
    </div>
  );
}

