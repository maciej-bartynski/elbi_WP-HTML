document.addEventListener('DOMContentLoaded', function(){
    let imgs = document.querySelectorAll('.el1_image');
    let wrapper = document.querySelector("#el1_slider-element")
    let leng = imgs.length;
    let positions = [];
    for (let i=0;i<leng;i++){
        positions.push(i*-100);
    }
    
    setTimeout(()=>{left(leng-2)},8000);
    
    function left (x){
        slider(x);
        x--;
        if (x>0){
            setTimeout(()=>{left(x)}, 8000)
        } else {
            setTimeout(()=>{right(x)}, 8000)
        }
    }

    function right (x){
        slider(x);
        x++;
        if (x < leng-1) {
            setTimeout(()=>{right(x)}, 8000)
        } else {
            setTimeout(()=>{left(x)}, 8000)
        }
    }

    function slider(x){
        x=positions[x];
        wrapper.style.left=x+'%';
    }

});
