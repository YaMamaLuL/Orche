import logo from "../../imgs/logo.svg"
import socialMediaLinks from "./SocialMediaLinks";

const SiteFooter = () => {
    return (
        <div>
            <img src={logo} alt="logoImg"/>
            <div>copyright in next life</div>
            <div>
                {socialMediaLinks.map(item=>
                    <a href={item.ref}>
                        <img src={item.logo} alt="socialmedialogo"/>
                    </a>)}
            </div>
        </div>
    )
}

export default SiteFooter