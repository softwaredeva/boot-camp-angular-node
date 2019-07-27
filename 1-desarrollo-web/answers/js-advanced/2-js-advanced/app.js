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

function loadData(url = 'data.json') {
  httpRequest(url).then(jsonResponse=>{
    document.getElementById('name').innerHTML = jsonResponse.name;
    document.getElementById('lastname').innerHTML = jsonResponse.lastname;
    document.getElementById('age').innerHTML = jsonResponse.age;
  });
}

async function asyncLoadData(url = 'data.json') {
  let jsonResponse = await httpRequest(url);
  document.getElementById('name').innerHTML = jsonResponse.name;
  document.getElementById('lastname').innerHTML = jsonResponse.lastname;
  document.getElementById('age').innerHTML = jsonResponse.age;
}
