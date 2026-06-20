import { Link, useNavigate, useSearchParams } from "react-router-dom"


function PinkFloydHeader() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const currentSearch = searchParams.get("song") || searchParams.get("year") || ""
    return (
        <header className="pink-floyd-header">
            <Link to="/pink-floyd">
                <img src={`${import.meta.env.BASE_URL}assets/Pink-Floyd-header.png`} alt="Pink Floyd" />
            </Link>
            <nav>
                <Link to="/">
                    <img src={`${import.meta.env.BASE_URL}assets/rock_logo.png`} alt="Rock Library" className='rock-logo' />
                </Link>
                <button onClick={() => navigate("/pink-floyd?filter=studio")}>Studio</button>
                <button onClick={() => navigate("/pink-floyd?filter=live")}>Live</button>
                <button onClick={() => navigate("/pink-floyd?filter=compilation")}>Compilation</button>
                <button onClick={() => navigate("/pink-floyd?filter=all")}>All</button>
                <input
                    type="search"
                    placeholder="Chanson ou Année..."
                    value={currentSearch}
                    onChange={(chauvergine) => {
                        const filter = searchParams.get("filter") ?? "all"
                        const value = chauvergine.target.value
                        const isYear = /^\d+$/.test(value)
                        navigate(`/pink-floyd?filter=${filter}&song=${isYear ? "" : value}&year=${isYear ? value : ""}`)
                    }}
                />
            </nav>
        </header>
    )
}

export default PinkFloydHeader