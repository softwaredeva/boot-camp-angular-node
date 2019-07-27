function loadData() {
  let data = {
    name: "Pedro",
    lastname: "Juarez",
    age: 25
  };
  document.getElementById('name').innerHTML = data.name;
  document.getElementById('lastname').innerHTML = data.lastname;
  document.getElementById('age').innerHTML = data.age;
}
