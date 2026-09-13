import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../components/layout/SiteHeader'

export function SiteLayout() {
    return (
        <>
            <SiteHeader />

            <main>
                <Outlet />
            </main>   

            <footer>
                <p>ETNIAS Capoeira — Memória, Movimento e Ancestralidade.</p>
            </footer>
        </>
    )
}
