import './styles.css'
import chevronDown from 'C:/Users/valya/WebstormProjects/CryptoApp/CryptoApp/src/img/chevronLeftDown.svg'
import chevronUp from 'C:/Users/valya/WebstormProjects/CryptoApp/CryptoApp/src/img/chevronRightUp.svg'
import {useContext} from "react";
import {CoinsContext} from "../../context/coinsContext.jsx";

const CoinsList = () => {
    const coinsContext = useContext(CoinsContext)
    const {filteredCoins} = coinsContext
    return (
        <ul className='coins-list'>
            {filteredCoins.map(coin => {
                return <li key={coin.uuid} className="coins-item">
                    <div className="coins-item__info">
                        <img className="coins-item__logo" src={coin.iconUrl} alt={coin.name}/>
                        <div className="coins-item__name">
                            <h3>{coin.name}</h3>
                            <p>{coin.symbol}</p>
                        </div>
                    </div>
                    <div className="coins-item__price">
                        {(+coin.change) > 0
                            ? <img className="change-icon" src={chevronUp} alt="icon"/>
                            : <img className="change-icon" src={chevronDown} alt="icon"/>}
                        <p>{coin.change}%</p>
                        <h3 style={{marginLeft: 25}}>{(+coin.price).toFixed(2)} USD</h3>
                    </div>
                </li>
            })}
        </ul>
    )
}

export default CoinsList