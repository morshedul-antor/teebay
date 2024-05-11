import classes from './Button.module.css'

export default function Button({ title, onClick, bgColor, size }) {
    return (
        <button
            style={{ backgroundColor: `var(--btn-${bgColor ? bgColor : 'success'})`, fontSize: size ? size : '12px' }}
            className={classes.btn}
            onClick={onClick}>
            {title}
        </button>
    )
}
