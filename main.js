const scriptURL = 'https://script.google.com/macros/s/AKfycbzMfl7qIomsZ8oIdCdIcRo3HcioAbkxNDjisRFtAjCZ2lygCAHKoATozdBkUFQ9AAHnNA/exec'
const form = document.forms['submit-to-google-sheet']
const theButton = document.getElementById("myButton")

async function getIp(){
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    return data;
};

form.addEventListener('submit', e => {
    e.preventDefault()
    //help with no double clicking
    theButton.disabled = true;

    var y = document.getElementById("txtHidden");

    getIp().then(function(data){
        let myJSON = JSON.stringify(data)
        y.value = myJSON;
        console.log("hello" + y.value);

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        //you can add zoom link here after there is a response but appears to be a delay
        .then(response => console.log(''))
        //consider adding zoom link anyways if error. 
        .catch(error => console.error('Error!', error.message))
        // add zoom link here. 
         window.open("https://adamsfarmcongregation.org/","_top")
    })
});

    
 
