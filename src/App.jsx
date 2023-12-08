import { CgMathDivide } from "react-icons/cg";
import { HiMiniXMark } from "react-icons/hi2";
import { CgMathMinus } from "react-icons/cg";
import { CgMathEqual } from "react-icons/cg";
import { FaPercentage } from "react-icons/fa";
import { CgMathPlus } from "react-icons/cg";
import { TbMath1Divide2 } from "react-icons/tb";
import { useRef } from "react";
// import { Result } from "postcss";
import { TbMath1Divide3 } from "react-icons/tb";





export default function App() {
  let result= ''
  let press=''
  let y=''
  let s =''
  let sp =''
  let sp1=''
  let myref1 = useRef()
  let myref2=useRef()
  function del(){
    result = result.slice(0,-1)
    
    
    
    myref1.current.value=result
  }
  function equal(){
    s = eval(result)
    console.log(s);
    if(s==undefined ){
      myref2.current.value='Please Enter Number'
    }
    else{
      // console.log(s);
      myref2.current.value = ''
      // console.log(s);
      myref2.current.value = s
      result=''
    }
    
   

    
  }
  function reset (){
    myref2.current.value = ''
    result = ''
    myref1.current.value = result
  }
  function mathmatic(x){
    
    
    result +=x
    myref1.current.value = result
    console.log(result);
  }
  function taghsim(){
    sp = result/2
    result = ''
    myref2.current.value=sp
  }
  function taghsim3(){
    
    sp1 = result/3
    result = ''
    myref2.current.value=sp1
    

  }
  return (
    <div className="bg-gradient-to-r from-[#707070] to-[#4B4B4B]">
      <div className="container mx-auto ">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="lg:w-[25%] flex-wrap flex justify-center w-full h-screen lg:rounded-2xl lg:h-[450px] bg-gradient-to-b from-[#1F242B] to-[#10151B] ">

            <div className="w-full h-[12%] " >
              <div className="flex justify-center  p-3 relative" >
                
                <h1 className="font-yek tracking-[20px] uppercase text-xl  text-white">calculator</h1>
              </div>
            </div>
            <div className="w-full h-[15%]   px-5">
              <div className="w-full h-[100%] flex justify-center flex-wrap items-end content-end">
                <div className="w-full ">
                 <input type="text" name="" id="" placeholder="00" className="w-full pointer-events-none	 text-4xl text-right bg-transparent text-[white] text-[#9CA3AF]"  ref={myref1} />
                </div>
                <div className="w-full select-none	">
                  <input type="text" className="w-full select-none pointer-events-none	 bg-transparent h-[50%] text-right text-3xl text-white placeholder:text-white" placeholder="0" ref={myref2}  />
                </div>
               
                
                <hr className="w-[90%] rounded-full h-[2px] opacity-20 flex border-none bg-[#797979] text-[#1C2226]" />
                <br />
              </div>
              

            </div>
            <br />
            
            <div className="w-full fsm:w-[90%] h-[53%]  px-10 lg:px-5">
              <div className="flex justify-around">
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939]  active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black] text-lg font-bold  lg:text-lg text-[#F8FBFD]" onClick={()=>mathmatic('1')} >1</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold  lg:text-lg text-[#F8FBFD]" onClick={()=>mathmatic('2')} >2</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold  lg:text-lg text-[#F8FBFD]" onClick={()=>mathmatic('3')} >3</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold  lg:text-lg text-[#F8FBFD] flex justify-center items-center ms-5" onClick={()=>mathmatic('/')}><CgMathDivide />
</button>

              </div>
              <div className="flex justify-around mt-4">
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939]  active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black] text-lg font-bold  lg:text-lg text-[#F8FBFD]" onClick={()=>mathmatic('4')} >4</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold  lg:text-lg text-[#F8FBFD]" onClick={()=>mathmatic('5')} >5</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold lg:text-lg text-[#F8FBFD]"  onClick={()=>mathmatic('6')} >6</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black] text-lg font-bold lg:text-lg text-[#F8FBFD] flex justify-center items-center ms-5" onClick={()=>mathmatic('*')}><HiMiniXMark /></button>

              </div>
              <div className="flex justify-around mt-4">
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939]  active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black] text-lg font-bold lg:text-lg text-[#F8FBFD]"onClick={()=>mathmatic('7')} >7</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold lg:text-lg text-[#F8FBFD]"onClick={()=>mathmatic('8')} >8</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold lg:text-lg text-[#F8FBFD]"onClick={()=>mathmatic('9')} >9</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold  lg:text-lg text-[#F8FBFD] flex justify-center items-center ms-5" onClick={()=>mathmatic('-')}><CgMathMinus /></button>

              </div>
              <div className="flex justify-around mt-4">
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939]  active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black] text-lg font-bold lg:text-lg text-[#F8FBFD]" onClick={()=>mathmatic('.')} >.</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold lg:text-lg text-[#F8FBFD]" onClick={()=>mathmatic('0')} >0</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-sm font-bold lg:text-lg text-[#F8FBFD] bg-[#871F1F]" onClick={()=>del()}>Del</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold lg:text-lg text-[#F8FBFD] flex justify-center items-center ms-5" onClick={()=>mathmatic('+')}><CgMathPlus />
</button>

              </div>
              <div className="flex justify-around mt-4">
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939]  active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black] text-lg font-bold lg:text-lg bg-[#858721] text-[#F8FBFD]" onClick={()=>reset()}>AC</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] flex justify-center items-center active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold lg:text-lg text-[#F8FBFD]" onClick={()=>taghsim()}><TbMath1Divide2 />
</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold lg:text-lg text-[#F8FBFD] flex justify-center items-center " onClick={()=>taghsim3()}><TbMath1Divide3 />
</button>
                <button className="w-12 h-12 lg:w-10 lg:h-10 rounded-full border-2 border-[#393939] active:border-white active:[box-shadow:0px_0px_0px_black] duration-100 [box-shadow:-7px_-5px_10px_#6b6b6b46,5px_5px_20px_black]  text-lg font-bold lg:text-lg text-[#F8FBFD] flex justify-center items-center ms-5 bg-[#21874B]" onClick={()=>equal()}><CgMathEqual />
</button>

              </div>

            </div>

          </div>






        </div>

      </div>

    </div>
  )
}