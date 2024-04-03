import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

export const ExampleComponent1 = () => { 
    const { count, setCount } = useContext(CountContext);
    console.log('example component 1 rerendering..')
    return (
        <div className='my-5'>
             <span>Example Component 1 Value of Count : {count}</span><br/>
            <button className=' btn btn-info bg-red-700 text-white py-2 px-5 mt-3 border rounded-lg ' onClick={() => setCount(count+1)}>Click</button><br/>
        </div>
    )
  }
  