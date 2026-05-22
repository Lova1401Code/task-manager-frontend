import icon from '../assets/icons/icon.png';
import message from '../assets/icons/message.png';
import navigator from '../assets/icons/navigator.png';
import setting from '../assets/icons/settings.png';
import team from '../assets/icons/team.png';
import task from '../assets/icons/task.png'; 
import dashboard from '../assets/icons/dashboard.png'

export default function Navigator() {
    return <div className="bg-white flex flex-col my-4">
            <div className="h-16 flex items-center justify-center">
                <span className="text-white text-lg bg-blue-600 p-1">LG</span>
            </div>

            <div className="flex-1 flex flex-col justify-between items-center py-4">
                <div className="flex flex-col space-y-4 items-center">
                    <div className="w-8 h-8 bg-green flex justify-center items-center  rounded">
                        <img src={icon} alt="Icon" className="w-5 h-5" />
                    </div>
                    <div className="w-8 h-8 bg-green flex justify-center items-center  rounded">
                        <img src={message} alt="Message" className="w-5 h-5" />
                    </div>
                    <div className="w-8 h-8 bg-green flex justify-center items-center  rounded">
                        <img src={dashboard} alt="Dashboard" className="w-5 h-5" />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-white/20 rounded">
                        <img src={setting} alt="Setting" className="w-5 h-5" />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-white/20 rounded">
                        <img src={team} alt="Team" className="w-5 h-5" />
                    </div>
                    <div className="w-8 h-8 flex justify-center items-center bg-white/20 rounded">
                        <img src={task} alt="Task" className="w-5 h-5" />
                    </div>
                </div>
            </div>*
    </div>
}