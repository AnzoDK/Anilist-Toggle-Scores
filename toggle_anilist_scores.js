// ==UserScript==
// @name        Toggle Anilist Scores Script
// @namespace   Violentmonkey Scripts
// @match       https://anilist.co/search/*
// @grant       none
// @version     1.1.2
// @author      AnzoDK
// @license     MIT
// @downloadURL https://github.com/AnzoDK/Anilist-Toggle-Scores/releases/latest/download/toggle_anilist_scores.js
// @description 21/10/2025, 13.21.43
// ==/UserScript==
var state = false;
var styleNode = null;
var targetNode = document.getElementsByClassName("filters")[0];
function toggleScores()
{
  if(state)
  {
    styleNode.innerHTML = "";
    state = false;
    return;
  }
  styleNode.innerHTML = ".score {display:none!important;}";
  state = true;
}
function createToggleButton()
{
  var btn = document.createElement("button");
  btn.id = "toggleScoresBtn";
  btn.appendChild(document.createTextNode("Toggle Scores!!"));
  btn.onclick = toggleScores
  btn.style.backgroundColor = "#3db4f2";
  btn.style.color = "white";
  btn.style.borderRadius = "6px";
  targetNode.appendChild(btn);

}
function createStyleNode()
{
  styleNode = document.createElement("style");
  styleNode.id = "toggleScoresStyles";
  document.getElementsByTagName("head")[0].appendChild(styleNode);
  styleNode = document.getElementById("toggleScoresStyles");

}
function Init_ScoreToggle()
{
  createStyleNode();
  createToggleButton();
  console.log("Toggle Anilist Scores: Button initilized");
}

function CheckForTarget(mutationList, observer)
{
  for (const mutation of mutationList)
    {
      if(document.getElementsByClassName("filters")[0])
        {
          targetNode = document.getElementsByClassName("filters")[0];
          Init_ScoreToggle();
          observer.disconnect();
          return;
        }
    }
}

const mo = new MutationObserver(CheckForTarget);
if(!targetNode)
  {
    console.log("Toggle Anilist Scores: Failed to locate filters - Observing page for changes...")
    mo.observe(document.body, { attributes: false, childList: true, subtree: true });
  }
else
  {
    Init_ScoreToggle();
  }

