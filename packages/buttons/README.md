# react-creaft-buttons


[![npm version](https://img.shields.io/npm/v/react-creaft-buttons)](https://www.npmjs.com/package/react-craft-buttons)
[![Build Status](https://travis-ci.com/doniaskima/react-creaft-buttons.svg?branch=main)](https://travis-ci.com/doniaskima/react-creaft-buttons)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/doniaskima/react-creaft-buttons/blob/main/CONTRIBUTING.md)

A collection of creative and customizable button components for React applications.

![Library Preview](./preview.png)

## Features

- 🎨 Beautifully designed buttons
- 🛠️ Easily customizable with CSS classes
- ⚙️ Flexible configuration options
- 📦 Lightweight and dependency-free

## Installation

Install the package using npm:

```bash
npm install react-craft-buttons

Usage
Import the desired button components from the library and use them in your React components. Here are some examples:

AirbnbButton
The AirbnbButton component is used for rendering a customizable button with Airbnb-like styling.

Default

 
```
import React from 'react';
import AirbnbButton from 'react-craft-buttons';

const MyComponent = () => {
  return (
    <div>
      {/* Default usage */}
      <AirbnbButton>Airbnb Button</AirbnbButton>
    </div>
  );
};

```
Disabled

```
import React from 'react';
import AirbnbButton from 'react-craft-buttons';

const MyComponent = () => {
  return (
    <AirbnbButton disabled>
      Disabled Airbnb Button
    </AirbnbButton>
  );
};

```