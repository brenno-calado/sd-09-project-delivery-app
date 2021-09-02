import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from './context';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [sales, setSales] = useState({});
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useHistory();

  const signIn = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      setUser(response.data);
      router.push('/customer/products');
    } catch (error) {
      console.log(error);
    }
  };

  const setProductCartInLocalStorage = (data) => {
    localStorage.setItem('productCart', JSON.stringify(data));
  };

  const getProducts = async () => {
    if (products.length) return;
    try {
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
      const productObject = {};
      response.data.forEach(({ name, price }) => {
        productObject[name] = { name, quantity: 0, price };
      });
      setProductsCart(productObject);
      if (!JSON.parse(localStorage.getItem('productCart'))) {
        setLoading(false);
        return setProductCartInLocalStorage(productObject);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSales = async () => {
    response.data = [{
      deliveryNumber: '0001',
      Status: 'Pendente',
      saleDate: '01/09/2021',
      id: '01',
    }];

    try {
      const response = await axios.get('');
      setSales(response.data);
    } catch (error) {
      console.logo(error);
    }
  };

  const setUserInLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
  };

  const contextValue = {
    user,
    setUser,
    signIn,
    getProducts,
    getSales,
    setSales,
    sales,
    products,
    setUserInLocalStorage,
    productsCart,
    setProductsCart,
    loading,
    setProductCartInLocalStorage,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;