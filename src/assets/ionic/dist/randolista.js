loadData();
function loadData() {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
    .then(data => {
    // hideSpinner()
    $("#datos").text(data);
    console.log(data);
  });
}