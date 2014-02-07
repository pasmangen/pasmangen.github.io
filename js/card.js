var NUM_COLUMNS = 4;
var NUM_ROWS = 10;

var getData = function() {

    var birthplace = $('#birthplace').val().toLocaleLowerCase();
    console.log('birthplace='+birthplace);
    
    var childhoodFriend = $('#childhoodFriend').val().toLocaleLowerCase();
    console.log('childhoodFriend='+childhoodFriend);

    var schoolName = $('#schoolName').val().toLocaleLowerCase();
    console.log('schoolName='+schoolName);
    
    var cardName = $('#cardName').val().toLocaleLowerCase();
    console.log('cardName='+cardName);
    
    var data = '';
    data += md5(birthplace+cardName);
    data += md5(data);
    data += md5(childhoodFriend+cardName);
    data += md5(data);
    data += md5(schoolName+cardName);
    data += md5(data);
    data += md5(cardName+cardName);
    data += md5(data);

    console.log('data='+data);
    
    return data;
};

var generateCodesCard = function() {
    
    var codesCard = '';
    codesCard += '<table>';

    var cardName = $('#cardName').val() || 'PMG';
    codesCard += '<th colspan="'+(NUM_COLUMNS*2)+'">'+cardName.toUpperCase()+'</th>';
    
    var data = getData();
    
    var cel = 1;
    for ( var row = 0; row < NUM_ROWS; row++) {
        codesCard += '<tr>';
            for ( var col = 0; col < NUM_COLUMNS; col++) {
                codesCard += '<td class="cel"><strong>'+cel+'</strong></td>';

                var init = (cel-1)*4;
                console.log('init='+init);
                
                var subData = data.substr(init, 4);
                console.log('subData='+subData);
                
                codesCard += '<td>'+subData+'</td>';
                cel++;
            }
        codesCard += '</tr>';
    }
    
    codesCard += '</table>';
    
    $('#viewCodesCard').html(codesCard);
    
    $('.hiddenWithCodesCard').slideUp('slow', function() {    
        $('#viewCodesCard').slideDown('slow', function() {
            window.print();
        });
    });
    
};

// Document OnLoad
$(function() {

    $('#viewCodesCard').hide();
    $('#generate').on('click', generateCodesCard);
});
