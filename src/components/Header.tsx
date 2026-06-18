import { Link, useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    return (
        <header>
            <Link to="/">
                <img src={`${import.meta.env.BASE_URL}assets/headerTOOAO.png`} alt="Queen" />
            </Link>
            <nav>
                <button onClick={() => navigate("/?filter=studio")}>Studio</button>
                <button onClick={() => navigate("/?filter=live")}>Live</button>
                <button onClick={() => navigate("/?filter=compilation")}>Compilation</button>
                <button onClick={() => navigate("/?filter=all")}>All</button>
            </nav>
        </header>
    )
}

export default Header