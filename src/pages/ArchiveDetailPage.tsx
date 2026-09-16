import { Link, useParams } from 'react-router-dom'
import { archiveRecords } from '../data/archiveRecords'

export function ArchiveDetailPage() {
    /*UseParams is used for read defined parameters on route.*/
    const { slug } = useParams<{ slug: string }>()

    /*find returns to the first compatible register (or undefined)*/
    const record = archiveRecords.find((entry) => entry.slug === slug)

    if (!record) {
        return (
            <section className="page">
                <h1>Registro não Encontrado.</h1>
                <p>Este item não existe ou ainda não foi publicado no acervo.</p>
                <Link to="/acervo">Voltar ao Acervo Cultural</Link>
            </section>
        )
    }

    return (
        <article className="page">
            <header>
                <p>{record.category}</p>
                <h1>{record.title}</h1>
                <p>{record.summary}</p>                
            </header>

            <p>{record.content}</p>

            <section aria-labelledby="sources-title">
                <h2 id="sources-title">Fontes</h2>

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

            <Link to="/acervo">Voltar ao Acervo Cultural</Link>
        </article>
    )
}