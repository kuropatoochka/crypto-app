import {WithRuBalance} from '../../helpers/hoc/withRuBalance.jsx'
import './styles.css'
import {useState} from "react";

const Card = ({balance, setBalance, ruBalance}) => {
    const [currency, setCurrency] = useState('USD')
    const toggleCurrency = () => {
        setCurrency(prev=> (prev === 'USD') ? 'RUB' : 'USD')
    }
    return (
        <div className="card">
            <div className="card__body">
                <p>Valentina</p>
                <div className="card__balance">
                    <p style={{fontSize: 12}}>Balance</p>
                    <p className="card__balance_value">{currency === "USD" ? `${balance} $` : `${ruBalance} ₽`}</p>
                    <button className="card__balance_change" onClick={toggleCurrency}>{currency === "USD" ? "₽" : "$"}</button>
                </div>
            </div>
            <button className="card__button" onClick={setBalance}>Add 1000 $
            </button>
        </div>
    )
}

export default WithRuBalance(Card);