export default function StatisticProject(){
    const dashboardDateProject = {
        stats: {
            total: {current: 14, previous: 150}, 
            progress: {current: 50, previous: 60},
            completed: {current: 64, previous: 90},
            onHold: {current: 75, previous: 41}
        },
        get(metric){
            return {
                current: this.stats[metric].current,
                previous: this.stats[metric].previous
            }
        }
    } 
    return(
        <div className="flex justify-between py-4">
            { Object.entries(dashboardDateProject.stats).map(([key,stat]) => (
                <div className="border-1 border-[#9C9C9C] rounded p-4 bg-white" key={key}>statistic here {stat.current}</div>
            )) }
        </div>
    )
}