// js for the popup (as chrome content security policy requires external js)
document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('#normal').addEventListener('click', openNormal);
      document.querySelector('#incog').addEventListener('click', openIncog);
});

// open the cleaned link in a normal tab
function openNormal() {
    var input = document.getElementById('input').value;
    var link = cleanLink(input);
    newWindow = window.open(link, '_blank');
    newWindow.focus();
}

// open the cleaned link in an incognito window
function openIncog() {
    var input = document.getElementById('input').value;
    var link = cleanLink(input);
    chrome.windows.create({'url': link, 'incognito': true});
}

// get the user's input and clean it up, remove everything up to the link
function cleanLink(input) {
    var link = input.replace(/^(.*?)%2F%2F/,'');
    link = 'https://' + decodeURIComponent((link+'').replace(/\+/g, '%20'));
    return link;
}
