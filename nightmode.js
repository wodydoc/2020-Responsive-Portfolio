"use strict";

// Night Mode Capability - 
var changeButton = document.querySelector('input');
var rootElement = document.querySelector('html');

changeButton.addEventListener('click',function() {
  rootElement.classList.toggle('dark');
});