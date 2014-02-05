var getData1Md5 = function() {

    var birthplace = $('#birthplace').val();
    console.log('birthplace='+birthplace);
    
    var childhoodFriend = $('#childhoodFriend').val();
    console.log('childhoodFriend='+childhoodFriend);
    
    var data1 = birthplace+childhoodFriend;
    data1 = data1.toLocaleLowerCase();
    console.log('data1='+data1);
    
    var data1Md5 = md5(data1);
    console.log('data1Md5='+data1Md5);
};

var getData2Md5 = function() {

    var schoolName = $('#schoolName').val();
    console.log('schoolName='+schoolName);
    
    var driverLicense = $('#driverLicense').val();
    console.log('driverLicense='+driverLicense);
    
    var data2 = schoolName+driverLicense;
    data2 = data2.toLocaleLowerCase();
    console.log('data2='+data2);
    
    var data2Md5 = md5(data2);
    console.log('data2Md5='+data2Md5);
};

var generateCodesCard = function() {

    var codesCard = 'TO-DO';
    
    $('#generateCodesCard').slideUp('slow', function() {
        $('#viewCodesCard').slideDown('slow');
    });
    
    $('#viewCodesCard').html(codesCard);
};

// Document OnLoad
$(function() {

    $('#viewCodesCard').hide();

    $('#generate').on('click', generateCodesCard);
});