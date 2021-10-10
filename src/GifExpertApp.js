


import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState( ['Iron Man'] );


   const handledApp = ()=>{

        setcategories( [...categories, 'Nueva App']);
    }

    return (
        <Fragment>
            <h1>Gif Expert App </h1>

            <AddCategory  setcategories={setcategories} />
            <hr/>
       
            <ol>
                {
                categories.map( ( category) =>( 
                   // return <li key={category} > { category} </li>

                   <GifGrid key={category} category={category} /> 
                ))

                }
                
            </ol>

            </Fragment>
    )
}
