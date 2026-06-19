import { useState } from 'react';
import IconDashboard from '../assets/icons/IconDashboard';
import IconMessage from '../assets/icons/IconMessage';
import IconTask from '../assets/icons/IconTask';
import IconSettings from '../assets/icons/IconSettings';
import IconTeams from '../assets/icons/IconTeams';
import IconFiles from '../assets/icons/IconFiles';

export default function Navigator() {
    const [activeIcon, setActiveIcon] = useState('Dashboard');
    const iconClick = (nameIcon) => {
        setActiveIcon(nameIcon);

    }
    return <div className="bg-white flex flex-col">
            <div className="h-12 flex items-center justify-center my-2">
                <span className="text-white text-lg bg-blue-400 px-1 r-2 rounded">VA</span>
            </div>

            <div className="flex-1 flex flex-col justify-between items-center py-14">
                <div className="w-full flex flex-col space-y-1 items-center">
                    <button 
                        className={
                            `${
                            activeIcon === 'Dashboard' ? 'border-blue-400 border-l-2' : ''
                            } 
                            w-full 
                            h-12 
                            bg-green 
                            flex 
                            justify-center 
                            items-center  
                            rounded
                            cursor-pointer`    
                        }
                        onClick={() => iconClick('Dashboard')}
                    >
                        <IconDashboard estActif={activeIcon === 'Dashboard'} />
                    </button>
                    <button 
                        className={ 
                                `${activeIcon === 'Message' ? 'border-blue-400 border-l-2' : ''} 
                                w-full 
                                h-12 
                                bg-green 
                                flex 
                                justify-center 
                                items-center  
                                rounded
                                cursor-pointer`
                           }
                        onClick={() => iconClick('Message')}
                    >
                        <IconMessage estActif={activeIcon === 'Message'}/>
                    </button>
                    <button 
                        className={ 
                                `${activeIcon === 'Task' ? 'border-blue-400 border-l-2' : ''} 
                                w-full 
                                h-12 
                                bg-green 
                                flex 
                                justify-center 
                                items-center  
                                rounded
                                cursor-pointer`
                           }
                        onClick={() => iconClick('Task')}
                    >
                        <IconTask estActif={activeIcon === 'Task'} />
                    </button>
                    <button 
                        className={ 
                                `${activeIcon === 'Settings' ? 'border-blue-400 border-l-2' : ''} 
                                w-full 
                                h-12 
                                flex 
                                justify-center 
                                items-center 
                                bg-white/20 
                                rounded
                                cursor-pointer`
                           }
                        onClick={() => iconClick('Settings')}
                    >
                        <IconSettings estActif={activeIcon === 'Settings'} />
                    </button>
                    <button 
                        className={ 
                                `${activeIcon === 'Teams' ? 'border-blue-400 border-l-2' : ''} 
                                w-full 
                                h-12 
                                flex 
                                justify-center 
                                items-center 
                                bg-white/20 
                                rounded
                                cursor-pointer`
                           }
                        onClick={() => iconClick('Teams')}
                    >
                        <IconTeams estActif={activeIcon === 'Teams'} />
                    </button>
                    <button 
                        className={ 
                                `${activeIcon === 'Files' ? 'border-blue-400 border-l-2' : ''} 
                                w-full 
                                h-12 
                                flex 
                                justify-center 
                                items-center 
                                bg-white/20 
                                rounded
                                cursor-pointer`
                           }
                        onClick={() => iconClick('Files')}
                    >
                        <IconFiles estActif={activeIcon === 'Files'} />
                    </button>
                </div>
            </div>*
    </div>
}