import * as model from "./model"
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsViews from "./views/resultsViews";
import paginationView from "./views/paginationView ";
import addRecipeView  from "./views/addRecipeView ";
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
    resultsViews.update(model.getSearchResultsPage())
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
    controllPagination()


    // model.state.search.results.map(result=>(
    //   resultsViews.render(result)
    // ))
  }catch(err){
    console.log(err)
    recipeView.renderError()
  }
}


const controllPagination=async function(goToPage=model.state.search.page){
  resultsViews.renderSpinner()
  resultsViews.render(model.getSearchResultsPage(goToPage))
  paginationView.render(model.state.search)
}



const controllServings=function(newServing){
  try {
    model.updateServings(newServing)
    recipeView.update(model.state.recipe)
  }catch(e){
    recipeView.renderError()
  }

}



const controllAddbookmark=function(){
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe)
  }else if (model.state.recipe.bookmarked) {
    model.deleteBookmark(model.state.recipe.id)}
  recipeView.update(model.state.recipe)
}

//publisher subscriber method handles events from controller, events happend on the view
const init=function(){
  recipeView.addHandlerRender(controllRecipes)
  searchView.addHandlerSearch(controllSearchResult)
  paginationView.addHandlerClick(controllPagination)
  recipeView.addHandlerUpdate(controllServings)
  recipeView.addHandlerAddBookmark(controllAddbookmark)
  addRecipeView

}

init()




