class PortfolioController {

    constructor() {
        
        this._menu = document.querySelector("#menu");
        this._menuOption = document.querySelector("[data-anime]");
        this._menuIcone = document.querySelector("[data-option]");
        this._nameIcone = document.querySelectorAll("[data-name]");
        this.initialize();
        
    }

    initialize() {
        
        this.eventClick();
        this.eventMenu()

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

    eventMenu() {
        
        this._menuIcone.addEventListener('mouseover', e=>{
            alert("legal");
        });

    }

}