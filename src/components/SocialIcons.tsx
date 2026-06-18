import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => (
    <div>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTiktok} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faDiscord} />
    </div>
)

export default SocialIcons