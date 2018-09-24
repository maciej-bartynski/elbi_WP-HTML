import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var searchbtn = document.querySelector('#show-el0_searchbar');
    var searchfield = document.querySelector('.el0_searchbar');
    var searchclose = document.querySelector('.hid-el0_searchbar');
    searchbtn.addEventListener('click', function(){
        searchfield.classList.remove('hidden');
        searchbtn.classList.add('hidden');
    });
    searchclose.addEventListener('click', function () {
        searchfield.classList.add('hidden');
        searchbtn.classList.remove('hidden');
    });
});
