# link-cleaner

A chrome extension for cleaning up URL tracking/encoding from copied links.

Working, but only running in dev mode currently.


#### using this extension

For example, a "dirty" link is pasted into the popup's text box:

`https://app.relateiq.com/r?url=https%3A%2F%2Fwww.example.com&t=L1t90izWCIKYbtgxXE89t-FwhZf2L`

The extension cleans up the encoded URL and removes the tracking info, outputting the much friendlier:

`https://www.example.com`

which can then be opened in either a normal tab or incognito window in one click.
