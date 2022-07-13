import View from "./View"
import icons from "url:../../img/icons.svg"; 


class paginationView extends View {
    _parentEl= document.querySelector(".pagination");


    addHandlerClick(handler){
        //metode med input plassers i controller. Smood måte å endre ved inputs
        //parentEl er diven, benytter e.target.closetes(btn navn) for å finne cloeste verdien og setter på en dataset på de vi henter ut
        this._parentEl.addEventListener("click", function(e){
            const btn=e.target.closest(".btn--inline ")
            if (!btn) return
            const goToPage=+btn.dataset.goto
            handler(goToPage)
        })
    }

    _generateMarkup() {
        const numPages=Math.ceil(this._data.results.length/this._data.resultsPerPage)

        if (this._data.page===1 && numPages>1){
            return `<button data-goto=${this._data.page+1} class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page+1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button> `
        }

        if (this._data.page===1 && numPages<=1){
            return ``
        }
        if (this._data.page===numPages && numPages>1){
            //last page
            return `
            <button data-goto=${this._data.page-1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page-1}</span>
          </button>`
        }

        if (this._data.page<numPages){
            //all the other pages 
            return `
            <button data-goto=${this._data.page-1} class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page-1}</span>
              </button>
              <button data-goto=${this._data.page+1} class="btn--inline pagination__btn--next">
                <span>Page ${this._data.page+1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
              </button> `
        }
        
    }







}


export default new paginationView()
