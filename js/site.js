var myCart = {}; 
myCart = {
    "name": "",
    "address1": "",
    "zip": "",
    "phone": "",
    "items": [
        {
            "type": "",
            "name": "",
            "size": ""
        }
    ]
};

$(document).ready( function () {
    getElementsMeat();
    renderMeat();
    getElementsVeg();
    renderVeg();
    getElementsDrinks();
    renderDrinks();
    $('button.setting').click(button_clicked);
    $('button.seeing').click(see_my_cookie);
});

function getElementsMeat() {
    com.dawgpizza.menu.template = $('#meat-template').html();
    com.dawgpizza.menu.$container = $('section.meat');
}

function renderMeat() {
    var templated_data = _.template(com.dawgpizza.menu.template, com.dawgpizza.menu);
    com.dawgpizza.menu.$container.html(templated_data);
}

function getElementsVeg() {
    com.dawgpizza.menu.templateVeg = $('#veg-template').html();
    com.dawgpizza.menu.$containerVeg = $('section.veg');
}

function renderVeg() {
    var templated_dataVeg = _.template(com.dawgpizza.menu.templateVeg, com.dawgpizza.menu);
    com.dawgpizza.menu.$containerVeg.html(templated_dataVeg);
}

function getElementsDrinks() {
    com.dawgpizza.menu.templateDrinks = $('#extras-template').html();
    com.dawgpizza.menu.$containerDrinks = $('section#extras');
}

function renderDrinks() {
    var templated_dataDrinks = _.template(com.dawgpizza.menu.templateDrinks, com.dawgpizza.menu);
    com.dawgpizza.menu.$containerDrinks.html(templated_dataDrinks);
}

function getElementsDesserts() {
    com.dawgpizza.menu.templateDesserts = $('#extras-template').html();
    com.dawgpizza.menu.$containerDesserts = $('section#extras');
}

function renderDesserts() {
    var templated_dataDesserts = _.template(com.dawgpizza.menu.templateDesserts, com.dawgpizza.menu);
    com.dawgpizza.menu.$containerDesserts.html(templated_dataDesserts);
}

function button_clicked() {
    var $this = $(this);
    var name = $this.data('name');
    var type = $this.data('type');
    var size = $this.data('size');
    myCart.items.push(name);
    myCart.items.push(type);
    myCart.items.push(size);
    var cookie_string = JSON.stringify(myCart);
    document.cookie = 'cookiekey=' +cookie_string + '; max-age=3600; path=/; domain=';
}

function see_my_cookie() {
    var cookie_array = document.cookie.split('; ');  
    var cookiekey = 'cookiekey=';
    var cookie_val;
    for (var i = 0; i < cookie_array.length; i++) {
        if (cookie_array[i].substring(0, cookiekey.length) == cookiekey) {
        cookie_val = cookie_array[i].substring(cookiekey[i].length);
        }
    }

    items = JSON.parse(cookie_val);
    console.log(cookie);
}











