import React from 'react'
import styles from './sidebar.module.css';
import { IoHome } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { TbCategoryFilled } from "react-icons/tb";

function Sidebar({buttons, isSelected, setIsSelected}) {
  function iconFunction(btn){
    switch(btn){
      case "Home":
        return <IoHome />;
        break;

        case "Expenses":
        return <FaPlusCircle />;
        break;

        case "Budgets":
        return <HiCurrencyDollar />;
        break;

        case "Categories":
        return <TbCategoryFilled />;
        break;
        
        default:
          break;
    }
  }
  return (
    <div className={styles.container}>
       { 
        buttons.map((btn,index) => {
         return <div className={isSelected === index ? styles.select_button : styles.button} key={index} onClick={()=>setIsSelected(index)}>
        <span className={styles.icon}>{iconFunction(btn)}</span> <span className={styles.text}>{btn}</span>
          </div>
       })
        }
    </div>
  )
}

export default Sidebar