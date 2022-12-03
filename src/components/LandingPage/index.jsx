import './style.css'
import logo from '../../assets/illustration.svg'

export function LandingPage( { setLoggedIn } ) {
  
    function userConnect() {
        setLoggedIn(true)
    }

    return (
        <div className='main'>
           <div className='main-info'>
                <h1><span>Nu</span> Kenzie</h1>
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                <button onClick={ userConnect }>Iniciar</button>
           </div>
           <div>
            <img src={logo} alt="logo" className='img-info' />
           </div>
        </div>
    )
}