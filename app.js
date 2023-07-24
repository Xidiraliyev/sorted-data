const api = "https://jsonplaceholder.typicode.com/todos/";
const radioBtns = document.getElementsByName("list");

const request = new XMLHttpRequest();
let data;
request.addEventListener("readystatechange", () => {
  if (request.readyState == 4 && request.status == 200) {
    data = JSON.parse(request.responseText);
    updateUi(data);
  } else if (request.readyState == 4) {
    console.log("Error");
  } else {
    console.log("Loading...");
  }
});

request.open("get", api);
request.send();

radioBtns.forEach((radio) => {
  radio.addEventListener("change", () => {
    let select = document.querySelector("input[name='list']:checked").value;
    res = [];
    ul.innerHTML = "";
    if (select == "true") {
      res = data.filter((item) => item.completed == true);
    } else if (select == "false") {
      res = data.filter((item) => item.completed == false);
    } else {
      res = data;
      console.log("salom", res);
    }
    //   console.log(res);
    res.forEach((todo) => {
      ul.innerHTML += `
                <li class="card">
                <h3>ID: ${todo.id}</h3>
                <h4 >Completed: ${todo.completed}</h4>
                <p>${todo.title}</p>
                </li>
                `;
    });
  });
});

let res = [];
const ul = document.querySelector("ul");
function updateUi(data) {
  let select = document.querySelector("input[name='list']:checked").value;
  if (select == "true") {
    res = data.filter((item) => item.completed == true);
  } else if (select == "false") {
    res = data.filter((item) => item.completed == false);
  } else {
    res = data;
  }
  res.forEach((todo) => {
    ul.innerHTML += `
                <li class="card">
                <h3>ID: ${todo.id}</h3>
                <h4 >Completed: ${todo.completed}</h4>
                <p>${todo.title}</p>
                </li>
                `;
  });
}
