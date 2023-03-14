import React, {useEffect, useState} from 'react';

const App = () => {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        localStorage.setItem('counter', JSON.stringify(counter) )
    },[counter])

    useEffect(()=>{
        let valueAsString=localStorage.getItem('counter')
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    },[])

    const incHandler = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
};

export default App;


// import React, {useState} from 'react';
//
// const App = () => {
//     const [value, setValue] = useState(0)
//     const incHandler = () => {
//         setValue(value + 1)
//     }
//     const setToLocalStorageHandler = () => {
//         localStorage.setItem('counterValue', JSON.stringify(value))
//         localStorage.setItem('counterValue+1', JSON.stringify(value+1))
//     }
//     const getFromLocalStorageHandler = () => {
//         let valueAsString =  localStorage.getItem('counterValue')
//         if (valueAsString) {
//             let newValue = JSON.parse(valueAsString)
//             setValue(newValue)
//         }
//     }
//     const clearLocalStorage = ()=>{
//         localStorage.clear()
//         setValue(0)
//     }
//     const removeItemFromLocalStorage= ()=> {
//         localStorage.removeItem('counterValue+1')
//     }
//     const setToSessionStorageHandler = () =>{
//         sessionStorage.setItem('sessionCounter', JSON.stringify(value-1))
//     }
//     const getFromSessionStorageHandler=()=>{
//        let sesSt =  sessionStorage.getItem('sessionCounter')
//         if(sesSt){
//             let newValue = JSON.parse(sesSt)
//             setValue(newValue)
//         }
//     }
//     return (
//         <div className='App'>
//             <h1>{value}</h1>
//             <button onClick={incHandler}>inc</button>
//             <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
//             <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
//             <button onClick={clearLocalStorage}>clearLocalStorage</button>
//             <button onClick={removeItemFromLocalStorage}>removeItemFromLocalStorage</button>
//             <button onClick={setToSessionStorageHandler}>setToSessionStorageHandler</button>
//             <button onClick={getFromSessionStorageHandler}>getFromSessionStorageHandler</button>
//
//         </div>
//     );
// };
//
// export default App;