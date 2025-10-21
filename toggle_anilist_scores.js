// ==UserScript==
// @name        Toggle Anilist Scores Script
// @namespace   Violentmonkey Scripts
// @match       https://anilist.co/search/*
// @grant       none
// @version     1.0
// @author      AnzoDK
// @downloadURL https://github.com/AnzoDK/Anilist-Toggle-Scores/releases/latest/download/toggle_anilist_scores.js
// @description 21/10/2025, 13.21.43
// ==/UserScript==
var styleSheetRuleIndex = -1;
function toggleScores()
{
  if(styleSheetRuleIndex != -1)
  {
    document.styleSheets[0].removeRule(styleSheetRuleIndex);
    styleSheetRuleIndex = -1;
    return;
  }
  var index = document.styleSheets[0].insertRule(".score {display:none!important;}",document.styleSheets[0].rules.length);
  styleSheetRuleIndex = index;
}
var btn = document.createElement("button");
btn.id = "toggleScoresBtn";
btn.appendChild(document.createTextNode("Toggle Scores!!"));
btn.onclick = toggleScores
btn.style.backgroundColor = "#3db4f2";
btn.style.color = "white";
btn.style.borderRadius = "6px";
document.getElementsByClassName("filters")[0].appendChild(btn);
