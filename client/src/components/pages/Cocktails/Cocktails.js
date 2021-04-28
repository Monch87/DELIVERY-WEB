import { Component } from 'react'
import CocktailsService from '../../../service/cocktails.service'
import CocktailsList from './CocktailsList'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Cocktails extends Component {

    constructor() {
        super()
        this.state = {
            cocktails: [],
            choice: ''
        }

        this.cocktailsService = new CocktailsService()
    }

    componentDidMount() {
        this.chargingCocktails()
    }

    chargingCocktails() {
        this.state.choice = this.props.match.params.choice
        this.cocktailsService
            .getCocktails()
            .then(response => this.setState({ cocktails: response.data.drinks }))
            .catch(err => console.log(err))

    }

    filterCoktails(alcohol) {
        if (alcohol)
            return this.state.cocktails?.filter(elm => elm.strAlcoholic == 'Alcoholic')
        else
            return this.state.cocktails?.filter(elm => elm.strAlcoholic == 'Optional alcohol' && 'Non-Alcoholic')
    }

    filter4Ingredients() {
        return this.state.cocktails?.filter(elm => elm.strIngredient4 != null)
    }

    render() {

        return (
            <Container className="navMargin" as="section">
                <Link to="/" id='beggining-g' className="btn btn btn-sm"><img src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619538885/glovo_prueba_tecnica/2018020613590450582_oxpfgu.png' style={{ width: "8vh", height: "8h", marginTop: '15%' }} data-toggle="tooltip" data-placement="bottom" title="Go back" />
                    <h1 style={{ fontSize: '1.2em' }}> Home </h1></Link>

                {this.state.choice == 'beginning-g' ? <> <div className='total-result'> Total "G" Drinks: {this.state.cocktails.length}</div>
                    <CocktailsList cocktails={this.state.cocktails} choice={this.state.choice} /> </> : ''}

                {this.state.choice == '4-ingredients' ? <> <div className='total-result'>Fancy Cocktails</div>
                    <CocktailsList cocktails={this.filter4Ingredients()} choice={this.state.choice} /> </> : ''}

                {this.state.choice == 'id-name-ingredients' ? <> <div className='total-result'>Need some references?</div>
                    <CocktailsList cocktails={this.state.cocktails} choice={this.state.choice} /> </> : ''}

                {this.state.choice == 'ingredient-quantities' ? <> <div className='total-result'>For that calories...</div>
                    <CocktailsList cocktails={this.state.cocktails} choice={this.state.choice} /> </> : ''}

                {this.state.choice == 'alcoholic-cocktails' ? <> <div className='total-result'>No Alcoholic / Optional Alcohol</div>
                    <CocktailsList cocktails={this.filterCoktails(false)} choice={this.state.choice} />
                    <div className='total-result'>Alcoholic</div> <CocktailsList cocktails={this.filterCoktails(true)} choice={this.state.choice} /> </> : ''}
            </Container>
        )
    }
}


export default Cocktails
