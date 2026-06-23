export default function MenuItems({ active, menu, clickMenuHandles }) {
    return (
        <li  
            className={`cursor-pointer text-sm ${active ? "text-[#000000] font-semibold border-b-3 border-[#3BA1FF] py-1 px-2" : "text-[#C4C4C4]"}`}
            onClick={() => clickMenuHandles(menu)}>
            {menu}
        </li>   
    )
}