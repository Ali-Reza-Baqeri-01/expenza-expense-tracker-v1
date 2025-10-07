
export default function Button({ children, style, type }) {
    const classes = `button button__${style}`;
    return (
        <button className={classes} type={type || 'button'}>
            {children}
        </button>
    )
}
