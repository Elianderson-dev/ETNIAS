export function HomePage() {
    return (
        <section className="page" aria-labelledby="home-title">
            <header className="home-hero">
                <p>ETNIAS Capoeira</p>
                <h1 id="home-title">Uma roda de memória, movimento e ancestralidade.</h1>
                <p>
                    Conheça a história do grupo, as figuras que marcaram a capoeira e nosso acervo cultural.
                </p>
            </header>

            <section className="contact-section" aria-labelledby="contact-title">
                <header>
                    <h2 id="contact-title">Entre em Contato com o ETNIAS</h2>
                    <p>
                        Envie uma mensagem para tirar dúvidas, propor oficinas, rodas ou colaborações culturais.
                    </p>
                </header>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>Informações de Contato e Mensagem</legend>

                        <div className="form-group">
                            <label htmlFor="contact-name">Nome Completo</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                required
                                placeholder="Seu nome completo"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-email">E-mail para Contato</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                required
                                placeholder="seuemail@exemplo.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-subject">Assunto</label>
                            <input
                                type="text"
                                id="contact-subject"
                                name="subject"
                                required
                                placeholder="Ex: Convite para Roda / Oficina / Pesquisa"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">Mensagem</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Escreva aqui sua mensagem para o grupo ETNIAS..."
                            ></textarea>
                        </div>
                    </fieldset>

                    <button type="submit">Enviar Mensagem</button>
                </form>
            </section>
        </section>
    )
}