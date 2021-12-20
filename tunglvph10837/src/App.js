
import './App.css';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routers from './Routers';
import ProductAPI from './api/ProductAPI'
import CategoryAPI from './api/CategoryAPI'
import ContactAPI from './api/contactAPI'

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, [])
  useEffect(() => {
    const getContact = async () => {
      try {
        const { data: contact } = await ContactAPI.getAll();
        console.log(contact)
        setContacts(contact);
      } catch (error) {
        console.log(error)
      }
    }
    getContact();
  }, [])
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data: category } = await CategoryAPI.getAll();
        setCategories(category);
      } catch (error) {
        console.log(error)
      }
    }
    getCategory();
  }, [])
  const onHandleAdd = async (product) => {
    try {
      await ProductAPI.add(product);
      setProducts([
        ...products,
        product
      ])
    } catch (error) {
      console.log(error)
    }
  }
  //Contact//
  const onHandleAddContact = async (contact) => {
    try {
      await ContactAPI.add(contact);

      setContacts([
        ...contacts,
        contact
      ])
    } catch (error) {
      console.log(error)
    }

  }
  //Category//
  const onHandleAddCategory = async (category) => {
    try {
      await CategoryAPI.add(category);
      setCategories([
        ...categories,
        category
      ])
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleDeleteCate = async (id) => {
    try {
      await CategoryAPI.remove(id);
      const newCate = categories.filter(category => category._id !== id);
      setCategories(newCate);

    } catch (error) {
      console.log(error)
    }
  }
  const onHandleEditCate = async (id, category) => {
    try {
      const { data } = await CategoryAPI.update(id, category);
      const newCate = categories.map(item => (item._id === id ? data : item));
      setCategories(newCate);
    } catch (error) {
      console.log(error);
    }
  }
  const onHandleDelete = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProduct = products.filter(product => product._id !== id);
      setProducts(newProduct);
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleDeleteContact = async (id) => {
    try {
      await ContactAPI.remove(id);
      const newContact = contacts.filter(contact => contact._id !== id);
      setProducts(newContact);
    } catch (error) {
      console.log(error)
    }
  }
  const editProduct = async (id, product) => {
    try {
      const { data } = await ProductAPI.update(id, product)
      const newProduct = products.map(item => item._id === id ? data : item);
      setProducts(newProduct);
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <div className="">
      <Routers products={products}
        onDelete={onHandleDelete}
        onAdd={onHandleAdd}
        onEdit={editProduct}
        //Category
        cate={categories}
        onDeleteCate={onHandleDeleteCate}
        onAddCate={onHandleAddCategory}
        onEditCate={onHandleEditCate}
        //Contact
        contact={contacts}
        onAddContact={onHandleAddContact}
        onDeleteContact={onHandleDeleteContact}
      />
    </div>
  );
}

export default App;
