import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

//Helper util to request data with auth token of user
import axiosWithAuth from '../../utils/axiosWithAuth';
import Meal from './Meal'
import mockData from './mockdata'

//Container div to show recent meals of all children
const MealContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
`
//Meal container is returned with all data for each recent meal of all children the user is tracking
export default function RecentMealsAllChildren(props) {

    //Set state of the current meals for tracking what to display
    //initializd with a empty array while data loads
    const [ meals, setMeals ] = useState(null)

    //Axios request for data on meals
    //Dep array tracks if the data for the meals has changed
    useEffect(() => {
        // axiosWithAuth()
        // //TODO: need endpoint for getting meal data
        // .get('')
        // .then(res => {
        //     //Request data on the meals and set the state of the list of meals to the response data
        //     setMeals(res.data)
        // }).catch(err => {
        //     //Log error response to console for now until error handling is decided
        //     console.log('There was an error getting the meal data', err)
        // })
    }, [meals])

    if (!meals) {
        return (
            <MealContainer>
                <h2>Recent Meals (all children): </h2>
                <Card header="Loading..."/>
            </MealContainer>
        )
    } else if (meals.length === 0) {
        return (
            <MealContainer>
                <h2>Recent Meals (all children): </h2>
                <Card header="There are no meals for your children. Add New meals."/>
            </MealContainer>
        )
    } else {
        return (
            <MealContainer>
                <h2>Recent Meals (all children): </h2>
                {meals.map((meal, idx) => <Meal key={idx} date={meal.date} child={meal.child} category={meal.category} mealType={meal.mealType} servings={meal.servings}/>)}
            </MealContainer>
        )
    }
}