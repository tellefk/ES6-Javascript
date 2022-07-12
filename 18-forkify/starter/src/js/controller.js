import * as model from "./model"
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsViews from "./views/resultsViews";
import "core-js/stable"
import "regenerator-runtime/runtime"

if (module.hot){
  module.hot.accept();
}

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


const controllSearchResult =async function (){
  try {
    const query=searchView.getQuery()
    if (!query) return
    await model.loadSearchResults(query)
    if(model.state.search.results.length===0){
      resultsViews.renderError()
      return
    }
    resultsViews.renderSpinner()
    model.state.search.results.map(result=>(
      resultsViews.render(result)
    ))
  }catch(err){
    console.log(err)
    recipeView.renderError()
  }
}



//publisher subscriber method
const init=function(){
  recipeView.addHandlerRender(controllRecipes)
  searchView.addHandlerSearch(controllSearchResult)

}

init()

