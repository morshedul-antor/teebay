import C1 from '../../../assets/img/category/electronic.png'
import C2 from '../../../assets/img/category/furniture.png'
import C3 from '../../../assets/img/category/appliance.png'
import C4 from '../../../assets/img/category/sport.png'
import C5 from '../../../assets/img/category/outdoor.png'
import C6 from '../../../assets/img/category/toy.png'
import classes from './Category.module.css'

export default function Category() {
    const data = [
        { img: C1, title: 'Electronics' },
        { img: C2, title: 'Furnitures' },
        { img: C3, title: 'Home Appliances' },
        { img: C4, title: 'Sporting Goods' },
        { img: C5, title: 'Outdoor' },
        { img: C6, title: 'Toys' },
    ]

    return (
        <div className={classes.category} id="categories">
            <p>CATEGORIES</p>

            <div className={classes.wrapper}>
                {data.map((item, i) => (
                    <div key={i} className={classes.box}>
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
