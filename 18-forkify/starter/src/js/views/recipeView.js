import icons from "url:../../img/icons.svg";  // path to icon folder with the dist folder 
import View from "./View"
//dont think we need to make all privat with the # 
class recipeView extends View {
    _parentEl= document.querySelector('.recipe') //make elements privat, cant see them and import them with inheritance
    _data;
    
    addHandlerRender(handler){
        window.addEventListener("hashchange", handler)
        window.addEventListener("load", handler)   
    }

    addHandlerAddBookmark(handler){
        this._parentEl.addEventListener("click",function(e){
            const bnt=e.target.closest(".btn--round")
            if (!bnt) return
            handler()

        })
    }

    // tyngre endrer hele siden, bedre å endre kun det som har blitt oppdatert.  
    //benytter da upadte i View 
    addHandlerUpdate(handler){
        this._parentEl.addEventListener("click",function(e){
            const btn=e.target.closest(".btn--tiny")
            if (!btn) return
            const servings=+btn.dataset.update
            handler(servings)
        })
        
    }
    _generateMarkup(){
        return `<figure class="recipe__fig">
        <img src=${this._data.image} alt="Tomato" class="recipe__img" />a
        <h1 class="recipe__title">
        <span>${this._data.title}</span>
        </h1>
        </figure>
        
        <div class="recipe__details">
        <div class="recipe__info">
        <svg class="recipe__info-icon"> 
        <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">45</span>
        <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
        <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
        
        <div class="recipe__info-buttons">
        <button data-update=${this._data.servings-1} class="btn--tiny btn--dencrease-servings">
        <svg>
        <use href="${icons}#icon-minus-circle"></use>
        </svg>
        </button>
        <button data-update=${this._data.servings+1} class="btn--tiny btn--increase-servings">
        <svg>
        <use href="${icons}#icon-plus-circle"></use>
        </svg>
        </button>
        </div>
        </div>
        
        <div class="recipe__user-generated">
        <svg>
        <use href="${icons}#icon-user"></use>
        </svg>
        </div>
        <button class="btn--round">
        <svg class="">
        <use href="${icons}#icon-bookmark${this._data.bookmarked ? "-fill":""}"></use>
        </svg>
        </button>
        </div>
        
        <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(ing=>{
            return `
            <li class="recipe__ingredient">
            <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${(ing.quantity===null ? "":ing.quantity)}</div>
            <div class="recipe__description">
            <span class="recipe__unit">${ing.unit}</span>
            ${ing.description}
            </div>
            </li>`
        }).join('')}
        </ul>
        </div>
        
        <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
        </p>
        <a
        class="btn--small recipe__btn"
        href=${this._data.sourceUrl}
        target="_blank"
        >
        <span>Directions</span>
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
        </svg>
        </a>
        </div>`
        // this.parentEl.insertAdjacentHTML("afterbegin",markup)        
       
    }   
}

export default new recipeView()