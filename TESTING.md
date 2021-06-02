# Buno Coffee Website - Testing in detils

[Buno Coffee Website In Action](https://yasi92.github.io/Buno-coffee-project/)          
[Main README.md file](/README.md)

## Validation

- [W3C Markup Validation](https://validator.w3.org/#validate_by_uri) was used to validate the code in the three HTML files. I tested each page separately, debugged the errors and, in the end, they have all passed with no errors.
- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/#validate_by_uri) was used to validate the code in my style.css file.
- The website has been tested with the Lighthouse for each page separately and on both desktop and mobile devices and, required actions have been taken to improve the functionality of the website as much as possible and as far as related to HTML and CSS.
![Lighthouse result](README-assets/screenshots/Lighthouse.png)
                                  


| Bugs | Solutions |            
| ----------- | ----------- |
| When testing the published website, noticed that the "scroll-back-to-top" button does not appear after scrolling down the pages, while this was not an issue in the local repository. | I have fixed this by placing the button at the top of the page, above all other elements.|
| When testing the HTML files in the w3 validator, I received errors regarding bad values due to spaces in the "src" attributes of the images.| I have fixed these errors by renaming the images of the case.|
|When testing the HTML files in the w3 validator, I received errors regarding the presence of a button element in the head. | I have fixed this by moving the button element to the body.|
| When testing the HTML files in the w3 validator, I received errors because of some obsolete attributes such as "frameborder", "scrolling", "marginheight" and, "marginwidth" in the iframe element. | I have fixed this issue by removing them from the HTML file and compensating the desired effect with CSS.|
| When testing the HTML files in the w3 validator, I received errors regarding the double presence of a single ID in the same HTML file and that happened to be the reason for the carousel box not functioning appropriately. | The issue was using the same ID for two different elements. | I have fixed this by giving a unique ID name to the elements.|
| I have received a warning from the lighthouse asking to consider a title for the iframe element as screen reader users rely on frame titles to describe the contents of frames. | A title has been added to the element.|
| I have received a warning from the lighthouse asking to consider using a "rel=noopener" attribute for any external links to improve performance and prevent security vulnerabilities.| The intended attribute has been added to all external links.|
| I have received a warning from the lighthouse asking to consider using meta element with unique descriptions and keywords in every page to optimize the search engine machine | This element has been added to every page separately|                                   


## Unfixed Bugs

- In Markup Validation Service, I have disregarded 1 warning regarding considering using h2-h6 elements in the main section on each page, since the heading elements were put separately in the child elements inside each section for semantic reasons and not directly in the section area.
![W3 HTML Validator](README-assets/screenshots/Screenshot.html.validator.png)
- When testing the CSS file in the w3 validator, I have received a number of warnings and errors from the CSS validator which according to the tutor Fatima from the Code Institute, they are caused by browser compatibility issues related to the external links such as bootstrap. This was not the case when I manually copied and pasted the entire CSS file in the validator.
![W3 CSS Validator](README-assets/screenshots/Screenshot.css.validator.png)

## Known issues
- In the "About our products" section, the two columns won't line up in iPad Pro and similar-size devices. I know that the overflow of the text area occurs due to the large text area, but due to the importance of the content, I prefer to keep the same amount of text.
In fact, the importance of content has surpassed the importance of ideal design.
![Image of overflow](README-assets/screenshots/Ipad-pro-homepage.png)


## Client stories testing:

The potential common paths through the website:

- Home > Menu > Contact
- Home > Menu > Gallery
- Home > Gallery
- Home > Gallery > Contact
- Home > Contact                

Each of these possible paths is achievable by simply navigating through the navigation bar and a menu link shortcut on the "Home" page.
### Testing client stories from UX section of [README.md](/README.md)

1. As a new visitor, I would like to get some general information and an introduction to the business.

      * No matter what page the user lands on, they can navigate to the "Home" page and achieve their goal.


2. As a new visitor, I would like to know about the menu items and the prices.
     I. The user lands on the "Home" page and can navigate to the "menu" page by clicking on the menu link from the navigation bar or by the menu link shortcut in the "About our products" section on the "Home" page.
     II. The user lands directly on the "menu" page.
     III. The user lands on the "Gallery" page and navigates to the "menu" page through the navigation bar.


3. As a potential customer, I would like to check out the gallery and see some photos of the place and the products.
     I. The user lands on the "Home" page and can navigate to the "Gallery" page by clicking on the "Gallery" link from the navigation bar.
     II. The user lands on the "menu" page and can navigate to the "Gallery" page by clicking on the "Gallery" link from the navigation bar.
     III. The user lands directly on the "Gallery" page.

4. As an interested visitor, I would like to know about the opening hours and get directions to the place.
     I. The user lands on the "Home" page and after scrolling down the "Home" page they will see the opening hours and contact info section.
     II. The user lands on the "menu" page and can navigate either to the contact section on the "Home" page by clicking on the contact link from the navigation bar, or navigate to the "Home" page and scroll down the page to reach the intended section.
     III. The user lands on the "Gallery" page and can either navigate to the contact section on the "Home" page by clicking on the contact link from the navigation bar or navigate to the "Home" page and scroll down the page to reach the intended section.


5. As an interested visitor, I would like to know whether I can reserve the site for an event.
     I. The user lands on the "Home" page and after scrolling down the "Home" page they will find their expected information about booking the place and contact information.
     II. The user lands on the "menu" page and can navigate to the "Home" page by clicking on the "Home" link from the navigation bar and after scrolling down the "Home" page they will find their intended information about reserving the place and contact information.
     III. The user lands on the "Gallery" page and can navigate to the "Home" page by clicking on the "Home" link from the navigation bar and after scrolling down the "Home" page they will find their intended information about reserving the place and contact information.

6. As a returning visitor, I would like to know about the latest updates in the store and the menu.
     I. The user lands on the "Home" page and finds the latest changes corresponding to each section on the "Home" page.
     II. The user lands on the "menu" page and finds all the updates on the menu card.
     III. The user lands on the "Gallery" page and finds the latest photos of the products and place.
     IV. No matter what page the user lands on they can always navigate to the intended page through the navigation bar on the top of every page.

7. As a returning visitor, I would like to get in touch with the place and order in advance so that I can pick up my order at a specific time.
    I. No matter what page the user lands on, they can click on the contact link from the navigation bar and, click on the telephone icon.
     



## Manual (logical) testing of all elements and functionality on every page.      

###  Navigation Bar

 - Go to the "Home" page from a desktop.
 - Change the screen size from desktop to tablet to verify that the navigation bar is responsive and switches from the inline menu to the burger icon dropdown menu at the appropriate place.
 - Open the page by Chrome developer tool and check the responsiveness of the navigation bar and make sure that the expanded navigation bar switches to a burger icon dropdown menu at the appropriate place.
 - Click on the burger icon and make sure the menu items dropdown.
 - Click on every link item to verify they function accordingly.
 - Click on the logo in the navigation bar and verify that it links to the "Home" page.
 - Hover over every item and verify that the text grows when hovering and returns to the normal size when removing the hover.
 - Make sure the logo font size adjust appropriately as specified in the media query.
 - Click on every navigation link and make sure the border-bottom appears under the correct item.

###  The landing page image and text   

 - Go to the "Home" page from a desktop.
 - Make sure the image and the text place in the correct position.
 - Click the refresh button on the browser and confirm the animation effects on the image and the text run smoothly and as expected.
 - Reduce the width of the window to confirm that the image and the text lay on block levels.
      


###  The section "About our Products" 

 - Go to the "Home" page from a desktop.
 - Make sure the image and the text place in the correct position.
 - Click the refresh button on the browser and confirm the animation effects on the image and the text run smoothly and as expected.
 - Reduce the width of the window to confirm that the image and the text lay on block levels.
 - Click on the "Menu" link and make sure it links to the "Menu" page.


###  The section "Our Cozy Place"
 - Go to the "Home" page from a desktop.
 - Make sure the image and the text place in the correct position.
 - Reduce the width of the window to confirm that the image and the text lay on block levels.
 - Ensure that the images inside the carousel box slide to the next one automatically.
 - Click on the next and previous icons in the carousel box to check if they respond.


###  The section "Gift card" 
 - Go to the "Home" page from a desktop.
 - Make sure the image and the text place in the correct position.
 - Reduce the width of the window to confirm that the image and the text lay on block levels.
 - Ensure that the images inside the carousel box slide to the next one automatically.
 - Click on the next and previous icons in the carousel box to check if they respond.

###  The section "Opening Hours"
 - Go to the "Home" page from a desktop.
 - Scroll down the page to the section.
 - Reduce the width of the window to confirm that the paddings and spacings switch to tablet and mobile mode accordingly.

###  The section "contact information"   
 - Go to the "Home" page from a desktop.
 - Scroll down the page to the section.
 - Reduce the width of the window to confirm that the map and the text lay on block levels.
 - Click on the map to confirm it navigates to the Google map and directs to the correct address.
 - Click on the telephone icon to confirm the link function accordingly.
 - Click on the Instagram link to verify that it opens the Instagram page in a new tab.
 - Click on the Mail icon to verify that it leads to the mailbox with the correct email address and, in a new tab.
     


###  Menu page 
 - Navigate to the "Menu" page from a desktop.
 - Make sure the spacing around the rows, tables, and items is applied correspondingly.
     - When viewing the "Menu" page on a mobile device, noticed that the padding of the rows do not match the padding of the rows on the "Home" page. This has been fixed by adjusting the x-axis padding.
 - Reduce the width of the window to confirm that each table lays on a block level.


###  Gallery page
 - Navigate to the "Gallery" page from a desktop.
 - Make sure the spacing around the rows and images is applied correspondingly.
 - Hover over every single image and check that the opacity of images changes and revert back when removing the hover.
 - click on every single image and make sure the right image opens in the modal.
 - Click on an image and wait to confirm that all the images slide through the carousel box in order.
 - Ensure the next and previous icons in the carousel box function accordingly.
 - Check the functionality of the close button on the top right of the images in the modal.
 - Reduce the width of the window to confirm that all the images behave responsively.
 - Open the page in the "Developer Tool", choose a mobile device and ensure that the images lay on a block level.


###  Sticky back-to-top button
 - Verify that the button shows up in the right position on every page.
 - Click on the button to confirm that the button works.
 - Open the page in the "Developer Tool", choose a mobile device and ensure that the size and spacing of the button change properly-

### Footer
 - Confirm that footer code is identical on all HTML pages.

## Further Testing
 - I have tested the website on the following internet browsers and no serious issue was found:

     - Google Chrome
     - Safari
     - Firefox

- I have tested the website on the following devices:

     - iPhone 8/X/12/5/SE (On physical devices)
     - iPad (On physical devices)
     - iPad Pro (Chrome Developer Tools)
     - iPad mini (Chrome Developer Tools)
     - Galaxy Note 3 (Chrome Developer Tools)
     - Galaxy S III (Chrome Developer Tools)
     - Laptops
 



- Links were tested repeatedly.
- Friends and family members were asked to review the website, its content and the user experience overall.
- Code Institute students were asked to review the website.