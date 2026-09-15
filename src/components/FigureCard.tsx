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
        <article>
            <p>{roleLabels[figure.role]}</p>
            <h2>{figure.name}</h2>

            {figure.knownAs && <p>Conhecido(a) como: {figure.knownAs}</p>}

            <p>{figure.period}</p>
            <p>{figure.summary}</p>
            
            <h3>Contribuições</h3>
            <ul>
                {figure.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                ))}
            </ul>
        </article>
    )
}