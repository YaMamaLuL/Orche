import logo from "../../imgs/logo.svg"
import socialMediaLinks from "./SocialMediaLinks";
import styles from "./SiteFooter.module.scss"

const SiteFooter = () => {
    return (
        <div className={styles.footerWrapper}>
            <img src={logo} alt="logoImg" className={styles.siteLogo} width="50vh"/>
            <p>нет копирайту<br/> урфу тим прожект 2023</p>
            <div className={styles.socialLinks}>
                {socialMediaLinks.map(item=>
                <a href={item.ref} className={styles.anchor} rel="noreferrer" target="_blank">
                    <img src={item.logo} alt="soclogo" width="100%"/>
                </a>)}
            </div>
        </div>
    )
}

export default SiteFooter