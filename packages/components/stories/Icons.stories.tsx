import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from '../icons-craftify/index';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Template: Story = (args) => (
  <div>
    <Icon {...args} />
  </div>
);

export const Aperture = Template.bind({});
Aperture.args = {
  type: 'aperture',
  size: '32px',
  color: 'orange',  
};

// Close Icon
export const Close = Template.bind({});
Close.args = {
  type: 'close',
  size: '24px',
  color: 'red',
};

// ArrowBack Icon
export const ArrowBack = Template.bind({});
ArrowBack.args = {
  type: 'arrowBack',
  size: '32px',
  color: 'blue',
};

// ArrowTop Icon
export const ArrowTop = Template.bind({});
ArrowTop.args = {
  type: 'arrowTop',
  size: '32px',
  color: 'green',
};

// ArrowForward Icon
export const ArrowForward = Template.bind({});
ArrowForward.args = {
  type: 'arrowForward',
  size: '32px',
  color: 'purple',
};

// ArrowDown Icon
export const ArrowDown = Template.bind({});
ArrowDown.args = {
  type: 'arrowDown',
  size: '32px',
  color: 'orange',
};

// CheckMark Icon
export const CheckMark = Template.bind({});
CheckMark.args = {
  type: 'checkmark',
  size: '32px',
  color: 'navy',
};

// Menu Icon
export const Menu = Template.bind({});
Menu.args = {
  type: 'menu',
  size: '32px',
  color: 'teal',
};

// Cycling Icon
export const Cycling = Template.bind({});
Cycling.args = {
  type: 'cycling',
  size: '32px',
  color: 'maroon',
};

// LineChart Icon
export const LineChart = Template.bind({});
LineChart.args = {
  type: 'chart',
  size: '32px',
  color: 'indigo',
};

// Star Icon
export const Star = Template.bind({});
Star.args = {
  type: 'star',
  size: '32px',
  color: 'yellow',
};

// StarOutlined Icon
export const StarOutlined = Template.bind({});
StarOutlined.args = {
  type: 'starOutlined',
  size: '32px',
  color: 'gold',
};

// StarHalf Icon
export const StarHalf = Template.bind({});
StarHalf.args = {
  type: 'starHalf',
  size: '32px',
  color: 'silver',
};

// Bookmark Icon
export const Bookmark = Template.bind({});
Bookmark.args = {
  type: 'bookmark',
  size: '32px',
  color: 'gray',
};

// BookmarkOutlined Icon
export const BookmarkOutlined = Template.bind({});
BookmarkOutlined.args = {
  type: 'bookmarkOutlined',
  size: '32px',
  color: 'black',
};

// CloudUpload Icon
export const CloudUpload = Template.bind({});
CloudUpload.args = {
  type: 'cloudUpload',
  size: '32px',
  color: 'white',
};

// CloudDownload Icon
export const CloudDownload = Template.bind({});
CloudDownload.args = {
  type: 'cloudDownload',
  size: '32px',
  color: 'pink',
};

// Cloud Icon
export const Cloud = Template.bind({});
Cloud.args = {
  type: 'cloud',
  size: '32px',
  color: 'violet',
};

// CloudOutlined Icon
export const CloudOutlined = Template.bind({});
CloudOutlined.args = {
  type: 'cloudOutlined',
  size: '32px',
  color: 'cyan',
};

// Coffee Icon
export const Coffee = Template.bind({});
Coffee.args = {
  type: 'coffee',
  size: '32px',
  color: 'lime',
};

// Lock Icon
export const Lock = Template.bind({});
Lock.args = {
  type: 'lock',
  size: '32px',
  color: 'olive',
};

// UnLock Icon
export const UnLock = Template.bind({});
UnLock.args = {
  type: 'unlock',
  size: '32px',
  color: 'brown',
};

// Time Icon
export const Time = Template.bind({});
Time.args = {
  type: 'time',
  size: '32px',
  color: 'salmon',
};

// Flash Icon
export const Flash = Template.bind({});
Flash.args = {
  type: 'flash',
  size: '32px',
  color: 'tomato',
};

// Loader Icon
export const Loader = Template.bind({});
Loader.args = {
  type: 'loader',
  size: '32px',
  color: 'dodgerblue',
};

// Plus Icon
export const Plus = Template.bind({});
Plus.args = {
  type: 'plus',
  size: '32px',
  color: 'purple',
};

// Minus Icon
export const Minus = Template.bind({});
Minus.args = {
  type: 'minus',
  size: '32px',
  color: 'darkred',
};

// Cash Icon
export const Cash = Template.bind({});
Cash.args = {
  type: 'cash',
  size: '32px',
  color: 'darkblue',
};

// Card Icon
export const Card = Template.bind({});
Card.args = {
  type: 'card',
  size: '32px',
  color: 'seagreen',
};

// Cart Icon
export const Cart = Template.bind({});
Cart.args = {
  type: 'cart',
  size: '32px',
  color: 'coral',
};

// Chat Icon
export const Chat = Template.bind({});
Chat.args = {
  type: 'chat',
  size: '32px',
  color: 'slategray',
};

// Code Icon
export const Code = Template.bind({});
Code.args = {
  type: 'code',
  size: '32px',
  color: 'darkcyan',
};

// Bell Icon
export const Bell = Template.bind({});
Bell.args = {
  type: 'bell',
  size: '32px',
  color: 'firebrick',
};

// BellOutlined Icon
export const BellOutlined = Template.bind({});
BellOutlined.args = {
  type: 'bellOutlined',
  size: '32px',
  color: 'darkorchid',
};

// User Icon
export const User = Template.bind({});
User.args = {
  type: 'user',
  size: '32px',
  color: 'darkorange',
};

// Refresh Icon
export const Refresh = Template.bind({});
Refresh.args = {
  type: 'refresh',
  size: '32px',
  color: 'teal',
};

// Settings Icon
export const Settings = Template.bind({});
Settings.args = {
  type: 'settings',
  size: '32px',
  color: 'blueviolet',
};

// Wifi Icon
export const Wifi = Template.bind({});
Wifi.args = {
  type: 'wifi',
  size: '32px',
  color: 'chocolate',
};

// Save Icon
export const Save = Template.bind({});
Save.args = {
  type: 'save',
  size: '32px',
  color: 'dimgrey',
};

// Sync Icon
export const Sync = Template.bind({});
Sync.args = {
  type: 'sync',
  size: '32px',
  color: 'forestgreen',
};

// Globe Icon
export const Globe = Template.bind({});
Globe.args = {
  type: 'globe',
  size: '32px',
  color: 'goldenrod',
};

// Stop Icon
export const Stop = Template.bind({});
Stop.args = {
  type: 'stop',
  size: '32px',
  color: 'hotpink',
};

// Search Icon
export const Search = Template.bind({});
Search.args = {
  type: 'search',
  size: '32px',
  color: 'indianred',
};

// Delete Icon
export const Delete = Template.bind({});
Delete.args = {
  type: 'delete',
  size: '32px',
  color: 'lawngreen',
};

// Edit Icon
export const Edit = Template.bind({});
Edit.args = {
  type: 'edit',
  size: '32px',
  color: 'lightcoral',
};

// Copy Icon
export const Copy = Template.bind({});
Copy.args = {
  type: 'copy',
  size: '32px',
  color: 'lightseagreen',
};

// Home Icon
export const Home = Template.bind({});
Home.args = {
  type: 'home',
  size: '32px',
  color: 'mediumpurple',
};

// Link Icon
export const Link = Template.bind({});
Link.args = {
  type: 'link',
  size: '32px',
  color: 'midnightblue',
};

// Clap Icon
export const Clap = Template.bind({});
Clap.args = {
  type: 'clap',
  size: '32px',
  color: 'olivedrab',
};

// Hand Icon
export const Hand = Template.bind({});
Hand.args = {
  type: 'hand',
  size: '32px',
  color: 'orangered',
};

// ThumbUp Icon
export const ThumbUp = Template.bind({});
ThumbUp.args = {
  type: 'thumbUp',
  size: '32px',
  color: 'palevioletred',
};

// ThumbDown Icon
export const ThumbDown = Template.bind({});
ThumbDown.args = {
  type: 'thumbDown',
  size: '32px',
  color: 'peru',
};

// RockOn Icon
export const RockOn = Template.bind({});
RockOn.args = {
  type: 'rockOn',
  size: '32px',
  color: 'plum',
};

// Heart Icon
export const Heart = Template.bind({});
Heart.args = {
  type: 'heart',
  size: '32px',
  color: 'rebeccapurple',
};

// HeartOutlined Icon
export const HeartOutlined = Template.bind({});
HeartOutlined.args = {
  type: 'heartOutlined',
  size: '32px',
  color: 'rosybrown',
};
