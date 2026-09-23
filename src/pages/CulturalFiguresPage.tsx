import { FigureCard } from '../components/FigureCard' 
import { culturalFigures } from '../data/culturalFigures'

export function CulturalFiguresPage() {
    const hasFigures = culturalFigures.length > 0

    return (
        <section className="page" aria-labelledby="figures-title">
            <header className="page-hero">
                <p className="page-hero_subtitle">Memória e Ancestralidade</p>
                <h1 id="figures-title">Personalidades da Capoeira</h1>
                <p className="page-hero_description">
                    Conheça mestres e figuras históricas fundamentais para a memória da capoeira.
                </p>
            </header>

            {hasFigures ? (
                <ul className="cards-grid">
                    {culturalFigures.map((figure) => (
                        <li key={figure.id}>
                            <FigureCard figure={figure} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p role="status" className="empty-state">
                    Esse catálogo está em construção. Novas referências serão adicionadas com pesquisa e atribuição de fontes.
                </p>
            )}
        </section>
    )
}