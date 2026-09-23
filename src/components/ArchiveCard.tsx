import { Link } from 'react-router-dom'
import type { ArchiveRecord } from '../types/cultural'

interface ArchiveCardProps {
    record: ArchiveRecord
}

export function ArchiveCard({ record }: ArchiveCardProps) {
    return (
        <article className="archive-card">
            <header className="archive-card_header">
                <span className="archive-card_category">{record.category}</span>
                <h2 className="archive-card_title">{record.title}</h2>
            </header>
            <p className="archive-card_summary">{record.summary}</p>
            
            <footer className="archive-card_footer">
                <Link to={'/acervo/' + record.slug} className="archive-card_link">
                    Ler registro &rarr;
                </Link>
            </footer>
        </article>
    )
}