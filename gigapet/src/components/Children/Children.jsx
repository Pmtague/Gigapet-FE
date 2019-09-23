import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//Helper util to request data with auth token of user
import axiosWithAuth from '../../utils/axiosWithAuth';
import Child from './Child'

import mockData from './mockdata'

//Container div to show all children for user
const ChildrenContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
//Children container is returned with all data for each child the user has access to
export default function Children(props) {

    //Set state of the current children for tracking what to display
    //initializd with a empty array while data loads
    const [ children, setChildren ] = useState([])

    //Axios request for data on children
    //Dep array tracks if the data for the children has changed
    useEffect(() => {
        // axiosWithAuth()
        // //TODO: need endpoint for getting children data
        // .get('')
        // .then(res => {
        //     //Request data on the children and set the state of the list of children to the response data
        //     setChildren(res.data)
        // }).catch(err => {
        //     //Log error response to console for now until error handling is decided
        //     console.log('There was an error getting the children data', err)
        // })
        setTimeout(()=>{
            setChildren(mockData)
        }, 1000)
    }, [children])

    return (
        <>
            {/* TODO: Does Gigapet go here? */}
            <h2>Your Children: </h2>
            <ChildrenContainer>
                {children.map((child, idx) => <Child key={idx} name={child.name} age={child.age} weight={child.weight}/>)}
            </ChildrenContainer>
        </>
    )
}