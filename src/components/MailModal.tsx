import { CircleX, Mail, User } from "lucide-react"

const MailModal = ({ val }: { val: (state: boolean) => void }) => {
  return (
    <div className=" w-full h-full p-20 text-[#F3F3F3] ">
      <div className=" p-10 w-full h-full">
      <div className="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 drop-shadow-[0_0_6px_rgba(203,203,203,0.5)] hover:drop-shadow-[0_0_6px_rgba(203,203,203,1)]  border rounded-2xl w-2/3 h-2/3 bg-[#1E1E1E] text-[#F3F3F3] border-[#2E2E2E]">
      <div className="pb-8 flex justify-end drop-shadow-[0_0_6px_rgba(203,161,53,1)] hover:drop-shadow-[0_0_6px_rgba(203,203,203,1)] "><CircleX onClick={() => val(false)} size={24} strokeWidth={2} className="hover:drop-shadow-[0_0_6px_rgba(203,161,53,0.5)] hover:scale-105" /></div>
      <form action="" className="flex flex-col gap-y-8 px-4  ">
            <div className="flex p-2 gap-2"><User size={28} strokeWidth={2.5} className="drop-shadow-[0_0_6px_rgba(203,161,53,1)]" /><input type="text" className="border rounded w-full"/></div>
            <div className="flex p-2 gap-2"><Mail size={28} strokeWidth={2.5} className="drop-shadow-[0_0_6px_rgba(203,161,53,1)]" /><input type="text" className="border rounded w-full"/></div>
            <div className="flex pl-10 pr-2"><div className="border rounded p-2 w-full"><textarea className="text-wrap w-full"></textarea></div></div>
            <div className="flex items-center justify-center"><button className="border rounded p-2 bg-[#CBA135] drop-shadow-[0_0_4px_rgba(203,161,53,1)] hover:drop-shadow-[0_0_8px_rgba(203,161,53,1)] hover:scale-110 transition-all duration-300 text-[#121212] ">send message</button></div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default MailModal