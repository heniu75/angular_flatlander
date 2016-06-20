# angular_flatlander

MODULES:
==========================
Where are application components live. You can have as many modules as you want, not only app.js

DIRECTTIVES:
==========================
Directives are HTML annotations that trigger Javascript behaviours.

ng-app - link to an ng-app , assign to html tag

ng-controller - link to an ng-controller, assign to any html tag , e.g. body / div etc

ng-show - show an html object, if the expression is true

ng-hide - hide an html object, if the expression is true

ng-repeat - repeat the html section/object. uses special expression (LINQ-like) to define iteration

LEARNINGS / GOTCHAS:
==========================
1. To get data from app.js / controller into HTML, you MUST attach data to the controller scope using "this.MyDataItem = dataItem" syntax

2. The script tag is *NOT* self-closing. If you make it so, the browser will not honour it!

3. ng-click by default invokes methods scoped to the surrounding controller's scope!!!

4. To keep your javascript sanity, i highly recommend using the 'MyController as controller' syntax and using scoped variables!

DEBUG LEARNINGS:
==========================
Chrome - press ctrl-shift-J to bring up console