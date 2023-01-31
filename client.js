const baseUrl = "https://jsonplaceholder.typicode.com"
function handleResponse(apiData){
  var data = {
    data:apiData
  };
  render(document, data)
}
function getData(url) {
  fetch(baseUrl + url +"//")
    .then((response) => response.json())
    .then((json) => {
      return handleResponse(json)
    })
  }

function postData(apiData){
  debugger
  apiData
}
postData()
getData(window.location.pathname.split('.')[0])
// getData("posts")
