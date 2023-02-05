//styles
import styles from "./styles/card.module.css"

const Card = ({src,type}) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={src} alt="image" />
      </div>
      <div className={styles.cardDescription}>
        <h2>{type}</h2>
        <div>
          <button>Buy Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default Card
