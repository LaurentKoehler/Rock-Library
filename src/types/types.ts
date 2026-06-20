
export type AlbumType = "studio" | "soundtrack" | "compilation" | "live"

export interface Member {
    name: string
    instruments: string[]
}

export interface Guest {
    name: string
    role: string
}

export interface Track {
    title: string
    writer: string
    duration: string
}

export interface Album {
    id: number
    artist: string
    title: string
    spotifyId?: string
    albumType: AlbumType
    year: number
    releaseDate: string
    label: string
    labelUS: string
    studios: string[]
    venue?: string
    concertDate?: string
    producer: string
    genre: string[]
    members: Member[]
    guests: Guest[]
    notableSingles: string[]
    tracklist: Track[]
    cover: string
    description: string
}

export interface AlbumProps {
    album: Album
    artist: string
}

