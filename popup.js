document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', main);
});
function main() {
    var source = document.getElementById('source').value;
    document.getElementById("result").innerHTML = source;
}