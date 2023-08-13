# Social Feedback for WX

Hey team! Here's my first attempt for the feedback app. 

[Frontend](https://github.dev.xero.com/pages/Xero/social-feedback/), [Google Form](https://docs.google.com/forms/d/1uRssrF8Birzh4sxC7GohjIYjmgSXeMmmLfgSJ82v4u0), [Google Form Responses](https://docs.google.com/spreadsheets/d/181V5pCkThsCrQfQHn68ytIbygCfg_Mdy7TdHL5oHfNE).

Feel free to give it a try!

The code in this repo defines a single-page static site. It uses JavaScript to inject html (and js callbacks to handle clicks) into a the body by directly manipulating the DOM. Styling is done with [tailwind css](https://tailwindcss.com/) because I hate css selectors lol. I chose `Source Sans 3` as the font because it is the most similar Google font to the typical Xero font.

I've done my best to separate concerns into separate js files, but I ran into browser security issues when I tried to make all the separate js files into a module (e.g. index.js) and import that. Keen to hear what ideas you all might have to make this less work better.

The UI is hosted via [Github Pages](https://pages.github.com/). If we decide to go with a custom static website like this as a final solution, I think a GitHub pages site is a great solution as it keeps the site really close to the code, and in an environment where it is accessible to only Xeros. Best of all - it's free, and that's a great price! What do you think?  

The site is currently linked for responses to [this google form](https://docs.google.com/forms/d/1uRssrF8Birzh4sxC7GohjIYjmgSXeMmmLfgSJ82v4u0), which adds responses to [this google sheet](https://docs.google.com/spreadsheets/d/181V5pCkThsCrQfQHn68ytIbygCfg_Mdy7TdHL5oHfNE/edit?resourcekey#gid=1675618626) at the time of writing this README.

I'm thinking we can get WX to create new spreadsheets in their drive, and link this same form to it. This can easily be done via the google form click ops, but does add a small (absolute **maximum** ~5 min) burden to WX to set up / close each event. This does have the benefit, though, that they have complete control over when feedback is open & where the responses are saved to, as well as the analytics graphs that google forms provides.

## Known limitations

I only dabble in frontend stuff so there are probably many things that could be improved with this. Some of these could include:

- More modular components (e.g. header, button, etc)
- Get a module working, and have only one function call in index.html (initialise() or similar, which does the same thing as the current final <script> tag).

The most major issue I can see is to do with the submission of the response. The current solution uses [this hacky method](https://stackoverflow.com/questions/71714110/can-you-submit-a-restful-request-to-a-google-forms-api) to submit a google form response. It involves a get request to a form url with field values as query parameters. Due to google's security restrictions, this can only be done programmatically in "no-cors" mode, which means the response from google is opaque (doesn't tell us whether the response was successfully posted to the sheet or not). Because of this, we can't tell the difference between success and failure of response delivery client-side. My solution at the moment is just to show "success" all the time, but this is obviously not ideal.

I think the solution would be to have a server-side function somewhere that is authenticated with google forms. That way this frontend could post there instead, and our server side logic could relay the more meaningful response from google. This will be some additional work to set up, but might be worth it. What do you guys think?

Aware I've gone ahead and hacked this solo, so totally happy if we only want to use part (or none) of this solution. Let me know what you think!