import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import styles from "./Blog.module.scss"

const newsDatas = ["29.06.2023"]

const blankNew = {
        title: "Боже, храни оркестратор",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ante metus dictum at tempor commodo. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Orci a scelerisque purus semper. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. A arcu cursus vitae congue mauris rhoncus aenean.\n" + "\n" +
            "Magna fringilla urna porttitor rhoncus. Non arcu risus quis varius. Lacus vel facilisis volutpat est velit egestas. Egestas erat imperdiet sed euismod. Diam donec adipiscing tristique risus nec feugiat in fermentum. Congue eu consequat ac felis donec et odio pellentesque. Massa enim nec dui nunc mattis. Nulla at volutpat diam ut. Feugiat vivamus at augue eget arcu dictum. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Dignissim sodales ut eu sem integer vitae. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Quisque sagittis purus sit amet volutpat consequat. Adipiscing commodo elit at imperdiet dui accumsan sit.\n" + "\n" +
            "Porta nibh venenatis cras sed felis eget velit. Rhoncus urna neque viverra justo nec ultrices dui. Ultrices dui sapien eget mi. Neque ornare aenean euismod elementum nisi quis eleifend quam. Ipsum a arcu cursus vitae. Odio euismod lacinia at quis. Elementum tempus egestas sed sed risus pretium quam. Egestas congue quisque egestas diam in arcu cursus euismod. Nunc mi ipsum faucibus vitae aliquet. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Amet risus nullam eget felis eget nunc lobortis. Eu consequat ac felis donec et. Dignissim sodales ut eu sem. Amet porttitor eget dolor morbi. Tristique sollicitudin nibh sit amet. Purus viverra accumsan in nisl nisi scelerisque eu. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Congue nisi vitae suscipit tellus mauris a diam. Posuere morbi leo urna molestie at elementum eu facilisis sed.\n" + "\n" +
            "Dictum varius duis at consectetur lorem donec. Enim nunc faucibus a pellentesque sit. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Blandit volutpat maecenas volutpat blandit aliquam. Enim tortor at auctor urna. Nulla malesuada pellentesque elit eget gravida. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Orci a scelerisque purus semper. Pulvinar neque laoreet suspendisse interdum consectetur libero. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Non diam phasellus vestibulum lorem sed risus ultricies. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Posuere morbi leo urna molestie at elementum eu facilisis sed. Cum sociis natoque penatibus et magnis dis. Vestibulum lorem sed risus ultricies tristique nulla.\n" + "\n" +
            "In est ante in nibh. Id aliquet risus feugiat in ante metus. A iaculis at erat pellentesque adipiscing commodo elit at. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Blandit libero volutpat sed cras ornare arcu dui vivamus. Amet massa vitae tortor condimentum lacinia quis vel eros. Nullam eget felis eget nunc lobortis. Arcu cursus vitae congue mauris rhoncus. Quisque id diam vel quam elementum pulvinar etiam non. Erat pellentesque adipiscing commodo elit at imperdiet. Morbi blandit cursus risus at ultrices. Nisl rhoncus mattis rhoncus urna neque viverra. Ut venenatis tellus in metus. At erat pellentesque adipiscing commodo elit at. In iaculis nunc sed augue. Rhoncus mattis rhoncus urna neque."
    }

const Blog = () =>{
    return(<div>
        <SiteHeader isLogged={false} userName="nowho"/>
        <div className={styles.blogWrapper}>
            <ul className={styles.newsData}>
                {newsDatas.map(item =><li key="newsData"><button className={styles.test}>{item} {blankNew.title}</button></li>)}
            </ul>
            <p className={styles.newText}>{blankNew.text}</p>
        </div>
        <SiteFooter/>
    </div>)
}

export default Blog