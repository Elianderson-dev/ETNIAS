/*Types for Cultural References*/

export type CulturalFigureRole = 
    | 'mestre'
    | 'mestra'
    | 'capoeirista'
    | 'figura-historica'

/*Categories*/
export type ArchiveCategory =
    | 'historia'
    | 'ensinamento'
    | 'evento'
    | 'vivencia'
    | 'viagem'

/*Source Kinds*/
export type SourceKind =
    | 'oral'
    | 'livro'
    | 'artigo'
    | 'institucional'
    | 'audiovisual'

/*Interface definition - defines object form*/
export interface SourceReference {
    kind: SourceKind
    citation: string
    url?: string
}

/*? Means an optional key. The entries may not exist for all the figures*/

export interface CulturalFigure {
    id: string
    slug: string
    name: string
    knownAs?: string
    role: CulturalFigureRole
    period: string
    summary: string
    contributions: string[]
    sources: SourceReference[]
}

/*This type represent a cultural register that can be included in Cultural Collection (Acervo Cultural)*/
export interface ArchiveRecord {
    id: string
    slug: string
    title: string
    category: ArchiveCategory
    summary: string
    content: string
    tags: string[]
    eventDate?: string
    location?: string
    narrator?: string
    recordedBy?: string
    sources: SourceReference[]
}

