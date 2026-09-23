import { Link } from 'react-router-dom'

export function NotFoundPage() {
    return (
        <section className="page">
            <header className="page-hero">
                <h1>Página não encontrada.</h1>
                <p className="page-hero_description">Parece que alguém comprou o jogo.</p>
            </header>
            <Link to="/">&larr; Voltar para a Roda Principal</Link>
        </section>
    )
}