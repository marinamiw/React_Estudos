import PropTypes from'prop-types'
import styles from './item.module.css'

function Item({marca = 'Faltou a marca', ano_lancamento = 0}){

    return(
        <>
            <li className = {styles.itemContent}>{marca}</li>
            <li className = {styles.itemContent}>{ano_lancamento}</li>
        </>
    )

}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}
export default Item