import Card from "../../components/Card/Card.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import CoinsList from "../../components/CoinsList/CoinsList.jsx";
import styles from './styles.module.css';

const Main = ({coins, setCoins, balance, setBalance}) => {
  return (
      <main style={styles}>
          <Card balance={balance} setBalance={setBalance}/>
          <Filter setCoins={setCoins}/>
          {coins.length > 0 ? <CoinsList /> : <p>Loading...</p>}
      </main>
  )
}

export default Main