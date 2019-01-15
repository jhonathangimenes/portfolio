class PortfolioController {

    constructor() {
        
        this._menu = document.querySelector("#menu");
        this._menuOption = document.querySelector("[data-anime]");
        this._title = document.querySelectorAll("[data-title]");
        this.initialize();
        
    }

    initialize() {
        
        this.eventTitle();
        this.eventClick();

    }

    eventClick() {

        this._menu.addEventListener('click', e=>{

            let menuOptionClass = this._menuOption.classList.value;
            let result = menuOptionClass.split(" ");

            if(result[1] == null) {

                this._menuOption.classList.add('animate');

            }else if(result[1] == "animate") {
                
                this._menuOption.classList.remove('animate');

            }

        });

    }
    
    eventTitle(){
        setTimeout(()=>{
            this._title.forEach(e=>{
                e.classList.add('animate');
                console.log(e);
            })
        }, 300)
    }

}