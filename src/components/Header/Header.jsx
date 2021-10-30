import { Link, NavLink } from "react-router-dom"
import './header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <Link to="/">LOGO</Link>
          </div>
          <nav className="header__nav">
            <NavLink className="header__nav-link" to="/todos">Todos</NavLink>
            <NavLink className="header__nav-link" to="/posts">Posts</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
