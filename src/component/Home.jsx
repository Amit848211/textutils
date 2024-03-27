import React, { useState } from 'react'

function Home() {
  const[text,settext]=useState('')

  const handleCopy = ()=>{
     var text =document.getElementById('myBox');
     text.select();
     text.setSelectionRange(0,9999);
     navigator.clipboard.writeText(text.value);
    //  props.showAlert("copied to Clipboard!  success ")
  }

  const handleUpperCase =()=>{
    let temp =text.toUpperCase()
    settext(temp)
  }

  const handleLowerCase =()=>{
    let temp1 =text.toLowerCase()
    settext(temp1)
  }

  const removeExtraSpace =()=>{
     let text2=text.replace(/\s+/g, ' ').trim()
     settext(text2)
  }

  return (
    <>
      <div className="w-full h-auto flex flex-col items-center gap-4 pt-32 pb-4 px-40">
         <h1 className="text-4xl font-semibold">TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
         <h3 className="text-2xl font-bold -ml-[950px]">Enter Your Text Here:</h3>
         <div className="w-full h-[250px]">
          <textarea
          id='myBox'
          typeof='text'
          value={text}
          onChange={(e)=>settext(e.target.value)}
          className="w-full h-full"></textarea>
         </div>
         <div className="flex gap-2 -ml-[400px]">
          <button className="bg-blue-500 text-lg rounded-xl text-white flex items-center px-2 py-1"
          onClick={handleUpperCase}>Convert Uppercase</button>
          <button className="bg-zinc-500 text-lg rounded-xl text-white flex items-center px-2 py-1"
          onClick={handleLowerCase}>Convert Lowercase</button>
          <button className="bg-pink-500 text-lg rounded-xl text-white flex items-center px-2 py-1"
          onClick={handleCopy}>Copy Text</button>
          <button className="bg-green-500 text-lg rounded-xl text-white flex items-center px-2 py-1"
          onClick={()=>settext("")}>Clear Text</button>
          <button className="bg-gray-700 text-lg rounded-xl text-white flex items-center px-2 py-1"
          onClick={removeExtraSpace}>Remove Extra Space</button>
         </div>
         <div className="flex flex-col gap-4 mt-4 -ml-[700px]">
          <h1 className="text-5xl font-semibold">Summery Of Your Text</h1>
          <p className="text-lg font-semibold">Nummber of words :{text.split(" ").length}</p>
          <p className="text-lg font-semibold">Number of charecters :{text.length}</p>
          <p className="text-lg font-semibold">Reading Time:{0.008*text.split(" ").length}</p>
         </div>
         <div className="w-full h-[200px] flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-semibold">Preview Document</h1>
          <textarea
          className="w-full h-full"></textarea>
         </div>
         
      </div>
      <div className="w-full h-20 bg-zinc-800 flex items-start justify-center text-white text-lg pt-6">Copyright@2021 | All Rights Reserved | by Amit kumar</div>
    </>
  )
}

export default Home