export default function MenuItems({ menu, clickMenuHandles }) {
    return (
        <li 
            className="text-sm text-[#C4C4C4]"
            onClick={() => clickMenuHandles(menu)}>
            {menu}
        </li>   
    )
}