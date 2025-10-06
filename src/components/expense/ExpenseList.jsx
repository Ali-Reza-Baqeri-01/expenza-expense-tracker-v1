import Card from "../UI/Card";

import { expenses } from "../../data.js";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
    const dailyTotals = expenses.map(d =>
        d.expenses.reduce((sum, e) => sum + (e.amount || 0), 0)
    );

    return (
        <Card>
            <ol className="expense__list">
                {expenses.toReversed().map(expense => (
                    <li key={expense.date} className="expense__group">
                        <div className="expense__summary">
                            <h3 className="expense__date">{expense.date}</h3>
                            <p className="expense__daily">€{ dailyTotals[+expense.date.split('-')[2] - 1] }</p>
                        </div>
                        <ul className="expense__expenses">
                            {expense.expenses.map(e => (
                                <ExpenseItem key={e.title} expense={e} />
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </Card>
    )
};
