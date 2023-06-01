import logo from "../../imgs/logo.svg"
import socialMediaLinks from "./SocialMediaLinks";
import styles from "./SiteFooter.module.scss"

const SiteFooter = () => {
    return (
        <div className={styles.footerWrapper}>
            <img src={logo} alt="logoImg" width="50vh"/>
            <p>copyright in next life<br/> big fat cock urfu team</p>
            <div className={styles.socialLinks}>{socialMediaLinks.map(item=>
                <a href={item.ref} className={styles.anchor}>
                    <img src={item.logo} alt="soclogo" width="100%"/>
                </a>)}</div>

        </div>
    )
}

export default SiteFooter