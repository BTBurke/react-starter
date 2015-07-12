// Pages
var React = require('react');
var Home = require('./home'); 

// React-router
var Router = require('react-router'),
	DefaultRoute = Router.DefaultRoute,
	Link = Router.Link,
	Route = Router.Route,
	RouteHandler = Router.RouteHandler;



// Public views are rendered under the External component, does
// not require login
var External = React.createClass({
  render: function () {
    return (
        <RouteHandler/>
    );
  }
});

// Private views are rendered under the Internal component,
// requires login. Every top-level view should extend either
// the Private, Admin, or SuperAdmin classes to ensure that
// logged-in states are checked via ComponentWillMount before
// render.
// var Internal = React.createClass({
//   render: function() {
//     // TODO
//   }
// })


var routes = (
  <Route name="external" path="/" handler={Home}>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById("app"));
});
