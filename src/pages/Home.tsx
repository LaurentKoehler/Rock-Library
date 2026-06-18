import { useSearchParams } from "react-router-dom"
import Album from "../components/Album"
import queenData from '../data/queenData.json'
import type { Album as AlbumData } from "../types/types"

const albums = queenData as AlbumData[]

function Home() {
    const [searchParams] = useSearchParams()
    const activeFilter = searchParams.get("filter") ?? "all"
    return (
        <><h1>Albums</h1>
            <section className="album-grid">
                {albums
                    .filter((album) => activeFilter === "all" || album.albumType === activeFilter)
                    .map((album) => (
                        <Album key={album.id} album={album} />
                    ))
                }
            </section>
        </>
    )
}

export default Home