

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (username === 'Raghava' && password === '1111') {
        // Hide login page -----> show home page
        document.getElementById('log-in_page').style.display = 'none';
        document.getElementById('home-page').style.display = 'block';
    } else {
        alert('Invalid Credentials');
    }
}

//show the register form page
function showRegisterForm() {
    // Hide login page ------> show register page
    document.getElementById('log-in_page').style.display = 'none';
    document.getElementById('register_page').style.display = 'block';
}

// // Function to return to the login page (optional, if needed)
// function showLoginPage() {
//     // Hide register page and home page, show login page
//     document.getElementById('register_page').style.display = 'none';
//     document.getElementById('home-page').style.display = 'none';
//     document.getElementById('log-in_page').style.display = 'block';
// }


// function fetchData(){
//     const name = document.getElementById('rname').value;
//     const gender = document.getElementById('radio').value;

//     if(name && gender){
//         console.log('name');
//         comsole.log('gender');

//         alert('Registration Successful')
//     } else {
//         alert('Please fill the form');
//     }
// }


function fetchData() {
    const name = document.getElementById('rname').value;
    const genderElements = document.getElementsByName('gender');
    let gender = '';
    const date = document.getElementById('date').value;
    const subject = document.getElementById('subject').value;
    

    // Get the selected gender from the radio buttons
    for (const element of genderElements) {
        if (element.checked) {
            gender = element.value;
            break;
        }
    }

    // Validate the inputs
    if (name && gender) {
        console.log(`Name: ${name}`);
        console.log(`Gender: ${gender}`);
        console.log(`Date: ${date}`);
        console.log(`Subject: ${subject}`);
        
        alert('Registration Successful');
    } else {
        alert('Please fill out all required fields.');
    }
}
