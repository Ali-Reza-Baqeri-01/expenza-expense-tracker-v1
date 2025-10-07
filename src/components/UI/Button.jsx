
export default function Button({ children, style, type, onFun }) {
    const classes = `button button__${style}`;
    return (
        <button className={classes} type={type || 'button'} onClick={onFun}>
            {children}
        </button>
    )
}
