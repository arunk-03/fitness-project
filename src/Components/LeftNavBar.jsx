import { Link } from 'react-router-dom';

function SideButtons({ text, direct }) {
    return (
      <button className="transition-all duration-200 hover:bg-green-500 flex flex-col rounded-lg font-bold font-sans text-[1.1rem] w-[90%] py-3 bg-green-400 items-center text-black justify-center mx-auto shadow-sm">
        <Link to={direct} className="w-full text-center">
          {text}
        </Link>
      </button>
    );
  }
  
export default function LeftNavBar() {
    return(
      <div className="sticky top-[80px] h-[calc(100vh-160px)] w-[250px] flex-shrink-0">
        <div className="flex rounded-xl flex-col h-full w-full bg-white shadow-lg">
          <h2 className="text-xl font-bold mt-4 mb-4 px-6">Menu</h2>
          <div className="flex flex-col justify-between flex-1 py-4">
            <div className="flex flex-col justify-evenly h-full">
              <SideButtons text="Your Progress" direct="/progress" />
              <SideButtons text="Dashboard" direct="/dashboard" />
              <SideButtons text="Workout Plans" direct="/workoutplans" />
              <SideButtons text="Nutrition Plans" direct="/nutritionplans" />
              <SideButtons text="Chat with AI" direct="/chat" />
              <SideButtons text="Settings" direct="/settings" />
            </div>
          </div>
        </div>
      </div>
    )
}