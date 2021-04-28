import { Card, Col } from 'react-bootstrap'
import './Cocktails.css'


const CocktailCard = ({ choice, strDrink, strDrinkThumb, idDrink, strAlcoholic, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7 }) => {

    switch (choice) {

        case 'beginning-g': return (
            <Col md={3} className="cocktail-card" style={{ marginTop: 40 }}>
                <Card>
                    <Card.Img variant="top" src={strDrinkThumb} />
                    <Card.Body>
                        <h3>{strDrink}</h3>
                    </Card.Body>
                </Card>
            </Col>)

        case '4-ingredients': return (
            <Col md={3} className="cocktail-card" style={{ marginTop: 40 }}>
                <Card>
                    <Card.Img variant="top" src={strDrinkThumb} />
                    <Card.Body>
                        <h3>{strDrink}</h3>
                    </Card.Body>
                </Card>
            </Col>)

        case 'id-name-ingredients': return (
            <Col md={4} className="cocktail-card" style={{ marginTop: 40 }}>
                <Card>
                    <Card.Img variant="top" src={strDrinkThumb} />
                    <Card.Body>
                        <h3>{strDrink}</h3>
                        <p style={{ color: 'rgba(0, 162, 131, 255)' }}>ID:</p> <p>{idDrink}</p>
                        <p style={{ color: 'rgba(0, 162, 131, 255)' }}>Ingrendients:</p>
                        <p>{strIngredient1 != null ? `${strIngredient1}` : ''} {strIngredient2 != null ? `, ${strIngredient2}` : ''}
                            {strIngredient3 != null ? `, ${strIngredient3}` : ''} {strIngredient4 != null ? `, ${strIngredient4}` : ''}
                            {strIngredient5 != null ? `, ${strIngredient5}` : ''} {strIngredient6 != null ? `, ${strIngredient6}` : ''}
                            {strIngredient7 != null ? `, ${strIngredient7}` : ''}</p>
                    </Card.Body>
                </Card>
            </Col >)

        case 'ingredient-quantities': return (
            <Col md={4} className="cocktail-card" style={{ marginTop: 40 }}>
                <Card>
                    <Card.Img variant="top" src={strDrinkThumb} />
                    <Card.Body>
                        <h3>{strDrink}</h3>
                        <p style={{ color: 'rgba(0, 162, 131, 255)' }}>ID:</p> <p>{idDrink}</p>
                        <p style={{ color: 'rgba(0, 162, 131, 255)' }}>Ingrendients with Measures:</p>
                        <p> {strIngredient1 != null ? <>{strIngredient1}: {strMeasure1 != null ? `${strMeasure1}` : 'Up to you'}</> : ''}
                            {strIngredient2 != null ? <>, {strIngredient2}: {strMeasure2 != null ? `${strMeasure2}` : 'Up to you'}</> : ''}
                            {strIngredient3 != null ? <>, {strIngredient3}: {strMeasure3 != null ? `${strMeasure3}` : 'Up to you'}</> : ''}
                            {strIngredient4 != null ? <>, {strIngredient4}: {strMeasure4 != null ? `${strMeasure4}` : 'Up to you'}</> : ''}
                            {strIngredient5 != null ? <>, {strIngredient5}: {strMeasure5 != null ? `${strMeasure5}` : 'Up to you'}</> : ''}
                            {strIngredient6 != null ? <>, {strIngredient6}: {strMeasure6 != null ? `${strMeasure6}` : 'Up to you'}</> : ''}
                            {strIngredient7 != null ? <>, {strIngredient7}: {strMeasure7 != null ? `${strMeasure7}` : 'Up to you'}</> : ''}</p>
                    </Card.Body>
                </Card>
            </Col>)

        case 'alcoholic-cocktails': return (
            <Col md={4} className="cocktail-card" style={{ marginTop: 40 }}>
                <Card>
                    <Card.Img variant="top" src={strDrinkThumb} />
                    <Card.Body>
                        <h3>{strDrink}</h3>
                        <p style={{ color: 'rgba(0, 162, 131, 255)' }}>ID:</p> <p>{idDrink}</p>
                        <p style={{ color: 'rgba(0, 162, 131, 255)' }}>Ingrendients with Measures:</p>
                        <p> {strIngredient1 != null ? <>{strIngredient1}: {strMeasure1 != null ? `${strMeasure1}` : 'Up to you'}</> : ''}
                            {strIngredient2 != null ? <>, {strIngredient2}: {strMeasure2 != null ? `${strMeasure2}` : 'Up to you'}</> : ''}
                            {strIngredient3 != null ? <>, {strIngredient3}: {strMeasure3 != null ? `${strMeasure3}` : 'Up to you'}</> : ''}
                            {strIngredient4 != null ? <>, {strIngredient4}: {strMeasure4 != null ? `${strMeasure4}` : 'Up to you'}</> : ''}
                            {strIngredient5 != null ? <>, {strIngredient5}: {strMeasure5 != null ? `${strMeasure5}` : 'Up to you'}</> : ''}
                            {strIngredient6 != null ? <>, {strIngredient6}: {strMeasure6 != null ? `${strMeasure6}` : 'Up to you'}</> : ''}
                            {strIngredient7 != null ? <>, {strIngredient7}: {strMeasure7 != null ? `${strMeasure7}` : 'Up to you'}</> : ''}</p>
                        <p style={{ color: 'rgba(0, 162, 131, 255)', backgroundColor: 'black', textAlign: 'center' }}>{strAlcoholic}</p>
                    </Card.Body>
                </Card>
                < br />
            </Col>)

        default: return <h3>Error charging</h3>
    }
}


export default CocktailCard
