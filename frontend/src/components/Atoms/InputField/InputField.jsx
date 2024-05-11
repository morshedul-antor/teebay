import classes from './InputField.module.css'

export default function InputField({ children, label }) {
    return (
        <div className={classes.field}>
            <label>{label}</label>
            {children}
        </div>
    )
}
