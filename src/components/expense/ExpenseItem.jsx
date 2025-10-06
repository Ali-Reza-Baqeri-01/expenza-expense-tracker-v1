import { categoriesIcon } from "../../data";

export default function ExpenseItem({ expense }) {
  const { title, category, amount } = expense;

  return (
    <li className="expense__item">
      <div className="expense__titles">
        <i className={`expense__category ${categoriesIcon[category]}`}></i>

        <h4 className="expense__title">{title}</h4>
      </div>

      <p className="expense__amount">€{amount}</p>

    </li>
  )
};
