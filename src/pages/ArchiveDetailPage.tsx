import { Link, useParams } from 'react-router-dom'
import { archiveRecords } from '../data/archiveRecords'

export function ArchiveDetailPage() {
    const { slug } = useParams<{ slug: string }>()
    const record = archiveRecords.find((entry) => entry.slug === slug)

    if (!record) {
        return (
            <section className="page">
                <header className="page-hero">
                    <h1>Registro não Encontrado.</h1>
                    <p className="page-hero_description">Este item não existe ou ainda não foi publicado no acervo.</p>
                </header>
                <Link to="/acervo">&larr; Voltar ao Acervo Cultural</Link>
            </section>
        )
    }

    return (
        <article className="page">
            <header className="page-hero">
                <span className="archive-card_category">{record.category}</span>
                <h1>{record.title}</h1>
                <p className="page-hero_description">{record.summary}</p>                
            </header>

            <div className="archive-detail_content">
                <p>{record.content}</p>
            </div>

            {record.sources.length > 0 && (
                <section aria-labelledby="sources-title" className="archive-detail_sources">
                    <h2 id="sources-title">Fontes e Referências</h2>
                    <ul>
                        {record.sources.map((source) => (
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
                </section>
            )}

            <div style={{ marginTop: 'var(--space-8)' }}>
                <Link to="/acervo">&larr; Voltar ao Acervo Cultural</Link>
            </div>
        </article>
    )
}