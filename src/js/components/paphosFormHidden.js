import { event } from "jquery";

export function paphosFormHidden(){
    let inputTime = document.querySelector(".paphos-form-wrap input[type='time']");
    let hiddenInput = document.querySelector(".paphos-form-wrap textarea[name='hidden-text']");
    let numberInput = document.querySelector(".paphos-form-wrap input[type='number']");

    if(!inputTime || !hiddenInput) {return null};

    inputTime.addEventListener("change", ()=>{getData(inputTime.value)});

    function getData(data){
        let item = data;

        hiddenInput.value = item
    }

    if(!numberInput) {return null};

    numberInput.placeholder = "Гости"
    
};
paphosFormHidden();