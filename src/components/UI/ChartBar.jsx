
export default function ChartBar({ date, max, dailyTotals }) {
    const day = +date.split('-')[2];

    const fillHeight = `${ (dailyTotals[day - 1] / max) * 100}%`;

    return (
        <div className="chartbar">
            <div className="bar">
                <div className="bar__fill" style={{ height: fillHeight }}>
                </div>
            </div>

            <small className="bar__number">
                {day}
            </small>
        </div>
    )
}
