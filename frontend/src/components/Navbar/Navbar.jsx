import { Link, useLocation, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useContext } from 'react'
import { Auth, User } from '../../contexts/context'

export default function Navbar() {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(User)

    const location = useLocation()
    const navigate = useNavigate()

    const logout = () => {
        dispatchAuth({ type: 'remove' })
        dispatchUser({ type: 'remove' })
        navigate('/')
    }

    return (
        <div className={classes.nav}>
            <div className={classes.topNavbar}>
                <Link to="/" className={classes.logo}>
                    <span>Teebay</span>
                </Link>

                {stateAuth.auth ? (
                    <div className={classes.navList}>
                        <Link to="/" style={{ visibility: 'hidden' }}>
                            Home
                        </Link>
                        <Link to="/dashboard" className={location.pathname === '/dashboard' ? classes.active : ''}>
                            Dashboard
                        </Link>
                        <Link to="/my-products" className={location.pathname === '/my-products' ? classes.active : ''}>
                            My Products
                        </Link>

                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div className={classes.navList}>
                        <Link to="/">Home</Link>
                        <a href="/#categories">Categories</a>
                        <a href="/#products">Products</a>

                        <Link to="/login">Sign in</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
