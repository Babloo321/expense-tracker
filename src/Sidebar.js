import React from 'react'
import styles from './sidebar.module.css';

function Sidebar({buttons, isSelected, setIsSelected}) {
  return (
    <div className={styles.container}>
       { 
        buttons.map((btn,index) => {
         return <div className={isSelected === index ? styles.select_button : styles.button} key={index} onClick={()=>setIsSelected(index)}>
         {btn}
          </div>
       })
        }
    </div>
  )
}

export default Sidebar