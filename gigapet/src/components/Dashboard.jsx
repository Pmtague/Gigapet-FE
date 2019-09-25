import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchChildren } from '../store/actions'
import Children from './Children/Children'
import RecentMealsAllChildren from './RecentMealsAllChildren/RecentMealsAllChildren'
import Navigation from './Layout/Navigation'
import AddNewKidForm from './Forms/AddKid'


const MainContent = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 50px;
`

export default function Dashboard() {
  const { children } = useSelector(state => ({
    children: state.user.children
  }))
  const [shouldFetchChildrenData, setShouldFetchChildrenData] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChildren())
  }, [shouldFetchChildrenData])
  
  return (
    <>
    <Navigation />
    <MainContent>
      <AddNewKidForm triggerChildDataUpdate={setShouldFetchChildrenData} />
      <Children fetchChildData={shouldFetchChildrenData} children={children} />
      <RecentMealsAllChildren children={children} />
    </MainContent>
    </>
  );
}