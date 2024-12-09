import { Link } from "react-router-dom";
import siteConfig from "../SiteConfig";

export default function NavBar() {
    return (
      <>
      {/* <div className="bg-red-500 w-full h-[6rem] flex items-center justify-center top-0 z-10 sticky opacity-99 "> */}
      <div className="flex justify-center items-center  w-[100%] h-[4rem] pl-5  mx-auto rounded-b-md top-0 z-10 sticky opacity-98 shadow-lg" style={{ backgroundColor: "#e6fbfb" }}>
          <div className="flex justify-between items-center w-full">
            <div className="text-3xl font-bold flex text-green-600"> <img src={siteConfig.siteIcon} className="w-[40px] h-[40px] mr-5" alt="Site Icon"  /><Link to="/">{siteConfig.siteName}</Link></div>
            <Link to="/dashboard" className="flex ml-auto p-5">
              <h1 className="text-black">Dashboard</h1>
            </Link>
         <Link to="/about" className="flex p-5">
              <h1 className="text-black">About</h1>
            </Link>
         <Link to="/signup" className="flex p-5">
              <h1 className="text-black">Sign Up</h1>
            </Link>
          <Link to="/login" className="flex  rounded-[20px] bg-green-500 p-2 m-5 h-10 w-20 text-[15px] justify-center">
              <h1 className="text-white">Login</h1>
            </Link>
       </div>
          </div>
        {/* </div> */}
        

      </>
    )
  }
  