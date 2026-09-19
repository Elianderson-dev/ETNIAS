import type {
    CulturalFigure,
    CulturalFigureRole,
} from '../types/cultural'

/*Adds labels to roles*/
const roleLabels: Record<CulturalFigureRole, string> = {
    mestre: 'Mestre',
    mestra: 'Mestra',
    capoeirista: 'Capoeirista',
    'figura-historica': 'Figura Histórica',
}

interface FigureCardProps {
    figure: CulturalFigure
}

export function FigureCard({ figure }: FigureCardProps) {
    return (
        <article className="figure-card">
            <header className="figure-card__header">
                <span className="figure-card__role">{roleLabels[figure.role]}</span>
                <h2 className="figure-card__title">{figure.name}</h2>
                {figure.knownAs && (
                    <p className="figure-card__known-as">
                        Conhecido(a) como: <strong>{figure.knownAs}</strong>
                    </p>
                )}
                <p className="figure-card__period">{figure.period}</p>
            </header>

            <p className="figure-card__summary">{figure.summary}</p>
            
            {figure.contributions.length > 0 && (
                <div className="figure-card__section">
                    <h3>Contribuições</h3>
                    <ul>
                        {figure.contributions.map((contribution) => (
                            <li key={contribution}>{contribution}</li>
                        ))}
                    </ul>
                </div>
            )}

            {figure.sources.length > 0 && (
                <footer className="figure-card_footer">
                    <h4>Fontes e Referências</h4>
                    <ul>
                        {figure.sources.map((source) => (
                            <li key={source.citation}>
                                {source.url ? (
                                     <a href={source.url} target="_blank" rel="noreferrer">
                                         {source.citation}
                                     </a>
                                 ) : (
                                     source.citation
                                 )}
                            </li>
                        ))}
                    </ul>
                </footer>
            )}
        </article>
    )
}
