import {API_URL} from "./config.js"
import {getJson} from "./helpers.js"


export const state={
    recipe:{}
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
            rank: recipe.social_rank
        }
    }catch(err) {
        console.log("ERROR AT model.js")
        throw err // throw down to controller to call the render 
    }
    
}



export const loadSearchResults=async function (query){
    try {
        

    }catch(err){
        throw err
    }
}






