class UserModel{
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.updateDOM();
  }

  updateDOM() {
    document.getElementById('name').innerHTML = this.name;
    document.getElementById('lastname').innerHTML = this.lastname;
    document.getElementById('age').innerHTML = this.age;
  }
}

function httpRequest(url, method = "GET"){
  method = method.toUpperCase();
  return new Promise((resolve,reject)=>{
    if(!url)
    reject(new Error('Falta el url'));

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        var jsonObj;
        try {
          jsonObj = JSON.parse(this.responseText);
        } catch (error) {
          reject(new Error(error));
        }
        resolve(jsonObj);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}

async function asyncLoadData(url = 'data.json') {
  let jsonResponse = await httpRequest(url);
  let user = new UserModel(jsonResponse.name,jsonResponse.lastname,jsonResponse.age);
}
