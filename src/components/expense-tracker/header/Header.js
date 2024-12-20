import React from 'react'
import styles from './styles.module.css'
import { IoHome } from "react-icons/io5";
// import { useDispatch } from 'react-redux';
// import { setFalse } from '../../../redux/slices/booleanSlice';
import ThemeToggle from '../theme/ThemeToggle';
import { useNavigate } from 'react-router-dom';
import Layout from '../../global/header/Layout';
function Header() {
  // const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleClick = () =>{
    // dispatch(setFalse());
    // const value = useSelector((state) => state.booleanValue.value);
    localStorage.setItem('booleanValue', false);
    // <Layout boolVal={false}/>
    navigation('/')
  }
  // useNavigate("/")
  return (
    <div className={styles.header}>
      <IoHome className={styles.icon} onClick={handleClick}/> <h1 className={styles.heading}>Expense Tracker</h1>
      <ThemeToggle className={styles.icon}/>

    </div>
  )
}

export default Header