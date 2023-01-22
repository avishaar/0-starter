import React from 'react';
import RecipeTitle from './components/RecipeTitle'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions';
import './index.css'

const App = () => {
    return (
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle />
            <Ingredients />
            <Instructions />
        </article>
    )
}

export default App;