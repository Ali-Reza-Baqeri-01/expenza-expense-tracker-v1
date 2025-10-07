import { useState } from 'react';
import ExpenseButton from './ExpenseButton'
import Backdrop from '../UI/backdrop';
import Modal from '../UI/Modal';
import AddForm from './AddForm';

export default function AddExpense() {

    const [isOpen, setOpen] = useState(true);

    function toggleModal() {
        setOpen( prev => !prev);
    };

    return (
        <>
            <Backdrop isOpen={isOpen} onToggle={toggleModal}/>
            <Modal isOpen={isOpen} onToggle={toggleModal}>
                <AddForm />
            </Modal>
            <ExpenseButton onToggle={toggleModal} />
        </>
    )
}
