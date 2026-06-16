import menuList from '../utils/menuList'
import MenuItems from '../components/MenuItems'

export default function MenuBody({ menuActive, clickMenuHandler }){
    return (
        <ul className="flex gap-4 justify-start items-center w-full -mb-px"> 
            { menuList.map((item) => {  
                return ( 
                    <MenuItems 
                        key={item.id}
                        id={item.id}
                        active={menuActive === item.name}
                        menu={item.name} 
                        clickMenuHandles={clickMenuHandler}/>
                    )
                }) 
            }
        </ul>
    )
}