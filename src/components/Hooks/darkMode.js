import React from "react";

export default function toggleClassName(value) {
  // if darkMode = true, then assign class name dark-mode
  if (value === true) {
    document.querySelector(`body`).classList.add("dark-mode");
  } else {
    document.querySelector(`body`).classList.remove("dark-mode");
  }
}
