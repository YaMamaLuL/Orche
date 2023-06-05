import styles from "./EmptyOffice.module.scss"



const EmptyOffice = () =>{
    return(
        <div className={styles.emptyOfficeWrapper}>
            <p>Задеплой меня папочка</p>
            <input/>
            <button>Задеплоить суку</button>
        </div>)
}

export default EmptyOffice