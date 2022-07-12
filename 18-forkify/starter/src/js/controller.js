import * as model from "./model"
import recipeView from "./views/recipeView";
import "core-js/stable"
import "regenerator-runtime/runtime"


// const recipeContainer = document.querySelector('.recipe');

const controllRecipes = async function () {
  try {
    const id=window.location.hash.slice(1); //finds the hash at the end of the url 
    if (!id) return
    recipeView.renderSpinner()
    await model.loadRecipe(id)
    // const recipe=model.state.recipe is the same as the below
    const {recipe}=model.state
    recipeView.render(recipe)
  }catch (e) {
    console.log("ERROR AT controller.js")
    recipeView.renderError()
  }
}

//publisher subscriber method
const init=function(){
  recipeView.addHandlerRender(controllRecipes)
}

init()
