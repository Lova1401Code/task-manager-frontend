import { PieChart, Pie, Cell } from "recharts"
export default function DonutChart({
    data, 
    centerText
}) {
    return (
        <div className="relative w-52 h-52">
            <PieChart width={220} height={220}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}