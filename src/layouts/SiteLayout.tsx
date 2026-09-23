import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../components/layout/SiteHeader'

export function SiteLayout() {
    return (
        <div className="site-layout">
            <SiteHeader />

            <main className="site-layout_main">
                <Outlet />
            </main>   

            <footer className="site-footer">
                <p>ETNIAS Capoeira — Memória, Movimento e Ancestralidade.</p>
            </footer>
        </div>
    )
}