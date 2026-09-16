import type { ArchiveRecord } from '../types/cultural'

/*Just approved register will be added to this PUBLIC colection on FrontEnd*/

export const archiveRecords: ArchiveRecord[] = [
    {
        id: 'dossie-iphan-capoeira',
        slug: 'dossie-iphan-roda-e-oficio',
        title: 'Roda de Capoeira e Ofício dos Mestres de Capoeira',
        category: 'historia',
        summary: 
        'Um dossié de referência do Iphan sobre a a Roda de Capoeira e os saberes transmitidos por mestres e mestras.',
        content:
        'Publicado pelo Iphan em 2014, esse dossié reúne pesquisas sobre a capoeira como patrimônio vivo. Ele é uma referência para compreender a roda, os mestres, a transmissão de saberes e os processos de salvaguarda cultural.',
        tags: ['patrimonio-cultural', 'roda-de-capoeira','mestres-e-mestras'],
        sources: [
            {
                kind: 'institucional',
                citation:
                'IPHAN. Roda de capoeira e ofício dos mestres de capoeira. Brasília: Iphan, 2014.',
                url:'https://bibliotecadigital.iphan.gov.br/items/11bba387-1a54-4cd9-9a47-f74b38ee3212',
            },
        ],
    },
]
