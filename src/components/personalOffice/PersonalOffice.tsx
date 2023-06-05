import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import OfficeBody from "./OfficeBody";

const PersonalOffice = () =>{
    return(
    <div>
        <SiteHeader isLogged={true} userName={"babyJohn"}/>
        <OfficeBody/>
        <SiteFooter/>
    </div>)
}

export default PersonalOffice