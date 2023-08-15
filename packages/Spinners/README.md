# react-craftify-spinners

A collection of creative and customizable spinner components for React applications.

## Features

- 🌀 Beautifully designed spinner components
- 🎨 Easily customizable with CSS classes
- ⚙️ Flexible configuration options
- 📦 Lightweight and dependency-free

## Installation

Install the package using npm:

```bash
npm install react-craftify-spinners
```
## How to Use

To use the spinner components from `react-craftify-spinners`, you'll need to follow these steps:

1. Install the package in your project using npm:

 

## Available Spinner Components

This library provides a variety of spinner components that you can easily integrate into your React projects. Here's a list of the available spinner components:

- `CoffeSpinner`
- `SmileSpinner`
- `ScanSpinner`
- `CartSpinner`
- `GemoetricSpinner`
- `CookingSpinner`
- `BubbleSpinner`
- `CircleLoader`
- `PlanetSpinner`
- `CornerLoader`
- `CubeLoader`
- `CustomLoader`
- `CustomSpinner`
- `DotSpinner`
- `LoadingBar`
- `NewtonsCradle`
- `RotatingCircleBorderLoader`
- `RotatingCirclesLoader`

2. Import the spinner components you want to use in your React component file:

```bash
import React from 'react';
import {
  BubbleSpinner,
  CookingSpinner,
  AnimatedCircle,
  CartSpinner,
  CoffeSpinner,
  GemoetricSpinner,
  PlanetSpinner,
  SmileSpinner,
  ScanSpinner,
  Loader,
  CircleLoader,
  CornerLoader,
  CubeLoader,
  CustomLoader,
  CustomSpinner,
  DotSpinner,
  LoadingBar,
  NewtonsCradle,
  RotatingCircleBorderLoader,
  RotatingCirclesLoader,
  // Import more spinner components here
} from 'react-craftify-spinners';

const MyComponent = () => {
  return (
    <div>
      {/* Example usage of different spinner components */}

      {/* Coffe loader */}
      <CoffeSpinner />


      {/* Standard circle loader */}
      <CircleLoader />

      {/* Corner loader */}
      <CornerLoader />

      {/* Cube loader */}
      <CubeLoader />

      {/* Custom loader with customizable properties */}
      <CustomLoader />

      {/* Custom spinner with user-defined animation */}
      <CustomSpinner />

      {/* Simple dot spinner */}
      <DotSpinner />

      {/* Loading bar indicating progress */}
      <LoadingBar />

      {/* Newtons cradle animation */}
      <NewtonsCradle />

      {/* Circle loader with rotating border */}
      <RotatingCircleBorderLoader />

      {/* Multiple rotating circles */}
      <RotatingCirclesLoader />

      {/* Add more spinner components here */}
      {/* Remember to provide relevant descriptions for any additional spinners */}

      {/* End of spinner components */}
    </div>
  );
};

export default MyComponent;


```

Feel free to explore and experiment with different spinner components to enhance the user experience in your React applications.
