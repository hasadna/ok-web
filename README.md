# Open Knesset - Web UI Application

Web Interface for the Open Knesset API

## Getting started

* Download and install [Node.js](http://nodejs.org)
* Clone the repository
* Change into the repository and run `npm -l install` to install all the required dependencies
* Run locally with `npm start` or `sails lift`

### Diving deeper

You should familiarize yourself with [Sails.js](http://sailsjs.com/) and with the [Jade](https://github.com/visionmedia/jade) templating engine.

## Core Concepts

### Models

Models represent the data layer of the application. To add support for a new data resource from the OKnesset API, you should
run `sails generate model <ModelName>` where `<ModelName>` is the base path of the API resource you're trying to access.

For example, to add access to agenda data, which is available from the OKnesset API under the resource `/agenda/`, you would run
`sails generate model Agenda`

Please look under `api/models/Example.js` for an example Model file with some more details.

### Controllers

Controllers are responsible for handling requests from the browser, preparing data for the view and rendering it.

Each controller can contain one or more functions (known as **actions**) where each function is responsbile for handling a
particular request from the browser.

A good way to think of controllers, is as a group of actions (functions) on an information resource accessible from a URL.

To generate a new controller, run `sails generate controller <PluralModelName | ResourceName>`. You should name your controllers using the following convention:

* If your controller is responsible for displaying data from a distinct model (for example `Agenda`), you should use the plural model name (`Agendas`)
* If your controller is responsible for displaying any arbitrary data (for example, home page), you should name it after the data it displays (for example, home page controlle, will be name `Home`)

### Views

Views are the files that you use to create the final HTML output that the user sees in the browser.

By convention we use the Jade template engine to write views, so please familiarize yourself with it.

Your views reside under `views/` and are automatically found by controllers using the controller name and action name, with a bit of magic from Sails' routes.

The rule of thumb is that if you have a controller action, the corresponding view will be found under `views/<ControllerName>/ActionName>.jade`.

### CSS

LESS is automatically supported by Sails.

This application is configured to look for a single `app.less` file and include it in the page's head. Please follow this convention and import and desired
LESS files via `app.less` which can be found under `assets/linker/styles`.

### Javascripts

Any Javascripts added under `assets/linker/js` will be automatically injected to the page.

You can add additional scripts in your views by using Jade blocks. If you look inside `views/layout.jade` you'll find a
`block scripts` definition. In your view, you can simply append more scripts by adding:

```jade
append scripts
  script(src="somewhere")
```

Routes are URL patterns that map to controller actions