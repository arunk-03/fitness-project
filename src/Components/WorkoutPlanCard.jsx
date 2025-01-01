const WorkoutPlanCard = ({ name, caloriesBurnt, description, thumbnail }) => {
    const caloriesPerSet = Math.round(caloriesBurnt * 12);
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h1 className="text-2xl font-bold p-2">{name}</h1>
      <img 
        src={thumbnail} 
        className="w-full h-[200px] object-cover rounded-lg" 
        alt={`${name} Thumbnail`} 
      />
      <p className="text-xl font-semibold p-2">Calories Burnt: {caloriesPerSet} kcal per set of 12</p>
      <p className="text-base p-2">{description}</p>
    </div>
  );
}

export default WorkoutPlanCard;