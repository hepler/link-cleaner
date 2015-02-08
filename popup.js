// js for the popup (as chrome content security policy requires external js)
document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', cleanLink);
});

function cleanLink() {
    // get the user's input and clean it up
    var input = document.getElementById('input').value;
    var link = decodeURIComponent((input+'').replace(/\+/g, '%20'));

    // remove relate iq tracking prefix from beginning of link
    var rel_iq = 'https://app.relateiq.com/r?url=';
    link = link.replace(rel_iq,'');
    
    // add it to the popup as a clickable link
    link = "<a target='_blank' href='" + link + "\'>" + link + "<a>";
    document.getElementById('cleaned-link').innerHTML = link;
}
