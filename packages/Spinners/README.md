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

- `CircleLoader`
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
  // Add more imports for other spinners
} from 'react-craftify-spinners';

const MyComponent = () => {
  return (
    <div>
      {/* Use the spinner components here */}
      <CircleLoader />
      <CornerLoader />
      <CubeLoader />
      <CustomLoader />
      <CustomSpinner />
      <DotSpinner />
      <LoadingBar />
      <NewtonsCradle />
      <RotatingCircleBorderLoader />
      <RotatingCirclesLoader />
      {/* Add more spinner components here */}
    </div>
  );
};

export default MyComponent;

```
