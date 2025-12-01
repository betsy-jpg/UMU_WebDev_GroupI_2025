//DOM elements
const reserveBtn = document.getElementById('reserveBtn');
const singInModal = document.getElementById('signInModal');
const closeModal = document.getElementById('closeModal');
const signInForm = document.getElementById('signInForm');
const successMessage = document.getElementById('successMessage');

//show where reservation button is clicked
reserveBtn.addEventListener('click', function() {
    signInModal.style.display = 'flex';
    
});


//close modal when X is clicked
closeModal.addEventListener('click', function(){
    signInModal.style.display = 'none';
});

//close modal when click is out of the modal content
window.addEventListener('click', function(event){
    if (event.target === signInModal) {
signInModal.style.display = 'none';
resetForm();
    }
});
//handle form submission
signInForm.addEventListener('submit', function(event){
    event.preventDefault();

    //get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //simple validation
    if (email && password) {
        signInForm.style.display = 'none';
        infoMessage.style.display = 'block';

        //redirect after a delay simulation
        setTimeout(function(){
            alert('Page has captured your details, thank you for choosing us.');
            signInModal.style.display = 'none';
            resetForm();
        },2000);
    }
});

//reset form function
function resetForm() {
    signInForm.reset();
    signInForm.style.display = 'block';
    successMessage.style.display = 'none';

}
//hover effect on navigation items
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#8B4513';

    });
    item.addEventListener('mouseenter', function() {
        this.style.color = '#333';

    });
});