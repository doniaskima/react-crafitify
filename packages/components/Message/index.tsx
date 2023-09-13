import React, { Component } from 'react';
import "./Messages.scss";
import CheckMark from '../icons-craftify/Icons/iconsSvg/CheckMarkGreen.svg';
import Stop from "../icons-craftify/Icons/iconsSvg/StopRed.svg";
import Exclamation from "../icons-craftify/Icons/iconsSvg/ExclamationBlue.svg";
import Question from "../icons-craftify/Icons/iconsSvg/QuestionGray.svg";

const message = (text, type, time=2.5) => {
	// This could be modified using React Portal!!!!


	// Transfert the time in milliseconds
	time = time * 1000;
	// Add an animation delay of 0.2s
	const animationDelay = 200;
	// Remove the message from the dom if still there
	const elem = document.querySelectorAll(`.messageWrapper`);
	if(elem[0]){
		// Put the display to none if there is already some messages
		elem.forEach((item) => {
			item.style.display = "none";
		})
	}

	// Create the outer div of the message (used to center the message)
	const outerNode = document.createElement("div");
	outerNode.className = "messageWrapper";
	// Create the div of the message
	const node = document.createElement("div");
	node.className = styles.messageDiv;

	// create the messageWrapperDiv
	const messageWrapperDiv = document.createElement("div");
	messageWrapperDiv.className = "messageWrapper";

	// Check the message type to show the right icon
	if(type !== "noIcon"){
		const domImg = document.createElement("img");
		if(type === "success"){
			domImg.src = CheckMark;
		}
		else if(type === "error"){
			domImg.src = Stop;
		}
		else if(type === "question"){
			domImg.src = Question;
		}
		else {
			domImg.src = Exclamation;
		}
		domImg.className = "msgIcon";
		node.appendChild(domImg);
	}

	// Add the text to the message
	const textnode = document.createTextNode(text);
	node.appendChild(textnode);
	outerNode.appendChild(node);
	messageWrapperDiv.appendChild(outerNode)
	document.body.appendChild(messageWrapperDiv);

	// Set a timeout to remove the message
	const removeMess = setTimeout(() => {
		const elem = document.querySelector(`.messageWrapperDiv`);
		if(elem){
			elem.parentNode.removeChild(elem);
		}
	}, time);

	// Set a timeout to add the fadeOut animation
	const endAnim = setTimeout(() => {
		const msgDiv = document.querySelector(`.messageWrapper`);
		if(msgDiv){
			msgDiv.className = `messageWrapper msgIsFadingOut`;
		}
	}, time - animationDelay);
}

export default message;