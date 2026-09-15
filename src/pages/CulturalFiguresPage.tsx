import { FigureCard } from '../components/FigureCard' 
import { culturalFigures } from '../data/culturalFigures'

export function CulturalFiguresPage() {
    const hasFigures = culturalFigures.length > 0

    return (
        <section className="page" aria-labelledby="figures-title">
            <header>
                <p>Memória e Ancestralidade</p>
                <h1 id="figures-title">Personalidades da Capoeira</h1>
                <p>
                    Conheça mestres e figuras históricas fundamentais para a memória da capoeira.
                </p>
            </header>

            {hasFigures ? (
                <ul>
                    {culturalFigures.map((figure) => (
                        <li key={figure.id}>
                            <FigureCard figure={figure} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p role="status">
                    Esse catálogo está em construção. Novas referências serão adicionadas com pesquisa e atribuição de fontes.
                </p>
            )}
        </section>
    )
}