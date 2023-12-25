import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'

function Header() {
  return (
    <header className="header">
        <div className="contenedor barra">
            <div className="logo">
                <img className="logo" src={logo} alt="Imagen Logo" />
            </div>
            <nav className="navegacion">
                <Link to="/"
                >Inicio</Link>
                <Link to="/nosotros"
                >Nosotros</Link>
                <Link to="/tienda"
                >Tienda</Link>
                <Link to="/blog"
                >Blog</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header