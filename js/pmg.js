var GENERATED_PASSWORD_LENGTH = 32;

$(document).ready(function() {

  $('#generate').click(function(){

      var account = $('#account').val();
      console.log('account='+account));

      var user = $('#user').val();
      console.log('user='+user);

      var password = $('#password').val();
      console.log('password='+password);

      var code = $('#code').val();
      console.log('code='+code);

      var data = account+user+password+code;
      console.log('data='+data);

      var dataMd5 = md5(data);
      console.log('dataMd5='+dataMd5);

      var generatedPassword = dataMd5.substr(0, GENERATED_PASSWORD_LENGTH);
      console.log('generatedPassword='+generatedPassword);

      $('#genpass').text(generatedPassword);
  });
});