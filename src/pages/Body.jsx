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
            <nav className="w-full pl-3 px-3 border-b-3 border-gray-100">
                <ul className="flex gap-4 justify-start items-center w-full -mb-px">
                    <li className="text-sm text-[#C4C4C4]">Dashboard</li>
                    <li className="text-sm text-[#000000] font-semibold border-b-3 border-[#3BA1FF] py-1 px-2">Tasks</li>
                    <li className="text-sm text-[#C4C4C4]">Timelines</li> 
                    <li className="text-sm text-[#C4C4C4]">Files</li>
                    <li className="text-sm text-[#C4C4C4]">Overview</li>
                </ul>
            </nav>
            <div className="bg-[#FAFAFA]">
                <div className="flex justify-between items-center p-4">
                    <div className="flex justify-start items-center">
                        <button className="text-xs bg-[#F0F0F0] px-2 py-1 rounded-full">Karban</button>
                        <button className="text-xs px-2 py-1 rounded-full">Table</button>
                        <button className="text-xs px-2 py-1 rounded-full">List view</button>
                    </div> 
                    <div className="flex justify-end items-center"><button className="text-xs px-2 py-1 rounded-full">List view</button></div>
                </div>
            </div>
         </div>
    )
}