import profileUrl from '../assets/profile.png'
import PlusIcon from '../assets/icons/PlusIcon'
import SearchIcon from '../assets/icons/SearchIcon'

export default function Body() {
    return (
        <div className="flex flex-col bg-white  my-4">
            <div className="flex  p-3 justify-between w-full items-center">
                <div className="text-lg font-semibold">Marketing Plane W23</div>
                <div className="flex justify-end items-center -space-x-4 gap-2">
                    <img src={profileUrl} alt="profile" className="w-8 h-auto rounded-full" />
                    <img src={profileUrl} alt="profile" className="w-8 h-auto rounded-full" />
                    <img src={profileUrl} alt="profile" className="w-8 h-auto rounded-full" />
                    <div className="flex pl-4"><PlusIcon /></div>
                    <div className="flex pl-8"><SearchIcon /></div>
                </div>
            </div>
            <nav className="w-full ml-2 px-3">
                <ul className="flex gap-4 justify-start items-center w-full">
                    <li className="text-sm text-[#C4C4C4]">Dashboard</li>
                    <li className="text-sm text-[#000000] font-semibold border-b-3 border-[#3BA1FF] py-1 px-2">Tasks</li>
                    <li className="text-sm text-[#C4C4C4]">Timelines</li> 
                    <li className="text-sm text-[#C4C4C4]">Files</li>
                    <li className="text-sm text-[#C4C4C4]">Overview</li>
                </ul>
            </nav>
            <div className="bg-[#FAFAFA]">a</div>
         </div>
    )
}