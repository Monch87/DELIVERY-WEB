import CocktailCard from './CocktailCard'
import { Row } from 'react-bootstrap'
import './Cocktails.css'

const CocktailsList = ({ cocktails, choice }) => {

    return (
        <Row >
            {cocktails?.map(elm => <CocktailCard key={elm.idDrink} {...elm} choice={choice} />)}
        </Row>
    )
}


export default CocktailsList