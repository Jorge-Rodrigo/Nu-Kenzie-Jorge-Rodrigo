import './style.css'

export function Header( { setLoggedIn } ) {
 
    function userLogout() {

        setLoggedIn(false)
    }
 
    return (
        <header >
            <div className="container header">
              <h1><span>Nu</span> Kenzie</h1>
              <button onClick={ userLogout }>Inicio</button>
            </div>
        </header>
    )
}