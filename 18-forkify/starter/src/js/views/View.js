import icons from "url:../../img/icons.svg";  // path to icon folder with the dist folder 

export default class View {
    _errorMessage="We could not find the recipe"
    _message=""

    render(data){
        this._data=data
        const markup=this._generateMarkup()
        this._clear()
        this._parentEl.insertAdjacentHTML("afterbegin", markup)
    }
    _clear(){
        this._parentEl.innerHTML=""
    }

    update(data){
    this._data = data;
    const newMarkup = this._generateMarkup();
    //creates a virutal dom sammenligner newdom med gamle dom. Updater kun det som er endra fra lista 
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll(`*`));
    const curElements = Array.from(this._parentEl.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Updates changed TEXT
      if (
          //finner om newEl er ikke lik curEl, altså endret dom
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('💥', newEl.firstChild.nodeValue.trim());
        //else finner curElTextcontent og setter den gamle lik den nye
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUES
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

    renderError(message=this._errorMessage){
        const markup=`
        <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`
      this._clear()
      this._parentEl.insertAdjacentHTML("afterbegin", markup)
    }

    renderMessage(message=this._message){
        const markup=`
        <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`
      this._clear()
      this._parentEl.insertAdjacentHTML("afterbegin", markup)
    }
    renderSpinner(){
        const markup=`
        <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
        </div> 
        `
        this._parentEl.innerHTML = ``
        this._parentEl.insertAdjacentHTML("afterbegin",markup)
        }

}