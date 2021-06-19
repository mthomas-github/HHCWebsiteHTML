

function submitToAPI(e) {
  e.preventDefault();
  var URL = process.env.MAIL_URL;

  var Namere = /[A-Za-z]{1}[A-Za-z]/;
  if (!Namere.test($("#name-input").val())) {
    alert("Name can not less than 2 char");
    return;
  }
  if ($("#email-input").val() == "") {
    alert("Please enter your email id");
    return;
  }

  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test($("#email-input").val())) {
    alert("Please enter valid email address");
    return;
  }

  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var desc = $("#description-input").val();
  var data = {
    name: name,
    email: email,
    desc: desc
  };

  $.ajax({
    type: "POST",
    url: URL,
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),


    success: function () {
      // clear form and show a success message
      document.getElementById("submitbutton").disabled = true;
      document.querySelector('#submitbutton').innerText = 'Email Sent!';
      document.getElementById("contact-form").reset();
      setTimeout(function () { location.reload(); }, 2000);
    },
    error: function (e) {
      console.log(e)
      document.querySelector('#submitbutton').innerText = 'Email Not Sent Try Again Later';
    }
  });
}


function saveData(e) {
  e.preventDefault();
 
  var url = process.env.API_URL;

  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var email = document.getElementById('email').value
  var total = document.getElementById('total').value
  var values = Array.prototype.slice.call(document.querySelectorAll('#trips option:checked'),0).map(function(v,i,a) { 
    return v.value; 
});

  var data = {
    id: Date.now().toString(),
    year: values[0],
    firstName: fname,
    lastName: lname,
    email: email,
    trips: values,
    total: total
  };
 

  $.ajax({
    type: "PUT",
    url: url,
    dataType: "json",
    crossDomain: "true",
    headers: {
      'Content-Type':'application/json'
    },
    data: JSON.stringify(data),
    success: function () {
      nextPrev(1);
    },
    error: function (e) {
      console.log(e)
    }
  });
}

