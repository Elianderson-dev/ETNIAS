import { Link } from 'react-router-dom'
import type { ArchiveRecord } from '../types/cultural'

/*Each card receives only one register*/

interface ArchiveCardProps {
    record: ArchiveRecord
}

export function ArchiveCard({ record }: ArchiveCardProps) {
    return (
        <article>
            <p>{record.category}</p>
            <h2>{record.title}</h2>
            <p>{record.summary}</p>
            
            <Link to={`/acervo/${record.slug}`}>Ler registro</Link>
        </article>
    )
}
