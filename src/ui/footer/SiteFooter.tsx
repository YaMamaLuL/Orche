import logo from "../../imgs/logo.svg"
import socialMediaLinks from "./SocialMediaLinks";
import styles from "./SiteFooter.module.scss"

const SiteFooter = () => {
    return (
        <div className={styles.footerWrapper}>
            <img src={logo} alt="logoImg" width="4%"/>
            <p>copyright in next life</p>
            <div>{socialMediaLinks.map(item=>
                <a href={item.ref} className={styles.anchors}>
                    <img src={item.logo} width="8%"/>
                </a>)}</div>

        </div>
    )
}

export default SiteFooter