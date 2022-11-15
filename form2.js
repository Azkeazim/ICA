document.querySelector('#subscribe-submit-2').onclick = function(event){
    let nameTwo = document.querySelector('#subscribe-name-2').value;
    let emailTwo = document.querySelector('#subscribe-email-2').value;
    let messageTwo = document.querySelector('#subscribe-message-2').value;
    let data = {
        "nameTwo" : nameTwo,
        "emailTwo" : emailTwo,
        "messageTwo" : messageTwo,
    }
    req('', 'post', login, data);

    function login(result) {
        console.log(result);
        if(result == 2){
            alert('Fill the form');
        }
        else if(result == 1) {
            alert('Success');
        }
        else {
            alert('Error');
        }
    }

}

