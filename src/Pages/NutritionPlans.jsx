import React from 'react';
import NavBar from '../Components/NavBar';
import Bottom from '../Components/Bottom';
import LeftNavBar from '../Components/LeftNavBar';
import NutritionPlanCard from '../Components/NutritionPlanCard';
import nutritionPlans from '../NutritionPlans';

export default function NutritionPlans() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex gap-6 p-6">
        <LeftNavBar />
        
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Nutrition Plans</h1>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutritionPlans.map((item) => (
              <NutritionPlanCard
                key={item.name}
                name={item.name}
                calories={item.calories}
                description={`A delicious ${item.category.toLowerCase()} dish`}
                thumbnail={item.thumbnail}
                ingredients={item.ingredients}
                contents={[
                  { name: "Protein", amount: `${item.nutritionalValue.protein}g` },
                  { name: "Carbs", amount: `${item.nutritionalValue.carbs}g` },
                  { name: "Fat", amount: `${item.nutritionalValue.fat}g` }
                ]}
              />
            ))}
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}
