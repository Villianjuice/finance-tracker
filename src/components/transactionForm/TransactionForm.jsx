import { serverTimestamp } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

export const TransactionForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const {user, createItem, getItems } = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdItem = {
      name,
      amount,
      authorId: user.uid,
      createdAt: serverTimestamp(),
    };

    createItem(createdItem);
    getItems();

    setName("");
    setAmount("");
  };

  return (
    <>
      <h3>Добавить транзакцию</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Название транзакции :</span>
          <input type="text" required value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          <span>Сумма ($):</span>
          <input type="number" required value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <button>Добавить транзакцию</button>
      </form>
    </>
  );
};
