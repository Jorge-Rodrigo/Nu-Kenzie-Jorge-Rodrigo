import './styles.css'
import trash from "../../assets/trash.svg"

export function Card( { key,name, type , value, remove} ) {

    return (
        type === "Entrada" ? (
            <li key={key} className="card">
                <div>
                    <h2>{name}</h2>
                    <p>{type}</p>
                </div>
                <p>R$ {value},00</p>
                <button className='delete-btn' onClick={() => remove(name) }><img src={trash} alt="Delete" /></button>
            </li>
        )
        :
        (
            <li key={key} className="card card-out">
            <div>
                <h2>{name}</h2>
                <p>{type}</p>
            </div>
            <p>R$ {value},00</p>
            <button className='delete-btn' onClick={() => remove(name) }><img src={trash} alt="Delete" /></button>
        </li>
        )
    )
}