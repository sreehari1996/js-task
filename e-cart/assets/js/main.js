$(document).ready(function(){
    AOS.init();
    var money = ['INR', 'AUD', 'EUR', 'JPY', 'USD', 'VND'];
    var first_element = document.getElementsByClassName('list')[0]; 
    money.forEach(function(currency, index) {
        var li = document.createElement('li');
        li.textContent = currency;
        li.setAttribute('data-id', index + 1); 
        first_element.appendChild(li); 
        li.addEventListener('click', function() {
            var selectedValue = this.textContent;
            document.querySelector('.rupees-toggle').innerHTML = selectedValue;
        });
    });
    $('.toggle-dropdown').on('click',function(){
       $('.toggle-icone i').toggleClass('fa-times');
    })
    var item_catagories = ['daily-offers','Gift Ideas','Beds','lighting','Storage','coffee & table','outdoor-furniture'];
    var catagoreis_list = document.getElementsByClassName('dropdown-catagories')[0];
    item_catagories.forEach(function(items){
        var a = document.createElement('a');
        a.textContent = items;
        $(a).addClass('dropdown-item');
        catagoreis_list.appendChild(a);
    })
    $('#owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    })
    $('#featured-slider').owlCarousel({
        loop: false,
        margin: 30,
        dots: true,
        nav: true,
        items:5,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    })
    $('.sales-sliders').owlCarousel({
        loop: false,
        margin: 30,
        dots: true,
        nav: true,
        items:5,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        onInitialized: function(event) {
           
            $(event.target).find('.owl-nav button.owl-prev, .owl-nav button.owl-next').addClass('ssfdisabled');
        }
    })
 
    $('#brand-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        items: 10,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    })
    $('#brand-slider').find('.owl-nav').removeClass('disabled');
    $('#brand-slider').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });
    var target_date = new Date().getTime() + (1000*3600*48);
    var days, hours, minutes, seconds;
    var counthours = document.getElementById("hours");
    var countminutes = document.getElementById("minutes");
    var countseconds = document.getElementById("secs");
    getCountdown();
    setInterval(function () { getCountdown(); }, 1000);
    function getCountdown(){
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
        days = pad( parseInt(seconds_left / 86400) );
        seconds_left = seconds_left % 86400;
        hours = pad( parseInt(seconds_left / 3600) );
        seconds_left = seconds_left % 3600;
        minutes = pad( parseInt(seconds_left / 60) );
        seconds = pad( parseInt( seconds_left % 60 ) );
        counthours.innerHTML = hours;
        countminutes.innerHTML=minutes;
        countseconds.innerHTML=seconds;
    }
    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }
    function addcart() {
        var clickedIds = []; // Array to store clicked dataid values
        $('#featured-slider .owl-stage-outer .owl-stage .item .add-cart .btn').each(function(index) {
            var dataIdValue = "dataid_" + index;
            $(this).attr('dataid', dataIdValue);
            $(this).on('click', function() {
                var dataId = $(this).attr('dataid');
                if (clickedIds.includes(dataId)) {
                    return;
                }
                clickedIds.push(dataId);
                var cartCountElement = $('.cart-count');
                var currentCount = parseInt(cartCountElement.text()) || 0;
                var newCount = currentCount + 1;
                cartCountElement.text(newCount);
            });
        });
    }
    addcart();
    function onsale(){
        var salecart = [];
        $('#sales-slider .owl-stage-outer .owl-stage .add-cart .btn').each(function(index){
            var sales_dataId = 'dataid_' + index;
            $(this).attr('dataid',sales_dataId);
            $(this).on('click',function(){
                var dataid = $(this).attr('dataid');
                if(salecart.includes(dataid)){
                    return;
                }
                salecart.push[dataid];
                var salescartcount = $('.cart-count');
                var salescurrentcount = parseInt(salescartcount.text()) || 0;
                var newsalescount = salescurrentcount + 1;
                salescartcount.text(newsalescount);
            })
        })
    }
    onsale();
})


