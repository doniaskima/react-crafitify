import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import  "./Icon.scss";
import { v4 as uuidv4 } from 'uuid';
import hexRgb from "hex-rgb";

import CloseIcon from "./Icons/CloseIcon";
import ArrowBack from "./Icons/ArrowBack";
import ArrowTop from "./Icons/ArrowTop";
import ArrowForward from "./Icons/ArrowForward";
import ArrowDown from "./Icons/ArrowDown";
import CheckMark from "./Icons/CheckMark";
import Menu from "./Icons/Menu";
import Cycling from "./Icons/Cycling";
import LineChart from "./Icons/LineChart";
import Star from "./Icons/Star";
import StarOutlined from "./Icons/StarOutlined";
import StarHalf from "./Icons/StarHalf";
import Bookmark from "./Icons/Bookmark";
import BookmarkOutlined from "./Icons/BookmarkOutlined";
import CloudUpload from "./Icons/CloudUpload";
import CloudDownload from "./Icons/CloudDownload";
import Cloud from "./Icons/Cloud";
import CloudOutlined from "./Icons/CloudOutlined";
import Coffee from "./Icons/Coffee";
import Lock from "./Icons/Lock";
import UnLock from "./Icons/UnLock";
import Time from "./Icons/Time";
import Flash from "./Icons/Flash";
import Loader from "./Icons/Loader";
import Plus from "./Icons/Plus";
import Minus from "./Icons/Minus";
import Cash from "./Icons/Cash";
import Card from "./Icons/Card";
import Cart from "./Icons/Cart";
import Chat from "./Icons/Chat";
import Code from "./Icons/Code";
import Bell from "./Icons/Bell";
import BellOutlined from "./Icons/BellOutlined";
import User from "./Icons/User";
import Refresh from "./Icons/Refresh";
import Settings from "./Icons/Settings";
import Wifi from "./Icons/Wifi";
import Save from "./Icons/Save";
import Sync from "./Icons/Sync";
import Globe from "./Icons/Globe";
import Stop from "./Icons/Stop";
import Search from "./Icons/Search";
import Delete from "./Icons/Delete";
import Home from "./Icons/Home";
import Edit from "./Icons/Edit";
import Copy from "./Icons/Copy";
import Link from "./Icons/Link";
import Clap from "./Icons/Clap";
import Hand from "./Icons/Hand";
import ThumbUp from "./Icons/ThumbUp";
import ThumbDown from "./Icons/ThumbDown";
import RockOn from "./Icons/RockOn";
import Heart from "./Icons/Heart";
import HeartOutlined from "./Icons/HeartOutlined";


const Icon = (props) => {
	const [iconId] = useState(`icon_${uuidv4()}`);
	const [size, setSize] = useState(null);
	const [color, setColor] = useState(null);
	const [opacity, setOpacity] = useState(null);
  
	useEffect(() => {
	  const { size: propSize, color: propColor } = props;
  
	  if (!propSize || !propColor) {
		const parent = document.getElementById(iconId).parentNode;
		const parentStyle = getComputedStyle(parent);
  
		let iconSize = propSize;
  
		if (!propSize) {
		  const pxSize = parentStyle['font-size'].split('px')[0] * 1.3;
		  iconSize = `${pxSize}px`;
		}
  
		let iconColor = propColor ? propColor : parentStyle['color'];
		let iconOpacity = 1;
  
		if (iconColor.split('#').length > 1) {
		  iconColor = `rgba(${hexRgb(iconColor, { format: 'array' }).join(', ')})`;
		}
  
		if (iconColor.split('rgba').length > 1) {
		  iconOpacity = Number(iconColor.split(',')[3].split(')')[0]);
		  const iconColorNum = iconColor.split('rgba(')[1].split(',').slice(0, 3).join(',');
		  iconColor = `rgb(${iconColorNum})`;
		}
  
		setSize(iconSize);
		setColor(iconColor);
		setOpacity(iconOpacity);
	  } else {
		setSize(propSize);
		setColor(propColor);
		setOpacity(1);
	  }
	}, [props, iconId]);
  
	let chosenIcon;
	switch (props.type) {
	  case 'close':
		chosenIcon = <CloseIcon />;
		break;
	  case 'arrowBack':
		chosenIcon = <ArrowBack />;
		break;
	  case 'arrowTop':
		chosenIcon = <ArrowTop />;
		break;
	  case 'arrowForward':
		chosenIcon = <ArrowForward />;
		break;
	  // Add cases for other icons...
	  default:
		console.error(`${props.type} is not a valid icon.`);
	}
  
	// Check if the icon should be spinning
	let isSpinning = '';
	if (props.type === 'loader') {
	  if (props.isSpinning !== false) {
		isSpinning = 'isSpinning';
	  }
	} else if (props.isSpinning === true) {
	  isSpinning = 'isSpinning';
	}
  
	return (
	  <span
		id={iconId}
		className={`iconSvg${isSpinning}`}
		style={{ opacity }}
	  >
		{chosenIcon && React.cloneElement(chosenIcon, { size, color, isSpinning: props.isSpinning })}
	  </span>
	);
  };
  
  Icon.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.string,
	color: PropTypes.string,
	// isSpinning: PropTypes.boolean,
  };
  
  export default Icon;