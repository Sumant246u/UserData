import { useState } from "react"


export function Counter() {

const[count,setCount]=useState(0);

    const getBgcolor=()=>`rgb(${225-count*10},${255-count*10},255)`;


    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100" style={{ backgroundColor: getBgcolor() }}>
            <div className="bg-white p-4 rounded shadow text-center">
                <h1 className="mb-3">Counter: {count}</h1>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={()=>setCount(count+1)}>increment</button>
                    <button className="btn btn-danger" onClick={()=>setCount(count-1)}>Decrement</button>
                    <button className="btn btn-secondary" onClick={()=>setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}