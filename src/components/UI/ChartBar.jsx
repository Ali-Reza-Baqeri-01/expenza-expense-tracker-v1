
export default function ChartBar({ day, max, amount }) {

    const fillHeight = `${ ( amount / max) * 100}%`;

    return (
        <div className="chartbar">
            <div className="bar">
                <div className="bar__fill" style={{ height: fillHeight }}>
                </div>
            </div>

            <small className="bar__number">
                {+day}
            </small>
        </div>
    )
}
