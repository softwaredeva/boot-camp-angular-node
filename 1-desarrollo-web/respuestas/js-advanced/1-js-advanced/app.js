function loadData(url = 'data.json') {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonObj;
      try {
        jsonObj = JSON.parse(this.responseText);
      } catch (error) {
        console.error("Error parsing JSON",error);
        return;
      }
      document.getElementById('name').innerHTML = jsonObj.name;
      document.getElementById('lastname').innerHTML = jsonObj.lastname;
      document.getElementById('age').innerHTML = jsonObj.age;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
