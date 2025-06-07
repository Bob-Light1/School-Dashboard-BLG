import BigCalendar from "@/components/BigCalendar";

const ParentPage = () => {
    return (
        <div className='flex flex-col p-4 gap-4'>
            {/*LEFT*/}
                <div className="w-full bg-white p-4 rounded-md shadow-md">
                    <h1 className="text-xl font-semibold">Shedule (John Doe)</h1>
                </div>
                <BigCalendar/>
        </div>
    );
};

export default ParentPage;