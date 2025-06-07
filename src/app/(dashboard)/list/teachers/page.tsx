import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, teachersData} from "@/lib/data";
import FormModal from "@/components/FormModal";


type Teacher = {
    id:number;
    teacherId:string;
    name:string;
    email?:string;
    photo:string;
    phone:string;
    subjects:string[];
    classes:string[];
    address:string;
}


const columns = [
    {
        header:"Info",
        accessor:"info",
    },
    {
        header:"Teacher ID",
        accessor:"teacherId",
        className:"hidden md:table-cell"
    },
    {
        header:"Subjects",
        accessor:"subjects",
        className:"hidden md:table-cell"
    },
    {
        header:"classes",
        accessor:"classes",
        className:"hidden md:table-cell"
    },
    {
        header:"Phone",
        accessor:"phone",
        className:"hidden md:table-cell"
    },
    {
        header:"Address",
        accessor:"address",
        className:"hidden xl:table-cell"
    },
    {
        header:"Actions",
        accessor:"action",
        className:"hidden md:table-cell"
    },
]


const TeacherListPage = () => {

        const renderRow = (item:Teacher) =>(
            <tr key={item.id} className="border-b border-gray-200 even:slate-50 text-sm hover:bg-PurpleLight">
                <td className="flex items-center gap-4 p-4">
                    <Image 
                        src={item.photo}
                        alt=""
                        width={40}
                        height={40}
                        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
                        />

                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item?.email}</p>
                    </div>
                </td>
                <td className="hidden md:table-cell">{item.teacherId}</td>
                <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
                <td className="hidden md:table-cell">{item.classes.join(",")}</td>
                <td className="hidden md:table-cell">{item.phone}</td>
                <td className="hidden xl:table-cell">{item.address}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link href={`/list/teachers/${item.id}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Purple">
                                <Image src="/view1.png" alt="" width={16} height={16}/>
                            </button>
                        </Link>
                        {role === "admin" && (
                            <>
                           {/* We create buttons and images, by using "FormModal" that we created,
                                instead of using :
                                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-red-200">
                                     <Image src="/delete.png" alt="" width={16} height={16}/>
                                </button>*/}

                                <FormModal table="teacher" type="update"data={item}/>
                                <FormModal table="teacher" type="delete" id={item.id}/>
                            </>
                        )}
                    </div>
                </td>
            </tr>
        );

    return (
            <div className='p-4 rounded-md flex-1 shadow-md'>
                {/*TOP*/}
                <div className="flex items-center justify-between">
                    <h1 className="hidden md:block text-lg font-semibold w-1/3 p-2">ALL TEACHERS</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto p-2">
                        <TableSearch/>
                        <div className="flex items-center gap-4 self-end">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
                                <Image src="/filter.png" alt="" width={14} height={14}/>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
                                <Image src="/sort.png" alt="" width={14} height={14}/>
                            </button>
                            {role ==="admin" && (
                                //<button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
                                //  <Image src="/plus.png" alt="" width={14} height={14}/>
                                //</button>
                                <FormModal table="teacher" type="create"/>
                            )}
                        </div>
                    </div>
                </div>

                {/*LIST*/}
                <Table columns={columns} renderRow={renderRow} data={teachersData}/>

                {/*PAGINATION*/}
                <Pagination />
                        
            </div>
        );
};

export default TeacherListPage;