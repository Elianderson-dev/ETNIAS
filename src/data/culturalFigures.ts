import type { CulturalFigure } from '../types/cultural'

/*
  Catalogo inicial de figuras historicas da Capoeira.
  Cada registro possui dados bibliograficos/historicos e atribuicao de fontes.
*/

export const culturalFigures: CulturalFigure[] = [
    {
        id: 'mestre-bimba',
        slug: 'mestre-bimba',
        name: 'Manuel dos Reis Machado',
        knownAs: 'Mestre Bimba',
        role: 'mestre',
        period: '1899 — 1974',
        summary:
            'Criador da Capoeira Regional e fundador da primeira academia de capoeira registrada formalmente no Brasil (1937), em Salvador, Bahia.',
        contributions: [
            'Criacao da Capoeira Regional',
            'Sistematizacao do ensino da capoeira (Sequencias de Bimba e cintura desprezada)',
            'Contribuicao fundamental para a descriminalizacao da capoeira no Brasil',
        ],
        sources: [
            {
                kind: 'livro',
                citation: 'REGO, Waldeloir. Capoeira Angola: ensaio socio-etnografico. Salvador: Editora Itapua, 1968.',
            },
            {
                kind: 'institucional',
                citation: 'IPHAN. Roda de capoeira e oficio dos mestres de capoeira. Brasilia: Iphan, 2014.',
                url: 'https://bibliotecadigital.iphan.gov.br/items/11bba387-1a54-4cd9-9a47-f24b38ee3212',
            },
        ],
    },
    {
        id: 'mestre-pastinha',
        slug: 'mestre-pastinha',
        name: 'Vicente Ferreira Pastinha',
        knownAs: 'Mestre Pastinha',
        role: 'mestre',
        period: '1889 — 1981',
        summary:
            'Mestre e filosofo da Capoeira Angola, fundador do Centro Esportivo de Capoeira Angola (CECA) no Pelourinho, Salvador.',
        contributions: [
            'Preservacao e estruturacao da tradicao da Capoeira Angola',
            'Difusao da filosofia da capoeira como arte, jogo e mandinga ancestral',
            'Autoria do livro pioneiro "Capoeira Angola" (1964)',
        ],
        sources: [
            {
                kind: 'livro',
                citation: 'PASTINHA, Vicente Ferreira. Capoeira Angola. Salvador: Grafica Loreto, 1964.',
            },
        ],
    },
]
