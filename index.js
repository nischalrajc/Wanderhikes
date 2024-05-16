
document.querySelector("#checkout-btn1").addEventListener("click", function () {
  document.querySelector(".check1").classList.add("active");
});
document.querySelector(".closebtn1").addEventListener("click", function () {
  document.querySelector(".check1").classList.remove("active");
});


document.querySelector("#checkout-btn2").addEventListener("click", function () {
  document.querySelector(".check2").classList.add("active");
});
document.querySelector(".closebtn2").addEventListener("click", function () {
  document.querySelector(".check2").classList.remove("active");
});



document.querySelector("#checkout-btn3").addEventListener("click", function () {
  document.querySelector(".check3").classList.add("active");
});
document.querySelector(".closebtn3").addEventListener("click", function () {
  document.querySelector(".check3").classList.remove("active");
});



const form = document.getElementById("form");
const name1 = document.getElementById("Name1");
const phone = document.getElementById("Phone");
const email = document.getElementById("Email");

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const namevalue = name1.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  //name validation
  if (namevalue === '') {
    setError(name1, 'Name cannot be blank');
  }
  else {
    setSuccess(name1);
  }

  //emailvalidation
  if (emailValue === '') {
    setError(email, 'email cannot be blank');
  }
  else if (!isEmail(emailValue)) {
    setError(email, 'not a valid email');
  } else {
    setSuccess(email);
  }


  //phone number validation
  if (phoneValue === '') {
    setError(phone, 'phone number cannot be blank');
  }
  else {
    setSuccess(phone);
  }

}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;


}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';

}

function isEmail(email) {
  return /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;


}



