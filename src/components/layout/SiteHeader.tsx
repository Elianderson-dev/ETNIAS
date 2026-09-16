import { NavLink } from 'react-router-dom'

export function SiteHeader() {
    return (
        <header>
            <nav aria-label="Main Navigation">
                <NavLink to="/" end> {/*Changes only the necessary component instead of the whole page.*/} 
                    ETNIAS
                </NavLink>

                <NavLink to="/etnias">
                    O ETNIAS
                </NavLink>

                <NavLink to="/personalidades">
                    Personalidades
                </NavLink>

                <NavLink to="/acervo">Acervo Cultural</NavLink>
            </nav>
        </header>
    )
}