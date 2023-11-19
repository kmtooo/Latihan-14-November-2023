$("form").validate({
    rules:{
        username:{
            minlength: 3,
        },
        password:{
            password: false,
            minlength: 8,
            maxlength: 12
        }
    },
    messages: {
        username:{
            required: "Please enter your username or email",
            minlength: "Name at least 3 characters"
        },
        password:{
            required: "Please enter your password",
            minlength: "password at least 8 characters"
        }
      },
    submitHandler: function(form) {
      form.submit();
    }
});