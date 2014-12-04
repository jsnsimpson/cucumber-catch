cucumber-catch
==============

A simple JS function for handling CucumberJS assertion errors effectively and *gracefully* (currently hard with async tasks in WebDriverJS) 

If you are using an assertion library with cucumberJS, you may have encountered a problem which makes it difficult to gracefully handle errors.


sample usage: 
```js
   this.Then(/^I will be taken to the hompage$/, function (callback) {
     browser.getLocationAbsUrl().then(execute(function(url) {
     
        expect(url).to.equal('/');
        callback();
    
      }, callback));
    });
```
