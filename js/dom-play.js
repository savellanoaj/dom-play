//alert("hello from DOM play!");

const spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans){
    mySpan.addEventListener("click",function(ev){

        highlightActor(mySpan.dataset.actor);

    });
    //alert(mySpan.dataset.actor);
}

function highlightActor(actor){
    
    for(const mySpan of spans){
        if(actor == mySpan.dataset.actor){
            mySpan.style.backgroundColor='orange';
        } else{
            mySpan.style.backgroundColor='white';
        }
    }

    //alert("I'm " + actor);
}

function highlight(el){

    if(el.style.backgroundColor== 'orange'){
        el.style.backgroundColor='white';
    } else{
        el.style.backgroundColor='orange';
    }

}

function myAlert (){
    alert("I'm clicked!")
}

