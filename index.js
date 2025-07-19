// const form = document.getElementById('form');
// const emailInput = document.getElementById('email');
// const nameInput = document.getElementById('name');
// const githubInput = document.getElementById('github-username');
// const emailWarning = document.getElementById('email-warning');
// const successMessage = document.getElementById('success-message');
// const fileInput = document.getElementById('fileInput');
// const warningClass = document.querySelector('.warning-class');

// document.addEventListener('submit', (e) => {
//     // console.log("File Input", fileInput);
//     const file = fileInput.files[0];
//     console.log(file);
//     if (!file) {
//         return;
//     }
//     const allowedTypes = ['image/jpeg', 'image/png'];
//     const maxSizeKB = 500;
//     // Validate file type
//     if (!allowedTypes.includes(file.type)) {
//         showWarning("Only JPG or PNG files are allowed.");
//         fileInput.value = ''; // reset input
//         return;
//     }
//     // Validate file size
//     const fileSizeKB = file.size / 1024;
//     if (fileSizeKB > maxSizeKB) {
//         showWarning("File size must be less than 500KB.");
//         fileInput.value = '';
//         return;
//     }

//     // e.preventDefault();

//     // const emailValue = emailInput.value.trim();
//     // const nameValue = nameInput.value.trim();
//     // const githubValue = githubInput.value.trim();

//     // const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

//     // // Hide warning and message by default
//     // emailWarning.style.display = "none";
//     // successMessage.style.display = "none";

//     // if (!isValidEmail) {
//     //     emailWarning.style.display = "block";
//     //     return;
//     // }
// });
// function showWarning(message) {
//     warningClass.querySelector('p').textContent = message;
//     warningClass.style.display = 'flex';
// }

// function hideWarning() {
//     warningClass.style.display = 'none';
// }

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const randnum = Math.floor(Math.random() * 100) + 10000;

function ticketGenerator() {
    let fileInput = document.getElementById("fileInput");
    let email = document.getElementById('email');
    const message = document.querySelector('.warning-class');
    const generateButton = document.getElementById("generate-button");
    const username = document.getElementById('username');
    const githubUsername = document.getElementById('github-username');

    if (!fileInput.value) {
        message.innerHTML = `<img src="assets/images/warning-sign.svg" alt="icon-info">
                             <p style="color: red">Please upload a file.</p>
                             `
        generateButton.classList.add("inactive");
    } else {
        const fileSize = fileInput.files[0].size;
        const minSize = 0;
        const maxSize = 2 * 1024 * 1024;
        if (fileSize > maxSize) {
            message.innerHTML = `<img src="assets/images/warning-sign.svg" alt="icon-info">
                             <p style="color: red"> File too large. Please upload a photo under 500KB.</p>
                            `
            generateButton.classList.add("inactive");
        } else if (fileSize == minSize) {
            message.innerHTML = `<img src="assets/images/warning-sign.svg" alt="icon-info">
                             <p style="color: red">Please upload a photo under 500KB.</p>
                             `
        } else {
            if (email.value && email.value.includes('@') == true) {
                const container = document.querySelector('.background-decorations');
                container.innerHTML = '';
                console.log("-------> ", container);
                const colDiv = document.createElement('div');
                colDiv.className = 'success-container';
                colDiv.innerHTML = `<img class="coding-logo" src="${fileInput.value}" alt="logo-full">
                                    <h1 class="main-heading">Congrats, ${username.value}! Your ticket is ready.</h1>
                                    <p>We've emailed your ticket to <span class="email">${email.value}</span> and will send updates in the run up to the event.
                                    </p>
                                    <div class="pattern-ticket">
                                        <div class="card-top">
                                        <img src="assets/images/logo-full.svg" alt="logo-full">
                                        <p>${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} / Austin TX</p>
                                        </div>
                                        <div class="card-bottom">
                                        <div class="user-image">
                                          <img src="assets/images/image-avatar.jpg" alt="image-avatar">
                                        </div>
                                        <div class="user-details">
                                         <p class="user-name">${username.value}</p>
                                            <div class="github-details">
                                             <img src="assets/images/icon-github.svg" alt="icon-github">
                                            <p> ${githubUsername.value}</p>
                                         </div>
                                         </div>
                                        </div>
                                        <div class="card-tag">
                                         <p>#${randnum}</p>
                                     </div>
                                    </div>
                `
                container.appendChild(colDiv);

            } else {
                message.innerHTML = '';
                const emailWarning = document.getElementById('email-warning');
                emailWarning.style.display = 'flex';
                const emailInput = document.querySelector('.email-container');
                emailInput.lastElementChild.style.marginBottom = '5px';
                generateButton.classList.add("inactive");
            }
        }
    }
}