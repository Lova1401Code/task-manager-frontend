import { useState } from "react";
import FolderIcon from "../assets/icons/FolderIcon";
import ChevronDownMicorIcon from "../assets/icons/ChevronDownMicorIcon";
import ChevronUpMicroIcon from "../assets/icons/ChevronUpMicroIcon";

export default function ExtensionBar() {
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);

    const menuClick1 = () => {
        setIsOpen1(!isOpen1);
    };

    const menuClick2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <div className="flex flex-col w-full my-4 bg-white items-center p-2 gap-8">
            <button className="h-8  bg-[#FAFAFA] hover:bg-gray-200 rounded w-full px-2 my-2">
                <span className="text-gray-700 font-bold mr-2">+</span>
                New Project
            </button>
            <div className="flex flex-col w-full gap-4 items-center">
                <div className="w-full">
                    <button className="text-[#9C9C9C] text-xs flex items-center p-1" onClick={menuClick1}>
                        <span className="mr-2">{isOpen1 ? <ChevronDownMicorIcon/> : <ChevronUpMicroIcon/>}</span>
                        <span>Marketing</span>
                    </button>

                    {isOpen1 && (
                        <ul className="flex flex-col gap-0 ml-2 text-gray-600">
                            <li className="text-sm flex items-center p-1 bg-[#EEF7FF] rounded">
                                <span className="text-gray-700 mr-2"><FolderIcon menu="marketing" /></span>
                                <span>Sub-item 1</span>
                            </li>
                            <li className="text-sm flex items-center p-1">
                                <span className="text-gray-700 mr-2"><FolderIcon menu="marketing" /></span>
                                <span>Sub-item 1</span>
                            </li>
                            <li className="text-sm flex items-center p-1">
                                <span className="text-gray-700 mr-2"><FolderIcon menu="marketing" /></span>
                                <span>Sub-item 1</span>
                            </li>
                        </ul>
                    )}

                </div>
                <div className="w-full">
                    <button className="text-[#9C9C9C] text-xs flex items-center" onClick={menuClick2}>
                        <span className=" mr-3">{isOpen2 ? <ChevronDownMicorIcon/> : <ChevronUpMicroIcon/>}</span>
                        <span>Products</span>
                    </button>

                    {isOpen2 && (
                        <ul className="flex flex-col gap-0 ml-2 text-gray-600">
                            <li className="text-sm flex items-center p-1">
                                <span className="text-gray-700 mr-2"><FolderIcon menu="products" /></span>
                                <span>Sub-item 1</span>
                            </li>
                            <li className="text-sm flex items-center p-1">
                                <span className="text-gray-700 mr-2"><FolderIcon menu="products" /></span>
                                <span>Sub-item 1</span>
                            </li>
                            <li className="text-sm flex items-center p-1">
                                <span className="text-gray-700 mr-2"><FolderIcon menu="products" /></span>
                                <span>Sub-item 1</span>
                            </li>
                        </ul>
                    )}

                </div>
            </div>
        </div>

    )
}