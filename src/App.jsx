import React, { useContext, useState } from 'react'
import CountContextProvider, {CountContext} from './contexts/CountContext';
import { ExampleComponent1 } from './components/Example1';
import { ExampleComponent2 } from './components/Example2';

const App = () => {
  return (
    
      <CountContextProvider>
    <div className='m-auto mt-5 text-center flex flex-col justify-center'>
      <div>Learn Context API</div>
          <ExampleComponent1 />
          <ExampleComponent2 />    
    </div>
      </CountContextProvider>

  )
}

export default App


