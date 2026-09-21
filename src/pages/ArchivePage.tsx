import { ArchiveCard } from '../components/ArchiveCard'
import { archiveRecords } from '../data/archiveRecords'

export function ArchivePage() {
    const hasRecords = archiveRecords.length > 0

    return (
        <section className="page" aria-labelledby="archive-title">
            <header className="archive-hero">
                <p>Memória Compartilhada</p>
                <h1 id="archive-title">Acervo Cultural</h1>
                <p>
                    Registros de história, ensinamentos, eventos, viagens e vivências preservados com fonte e contexto.
                </p>
            </header>

            <section className="archive-list-section" aria-labelledby="records-list-title">
                <h2 id="records-list-title">Registros Publicados</h2>
                {hasRecords ? (
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

            <section className="story-submission-section" aria-labelledby="submission-title">
                <header>
                    <h2 id="submission-title">Contribua com o Acervo: Envie um Relato ou História</h2>
                    <p>
                        Compartilhe memórias, vivências, ensinamentos de mestres e registros de rodas com a comunidade.
                    </p>
                </header>

                <form className="story-form" onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>Informações Principais do Relato</legend>

                        <div className="form-group">
                            <label htmlFor="story-title">Título do Relato / História</label>
                            <input
                                type="text"
                                id="story-title"
                                name="title"
                                required
                                placeholder="Ex: A Roda Histórica do Pelourinho de 1982"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="story-category">Categoria do Registro</label>
                            <select id="story-category" name="category" required>
                                <option value="">Selecione uma categoria...</option>
                                <option value="historia">História</option>
                                <option value="ensinamento">Ensinamento</option>
                                <option value="evento">Evento</option>
                                <option value="vivencia">Vivência</option>
                                <option value="viagem">Viagem</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="story-summary">Resumo Curto</label>
                            <input
                                type="text"
                                id="story-summary"
                                name="summary"
                                required
                                placeholder="Uma breve sinopse do relato"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="story-content">Relato Completo / Detalhes</label>
                            <textarea
                                id="story-content"
                                name="content"
                                rows={6}
                                required
                                placeholder="Descreva a história ou relato com todos os detalhes transmitidos..."
                            ></textarea>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Contexto: Local, Fonte e Data</legend>

                        <div className="form-group">
                            <label htmlFor="story-location">Local Obtido / Ocorrido (Cidade, Estado ou Localidade)</label>
                            <input
                                type="text"
                                id="story-location"
                                name="location"
                                placeholder="Ex: Salvador, BA ou Recife, PE"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="story-narrator-role">Tipo de Fonte / Transmissor</label>
                            <select id="story-narrator-role" name="narratorRole">
                                <option value="mestre">Mestre / Mestra de Capoeira</option>
                                <option value="capoeirista">Outro(a) Capoeirista / Treinel / Contra-Mestre</option>
                                <option value="pesquisador">Pesquisador(a) / Historiador(a)</option>
                                <option value="vivencia-propria">Relato de Vivência Própria</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="story-narrator">Nome da Fonte / Narrador(a)</label>
                            <input
                                type="text"
                                id="story-narrator"
                                name="narrator"
                                placeholder="Ex: Mestre João Grande ou Capoeirista Ananias"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="story-date">Data do Ocorrido ou da Gravação</label>
                            <input type="date" id="story-date" name="eventDate" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="story-recorded-by">Registrado por (Seu Nome / Autor do Registro)</label>
                            <input
                                type="text"
                                id="story-recorded-by"
                                name="recordedBy"
                                placeholder="Seu nome completo ou instituição"
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Atribuição de Fontes e Citações</legend>

                        <div className="form-group">
                            <label htmlFor="story-citation">Citação / Referência da Fonte</label>
                            <input
                                type="text"
                                id="story-citation"
                                name="citation"
                                placeholder="Ex: Depoimento oral gravado na Academia de Capoeira em 1995"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="story-source-url">Link / URL da Fonte (Opcional)</label>
                            <input
                                type="url"
                                id="story-source-url"
                                name="sourceUrl"
                                placeholder="https://..."
                            />
                        </div>
                    </fieldset>

                    <button type="submit">Enviar Relato para o Acervo</button>
                </form>
            </section>
        </section>
    )
}