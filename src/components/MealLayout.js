import React from 'react'
import Meal from './Meal'
import MealListContainer from '../containers/MealListContainer'
import Meat from './Meat'
import Stars from './Stars'
import Tabs from './Tabs'
import CommentBox from './CommentBox'

const MealLayout = ({isLogged, userData, time }) =>  {
    return (
      <div>
        <Meal />
        <MealListContainer />
        <Meat />
        <Stars />
        <Tabs />
        <CommentBox />
      </div>
    )
}

export default MealLayout
