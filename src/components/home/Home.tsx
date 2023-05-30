import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";

const Home = () =>{
    return (
        <div>
            <SiteHeader isLogged={false} userName={"nothing"}/>
            <SiteFooter/>
        </div>
    )
}

export default Home