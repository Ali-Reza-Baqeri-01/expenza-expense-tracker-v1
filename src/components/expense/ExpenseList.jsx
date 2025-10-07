import { useState } from "react";
import { useApp } from "../../store/AppContext";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";


export default function ExpenseList() {

    const [showAll, setShowAll] = useState(false);

    const { getItemsByDate } = useApp();

    const items = showAll ? getItemsByDate() : getItemsByDate().slice(-3);

    const dailyTotals = {};

    items.forEach( item => {
        dailyTotals[item.date] = item.items.reduce((sum, e) => sum + (e.amount || 0), 0);
    });

    // const dailyTotals = items.map(d =>
    //     d.items.reduce((sum, e) => sum + (e.amount || 0), 0)
    // );

    return (
        <Card>
            <ol className="expense__list">
                {items.toReversed().map(item => (
                    <li key={item.date} className="expense__group">
                        <div className="expense__summary">
                            <h3 className="expense__date">{item.date}</h3>
                            <p className="expense__daily">€{dailyTotals[item.date]}</p>
                        </div>
                        <ul className="expense__expenses">
                            {item.items.map(i => (
                                <ExpenseItem key={i.title} expense={i} />
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>

            <p className="expense__more" onClick={() => setShowAll(!showAll)}>
                See { showAll ? 'Less': 'More'}
            </p>
        </Card>
    )
};
