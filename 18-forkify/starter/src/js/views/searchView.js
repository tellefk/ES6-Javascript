
class searchView {
    #parentEl=document.querySelector(".search")
    getQuery() {
        const query=this.#parentEl.querySelector(".search__field").value
        this.clearSearch()
        return query
        }

    clearSearch() {
        return this.#parentEl.querySelector(".search__field").value=""
    }
    
    addHandlerSearch(handler) {
        this.#parentEl.addEventListener("submit", function(e) {
            e.preventDefault() //USED ON forms to prevent reload 
            handler()
        })
    }

}

export default new searchView()