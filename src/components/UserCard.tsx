import Image from "next/image";

const UserCard = ({type} : {type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-Sky even:bg-Sky p-4 flex-1 min-w-[130px] rounded-md shadow-md">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-[10px] bg-white px-2 py-1 rounded-full text-black-600">
                        2025/2026
                    </span>
                    <h1 className="text-2xl font-semibold my-4"> 1.234</h1>
                    <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
                </div>
              
                <div>
                     <Image src="/more.png" alt="" width={20} height={20}/>
                </div>
                
            </div>
        </div>
    );
};

export default UserCard; 