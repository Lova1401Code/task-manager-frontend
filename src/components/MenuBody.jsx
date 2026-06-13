import MenuItems from "./utils/menuItems.js"

export default function MenuBody(){
    return (
        <ul className="flex gap-4 justify-start items-center w-full -mb-px"> 
            { menuItems.map((item) => {  
                return ( 
                    <MenuItems key={item.id} active={menuActive === item.name} menu={item.name} clickMenuHandles={clickMenuHandler}/>)
                }) 
            }
        </ul>
    )
}