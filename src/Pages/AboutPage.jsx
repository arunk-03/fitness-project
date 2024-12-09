import NavBar from "../Components/NavBar";
import Bottom from "../Components/Bottom";
import siteConfig from "../SiteConfig";

export default function AboutPage() {
    return (
        <>
        <NavBar />

        <div className=" h-[40rem] w-full bg-grey-100 text-3xl font-bold text-gray-600">
            <h1 className="pt-10 pl-10 text-[4rem]">About -</h1>
            <p className="m-10 text-[2rem] font-normal w-[60%]" >At {siteConfig.siteName}, we’re committed to empowering individuals on their journey to health and wellness. Our platform simplifies the process of monitoring your fitness progress, setting achievable goals, and staying consistent with your routine.

Whether you’re a beginner or a seasoned athlete, FitnessTracker offers intuitive tools and insightful metrics tailored to your unique needs. We believe that fitness isn’t just about physical well-being—it’s about building a balanced lifestyle where health meets happiness.

Join us to take charge of your fitness goals and discover the best version of yourself. Start tracking your journey with ease today!</p>
        </div>

        <Bottom />
        </>
    );
}