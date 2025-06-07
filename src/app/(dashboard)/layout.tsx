import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        {/*LEFT*/}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] shadow-md p-4">
          <Link href="/" className="flex items-center justify-center lg:justify-start">
            <Image src="/logo1.png" alt="logo1" width={70} height={70} style={{ marginTop: "-1rem" }}/>
          </Link>

          <Menu/>
        </div>
        
        {/*RIGHT*/}
        <div className="flex flex-col h-screen w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]">
          {/* Fixed Navbar*/}
          <div className="pt-16">
            <Navbar />
          </div>

          {/* scroll Content */}
          <div className="flex-1 flex flex-col xl:flex-row flex-grow overflow-y-auto px-4 gap-4">

              {/* LEFT content */}
              <div className="w-full xl:w-2/3">
                {children}
              </div>

              {/* RIGHT sticky div */}
              <div className="w-full top-4 sticky bg-Sky p-4 my-4 rounded-md shadow-md xl:w-1/3 xl:h-[90vh]  ">
                <div className='h-[30vh]'>  Ask your AI Agent...</div>
              </div>
              
          </div>
       </div>

      </div>
  );
}