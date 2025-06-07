import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";

const AdminPage = () => {
    return (
        <div className='flex p-4 gap-4 flex-col md:flex-row'>
           
            {/*LEFT*/}
            <div className="w-full flex flex-col gap-8" >
                {/*USER CARDS*/}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student"/>
                    <UserCard type="teacher"/>
                    <UserCard type="parent"/>
                    <UserCard type="staff"/>
                </div>
               
                {/*MIDDLE CHARTS*/}
                <div className="flex gap-4 flex-col lg:flex-row rounded-md shadow-md">
                    {/*MIDDLE CHARTS*/}
                    <div className="w-full lg:w-1/3 h-[450px] rounded-md shadow-md">
                        <CountChart/>
                    </div>
                    {/*ATTENDANCE CHART*/}
                    <div className="w-full lg:w-2/3 h-[450px] rounded-md shadow-md">
                        <AttendanceChart/>
                    </div>
                </div>

                 {/*BOTTOM CHARTS*/}
                <div className="w-full h-[500px]">
                    <FinanceChart/>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;