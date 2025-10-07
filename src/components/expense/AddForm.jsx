import React from 'react'
import Input from '../UI/Input';
import Button from '../UI/Button';
import DropDown from '../UI/DropDown';

export default function AddForm() {

    function handleFormSubmission(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleFormSubmission} className="form add__form">
            <Input label="Title" type="text" />
            <Input label="Amount" type="number" />
            <Input label="Date" type="date" />

            <DropDown label="category" />

            <div className="form__actions">
                <Button style="primary" type="submit">Add</Button>
                <Button style="danger" type="reset">Cancel</Button>
            </div>
        </form>
    )
}
