import './style.css'

export function TotalMoney( { list }) {
    
    const filterItensIn = list.filter((type)=> type.type === 'Entrada')
    const filterItensOut = list.filter((type)=> type.type === 'Despesa')
    
    const sumValue = filterItensIn.reduce((preValue,atualValue) => {
       return preValue + Number(atualValue.value) 
    },0)

    const minusValue = filterItensOut.reduce((preValue, atualValue) => {
        return preValue + Number(atualValue.value) 
    },0)

    const total = sumValue - minusValue

    return (
        <div className='total'>
            <p className='value-text'>Valor Total:</p>
            <p className='value'>{total} R$</p>
        </div>
    )
}