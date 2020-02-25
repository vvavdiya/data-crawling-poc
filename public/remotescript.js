(function() {
  console.log("Hello from remote script");

  // Manually creates the cookies
  createCookie("emailID", "test@gmail.com", 1);

  // Collect data from cookies
  var userData = readCookie();
  console.log("Sending data from browser-" + JSON.stringify(userData));
  sendData("http://localhost:8080/postData", { userData: userData });

  //sendData("http://localhost:8080/postData", { email: "hello@user.com", response: { name: "Tester" } })

  // Manually creates the cookies
  function createCookie(key, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = key + "=" + value + expires + "; path=/";
  }

  function readCookie() {
    var key, value, i;
    var cookieArray = document.cookie.split(";");
    console.log("Available browser cookies-" + JSON.stringify(cookieArray));
    var availableData = [];
    for (i = 0; i < cookieArray.length; i++) {
      key = cookieArray[i].substr(0, cookieArray[i].indexOf("="));
      value = cookieArray[i].substr(cookieArray[i].indexOf("=") + 1);
      availableData.push({ [key]: value });
    }
    return availableData;
  }
  function sendData(_serverUrl, _reqData) {
    // console.log("reqData-"+JSON.stringify(_reqData));
    var request = new XMLHttpRequest();
    request.open("POST", _serverUrl, true);
    request.onload = function() {
      console.log("Remote server response-" + this.response);
    };
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(_reqData));
  }
})();
