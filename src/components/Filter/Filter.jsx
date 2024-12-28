import './styles.css'
import React, {useContext} from "react";
import {CoinsContext} from "../../context/coinsContext.jsx";
import {useFilterCoins} from "../../helpers/hooks/useFilterCoins.js";

const Filter = ({ setCoins }) => {
    const coinsContext = useContext(CoinsContext)
    const {coins} = coinsContext

    const {value, setValue} = useFilterCoins(coins, setCoins)

    return (
        <div className="filter-block">
            <input
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                className="input"
                value={value}
                type="text"
                placeholder="Find crytpocurrency"/>
        </div>
    )
}

export default React.memo(Filter)