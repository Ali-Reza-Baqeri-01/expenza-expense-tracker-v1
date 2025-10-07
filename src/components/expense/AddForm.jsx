import { useApp } from '../../store/AppContext';

import Input from '../UI/Input';
import Button from '../UI/Button';
import DropDown from '../UI/DropDown';

export default function AddForm({ onToggle }) {

    const { addExpense } = useApp();

    function handleFormSubmission(e) {
        e.preventDefault();

        const form = e.target;
        const newExpense = {
            title: form.title.value,
            category: form.category.value,
            amount: Number(form.amount.value),
            date: `2025-10-${String(form.day.value).padStart(2, "0")}`,
        };

        addExpense(newExpense);

        form.reset(); 
        onToggle();
    }

    return (
        <form onSubmit={handleFormSubmission} className="form add__form">
            <Input label="title" type="text" />
            <Input label="amount" type="number" />
            <Input label="day" type="number" min={1} max={31} />

            <DropDown label="category" />

            <div className="form__actions">
                <Button style="primary" type="submit">Add</Button>
                <Button style="danger" type="reset" onFun={onToggle}>Cancel</Button>
            </div>
        </form>
    )
}
