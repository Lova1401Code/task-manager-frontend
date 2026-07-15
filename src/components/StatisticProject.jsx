

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
                <div className="border-1 border-[#9C9C9C] rounded p-2 bg-white" key={key}>
                    <div className="flex-col">
                        <div className="text-xs font-bold">
                            {stat.name}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex-col">
                                <div className="flex justify-between">
                                    <div>{stat.current}</div>
                                    <div>{stat.previous}</div>
                                </div>
                                <div>vs last week</div>
                            </div>
                            <div>icon here</div>
                        </div>
                    </div>
                    
                </div>
            )) }
        </div>
    )
}