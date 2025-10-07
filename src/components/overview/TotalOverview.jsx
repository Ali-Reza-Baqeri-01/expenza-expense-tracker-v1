
import { useApp } from "../../store/AppContext"; 

import Card from "../UI/Card";

export default function TotalOverview() {

  const { getTotal } = useApp();

  const total = getTotal();

  return (
    <Card>
      <div className="total">
        <small className="total__text">
          This month’s total
        </small>

        <h2 className="total__number">
          €{total}
        </h2>
      </div>
    </Card>
  )
};
