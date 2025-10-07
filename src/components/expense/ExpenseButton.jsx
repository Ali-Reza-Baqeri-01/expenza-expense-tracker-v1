import Button from "../UI/Button";

export default function ExpenseButton({ onToggle }) {
  return (
    <div className="add__button" onClick={onToggle}>
        <Button style="primary">
            New Expense
        </Button>
    </div>
  )
}
