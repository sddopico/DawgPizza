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
    $('button.setting').click(button_clicked);
    $('button.seeing').click(see_my_cookie);
});

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

    myCart = JSON.parse(cookie_val);
    console.log(cookie);
}