import IconDashboard from '../assets/IconDashboard';
import IconMessage from '../assets/IconMessage';
import IconTask from '../assets/IconTask';
import navigator from '../assets/icons/navigator.png';
import setting from '../assets/icons/settings.png';
import team from '../assets/icons/team.png';
import task from '../assets/icons/task.png'; 
import IconSettings from '../assets/IconSettings';
import IconTeams from '../assets/IconTeams';
import IconFiles from '../assets/IconFiles';

export default function Navigator() {
    return <div className="bg-white flex flex-col my-4">
            <div className="h-12 flex items-center justify-center">
                <span className="text-white text-lg bg-blue-400 px-1 rounded">LG</span>
            </div>

            <div className="flex-1 flex flex-col justify-between items-center py-14">
                <div className="w-full flex flex-col space-y-1 items-center">
                    <div className="w-full h-12 bg-green flex justify-center items-center  rounded">
                        <IconDashboard />
                    </div>
                    <div className="w-full h-12 bg-green flex justify-center items-center  rounded">
                        <IconMessage />
                    </div>
                    <div className="border-blue-400 border-l-2 w-full h-12 bg-green flex justify-center items-center  rounded">
                        <IconTask />
                    </div>
                    <div className="w-full h-12 flex justify-center items-center bg-white/20 rounded">
                        <IconSettings />
                    </div>
                    <div className="w-full h-12 flex justify-center items-center bg-white/20 rounded">
                        <IconTeams />
                    </div>
                    <div className="w-full h-12 flex justify-center items-center bg-white/20 rounded">
                        <IconFiles />
                    </div>
                </div>
            </div>*
    </div>
}