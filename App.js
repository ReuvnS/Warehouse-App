import React,{useState} from "react";
import {BrowserRouter as Router,Switch,Route ,Link}from 'react-router-dom'
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Manager from "./components/Manager";
import SignIn from "./components/SignIn";
import User from "./components/User";

function App() {
const [persons,setPersons]=useState([])
const [choosePerson,setChoosePerson]=useState({})

const [products, setProducts] = useState([
    {
      id: 11122,
      name: "greenBox",
      needforklift: false,
      inPlace: false
    },
    {
      id: 22554,
      name: "greenBox",
      needforklift: false,
      inPlace: false
    },
    {
      id: 66698,
      name: "blueBox",
      needforklift: true,
      inPlace: false
    },
    {
      id: 78544,
      name: "redBox",
      needforklift: false,
      inPlace: false
    },
    {
      id: 69875,
      name: "redBox",
      needforklift: false,
      inPlace: false
    }
  ]);
 
function createPer(serial,fullName,forkLift){
  let count = 0;
  if(serial.length > 5 || serial.length < 5){
    return; }
    if (/\d/g.test(fullName) || fullName.length < 4 || !/\s/.test(fullName)){
    return;}
 setPersons([
      ...persons,
      {
        serial: serial,
        fullName: fullName,
        forkLift: forkLift,
        count: 0
        }]);
   
}


const emplyoiesLogin=(noCode,index)=>{
setChoosePerson({noCode,index})
}
const updateProduct=(index,serial)=>{
 
  
  if(products[index].needforklift===true){
      if(persons[choosePerson.index].forklift===false)
      {
        alert("You need to have forklift license")
        return;
      }
    }
    setProducts(
      products.map((product)=>
        product.id === serial ? {...product, inPlace: !product.inPlace}: product
        )
    )
    setPersons(
      persons.map((person, index)=>
      index ==choosePerson.index ? {...person, count: person.count+1}: person
        )
    )
   
    }






return <div className="App " style={{  height: "700px" }}>  
<Router>
<Link to='/'> <h1>Ware House</h1></Link>

<Switch>
  <Route exact path='/' component={()=>{return <HomePage/>}}/>
  <Route exact path='/signin' component={()=> {return <SignIn add={createPer}/>}}/>
  <Route exact path='/login' component={()=>{return <Login persons={persons} emplyoiesLogin ={emplyoiesLogin}/> }}/>
  <Route exact path='/welcome' component={()=>{return <User products={products} persons={persons} updateProduct={updateProduct} choosePerson={choosePerson}/>}}/>
<Route exact path="/manager" component ={()=>{return <Manager persons={persons} choosePerson={choosePerson}/>}}/>
</Switch>
</Router>
</div>
}

export default App;
