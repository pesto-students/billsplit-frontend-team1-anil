import React,{useEffect,useState} from 'react'
import classes from './TransactionCard.css';

function TransactionCard() {
  const [data,setData] = useState();
  const getData = async(e)=>{
    return await fetch("/transactions",{
      method:"GET"
    }).then((res)=>res.json())
    .then((json)=>{setData(json)});
  }
  useEffect(()=>{
    getData()
  },[]);

  return (
    <div className={classes.transaction_container}>
        {/* {data.map((ele)=>(
          <div>{ele.description}</div>
        ))} */}
    </div>
  )
}

export default TransactionCard