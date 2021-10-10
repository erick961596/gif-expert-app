import React, { Fragment, useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';

//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( {category} ) => {


    const {data:images,loading} = useFetchGifs( category );
    
    // const [images, setimages] = useState([])

    // useEffect(() =>{

    //    getGifs(category).then(  setimages );
    // }, [ category ])

     
    return (
        <Fragment>
            <h4 className="animate__animated animate__fadeIn animate__flash">{category}</h4>  
            <div className="row">
                { loading && "cargando..."}
            
              
            {
           
           images.map( (img) =>(
               
               <GridItem
               key={img.id}
                {...img} />
                
            )
            )
           
            } 

</div>
              

        </Fragment>
            
        
    )
}
