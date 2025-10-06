import GraphOverview from "./GraphOverview";
import TotalOverview from "./TotalOverview";

export default function Overview() {
    return (
        <section className="section overview">
            <div className="container overview__container">
                <TotalOverview />
                <GraphOverview />
            </div>
        </section>
    )
};
