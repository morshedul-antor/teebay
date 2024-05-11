import classes from './Card.module.css'

export default function Card({ children, width, display }) {
    return (
        <div className={classes.card}>
            <div style={{ width: width }}>{children}</div>
        </div>
    )
}
