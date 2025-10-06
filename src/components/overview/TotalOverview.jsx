import Card from "../UI/Card";

import { expenses } from "../../data";

export default function TotalOverview() {

  const total = '€' + expenses.reduce(
    (total, day) => total + day.expenses.reduce((s, e) => s + e.amount, 0),
    0
  ).toFixed(2);

  return (
    <Card>
      <div className="total">
        <small className="total__text">
          This month’s total
        </small>

        <h2 className="total__number">
          {total}
        </h2>
      </div>
    </Card>
  )
};
