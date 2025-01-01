import React from 'react';
import NavBar from '../Components/NavBar';
import Bottom from '../Components/Bottom';
import LeftNavBar from '../Components/LeftNavBar';
import WorkoutPlanCard from '../Components/WorkoutPlanCard';
import workoutPlans from '../WorkoutPlans'; // Import the workout data

export default function WorkoutPlans() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex gap-6 p-6">
        <LeftNavBar />
        
        {/* Main content area with grid of workout cards */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6 text-center text-green-600">Workout Plans</h1>
          
          {/* Container for all categories */}
          <div className="space-y-8">
            {workoutPlans.workouts.map((category) => (
              <div key={category.category} className="mb-8">
                <h2 className="text-4xl font-bold mb-4 p-2 ">{category.category}</h2>
                
                {/* Grid for workout cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.exercises.map((exercise) => (
                    <WorkoutPlanCard
                      key={exercise.name}
                      name={exercise.name}
                      caloriesBurnt={exercise.caloriesBurnt}
                      description={exercise.description}
                      thumbnail={exercise.thumbnail}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}