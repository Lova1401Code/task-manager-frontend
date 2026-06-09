
import { useState } from 'react'
import profileUrl from '../assets/profile.png'
import SearchIcon from '../assets/icons/SearchIcon'
import MenuItems from '../components/MenuItems'
import PlusIcon from '../assets/icons/PlusIcon'
import Tasks from '../components/Tasks'

export default function Body() {
    const [menuActive, setMenuActive] = useState("Dashboard")

    const menuItems = [
        {
            id: 1, name: "Dashboard"
        },
        {
            id: 2, name: "Tasks"
        },
        {
            id: 3, name: "Timelines"
        },
        {
            id: 4, name: "Files"
        },
        {
            id: 5, name: "Overview"
        }
    ]

    const clickMenuHandler = (menu) => {
        setMenuActive(menu)
    }

    const renderMenu = () => {
        switch(menuActive) {
            case "Dashboard":
                return <div className="p-4">Dashboard</div>
            case "Tasks":
                return <div><Tasks /></div>
            case "Timelines":
                return <div className="p-4">Timelines</div>
            case "Files":
                return <div className="p-4">Files</div>
            case "Overview":
                return <div className="p-4">Overview</div>
            default:
                return <div className="p-4">Dashboard</div>
        }
    }

    return (
        <div className="flex flex-col bg-white">
            <div className="flex  p-3 justify-between w-full items-center">
                <div className="text-lg font-semibold">Marketing Plane W23</div>
                <div className="flex justify-end items-center -space-x-4 gap-2">
                    <img src={profileUrl} alt="profile" className="w-6 h-auto rounded-full" />
                    <img src={profileUrl} alt="profile" className="w-6 h-auto rounded-full" />
                    <img src={profileUrl} alt="profile" className="w-6 h-auto rounded-full" />
                    <div className="flex pl-4"><PlusIcon /></div>
                    <div className="flex pl-8"><SearchIcon /></div>
                </div>
            </div>
            <nav className="w-full pl-3 px-3 border-b-3 border-gray-100">
                <ul className="flex gap-4 justify-start items-center w-full -mb-px"> 
                    { menuItems.map((item) => {  
                        return ( 
                         <MenuItems key={item.id} active={menuActive === item.name} menu={item.name} clickMenuHandles={clickMenuHandler}/>)
                        }) 
                    }
               </ul>
            </nav>
            <div className="bg-[#FAFAFA]">
                { renderMenu() }
            </div>
         </div>
    )
}