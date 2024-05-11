import bg from '../../../assets/img/hero/bg.jpg'
import hero from '../../../assets/img/hero/hero.png'
import classes from './Hero.module.css'
import { Button } from '../../Atoms'

export default function Hero() {
    return (
        <div className={classes.hero} id="about">
            <div className={classes.about}>
                <div className={classes.box}>
                    <div className={classes.title}>
                        <p>
                            Teebay <br />
                        </p>
                    </div>
                    <p>Buy, Sell and Rent online</p>

                    <div className={classes.btn}>
                        <Button title="Shop Now &#8594;" size="18px" />
                    </div>
                </div>
                <div className={classes.box}>
                    <img src={bg} className={classes.bgImg} alt="" />
                    <img src={hero} className={classes.img} alt="" />
                </div>
            </div>
        </div>
    )
}
