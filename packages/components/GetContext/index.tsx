import React from 'react';
import ThemeContext from '../context/themeContext';
import styles from "../styles";

 

const GetContext = (WrappedComponent) => {

	// This component allow to pass the app colors (customized or default) to the Wrapped Component
	return (props) => (
		<ThemeContext.Consumer>
			{ context => {
				// Override the default colors with the colors in the context if they exist
				const overrideStyle = {
					...styles,
					...context,
				}
				// Return the component with the context as a props
				return (
					<WrappedComponent
						{ ...props }
						context={ overrideStyle } />
				);

			}}
		</ThemeContext.Consumer>
	)
}

export default GetContext;
