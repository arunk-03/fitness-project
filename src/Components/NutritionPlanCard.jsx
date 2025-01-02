const NutritionPlanCard = ({ name, calories, description, ingredients, contents, thumbnail }) => {
  const caloriesPerServing = Math.round(calories);
  
  // Default image URL if thumbnail is just "url_" or missing
  const defaultImage = "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden max-w-sm cursor-pointer">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={thumbnail === "url_" ? defaultImage : thumbnail} 
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" 
          alt={`${name}`} 
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold
                      transform transition-transform duration-300 hover:scale-110 hover:bg-green-600">
          {caloriesPerServing} kcal
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 space-y-4">
        <h1 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-green-600">{name}</h1>
        
        {/* Ingredients as comma-separated text */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-2">Ingredients</h2>
          <p className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-800">
            {ingredients?.join(', ')}
          </p>
        </div>

        {/* Nutrition Quick Facts */}
        <div className="grid grid-cols-2 gap-2">
          {contents?.map((content, index) => (
            <div key={index} className="text-sm transform transition-all duration-300 hover:scale-105">
              <span className="text-gray-600">{content.name}: </span>
              <span className="font-medium text-gray-800">{content.amount}</span>
            </div>
          ))}
        </div>

        {/* Description - truncated */}
        <p className="text-gray-600 text-sm line-clamp-2 transition-colors duration-300 hover:text-gray-800">{description}</p>
      </div>
    </div>
  );
}

export default NutritionPlanCard;