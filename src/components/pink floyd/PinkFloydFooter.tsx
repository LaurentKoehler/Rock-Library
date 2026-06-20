import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'



function PinkFloydFooter() {

    return (
        <footer className="pink-floyd-footer">
            <div className="footer-top">
                <nav>
                    <a href="https://www.facebook.com/pinkfloyd" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://x.com/pinkfloyd" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/pinkfloyd" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCY2qt3dw2TQJxvBrDiYGHdQ" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.tiktok.com/@pinkfloyd" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    <a href="https://discord.com/invite/pink-floyd-274959782325256195" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </nav>
                <span>
                    <Link to="/">
                        <img src={`${import.meta.env.BASE_URL}assets/rock_logo.png`} alt="Rock Library" className='rock-logo' />
                    </Link>
                    <Link to="/pink-floyd" onClick={() => window.scrollTo(0, 0)}>
                        <img src={`${import.meta.env.BASE_URL}assets/pink_floyd_logo.png`} alt="Pink Floyd" className='pink-floyd-logo' />
                    </Link>
                </span>
            </div>
            <p>&copy; 2026</p>
        </footer>
    )
}

export default PinkFloydFooter