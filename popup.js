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

// get the user's input and clean it up.
// remove everything up through the protocol, then
// remove all the extras after base URL
function cleanLink(link) {
    // if it's a rel iq link
    if(link.indexOf('relate') > 0) {
        link = link.replace(/^(.*?)%2F%2F/,'');
        link = link.replace(/&.*$/,'');
        // now clean up the encoded URL pieces and remove junk at the end
        link = 'https://' + decodeURIComponent(link.replace(/\+/g, '%20'));
    }
    // take off any UTM codes at the end
    if(link.indexOf('?utm') > 0) {
        link = link.substring(0, link.indexOf('?utm'));
    }
    return link;
}
