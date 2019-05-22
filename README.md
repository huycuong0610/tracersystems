# Secret Landing Page for Secret Project

Lots of work left to do, but let's see if Vue speeds things up.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Run the Dev Server

Clone this repo, and type: `npm install`', and then once you're done, `gridsome develop` will start the server. 

### 3. Change Code

The basic layout is in Default.vue, and you can check Index.vue for how to call other components. 


### Deployment

Okay, so this was quite amazing. I have it deployed all magically on Lambda now, using Up.

There were a lot of steps here, but the most complicated (which wasn't that complicated) is getting the domain name mapping. 
* Set domains in up.json
* Use `up stack plan` and `up stack apply` to eventually get the right cloudfront IP.
* THen map CNAME records to those cloudfront ips. 
* Wait that wasn't as hard as I thought.

I created https://github.com/gridsome/gridsome/issues/398 because the default `up` doesn't work nicely with Gridsome; it can't find any of the assets. There probably was an easy fix but deploying it to its own domain fixed most issues. 

Anyway, what I'll eventually do is allow other people to deploy, but for now I'll set up CI for staging based off of master. 

Why is this better than Netlify?
* I can now run my own server behind the static file serving.
* That means I can run Flask or Rails or Crystal or whatever now. 
* I don't think I actually need to do this (shit) but now at least I know how. We'll see whether we re-create the application form here on this app, or just punt over to the "old" application system (which is probably what we should do, that's going to work a lot better). 



Coupon code that it keeps yelling at me about: up-7B350E8FEF53

