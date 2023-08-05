const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirmentList = document.querySelectorAll(".requirment-list li");

// an array of password requirments with corresponding
// regular expressions and index of the requirment list item
const requirments = [
    {regex: /.{8,}/, index:0}, //minimum of 8 characters
    {regex: /.[0-9]/, index:1}, // at least one number
    {regex: /.[a-z]/, index:2}, // at least one lowercase letter
    {regex: /.[^A-Za-z0-9]/, index:3}, // at least one special character
    {regex: /.[A-Z]/, index:4}, // at least one uppercase letter
]

passwordInput.addEventListener("keyup", (e)=> {
    requirments.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirmentItem = requirmentList[item.index];
        

        //updating icon of requirment item if requirment method or not
        if(isValid) {
            requirmentItem.firstElementChild.className = "fa-solid fa-check";
            requirmentItem.classList.add("valid")
        } else {
            requirmentItem.firstElementChild.className = "fa-solid fa-circle";
            requirmentItem.classList.remove("valid")
        }
    });
});

eyeIcon.addEventListener("click", () => {
    //toggle the password input type between "password" and "text"
   passwordInput.type = passwordInput.type === "password" ? "text" : "password";
   // update the eye icon classe based on the password input type
   eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});