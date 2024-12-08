export default function NavBar() {
    return (
      <>
      {/* <div className="bg-red-500 w-full h-[6rem] flex items-center justify-center top-0 z-10 sticky opacity-99 "> */}
      <div className="flex justify-center items-center  w-[100%] h-[4rem] pl-5  mx-auto rounded-b-md top-0 z-10 sticky opacity-98 shadow-lg" style={{ backgroundColor: "#e6fbfb" }}>
          <div className="flex justify-between items-center w-full">
            <div className="text-3xl font-bold">FitnessTracker</div>
            <a href="/Home" className="flex ml-auto p-5">
              <h1 className="text-black">Home</h1>
            </a>
            <a href="/signup" className="flex p-5">
              <h1 className="text-black">About</h1>
            </a>
            <a href="/signup" className="flex p-5">
              <h1 className="text-black">Sign Up</h1>
            </a>

            <a href="/login" className="flex  rounded-[20px] bg-green-500 p-2 m-5 h-10 w-20 text-[15px] justify-center">
              <h1 className="text-white">Login</h1>
            </a>
          </div>
          </div>
        {/* </div> */}
        

      </>
    )
  }
  