import React, { Fragment } from 'react'

export const GridItem = ({img,title,id}) => {
    
    return (
        <Fragment >
            <div className="col animate__fadeIn animate__delay-2s">
        <div className="card">
             <img key={id} src={img} alt={title} />
        </div>
        </div>
        </Fragment>
    )
}
