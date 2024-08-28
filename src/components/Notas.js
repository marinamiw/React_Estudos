import styles from './Notas.module.css'

function Notas({matematica,fisica,quimica}) {

    return (
        <div className = "principal">
            <h1 className = {styles.notasContainer}> Suas notas: </h1>
            <p className= {styles.notasContent} > sua nota em matematica foi {matematica}</p>
            <p className = {styles.notasContent}> sua nota em fisica foi {fisica}</p>
            <p className = {styles.notasContent}> sua nota em quimica foi {quimica}</p>
        </div>
    )
}

export default Notas