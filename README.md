# angular_flatlander

SUMMARY:
==========================
When writing an angular application, you should be able to write expressive application to show the intent of your application.

MODULES:
==========================
Where are application components live. You can have as many modules as you want, not only app.js

CONTROLLERS:
==========================
Where behaviour lives. Where you define these (in your .js file) are actually the constructors of the controller!

DIRECTIVES:
==========================
Directives are HTML annotations that trigger Javascript behaviours.

ng-app - link to an ng-app , assign to html tag

ng-controller - link to an ng-controller, assign to any html tag , e.g. body / div etc

ng-show - show an html object, if the expression is true

ng-hide - hide an html object, if the expression is true

ng-repeat - repeat the html section/object. uses special expression (LINQ-like) to define iteration

ng-click - fires event scoped to the current scope

ng-src - loads the src, after the browser is ready. Note syntaxt for ng-source is such that you surround it with '{{}}'

ng-init - allows us to evaluate an expression within the current scope. 
    It's use should be minimised as all logic should really go into controllers.
    Although ng-init is great for prototyping, initialisation and configuration should go into controllers.

ng-class - sets a class on the object if an expression is true. you can pass an object e.g. ng-class="{ active: tab === 1}"

ng-model - binds the form element value to the property

ng-submit - allows us to call a function when a form is submitted

ng-include - passing a variable to a file to include. So passing a fixed string, you need to use "'file.html'"
                - This could be a local file or a url. Angular will use Ajax to pull down the contents of that file.
                - Loading into the page then happens.
                - Using custom directives is preferable to directly including files.

CUSTOM DIRECTIVES:
==========================
1. Dont use self-closing tags when using custom elements. Some browsers do not like this.!
    // first custom directive, the directive use will be <product-title>
    // hence the name in JS is 'productTitle' 
    app.directive('productTitle', function()
    {
        //define the directive object
        var definition = {};
        definition.restrict = 'E';                         // type of directive (E for element)
        definition.templateUrl = 'product-title.html';     // Url of a template
        return definition;
    });

2. You will have issues if you are doign the tut directly from the file system for custom directives loading different files.
 - see http://stackoverflow.com/questions/27742070/angularjs-error-cross-origin-requests-are-only-supported-for-protocol-schemes
 - solution is to 
        - npm install http-server -g
        then do ...
        - http-server C:\location\to\app.


LEARNINGS / GOTCHAS:
==========================
1. To get data from app.js / controller into HTML, you MUST attach data to the controller scope using "this.MyDataItem = dataItem" syntax

2. The script tag is *NOT* self-closing. If you make it so, the browser will not honour it!

3. ng-click by default invokes methods scoped to the surrounding controller's scope!!!

4. To keep your javascript sanity, i highly recommend using the 'MyController as controller' syntax and using scoped variables!

5. When defining a property with a lambda for a new function, the lambda MUST end with a semi-colon (;)!!! 

DATABINDINGS:
Expressions such as {{tab}} define a two-way data binding. So that means the expression is re-evaluated when a property changes.
-- The expression keeps an eye out for the value of tab so that when it does change, the expression is then updated to use this new value.


DEBUG LEARNINGS:
==========================
Chrome - press ctrl-shift-J to bring up console