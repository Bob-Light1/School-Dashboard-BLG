import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, assignmentsData } from "@/lib/data";
import FormModal from "@/components/FormModal";


type Assignment = {
    id:number;
    subject:string;
    class:number;
    teacher:number;
    dueDate:string;
};


const columns = [
    {
        header:"Subject Name",
        accessor:"name",
    },
    {
        header:"Class",
        accessor:"class",
    },
    {
        header:"Teacher",
        accessor:"teacher",
        className:"hidden md:table-cell"
    },
    {
        header:"DueDate",
        accessor:"dueDate",
        className:"hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"action",
        className:"hidden md:table-cell"
    },
]


const AssignmentListPage = () => {

        const renderRow = (item:Assignment) =>(
            <tr key={item.id} className="border-b border-gray-200 even:slate-50 text-sm hover:bg-PurpleLight">
                <td className="flex items-center gap-4 p-4"> {item.subject} </td>
                <td className="hidden md:table-cell">{item.class} </td>
                <td className="hidden md:table-cell">{item.teacher} </td>
                <td className="hidden md:table-cell">{item.dueDate} </td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link href={`/list/assignments/${item.id}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-Purple">
                                <Image src="/view1.png" alt="" width={16} height={16}/>
                            </button>
                        </Link>
                        {role === "admin" && (
                            <>
                                 {/* We create buttons and images, by using "FormModal" that we created,*/}
                                <FormModal table="assignment" type="update"data={item}/>
                                <FormModal table="assignment" type="delete" id={item.id}/>
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
                    <h1 className="hidden md:block text-lg font-semibold w-1/3 p-2">ALL ASSIGNMENTS</h1>
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
                                <FormModal table="assignment" type="create"/>
                            )}
                        </div>
                    </div>
                </div>

                {/*LIST*/}
                <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>

                {/*PAGINATION*/}
                <Pagination />
                        
            </div>
        );
};

export default AssignmentListPage;