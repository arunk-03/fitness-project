import React from 'react';
import NavBar from '../Components/NavBar';
import Bottom from '../Components/Bottom';
import LeftNavBar from '../Components/LeftNavBar';
import NutritionPlanCard from '../Components/NutritionPlanCard';
import nutritionPlans from '../NutritionPlans';

export default function NutritionPlans() {
  // Group items by category
  const vegItems = nutritionPlans.filter(item => item.category === "Veg");
  const nonVegItems = nutritionPlans.filter(item => item.category === "Non-Veg");

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex">
        <LeftNavBar />
        
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Nutrition Plans</h1>
          
          <div className="space-y-12">
            {/* Vegetarian Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Vegetarian Dishes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vegItems.map((item) => (
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

            {/* Non-Vegetarian Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Non-Vegetarian Dishes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nonVegItems.map((item) => (
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
        </div>
      </div>
      <Bottom />
    </div>
  );
}
