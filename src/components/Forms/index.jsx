import { useState } from 'react'
import { TotalMoney } from '../TotalMoney'
import './style.css'

export function Form( {list, setList} ) {

  const [desc, setDesc ] = useState('')
  const [ money, setMoney ] = useState('')
  const [ type, setType]   = useState ('')
    

  function createList(event) {
    event.preventDefault()

    if(type !== ''){
      
      const transaction = {
        description: desc,
        value: money,
        type: type
      }
        
      setList([...list,transaction])
  
      setDesc('')
      setMoney('')
      setType('')
   

    }

 
  }
    return (
        list.length <= 0? 
        (
            <form className='main-form' onSubmit={ createList }>
               <label htmlFor="">Descrição</label>
               <input type="text" id='description' placeholder="Digite a Descrição..." required className='desc-input' value={desc} onChange={(event) => setDesc(event.target.value)} />
               <div className='div-value'>
                 <div>
                     <label htmlFor="">Valor</label>
                     <input type="number" placeholder="0" className='value-input' id='value' required value={money} onChange={(event) => setMoney(event.target.value)}/>
                 </div>
                 <div>
                    <label htmlFor="">Tipo de Valor</label>
                    <select name="" id="type" className='type-input' required value={type} onChange={(event) => setType(event.target.value)}>
                       <option value="null" defaultValue hidden>Tipo de valor</option>
                       <option value="Entrada">Entrada</option>
                       <option value="Despesa">Despesa</option>
                    </select>
                 </div>
               </div>
               <button className='send-value' type='submit'>Inserir Valor</button>
           </form>
        )
        :
        (
          <div className='main-form-div'>
            <form className='main-form' onSubmit={ createList }>
               <label htmlFor="">Descrição</label>
               <input type="text" id='description' placeholder="Digite a Descrição..." required value={desc}  className='desc-input' onChange={(event) => setDesc(event.target.value)} />
               <div className='div-value'>
                 <div>
                     <label htmlFor="">Valor</label>
                     <input type="number" placeholder="0" className='value-input' id='value' required value={money} onChange={(event) => setMoney(event.target.value)}/>
                 </div>
                 <div>
                    <label htmlFor="">Tipo de Valor</label>
                    <select name="" id="type" className='type-input'  required value={type} onChange={(event) => setType(event.target.value)}>
                       <option value="null" defaultValue hidden>Tipo de valor</option>
                       <option value="Entrada">Entrada</option>
                       <option value="Despesa">Despesa</option>
                    </select>
                 </div>
               </div>
               <button  className='send-value' type='submit'>Inserir Valor</button>
           </form>
            <div>
                <TotalMoney list={ list } />
            </div>
          </div>
        )
    )

    
}