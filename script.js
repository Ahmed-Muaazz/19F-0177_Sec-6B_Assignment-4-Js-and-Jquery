$(document).ready(function () {
  $("#signInForm").submit(function (event) {
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    var passwordRegex = /^[a-zA-Z0-9@*#]{8,15}$/;
    if (!usernameRegex.test(username)) {
      alert("Invalid username. Only alphanumeric characters are allowed.");
      return false;
    }
    if (!passwordRegex.test(password)) {
      alert(
        "Invalid password. It should be 8-15 characters long and can include alphanumeric characters and @*#."
      );
      return false;
    }
    return true;
  });

  $("#signUpForm").submit(function (event) {
    event.preventDefault();
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var newusername = $("#newusername").val();
    var newpassword = $("#newpassword").val();
    var confirmpassword = $("#confirmpassword").val();
    var phone = $("#phone").val();
    var dob = $("#dob").val();
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    var passwordRegex = /^[a-zA-Z0-9@*#]{8,15}$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var phoneRegex = /^\d{10}$/;
    if (
      !usernameRegex.test(newusername) ||
      !passwordRegex.test(newpassword) ||
      newpassword != confirmpassword ||
      !emailRegex.test(email) ||
      !phoneRegex.test(phone)
    ) {
      alert("Invalid input. Please check your details and try again.");
      return false;
    }
    return true;
  });
  $("#showSignUp").click(function () {
    $("#signInContainer").hide();
    $("#signUpContainer").show();
  });

  $("#showSignIn").click(function () {
    $("#signUpContainer").hide();
    $("#signInContainer").show();
  });
});
