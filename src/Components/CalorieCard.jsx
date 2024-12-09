export default function CalorieCard({ heading, bodyText, colorClass }) {
    return (
      <div className="flex">
        <div className="bg-white w-[350px] h-[150px] rounded-xl shadow-lg text-gray-500 text-[2rem] pt-5 flex flex-col">
          <div className="pl-5">
            {heading}
          </div>
          <div className={`w-full  h-full rounded-xl shadow-lg font-bold text-[2.3rem] flex pl-5 ${colorClass}`}>
            {bodyText} kcal
          </div>
        </div>
      </div>
    );
  }
  