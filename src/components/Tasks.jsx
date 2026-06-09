
import FilterIcon from '../assets/icons/FilterIcon'
import ListIcon from '../assets/icons/LIstIcon'
import TableIcon from '../assets/icons/TableIcon'
import ViewColumnIcon from '../assets/icons/ViewColumnIcon'
import PlusIcon from '../assets/icons/PlusIcon'
import MarkIcon from '../assets/icons/MarkIcon'
import CheckIcon from '../assets/icons/CheckIcon'
import PaperClipIcon from '../assets/icons/PaperClipIcon'
import MessageIcon from '../assets/icons/MessageIcon'
import profileUrl from '../assets/profile.png'

export default function Tasks() {

    const tasks = [
        { id: 1, title: "Task 1" },
        { id: 2, title: "Task 2" }
    ]
    const status = [
        { id: 1, name: "Pending" },
        { id: 2, name: "In Progress" },
        { id: 3, name: "Completed" },
        { id: 4, name: "On Hold" }
    ]

    return (
        <>
            <div className="flex justify-between items-center p-4">
                    <div className="flex justify-start items-center">
                        <button className="flex items-center bg-[#F0F0F0] px-2 py-1 rounded-full">
                            <span className="mr-1"><ViewColumnIcon /></span>
                            <span className="text-xs">Karban</span>
                        </button>
                        <button className="flex items-center px-2 py-1 rounded-full">
                            <span className="mr-1"><TableIcon /></span>
                            <span className="text-xs">Table</span>
                        </button>
                        <button className="flex items-center px-2 py-1 rounded-full"> 
                            <span className="mr-1"><ListIcon /></span>
                            <span className="text-xs">List view</span>
                        </button>
                    </div> 
                    <div className="flex justify-end items-center">
                            <button className="flex px-2 py-1 rounded-full">
                                <span className="mr-1"><FilterIcon /></span>
                                <span className="text-xs">Filter</span>
                            </button>
                    </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                { status.map((stat) => (
                    <div className="flex flex-col gap-0.5">
                    <div className="flex justify-start items-center gap-1">
                        <span className="mr-1"><MarkIcon /></span>
                        <h2 className="text-md font-semibold">{stat.name}</h2>
                    </div>
                    <button className="flex mt-2 gap-1 items-center justify-center w-full bg-white px-2 py-1 rounded">
                        <span className="mr-1"><PlusIcon /></span>
                        <span className="text-sm">Add New</span>
                    </button>
                    {tasks.map((task) => (
                        <div className="flex flex-col">
                        <div className="flex flex-col gap-2 p-2 bg-white">
                            <div className="flex gap-2">
                                <button className="rounded-full bg-[#3BA1FF] px-2 py-1 text-white text-xs">Marketing Team</button>
                                <button className="rounded-full bg-[#08BD51] px-2 py-1 text-white text-xs">UX/UI Design</button>
                            </div>
                            <p className="text-sm">No tasks to display</p>
                        </div>
                        <ul className="flex flex-col gap-2 p-2 bg-white">
                            <li className="flex items-center gap-2">
                                <span className="mr-1"><CheckIcon /></span>
                                <span className="text-sm">Task 1</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="mr-1"><CheckIcon /></span>
                                <span className="text-sm">Task 1</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="mr-1"><CheckIcon /></span>
                                <span className="text-sm">Task 1</span>
                            </li>
                        </ul>
                        <div className="flex justify-between p-2 bg-white">
                            <div className="flex justify-start -space-x-2">
                                <img src={profileUrl} alt="profile" className="w-6 h-auto rounded-full" />
                                <img src={profileUrl} alt="profile" className="w-6 h-auto rounded-full" />
                                <img src={profileUrl} alt="profile" className="w-6 h-auto rounded-full" />   
                            </div>
                            <div className="flex justify-end gap-2">
                                <div className="flex items-center gap-1"> 
                                    <span className=""><MessageIcon /></span>
                                    <span className="text-sm text-[#C4C4C4]">1</span>
                                </div>
                                <div className="flex items-center gap-1"> 
                                    <span className=""><PaperClipIcon /></span>
                                    <span className="text-sm text-[#C4C4C4]">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </> 
    )
}