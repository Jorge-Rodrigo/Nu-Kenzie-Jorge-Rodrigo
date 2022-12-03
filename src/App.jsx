import { useState } from 'react';
import './App.css';
import { Form } from './components/Forms';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { List } from './components/List';


function App() {

  const [ isLoggedIn, setLoggedIn ] = useState(false)
  const [ listTransactions, setListTransactions] =  useState([])

  function remove(name) {

    const filterItem = listTransactions.filter((item) => item.description !== name )


    setListTransactions(filterItem)

}


  return (
    <div >
        {isLoggedIn ? 
        (
          <div>
            <Header setLoggedIn={ setLoggedIn }/>
            <div className=' container main-div'>
               <Form list={ listTransactions } setList={ setListTransactions } />
               <div>
                 <List list={ listTransactions } remove={ remove } setList={ setListTransactions }/>
               </div>
            </div>
          </div>
        )
        :
        (
          <div>
            <LandingPage setLoggedIn={ setLoggedIn }/>  
          </div>
        )
      }
    </div>
  );
}

export default App;
