import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';
import Navbar from './Navbar';


class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Recipe
          title="Pasta"
          ingredients={['flour', 'water']}
          instructions="Mix ingredients"
          img="pasta1.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
