import {useState, userState} from "react"
export default function Test()
{
    const [userName, setUserName]=useState("John");
    const [userAge, setUserAge]=useState(24);
    
    const [userActive, setUserActive]=useState();
    const [userEducation, setUserEducation]=useState("mca");
    const [userNumber, setUserNumber]=useState(0);
    
    let name = "smith"; 
    const changeName =()=>
    {
        name = "John"
        console.log(name);
        setUserName("hello john smith")
    }
    
    const changeNumber =()=>
    {
      setUserNumber(userNumber+1);
        
    }
    const myNumber =()=>
    {
        
        setUserNumber(userNumber-1); 
    }

    return(
        <>
            <h1>Hello</h1>
            <h1>{userName}</h1>
            <h2>{userAge}</h2>
            <h2>{userEducation}</h2>
            <button onClick={changeName}>Change</button>
            <button onClick={changeNumber}>Increment</button>
            <span>0</span>
            <button onClick={myNumber}>Decrement</button>
        </>
    )
    
}