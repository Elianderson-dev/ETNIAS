import { NavLink } from 'react-router-dom'

export function SiteHeader() {
    return (
        <header className="site-header">
            <div className="site-header_container">
                <NavLink to="/" end className="site-header_logo">
                    ETNIAS
                </NavLink>

                <nav aria-label="Navegação Principal" className="site-header_nav">
                    <NavLink
                        to="/etnias"
                        className={({ isActive }) =>
                            isActive ? 'site-header_link site-header_link--active' : 'site-header_link'
                        }
                    >
                        O ETNIAS
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