
import BigCalendar from "@/components/BigCalendar";

const StudentPage = () => {
    return (
        <div className='flex flex-col p-4 gap-4'>
            {/*LEFT*/}
                <div className="w-full bg-white p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-semibold">Shedule (A4)</h1>
                </div>

                <BigCalendar/>
        </div>
    );
};

export default StudentPage;