import siteConfig from "../SiteConfig";

export default function Bottom() {
    return (
      <div className="">
        <div className="w-full h-[20rem] flex items-center pl-5 justify-between " style={{ backgroundColor: "#14274e" }}>
  <div className="text-green-600 font-bold text-3xl border-r-[2px] border-white border-opacity-10 flex flex-col w-[50%]">
    {siteConfig.siteName}
    <p className="text-[15px] mt-5 w-[50%] text-white text-xl font-normal text-opacity-80">
    {siteConfig.siteName} is a tool to help track your fitness and analyze to get the best result out of your workouts.
    </p>
  </div>
  <div className="w-[50%] flex items-center justify-center text-white text-opacity-80">
    &copy; {siteConfig.siteName} 2024. All rights Reserved.
  </div>
</div>

      </div>
    );
  }
  