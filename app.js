const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.responseType='text';
xhr.onload = function() {
    let respObj = xhr.response;
    let obj = JSON.parse(respObj);
    let x = '';
    for (let i=0; i<obj.length; i++) {
        x = x+obj[i].email+'<br>';
        document.getElementById('emails').innerHTML=x;
    }
}

xhr.onerror = () => {
    console.log('Network Error')
}

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(
//         function(response) {
//             if (response.status !== 200) {
//                 console.log('Error');
//                 return
//             }
//             response.json().then(function(data) {
//                 let t = '';
//                 for (let e=0; e<data.length; e++) {
//                     t=t+data[e].username+'<br>';
//                     document.getElementById('users').innerHTML=t
//                 }
//             }
//         }
//     )

//     .catch(function(err) {
//         console.log('Error', err);
//     })