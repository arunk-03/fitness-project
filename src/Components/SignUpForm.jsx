import { Link } from 'react-router-dom';
import siteConfig from '../SiteConfig';

export default function SignUpForm() {
    return (
        <>
            <div className="flex flex-col sm:w-1/2 md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#fcfcfc] rounded-2xl shadow-xl my-[60px]">
                <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
                    <div>
                        <img src={siteConfig.siteIcon} alt="Logo" width="50" />
                    </div>
                    <h1 className="text-3xl font-bold text-[#4B5563] my-auto">{siteConfig.siteName}</h1>
                </div>
                <div className="text-sm font-light text-[#6B7280] pb-8 mx-auto"></div>

                <form className="flex flex-col">
                    {/* Name Field */}
                    <div className="pb-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#111827]">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="pl-4 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                            placeholder="Enter your name"
                            autoComplete="off"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="pb-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#111827]">Email</label>
                        <div className="relative text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                                placeholder="Enter your email"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="pb-2">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#111827]">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="pl-4 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                            placeholder="Enter your password"
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="pb-6">
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-[#111827]">Confirm Password</label>
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            className="pl-4 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 py-3 px-4"
                            placeholder="Re-enter your password"
                            autoComplete="new-password"
                        />
                    </div>

                    <button type="submit" className="w-full text-[#FFFFFF] bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
                        Sign Up
                    </button>
                    <div className="text-sm font-light text-[#6B7280]">
                        Already have an account? <Link to="/login" className="font-medium text-green-600 hover:underline">Login</Link>
                    </div>
                </form>
            </div>
        </>
    );
}
