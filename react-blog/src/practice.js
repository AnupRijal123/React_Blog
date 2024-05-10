import {useState} from 'react';

function Practice(){
  // let name='ram';
  const[name,setName]=useState('ram');
  const [age,setAge]=useState(12);
  const handleClick=function(){
    // console.log('button1 clicked');
    // name='shyam'
    setName('shyam');
    setAge(20);
    
  }
// const handleClickAgain=function(a){
//   console.log('button2 clicked');
//   console.log('Hello '+a)
// }

    return(
       <div className="home-div">
         <p>Home component</p>
         <p>{name} is {age} years old</p>
         <button onClick={handleClick}>Click ME</button>
         {/* <button onClick={function(){
           handleClickAgain('ram')
          }
         }>Click me Again
         </button> */}
       </div>
    )
}

export default Practice;    