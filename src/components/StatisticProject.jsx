import PencilSquare from "../assets/icons/PenciSquare";
import ArrowUp from "../assets/icons/ArrowUp";

export default function StatisticProject(){
    const dashboardDateProject = {
        stats: {
            total: {name: "total", current: 14, previous: 150}, 
            progress: {name: "progress", current: 50, previous: 60},
            completed: {name: "completed", current: 64, previous: 90},
            onHold: {name: "onHold", current: 75, previous: 41}
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
                                <PencilSquare />
                            </div>
                        </div>
                    </div>
                    
                </div>
            )) }
        </div>
    )
}