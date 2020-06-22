# Basic FAQ

## What does this do?

I was having an issue getting React and React Router to function properly on an Apache server with [mod_Evasive](https://www.linode.com/docs/web-servers/apache-tips-and-tricks/modevasive-on-apache/).

It wasn't allowing the user to navigate forward and backward using the browser's buttons. This is because the server and mod Evasive don't recognise the internal pages links to update url's.

This package will trick the browser by using listening commands. When the page loads createBrowserHistory will store its own internal history that can then be minipulated to fit you apps needs. 



***************
***************
***************
***************


### Fully functional but needs to be polished up a little. Will be added to NPM shortly for easier download. 