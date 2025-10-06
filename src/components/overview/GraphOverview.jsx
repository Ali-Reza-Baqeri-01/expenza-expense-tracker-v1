import Card from "../UI/Card";
import ChartBar from "../UI/ChartBar";

import { expenses } from "../../data.js";

export default function GraphOverview() {

  const dailyTotals = expenses.map(d =>
    d.expenses.reduce((sum, e) => sum + (e.amount || 0), 0)
  );

  const maxValue = Math.max(0, ...dailyTotals);

  return (
    <Card>
      <div className="overview__graph">
        <ul className="graph__list">
          {expenses.map(expense => (
            <li key={expense.date} className="graph__item">
              <ChartBar date={expense.date} max={maxValue} dailyTotals={dailyTotals}/>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
};
