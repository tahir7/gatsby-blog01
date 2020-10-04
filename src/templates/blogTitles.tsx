import React from 'react'

export const titleTemplate = ({pageContext: {data}}) => {
    console.log('pageContext  ', data);
    
    
    return( 
        
        <div> 
        
            <h2>{data.title}</h2>

            
        
        </div>

    

    );
}

export default titleTemplate;