import NavBar from "../Components/NavBar";
import Bottom from "../Components/Bottom";

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

        {/* Unified Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>

        {/* Content Section */}
        <div className="absolute top-1/3 left-10 transform -translate-y-1/2 text-white">
          {/* Title */}
          <h1 className="text-[80px] md:text-[100px] lg:text-[120px] font-bold leading-tight drop-shadow-md">
            Fitness Tracker
          </h1>

          {/* Subtext */}
          <p className="text-[18px] md:text-[20px] font-light mt-4 w-[90%] md:w-[70%] leading-relaxed">
            A personalized trainer to help you analyze your progress and reach your goals efficiently.
          </p>

          {/* Call-To-Action Button */}
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-[18px] font-semibold transition-all duration-200 shadow-md">
            Get Started
          </button>
        </div>
      </div>

      <Bottom />
    </>
  );
}
