import { Link } from "react-router-dom"

function GeneralFooter() {

    return (
        <footer className="general-footer">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={`${import.meta.env.BASE_URL}assets/rock_logo.png`} alt="Rock Library" className='rock-logo' />
            </Link>
            <p>&copy; 2026</p>
        </footer>
    )
}

export default GeneralFooter