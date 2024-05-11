import classes from './Home.module.css'
import Category from './Category/Category'
import Hero from './Hero/Hero'
import Products from '../Products/Products'

export default function Home() {
    return (
        <div className={classes.home}>
            <Hero />
            <Category />
            <Products />
        </div>
    )
}
