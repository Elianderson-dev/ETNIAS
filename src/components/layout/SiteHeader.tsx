import { NavLink } from 'react-router-dom';
import etniasLogo from '../../assets/ETNIAS_logo.png';

export function SiteHeader() {
    return (
        <header className="site-header">
            <div className="site-header_container">
                <NavLink to="/" end className="site-header_logo">
                    <img 
                        src={etniasLogo}
                        alt="ETNIAS logo" 
                        aria-hidden="true"
                        className="site-header_logo-img"
                    />
                    <span className="site-header_logo-text">ETNIAS</span>
                </NavLink>

                <nav aria-label="Navegação Principal" className="site-header_nav">
                    <NavLink
                        to="/etnias"
                        className={({ isActive }) =>
                            isActive ? 'site-header_link site-header_link--active' : 'site-header_link'
                        }
                    >
                        <span>O ETNIAS</span>
                    </NavLink>

                    <NavLink
                        to="/personalidades"
                        className={({ isActive }) =>
                            isActive ? 'site-header_link site-header_link--active' : 'site-header_link'
                        }
                    >
                        Personalidades
                    </NavLink>

                    <NavLink
                        to="/acervo"
                        className={({ isActive }) =>
                            isActive ? 'site-header_link site-header_link--active' : 'site-header_link'
                        }
                    >
                        Acervo Cultural
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}