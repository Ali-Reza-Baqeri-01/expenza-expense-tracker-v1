import { useApp } from "../../store/AppContext"; 

import Card from "../UI/Card";
import ChartBar from "../UI/ChartBar";

export default function GraphOverview() {

  const { getDailyAmount } = useApp();

  const items = getDailyAmount();

  const maxValue = Math.max(...items.map(d => d.totalExpense));

  return (
    <Card>
      <div className="overview__graph">
        <ul className="graph__list">
          {items.map( item => (
            <li key={item.day} className="graph__item">
              <ChartBar day={item.day} max={maxValue} amount={item.totalExpense}/>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
};
