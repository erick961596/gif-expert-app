

import React, { Fragment, useState } from 'react';
import  PropTypes  from 'prop-types';


export const AddCategory = ( {setcategories} ) => {

const [inputValue, setinputValue] = useState('')


const handledCahnegeInout =(e)=>{

    console.log(e.target.value);
    setinputValue(e.target.value);

}

const submitHandeler =(e)=>{

e.preventDefault();

if(inputValue.trim().length >2){
    setcategories( cats=>[ inputValue, ...cats] );
    setinputValue('');
}

}

    return (
        <Fragment>

            <form onSubmit={submitHandeler}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handledCahnegeInout}

                />

            </form>
             
        </Fragment>
    )


    
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired,
}
