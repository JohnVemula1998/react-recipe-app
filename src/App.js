import './App.css';
import React,{ useState } from 'react';
import Products from './Components/Products';



function App() {
  const [search,setSearch] = useState("");
  const [data, setData] = useState([]);
  const ID = "0f17934b";
  const KEY = "f9207d045a898bffb3c995b2662d9a01";
  const submitHandler = (e) =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${ID}&app_key=${KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(
      res => res.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className="App">
      <h4>Food Recipe App</h4>
      <br />
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Search for receipe' value={search} onChange= {(e) => setSearch(e.target.value)} />
        <br />
        <br />
        <button type='submit' className="btn btn-primary">Search</button>
      </form>
      {data.length>=1 ? <Products  data={data}/>:null}
      
      
    </div>
  );
}

export default App;
