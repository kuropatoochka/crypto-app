import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import {useCallback, useEffect, useState} from "react";
import {getCoins} from './api/api.js'
import {CoinsContext} from "./context/coinsContext.jsx";

function App() {
    const [balance, setBalance] = useState(1000)
    const [coins, setCoins] = useState([])
    const [filteredCoins, setFilteredCoins] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCoins()
            setCoins(data.coins)
            setFilteredCoins(data.coins)
        }
        fetchData()
    }, [])

    const addBalance = useCallback(() => {
      setBalance(prev => prev + 1000)
    }, [])

    return (
        <>
            <CoinsContext.Provider value={{coins, filteredCoins}}>
                <Header />
                <Main coins={coins}
                      setCoins={setFilteredCoins}
                      balance={balance}
                      setBalance={addBalance}
                      filteredCoins={filteredCoins}
                />
            </CoinsContext.Provider>
        </>
    )
}

export default App
