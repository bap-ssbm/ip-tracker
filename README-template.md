# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents



## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](https://prnt.sc/tU-CViAkQtrq)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: https://bap-ssbm.github.io/ip-tracker/

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) 
- tailwind CSS
- framer-motion

### What I learned

I learned alot from this project. I use Axios to get the api objects. and used async await for one of my first tiems ever with a react project.

learned how to use Lealflet, andthe maps it gives. I may use this for a project in the future who knows!
gotten better at using tailwind CSS

learned about getting the users ip with react.
with ttps://api.ipify.org/?format=json a cool website to get the users ip and transform it into json

```html
<<div className="flex space-x-10">
                        <motion.div
                            animate={{ y: -4 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut' }} className="h-4 z-50 rounded-full bg-black w-4"></motion.div>
                        <motion.div animate={{ y: -4 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', delay: 0.1 }} className="h-4 z-50 rounded-full bg-black w-4"></motion.div>
                        <motion.div animate={{ y: -4 }}
                            transition={{ repeat: Infinity, repeatType: "mirror", ease: 'easeInOut', delay: 0.2 }} className="h-4 z-50 rounded-full bg-black w-4"></motion.div>
                    </div>

```
i made a coool framer-motion loading animation here which i was proud of 
```css
#top-section{
    background-image: url("pattern-bg-mobile.png");
    background-repeat: no-repeat;
    background-size:cover;
}

@media (min-width:768px) {
    #top-section{
        background-image: url("pattern-bg-desktop.png");
    }
}
creatinga custom background with tailwindCSS
```
```js

    const getLocationInfo = (ipInput) => {
        var url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_iNzrQ939C8jKh8tqOdzAXMD9dLQLe&ipAddress=" + ipInput;
        setIP(ipInput);


        axios.get(url).then(res => {
            setLocation(res.data.location.city + ", " + res.data.location.region + " " + res.data.location.postalCode + " " + res.data.location.country);
            setIsp(res.data.isp);
            setTz(res.data.location.timezone);
            setlatLon({
                lat: res.data.location.lat,
                lng: res.data.location.lng
            });
            setError(false);
        }
        ).catch(error => {
            setError(true);
        }
        );
    }
```
this custom function i made to get take in the ip, and then get the data from geolocation api.


### Continued development

Make more projects with Axion, and API. and also use more async await fuinctions.
as well as get better at tailwind. and add cooler loading animations with framer-motion.

