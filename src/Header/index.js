var timer1, positions, wrapper, images, slider;
var tab=[];

document.addEventListener('DOMContentLoaded', function(){
    positions = [];
    wrapper = document.querySelector("#el1_slider-element");
    images = document.querySelectorAll('.el1_image');
    for (let i=0;i<images.length;i++){
        images[i].style.left=100*i+'%';
        positions.push('-'+images[i].style.left);
    }
    
    slider = (counter=0, dir=null) => {
        if(counter===images.length-1){
            dir = 'ahead';
        } 
        if (counter===0){
            dir = 'back';
        }
        wrapper.style.left = positions[counter];
        tab.forEach((item)=>{item.classList.remove('active')})
        if(tab[counter]){tab[counter].classList.add('active')};
        if (dir==='back'){
            counter++;
        } else {
            counter--;
        }
        timer1=setTimeout(()=>{
            slider(counter, dir);
        }, 10000);
    }
    slider();
});

document.addEventListener('DOMContentLoaded', function(){   
    let iter = images.length;
    var switcher = document.querySelector('.el1_slider-switch_list');
    for(let i=0;i<iter;i++){
        createSwitchButton(i);
    }

    function createSwitchButton(i){
        let li = document.createElement('li');
        li.classList.add('el1_switcher');
        switcher.appendChild(li);
        tab[i]=li;
        li.addEventListener('click', function(){
            clearTimeout(timer1);
            wrapper.style.left=positions[i];
            slider(i);
            tab.forEach((item)=>{item.classList.remove('active')})
            li.classList.add('active');
        })
    }
});
