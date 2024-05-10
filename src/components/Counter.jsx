import React, { useState } from 'react'
import { useSelector,useDispatch }  from 'react-redux'
import { decrement,reset,increment,incrementByAmount } from '../redux/counterSlice'



const Counter = () => {
    const [amount,setAmount]=useState(0)
    const dispatch=useDispatch()
    const {count}=useSelector(state=>state.counterReducer)
    const handleAmountIncrement=()=>{
        if(amount){
            dispatch(incrementByAmount(parseInt(amount)))
            // use dipatch
        }
        else{
            alert("Please enter an amount to increment..!!")
        }
    }
return (
<div>
<h1 className='text-center '>Counter App</h1>
<div style={{width:'800px'}} className="border border-success p-5 rounded mt-5 ">
<h1 style={{fontSize: '80px'}} className='text-center '>{count}</h1>
<div className="d-flex justify-content-around align-items-center mt-3 w-100">
<button onClick={()=>dispatch(decrement())}className="btn btn-warning">DECREMENT</button>
<button onClick={()=>dispatch(reset())}className="btn btn-danger ">RESET</button>
<button onClick={()=>dispatch(increment())} className="btn btn-success"  >INCREMENT</button>
</div>
<div className="d-flex justify-content-between align-items-center mt-5 w-100">
<input onChange={e=>setAmount(e.target.value)} type="text" className="form-control" placeholder='Incremented Counter Amount' />
<button onClick={handleAmountIncrement} className="btn btn-primary ms-2">INCREMENT BY AMOUNT</button>
</div>
</div>
</div>
)
}
export default Counter
