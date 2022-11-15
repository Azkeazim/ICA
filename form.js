document.querySelector('#subscribe-submit').onclick = function(event){
    event.preventDefault();
    let name = document.querySelector('#subscribe-name').value;
    let email = document.querySelector('#subscribe-email').value;
    let message = document.querySelector('#subscribe-message').value;
    let data = {
        "name" : name,
        "email" : email,
        "message" : message,
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