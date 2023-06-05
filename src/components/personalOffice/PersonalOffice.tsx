import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";

const PersonalOffice = () =>{
    return(
    <div>
        <SiteHeader isLogged={true} userName={"babyJohn"}/>

        <SiteFooter/>
    </div>)
}

export default PersonalOffice