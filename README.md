 <div align="center">
 <img align="center" width="230" src="https://i.postimg.cc/HWqPfvjD/Bubble-Plugin-Helpers.png" />
  <h2>Bubble Plugin helpers</h2>
  <blockquote>Helpers to easily build bubble.io plugins</blockquote>
 
 <a href="https://github.com/digital-engine-info/bubble-plugin-helpers/actions"><img alt="Build Status" src="https://github.com/digital-engine-info/bubble-plugin-helpers/workflows/Build/badge.svg?color=green" /></a> <a href="https://github.com/digital-engine-info/bubble-plugin-helpers/actions"> <img alt="Publish Status" src="https://github.com/digital-engine-info/bubble-plugin-helpers/workflows/Publish/badge.svg?color=green" /></a> <img src="https://img.shields.io/david/digital-engine-info/bubble-plugin-helpers.svg" /> <a href="https://david-dm.org/digital-engine-info/bubble-plugin-helpers?type=dev"><img src="https://img.shields.io/david/dev/digital-engine-info/bubble-plugin-helpers.svg" /></a> <img src="https://api.dependabot.com/badges/status?host=github&repo=digital-engine-info/bubble-plugin-helpers" />
 <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" /></a>
</div>

## ⭐️ Features

- Object : handle more easily data objects and their relations
- Debug : functions supporting debug tasks for your plugins, like logging efficiently the objects you are handling
- Mock : easily mock objects used in bubble plugins, very usefull for implementing unit tests

## 📦 Getting Started

### In your plugin's elements and client side actions

Add the following to the `Shared / HTML Header` section :
```
<script type="application/javascript" src="https://unpkg.com/@digital-engine/bubble-plugin-helpers@1.0.4/build/index.js" />
```

### In your plugin's server side actions

- Activate the `This action uses node modules` checkbox in your action configuration (at the bottom of the page)
- Add this library to the newly opened section, respecting the standard package.json format :
```
{
  "dependencies": {
    "@digital-engine/bubble-plugin-helpers": "^1.0.4"
  }
}
```
