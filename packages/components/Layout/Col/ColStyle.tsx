const formatColStyle = (gridName, deviceSize, colWidth) => {
	let style = "";
	if(gridName.split("-").includes("offset")){
		style += `
			@media (min-width: ${ deviceSize }){
				margin-left: ${ colWidth }%;
			}
		`;
	}
	else{
		style += `
			@media (min-width: ${ deviceSize }){
				max-width: ${ colWidth }%;
				flex: 0 0 ${ colWidth }%;
			}
		`;
	}
	return style;
}

export default formatColStyle;
