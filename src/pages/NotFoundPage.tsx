import { Link } from 'react-router-dom'

export function NotFoundPage() {
    return (
        <section>
            <h1>Página não encontrada.</h1>
            <p>Parece que alguém comprou o jogo.</p>
            <Link to="/">Volte para a Roda.</Link>
        </section>
    )
}