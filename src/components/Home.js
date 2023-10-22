import React,{useState} from 'react'
import axios from 'axios'

function Home() {

    const [msg,setMsg]=useState('')

    let submit=async(e)=>{
        e.preventDefault()

        try{

            alert("Submitted")

            await axios.post("https://localhost:8000/",{
                msg
            })

        }

        catch(e){
            console.log(e)
        }
    }

  return (
    <div className='cont'>
        <form action='POST'>
            <textarea name="text" onChange={(e)=>{setMsg(e.target.value)}} placeholder='enter the text' cols="30" rows="10"></textarea>
            <input type="submit" onClick={submit} value="Submit"/>
        </form>
    </div>
  )
}

export default Home
