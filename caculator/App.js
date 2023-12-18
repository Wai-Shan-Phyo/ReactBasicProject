import { useState } from "react";
import Buttons from "./component/Buttons";
import Input from "./component/Input";
import Output from "./component/Output";

function App() {
  const [input,setInput]=useState(0);
  const [output,setOutput]=useState(0);
  const caculate=(value)=>{
    
    switch(value){
      case 'C'  : setOutput(0)
                  setInput(0)
                  break;
      
      case 'AC' :if(input.length==1 || input == 0){
        setInput(0)
      }else{
         setInput(input.slice(0,input.length-1));
      }
      break;
     
                 
                
      case '=' : try{
        setInput(0)
        setOutput(eval(input))
        
      } catch(e){
        setOutput(e.message)
      }
      break;
    default:input == 0 ? setInput(value) : setInput(input+value);
            break;
    }
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-700">
      <div className="w-full h-full md:h-auto md:w-1/3 mx-auto bg-gray-800 ">
        <Input input={input} />
        <Output output={output}/>
        <Buttons caculate={caculate} />
      </div>
    </div>

  );
}

export default App;
