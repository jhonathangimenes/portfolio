class FormController {

    constructor() {
        /*
        this._displayForm = 0;
        this._firstDiv = document.querySelector("#firstDiv");
        this._secondDiv = document.querySelector("#secondDiv");
        this._thirtDiv = document.querySelector("#thirtDiv");
        this._backButton = document.querySelector("#back");
        this._nextButton = document.querySelector("#next");
        this._saveButton = document.querySelector("#save");
        this._form = document.querySelector("#form");
        this._nameInput = document.querySelector("#nameInput");
        this._lastNameInput = document.querySelector("#lastNameInput");
        this.buttonsEvents();
        
        */
        
        this.target = document.querySelectorAll('[data-anime]');
        this.initialize();
        this.scrollEvents();

    }

    initialize() {
        this.scrollEvents();
        this.event();
        
    }

    event() {
        setTimeout(function(){
            let dataTitulo = document.querySelectorAll('[data-titulo]');
            dataTitulo.forEach(element => {
                element.classList.add('animate');
            });
        }, 500);
    }

    scrollEvents() {
        window.addEventListener('scroll', function() {
            
            let windowTop = window.pageYOffset + window.innerHeight - 100;

            let target = document.querySelectorAll('[data-anime]');

            target.forEach(e=>{
                if(windowTop > e.offsetTop){
                    e.classList.add('animate');
                }
            });
             
        });
    }


    /*
    get displayForm() {
        return this._displayForm;
    }

    set displayForm(value) {
        this._displayForm = value;
    
    }
    
    buttonsEvents(){

        let button = document.querySelector("#button");

        button.addEventListener('click', e=>{

            let stringExemplo = e.toElement.className;
            let resultado = stringExemplo.split(" ", 1);

            if(resultado == "btn1"){
                this.displayForm --;
            }
            if(resultado == "btn2"){
                this.displayForm ++;
            }
            return this.initialize();
        });

        this._form.addEventListener('click', e=>{

            let input = e.toElement.className;
            console.log(input)
            let result = input.split(" ", 1);
            if(result == "input1"){
                this._nameInput.style.borderColor = "red";
                this._lastNameInput.style.borderColor = "#ced4da";
            }
            if(result == "input2"){
                this._nameInput.style.borderColor = "#ced4da";
                this._lastNameInput.style.borderColor = "red";
            }
        });
  
    }
    */


    
    /*
    nextForm(value) {

        switch(value){
            
            case 0:
                this._firstDiv.classList.add('animate');
                this._secondDiv.classList.remove('animate');
                this._thirtDiv.classList.remove('animate');

                this._nextButton.style.display = 'block';
                this._saveButton.style.display = 'none';
            break;
            case 1:
                this._firstDiv.classList.remove('animate');
                this._secondDiv.classList.add('animate');
                this._thirtDiv.classList.remove('animate');

                this._nextButton.style.display = 'block';
                this._saveButton.style.display = 'none'; 
            break;
            case 2:
                this._firstDiv.classList.remove('animate');
                this._secondDiv.classList.remove('animate');
                this._thirtDiv.classList.add('animate');

                this._nextButton.style.display = 'none';
                this._saveButton.style.display = 'block';
            break;

            default:
                alert("ERRO");
            break;
        }

    }
    */

}
