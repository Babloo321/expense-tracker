import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import expense from '../../images/expense.jpg';
import weather from '../../images/weathers.jpg';
import chat from './../../images/chat.jpg';

const HomePage = () => {
const data = [
  {id:1,to:"/expense-tracker", name:"Expense Tracker",src:expense},
  {id:2,to:"/weather", name:"Weather", src:weather},
  {id:3,to:"/chat", name:"Chat", src:chat},
]

  return (
  <div className={styles.slideContainer}>
  {data.map((item) => (
    <Link to={item.to} key={item.id} className={styles.slide}>
      <img src={item.src} alt={item.name} className={styles.slideImage} />
      <h2 className={styles.slideTitle}>{item.name}</h2>
    </Link>
  ))}
  </div>
  );
};

export default HomePage;
