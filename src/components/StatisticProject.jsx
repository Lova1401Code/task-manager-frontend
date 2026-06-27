export default function StatisticProject(){
    const dashboardDateProject = {
        stats: {
            total: {current: 14, previous: 150}, 
            progress: {current: 50, previous: 60},
            completed: {current: 64, previous: 90}
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
            <p>Statistics here</p>
        </div>
    )
}