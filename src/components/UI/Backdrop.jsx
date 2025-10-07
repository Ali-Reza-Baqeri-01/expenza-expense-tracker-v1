import { createPortal } from 'react-dom';

const portalRootEl = document.getElementById('portal-root');

export default function Backdrop({ isOpen, onToggle }) {

    const classes = `backdrop ${isOpen && 'open'}`;

    return (
        <>
            {createPortal(
                <div className={classes} onClick={onToggle}></div>,
                portalRootEl
            )}
        </>
    )
}
