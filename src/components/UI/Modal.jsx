import { createPortal } from 'react-dom';

const portalRootEl = document.getElementById('portal-root');

export default function Modal({ isOpen, children }) {

    const classes = `modal ${isOpen && 'modal-open'}`;

    return (
        <>
            {createPortal(
                <div className={classes}>
                    { children }
                </div>,
                portalRootEl
            )}
        </>
    )
}
