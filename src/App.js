import Header from './components/Header';
import { useState } from 'react';
import CoronaForCountry from './components/CoronaForCountry'
import RecordedCorona from './components/RecordedCorona';
import CoronaForContinent from './components/CoronaForContinent';
import axios from "axios";



function App() {

  // const [products, setProducts] = useState([])
  const [key,setKey]=useState(1);
  // const getProducts = async () => {
  //   const res = await axios.get('http://localhost:3000/admin/products')
  //   setProducts(res.data)
  // }
  return (
   <>
    <Header 
    onMenuChange={(e)=>{
      setKey(e);
    }}/>

    {/* <button style={{
      fontSize:"20px",
      color:'white',
      backgroundColor:"black",
      borderRadius:"10px",
      padding:"10px"

    }} onClick={() =>{
      getProducts()
    }}>Get products</button> */}
    
    <div className='md:container md:mx-auto p-8  page-content  '>
    {/* {products.map((pro, i) =>(
      <>
      <p>{pro.description}</p>
      <p>{pro.name}</p>
      <p>{pro.imageUrl}</p>
      <p>{pro.price}</p>
      <p>============================== {i + 1}</p>
      </>
    ))} */}

      {key===1 && <CoronaForCountry></CoronaForCountry>}
      {key===2 && <RecordedCorona></RecordedCorona>}
      {key===3 &&<CoronaForContinent></CoronaForContinent>}
   </div>

   
   
   </>
    
    
  );
}


export default App;

