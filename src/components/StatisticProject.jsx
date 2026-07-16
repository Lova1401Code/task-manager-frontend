import PencilSquare from "../assets/icons/PenciSquare";
import ArrowUp from "../assets/icons/ArrowUp";
import Check from "../assets/icons/Check";
import Clock from "../assets/icons/Clock";
import Pause from "../assets/icons/Pause";

export default function StatisticProject(){
    const dashboardDateProject = {
        stats: {
            total: {name: "total", current: 14, previous: 150, icon: <PencilSquare />}, 
            progress: {name: "progress", current: 50, previous: 60, icon: <Check />},
            completed: {name: "completed", current: 64, previous: 90, icon: <Clock />},
            onHold: {name: "onHold", current: 75, previous: 41, icon: <Pause />}
        },
        get(metric){
            return {
                stat: metric,
                current: this.stats[metric].current,
                previous: this.stats[metric].previous
            }
        }
    } 
    return(
        <div className="flex justify-between py-4">
            { Object.entries(dashboardDateProject.stats).map(([key,stat]) => (
                <div className="border-1 border-[#C4C4C4] rounded p-4 bg-white" key={key}>
                    <div className="flex flex-col gap-4">
                        <div className="text-xs font-bold">
                            {stat.name}
                        </div>
                        <div className="flex justify-between gap-12">
                            <div className="flex-col">
                                <div className="flex gap-8 items-baseline">
                                    <div className="font-bold text-lg">{stat.current}</div>
                                    <div className="flex text-green-500 items-center">
                                        <ArrowUp />
                                        <div className="text-green-500 text-xs">
                                            {stat.current - stat.previous}%
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500">
                                    vs last week
                                </div>
                            </div>
                            <div className="flex items-center justify-center rounded-full bg-blue-100 text-blue-500 h-10 w-10">
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                    
                </div>
            )) }
        </div>
    )
}