const btn = document.querySelector('.signin-btn');

//USETHIS CODE BLOCK TO CONNECT WITH YOUR MONGO DB 


// function getData(event) {
//     event.preventDefault(); 
//     const email = document.querySelector('.email').value;
//     const password = document.querySelector('.password').value;

//     console.log('Sending request with email:', email);


// fetch('http://localhost:3000/customer/login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, password })
// })
// .then((res) => {
//     if (res.status === 200) {
//         return res.json();
//     } else {
//         throw new Error('Invalid credentials');
//     }
// })
// .then((data) => {
//     window.location.href = "../LandPage/index.html";
// })
// .catch((error) => {
//    alert("Invalid credentials")
// });
// }
// btn.addEventListener('click', getData);

//USE THIS BLOCK CODE TO HARDCODE THE VALUES


function getData(event) {
    event.preventDefault(); 
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    console.log('Sending request with email:', email);
    if(email==="cheedallatejasrinivas@gmail.com" && password == "TejaSrinivas"){
        window.location.href = "../LandPage/index.html";
    }
    else if(email==="udaykirangulla@gmail.com" && password == "UdayKiran"){
        window.location.href = "../LandPage/index.html";
    }
    else if(email==="maddelakumarbalasai@gmail.com" && password == "Kumar"){
        window.location.href = "../LandPage/index.html";
    }
    else{
        alert("Invalid Credentials");
    }

    }

btn.addEventListener('click', getData);
