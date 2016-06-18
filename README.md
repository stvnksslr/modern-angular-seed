# Modern-Angular-Seed
In the ongoing effort to chase the elusive unicorn of a resuable project seed that is atleast sorta current, ive decided to maintain this repo!

## Commands
* npm run test
* runs test suite
* npm run gulp lint 
* runs eslint on the project
* npm run dev
* starts local browser synch server and compiles app
* npm run prod
* runs the production tasks and bundles the application, it will also replace your localhost api with whatever you have set as production
* npm run gulp component   
* scaffolds a new Angular component. [Read below](#generating-components) for usage details.


## Goals
* sensible and easy to follow pattern for app construction
* tests and documentation inluded and entwined into the app allowing easy to follow patterns

## Features
* Angular 1.5
* Angular Material
* Sass
* JsDoc

### Generating Components
Following a consistent directory structure between components offers us the certainty of predictability. We can take advantage of this certainty by creating a gulp task to automate the "instantiation" of our components. The component boilerplate task generates this:
```
⋅⋅⋅⋅⋅⋅componentName/
⋅⋅⋅⋅⋅⋅⋅⋅componentName.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅componentName.component.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.controller.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.html
⋅⋅⋅⋅⋅⋅⋅⋅componentName.styl // scoped to affect only its own template
⋅⋅⋅⋅⋅⋅⋅⋅componentName.spec.js // contains passing demonstration tests
```

You may, of course, create these files manually, every time a new module is needed, but that gets quickly tedious.
To generate a component, run `gulp component --name componentName`.

The parameter following the `--name` flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside `client/app/components`. To change this, apply the `--parent` flag, followed by a path relative to `client/app/components/`.

For example, running `gulp component --name signup --parent auth` will create a `signup` component at `client/app/components/auth/signup`.  

Running `gulp component --name footer --parent ../common` creates a `footer` component at `client/app/common/footer`.  

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to camelcase the component names.

Shamelessly ripped from the ngClass project, will hopefully evolve into very much my own version in coming releases


#### Inspiration
* https://github.com/AngularClass/NG6-starter
* https://github.com/paradox41/app-template