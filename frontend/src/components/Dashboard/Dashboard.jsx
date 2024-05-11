import { useState } from 'react'
import classes from './Dashboard.module.css'
import Tab from './Tab/Tab'

export default function Dashboard() {
    const tabs = ['bought', 'sold', 'borrowed', 'lent']
    const [tab, setTab] = useState(1)

    return (
        <div className={classes.dash}>
            <div className={classes.tab}>
                {tabs.map((text, index) => (
                    <p
                        key={index}
                        className={tab === index + 1 ? classes.active : ''}
                        onClick={() => setTab(index + 1)}>
                        {text}
                    </p>
                ))}
            </div>

            {tab === 1 && <Tab type="bought" />}
            {tab === 2 && <Tab type="sold" />}
            {tab === 3 && <Tab type="borrowed" />}
            {tab === 4 && <Tab type="lent" />}
        </div>
    )
}
