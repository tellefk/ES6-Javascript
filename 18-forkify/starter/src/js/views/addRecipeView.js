import View from "./View"
import icons from "url:../../img/icons.svg"; 


class addRecipeView extends View {
    _parentEl= document.querySelector(".upload");
    _window=document.querySelector(".add-recipe-window")
    _overlay=document.querySelector(".overlay")
    _btnOpen=document.querySelector(".nav__btn--add-recipe")
    _btnClose=document.querySelector(".btn--close-modal")

    constructor(){
        super()
        this.addHandlerShow()
        this.addHandlerHide()
    }

    toggleWindow(){
        this._overlay.classList.toggle("hidden")
        this._window.classList.toggle("hidden")
    }
    addHandlerShow(){
        this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))
            
    }
    addHandlerHide(){
        this._btnClose.addEventListener("click",this.toggleWindow.bind(this))
        this._overlay.addEventListener("click",this.toggleWindow.bind(this))
    }

    addHandlerUpload(){
        this._parentEl.addEventListener("submit",function(e){
            console.log("OK")
        })
    }

    _generateMarkup() {
        const numPages=Math.ceil(this._data.results.length/this._data.resultsPerPage)

        
    }

}


export default new addRecipeView()
