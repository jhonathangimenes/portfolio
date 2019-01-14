class PortfolioController {

    constructor() {
        
        this._menu = document.querySelector("#menu");
        this._menuOption = document.querySelector("[data-anime]");
        this.initialize();
        
    }

    initialize() {
        
        this.eventClick();

    }

    eventClick() {

        this._menu.addEventListener('click', e=>{

            let menuOptionClass = this._menuOption.classList.value;
            let result = menuOptionClass.split(" ");

            if(result[2] == null) {

                this._menuOption.classList.add('animate');

            }else if(result[2] == "animate") {
                
                this._menuOption.classList.remove('animate');

            }

        });

    }

}