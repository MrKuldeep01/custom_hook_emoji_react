import { useEffect, useState } from "react";
import Card from "./components/Card";
import useEmojiData from "./hooks/useEmojiData";

function App() {
  let [flag,setFlag]= useState(true)
let res = useEmojiData(flag);
if(!res){
  return <h2 className="p-4 bg-black/30 text-red-600 rounded-full m-2 text-center "> loading...</h2>
} else{
  let emoji = res.htmlCode[0]
  return (
    <>
      <div className="p-4 w-[100vw] h-screen flex-col justify-center item-center gap-4 m-0 bg-black/20 "> 
        <Card data={res} />
    <button className="px-4 py-3 rounded-md w-full mt-10 bg-black/80 text-white" onClick={()=>{
      setFlag(pre=> !pre);
    }}>get another {emoji} </button>
      </div>
    </>
  );}
}

export default App;
