import {  FaRedo } from "react-icons/fa";
export default function Reset({setCount}){
  return(
    <>
    <button className="reset-btn" onClick={()=>setCount(0)}> <FaRedo /></button>
    </>
  )
}