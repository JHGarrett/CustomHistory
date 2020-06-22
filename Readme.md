# Basic FAQ

## What does this do?

I was having an issue getting React and React Router to function properly on an Apache server with [mod_Evasive](https://www.linode.com/docs/web-servers/apache-tips-and-tricks/modevasive-on-apache/).

It wasn't allowing the user to navigate forward and backward using the browser's buttons. This is because the server and mod Evasive don't recognise the internal pages links to update url's.

This package will trick the browser by using listening commands. When the page loads createBrowserHistory will store its own internal history that can then be manipulated to fit you apps needs. 

You can override the default action for "PUSH"(go forward), "POP"(go back), or "REPLACE"(user specific) to have them do whatever you want. You can specify unique actions using the location.pathname if you want it to do something different depending on what page the user is on. 



***************
***************
***************
***************

# Installation
### Fully functional but needs to be polished up a little. Will be added to NPM shortly for easier download. 
For now, you can copy and paste the code. 


# Where will this work?
I have tested and can confirm it is working on Apache, Nginx, and Tomcat servers. 
This will work with a Node server as well but that seems kinda pointless because React-Router does this for you. 

Browser support- IE, Chrome, Edge, and Firefox. I havent tried on opera but who is using opera anyway ¯\_(ツ)_/¯ 