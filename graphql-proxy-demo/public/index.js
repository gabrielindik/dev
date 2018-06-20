var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "/proxy");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function () {
  console.log('data returned:', xhr.response);
}
xhr.send(JSON.stringify({query: "{ hello }"}));