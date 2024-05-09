import classes from './Home.module.css'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { queries } from '../../graphql'

export default function Home() {
    const { loading, error, data } = useQuery(queries.userQueries.GET_ALL_USERS)

    if (loading) return <h1>Loading...</h1>
    if (error) {
        console.log(error)
    }

    return (
        <div className={classes.home}>
            <h1>Teebay</h1>
            {data.users && data.users.map((user, i) => <div key={i}>{user.firstName}</div>)}
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}
