import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./Icon.scss";
import { v4 as uuidv4 } from 'uuid';
import hexRgb from "hex-rgb";

import AlignRight from "./Icons/AlignRight";
import Anchor from "./Icons/Anchor";
import Aperture from "./Icons/Aperture";
import Archive from "./Icons/Archive";
import ArrowBack from "./Icons/ArrowBack";
import ArrowDown from "./Icons/ArrowDown";
import ArrowDownCircle from "./Icons/ArrowDownCircle";
import ArrowDownLeft from "./Icons/ArrowDownLeft";
import ArrowDownRight from "./Icons/ArrowDownRight";
import ArrowForward from "./Icons/ArrowForward";
import ArrowLeft from "./Icons/ArrowLeft";
import ArrowLeftCircle from "./Icons/ArrowLeftCircle";
import ArrowRight from "./Icons/ArrowRight";
import ArrowRightCircle from "./Icons/ArrowRightCircle";
import ArrowTop from "./Icons/ArrowTop";
import ArrowUp from "./Icons/ArrowUp";
import ArrowUpCircle from "./Icons/ArrowUpCircle";
import ArrowUpLeft from "./Icons/ArrowUpLeft";
import ArrowUpRight from "./Icons/ArrowUpRight";
import AtSign from "./Icons/AtSign";
import Award from "./Icons/Award";
import BarChart from "./Icons/BarChart";
import BarChart2 from "./Icons/BarChart2";
import Battery from "./Icons/Battery";
import BatteryCharging from "./Icons/BatteryCharging";
import Bell from "./Icons/Bell";
import Bell2 from "./Icons/Bell2";
import BellOff from "./Icons/BellOff";
import BellOutlined from "./Icons/BellOutlined";
import Bluetooth from "./Icons/Bluetooth";
import Bold from "./Icons/Bold";
import Book from "./Icons/Book";
import BookOpen from "./Icons/BookOpen";
import Bookmark from "./Icons/Bookmark";
import Bookmark2 from "./Icons/Bookmark2";
import BookmarkOutlined from "./Icons/BookmarkOutlined";
import Box from "./Icons/Box";
import Briefcase from "./Icons/Briefcase";
import Calendar from "./Icons/Calendar";
import Camera from "./Icons/Camera";
import CameraOff from "./Icons/CameraOff";
import Card from "./Icons/Card";
import Cart from "./Icons/Cart";
import Cash from "./Icons/Cash";
import Cast from "./Icons/Cast";
import Chat from "./Icons/Chat";
import Check from "./Icons/Check";
import CheckCircle from "./Icons/CheckCircle";
import CheckMark from "./Icons/CheckMark";
import ChevronDown from "./Icons/ChevronDown";
import ChevronLeft from "./Icons/ChevronLeft";
import ChevronRight from "./Icons/ChevronRight";
import ChevronUp from "./Icons/ChevronUp";
import ChevronsDown from "./Icons/ChevronsDown";
import ChevronsLeft from "./Icons/ChevronsLeft";
import ChevronsRight from "./Icons/ChevronsRight";
import ChevronsUp from "./Icons/ChevronsUp";
import Chrome from "./Icons/Chrome";
import Circle from "./Icons/Circle";
import Clap from "./Icons/Clap";
import Clipboard from "./Icons/Clipboard";
import Clock from "./Icons/Clock";
import CloseIcon from "./Icons/CloseIcon";
import Cloud from "./Icons/Cloud";
import CloudDownload from "./Icons/CloudDownload";
import CloudDrizzle from "./Icons/CloudDrizzle";
import CloudLightning from "./Icons/CloudLightning";
import CloudOff from "./Icons/CloudOff";
import CloudOutlined from "./Icons/CloudOutlined";
import CloudRain from "./Icons/CloudRain";
import CloudSnow from "./Icons/CloudSnow";
import CloudUpload from "./Icons/CloudUpload";
import Code from "./Icons/Code";
import CodeSandbox from "./Icons/CodeSandbox";
import Codepen from "./Icons/Codepen";
import Coffee from "./Icons/Coffee";
import Columns from "./Icons/Columns";
import Command from "./Icons/Command";
import Compass from "./Icons/Compass";
import Copy from "./Icons/Copy";
import CornerDownLeft from "./Icons/CornerDownLeft";
import CornerDownRight from "./Icons/CornerDownRight";
import CornerLeftDown from "./Icons/CornerLeftDown";
import CornerLeftUp from "./Icons/CornerLeftUp";
import CornerRightDown from "./Icons/CornerRightDown";
import CornerRightUp from "./Icons/CornerRightUp";
import CornerUpLeft from "./Icons/CornerUpLeft";
import CornerUpRight from "./Icons/CornerUpRight";
import CreditCard from "./Icons/CreditCard";
import Crop from "./Icons/Crop";
import Crosshair from "./Icons/Crosshair";
import Cycling from "./Icons/Cycling";
import Database from "./Icons/Database";
import Delete from "./Icons/Delete";
import Edit from "./Icons/Edit";
import Flash from "./Icons/Flash";
import Globe from "./Icons/Globe";
import Hand from "./Icons/Hand";
import Heart from "./Icons/Heart";
import HeartOutlined from "./Icons/HeartOutlined";
import Home from "./Icons/Home";
import LineChart from "./Icons/LineChart";
import Link from "./Icons/Link";
import Loader from "./Icons/Loader";
import Lock from "./Icons/Lock";
import Menu from "./Icons/Menu";
import Minus from "./Icons/Minus";
import Plus from "./Icons/Plus";
import Refresh from "./Icons/Refresh";
import RockOn from "./Icons/RockOn";
import Save from "./Icons/Save";
import Search from "./Icons/Search";
import Settings from "./Icons/Settings";
import Star from "./Icons/Star";
import StarHalf from "./Icons/StarHalf";
import StarOutlined from "./Icons/StarOutlined";
import Stop from "./Icons/Stop";
import Sync from "./Icons/Sync";
import ThumbDown from "./Icons/ThumbDown";
import ThumbUp from "./Icons/ThumbUp";
import Time from "./Icons/Time";
import UnLock from "./Icons/UnLock";
import User from "./Icons/User";
import Wifi from "./Icons/Wifi";
import Activity from "./Icons/activity";
import Airplay from "./Icons/airplay";
import AlertCircle from "./Icons/alert-circle";
import AlertOctagon from "./Icons/alert-octagon";
import AlertTriangle from "./Icons/alert-triangle";
import AlignCenter from "./Icons/align-center";
import AlignJustify from "./Icons/align-justify";
import AlignLeft from "./Icons/align-left";
import Cpu from "./Icons/cpu";

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
    case "alignRight":
      chosenIcon = <AlignRight />;
      break;
    case "anchor":
      chosenIcon = <Anchor />;
      break;
    case "aperture":
      chosenIcon = <Aperture />;
      break;
    case "archive":
      chosenIcon = <Archive />;
      break;
    case "arrowBack":
      chosenIcon = <ArrowBack />;
      break;
    case "arrowDown":
      chosenIcon = <ArrowDown />;
      break;
    case "arrowDownCircle":
      chosenIcon = <ArrowDownCircle />;
      break;
    case "arrowDownLeft":
      chosenIcon = <ArrowDownLeft />;
      break;
    case "arrowDownRight":
      chosenIcon = <ArrowDownRight />;
      break;
    case "arrowForward":
      chosenIcon = <ArrowForward />;
      break;
    case "arrowLeft":
      chosenIcon = <ArrowLeft />;
      break;
    case "arrowLeftCircle":
      chosenIcon = <ArrowLeftCircle />;
      break;
    case "arrowRight":
      chosenIcon = <ArrowRight />;
      break;
    case "arrowRightCircle":
      chosenIcon = <ArrowRightCircle />;
      break;
    case "arrowTop":
      chosenIcon = <ArrowTop />;
      break;
    case "arrowUp":
      chosenIcon = <ArrowUp />;
      break;
    case "arrowUpCircle":
      chosenIcon = <ArrowUpCircle />;
      break;
    case "arrowUpLeft":
      chosenIcon = <ArrowUpLeft />;
      break;
    case "arrowUpRight":
      chosenIcon = <ArrowUpRight />;
      break;
    case "atSign":
      chosenIcon = <AtSign />;
      break;
    case "award":
      chosenIcon = <Award />;
      break;
    case "barChart":
      chosenIcon = <BarChart />;
      break;
    case "barChart2":
      chosenIcon = <BarChart2 />;
      break;
    case "battery":
      chosenIcon = <Battery />;
      break;
    case "batteryCharging":
      chosenIcon = <BatteryCharging />;
      break;
    case "bell":
      chosenIcon = <Bell />;
      break;
    case "bell2":
      chosenIcon = <Bell2 />;
      break;
    case "bellOff":
      chosenIcon = <BellOff />;
      break;
    case "bellOutlined":
      chosenIcon = <BellOutlined />;
      break;
    case "bluetooth":
      chosenIcon = <Bluetooth />;
      break;
    case "bold":
      chosenIcon = <Bold />;
      break;
    case "book":
      chosenIcon = <Book />;
      break;
    case "bookOpen":
      chosenIcon = <BookOpen />;
      break;
    case "bookmark":
      chosenIcon = <Bookmark />;
      break;
    case "bookmark2":
      chosenIcon = <Bookmark2 />;
      break;
    case "bookmarkOutlined":
      chosenIcon = <BookmarkOutlined />;
      break;
    case "box":
      chosenIcon = <Box />;
      break;
    case "briefcase":
      chosenIcon = <Briefcase />;
      break;
    case "calendar":
      chosenIcon = <Calendar />;
      break;
    case "camera":
      chosenIcon = <Camera />;
      break;
    case "cameraOff":
      chosenIcon = <CameraOff />;
      break;
    case "card":
      chosenIcon = <Card />;
      break;
    case "cart":
      chosenIcon = <Cart />;
      break;
    case "cash":
      chosenIcon = <Cash />;
      break;
    case "cast":
      chosenIcon = <Cast />;
      break;
    case "chat":
      chosenIcon = <Chat />;
      break;
    case "check":
      chosenIcon = <Check />;
      break;
    case "checkCircle":
      chosenIcon = <CheckCircle />;
      break;
    case "checkMark":
      chosenIcon = <CheckMark />;
      break;
    case "chevronDown":
      chosenIcon = <ChevronDown />;
      break;
    case "chevronLeft":
      chosenIcon = <ChevronLeft />;
      break;
    case "chevronRight":
      chosenIcon = <ChevronRight />;
      break;
    case "chevronUp":
      chosenIcon = <ChevronUp />;
      break;
    case "chevronsDown":
      chosenIcon = <ChevronsDown />;
      break;
    case "chevronsLeft":
      chosenIcon = <ChevronsLeft />;
      break;
    case "chevronsRight":
      chosenIcon = <ChevronsRight />;
      break;
    case "chevronsUp":
      chosenIcon = <ChevronsUp />;
      break;
    case "chrome":
      chosenIcon = <Chrome />;
      break;
    case "circle":
      chosenIcon = <Circle />;
      break;
    case "clap":
      chosenIcon = <Clap />;
      break;
    case "clipboard":
      chosenIcon = <Clipboard />;
      break;
    case "clock":
      chosenIcon = <Clock />;
      break;
    case "closeIcon":
      chosenIcon = <CloseIcon />;
      break;
    case "cloud":
      chosenIcon = <Cloud />;
      break;
    case "cloudDownload":
      chosenIcon = <CloudDownload />;
      break;
    case "cloudDrizzle":
      chosenIcon = <CloudDrizzle />;
      break;
    case "cloudLightning":
      chosenIcon = <CloudLightning />;
      break;
    case "cloudOff":
      chosenIcon = <CloudOff />;
      break;
    case "cloudOutlined":
      chosenIcon = <CloudOutlined />;
      break;
    case "cloudRain":
      chosenIcon = <CloudRain />;
      break;
    case "cloudSnow":
      chosenIcon = <CloudSnow />;
      break;
    case "cloudUpload":
      chosenIcon = <CloudUpload />;
      break;
    case "code":
      chosenIcon = <Code />;
      break;
    case "codeSandbox":
      chosenIcon = <CodeSandbox />;
      break;
    case "codepen":
      chosenIcon = <Codepen />;
      break;
    case "coffee":
      chosenIcon = <Coffee />;
      break;
    case "columns":
      chosenIcon = <Columns />;
      break;
    case "command":
      chosenIcon = <Command />;
      break;
    case "compass":
      chosenIcon = <Compass />;
      break;
    case "copy":
      chosenIcon = <Copy />;
      break;
    case "cornerDownLeft":
      chosenIcon = <CornerDownLeft />;
      break;
    case "cornerDownRight":
      chosenIcon = <CornerDownRight />;
      break;
    case "cornerLeftDown":
      chosenIcon = <CornerLeftDown />;
      break;
    case "cornerLeftUp":
      chosenIcon = <CornerLeftUp />;
      break;
    case "cornerRightDown":
      chosenIcon = <CornerRightDown />;
      break;
    case "cornerRightUp":
      chosenIcon = <CornerRightUp />;
      break;
    case "cornerUpLeft":
      chosenIcon = <CornerUpLeft />;
      break;
    case "cornerUpRight":
      chosenIcon = <CornerUpRight />;
      break;
    case "creditCard":
      chosenIcon = <CreditCard />;
      break;
    case "crop":
      chosenIcon = <Crop />;
      break;
    case "crosshair":
      chosenIcon = <Crosshair />;
      break;
    case "cycling":
      chosenIcon = <Cycling />;
      break;
    case "database":
      chosenIcon = <Database />;
      break;
    case "delete":
      chosenIcon = <Delete />;
      break;
    case "edit":
      chosenIcon = <Edit />;
      break;
    case "flash":
      chosenIcon = <Flash />;
      break;
    case "globe":
      chosenIcon = <Globe />;
      break;
    case "hand":
      chosenIcon = <Hand />;
      break;
    case "heart":
      chosenIcon = <Heart />;
      break;
    case "heartOutlined":
      chosenIcon = <HeartOutlined />;
      break;
    case "home":
      chosenIcon = <Home />;
      break;
    case "lineChart":
      chosenIcon = <LineChart />;
      break;
    case "link":
      chosenIcon = <Link />;
      break;
    case "loader":
      chosenIcon = <Loader />;
      break;
    case "lock":
      chosenIcon = <Lock />;
      break;
    case "menu":
      chosenIcon = <Menu />;
      break;
    case "minus":
      chosenIcon = <Minus />;
      break;
    case "plus":
      chosenIcon = <Plus />;
      break;
    case "refresh":
      chosenIcon = <Refresh />;
      break;
    case "rockOn":
      chosenIcon = <RockOn />;
      break;
    case "save":
      chosenIcon = <Save />;
      break;
    case "search":
      chosenIcon = <Search />;
      break;
    case "settings":
      chosenIcon = <Settings />;
      break;
    case "star":
      chosenIcon = <Star />;
      break;
    case "starHalf":
      chosenIcon = <StarHalf />;
      break;
    case "starOutlined":
      chosenIcon = <StarOutlined />;
      break;
    case "stop":
      chosenIcon = <Stop />;
      break;
    case "sync":
      chosenIcon = <Sync />;
      break;
    case "thumbDown":
      chosenIcon = <ThumbDown />;
      break;
    case "thumbUp":
      chosenIcon = <ThumbUp />;
      break;
    case "time":
      chosenIcon = <Time />;
      break;
    case "unLock":
      chosenIcon = <UnLock />;
      break;
    case "user":
      chosenIcon = <User />;
      break;
    case "wifi":
      chosenIcon = <Wifi />;
      break;
    case "activity":
      chosenIcon = <Activity />;
      break;
    case "airplay":
      chosenIcon = <Airplay />;
      break;
    case "alertCircle":
      chosenIcon = <AlertCircle />;
      break;
    case "alertOctagon":
      chosenIcon = <AlertOctagon />;
      break;
    case "alertTriangle":
      chosenIcon = <AlertTriangle />;
      break;
    case "alignCenter":
      chosenIcon = <AlignCenter />;
      break;
    case "alignJustify":
      chosenIcon = <AlignJustify />;
      break;
    case "alignLeft":
      chosenIcon = <AlignLeft />;
      break;
    case "cpu":
      chosenIcon = <Cpu />;
      break;
    default:
      console.error(`${props.type} is not a valid icon.`);
  }

  return (
    <div id={iconId} className="icon" style={{ fontSize: size, color: color, opacity: opacity }}>
      {chosenIcon}
    </div>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
