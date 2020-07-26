// document.body.addEventListener("DOMContentLoaded", runApp);
setTimeout(runApp, 1);
// runApp();
function runApp() {
  const telephoneNumber = document.querySelector("#telephone-number");
  telephoneNumber.textContent = `+91 9866099026`;
  const alias = document.querySelectorAll("#alias");
  alias.forEach(function (aliasName) {
    aliasName.textContent = `abhinavp1902`;
  });
}
