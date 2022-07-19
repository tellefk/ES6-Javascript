import {API_URL} from "./config.js"
import {getJson} from "./helpers.js"
import {RESULT_PER_PAGE} from "./config.js"



export const state={
    recipe:{},
    search:{
        query:``,
        results:[],
        resultsPerPage:RESULT_PER_PAGE,
        page:1
    },
    bookmarks:[]
}

export const loadRecipe = async function(id){
    try {
        const url=`${API_URL}/${id}`
        const data=await getJson(url)
        const {recipe}=data.data
        state.recipe={
            id:recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            publisherUrl: recipe.publisher_url,
            sourceUrl:recipe.source_url,
            image:recipe.image_url,
            ingredients: recipe.ingredients,
            rank: recipe.social_rank,
            servings: recipe.servings
        }
        if (state.bookmarks.some(bookmark=>bookmark.id===id))
        state.recipe.bookmarked=true
        else state.recipe.bookmarked=false

    }catch(err) {
        console.log("ERROR AT model.js")
        throw err // throw down to controller to call the render 
    }
    
}



export const loadSearchResults=async function (query){
    try {
        state.search.query+=query
        const data=await getJson(`${API_URL}?search=${query}`);
        state.search.page=1
        state.search.results=data.data.recipes.map((recipe)=>{
            return {
                id: recipe.id, 
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url
            }
        })
    }catch(err){
        throw err
    }
}


export const getSearchResultsPage=function(page=state.search.page){
    state.search.page=page
    const start=(page-1)*state.search.resultsPerPage
    const end=page*state.search.resultsPerPage
    return state.search.results.slice(start,end)
}


export const updateServings=function(newServing){
    if (newServing<=0) return 
    state.recipe.ingredients.forEach((ing=>{
        ing.quantity=(ing.quantity*newServing)/state.recipe.servings
    }))
    state.recipe.servings=newServing
}


export const addBookmark=function(recipe){
    if (!state.bookmarks.some(bookmarkId=>bookmarkId===recipe.id))
        state.bookmarks.push(recipe)
    console.log(state.bookmarks)
    if (recipe.id===state.recipe.id) state.recipe.bookmarked=true
}


export const deleteBookmark=function(id){
    const index=state.bookmarks.findIndex(bookmark=>bookmark.id===id)
    state.bookmarks.splice(index,1)
    if(id===state.recipe.id) state.recipe.bookmarked=false
}



