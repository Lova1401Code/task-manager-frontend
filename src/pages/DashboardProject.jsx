import HandRaisedIcon from "../assets/icons/HandRaisedIcon"
import StatisticProject from "../components/StatisticProject"
import ChartCard from "../components/ChartCard"
export default function DashboardProject(){
    return (
            <div className="p-4">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        <h3 className="font-bold">Welcome back, you!</h3>
                        <HandRaisedIcon/>
                    </div>
                    <p className="text-xs text-[#9C9C9C]">Here's what's happening with your projects today.</p>
                </div>
                    <StatisticProject/>
                <div>
                <div>

                </div>
                  <ChartCard/>
                </div>
            </div>
    )
}