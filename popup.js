// js for the popup (as chrome content security policy requires external js)
document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', cleanLink);
});

function cleanLink() {
    // get the user's input and clean it up, remove everything up to the link
    var input = document.getElementById('input').value;
    var link = input.replace(/^(.*?)%2F%2F/,'');
    link = decodeURIComponent((link+'').replace(/\+/g, '%20'));

    // add it to the popup as a clickable link
    var newLink = "<a target='_blank' href='https://" + link + "\'> Cleaned Link <a>";
    document.getElementById('cleaned-link').innerHTML = newLink;
}
