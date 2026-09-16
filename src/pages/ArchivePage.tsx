import { ArchiveCard } from '../components/ArchiveCard'
import { archiveRecords} from '../data/archiveRecords'

export function ArchivePage() {
    const hadRecords = archiveRecords.length > 0

    return (
        <section className="page" aria-labelledby="archive-title">
            <header>
                <p>Memória Compartilhada</p>
                <h1 id="archive-title">Acervo Cultural</h1>
                <p>Registros de história, ensinamentos, eventos, viagens e vivências preservadps com fonte e contexto.</p>
            </header>

            {hadRecords ? (
                <ul>
                    {archiveRecords.map((record) => (
                        <li key={record.id}>
                            <ArchiveCard record={record} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p role="status">O acervo ainda não possui registros publicados.</p>

            )}
        </section>
    )
}