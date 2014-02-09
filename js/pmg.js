var GENERATED_PASSWORD_LENGTH = 24; // max 88
var CODES_CARD_CELLS = 40;

var removeLocalStorage = function() {

    Object.keys(localStorage).forEach(function(key){
       localStorage.removeItem(key);
    });
};

//removeLocalStorage();

var getObjectFromLocalStorage = function(objName) {
    var obj = localStorage.getItem(objName);
    if ( obj ) {
        obj = JSON.parse(obj);
    }
    return obj;
};

var setObjectToLocalStorage = function(objName, obj) {
    localStorage.setItem(objName, JSON.stringify(obj));
};

var accounts = getObjectFromLocalStorage('accounts') || [];
console.log('accounts=', accounts);

var users = getObjectFromLocalStorage('users') || [];
console.log('users=', users);

var sumCharCode = function(str) {
    
    var s = 0;
    for( var i = 0; i < str.length; i++ ) {
        s += str.charCodeAt(i);
    }
    return s;
};

var addAccount = function(account) {
    
    if ( $.inArray(account, accounts) ) {
        accounts.push(account);
        accounts.sort();
    }
    console.log('accounts=', accounts);
    setObjectToLocalStorage('accounts', accounts);
};

var addUser = function(user) {
    
    if ( $.inArray(user, users) ) {
        users.push(user);
        users.sort();
    }
    console.log('users=', users);
    setObjectToLocalStorage('users', users);
};

var calculateCoordenates = function(e) {
    e.preventDefault();

    var account = $('#account').val().toLocaleLowerCase();
    console.log('account='+account);
    
    addAccount(account);
    
    var user = $('#user').val().toLocaleLowerCase();
    console.log('user='+user);

    addUser(user);
    
    var data = (account+user);
    console.log('data='+data);
    
    var dataCode = sumCharCode(data);
    console.log('dataCode='+dataCode);
    
    var coordenate = dataCode % CODES_CARD_CELLS;
    console.log('coordenate='+coordenate);
    
    $('#calculateCoordenates').slideUp('slow', function() {
        $('#generatePassword').slideDown('slow');
    });
    
    $('#codeLabel').append('[<strong style="color: #00A352">'+coordenate+'</strong>]:');
};

var generatePassword = function(e) {
    e.preventDefault();

    var account = $('#account').val();
    console.log('account='+account);

    var user = $('#user').val();
    console.log('user='+user);

    var password = $('#password').val();
    console.log('password='+password);

    var code = $('#code').val();
    console.log('code='+code);

    var data = (account+user).toLowerCase()+code+password;
    console.log('data='+data);

    var hash = hashWrapper(data);
    console.log('hash='+hash);

    var generatedPassword = hash.substr(0, GENERATED_PASSWORD_LENGTH);
    console.log('generatedPassword='+generatedPassword);
    
    $('#generatePassword').slideUp('slow', function() {
        $('#viewPassword').slideDown('slow');
    });

    $('#genpass').text(generatedPassword);
};

var updateCopyButton = function() {

    $("#copy-button").clipboard({
        path: "lib/jquery.clipboard/jquery.clipboard.swf",
        copy: function() {
            var toCopy = $('#genpass').text();
            console.log('toCopy='+toCopy);
            return toCopy;
        }
    });
}

// Document OnLoad
$(function() {


    $('#coordenates').on('click', calculateCoordenates);
    $('#generate').on('click', generatePassword);
    $('#account').autocomplete({
      source: accounts
    });
    $('#user').autocomplete({
      source: users
    });
    //updateCopyButton();
});