import React from 'react'
import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import styles from './TransactionList.module.css'

export const TransactionList = () => {
  const {items, getItems} = useAuthContext()

  useEffect(() => {
    getItems()
  }, [])
  return (
    <ul className={styles.transactions}>
      {items ? items.map(item => 
        <li key={item.createdAt}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.amount}>$ {item.amount}</p>
      </li>
      ) : (
        <>Loading...</>
      )}
      
    </ul>
  )
}
