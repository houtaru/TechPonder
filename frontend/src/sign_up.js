<<<<<<< HEAD
function check(form) {
  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
  }
 
  readTextFile("input.json", function (text) {
    var data = JSON.parse(text);
    var account = data;
    console.log(account);
    var check_account = true;
    for (var i in account) {
      if (form.user_id.value == account[i].user) {
        check_account = false;
      }
    }
    if (form.password.value != form.confirm_password.value)
      check_account = false;

    if (check_account) {
      var myWindow = window.open("userlogin.html", "_self");
    } else {
      alert("Failed!!!"); /*displays error message*/
    }
  });
}

=======
function check(form) {
  function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
  }
 
  readTextFile("input.json", function (text) {
    var data = JSON.parse(text);
    var account = data;
    console.log(account);
    var check_account = true;
    for (var i in account) {
      if (form.user_id.value == account[i].user) {
        check_account = false;
      }
    }
    if (form.password.value != form.confirm_password.value)
      check_account = false;

    if (check_account) {
      var myWindow = window.open("userlogin.html", "_self");
    } else {
      alert("Failed!!!"); /*displays error message*/
    }
  });
}
>>>>>>> 9626a85519c9487cfd55e742d64ef1874d8de3f7
