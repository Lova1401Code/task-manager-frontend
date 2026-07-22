import DonutChart from './DonutChart'
import Label from './Label'

export default function DonutCard({ title, data }) {
    return (
        <div>
            <p>{title}</p>
            <div className="flex">
                <div>
                    <DonutChart data={data} />
                    <p>Overal Progress</p>
                </div>
                <div>
                    <Label/>
                </div>
                <div>
                    Pourcentage of completion
                </div>
            </div>
        </div>
    )
}