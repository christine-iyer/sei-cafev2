import styles from './OrderListItem.scss';
import Card from 'react-bootstrap/Card';
 
export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
return (
  <Card className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectOrder(order)}>

    <div>
    <Card.Title className={styles.Smaller}>
        {new Date(order.updatedAt).toLocaleDateString()}</Card.Title>

      <Card.Subtitle>Order Id: <span className={styles.Smaller}>{order.orderId}</span></Card.Subtitle>

    </div>
    <div className={styles.AlignRt}>
      <div>${order.orderTotal.toFixed(2)}</div>
      <div className={styles.Smaller}>{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
    </div>
   
  </Card>
);
}