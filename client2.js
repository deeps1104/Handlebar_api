const baseUrl = "https://jsonplaceholder.typicode.com/posts/"
function handleResponse(apiData1){
  var data1 = {
    data1:apiData1
  };
  render(document, data1)
}
function postData(url) {
  fetch(baseUrl + url +"/")
  .then((response) => response.json())
  .then((json) => {
    return handleResponse(json)
    }) 
  }
  postData(window.location.pathname.split('.')[0])

