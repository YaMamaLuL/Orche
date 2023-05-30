import logo from "../../imgs/logo.svg"
import socialMediaLinks from "./SocialMediaLinks";
import styles from "./SiteFooter.module.scss"

const SiteFooter = () => {
    return (
        <div className={styles.footerWrapper}>
            <img src={logo} alt="logoImg" width="2%"/>
            <div>copyright in next life</div>
            <div>
                {socialMediaLinks.map(item=>
                    <a href={item.ref}>
                        <img src={item.logo} alt="socialmedialogo" width="4%"/>
                    </a>)}
            </div>
        </div>
    )
}

export default SiteFooter