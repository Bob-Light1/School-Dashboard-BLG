import Image from "next/image";
import BigCalendar from "@/components/BigCalendar";
import Link from "next/link";
import PerformanceChart from "@/components/PerformChart";

const SingleStudentPage = () => {
    return (
        <div className="flex-1 p-1 flex flex-col gap-4 xl:flex-row">
            {/* LEFT */}
            <div className="w-full">
                {/* TOP */}
                <div className="flex flex-col my-3 lg:flex-row gap-4">
                     {/* USER INFO CARD */}
                     <div className="bg-Sky py-6 px-4 rounded-md flex-1 flex gap-4 shadow-md">
                        <div className="w-1/3">
                            <Image 
                                src="https://images.pexels.com/photos/1184464/pexels-photo-1184464.jpeg?auto=compress&cs=tinysrgb&w=2600" 
                                alt="" 
                                width={144} 
                                height={144} 
                                className="w-36 h-30 rounded-full object-cover"
                                />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className="text-xl font-semibold">Bogo Jislain</h1>
                            <p className="text-sm text-gray-500">
                                Lorem Ipsun Diayaye pecs iconof Acomplissarum nim hikoslom.
                            </p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium bg-white rounded-md p-4">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-full flex items-center gap-2">
                                    <Image src="/blood.png" alt="" width={14} height={14}/>
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-full flex items-center gap-2">
                                    <Image src="/date.png" alt="" width={14} height={14}/>
                                    <span>January 2025</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-full flex items-center gap-2">
                                    <Image src="/mail.png" alt="" width={14} height={14}/>
                                    <span>user@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-full flex items-center gap-2">
                                    <Image src="/phone.png" alt="" width={14} height={14}/>
                                    <span>(+237) 681 20 65 39</span>
                                </div>
                            </div>
                        </div>
                     </div>
                     {/* SMALL CARDS */}
                     <div className="flex-1 flex flex-col gap-4 justify-between  md:flex-row lg:flex-wrap">
                        {/*CARDS */}
                        <div className="bg-gray-20 p-4 rounded-md flex gap-4 w-full md:w-[25%] lg:w-[45%] xl:w-[47%] 2xl:w-[48%] shadow-md"> 
                            <Image 
                                src="/singleAttendance.png" 
                                alt="" 
                                width={24} 
                                height={24} 
                                className="w-12 h-12"
                                />
                                <div className="">
                                    <h1 className="text-lg font-semibold">90%</h1>
                                    <span className="text-md text-gray-400">Attendance</span>
                                </div>
                        </div>
                        <div className="bg-gray-20 p-4 rounded-md flex gap-4 w-full md:w-[25%] lg:w-[45%] xl:w-[47%] 2xl:w-[48%] shadow-md"> 
                            <Image 
                                src="/singleBranch.png" 
                                alt="" 
                                width={24} 
                                height={24} 
                                className="w-12 h-12"
                                />
                                <div className="">
                                    <h1 className="text-lg font-semibold">3th</h1>
                                    <span className="text-md text-gray-400">Grade</span>
                                </div>
                        </div>
                        <div className="bg-gray-20 p-4 rounded-md flex gap-4 w-full md:w-[25%] lg:w-[45%] xl:w-[47%] 2xl:w-[48%] shadow-md"> 
                            <Image 
                                src="/singleLesson.png"
                                alt="" 
                                width={24} 
                                height={24} 
                                 className="w-12 h-12"
                                />
                                <div className="">
                                    <h1 className="text-lg font-semibold">15</h1>
                                    <span className="text-md text-gray-400">Lessons</span>
                                </div>
                        </div>
                        <div className="bg-gray-20 p-4 rounded-md flex gap-4 w-full md:w-[25%] lg:w-[45%] xl:w-[47%] 2xl:w-[48%] shadow-md"> 
                            <Image 
                                src="/singleClass.png" 
                                alt="" 
                                width={24} 
                                height={24} 
                                className="w-12 h-12"
                                />
                                <div className="">
                                    <h1 className="text-lg font-semibold">B2</h1>
                                    <span className="text-md text-gray-400">Class</span>
                                </div>
                        </div>
                     </div>
                </div>
              
                {/* FOR CHART */}
                <div className="w-full flex flex-col my-4 xl:flex-row">
                    <div className="w-full flex-1 bg-white my-2 p-4 rounded-md shadow-lg">
                        <h1 className="text-xl font-semibold">Shortcuts</h1>
                        <div className="mt-5 flex gap-4 flex-wrap lg:justify-between xl:justify-normal text-xs text-gray-500">
                            <Link className="p-3 rounded-md bg-SkyLight" href="/">Student's Lessons</Link>
                            <Link className="p-3 rounded-md bg-PurpleLight" href="/">Student's Teachers</Link>
                            <Link className="p-3 rounded-md bg-YellowLight" href="/">Student's Results</Link>
                            <Link className="p-3 rounded-md bg-pink-50" href="/">Student's Exams</Link>
                            <Link className="p-3 rounded-md bg-SkyLight" href="/">Student's Assignments</Link>
                        </div>
                    </div>
                    <div className="w-full h-[320px] my-2 xl:w-[48%] xl:ml-5 rounded-md shadow-lg">
                        <PerformanceChart/>
                    </div>
                </div>

                  {/* BOTTOM */}
                <div className=" mt-4 bg-white rounded-md p-4 h-[850px] shadow-lg">
                <h1 className="text-xl font-semibold">Student's Schedule</h1>
                    <BigCalendar/>
                </div>
                
            </div>
        </div>
    );
};

export default SingleStudentPage;