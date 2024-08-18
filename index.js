function validateForm() {
   let email = document.forms["myForm"]["email"].value;
   let password = document.forms["myForm"]["password"].value;

   let emailError = document.getElementById("emailError");
   let passwordError = document.getElementById("passwordError");

   let isValid = true;

   // Reset error messages and input borders
   emailError.style.display = "none";
   passwordError.style.display = "none";
   document.getElementById("email").classList.remove("error", "success");
   document.getElementById("password").classList.remove("error", "success");

   // Email validation
   if (email == "") {
       emailError.innerText = "Email must be filled out";
       emailError.style.display = "block";
       document.getElementById("email").classList.add("error");
       isValid = false;
   } else {
       document.getElementById("email").classList.add("success");
   }

   // Password validation
   if (password == "") {
       passwordError.innerText = "Password must be filled out";
       passwordError.style.display = "block";
       document.getElementById("password").classList.add("error");
       isValid = false;
   } else if (password.length < 8) {
       passwordError.innerText = "Password must be at least 8 characters long";
       passwordError.style.display = "block";
       document.getElementById("password").classList.add("error");
       isValid = false;
   } else {
       document.getElementById("password").classList.add("success");
   }

   // If form is not valid, return false to prevent submission
   if (!isValid) {
       return false;
   }

   // Show success popup if validation passes
   Swal.fire({
       icon: 'success',
       title: 'Success',
       text: 'Successfully logged in!',
       showConfirmButton: true,
       background: '#d4edda',
       color: '#155724'
   });

   return true; // Allow form submission or further actions here
}
