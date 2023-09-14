import React, { Component } from 'react';
import "./Messages.scss";
import CheckMark from '../icons-craftify/Icons/iconsSvg/CheckMarkGreen.svg';
import Stop from "../icons-craftify/Icons/iconsSvg/StopRed.svg";
import Exclamation from "../icons-craftify/Icons/iconsSvg/ExclamationBlue.svg";
import Question from "../icons-craftify/Icons/iconsSvg/QuestionGray.svg";
import styles from './Messages.scss';

const message = (text, type, time = 2.5) => {

  time = time * 1000;
  const animationDelay = 200;
  const elem = document.querySelectorAll(`.messageWrapper`);
  if (elem[0]) {
    elem.forEach((item) => {
      item.style.display = "none";
    })
  }


  const outerNode = document.createElement("div");
  outerNode.className = "messageWrapper";
  const node = document.createElement("div");
  node.className = styles.messageDiv;


  const messageWrapperDiv = document.createElement("div");
  messageWrapperDiv.className = "messageWrapper";

  if (type !== "noIcon") {
    const domImg = document.createElement("img");
    if (type === "success") {
      domImg.src = CheckMark;
    }
    else if (type === "error") {
      domImg.src = Stop;
    }
    else if (type === "question") {
      domImg.src = Question;
    }
    else {
      domImg.src = Exclamation;
    }
    domImg.className = "msgIcon";
    node.appendChild(domImg);
  }


  const textnode = document.createTextNode(text);
  node.appendChild(textnode);
  outerNode.appendChild(node);
  messageWrapperDiv.appendChild(outerNode)
  document.body.appendChild(messageWrapperDiv);


  const removeMess = setTimeout(() => {
    const elem = document.querySelector(`.messageWrapperDiv`);
    if (elem) {
      elem.parentNode.removeChild(elem);
    }
  }, time);


  const endAnim = setTimeout(() => {
    const msgDiv = document.querySelector(`.messageWrapper`);
    if (msgDiv) {
      msgDiv.className = `messageWrapper msgIsFadingOut`;
    }
  }, time - animationDelay);
}

export default message;
