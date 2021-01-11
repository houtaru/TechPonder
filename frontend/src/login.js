function check(form) {
  /*function to check userid & password*/
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
  // var account;
  readTextFile("input.json", function (text) {
    var data = JSON.parse(text);
    var account = data;
    console.log(account);
    var check_account = false;
    for (var i in account) {
      if (
        form.user_id.value == account[i].user &&
        form.password.value == account[i].password
      ) {
        check_account = true;
      }
    }
    if (check_account) {
      var myWindow = window.open("homepage_for_user.html", "_self");
    } else {
      alert("Error Password or Username"); /*displays error message*/
    }
  });
}
