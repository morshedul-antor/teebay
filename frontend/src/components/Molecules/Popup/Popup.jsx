import classes from './Popup.module.css'

export default function Popup({ children, setClose, text = false, width = '' }) {
    return (
        <div className={classes.popup}>
            <div className={classes.overlay} onClick={() => setClose(false)}></div>
            <div className={classes.container} style={{ width: width ? width : '24em' }}>
                {text && <p>Are you sure! you want to {text} this product?</p>}
                {width ? (
                    <>
                        <br /> {children}
                    </>
                ) : (
                    <div>{children}</div>
                )}
            </div>
        </div>
    )
}
