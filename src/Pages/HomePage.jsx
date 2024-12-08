import NavBar from "../Components/NavBar";
import Bottom from "../Components/Bottom";
import Card from "../Components/Card";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="relative w-full h-[40rem] mx-auto">
        {/* Background Image */}
        <img
  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
  alt="Gym Stock Photo"
  className="h-full w-full object-cover blur-[2px]"
  style={{ objectPosition: "center top" }} // Adjusts the focus to the top part of the image
/>

        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>

        
        <div className="absolute top-1/3 left-10 transform -translate-y-1/2 text-white">
         
          <h1 className="text-[80px] md:text-[100px] lg:text-[120px] font-bold leading-tight drop-shadow-md">
            Fitness Tracker
          </h1>

          
          <p className="text-[18px] md:text-[20px] font-light mt-4 w-[90%] md:w-[70%] leading-relaxed">
            A personalized trainer to help you analyze your progress and reach your goals efficiently.
          </p>


          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-[18px] font-semibold transition-all duration-200 shadow-md">
            Get Started
          </button>
        </div>
      </div>
      <div className="text-4xl font-bold text-black pb-6 m-10 ">
        Why choose Fitness Tracker?
      </div>
      <div className="flex flex-row justify-between m-10 gap-x-8 flex-wrap">
  <Card
    image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?" // Replace with your image URL
    heading="Workout Plans"
    bodyText="Explore workout plans customized to your preferences and goals."
  />
  <Card
    image="https://images.pexels.com/photos/1161682/pexels-photo-1161682.jpeg" // Replace with your image URL
    heading="Nutrition Plans"
    bodyText="Discover nutrition plans designed to support your fitness journey."
  />
  <Card
    image="https://images.pexels.com/photos/6550853/pexels-photo-6550853.jpeg" // Replace with your image URL
    heading="Fitness Check"
    bodyText="Assess your fitness with expert tools and insights."
  />
</div>

      <Bottom />
    </>
  );
}
