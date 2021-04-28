import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo_green from './images/logo_green.svg'
import './Index.css'


const IndexPage = () => {

    return (
        <div>
            <div>
                <img className='index-logo' style={{ width: "80vh", height: "40vh", display: 'block', margin: 'auto' }} src={logo_green}></img>
                <p className='Monch' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>By: Montserrat Mosqueda</p>

                <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '3px solid black', borderTop: '3px solid black', height: '15vh', maxWidth: '100vh', margin: '0px auto 0 auto' }}>
                    <img style={{ width: '10vh', height: '10vh', margin: 'auto' }} src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619538885/glovo_prueba_tecnica/mai-thai_vgkryd.png'></img>
                    <img style={{ width: '10vh', height: '10vh', margin: 'auto' }} src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619538885/glovo_prueba_tecnica/cocktails_crtfxn.png'></img>
                    <h1 className='slogan' style={{ MaxWidth: '60vh', height: '10vh', display: 'flex', alignItems: 'center', margin: 'auto' }}> "G - COCKTAILS" </h1>
                    <img style={{ width: '10vh', height: '10vh', margin: 'auto' }} src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619538885/glovo_prueba_tecnica/martini_saplzh.png'></img>
                    <img style={{ width: '10vh', height: '10vh', margin: 'auto' }} src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619538885/glovo_prueba_tecnica/cocktail_jhbvl1.png'></img>
                </div>
            </div>

            <Row style={{ margin: '2% 2% 2% 2%' }}>
                <Col lg={true} style={{ background: 'white', borderRadius: '50%', border: '5px solid rgba(0, 162, 131, 255)', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0px auto', padding: '2%', maxWidth: '20rem', height: '20rem', display: 'flex' }}>
                    <div>
                        <h2 className='title1'>Fancy cocktails?</h2>
                        <p style={{ margin: '0px' }}>See which ones are prepared with more than 4 ingredients.</p>
                        <Link to="/cocktails-list/4-ingredients" className="btn btn btn-sm" data-toggle="tooltip" data-placement="bottom" title="Click and go"><img src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619628136/glovo_prueba_tecnica/habitacion-vip_piyjmg.png' style={{ width: "8vh", height: "8h" }} /></Link>
                    </div>
                </Col>

                <Col lg={true} style={{ background: 'white', borderRadius: '50%', border: '5px solid rgba(0, 162, 131, 255)', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0px auto', padding: '2%', maxWidth: '20rem', height: '20rem', display: 'flex' }}>
                    <div>
                        <h2 className='title1'>Need some references?</h2>
                        <p style={{ margin: '0px' }}>Take a look at Cocktails's id, name and ingredients.</p>
                        <Link to="/cocktails-list/id-name-ingredients" className="btn btn btn-sm" data-toggle="tooltip" data-placement="bottom" title="Click and go"><img src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619627636/glovo_prueba_tecnica/tarjeta-de-identificacion_rlfh1l.png' style={{ width: "8vh", height: "8h" }} /></Link>
                    </div>
                </Col>

                <Col lg={true} style={{ background: 'white', borderRadius: '50%', border: '5px solid rgba(0, 162, 131, 255)', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0px auto', padding: '2%', maxWidth: '20rem', height: '20rem', display: 'flex' }}>
                    <div>
                        <h2 className='title1'>Just G</h2>
                        <p style={{ margin: '0px' }}>Take a look at all "G"enial Cocktails that we have for you!</p>
                        <Link to="/cocktails-list/beginning-g" id='beggining-g' className="click btn btn-sm" data-toggle="tooltip" data-placement="bottom" title="Click and go"><img src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619538885/glovo_prueba_tecnica/2018020613590450582_oxpfgu.png' style={{ width: "8vh", height: "8h" }} /></Link>
                    </div>
                </Col>

                <Col lg={true} style={{ background: 'white', borderRadius: '50%', border: '5px solid rgba(0, 162, 131, 255)', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0px auto', padding: '2%', maxWidth: '20rem', height: '20rem', display: 'flex' }}>
                    <div>
                        <h2 className='title1'>For that calories...</h2>
                        <p style={{ margin: '0px' }}>Take a look at Cocktail's quantities.</p>
                        <Link to="/cocktails-list/ingredient-quantities" className="btn btn btn-sm" data-toggle="tooltip" data-placement="bottom" title="Click and go"><img src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619627636/glovo_prueba_tecnica/escala_l8vlxe.png' style={{ width: "8vh", height: "8h" }} /></Link>
                    </div>
                </Col>

                <Col lg={true} style={{ background: 'white', borderRadius: '50%', border: '5px solid rgba(0, 162, 131, 255)', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0px auto', padding: '2%', maxWidth: '20rem', height: '20rem', display: 'flex' }}>
                    <div>
                        <h2 className='title1'>Not always with alcohol...</h2>
                        <p style={{ margin: '0px' }}>See which ones have alcohol and which ones don't.</p>
                        <Link to="/cocktails-list/alcoholic-cocktails" className="btn btn btn-sm" data-toggle="tooltip" data-placement="bottom" title="Click and go"><img src='https://res.cloudinary.com/dxslsbznp/image/upload/v1619627636/glovo_prueba_tecnica/juice_pjdamu.png' style={{ width: "8vh", height: "8h" }} /></Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default IndexPage