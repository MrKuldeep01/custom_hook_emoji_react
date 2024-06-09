import React from 'react'

const Card = ({data}) => {
    return (
    <div className='p-10 text-center bg-black/10 text-white rounded-md w-full'>
    <span className='font-mono text-xl p-4 text-center bg-black/10 w-full rounded-xl'>
      <label className="text-black/40  p-4 mx-2 "> Name :</label>
      {data["name"]}
    </span >
    <div className="emoji w-full h-auto text-[10rem] ">
      { data["htmlCode"][0] }
    </div>
    <span className='font-mono text-xl p-4 text-center w-full bg-black/10 rounded-xl'>
    <label className="text-black/40  p-4 mx-2 "> Cetegory :</label>
      
      {data["category"]}
    </span>
  </div>)
}
export default Card
