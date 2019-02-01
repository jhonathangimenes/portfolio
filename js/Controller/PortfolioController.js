class PortfolioController {

    constructor() {
        
        this._menu = document.querySelector("#menu");
        this._menuOption = document.querySelector("[data-anime]");
        this._title = document.querySelectorAll("[data-title]");
        this._section = document.querySelectorAll("[data-section]");
        this.initialize();
        
    }

    initialize() {
        
        this.eventTitle();
        this.eventClick();
        this.eventSection();

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

            });

        }, 300)

    }

    eventSection() {

        window.addEventListener('scroll', e=>{
            
            let windowTop = window.pageYOffset +((window.innerHeight * 3) / 4);
            
            this._section.forEach(e=>{
               
                if((windowTop) > e.offsetTop){
                    e.classList.add('animate');
                  
                    console.log("window"+ windowTop);
                    console.log("off"+ e.offsetTop);
                }
                
           });
             
        });

    }

}