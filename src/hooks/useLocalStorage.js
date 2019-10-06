import React, {useState} from 'react';

function useLocalStorage (key, initialValue){
    //key is used to store things in browser. 


    const [storedValue, setStoredValue] = useState(()=> {

        // the callback function in useState is going to be the initialValue. 

        // item is set to what is returned, what is stored to local storage. Code always remains the same 
        const item = window.localStorage.getItem(key);

        //if key has value itll return that else initialValue 

        //if item is available return item else return initialValue 
        return item ? JSON.parse(item) : initialValue;

    });

    const setValue = value => {
        setStoredValue(value);

        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue];

    

}