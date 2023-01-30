import { IntlProvider } from 'react-intl';
import './App.css';
import Header from "./components/Header"
import ProductView from './components/ProductView';
import { useState,useCallback } from 'react';
import { debounceMyFunction } from './components/utility-function';
function App() {
  const [products,setProducts] =  useState([])
  const [searchName,setSearchName] =  useState('')
  const [secondaryProducts,setSecondaryProducts] = useState([])
  let str =''
  //on change of search input
  const onChange = (e) => {
    str = e.target.value
    setSearchName({searchName:str})
    filter(str);
  };
  //function to filter out matching productNames
  function match(name){
    return name.productName.includes(str);
  }
  //onclick of search button to match exact input and productName
  function exactMatch(name){
    return name.productName === searchName;
  }
  function filter(str){
    if(str!==""){
      var array= Array.from(secondaryProducts)
      array = array.filter(match)
      setProducts(array) 
    }
    else setProducts(secondaryProducts)
  }
  //adding product to the cache or inventory
  const addTask=async(data)=>{
    addDataIntoCache(data['id'],data)
    setProducts([...products,data])
    alert("new product added")
    setSecondaryProducts([...secondaryProducts,data])
  }
  //onclick of search button
  const onSearch = () => {
    var array= Array.from(products)
    array = array.filter(exactMatch)
    setProducts(array)
    setSearchName('')
  };
  //onclick of get all the products info buton
  const onClick = () => {
    setSearchName('')
    setProducts(secondaryProducts)
  };
  //adding data into cache
  const addDataIntoCache = (cacheName, response) => {
    const data = new Response(JSON.stringify(response));
    const url = window.location.href
    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);  
      });
    }
  };
  const action = useCallback(debounceMyFunction(onChange,1000))
  
  return (
    <IntlProvider locale='en'>
    <div className="App">
      <div>
        <Header/>
      </div>
      <div>
        <ProductView
          productList = {products}
          isOneColumnLayout={false}
          hasClients={true}
          showClientIdSearchInput={true}
          onChange={action}
          //searchValue={searchName}
          onSearch={onSearch}
          addTask={addTask}
          onClick={onClick}
        />
      </div>
    </div>
    </IntlProvider>
  );
}

export default App;
