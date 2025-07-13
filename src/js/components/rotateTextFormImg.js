export function rotateTextFormImg() {
   
    let imgText = document.querySelector("#paphos-form__img-text");
    let deg = 0;

    if(!imgText){return null}

    let anim = setInterval(function(){
        imgText.style.cssText=`transform: rotate(${deg}deg);`
        deg = deg + 0.1;

        if(Math.ceil(deg) == 360) {
            // clearInterval(anim);
            deg = 0
        }
    },50)

};
rotateTextFormImg()