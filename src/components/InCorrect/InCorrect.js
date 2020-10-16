import React, {useEffect}from 'react'

function InCorrect(props){
    useEffect(() =>{
        setTimeout(() =>props.history.push('/play'), (5000))
    })
    return(
        <div>
            <h1>That was wrong!</h1>
        </div>
    )
}

export default InCorrect
