import './style.css'
import { Card } from '../Card'
import { useState } from 'react'

export function List({ list, remove, setList}) {

    const [ listTransactions, setListTransactions] =  useState([])

    function filterAll() {

        setListTransactions([])
        setList(list) 

    }
    function filterIn() {

        const entrys = list.filter((item) => item.type === "Entrada")
        setListTransactions(entrys)

    }

    function filterOut() {

        const out    = list.filter((item) => item.type === "Despesa")  
        setListTransactions(out)

    }

    return (
       list.length <= 0 ? (
        <div  className='main-div-list'>
        <div className='main-btn-div'>
            <div>
              <h2>Resumo financeiro</h2>
            </div>
            <div>
               <button className='btn-all' onClick={ filterAll }>Todos</button>
               <button onClick={ filterIn }>Entradas</button>
               <button onClick={ filterOut }>Despesas</button>
            </div>
        </div>
        <h2 className='list-title'>Você ainda não possui nenhum lançamento</h2>
        <ul className='list'>
            <li>
                <div className='loading-base'>
                    <p className='loading-top skeleton-loading'></p>
                    <p className='loading-bottom skeleton-loading'></p>
                </div>
            </li>
            <li>
                <div className='loading-base'>
                    <p className='loading-top skeleton-loading'></p>
                    <p className='loading-bottom skeleton-loading'></p>
                </div>
            </li>
            <li>
                <div className='loading-base'>
                    <p className='loading-top skeleton-loading'></p>
                    <p className='loading-bottom skeleton-loading'></p>
                </div>
            </li>
            <li>
                <div className='loading-base'>
                    <p className='loading-top skeleton-loading'></p>
                    <p className='loading-bottom skeleton-loading'></p>
                </div>
            </li>
           
        </ul>
    </div>
       )
       :
       (
        <div>
        <div className='main-btn-div'>
            <div>
              <h2>Resumo financeiro</h2>
            </div>
            <div>
               <button className='btn-all' onClick={ filterAll }>Todos</button>
               <button onClick={ filterIn }>Entradas</button>
               <button onClick={ filterOut }>Despesas</button>
            </div>
        </div>
        <ul className='list'>
          {listTransactions.length <= 0 ?(
            list.map((item) => <Card key={item.name} name={item.description} type={item.type}
            value={item.value}  remove={ remove } />)
          )
          :
          (
            listTransactions.map((item) => <Card key={item.name} name={item.description} type={item.type}
            value={item.value}  remove={ remove } />)
          )
          }
        </ul>
    </div>
       )
    )
}