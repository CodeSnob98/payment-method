
import React from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [cardnum,setCardnum]=React.useState(null);
  const [expdate,setExpdate]=React.useState(null);
  const [cvc,setCvc]=React.useState(null);
  const [name,setName]=React.useState(null);
  function handleClick(){
    let c=new Date();
    let d=`${c.getFullYear()}/${c.getMonth()}`;
    if((cardnum<=9999999999999999)&&(cardnum>=1000000000000000)&&(d<=expdate)){
      axios.post("http://localhost:5000/",{
     cardNo:cardnum,
     expDate:expdate,
     cvcNo:cvc,
     ownerName:name
    }).then((res)=>{console.log("data entered",res)}).catch(
     (err) => console.log('Exception Occured ', err)
    );
    setCardnum("");
    setExpdate("");
    setCvc("");
    setName("");
    alert(`submitted successfully`);
 }else{
     alert(`make sure the card number is 16 digits and the card is not expined`);
 }
  }
  return (
    <div className="App">
      <div id="img">
      <img src="https://content.fortune.com/wp-content/uploads/2019/01/mastercard-new-logo.jpg" alt="mastercard" width="112" height="60"/>
      <img src="https://seeklogo.com/images/D/-logo-C2F4F2FB11-seeklogo.com.png" alt="Discover" width="112" height="60"/>
      <img src="https://logos-world.net/wp-content/uploads/2020/04/PayPal-Logo-1999%E2%80%932007.png" alt="PayPal" width="112" height="60"/>
      <img src="https://www.thenfapost.com/wp-content/uploads/2020/08/American-Express-Jobscan-Taxscan.jpg"alt="PayPal" width="112" height="60"/>
      </div>
      <div id="cardNo">
      <h3>CARD NUMBER</h3>
      <input id="cardNoIp" type="Number" value={cardnum} onChange={(event)=>setCardnum(event.target.value)}/>
      </div>
      <div id="expandcvc">
        <div id="expir">
          <h3>EXPIRATION DATE</h3>
          <input id="expdate" type="month" value={expdate} onChange={(event)=>setExpdate(event.target.value)}/>
        </div>
        <div>
        <h3>CVC NUMBER</h3>
          <input id="cvc" type="Number" value={cvc} onChange={(event)=>setCvc(event.target.value)} />
        </div>
      </div>
      <div id="owner">
        <h3>OWNER NAME</h3>
        <input id="name" type="text" value={name} onChange={(event)=>setName(event.target.value.replace(/-/g,'/'))} />
      </div>
      <button id="btn" onClick={handleClick}>Confirm Payment</button>
    </div>
  );
}

export default App;

