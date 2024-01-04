---
layout: null
permalink: /bom/
---


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive BOM for KiCAD</title>
  <style type="text/css">
:root {
  --pcb-edge-color: black;
  --pad-color: #878787;
  --pad-hole-color: #CCCCCC;
  --pad-color-highlight: #D04040;
  --pin1-outline-color: #ffb629;
  --pin1-outline-color-highlight: #b4ff03;
  --silkscreen-edge-color: #aa4;
  --silkscreen-polygon-color: #4aa;
  --silkscreen-text-color: #4aa;
  --fabrication-edge-color: #907651;
  --fabrication-polygon-color: #907651;
  --fabrication-text-color: #a27c24;
  --track-color: #def5f1;
  --track-color-highlight: #D04040;
  --zone-color: #def5f1;
  --zone-color-highlight: #d0404080;
}

html, body {
  margin: 0px;
  height: 100%;
  font-family: Verdana, sans-serif;
}

.dark.topmostdiv {
  --pcb-edge-color: #eee;
  --pad-color: #808080;
  --pin1-outline-color: #ffa800;
  --pin1-outline-color-highlight: #ccff00;
  --track-color: #42524f;
  --zone-color: #42524f;
  background-color: #252c30;
  color: #eee;
}

button {
  background-color: #eee;
  border: 1px solid #888;
  color: black;
  height: 44px;
  width: 44px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: bolder;
}

.dark button {
  /* This will be inverted */
  background-color: #c3b7b5;
}

button.depressed {
  background-color: #0a0;
  color: white;
}

.dark button.depressed {
  /* This will be inverted */
  background-color: #b3b;
}

button:focus {
  outline: 0;
}

button#tb-btn {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8.47 8.47'%3E%3Crect transform='translate(0 -288.53)' ry='1.17' y='288.8' x='.27' height='7.94' width='7.94' fill='%23f9f9f9'/%3E%3Cg transform='translate(0 -288.53)'%3E%3Crect width='7.94' height='7.94' x='.27' y='288.8' ry='1.17' fill='none' stroke='%23000' stroke-width='.4' stroke-linejoin='round'/%3E%3Cpath d='M1.32 290.12h5.82M1.32 291.45h5.82' fill='none' stroke='%23000' stroke-width='.4'/%3E%3Cpath d='M4.37 292.5v4.23M.26 292.63H8.2' fill='none' stroke='%23000' stroke-width='.3'/%3E%3Ctext font-weight='700' font-size='3.17' font-family='sans-serif'%3E%3Ctspan x='1.35' y='295.73'%3EF%3C/tspan%3E%3Ctspan x='5.03' y='295.68'%3EB%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E%0A");
}

button#lr-btn {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8.47 8.47'%3E%3Crect transform='translate(0 -288.53)' ry='1.17' y='288.8' x='.27' height='7.94' width='7.94' fill='%23f9f9f9'/%3E%3Cg transform='translate(0 -288.53)'%3E%3Crect width='7.94' height='7.94' x='.27' y='288.8' ry='1.17' fill='none' stroke='%23000' stroke-width='.4' stroke-linejoin='round'/%3E%3Cpath d='M1.06 290.12H3.7m-2.64 1.33H3.7m-2.64 1.32H3.7m-2.64 1.3H3.7m-2.64 1.33H3.7' fill='none' stroke='%23000' stroke-width='.4'/%3E%3Cpath d='M4.37 288.8v7.94m0-4.11h3.96' fill='none' stroke='%23000' stroke-width='.3'/%3E%3Ctext font-weight='700' font-size='3.17' font-family='sans-serif'%3E%3Ctspan x='5.11' y='291.96'%3EF%3C/tspan%3E%3Ctspan x='5.03' y='295.68'%3EB%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E%0A");
}

button#bom-btn {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8.47 8.47'%3E%3Crect transform='translate(0 -288.53)' ry='1.17' y='288.8' x='.27' height='7.94' width='7.94' fill='%23f9f9f9'/%3E%3Cg transform='translate(0 -288.53)' fill='none' stroke='%23000' stroke-width='.4'%3E%3Crect width='7.94' height='7.94' x='.27' y='288.8' ry='1.17' stroke-linejoin='round'/%3E%3Cpath d='M1.59 290.12h5.29M1.59 291.45h5.33M1.59 292.75h5.33M1.59 294.09h5.33M1.59 295.41h5.33'/%3E%3C/g%3E%3C/svg%3E");
}

button#bom-grouped-btn {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cg stroke='%23000' stroke-linejoin='round' class='layer'%3E%3Crect width='29' height='29' x='1.5' y='1.5' stroke-width='2' fill='%23fff' rx='5' ry='5'/%3E%3Cpath stroke-linecap='square' stroke-width='2' d='M6 10h4m4 0h5m4 0h3M6.1 22h3m3.9 0h5m4 0h4m-16-8h4m4 0h4'/%3E%3Cpath stroke-linecap='null' d='M5 17.5h22M5 26.6h22M5 5.5h22'/%3E%3C/g%3E%3C/svg%3E");
}

button#bom-ungrouped-btn {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cg stroke='%23000' stroke-linejoin='round' class='layer'%3E%3Crect width='29' height='29' x='1.5' y='1.5' stroke-width='2' fill='%23fff' rx='5' ry='5'/%3E%3Cpath stroke-linecap='square' stroke-width='2' d='M6 10h4m-4 8h3m-3 8h4'/%3E%3Cpath stroke-linecap='null' d='M5 13.5h22m-22 8h22M5 5.5h22'/%3E%3C/g%3E%3C/svg%3E");
}

button#bom-netlist-btn {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cg fill='none' stroke='%23000' class='layer'%3E%3Crect width='29' height='29' x='1.5' y='1.5' stroke-width='2' fill='%23fff' rx='5' ry='5'/%3E%3Cpath stroke-width='2' d='M6 26l6-6v-8m13.8-6.3l-6 6v8'/%3E%3Ccircle cx='11.8' cy='9.5' r='2.8' stroke-width='2'/%3E%3Ccircle cx='19.8' cy='22.8' r='2.8' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E");
}

button#copy {
  background-image: url("data:image/svg+xml,%3Csvg height='48' viewBox='0 0 48 48' width='48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h48v48h-48z' fill='none'/%3E%3Cpath d='M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z'/%3E%3C/svg%3E");
  background-position: 6px 6px;
  background-repeat: no-repeat;
  background-size: 26px 26px;
  border-radius: 6px;
  height: 40px;
  width: 40px;
  margin: 10px 5px;
}

button#copy:active {
    box-shadow: inset 0px 0px 5px #6c6c6c;
}

textarea.clipboard-temp {
  position: fixed;
  top: 0;
  left: 0;
  width: 2em;
  height: 2em;
  padding: 0;
  border: None;
  outline: None;
  box-shadow: None;
  background: transparent;
}

.left-most-button {
  border-right: 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.middle-button {
  border-right: 0;
}

.right-most-button {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.button-container {
  font-size: 0;
  margin: 10px 10px 10px 0px;
}

.dark .button-container {
  filter: invert(1);
}

.button-container button {
  background-size: 32px 32px;
  background-position: 5px 5px;
  background-repeat: no-repeat;
}

@media print {
  .hideonprint {
    display: none;
  }
}

canvas {
  cursor: crosshair;
}

canvas:active {
  cursor: grabbing;
}

.fileinfo {
  width: 100%;
  max-width: 1000px;
  border: none;
  padding: 5px;
}

.fileinfo .title {
  font-size: 20pt;
  font-weight: bold;
}

.fileinfo td {
  overflow: hidden;
  white-space: nowrap;
  max-width: 1px;
  width: 50%;
  text-overflow: ellipsis;
}

.bom {
  border-collapse: collapse;
  font-family: Consolas, "DejaVu Sans Mono", Monaco, monospace;
  font-size: 10pt;
  table-layout: fixed;
  width: 100%;
  margin-top: 1px;
}

.bom th, .bom td {
  border: 1px solid black;
  padding: 5px;
  word-wrap: break-word;
  text-align: center;
  position: relative;
}

.dark .bom th, .dark .bom td {
  border: 1px solid #777;
}

.bom th {
  background-color: #CCCCCC;
  background-clip: padding-box;
}

.dark .bom th {
  background-color: #3b4749;
}

.bom tr.highlighted:nth-child(n) {
  background-color: #cfc;
}

.dark .bom tr.highlighted:nth-child(n) {
  background-color: #226022;
}

.bom tr:nth-child(even) {
  background-color: #f2f2f2;
}

.dark .bom tr:nth-child(even) {
  background-color: #313b40;
}

.bom tr.checked {
  color: #aaa;
}

.dark .bom tr.checked {
  color: #666;
}

.bom tr {
  transition: background-color 0.2s;
}

.bom .numCol {
  width: 25px;
}

.bom .Description {
  width: 10%;
}

.bom .Part {
  width: 10%;
}

.bom .Value {
  width: 15%;
}

.bom .Quantity {
  width: 65px;
}

.bom th .sortmark {
  position: absolute;
  right: 1px;
  top: 1px;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #221 transparent;
  transform-origin: 50% 85%;
  transition: opacity 0.2s, transform 0.4s;
}

.dark .bom th .sortmark {
  filter: invert(1);
}

.bom th .sortmark.none {
  opacity: 0;
}

.bom th .sortmark.desc {
  transform: rotate(180deg);
}

.bom th:hover .sortmark.none {
  opacity: 0.5;
}

.bom .bom-checkbox {
  width: 30px;
  position: relative;
  user-select: none;
  -moz-user-select: none;
}

.bom .bom-checkbox:before {
  content: "";
  position: absolute;
  border-width: 15px;
  border-style: solid;
  border-color: #51829f transparent transparent transparent;
  visibility: hidden;
  top: -15px;
}

.bom .bom-checkbox:after {
  content: "Double click to set/unset all";
  position: absolute;
  color: white;
  top: -35px;
  left: -26px;
  background: #51829f;
  padding: 5px 15px;
  border-radius: 8px;
  white-space: nowrap;
  visibility: hidden;
}

.bom .bom-checkbox:hover:before, .bom .bom-checkbox:hover:after {
  visibility: visible;
  transition: visibility 0.2s linear 1s;
}

.split {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: inherit;
}

.split.split-horizontal, .gutter.gutter-horizontal {
  height: 100%;
  float: left;
}

.gutter {
  background-color: #ddd;
  background-repeat: no-repeat;
  background-position: 50%;
  transition: background-color 0.3s;
}

.dark .gutter {
  background-color: #777;
}

.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: ew-resize;
  width: 5px;
}

.gutter.gutter-vertical {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
  cursor: ns-resize;
  height: 5px;
}

.searchbox {
  float: left;
  height: 40px;
  margin: 10px 5px;
  padding: 12px 32px;
  font-family: Consolas, "DejaVu Sans Mono", Monaco, monospace;
  font-size: 18px;
  box-sizing: border-box;
  border: 1px solid #888;
  border-radius: 6px;
  outline: none;
  background-color: #eee;
  transition: background-color 0.2s, border 0.2s;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNklEQVQ4T8XSMUvDQBQH8P/LElFa/AIZHcTBQSz0I/gFstTBRR2KUC4ldDxw7h0Bl3RRUATxi4iiODgoiLNrbQYp5J6cpJJqomkX33Z37/14d/dIa33MzDuYI4johOI4XhyNRteO46zNYjDzAxE1yBZprVeZ+QbAUhXEGJMA2Ox2u4+fQIa0mPmsCgCgJYQ4t7lfgF0opQYAdv9ABkKI/UnOFCClXKjX61cA1osQY8x9kiRNKeV7IWA3oyhaSdP0FkAtjxhj3hzH2RBCPOf3pzqYHCilfAAX+URm9oMguPzeWSGQvUcMYC8rOBJCHBRdqxTo9/vbRHRqi8bj8XKv1xvODbiuW2u32/bvf0SlDv4XYOY7z/Mavu+nM1+BmQ+NMc0wDF/LprP0DbTWW0T00ul0nn4b7Q87+X4Qmfiq2wAAAABJRU5ErkJggg==');
  background-position: 10px 10px;
  background-repeat: no-repeat;
}

.dark .searchbox {
  background-color: #111;
  color: #eee;
}

.searchbox::placeholder {
  color: #ccc;
}

.dark .searchbox::placeholder {
  color: #666;
}

.filter {
  width: calc(60% - 64px);
}

.reflookup {
  width: calc(40% - 10px);
}

input[type=text]:focus {
  background-color: white;
  border: 1px solid #333;
}

.dark input[type=text]:focus {
  background-color: #333;
  border: 1px solid #ccc;
}

mark.highlight {
  background-color: #5050ff;
  color: #fff;
  padding: 2px;
  border-radius: 6px;
}

.dark mark.highlight {
  background-color: #76a6da;
  color: #111;
}

.menubtn {
  background-color: white;
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 20 20'%3E%3Cpath fill='none' d='M0 0h20v20H0V0z'/%3E%3Cpath d='M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'/%3E%3C/svg%3E%0A");
  background-position: center;
  background-repeat: no-repeat;
}

.statsbtn {
  background-color: white;
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6h28v24H4V6zm0 8h28v8H4m9-16v24h10V5.8' fill='none' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
}

.iobtn {
  background-color: white;
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Cpath fill='none' stroke='%23000' stroke-width='2' d='M3 33v-7l6.8-7h16.5l6.7 7v7H3zM3.2 26H33M21 9l5-5.9 5 6h-2.5V15h-5V9H21zm-4.9 0l-5 6-5-6h2.5V3h5v6h2.5z'/%3E%3Cpath fill='none' stroke='%23000' d='M6.1 29.5H10'/%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
}

.dark .statsbtn, .dark .savebtn, .dark .menubtn, .dark .iobtn {
  filter: invert(1);
}

.flexbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.savebtn {
  background-color: #d6d6d6;
  width: auto;
  height: 30px;
  flex-grow: 1;
  margin: 5px;
  border-radius: 4px;
}

.savebtn:active {
  background-color: #0a0;
  color: white;
}

.dark .savebtn:active {
  /* This will be inverted */
  background-color: #b3b;
}

.stats {
  border-collapse: collapse;
  font-size: 12pt;
  table-layout: fixed;
  width: 100%;
  min-width: 450px;
}

.dark .stats td {
  border: 1px solid #bbb;
}

.stats td {
  border: 1px solid black;
  padding: 5px;
  word-wrap: break-word;
  text-align: center;
  position: relative;
}

#checkbox-stats div {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#checkbox-stats .bar {
  background-color: rgba(28, 251, 0, 0.6);
}

.menu {
  position: relative;
  display: inline-block;
  margin: 10px 10px 10px 0px;
}

.menu-content {
  display: none;
  position: absolute;
  background-color: white;
  right: 0;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  padding: 8px;
}

.dark .menu-content {
  background-color: #111;
}

.menu:hover .menu-content {
  display: block;
}

.menu:hover .menubtn, .menu:hover .iobtn, .menu:hover .statsbtn {
  background-color: #eee;
}

.menu-label {
  display: inline-block;
  padding: 8px;
  border: 1px solid #ccc;
  border-top: 0;
  width: calc(100% - 18px);
}

.menu-label-top {
  border-top: 1px solid #ccc;
}

.menu-textbox {
  float: left;
  height: 24px;
  margin: 10px 5px;
  padding: 5px 5px;
  font-family: Consolas, "DejaVu Sans Mono", Monaco, monospace;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid #888;
  border-radius: 4px;
  outline: none;
  background-color: #eee;
  transition: background-color 0.2s, border 0.2s;
  width: calc(100% - 10px);
}

.menu-textbox.invalid, .dark .menu-textbox.invalid {
  color: red;
}

.dark .menu-textbox {
  background-color: #222;
  color: #eee;
}

.radio-container {
  margin: 4px;
}

.topmostdiv {
  width: 100%;
  height: 100%;
  background-color: white;
  transition: background-color 0.3s;
}

#top {
  height: 78px;
  border-bottom: 2px solid black;
}

.dark #top {
  border-bottom: 2px solid #ccc;
}

#dbg {
  display: block;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #aaa;
}

::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  margin: 3px 0;
  padding: 0;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 3px;
}

.slider:hover {
  opacity: 1;
}

.slider:focus {
  outline: none;
}

.slider::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: #d3d3d3;
  border-radius: 3px;
  border: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #0a0;
  cursor: pointer;
  margin-top: -4px;
}

.dark .slider::-webkit-slider-thumb {
  background: #3d3;
}

.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #0a0;
  cursor: pointer;
}

.slider::-moz-range-track {
  height: 8px;
  background: #d3d3d3;
  border-radius: 3px;
}

.dark .slider::-moz-range-thumb {
  background: #3d3;
}

.slider::-ms-track {
  width: 100%;
  height: 8px;
  border-width: 3px 0;
  background: transparent;
  border-color: transparent;
  color: transparent;
  transition: opacity .2s;
}

.slider::-ms-fill-lower {
  background: #d3d3d3;
  border: none;
  border-radius: 3px;
}

.slider::-ms-fill-upper {
  background: #d3d3d3;
  border: none;
  border-radius: 3px;
}

.slider::-ms-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #0a0;
  cursor: pointer;
  margin: 0;
}

.shameless-plug {
  font-size: 0.8em;
  text-align: center;
  display: block;
}

a {
  color: #0278a4;
}

.dark a {
  color: #00b9fd;
}

#frontcanvas, #backcanvas {
    touch-action: none;
}


  </style>
  <script type="text/javascript" >
///////////////////////////////////////////////
/*
  Split.js - v1.3.5
  MIT License
  https://github.com/nathancahill/Split.js
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Split=t()}(this,function(){"use strict";var e=window,t=e.document,n="addEventListener",i="removeEventListener",r="getBoundingClientRect",s=function(){return!1},o=e.attachEvent&&!e[n],a=["","-webkit-","-moz-","-o-"].filter(function(e){var n=t.createElement("div");return n.style.cssText="width:"+e+"calc(9px)",!!n.style.length}).shift()+"calc",l=function(e){return"string"==typeof e||e instanceof String?t.querySelector(e):e};return function(u,c){function z(e,t,n){var i=A(y,t,n);Object.keys(i).forEach(function(t){return e.style[t]=i[t]})}function h(e,t){var n=B(y,t);Object.keys(n).forEach(function(t){return e.style[t]=n[t]})}function f(e){var t=E[this.a],n=E[this.b],i=t.size+n.size;t.size=e/this.size*i,n.size=i-e/this.size*i,z(t.element,t.size,this.aGutterSize),z(n.element,n.size,this.bGutterSize)}function m(e){var t;this.dragging&&((t="touches"in e?e.touches[0][b]-this.start:e[b]-this.start)<=E[this.a].minSize+M+this.aGutterSize?t=E[this.a].minSize+this.aGutterSize:t>=this.size-(E[this.b].minSize+M+this.bGutterSize)&&(t=this.size-(E[this.b].minSize+this.bGutterSize)),f.call(this,t),c.onDrag&&c.onDrag())}function g(){var e=E[this.a].element,t=E[this.b].element;this.size=e[r]()[y]+t[r]()[y]+this.aGutterSize+this.bGutterSize,this.start=e[r]()[G]}function d(){var t=this,n=E[t.a].element,r=E[t.b].element;t.dragging&&c.onDragEnd&&c.onDragEnd(),t.dragging=!1,e[i]("mouseup",t.stop),e[i]("touchend",t.stop),e[i]("touchcancel",t.stop),t.parent[i]("mousemove",t.move),t.parent[i]("touchmove",t.move),delete t.stop,delete t.move,n[i]("selectstart",s),n[i]("dragstart",s),r[i]("selectstart",s),r[i]("dragstart",s),n.style.userSelect="",n.style.webkitUserSelect="",n.style.MozUserSelect="",n.style.pointerEvents="",r.style.userSelect="",r.style.webkitUserSelect="",r.style.MozUserSelect="",r.style.pointerEvents="",t.gutter.style.cursor="",t.parent.style.cursor=""}function S(t){var i=this,r=E[i.a].element,o=E[i.b].element;!i.dragging&&c.onDragStart&&c.onDragStart(),t.preventDefault(),i.dragging=!0,i.move=m.bind(i),i.stop=d.bind(i),e[n]("mouseup",i.stop),e[n]("touchend",i.stop),e[n]("touchcancel",i.stop),i.parent[n]("mousemove",i.move),i.parent[n]("touchmove",i.move),r[n]("selectstart",s),r[n]("dragstart",s),o[n]("selectstart",s),o[n]("dragstart",s),r.style.userSelect="none",r.style.webkitUserSelect="none",r.style.MozUserSelect="none",r.style.pointerEvents="none",o.style.userSelect="none",o.style.webkitUserSelect="none",o.style.MozUserSelect="none",o.style.pointerEvents="none",i.gutter.style.cursor=j,i.parent.style.cursor=j,g.call(i)}function v(e){e.forEach(function(t,n){if(n>0){var i=F[n-1],r=E[i.a],s=E[i.b];r.size=e[n-1],s.size=t,z(r.element,r.size,i.aGutterSize),z(s.element,s.size,i.bGutterSize)}})}function p(){F.forEach(function(e){e.parent.removeChild(e.gutter),E[e.a].element.style[y]="",E[e.b].element.style[y]=""})}void 0===c&&(c={});var y,b,G,E,w=l(u[0]).parentNode,D=e.getComputedStyle(w).flexDirection,U=c.sizes||u.map(function(){return 100/u.length}),k=void 0!==c.minSize?c.minSize:100,x=Array.isArray(k)?k:u.map(function(){return k}),L=void 0!==c.gutterSize?c.gutterSize:10,M=void 0!==c.snapOffset?c.snapOffset:30,O=c.direction||"horizontal",j=c.cursor||("horizontal"===O?"ew-resize":"ns-resize"),C=c.gutter||function(e,n){var i=t.createElement("div");return i.className="gutter gutter-"+n,i},A=c.elementStyle||function(e,t,n){var i={};return"string"==typeof t||t instanceof String?i[e]=t:i[e]=o?t+"%":a+"("+t+"% - "+n+"px)",i},B=c.gutterStyle||function(e,t){return n={},n[e]=t+"px",n;var n};"horizontal"===O?(y="width","clientWidth",b="clientX",G="left","paddingLeft"):"vertical"===O&&(y="height","clientHeight",b="clientY",G="top","paddingTop");var F=[];return E=u.map(function(e,t){var i,s={element:l(e),size:U[t],minSize:x[t]};if(t>0&&(i={a:t-1,b:t,dragging:!1,isFirst:1===t,isLast:t===u.length-1,direction:O,parent:w},i.aGutterSize=L,i.bGutterSize=L,i.isFirst&&(i.aGutterSize=L/2),i.isLast&&(i.bGutterSize=L/2),"row-reverse"===D||"column-reverse"===D)){var a=i.a;i.a=i.b,i.b=a}if(!o&&t>0){var c=C(t,O);h(c,L),c[n]("mousedown",S.bind(i)),c[n]("touchstart",S.bind(i)),w.insertBefore(c,s.element),i.gutter=c}0===t||t===u.length-1?z(s.element,s.size,L/2):z(s.element,s.size,L);var f=s.element[r]()[y];return f<s.minSize&&(s.minSize=f),t>0&&F.push(i),s}),o?{setSizes:v,destroy:p}:{setSizes:v,getSizes:function(){return E.map(function(e){return e.size})},collapse:function(e){if(e===F.length){var t=F[e-1];g.call(t),o||f.call(t,t.size-t.bGutterSize)}else{var n=F[e];g.call(n),o||f.call(n,n.aGutterSize)}},destroy:p}}});

///////////////////////////////////////////////

///////////////////////////////////////////////
// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString=function(){var o=String.fromCharCode,i={};var n={decompressFromBase64:function(o){return null==o?"":""==o?null:n._decompress(o.length,32,function(n){return function(o,n){if(!i[o]){i[o]={};for(var t=0;t<o.length;t++)i[o][o.charAt(t)]=t}return i[o][n]}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o.charAt(n))})},_decompress:function(i,n,t){var r,e,a,s,p,u,l,f=[],c=4,d=4,h=3,v="",g=[],m={val:t(0),position:n,index:1};for(r=0;r<3;r+=1)f[r]=r;for(a=0,p=Math.pow(2,2),u=1;u!=p;)s=m.val&m.position,m.position>>=1,0==m.position&&(m.position=n,m.val=t(m.index++)),a|=(s>0?1:0)*u,u<<=1;switch(a){case 0:for(a=0,p=Math.pow(2,8),u=1;u!=p;)s=m.val&m.position,m.position>>=1,0==m.position&&(m.position=n,m.val=t(m.index++)),a|=(s>0?1:0)*u,u<<=1;l=o(a);break;case 1:for(a=0,p=Math.pow(2,16),u=1;u!=p;)s=m.val&m.position,m.position>>=1,0==m.position&&(m.position=n,m.val=t(m.index++)),a|=(s>0?1:0)*u,u<<=1;l=o(a);break;case 2:return""}for(f[3]=l,e=l,g.push(l);;){if(m.index>i)return"";for(a=0,p=Math.pow(2,h),u=1;u!=p;)s=m.val&m.position,m.position>>=1,0==m.position&&(m.position=n,m.val=t(m.index++)),a|=(s>0?1:0)*u,u<<=1;switch(l=a){case 0:for(a=0,p=Math.pow(2,8),u=1;u!=p;)s=m.val&m.position,m.position>>=1,0==m.position&&(m.position=n,m.val=t(m.index++)),a|=(s>0?1:0)*u,u<<=1;f[d++]=o(a),l=d-1,c--;break;case 1:for(a=0,p=Math.pow(2,16),u=1;u!=p;)s=m.val&m.position,m.position>>=1,0==m.position&&(m.position=n,m.val=t(m.index++)),a|=(s>0?1:0)*u,u<<=1;f[d++]=o(a),l=d-1,c--;break;case 2:return g.join("")}if(0==c&&(c=Math.pow(2,h),h++),f[l])v=f[l];else{if(l!==d)return null;v=e+e.charAt(0)}g.push(v),f[d++]=e+v.charAt(0),e=v,0==--c&&(c=Math.pow(2,h),h++)}}};return n}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});
///////////////////////////////////////////////

///////////////////////////////////////////////
/*!
 * PEP v0.4.3 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */
 !function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.PointerEventsPolyfill=b()}(this,function(){"use strict";function a(a,b){b=b||Object.create(null);var c=document.createEvent("Event");c.initEvent(a,b.bubbles||!1,b.cancelable||!1);
 for(var d,e=2;e<m.length;e++)d=m[e],c[d]=b[d]||n[e];c.buttons=b.buttons||0;
 var f=0;return f=b.pressure&&c.buttons?b.pressure:c.buttons?.5:0,c.x=c.clientX,c.y=c.clientY,c.pointerId=b.pointerId||0,c.width=b.width||0,c.height=b.height||0,c.pressure=f,c.tiltX=b.tiltX||0,c.tiltY=b.tiltY||0,c.twist=b.twist||0,c.tangentialPressure=b.tangentialPressure||0,c.pointerType=b.pointerType||"",c.hwTimestamp=b.hwTimestamp||0,c.isPrimary=b.isPrimary||!1,c}function b(){this.array=[],this.size=0}function c(a,b,c,d){this.addCallback=a.bind(d),this.removeCallback=b.bind(d),this.changedCallback=c.bind(d),A&&(this.observer=new A(this.mutationWatcher.bind(this)))}function d(a){return"body /shadow-deep/ "+e(a)}function e(a){return'[touch-action="'+a+'"]'}function f(a){return"{ -ms-touch-action: "+a+"; touch-action: "+a+"; }"}function g(){if(F){D.forEach(function(a){String(a)===a?(E+=e(a)+f(a)+"\n",G&&(E+=d(a)+f(a)+"\n")):(E+=a.selectors.map(e)+f(a.rule)+"\n",G&&(E+=a.selectors.map(d)+f(a.rule)+"\n"))});var a=document.createElement("style");a.textContent=E,document.head.appendChild(a)}}function h(){if(!window.PointerEvent){if(window.PointerEvent=a,window.navigator.msPointerEnabled){var b=window.navigator.msMaxTouchPoints;Object.defineProperty(window.navigator,"maxTouchPoints",{value:b,enumerable:!0}),u.registerSource("ms",_)}else Object.defineProperty(window.navigator,"maxTouchPoints",{value:0,enumerable:!0}),u.registerSource("mouse",N),void 0!==window.ontouchstart&&u.registerSource("touch",V);u.register(document)}}function i(a){if(!u.pointermap.has(a)){var b=new Error("InvalidPointerId");throw b.name="InvalidPointerId",b}}function j(a){for(var b=a.parentNode;b&&b!==a.ownerDocument;)b=b.parentNode;if(!b){var c=new Error("InvalidStateError");throw c.name="InvalidStateError",c}}function k(a){var b=u.pointermap.get(a);return 0!==b.buttons}function l(){window.Element&&!Element.prototype.setPointerCapture&&Object.defineProperties(Element.prototype,{setPointerCapture:{value:W},releasePointerCapture:{value:X},hasPointerCapture:{value:Y}})}
 var m=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","pageX","pageY"],n=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0],o=window.Map&&window.Map.prototype.forEach,p=o?Map:b;b.prototype={set:function(a,b){return void 0===b?this["delete"](a):(this.has(a)||this.size++,void(this.array[a]=b))},has:function(a){return void 0!==this.array[a]},"delete":function(a){this.has(a)&&(delete this.array[a],this.size--)},get:function(a){return this.array[a]},clear:function(){this.array.length=0,this.size=0},forEach:function(a,b){return this.array.forEach(function(c,d){a.call(b,c,d,this)},this)}};var q=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which","pageX","pageY","timeStamp"],r=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0],s={pointerover:1,pointerout:1,pointerenter:1,pointerleave:1},t="undefined"!=typeof SVGElementInstance,u={pointermap:new p,eventMap:Object.create(null),captureInfo:Object.create(null),eventSources:Object.create(null),eventSourceList:[],registerSource:function(a,b){var c=b,d=c.events;d&&(d.forEach(function(a){c[a]&&(this.eventMap[a]=c[a].bind(c))},this),this.eventSources[a]=c,this.eventSourceList.push(c))},register:function(a){for(var b,c=this.eventSourceList.length,d=0;d<c&&(b=this.eventSourceList[d]);d++)
 b.register.call(b,a)},unregister:function(a){for(var b,c=this.eventSourceList.length,d=0;d<c&&(b=this.eventSourceList[d]);d++)
 b.unregister.call(b,a)},contains:function(a,b){try{return a.contains(b)}catch(c){return!1}},down:function(a){a.bubbles=!0,this.fireEvent("pointerdown",a)},move:function(a){a.bubbles=!0,this.fireEvent("pointermove",a)},up:function(a){a.bubbles=!0,this.fireEvent("pointerup",a)},enter:function(a){a.bubbles=!1,this.fireEvent("pointerenter",a)},leave:function(a){a.bubbles=!1,this.fireEvent("pointerleave",a)},over:function(a){a.bubbles=!0,this.fireEvent("pointerover",a)},out:function(a){a.bubbles=!0,this.fireEvent("pointerout",a)},cancel:function(a){a.bubbles=!0,this.fireEvent("pointercancel",a)},leaveOut:function(a){this.out(a),this.propagate(a,this.leave,!1)},enterOver:function(a){this.over(a),this.propagate(a,this.enter,!0)},eventHandler:function(a){if(!a._handledByPE){var b=a.type,c=this.eventMap&&this.eventMap[b];c&&c(a),a._handledByPE=!0}},listen:function(a,b){b.forEach(function(b){this.addEvent(a,b)},this)},unlisten:function(a,b){b.forEach(function(b){this.removeEvent(a,b)},this)},addEvent:function(a,b){a.addEventListener(b,this.boundHandler)},removeEvent:function(a,b){a.removeEventListener(b,this.boundHandler)},makeEvent:function(b,c){this.captureInfo[c.pointerId]&&(c.relatedTarget=null);var d=new a(b,c);return c.preventDefault&&(d.preventDefault=c.preventDefault),d._target=d._target||c.target,d},fireEvent:function(a,b){var c=this.makeEvent(a,b);return this.dispatchEvent(c)},cloneEvent:function(a){for(var b,c=Object.create(null),d=0;d<q.length;d++)b=q[d],c[b]=a[b]||r[d],!t||"target"!==b&&"relatedTarget"!==b||c[b]instanceof SVGElementInstance&&(c[b]=c[b].correspondingUseElement);return a.preventDefault&&(c.preventDefault=function(){a.preventDefault()}),c},getTarget:function(a){var b=this.captureInfo[a.pointerId];return b?a._target!==b&&a.type in s?void 0:b:a._target},propagate:function(a,b,c){for(var d=a.target,e=[];d!==document&&!d.contains(a.relatedTarget);) if(e.push(d),d=d.parentNode,!d)return;c&&e.reverse(),e.forEach(function(c){a.target=c,b.call(this,a)},this)},setCapture:function(b,c,d){this.captureInfo[b]&&this.releaseCapture(b,d),this.captureInfo[b]=c,this.implicitRelease=this.releaseCapture.bind(this,b,d),document.addEventListener("pointerup",this.implicitRelease),document.addEventListener("pointercancel",this.implicitRelease);var e=new a("gotpointercapture");e.pointerId=b,e._target=c,d||this.asyncDispatchEvent(e)},releaseCapture:function(b,c){var d=this.captureInfo[b];if(d){this.captureInfo[b]=void 0,document.removeEventListener("pointerup",this.implicitRelease),document.removeEventListener("pointercancel",this.implicitRelease);var e=new a("lostpointercapture");e.pointerId=b,e._target=d,c||this.asyncDispatchEvent(e)}},dispatchEvent:/*scope.external.dispatchEvent || */function(a){var b=this.getTarget(a);if(b)return b.dispatchEvent(a)},asyncDispatchEvent:function(a){requestAnimationFrame(this.dispatchEvent.bind(this,a))}};u.boundHandler=u.eventHandler.bind(u);var v={shadow:function(a){if(a)return a.shadowRoot||a.webkitShadowRoot},canTarget:function(a){return a&&Boolean(a.elementFromPoint)},targetingShadow:function(a){var b=this.shadow(a);if(this.canTarget(b))return b},olderShadow:function(a){var b=a.olderShadowRoot;if(!b){var c=a.querySelector("shadow");c&&(b=c.olderShadowRoot)}return b},allShadows:function(a){for(var b=[],c=this.shadow(a);c;)b.push(c),c=this.olderShadow(c);return b},searchRoot:function(a,b,c){if(a){var d,e,f=a.elementFromPoint(b,c);for(e=this.targetingShadow(f);e;){if(d=e.elementFromPoint(b,c)){var g=this.targetingShadow(d);return this.searchRoot(g,b,c)||d} e=this.olderShadow(e)} return f}},owner:function(a){
 for(var b=a;b.parentNode;)b=b.parentNode;
 return b.nodeType!==Node.DOCUMENT_NODE&&b.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&(b=document),b},findTarget:function(a){var b=a.clientX,c=a.clientY,d=this.owner(a.target);
 return d.elementFromPoint(b,c)||(d=document),this.searchRoot(d,b,c)}},w=Array.prototype.forEach.call.bind(Array.prototype.forEach),x=Array.prototype.map.call.bind(Array.prototype.map),y=Array.prototype.slice.call.bind(Array.prototype.slice),z=Array.prototype.filter.call.bind(Array.prototype.filter),A=window.MutationObserver||window.WebKitMutationObserver,B="[touch-action]",C={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["touch-action"]};c.prototype={watchSubtree:function(a){
 //
 this.observer&&v.canTarget(a)&&this.observer.observe(a,C)},enableOnSubtree:function(a){this.watchSubtree(a),a===document&&"complete"!==document.readyState?this.installOnLoad():this.installNewSubtree(a)},installNewSubtree:function(a){w(this.findElements(a),this.addElement,this)},findElements:function(a){return a.querySelectorAll?a.querySelectorAll(B):[]},removeElement:function(a){this.removeCallback(a)},addElement:function(a){this.addCallback(a)},elementChanged:function(a,b){this.changedCallback(a,b)},concatLists:function(a,b){return a.concat(y(b))},
 installOnLoad:function(){document.addEventListener("readystatechange",function(){"complete"===document.readyState&&this.installNewSubtree(document)}.bind(this))},isElement:function(a){return a.nodeType===Node.ELEMENT_NODE},flattenMutationTree:function(a){
 var b=x(a,this.findElements,this);
 return b.push(z(a,this.isElement)),b.reduce(this.concatLists,[])},mutationWatcher:function(a){a.forEach(this.mutationHandler,this)},mutationHandler:function(a){if("childList"===a.type){var b=this.flattenMutationTree(a.addedNodes);b.forEach(this.addElement,this);var c=this.flattenMutationTree(a.removedNodes);c.forEach(this.removeElement,this)}else"attributes"===a.type&&this.elementChanged(a.target,a.oldValue)}};var D=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]}],E="",F=window.PointerEvent||window.MSPointerEvent,G=!window.ShadowDOMPolyfill&&document.head.createShadowRoot,H=u.pointermap,I=25,J=[1,4,2,8,16],K=!1;try{K=1===new MouseEvent("test",{buttons:1}).buttons}catch(L){}
 var M,N={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup","mouseover","mouseout"],register:function(a){u.listen(a,this.events)},unregister:function(a){u.unlisten(a,this.events)},lastTouches:[],
 isEventSimulatedFromTouch:function(a){for(var b,c=this.lastTouches,d=a.clientX,e=a.clientY,f=0,g=c.length;f<g&&(b=c[f]);f++){
 var h=Math.abs(d-b.x),i=Math.abs(e-b.y);if(h<=I&&i<=I)return!0}},prepareEvent:function(a){var b=u.cloneEvent(a),c=b.preventDefault;return b.preventDefault=function(){a.preventDefault(),c()},b.pointerId=this.POINTER_ID,b.isPrimary=!0,b.pointerType=this.POINTER_TYPE,b},prepareButtonsForMove:function(a,b){var c=H.get(this.POINTER_ID);
 0!==b.which&&c?a.buttons=c.buttons:a.buttons=0,b.buttons=a.buttons},mousedown:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=H.get(this.POINTER_ID),c=this.prepareEvent(a);K||(c.buttons=J[c.button],b&&(c.buttons|=b.buttons),a.buttons=c.buttons),H.set(this.POINTER_ID,a),b&&0!==b.buttons?u.move(c):u.down(c)}},mousemove:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);K||this.prepareButtonsForMove(b,a),b.button=-1,H.set(this.POINTER_ID,a),u.move(b)}},mouseup:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=H.get(this.POINTER_ID),c=this.prepareEvent(a);if(!K){var d=J[c.button];
 c.buttons=b?b.buttons&~d:0,a.buttons=c.buttons}H.set(this.POINTER_ID,a),
 c.buttons&=~J[c.button],0===c.buttons?u.up(c):u.move(c)}},mouseover:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);K||this.prepareButtonsForMove(b,a),b.button=-1,H.set(this.POINTER_ID,a),u.enterOver(b)}},mouseout:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);K||this.prepareButtonsForMove(b,a),b.button=-1,u.leaveOut(b)}},cancel:function(a){var b=this.prepareEvent(a);u.cancel(b),this.deactivateMouse()},deactivateMouse:function(){H["delete"](this.POINTER_ID)}},O=u.captureInfo,P=v.findTarget.bind(v),Q=v.allShadows.bind(v),R=u.pointermap,S=2500,T=200,U="touch-action",V={events:["touchstart","touchmove","touchend","touchcancel"],register:function(a){M.enableOnSubtree(a)},unregister:function(){},elementAdded:function(a){var b=a.getAttribute(U),c=this.touchActionToScrollType(b);c&&(a._scrollType=c,u.listen(a,this.events),
 Q(a).forEach(function(a){a._scrollType=c,u.listen(a,this.events)},this))},elementRemoved:function(a){a._scrollType=void 0,u.unlisten(a,this.events),
 Q(a).forEach(function(a){a._scrollType=void 0,u.unlisten(a,this.events)},this)},elementChanged:function(a,b){var c=a.getAttribute(U),d=this.touchActionToScrollType(c),e=this.touchActionToScrollType(b);
 d&&e?(a._scrollType=d,Q(a).forEach(function(a){a._scrollType=d},this)):e?this.elementRemoved(a):d&&this.elementAdded(a)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y",SCROLLER:/^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/},touchActionToScrollType:function(a){var b=a,c=this.scrollTypes;return"none"===b?"none":b===c.XSCROLLER?"X":b===c.YSCROLLER?"Y":c.SCROLLER.exec(b)?"XY":void 0},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(a){return this.firstTouch===a.identifier},setPrimaryTouch:function(a){
 (0===R.size||1===R.size&&R.has(1))&&(this.firstTouch=a.identifier,this.firstXY={X:a.clientX,Y:a.clientY},this.scrolling=!1,this.cancelResetClickCount())},removePrimaryPointer:function(a){a.isPrimary&&(this.firstTouch=null,this.firstXY=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var a=function(){this.clickCount=0,this.resetId=null}.bind(this);this.resetId=setTimeout(a,T)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(a){var b=0;return"touchstart"!==a&&"touchmove"!==a||(b=1),b},touchToPointer:function(a){var b=this.currentTouchEvent,c=u.cloneEvent(a),d=c.pointerId=a.identifier+2;c.target=O[d]||P(c),c.bubbles=!0,c.cancelable=!0,c.detail=this.clickCount,c.button=0,c.buttons=this.typeToButtons(b.type),c.width=2*(a.radiusX||a.webkitRadiusX||0),c.height=2*(a.radiusY||a.webkitRadiusY||0),c.pressure=a.force||a.webkitForce||.5,c.isPrimary=this.isPrimaryTouch(a),c.pointerType=this.POINTER_TYPE,
 c.altKey=b.altKey,c.ctrlKey=b.ctrlKey,c.metaKey=b.metaKey,c.shiftKey=b.shiftKey;
 var e=this;return c.preventDefault=function(){e.scrolling=!1,e.firstXY=null,b.preventDefault()},c},processTouches:function(a,b){var c=a.changedTouches;this.currentTouchEvent=a;for(var d,e=0;e<c.length;e++)d=c[e],b.call(this,this.touchToPointer(d))},
 shouldScroll:function(a){if(this.firstXY){var b,c=a.currentTarget._scrollType;if("none"===c)
 b=!1;else if("XY"===c)
 b=!0;else{var d=a.changedTouches[0],e=c,f="Y"===c?"X":"Y",g=Math.abs(d["client"+e]-this.firstXY[e]),h=Math.abs(d["client"+f]-this.firstXY[f]);
 b=g>=h}return this.firstXY=null,b}},findTouch:function(a,b){for(var c,d=0,e=a.length;d<e&&(c=a[d]);d++)if(c.identifier===b)return!0},
 vacuumTouches:function(a){var b=a.touches;
 if(R.size>=b.length){var c=[];R.forEach(function(a,d){
 if(1!==d&&!this.findTouch(b,d-2)){var e=a.out;c.push(e)}},this),c.forEach(this.cancelOut,this)}},touchstart:function(a){this.vacuumTouches(a),this.setPrimaryTouch(a.changedTouches[0]),this.dedupSynthMouse(a),this.scrolling||(this.clickCount++,this.processTouches(a,this.overDown))},overDown:function(a){R.set(a.pointerId,{target:a.target,out:a,outTarget:a.target}),u.enterOver(a),u.down(a)},touchmove:function(a){this.scrolling||(this.shouldScroll(a)?(this.scrolling=!0,this.touchcancel(a)):(a.preventDefault(),this.processTouches(a,this.moveOverOut)))},moveOverOut:function(a){var b=a,c=R.get(b.pointerId);
 if(c){var d=c.out,e=c.outTarget;u.move(b),d&&e!==b.target&&(d.relatedTarget=b.target,b.relatedTarget=e,
 d.target=e,b.target?(u.leaveOut(d),u.enterOver(b)):(
 b.target=e,b.relatedTarget=null,this.cancelOut(b))),c.out=b,c.outTarget=b.target}},touchend:function(a){this.dedupSynthMouse(a),this.processTouches(a,this.upOut)},upOut:function(a){this.scrolling||(u.up(a),u.leaveOut(a)),this.cleanUpPointer(a)},touchcancel:function(a){this.processTouches(a,this.cancelOut)},cancelOut:function(a){u.cancel(a),u.leaveOut(a),this.cleanUpPointer(a)},cleanUpPointer:function(a){R["delete"](a.pointerId),this.removePrimaryPointer(a)},
 dedupSynthMouse:function(a){var b=N.lastTouches,c=a.changedTouches[0];
 if(this.isPrimaryTouch(c)){
 var d={x:c.clientX,y:c.clientY};b.push(d);var e=function(a,b){var c=a.indexOf(b);c>-1&&a.splice(c,1)}.bind(null,b,d);setTimeout(e,S)}}};M=new c(V.elementAdded,V.elementRemoved,V.elementChanged,V);var W,X,Y,Z=u.pointermap,$=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,_={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOut","MSPointerOver","MSPointerCancel","MSGotPointerCapture","MSLostPointerCapture"],register:function(a){u.listen(a,this.events)},unregister:function(a){u.unlisten(a,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(a){var b=a;return $&&(b=u.cloneEvent(a),b.pointerType=this.POINTER_TYPES[a.pointerType]),b},cleanup:function(a){Z["delete"](a)},MSPointerDown:function(a){Z.set(a.pointerId,a);var b=this.prepareEvent(a);u.down(b)},MSPointerMove:function(a){var b=this.prepareEvent(a);u.move(b)},MSPointerUp:function(a){var b=this.prepareEvent(a);u.up(b),this.cleanup(a.pointerId)},MSPointerOut:function(a){var b=this.prepareEvent(a);u.leaveOut(b)},MSPointerOver:function(a){var b=this.prepareEvent(a);u.enterOver(b)},MSPointerCancel:function(a){var b=this.prepareEvent(a);u.cancel(b),this.cleanup(a.pointerId)},MSLostPointerCapture:function(a){var b=u.makeEvent("lostpointercapture",a);u.dispatchEvent(b)},MSGotPointerCapture:function(a){var b=u.makeEvent("gotpointercapture",a);u.dispatchEvent(b)}},aa=window.navigator;aa.msPointerEnabled?(W=function(a){i(a),j(this),k(a)&&(u.setCapture(a,this,!0),this.msSetPointerCapture(a))},X=function(a){i(a),u.releaseCapture(a,!0),this.msReleasePointerCapture(a)}):(W=function(a){i(a),j(this),k(a)&&u.setCapture(a,this)},X=function(a){i(a),u.releaseCapture(a)}),Y=function(a){return!!u.captureInfo[a]},g(),h(),l();var ba={dispatcher:u,Installer:c,PointerEvent:a,PointerMap:p,targetFinding:v};return ba});

///////////////////////////////////////////////

///////////////////////////////////////////////
var config = {"dark_mode": false, "show_pads": true, "show_fabrication": false, "show_silkscreen": true, "highlight_pin1": false, "redraw_on_drag": true, "board_rotation": 0.0, "checkboxes": "Sourced,Placed", "bom_view": "left-right", "layer_view": "FB", "extra_fields": []}
///////////////////////////////////////////////

///////////////////////////////////////////////
var pcbdata = JSON.parse(LZString.decompressFromBase64("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mr4NXpaue1f5K6Q11cr1jXsavq1eCa9eYXGrpiXZavENcUa5xlyVztjXpwQZNdCiO41w2riTXIlH+NfSa9W562r0dXs3P+fkaa/32uJr3jXCMvVNeTc8y8Aji/egVxl4Vt1q55LBDz3SLKPPeysGOFMxrDNuzXwMQrNfx+ZR58Rr6jXokEUSphGvU+slBENXoGv/H2ua58Q/RrhrTRGvAtecONI13prvzXyGvbxe2a+RLYRr74YMWuSNdMAxcl42rlzXMwuEtevwVtY4godLXIzhLNcpa+Y1zMLtzXOWvJZA6LezAv0TsdXD6upNcFa9C182e4rXhWuateRS/015Jr/zXaWvZss6QAQrcAHVrXykr0/bOa/y14hz1lzfwrQ2tzfigCDkK4DX86vTos1+dV57FLoDXCU6r9BTa7Q1/Br+UXI4HUnMFS5BEN+kGxbYzBOFumFFeY1+r8Qz197Lz2pS8212fkbbXw0vI81GEkY13ze5bX/Eugn4OYaISMJhliNEBWcpe7a8kM3gz58nAeBDucgHCOKwdz3YdSkvlNeXa6+FxC5k7naI6QDjbye2899r5LXv2uJteDC4B1wHgAcXJ0wQddv4X4FxFr9r9f2uiheva9C59MesmYn2vIucNa6e1zfel7XWOv4nOY6/r01zeMbn+kuUddoSGh1yTruA48Ou6nyk64h13tr//nbEvQTBHXv+8DVL/KtTmuydeQ6761zVL58XJ2vOwtJa9818jrrnXI/OUGfua72XBKAv7jYuuOdf06+e19bznnXRrgRChM66212drpHXS2vhddRcidE0jt47XCphDWLhJBKtlEz4KnHonuVdPKL5B6ONRiJu4Q9dcvm2tZ9Ezo3XBqv8keq08F1FA5qWnqKvrANas4UEuJjKSeIjPOSQnccyYy7r8eHOMuaPswfcEzGqtmRXbihXdf+s9mzCb4U+IESB6ohvnSRs0NT/3XRmvUvsr/ChQESYIL7oevZqeJ66q5y2z+774tao9deND+mwnr0CHEevPKv4G318+LW2PXk1FDae1kHD17azuKjY6Bfdd1gRgzecJDkEXCubddu65N0Gm4cESreueiQvVct123rw3XHevguelw/EZ3YCNKxDuvU5e267VV0eG06HEsMkJPnMe7Y9mzqfXZHPJAoJFyL43NIR06ZPToVf50/b1yXrwVNoVVV/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KY0yEEU32l9dee/j27LthnbwXgGbudKwk9zp7qT3PCu4zsKzyll6thALqps9FPdme8XY0Y75L3nu9qXfpGHUy1l7gXX7DuqjuZW9y91p7nP6H7Hws5nxyI50p775XujuKvcvQzK9zVt7mjChvvH0he6uWbUMpkYHMmekLGe/qrmIbqr3FnvOPd9Vw69/yr3j3A3vP1fBe+k98xd0U7iSuJvcZq0Xl2l7lXbQnvpveCfxGCIkr1T3OasV3fUG5a9867qN+pjuYLw4nbW97rzub3m3v0RvvuprF8NRtT5v9Fc8Zse/sE6vbyz30at1tdr/C692Bxv3X13vulcPui1foN7gm2FgmGicq68O900rt73nVcPvc10ld8SN7tm3BXuHPcIK9Wu4advJGkPulvdqK7gNyF74o7XfhrRihnged0bfA73MXvzPfSC/09yd7xd3QgpMvckq3W90173T3WRv8ff7e9O9+YJtr3F3vRcZje+6V1Ox9VW93ujJRfe67J5PrhH3BLVyve+e/nasWK29bjM119q9e8fl257jn3PAIHek3giC93z71XnMPuRPc9fgy23HLOOgLPuV5cS+/E96oMfT3JRRUvcY+/S9wgr5X3YWvSvcziFJ9yr77T3V3vCvck+9vfnl7yXEdPuZfeme7V9/N7sVnJHBufcUlzq9xT7+j3jXv7PfNe8c9/oNxGu+1uZxwqO6e93L7nhXDQQAfce+/892fOEH3JdvDdche5l25LXa07sFRIvcze7h9557jRX8XvKVbLe/a5sb7gn36PuDffg+/RV6T7nH39jpivdk+9vDJb7sP3urhx1aE+85FF77qn3z3vDfeTc5dnGWKNpimeMaaNl++Z9xt7m73/XvYQUJeBDNo97/ITPvuOPdfe4RCIL1dzGnhLC7C/e8ft0+d5OgwNvMEiLe9gBSsrgv343uOjc/ayyV0/EVb3ofIo7M0+/SV4v72W94V49vdL+8R10P7vT3m/v1/fPig794pUjz3NuujveH+/sl62SDv3yQmu/dZG/+9+r4Jh3n3vKfdX+6b9697sv3vfvQdjA+9b98vb+H38vvpffC3Z5tznTX/3JQAp/fp+5d9xD7wAPi/wtlcNDD39ybe6/3GCvoA/oW+tEFn7/f3zvviffW+6QDzAHtwUX3uj/ewB7VN2b78JCqbuATw9+8HZyv7w03TS6I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TjeLdub9PyDBLdWUDrTi1jjPDiNDj6dD179gnB5ujTTipXlJb9bGj+DiPTiBej5jiqZixb97yiODj0RCp2i+9iqZjfb8A6ifDjsJZwzjdjj0L87b9ozjI79Y784zjYjj5v8Tb9YmiojiIKj/Di6n83b9yfcoji8zj1ijTdivz8nb9xliYzjl0B2ej4ziFDjfAhO79lDiQ79p9ibTj869A79i786ziazifJjGzjt799b9n9iEzjY792zjnTi438k78OdjiH9U78OdihDjtFivrD9a9S78Gzj+ziKH9S79uzi2ZiQJY+ziRTimvDK78Wzi/79G78y78JDiSfENzi079svCRzjYtiZzi0JATL8JzjqjiO79pzjlzi+78h781ziqU9+7839iOziin95H8M0DFH9Z78ZZDpTjMJCEDCnzjlqDWptaAdAH8V78KwiZDiN78Ux8czj979/zi9b8CH9oJixziT79QLiOjilAdKWjyjj4vCX79PzjlfDELiJydCjiZji5Y96fCX78ILiTjj0LjdH9MLiVncOZjDzigF9d+dz8isr8SLj2yiiLiR38QLiWyiLDiCH8yFjKLj4/Z5H8aLitTA/zj6LiLziMH8SgggtDyzjql02JCGLjwjiCH8uLjkziOB5itClTj1jjm+dBLi2n8cc9ylj2LjQsj/78JLib/CtH8tzj+jj3hi1zZOH9xZivTjJLiRH9wcjRjimm51Lj7zj0zjpH9tLjXDiOB5C5i3ziOLjoh4jLjuLi/H80y9/Di1H8otDglIEDCRLjizjBl9jH9mLj4eBXLjCLiZLiEsiTvt5Lj6jj9l1eLivLj279c0CRZj3LirH89Li+LiHH9Zn80RiNnCC7RTLjRLjh89Vn9orjI3BErjvhiNLjWciPWBcn9Z1Qgn8krjHDiVU8yFtMriySYAFtUrj9LjPYjCHcQrjQGQkn9iriIrjATicn9yriyZV8n84rjnLiHz9/z8Pn9rz8Wrjq9jcrjE78wy9WriezidSw69iqzjNLjun9Wn9UjiXn8Srjen8+ri9eib/DRrjqrjjL9RvserjRn8IskOri6jibsitWic1EFPClricLjir8Wn9GPdfWCAGF+ri0zjqYgMMjVriQeFRQD9ri8tjPBBDn8Orjjn9sdRprjArjEn9yRd5ri3zYHriNriNLjaFiIX9iHCHn9oX87ri1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"))
///////////////////////////////////////////////

///////////////////////////////////////////////
/* Utility functions */

var storagePrefix = 'KiCad_HTML_BOM__' + pcbdata.metadata.title + '__' +
  pcbdata.metadata.revision + '__#';
var storage;

function initStorage(key) {
  try {
    window.localStorage.getItem("blank");
    storage = window.localStorage;
  } catch (e) {
    // localStorage not available
  }
  if (!storage) {
    try {
      window.sessionStorage.getItem("blank");
      storage = window.sessionStorage;
    } catch (e) {
      // sessionStorage also not available
    }
  }
}

function readStorage(key) {
  if (storage) {
    return storage.getItem(storagePrefix + key);
  } else {
    return null;
  }
}

function writeStorage(key, value) {
  if (storage) {
    storage.setItem(storagePrefix + key, value);
  }
}

function fancyDblClickHandler(el, onsingle, ondouble) {
  return function() {
    if (el.getAttribute("data-dblclick") == null) {
      el.setAttribute("data-dblclick", 1);
      setTimeout(function() {
        if (el.getAttribute("data-dblclick") == 1) {
          onsingle();
        }
        el.removeAttribute("data-dblclick");
      }, 200);
    } else {
      el.removeAttribute("data-dblclick");
      ondouble();
    }
  }
}

function smoothScrollToRow(rowid) {
  document.getElementById(rowid).scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
}

function focusInputField(input) {
  input.scrollIntoView(false);
  input.focus();
  input.select();
}

function copyToClipboard() {
  var text = '';
  for (var node of bomhead.childNodes[0].childNodes) {
    if (node.firstChild) {
      text = text + node.firstChild.nodeValue;
    }
    if (node != bomhead.childNodes[0].lastChild) {
      text += '\t';
    }
  }
  text += '\n';
  for (var row of bombody.childNodes) {
    for (var cell of row.childNodes) {
      for (var node of cell.childNodes) {
        if (node.nodeName == "INPUT") {
          if (node.checked) {
            text = text + '✓';
          }
        } else if (node.nodeName == "MARK") {
          text = text + node.firstChild.nodeValue;
        } else {
          text = text + node.nodeValue;
        }
      }
      if (cell != row.lastChild) {
        text += '\t';
      }
    }
    text += '\n';
  }
  var textArea = document.createElement("textarea");
  textArea.classList.add('clipboard-temp');
  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    if (document.execCommand('copy')) {
      console.log('Bom copied to clipboard.');
    }
  } catch (err) {
    console.log('Can not copy to clipboard.');
  }

  document.body.removeChild(textArea);
}

function removeGutterNode(node) {
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].classList &&
      node.childNodes[i].classList.contains("gutter")) {
      node.removeChild(node.childNodes[i]);
      break;
    }
  }
}

function cleanGutters() {
  removeGutterNode(document.getElementById("bot"));
  removeGutterNode(document.getElementById("canvasdiv"));
}

var units = {
  prefixes: {
    giga: ["G", "g", "giga", "Giga", "GIGA"],
    mega: ["M", "mega", "Mega", "MEGA"],
    kilo: ["K", "k", "kilo", "Kilo", "KILO"],
    milli: ["m", "milli", "Milli", "MILLI"],
    micro: ["U", "u", "micro", "Micro", "MICRO", "μ", "µ"], // different utf8 μ
    nano: ["N", "n", "nano", "Nano", "NANO"],
    pico: ["P", "p", "pico", "Pico", "PICO"],
  },
  unitsShort: ["R", "r", "Ω", "F", "f", "H", "h"],
  unitsLong: [
    "OHM", "Ohm", "ohm", "ohms",
    "FARAD", "Farad", "farad",
    "HENRY", "Henry", "henry"
  ],
  getMultiplier: function(s) {
    if (this.prefixes.giga.includes(s)) return 1e9;
    if (this.prefixes.mega.includes(s)) return 1e6;
    if (this.prefixes.kilo.includes(s)) return 1e3;
    if (this.prefixes.milli.includes(s)) return 1e-3;
    if (this.prefixes.micro.includes(s)) return 1e-6;
    if (this.prefixes.nano.includes(s)) return 1e-9;
    if (this.prefixes.pico.includes(s)) return 1e-12;
    return 1;
  },
  valueRegex: null,
}

function initUtils() {
  var allPrefixes = units.prefixes.giga
                    .concat(units.prefixes.mega)
                    .concat(units.prefixes.kilo)
                    .concat(units.prefixes.milli)
                    .concat(units.prefixes.micro)
                    .concat(units.prefixes.nano)
                    .concat(units.prefixes.pico);
  var allUnits = units.unitsShort.concat(units.unitsLong);
  units.valueRegex = new RegExp("^([0-9\.]+)" +
                         "\\s*(" + allPrefixes.join("|") + ")?" +
                         "(" + allUnits.join("|") + ")?" +
                         "(\\b.*)?$", "");
  units.valueAltRegex = new RegExp("^([0-9]*)" +
                         "(" + units.unitsShort.join("|") + ")?" +
                         "([GgMmKkUuNnPp])?" +
                         "([0-9]*)" +
                         "(\\b.*)?$", "");
  for (var bom_type of ["both", "F", "B"]) {
    for (var row of pcbdata.bom[bom_type]) {
      row.push(parseValue(row[1], row[3][0][0]));
    }
  }
}

function parseValue(val, ref) {
  var inferUnit = (unit, ref) => {
    if (unit) {
      unit = unit.toLowerCase();
      if (unit == 'Ω' || unit == "ohm" || unit == "ohms") {
        unit = 'r';
      }
      unit = unit[0];
    } else {
      ref = /^([a-z]+)\d+$/i.exec(ref);
      if (ref) {
        ref = ref[1].toLowerCase();
        if (ref == "c") unit = 'f';
        else if (ref == "l") unit = 'h';
        else if (ref == "r" || ref == "rv") unit = 'r';
        else unit = null;
      }
    }
    return unit;
  };
  val = val.replace(/,/g, "");
  var match = units.valueRegex.exec(val);
  var unit;
  if (match) {
    val = parseFloat(match[1]);
    if (match[2]) {
      val = val * units.getMultiplier(match[2]);
    }
    unit = inferUnit(match[3], ref);
    if (!unit) return null;
    else return {
      val: val,
      unit: unit,
      extra: match[4],
    }
  }
  match = units.valueAltRegex.exec(val);
  if (match && (match[1] || match[4])) {
    val = parseFloat(match[1] + "." + match[4]);
    if (match[3]) {
      val = val * units.getMultiplier(match[3]);
    }
    unit = inferUnit(match[2], ref);
    if (!unit) return null;
    else return {
      val: val,
      unit: unit,
      extra: match[5],
    }
  }
  return null;
}

function valueCompare(a, b, stra, strb) {
  if (a === null && b === null) {
    // Failed to parse both values, compare them as strings.
    if (stra != strb) return stra > strb ? 1 : -1;
    else return 0;
  } else if (a === null) {
    return 1;
  } else if (b === null) {
    return -1;
  } else {
    if (a.unit != b.unit) return a.unit > b.unit ? 1 : -1;
    else if (a.val != b.val) return a.val > b.val ? 1 : -1;
    else if (a.extra != b.extra) return a.extra > b.extra ? 1 : -1;
    else return 0;
  }
}

function validateSaveImgDimension(element) {
  var valid = false;
  var intValue = 0;
  if (/^[1-9]\d*$/.test(element.value)) {
    intValue = parseInt(element.value);
    if (intValue <= 16000) {
      valid = true;
    }
  }
  if (valid) {
    element.classList.remove("invalid");
  } else {
    element.classList.add("invalid");
  }
  return intValue;
}

function saveImage(layer) {
  var width = validateSaveImgDimension(document.getElementById("render-save-width"));
  var height = validateSaveImgDimension(document.getElementById("render-save-height"));
  var bgcolor = null;
  if (!document.getElementById("render-save-transparent").checked) {
    var style = getComputedStyle(topmostdiv);
    bgcolor = style.getPropertyValue("background-color");
  }
  if (!width || !height) return;

  // Prepare image
  var canvas = document.createElement("canvas");
  var layerdict = {
    transform: {
      x: 0,
      y: 0,
      s: 1,
      panx: 0,
      pany: 0,
      zoom: 1,
    },
    bg: canvas,
    fab: canvas,
    silk: canvas,
    highlight: canvas,
    layer: layer,
  }
  // Do the rendering
  recalcLayerScale(layerdict, width, height);
  prepareLayer(layerdict);
  clearCanvas(canvas, bgcolor);
  drawBackground(layerdict, false);
  drawHighlightsOnLayer(layerdict, false);

  // Save image
  var imgdata = canvas.toDataURL("image/png");

  var filename = pcbdata.metadata.title;
  if (pcbdata.metadata.revision) {
    filename += `.${pcbdata.metadata.revision}`;
  }
  filename += `.${layer}.png`;
  saveFile(filename, dataURLtoBlob(imgdata));
}

function saveSettings() {
  var data = {
    type: "InteractiveHtmlBom settings",
    version: 1,
    pcbmetadata: pcbdata.metadata,
    settings: settings,
  }
  var blob = new Blob([JSON.stringify(data, null, 4)], {type: "application/json"});
  saveFile(`${pcbdata.metadata.title}.settings.json`, blob);
}

function loadSettings() {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = ".settings.json";
  input.onchange = function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = readerEvent => {
      var content = readerEvent.target.result;
      var newSettings;
      try {
        newSettings = JSON.parse(content);
      } catch(e) {
        alert("Selected file is not InteractiveHtmlBom settings file.");
        return;
      }
      if (newSettings.type != "InteractiveHtmlBom settings") {
        alert("Selected file is not InteractiveHtmlBom settings file.");
        return;
      }
      var metadataMatches = newSettings.hasOwnProperty("pcbmetadata");
      if (metadataMatches) {
        for (var k in pcbdata.metadata) {
          if (!newSettings.pcbmetadata.hasOwnProperty(k) || newSettings.pcbmetadata[k] != pcbdata.metadata[k]) {
            metadataMatches = false;
          }
        }
      }
      if (!metadataMatches) {
        var currentMetadata = JSON.stringify(pcbdata.metadata, null, 4);
        var fileMetadata = JSON.stringify(newSettings.pcbmetadata, null, 4);
        if (!confirm(
          `Settins file metadata does not match current metadata.\n\n` +
          `Page metadata:\n${currentMetadata}\n\n` +
          `Settings file metadata:\n${fileMetadata}\n\n` +
          `Press OK if you would like to import settings anyway.`)) {
          return;
        }
      }
      overwriteSettings(newSettings.settings);
    }
    reader.readAsText(file, 'UTF-8');
  }
  input.click();
}

function overwriteSettings(newSettings) {
  initDone = false;
  Object.assign(settings, newSettings);
  writeStorage("bomlayout", settings.bomlayout);
  writeStorage("bommode", settings.bommode);
  writeStorage("canvaslayout", settings.canvaslayout);
  writeStorage("bomCheckboxes", settings.checkboxes.join(","));
  document.getElementById("bomCheckboxes").value = settings.checkboxes.join(",");
  for (var checkbox of settings.checkboxes) {
    writeStorage("checkbox_" + checkbox, settings.checkboxStoredRefs[checkbox]);
  }
  writeStorage("darkenWhenChecked", settings.darkenWhenChecked);
  padsVisible(settings.renderPads);
  document.getElementById("padsCheckbox").checked = settings.renderPads;
  fabricationVisible(settings.renderFabrication);
  document.getElementById("fabricationCheckbox").checked = settings.renderFabrication;
  silkscreenVisible(settings.renderSilkscreen);
  document.getElementById("silkscreenCheckbox").checked = settings.renderSilkscreen;
  referencesVisible(settings.renderReferences);
  document.getElementById("referencesCheckbox").checked = settings.renderReferences;
  valuesVisible(settings.renderValues);
  document.getElementById("valuesCheckbox").checked = settings.renderValues;
  tracksVisible(settings.renderTracks);
  document.getElementById("tracksCheckbox").checked = settings.renderTracks;
  zonesVisible(settings.renderZones);
  document.getElementById("zonesCheckbox").checked = settings.renderZones;
  dnpOutline(settings.renderDnpOutline);
  document.getElementById("dnpOutlineCheckbox").checked = settings.renderDnpOutline;
  setRedrawOnDrag(settings.redrawOnDrag);
  document.getElementById("dragCheckbox").checked = settings.redrawOnDrag;
  setDarkMode(settings.darkMode);
  document.getElementById("darkmodeCheckbox").checked = settings.darkMode;
  setHighlightPin1(settings.highlightpin1);
  document.getElementById("highlightpin1Checkbox").checked = settings.highlightpin1;
  writeStorage("boardRotation", settings.boardRotation);
  document.getElementById("boardRotation").value = settings.boardRotation / 5;
  document.getElementById("rotationDegree").textContent = settings.boardRotation;
  initDone = true;
  prepCheckboxes();
  changeBomLayout(settings.bomlayout);
}

function saveFile(filename, blob) {
  var link = document.createElement("a");
  var objurl = URL.createObjectURL(blob);
  link.download = filename;
  link.href = objurl;
  link.click();
}

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}

var settings = {
  canvaslayout: "default",
  bomlayout: "default",
  bommode: "grouped",
  checkboxes: [],
  checkboxStoredRefs: {},
  darkMode: false,
  highlightpin1: false,
  redrawOnDrag: true,
  boardRotation: 0,
  renderPads: true,
  renderReferences: true,
  renderValues: true,
  renderSilkscreen: true,
  renderFabrication: true,
  renderDnpOutline: false,
  renderTracks: true,
  renderZones: true,
}

function initDefaults() {
  settings.bomlayout = readStorage("bomlayout");
  if (settings.bomlayout === null) {
    settings.bomlayout = config.bom_view;
  }
  if (!['bom-only', 'left-right', 'top-bottom'].includes(settings.bomlayout)) {
    settings.bomlayout = config.bom_view;
  }
  settings.bommode = readStorage("bommode");
  if (settings.bommode === null) {
    settings.bommode = "grouped";
  }
  if (!["grouped", "ungrouped", "netlist"].includes(settings.bommode)) {
    settings.bommode = "grouped";
  }
  settings.canvaslayout = readStorage("canvaslayout");
  if (settings.canvaslayout === null) {
    settings.canvaslayout = config.layer_view;
  }
  var bomCheckboxes = readStorage("bomCheckboxes");
  if (bomCheckboxes === null) {
    bomCheckboxes = config.checkboxes;
  }
  settings.checkboxes = bomCheckboxes.split(",").filter((e) => e);
  document.getElementById("bomCheckboxes").value = bomCheckboxes;

  settings.darkenWhenChecked = readStorage("darkenWhenChecked") || "";
  populateDarkenWhenCheckedOptions();

  function initBooleanSetting(storageString, def, elementId, func) {
    var b = readStorage(storageString);
    if (b === null) {
      b = def;
    } else {
      b = (b == "true");
    }
    document.getElementById(elementId).checked = b;
    func(b);
  }

  initBooleanSetting("padsVisible", config.show_pads, "padsCheckbox", padsVisible);
  initBooleanSetting("fabricationVisible", config.show_fabrication, "fabricationCheckbox", fabricationVisible);
  initBooleanSetting("silkscreenVisible", config.show_silkscreen, "silkscreenCheckbox", silkscreenVisible);
  initBooleanSetting("referencesVisible", true, "referencesCheckbox", referencesVisible);
  initBooleanSetting("valuesVisible", true, "valuesCheckbox", valuesVisible);
  if ("tracks" in pcbdata) {
    initBooleanSetting("tracksVisible", true, "tracksCheckbox", tracksVisible);
    initBooleanSetting("zonesVisible", true, "zonesCheckbox", zonesVisible);
  } else {
    document.getElementById("tracksAndZonesCheckboxes").style.display = "none";
    tracksVisible(false);
    zonesVisible(false);
  }
  initBooleanSetting("dnpOutline", false, "dnpOutlineCheckbox", dnpOutline);
  initBooleanSetting("redrawOnDrag", config.redraw_on_drag, "dragCheckbox", setRedrawOnDrag);
  initBooleanSetting("darkmode", config.dark_mode, "darkmodeCheckbox", setDarkMode);
  initBooleanSetting("highlightpin1", config.highlight_pin1, "highlightpin1Checkbox", setHighlightPin1);
  settings.boardRotation = readStorage("boardRotation");
  if (settings.boardRotation === null) {
    settings.boardRotation = config.board_rotation * 5;
  } else {
    settings.boardRotation = parseInt(settings.boardRotation);
  }
  document.getElementById("boardRotation").value = settings.boardRotation / 5;
  document.getElementById("rotationDegree").textContent = settings.boardRotation;
}

// Helper classes for user js callbacks.

const IBOM_EVENT_TYPES = {
  ALL: "all",
  HIGHLIGHT_EVENT: "highlightEvent",
  CHECKBOX_CHANGE_EVENT: "checkboxChangeEvent",
  BOM_BODY_CHANGE_EVENT: "bomBodyChangeEvent",
}

const EventHandler = {
  callbacks: {},
  init: function() {
    for (eventType of Object.values(IBOM_EVENT_TYPES))
      this.callbacks[eventType] = [];
  },
  registerCallback: function(eventType, callback) {
    this.callbacks[eventType].push(callback);
  },
  emitEvent: function(eventType, eventArgs) {
    event = {
      eventType: eventType,
      args: eventArgs,
    }
    var callback;
    for(callback of this.callbacks[eventType])
      callback(event);
    for(callback of this.callbacks[IBOM_EVENT_TYPES.ALL])
      callback(event);
  }
}
EventHandler.init();

///////////////////////////////////////////////

///////////////////////////////////////////////
/* PCB rendering code */

var emptyContext2d = document.createElement("canvas").getContext("2d");

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function calcFontPoint(linepoint, text, offsetx, offsety, tilt) {
  var point = [
    linepoint[0] * text.width + offsetx,
    linepoint[1] * text.height + offsety
  ];
  // This approximates pcbnew behavior with how text tilts depending on horizontal justification
  point[0] -= (linepoint[1] + 0.5 * (1 + text.justify[0])) * text.height * tilt;
  return point;
}

function drawText(ctx, text, color) {
  if ("ref" in text && !settings.renderReferences) return;
  if ("val" in text && !settings.renderValues) return;
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = text.thickness;
  if ("svgpath" in text) {
    ctx.stroke(new Path2D(text.svgpath));
    ctx.restore();
    return;
  }
  ctx.translate(...text.pos);
  ctx.translate(text.thickness * 0.5, 0);
  var angle = -text.angle;
  if (text.attr.includes("mirrored")) {
    ctx.scale(-1, 1);
    angle = -angle;
  }
  var tilt = 0;
  if (text.attr.includes("italic")) {
    tilt = 0.125;
  }
  var interline = text.height * 1.5 + text.thickness;
  var txt = text.text.split("\n");
  // KiCad ignores last empty line.
  if (txt[txt.length - 1] == '') txt.pop();
  ctx.rotate(deg2rad(angle));
  var offsety = (1 - text.justify[1]) / 2 * text.height; // One line offset
  offsety -= (txt.length - 1) * (text.justify[1] + 1) / 2 * interline; // Multiline offset
  for (var i in txt) {
    var lineWidth = text.thickness + interline / 2 * tilt;
    for (var j = 0; j < txt[i].length; j++) {
      if (txt[i][j] == '\t') {
        var fourSpaces = 4 * pcbdata.font_data[' '].w * text.width;
        lineWidth += fourSpaces - lineWidth % fourSpaces;
      } else {
        if (txt[i][j] == '~') {
          j++;
          if (j == txt[i].length)
            break;
        }
        lineWidth += pcbdata.font_data[txt[i][j]].w * text.width;
      }
    }
    var offsetx = -lineWidth * (text.justify[0] + 1) / 2;
    var inOverbar = false;
    for (var j = 0; j < txt[i].length; j++) {
      if (txt[i][j] == '\t') {
        var fourSpaces = 4 * pcbdata.font_data[' '].w * text.width;
        offsetx += fourSpaces - offsetx % fourSpaces;
        continue;
      } else if (txt[i][j] == '~') {
        j++;
        if (j == txt[i].length)
          break;
        if (txt[i][j] != '~') {
          inOverbar = !inOverbar;
        }
      }
      var glyph = pcbdata.font_data[txt[i][j]];
      if (inOverbar) {
        var overbarStart = [offsetx, -text.height * 1.4 + offsety];
        var overbarEnd = [offsetx + text.width * glyph.w, overbarStart[1]];

        if (!lastHadOverbar) {
          overbarStart[0] += text.height * 1.4 * tilt;
          lastHadOverbar = true;
        }
        ctx.beginPath();
        ctx.moveTo(...overbarStart);
        ctx.lineTo(...overbarEnd);
        ctx.stroke();
      } else {
        lastHadOverbar = false;
      }
      for (var line of glyph.l) {
        ctx.beginPath();
        ctx.moveTo(...calcFontPoint(line[0], text, offsetx, offsety, tilt));
        for (var k = 1; k < line.length; k++) {
          ctx.lineTo(...calcFontPoint(line[k], text, offsetx, offsety, tilt));
        }
        ctx.stroke();
      }
      offsetx += glyph.w * text.width;
    }
    offsety += interline;
  }
  ctx.restore();
}

function drawedge(ctx, scalefactor, edge, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = Math.max(1 / scalefactor, edge.width);
  ctx.lineCap = "round";
  if ("svgpath" in edge) {
    ctx.stroke(new Path2D(edge.svgpath));
  } else {
    ctx.beginPath();
    if (edge.type == "segment") {
      ctx.moveTo(...edge.start);
      ctx.lineTo(...edge.end);
    }
    if (edge.type == "rect") {
      ctx.moveTo(...edge.start);
      ctx.lineTo(edge.start[0], edge.end[1]);
      ctx.lineTo(...edge.end);
      ctx.lineTo(edge.end[0], edge.start[1]);
      ctx.lineTo(...edge.start);
    }
    if (edge.type == "arc") {
      ctx.arc(
        ...edge.start,
        edge.radius,
        deg2rad(edge.startangle),
        deg2rad(edge.endangle));
    }
    if (edge.type == "circle") {
      ctx.arc(
        ...edge.start,
        edge.radius,
        0, 2 * Math.PI);
      ctx.closePath();
    }
    if (edge.type == "curve") {
      ctx.moveTo(...edge.start);
      ctx.bezierCurveTo(...edge.cpa, ...edge.cpb, ...edge.end);
    }
    ctx.stroke();
  }
}

function getChamferedRectPath(size, radius, chamfpos, chamfratio) {
  // chamfpos is a bitmask, left = 1, right = 2, bottom left = 4, bottom right = 8
  var path = new Path2D();
  var width = size[0];
  var height = size[1];
  var x = width * -0.5;
  var y = height * -0.5;
  var chamfOffset = Math.min(width, height) * chamfratio;
  path.moveTo(x, 0);
  if (chamfpos & 4) {
    path.lineTo(x, y + height - chamfOffset);
    path.lineTo(x + chamfOffset, y + height);
    path.lineTo(0, y + height);
  } else {
    path.arcTo(x, y + height, x + width, y + height, radius);
  }
  if (chamfpos & 8) {
    path.lineTo(x + width - chamfOffset, y + height);
    path.lineTo(x + width, y + height - chamfOffset);
    path.lineTo(x + width, 0);
  } else {
    path.arcTo(x + width, y + height, x + width, y, radius);
  }
  if (chamfpos & 2) {
    path.lineTo(x + width, y + chamfOffset);
    path.lineTo(x + width - chamfOffset, y);
    path.lineTo(0, y);
  } else {
    path.arcTo(x + width, y, x, y, radius);
  }
  if (chamfpos & 1) {
    path.lineTo(x + chamfOffset, y);
    path.lineTo(x, y + chamfOffset);
    path.lineTo(x, 0);
  } else {
    path.arcTo(x, y, x, y + height, radius);
  }
  path.closePath();
  return path;
}

function getOblongPath(size) {
  return getChamferedRectPath(size, Math.min(size[0], size[1]) / 2, 0, 0);
}

function getPolygonsPath(shape) {
  if (shape.path2d) {
    return shape.path2d;
  }
  if ("svgpath" in shape) {
    shape.path2d = new Path2D(shape.svgpath);
  } else {
    var path = new Path2D();
    for (var polygon of shape.polygons) {
      path.moveTo(...polygon[0]);
      for (var i = 1; i < polygon.length; i++) {
        path.lineTo(...polygon[i]);
      }
      path.closePath();
    }
    shape.path2d = path;
  }
  return shape.path2d;
}

function drawPolygonShape(ctx, shape, color) {
  ctx.save();
  ctx.fillStyle = color;
  if (!("svgpath" in shape)) {
    ctx.translate(...shape.pos);
    ctx.rotate(deg2rad(-shape.angle));
  }
  ctx.fill(getPolygonsPath(shape));
  ctx.restore();
}

function drawDrawing(ctx, scalefactor, drawing, color) {
  if (["segment", "arc", "circle", "curve"].includes(drawing.type)) {
    drawedge(ctx, scalefactor, drawing, color);
  } else if (drawing.type == "polygon") {
    drawPolygonShape(ctx, drawing, color);
  } else {
    drawText(ctx, drawing, color);
  }
}

function getCirclePath(radius) {
  var path = new Path2D();
  path.arc(0, 0, radius, 0, 2 * Math.PI);
  path.closePath();
  return path;
}

function getCachedPadPath(pad) {
  if (!pad.path2d) {
    // if path2d is not set, build one and cache it on pad object
    if (pad.shape == "rect") {
      pad.path2d = new Path2D();
      pad.path2d.rect(...pad.size.map(c => -c * 0.5), ...pad.size);
    } else if (pad.shape == "oval") {
      pad.path2d = getOblongPath(pad.size);
    } else if (pad.shape == "circle") {
      pad.path2d = getCirclePath(pad.size[0] / 2);
    } else if (pad.shape == "roundrect") {
      pad.path2d = getChamferedRectPath(pad.size, pad.radius, 0, 0);
    } else if (pad.shape == "chamfrect") {
      pad.path2d = getChamferedRectPath(pad.size, pad.radius, pad.chamfpos, pad.chamfratio)
    } else if (pad.shape == "custom") {
      pad.path2d = getPolygonsPath(pad);
    }
  }
  return pad.path2d;
}

function drawPad(ctx, pad, color, outline) {
  ctx.save();
  ctx.translate(...pad.pos);
  ctx.rotate(deg2rad(pad.angle));
  if (pad.offset) {
    ctx.translate(...pad.offset);
  }
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  var path = getCachedPadPath(pad);
  if (outline) {
    ctx.stroke(path);
  } else {
    ctx.fill(path);
  }
  ctx.restore();
}

function drawPadHole(ctx, pad, padHoleColor) {
  if (pad.type != "th") return;
  ctx.save();
  ctx.translate(...pad.pos);
  ctx.rotate(deg2rad(pad.angle));
  ctx.fillStyle = padHoleColor;
  if (pad.drillshape == "oblong") {
    ctx.fill(getOblongPath(pad.drillsize));
  } else {
    ctx.fill(getCirclePath(pad.drillsize[0] / 2));
  }
  ctx.restore();
}

function drawFootprint(ctx, layer, scalefactor, footprint, padColor, padHoleColor, outlineColor, highlight, outline) {
  if (highlight) {
    // draw bounding box
    if (footprint.layer == layer) {
      ctx.save();
      ctx.globalAlpha = 0.2;
      ctx.translate(...footprint.bbox.pos);
      ctx.rotate(deg2rad(-footprint.bbox.angle));
      ctx.translate(...footprint.bbox.relpos);
      ctx.fillStyle = padColor;
      ctx.fillRect(0, 0, ...footprint.bbox.size);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = padColor;
      ctx.strokeRect(0, 0, ...footprint.bbox.size);
      ctx.restore();
    }
  }
  // draw drawings
  for (var drawing of footprint.drawings) {
    if (drawing.layer == layer) {
      drawDrawing(ctx, scalefactor, drawing.drawing, padColor);
    }
  }
  // draw pads
  if (settings.renderPads) {
    for (var pad of footprint.pads) {
      if (pad.layers.includes(layer)) {
        drawPad(ctx, pad, padColor, outline);
        if (pad.pin1 && settings.highlightpin1) {
          drawPad(ctx, pad, outlineColor, true);
        }
      }
    }
    for (var pad of footprint.pads) {
      drawPadHole(ctx, pad, padHoleColor);
    }
  }
}

function drawEdgeCuts(canvas, scalefactor) {
  var ctx = canvas.getContext("2d");
  var edgecolor = getComputedStyle(topmostdiv).getPropertyValue('--pcb-edge-color');
  for (var edge of pcbdata.edges) {
    drawedge(ctx, scalefactor, edge, edgecolor);
  }
}

function drawFootprints(canvas, layer, scalefactor, highlight) {
  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 3 / scalefactor;
  var style = getComputedStyle(topmostdiv);
  var padColor = style.getPropertyValue('--pad-color');
  var padHoleColor = style.getPropertyValue('--pad-hole-color');
  var outlineColor = style.getPropertyValue('--pin1-outline-color');
  if (highlight) {
    padColor = style.getPropertyValue('--pad-color-highlight');
    outlineColor = style.getPropertyValue('--pin1-outline-color-highlight');
  }
  for (var i = 0; i < pcbdata.footprints.length; i++) {
    var mod = pcbdata.footprints[i];
    var outline = settings.renderDnpOutline && pcbdata.bom.skipped.includes(i);
    if (!highlight || highlightedFootprints.includes(i)) {
      drawFootprint(ctx, layer, scalefactor, mod, padColor, padHoleColor, outlineColor, highlight, outline);
    }
  }
}

function drawBgLayer(layername, canvas, layer, scalefactor, edgeColor, polygonColor, textColor) {
  var ctx = canvas.getContext("2d");
  for (var d of pcbdata.drawings[layername][layer]) {
    if (["segment", "arc", "circle", "curve", "rect"].includes(d.type)) {
      drawedge(ctx, scalefactor, d, edgeColor);
    } else if (d.type == "polygon") {
      drawPolygonShape(ctx, d, polygonColor);
    } else {
      drawText(ctx, d, textColor);
    }
  }
}

function drawTracks(canvas, layer, color, highlight) {
  ctx = canvas.getContext("2d");
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  for(var track of pcbdata.tracks[layer]) {
    if (highlight && highlightedNet != track.net) continue;
    ctx.lineWidth = track.width;
    ctx.beginPath();
    if ('radius' in track) {
      ctx.arc(
          ...track.center,
          track.radius,
          deg2rad(track.startangle),
          deg2rad(track.endangle));
    } else {
      ctx.moveTo(...track.start);
      ctx.lineTo(...track.end);
    }
    ctx.stroke();
  }
}

function drawZones(canvas, layer, color, highlight) {
  ctx = canvas.getContext("2d");
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineJoin = "round";
  for(var zone of pcbdata.zones[layer]) {
    if (!zone.path2d) {
      zone.path2d = getPolygonsPath(zone);
    }
    if (highlight && highlightedNet != zone.net) continue;
    ctx.fill(zone.path2d);
    if (zone.width > 0) {
      ctx.lineWidth = zone.width;
      ctx.stroke(zone.path2d);
    }
  }
}

function clearCanvas(canvas, color = null) {
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  if (color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  ctx.restore();
}

function drawNets(canvas, layer, highlight) {
  var style = getComputedStyle(topmostdiv);
  if (settings.renderTracks) {
    var trackColor = style.getPropertyValue(highlight ? '--track-color-highlight' : '--track-color');
    drawTracks(canvas, layer, trackColor, highlight);
  }
  if (settings.renderZones) {
    var zoneColor = style.getPropertyValue(highlight ? '--zone-color-highlight' : '--zone-color');
    drawZones(canvas, layer, zoneColor, highlight);
  }
  if (highlight && settings.renderPads) {
    var padColor = style.getPropertyValue('--pad-color-highlight');
    var padHoleColor = style.getPropertyValue('--pad-hole-color');
    var ctx = canvas.getContext("2d");
    for (var footprint of pcbdata.footprints) {
      // draw pads
      var padDrawn = false;
      for (var pad of footprint.pads) {
        if (highlightedNet != pad.net) continue;
        if (pad.layers.includes(layer)) {
          drawPad(ctx, pad, padColor, false);
          padDrawn = true;
        }
      }
      if (padDrawn) {
        // redraw all pad holes because some pads may overlap
        for (var pad of footprint.pads) {
          drawPadHole(ctx, pad, padHoleColor);
        }
      }
    }
  }
}

function drawHighlightsOnLayer(canvasdict, clear = true) {
  if (clear) {
    clearCanvas(canvasdict.highlight);
  }
  if (highlightedFootprints.length > 0) {
    drawFootprints(canvasdict.highlight, canvasdict.layer,
      canvasdict.transform.s * canvasdict.transform.zoom, true);
  }
  if (highlightedNet !== null) {
    drawNets(canvasdict.highlight, canvasdict.layer, true);
  }
}

function drawHighlights() {
  drawHighlightsOnLayer(allcanvas.front);
  drawHighlightsOnLayer(allcanvas.back);
}

function drawBackground(canvasdict, clear = true) {
  if (clear) {
    clearCanvas(canvasdict.bg);
    clearCanvas(canvasdict.fab);
    clearCanvas(canvasdict.silk);
  }

  drawNets(canvasdict.bg, canvasdict.layer, false);
  drawFootprints(canvasdict.bg, canvasdict.layer,
    canvasdict.transform.s * canvasdict.transform.zoom, false);

  drawEdgeCuts(canvasdict.bg, canvasdict.transform.s);

  var style = getComputedStyle(topmostdiv);
  var edgeColor = style.getPropertyValue('--silkscreen-edge-color');
  var polygonColor = style.getPropertyValue('--silkscreen-polygon-color');
  var textColor = style.getPropertyValue('--silkscreen-text-color');
  if (settings.renderSilkscreen) {
    drawBgLayer(
      "silkscreen", canvasdict.silk, canvasdict.layer,
      canvasdict.transform.s * canvasdict.transform.zoom,
      edgeColor, polygonColor, textColor);
  }
  edgeColor = style.getPropertyValue('--fabrication-edge-color');
  polygonColor = style.getPropertyValue('--fabrication-polygon-color');
  textColor = style.getPropertyValue('--fabrication-text-color');
  if (settings.renderFabrication) {
    drawBgLayer(
      "fabrication", canvasdict.fab, canvasdict.layer,
      canvasdict.transform.s * canvasdict.transform.zoom,
      edgeColor, polygonColor, textColor);
  }
}

function prepareCanvas(canvas, flip, transform) {
  var ctx = canvas.getContext("2d");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  var fontsize = 1.55;
  ctx.scale(transform.zoom, transform.zoom);
  ctx.translate(transform.panx, transform.pany);
  if (flip) {
    ctx.scale(-1, 1);
  }
  ctx.translate(transform.x, transform.y);
  ctx.rotate(deg2rad(settings.boardRotation));
  ctx.scale(transform.s, transform.s);
}

function prepareLayer(canvasdict) {
  var flip = (canvasdict.layer == "B");
  for (var c of ["bg", "fab", "silk", "highlight"]) {
    prepareCanvas(canvasdict[c], flip, canvasdict.transform);
  }
}

function rotateVector(v, angle) {
  angle = deg2rad(angle);
  return [
    v[0] * Math.cos(angle) - v[1] * Math.sin(angle),
    v[0] * Math.sin(angle) + v[1] * Math.cos(angle)
  ];
}

function applyRotation(bbox) {
  var corners = [
    [bbox.minx, bbox.miny],
    [bbox.minx, bbox.maxy],
    [bbox.maxx, bbox.miny],
    [bbox.maxx, bbox.maxy],
  ];
  corners = corners.map((v) => rotateVector(v, settings.boardRotation));
  return {
    minx: corners.reduce((a, v) => Math.min(a, v[0]), Infinity),
    miny: corners.reduce((a, v) => Math.min(a, v[1]), Infinity),
    maxx: corners.reduce((a, v) => Math.max(a, v[0]), -Infinity),
    maxy: corners.reduce((a, v) => Math.max(a, v[1]), -Infinity),
  }
}

function recalcLayerScale(layerdict, width, height) {
  var bbox = applyRotation(pcbdata.edges_bbox);
  var scalefactor = 0.98 * Math.min(
    width / (bbox.maxx - bbox.minx),
    height / (bbox.maxy - bbox.miny)
  );
  if (scalefactor < 0.1) {
    scalefactor = 1;
  }
  layerdict.transform.s = scalefactor;
  var flip = (layerdict.layer == "B");
  if (flip) {
    layerdict.transform.x = -((bbox.maxx + bbox.minx) * scalefactor + width) * 0.5;
  } else {
    layerdict.transform.x = -((bbox.maxx + bbox.minx) * scalefactor - width) * 0.5;
  }
  layerdict.transform.y = -((bbox.maxy + bbox.miny) * scalefactor - height) * 0.5;
  for (var c of ["bg", "fab", "silk", "highlight"]) {
    canvas = layerdict[c];
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = (width / devicePixelRatio) + "px";
    canvas.style.height = (height / devicePixelRatio) + "px";
  }
}

function redrawCanvas(layerdict) {
  prepareLayer(layerdict);
  drawBackground(layerdict);
  drawHighlightsOnLayer(layerdict);
}

function resizeCanvas(layerdict) {
  var canvasdivid = {
    "F": "frontcanvas",
    "B": "backcanvas"
  } [layerdict.layer];
  var width = document.getElementById(canvasdivid).clientWidth * devicePixelRatio;
  var height = document.getElementById(canvasdivid).clientHeight * devicePixelRatio;
  recalcLayerScale(layerdict, width, height);
  redrawCanvas(layerdict);
}

function resizeAll() {
  resizeCanvas(allcanvas.front);
  resizeCanvas(allcanvas.back);
}

function pointWithinDistanceToSegment(x, y, x1, y1, x2, y2, d) {
  var A = x - x1;
  var B = y - y1;
  var C = x2 - x1;
  var D = y2 - y1;

  var dot = A * C + B * D;
  var len_sq = C * C + D * D;
  var dx, dy;
  if (len_sq == 0) {
    // start and end of the segment coincide
    dx = x - x1;
    dy = y - y1;
  } else {
    var param = dot / len_sq;
    var xx, yy;
    if (param < 0) {
      xx = x1;
      yy = y1;
    } else if (param > 1) {
      xx = x2;
      yy = y2;
    } else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }
    dx = x - xx;
    dy = y - yy;
  }
  return dx * dx + dy * dy <= d * d;
}

function modulo(n, mod) {
  return ((n % mod) + mod ) % mod;
}

function pointWithinDistanceToArc(x, y, xc, yc, radius, startangle, endangle, d) {
  var dx = x - xc;
  var dy = y - yc;
  var r_sq = dx * dx + dy * dy;
  var rmin = Math.max(0, radius-d);
  var rmax = radius + d;

  if (r_sq < rmin * rmin || r_sq > rmax * rmax)
    return false;

  var angle1 = modulo(deg2rad(startangle), 2 * Math.PI);
  var dx1 = xc + radius * Math.cos(angle1) - x;
  var dy1 = yc + radius * Math.sin(angle1) - y;
  if (dx1 * dx1 + dy1 * dy1 <= d * d)
    return true;

  var angle2 = modulo(deg2rad(endangle), 2 * Math.PI);
  var dx2 = xc + radius * Math.cos(angle2) - x;
  var dy2 = yc + radius * Math.sin(angle2) - y;
  if (dx2 * dx2 + dy2 * dy2 <= d * d)
    return true;

  var angle = modulo(Math.atan2(dy, dx), 2 * Math.PI);
  if (angle1 > angle2)
    return (angle >= angle2 || angle <= angle1);
  else
    return (angle >= angle1 && angle <= angle2);
}

function pointWithinPad(x, y, pad) {
  var v = [x - pad.pos[0], y - pad.pos[1]];
  v = rotateVector(v, -pad.angle);
  if (pad.offset) {
    v[0] -= pad.offset[0];
    v[1] -= pad.offset[1];
  }
  return emptyContext2d.isPointInPath(getCachedPadPath(pad), ...v);
}

function netHitScan(layer, x, y) {
  // Check track segments
  if (settings.renderTracks && pcbdata.tracks) {
    for(var track of pcbdata.tracks[layer]) {
      if ('radius' in track) {
        if (pointWithinDistanceToArc(x, y, ...track.center, track.radius, track.startangle, track.endangle, track.width / 2)) {
          return track.net;
        }
      } else {
        if (pointWithinDistanceToSegment(x, y, ...track.start, ...track.end, track.width / 2)) {
          return track.net;
        }
      }
    }
  }
  // Check pads
  if (settings.renderPads) {
    for (var footprint of pcbdata.footprints) {
      for(var pad of footprint.pads) {
        if (pad.layers.includes(layer) && pointWithinPad(x, y, pad)) {
          return pad.net;
        }
      }
    }
  }
  return null;
}

function pointWithinFootprintBbox(x, y, bbox) {
  var v = [x - bbox.pos[0], y - bbox.pos[1]];
  v = rotateVector(v, bbox.angle);
  return bbox.relpos[0] <= v[0] && v[0] <= bbox.relpos[0] + bbox.size[0] &&
         bbox.relpos[1] <= v[1] && v[1] <= bbox.relpos[1] + bbox.size[1];
}

function bboxHitScan(layer, x, y) {
  var result = [];
  for (var i = 0; i < pcbdata.footprints.length; i++) {
    var footprint = pcbdata.footprints[i];
    if (footprint.layer == layer) {
      if (pointWithinFootprintBbox(x, y, footprint.bbox)) {
        result.push(i);
      }
    }
  }
  return result;
}

function handlePointerDown(e, layerdict) {
  if (e.button != 0 && e.button != 1) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();

  if (!e.hasOwnProperty("offsetX")) {
    // The polyfill doesn't set this properly
    e.offsetX = e.pageX - e.currentTarget.offsetLeft;
    e.offsetY = e.pageY - e.currentTarget.offsetTop;
  }

  layerdict.pointerStates[e.pointerId] = {
    distanceTravelled: 0,
    lastX: e.offsetX,
    lastY: e.offsetY,
    downTime: Date.now(),
  };
}

function handleMouseClick(e, layerdict) {
  if (!e.hasOwnProperty("offsetX")) {
    // The polyfill doesn't set this properly
    e.offsetX = e.pageX - e.currentTarget.offsetLeft;
    e.offsetY = e.pageY - e.currentTarget.offsetTop;
  }

  var x = e.offsetX;
  var y = e.offsetY;
  var t = layerdict.transform;
  if (layerdict.layer == "B") {
    x = (devicePixelRatio * x / t.zoom - t.panx + t.x) / -t.s;
  } else {
    x = (devicePixelRatio * x / t.zoom - t.panx - t.x) / t.s;
  }
  y = (devicePixelRatio * y / t.zoom - t.y - t.pany) / t.s;
  var v = rotateVector([x, y], -settings.boardRotation);
  if ("nets" in pcbdata) {
    var net = netHitScan(layerdict.layer, ...v);
    if (net !== highlightedNet) {
      netClicked(net);
    }
  }
  if (highlightedNet === null) {
    var footprints = bboxHitScan(layerdict.layer, ...v);
    if (footprints.length > 0) {
      footprintsClicked(footprints);
    }
  }
}

function handlePointerLeave(e, layerdict) {
  e.preventDefault();
  e.stopPropagation();

  if (!settings.redrawOnDrag) {
    redrawCanvas(layerdict);
  }

  delete layerdict.pointerStates[e.pointerId];
}

function resetTransform(layerdict) {
  layerdict.transform.panx = 0;
  layerdict.transform.pany = 0;
  layerdict.transform.zoom = 1;
  redrawCanvas(layerdict);
}

function handlePointerUp(e, layerdict) {
  if (!e.hasOwnProperty("offsetX")) {
    // The polyfill doesn't set this properly
    e.offsetX = e.pageX - e.currentTarget.offsetLeft;
    e.offsetY = e.pageY - e.currentTarget.offsetTop;
  }

  e.preventDefault();
  e.stopPropagation();

  if (e.button == 2) {
    // Reset pan and zoom on right click.
    resetTransform(layerdict);
    layerdict.anotherPointerTapped = false;
    return;
  }

  // We haven't necessarily had a pointermove event since the interaction started, so make sure we update this now
  var ptr = layerdict.pointerStates[e.pointerId];
  ptr.distanceTravelled += Math.abs(e.offsetX - ptr.lastX) + Math.abs(e.offsetY - ptr.lastY);

  if (e.button == 0 && ptr.distanceTravelled < 10 && Date.now() - ptr.downTime <= 500) {
    if (Object.keys(layerdict.pointerStates).length == 1) {
      if (layerdict.anotherPointerTapped) {
        // This is the second pointer coming off of a two-finger tap
        resetTransform(layerdict);
      } else {
        // This is just a regular tap
        handleMouseClick(e, layerdict);
      }
      layerdict.anotherPointerTapped = false;
    } else {
      // This is the first finger coming off of what could become a two-finger tap
      layerdict.anotherPointerTapped = true;
    }
  } else {
    if (!settings.redrawOnDrag) {
      redrawCanvas(layerdict);
    }
    layerdict.anotherPointerTapped = false;
  }

  delete layerdict.pointerStates[e.pointerId];
}

function handlePointerMove(e, layerdict) {
  if (!layerdict.pointerStates.hasOwnProperty(e.pointerId)) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();

  if (!e.hasOwnProperty("offsetX")) {
    // The polyfill doesn't set this properly
    e.offsetX = e.pageX - e.currentTarget.offsetLeft;
    e.offsetY = e.pageY - e.currentTarget.offsetTop;
  }

  var thisPtr = layerdict.pointerStates[e.pointerId];

  var dx = e.offsetX - thisPtr.lastX;
  var dy = e.offsetY - thisPtr.lastY;

  // If this number is low on pointer up, we count the action as a click
  thisPtr.distanceTravelled += Math.abs(dx) + Math.abs(dy);

  if (Object.keys(layerdict.pointerStates).length == 1) {
    // This is a simple drag
    layerdict.transform.panx += devicePixelRatio * dx / layerdict.transform.zoom;
    layerdict.transform.pany += devicePixelRatio * dy / layerdict.transform.zoom;
  } else if (Object.keys(layerdict.pointerStates).length == 2) {
    var otherPtr = Object.values(layerdict.pointerStates).filter((ptr) => ptr != thisPtr)[0];

    var oldDist = Math.sqrt(Math.pow(thisPtr.lastX - otherPtr.lastX, 2) + Math.pow(thisPtr.lastY - otherPtr.lastY, 2));
    var newDist = Math.sqrt(Math.pow(e.offsetX - otherPtr.lastX, 2)     + Math.pow(e.offsetY - otherPtr.lastY, 2));
    
    var scaleFactor = newDist/oldDist;
    
    if (scaleFactor != NaN) {
      layerdict.transform.zoom *= scaleFactor;
    
      var zoomd = (1 - scaleFactor) / layerdict.transform.zoom;
      layerdict.transform.panx += devicePixelRatio * otherPtr.lastX * zoomd;
      layerdict.transform.pany += devicePixelRatio * otherPtr.lastY * zoomd;
    }
  }

  thisPtr.lastX = e.offsetX;
  thisPtr.lastY = e.offsetY;

  if (settings.redrawOnDrag) {
    redrawCanvas(layerdict);
  }
}

function handleMouseWheel(e, layerdict) {
  e.preventDefault();
  e.stopPropagation();
  var t = layerdict.transform;
  var wheeldelta = e.deltaY;
  if (e.deltaMode == 1) {
    // FF only, scroll by lines
    wheeldelta *= 30;
  } else if (e.deltaMode == 2) {
    wheeldelta *= 300;
  }
  var m = Math.pow(1.1, -wheeldelta / 40);
  // Limit amount of zoom per tick.
  if (m > 2) {
    m = 2;
  } else if (m < 0.5) {
    m = 0.5;
  }
  t.zoom *= m;
  var zoomd = (1 - m) / t.zoom;
  t.panx += devicePixelRatio * e.offsetX * zoomd;
  t.pany += devicePixelRatio * e.offsetY * zoomd;
  redrawCanvas(layerdict);
}

function addMouseHandlers(div, layerdict) {
  div.addEventListener("pointerdown", function(e) {
    handlePointerDown(e, layerdict);
  });
  div.addEventListener("pointermove", function(e) {
    handlePointerMove(e, layerdict);
  });
  div.addEventListener("pointerup", function(e) {
    handlePointerUp(e, layerdict);
  });
  var pointerleave = function(e) {
    handlePointerLeave(e, layerdict);
  }
  div.addEventListener("pointercancel", pointerleave);
  div.addEventListener("pointerleave", pointerleave);
  div.addEventListener("pointerout", pointerleave);

  div.onwheel = function(e) {
    handleMouseWheel(e, layerdict);
  }
  for (var element of [div, layerdict.bg, layerdict.fab, layerdict.silk, layerdict.highlight]) {
    element.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }, false);
  }
}

function setRedrawOnDrag(value) {
  settings.redrawOnDrag = value;
  writeStorage("redrawOnDrag", value);
}

function setBoardRotation(value) {
  settings.boardRotation = value * 5;
  writeStorage("boardRotation", settings.boardRotation);
  document.getElementById("rotationDegree").textContent = settings.boardRotation;
  resizeAll();
}

function initRender() {
  allcanvas = {
    front: {
      transform: {
        x: 0,
        y: 0,
        s: 1,
        panx: 0,
        pany: 0,
        zoom: 1,
      },
      pointerStates: {},
      anotherPointerTapped: false,
      bg: document.getElementById("F_bg"),
      fab: document.getElementById("F_fab"),
      silk: document.getElementById("F_slk"),
      highlight: document.getElementById("F_hl"),
      layer: "F",
    },
    back: {
      transform: {
        x: 0,
        y: 0,
        s: 1,
        panx: 0,
        pany: 0,
        zoom: 1,
      },
      pointerStates: {},
      anotherPointerTapped: false,
      bg: document.getElementById("B_bg"),
      fab: document.getElementById("B_fab"),
      silk: document.getElementById("B_slk"),
      highlight: document.getElementById("B_hl"),
      layer: "B",
    }
  };
  addMouseHandlers(document.getElementById("frontcanvas"), allcanvas.front);
  addMouseHandlers(document.getElementById("backcanvas"), allcanvas.back);
}

///////////////////////////////////////////////

///////////////////////////////////////////////
/* DOM manipulation and misc code */

var bomsplit;
var canvassplit;
var initDone = false;
var bomSortFunction = null;
var currentSortColumn = null;
var currentSortOrder = null;
var currentHighlightedRowId;
var highlightHandlers = [];
var footprintIndexToHandler = {};
var netsToHandler = {};
var highlightedFootprints = [];
var highlightedNet = null;
var lastClicked;

function dbg(html) {
  dbgdiv.innerHTML = html;
}

function redrawIfInitDone() {
  if (initDone) {
    redrawCanvas(allcanvas.front);
    redrawCanvas(allcanvas.back);
  }
}

function padsVisible(value) {
  writeStorage("padsVisible", value);
  settings.renderPads = value;
  redrawIfInitDone();
}

function referencesVisible(value) {
  writeStorage("referencesVisible", value);
  settings.renderReferences = value;
  redrawIfInitDone();
}

function valuesVisible(value) {
  writeStorage("valuesVisible", value);
  settings.renderValues = value;
  redrawIfInitDone();
}

function tracksVisible(value) {
  writeStorage("tracksVisible", value);
  settings.renderTracks = value;
  redrawIfInitDone();
}

function zonesVisible(value) {
  writeStorage("zonesVisible", value);
  settings.renderZones = value;
  redrawIfInitDone();
}

function dnpOutline(value) {
  writeStorage("dnpOutline", value);
  settings.renderDnpOutline = value;
  redrawIfInitDone();
}

function setDarkMode(value) {
  if (value) {
    topmostdiv.classList.add("dark");
  } else {
    topmostdiv.classList.remove("dark");
  }
  writeStorage("darkmode", value);
  settings.darkMode = value;
  redrawIfInitDone();
}

function setFullscreen(value) {
  if (value) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function fabricationVisible(value) {
  writeStorage("fabricationVisible", value);
  settings.renderFabrication = value;
  redrawIfInitDone();
}

function silkscreenVisible(value) {
  writeStorage("silkscreenVisible", value);
  settings.renderSilkscreen = value;
  redrawIfInitDone();
}

function setHighlightPin1(value) {
  writeStorage("highlightpin1", value);
  settings.highlightpin1 = value;
  redrawIfInitDone();
}

function getStoredCheckboxRefs(checkbox) {
  function convert(ref) {
    var intref = parseInt(ref);
    if (isNaN(intref)) {
      for (var i = 0; i < pcbdata.footprints.length; i++) {
        if (pcbdata.footprints[i].ref == ref) {
          return i;
        }
      }
      return -1;
    } else {
      return intref;
    }
  }
  if (!(checkbox in settings.checkboxStoredRefs)) {
    var val = readStorage("checkbox_" + checkbox);
    settings.checkboxStoredRefs[checkbox] = val ? val : "";
  }
  if (!settings.checkboxStoredRefs[checkbox]) {
    return new Set();
  } else {
    return new Set(settings.checkboxStoredRefs[checkbox].split(",").map(r => convert(r)).filter(a => a >= 0));
  }
}

function getCheckboxState(checkbox, references) {
  var storedRefsSet = getStoredCheckboxRefs(checkbox);
  var currentRefsSet = new Set(references.map(r => r[1]));
  // Get difference of current - stored
  var difference = new Set(currentRefsSet);
  for (ref of storedRefsSet) {
    difference.delete(ref);
  }
  if (difference.size == 0) {
    // All the current refs are stored
    return "checked";
  } else if (difference.size == currentRefsSet.size) {
    // None of the current refs are stored
    return "unchecked";
  } else {
    // Some of the refs are stored
    return "indeterminate";
  }
}

function setBomCheckboxState(checkbox, element, references) {
  var state = getCheckboxState(checkbox, references);
  element.checked = (state == "checked");
  element.indeterminate = (state == "indeterminate");
}

function createCheckboxChangeHandler(checkbox, references, row) {
  return function() {
    refsSet = getStoredCheckboxRefs(checkbox);
    var darkenWhenChecked = settings.darkenWhenChecked == checkbox;
    eventArgs = {
      checkbox: checkbox,
      refs: references,
    }
    if (this.checked) {
      // checkbox ticked
      for (var ref of references) {
        refsSet.add(ref[1]);
      }
      if (darkenWhenChecked) {
        row.classList.add("checked");
      }
      eventArgs.state = 'checked';
    } else {
      // checkbox unticked
      for (var ref of references) {
        refsSet.delete(ref[1]);
      }
      if (darkenWhenChecked) {
        row.classList.remove("checked");
      }
      eventArgs.state = 'unchecked';
    }
    settings.checkboxStoredRefs[checkbox] = [...refsSet].join(",");
    writeStorage("checkbox_" + checkbox, settings.checkboxStoredRefs[checkbox]);
    updateCheckboxStats(checkbox);
    EventHandler.emitEvent(IBOM_EVENT_TYPES.CHECKBOX_CHANGE_EVENT, eventArgs);
  }
}

function clearHighlightedFootprints() {
  if (currentHighlightedRowId) {
    document.getElementById(currentHighlightedRowId).classList.remove("highlighted");
    currentHighlightedRowId = null;
    highlightedFootprints = [];
    highlightedNet = null;
  }
}

function createRowHighlightHandler(rowid, refs, net) {
  return function() {
    if (currentHighlightedRowId) {
      if (currentHighlightedRowId == rowid) {
        return;
      }
      document.getElementById(currentHighlightedRowId).classList.remove("highlighted");
    }
    document.getElementById(rowid).classList.add("highlighted");
    currentHighlightedRowId = rowid;
    highlightedFootprints = refs ? refs.map(r => r[1]) : [];
    highlightedNet = net;
    drawHighlights();
    EventHandler.emitEvent(
      IBOM_EVENT_TYPES.HIGHLIGHT_EVENT,
      {
        rowid: rowid,
        refs: refs,
        net: net
      });
  }
}

function entryMatches(entry) {
  if (settings.bommode == "netlist") {
    // entry is just a net name
    return entry.toLowerCase().indexOf(filter) >= 0;
  }
  // check refs
  for (var ref of entry[3]) {
    if (ref[0].toLowerCase().indexOf(filter) >= 0) {
      return true;
    }
  }
  // check extra fields
  for (var i in config.extra_fields) {
    if (entry[4][i].toLowerCase().indexOf(filter) >= 0) {
      return true;
    }
  }
  // check value
  if (entry[1].toLowerCase().indexOf(filter) >= 0) {
    return true;
  }
  // check footprint
  if (entry[2].toLowerCase().indexOf(filter) >= 0) {
    return true;
  }
  return false;
}

function findRefInEntry(entry) {
  return entry[3].filter(r => r[0].toLowerCase() == reflookup);
}

function highlightFilter(s) {
  if (!filter) {
    return s;
  }
  var parts = s.toLowerCase().split(filter);
  if (parts.length == 1) {
    return s;
  }
  var r = "";
  var pos = 0;
  for (var i in parts) {
    if (i > 0) {
      r += '<mark class="highlight">' +
        s.substring(pos, pos + filter.length) +
        '</mark>';
      pos += filter.length;
    }
    r += s.substring(pos, pos + parts[i].length);
    pos += parts[i].length;
  }
  return r;
}

function checkboxSetUnsetAllHandler(checkboxname) {
  return function() {
    var checkboxnum = 0;
    while (checkboxnum < settings.checkboxes.length &&
      settings.checkboxes[checkboxnum].toLowerCase() != checkboxname.toLowerCase()) {
      checkboxnum++;
    }
    if (checkboxnum >= settings.checkboxes.length) {
      return;
    }
    var allset = true;
    var checkbox;
    var row;
    for (row of bombody.childNodes) {
      checkbox = row.childNodes[checkboxnum + 1].childNodes[0];
      if (!checkbox.checked || checkbox.indeterminate) {
        allset = false;
        break;
      }
    }
    for (row of bombody.childNodes) {
      checkbox = row.childNodes[checkboxnum + 1].childNodes[0];
      checkbox.checked = !allset;
      checkbox.indeterminate = false;
      checkbox.onchange();
    }
  }
}

function createColumnHeader(name, cls, comparator) {
  var th = document.createElement("TH");
  th.innerHTML = name;
  th.classList.add(cls);
  th.style.cursor = "pointer";
  var span = document.createElement("SPAN");
  span.classList.add("sortmark");
  span.classList.add("none");
  th.appendChild(span);
  th.onclick = function() {
    if (currentSortColumn && this !== currentSortColumn) {
      // Currently sorted by another column
      currentSortColumn.childNodes[1].classList.remove(currentSortOrder);
      currentSortColumn.childNodes[1].classList.add("none");
      currentSortColumn = null;
      currentSortOrder = null;
    }
    if (currentSortColumn && this === currentSortColumn) {
      // Already sorted by this column
      if (currentSortOrder == "asc") {
        // Sort by this column, descending order
        bomSortFunction = function(a, b) {
          return -comparator(a, b);
        }
        currentSortColumn.childNodes[1].classList.remove("asc");
        currentSortColumn.childNodes[1].classList.add("desc");
        currentSortOrder = "desc";
      } else {
        // Unsort
        bomSortFunction = null;
        currentSortColumn.childNodes[1].classList.remove("desc");
        currentSortColumn.childNodes[1].classList.add("none");
        currentSortColumn = null;
        currentSortOrder = null;
      }
    } else {
      // Sort by this column, ascending order
      bomSortFunction = comparator;
      currentSortColumn = this;
      currentSortColumn.childNodes[1].classList.remove("none");
      currentSortColumn.childNodes[1].classList.add("asc");
      currentSortOrder = "asc";
    }
    populateBomBody();
  }
  return th;
}

function populateBomHeader() {
  while (bomhead.firstChild) {
    bomhead.removeChild(bomhead.firstChild);
  }
  var tr = document.createElement("TR");
  var th = document.createElement("TH");
  th.classList.add("numCol");
  tr.appendChild(th);
  var checkboxCompareClosure = function(checkbox) {
    return (a, b) => {
      var stateA = getCheckboxState(checkbox, a[3]);
      var stateB = getCheckboxState(checkbox, b[3]);
      if (stateA > stateB) return -1;
      if (stateA < stateB) return 1;
      return 0;
    }
  }
  if (settings.bommode == "netlist") {
    th = createColumnHeader("Net name", "bom-netname", (a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    tr.appendChild(th);
  } else {
    for (var checkbox of settings.checkboxes) {
      th = createColumnHeader(
        checkbox, "bom-checkbox", checkboxCompareClosure(checkbox));
      th.onclick = fancyDblClickHandler(
        th, th.onclick.bind(th), checkboxSetUnsetAllHandler(checkbox));
      tr.appendChild(th);
    }
    tr.appendChild(createColumnHeader("References", "References", (a, b) => {
      var i = 0;
      while (i < a[3].length && i < b[3].length) {
        if (a[3][i] != b[3][i]) return a[3][i] > b[3][i] ? 1 : -1;
        i++;
      }
      return a[3].length - b[3].length;
    }));
    // Extra fields
    if (config.extra_fields.length > 0) {
      var extraFieldCompareClosure = function(fieldIndex) {
        return (a, b) => {
          var fa = a[4][fieldIndex];
          var fb = b[4][fieldIndex];
          if (fa != fb) return fa > fb ? 1 : -1;
          else return 0;
        }
      }
      for (var i in config.extra_fields) {
        tr.appendChild(createColumnHeader(
          config.extra_fields[i], "extra", extraFieldCompareClosure(i)));
      }
    }
    tr.appendChild(createColumnHeader("Value", "Value", (a, b) => {
      return valueCompare(a[5], b[5], a[1], b[1]);
    }));
    tr.appendChild(createColumnHeader("Footprint", "Footprint", (a, b) => {
      if (a[2] != b[2]) return a[2] > b[2] ? 1 : -1;
      else return 0;
    }));
    if (settings.bommode == "grouped") {
      tr.appendChild(createColumnHeader("Quantity", "Quantity", (a, b) => {
        return a[3].length - b[3].length;
      }));
    }
  }
  bomhead.appendChild(tr);
}

function populateBomBody() {
  while (bom.firstChild) {
    bom.removeChild(bom.firstChild);
  }
  highlightHandlers = [];
  footprintIndexToHandler = {};
  netsToHandler = {};
  currentHighlightedRowId = null;
  var first = true;
  if (settings.bommode == "netlist") {
    bomtable = pcbdata.nets.slice();
  } else {
    switch (settings.canvaslayout) {
      case 'F':
        bomtable = pcbdata.bom.F.slice();
        break;
      case 'FB':
        bomtable = pcbdata.bom.both.slice();
        break;
      case 'B':
        bomtable = pcbdata.bom.B.slice();
        break;
    }
    if (settings.bommode == "ungrouped") {
      // expand bom table
      expandedTable = []
      for (var bomentry of bomtable) {
        for (var ref of bomentry[3]) {
          expandedTable.push([1, bomentry[1], bomentry[2], [ref], bomentry[4], bomentry[5]]);
        }
      }
      bomtable = expandedTable;
    }
  }
  if (bomSortFunction) {
    bomtable = bomtable.sort(bomSortFunction);
  }
  for (var i in bomtable) {
    var bomentry = bomtable[i];
    if (filter && !entryMatches(bomentry)) {
      continue;
    }
    var references = null;
    var netname = null;
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    var rownum = +i + 1;
    tr.id = "bomrow" + rownum;
    td.textContent = rownum;
    tr.appendChild(td);
    if (settings.bommode == "netlist") {
      netname = bomentry;
      td = document.createElement("TD");
      td.innerHTML = highlightFilter(netname ? netname : "&lt;no net&gt;");
      tr.appendChild(td);
    } else {
      if (reflookup) {
        references = findRefInEntry(bomentry);
        if (references.length == 0) {
          continue;
        }
      } else {
        references = bomentry[3];
      }
      // Checkboxes
      for (var checkbox of settings.checkboxes) {
        if (checkbox) {
          td = document.createElement("TD");
          var input = document.createElement("input");
          input.type = "checkbox";
          input.onchange = createCheckboxChangeHandler(checkbox, references, tr);
          setBomCheckboxState(checkbox, input, references);
          if (input.checked && settings.darkenWhenChecked == checkbox) {
            tr.classList.add("checked");
          }
          td.appendChild(input);
          tr.appendChild(td);
        }
      }
      // References
      td = document.createElement("TD");
      td.innerHTML = highlightFilter(references.map(r => r[0]).join(", "));
      tr.appendChild(td);
      // Extra fields
      for (var i in config.extra_fields) {
        td = document.createElement("TD");
        td.innerHTML = highlightFilter(bomentry[4][i]);
        tr.appendChild(td);
      }
      // Value
      td = document.createElement("TD");
      td.innerHTML = highlightFilter(bomentry[1]);
      tr.appendChild(td);
      // Footprint
      td = document.createElement("TD");
      td.innerHTML = highlightFilter(bomentry[2]);
      tr.appendChild(td);
      if (settings.bommode == "grouped") {
        // Quantity
        td = document.createElement("TD");
        td.textContent = bomentry[3].length;
        tr.appendChild(td);
      }
    }
    bom.appendChild(tr);
    var handler = createRowHighlightHandler(tr.id, references, netname);
    tr.onmousemove = handler;
    highlightHandlers.push({
      id: tr.id,
      handler: handler,
    });
    if (references !== null) {
      for (var refIndex of references.map(r => r[1])) {
        footprintIndexToHandler[refIndex] = handler;
      }
    }
    if (netname !== null) {
      netsToHandler[netname] = handler;
    }
    if ((filter || reflookup) && first) {
      handler();
      first = false;
    }
  }
  EventHandler.emitEvent(
    IBOM_EVENT_TYPES.BOM_BODY_CHANGE_EVENT,
    {
      filter: filter,
      reflookup: reflookup,
      checkboxes: settings.checkboxes,
      bommode: settings.bommode,
    });
}

function highlightPreviousRow() {
  if (!currentHighlightedRowId) {
    highlightHandlers[highlightHandlers.length - 1].handler();
  } else {
    if (highlightHandlers.length > 1 &&
      highlightHandlers[0].id == currentHighlightedRowId) {
      highlightHandlers[highlightHandlers.length - 1].handler();
    } else {
      for (var i = 0; i < highlightHandlers.length - 1; i++) {
        if (highlightHandlers[i + 1].id == currentHighlightedRowId) {
          highlightHandlers[i].handler();
          break;
        }
      }
    }
  }
  smoothScrollToRow(currentHighlightedRowId);
}

function highlightNextRow() {
  if (!currentHighlightedRowId) {
    highlightHandlers[0].handler();
  } else {
    if (highlightHandlers.length > 1 &&
      highlightHandlers[highlightHandlers.length - 1].id == currentHighlightedRowId) {
      highlightHandlers[0].handler();
    } else {
      for (var i = 1; i < highlightHandlers.length; i++) {
        if (highlightHandlers[i - 1].id == currentHighlightedRowId) {
          highlightHandlers[i].handler();
          break;
        }
      }
    }
  }
  smoothScrollToRow(currentHighlightedRowId);
}

function populateBomTable() {
  populateBomHeader();
  populateBomBody();
}

function footprintsClicked(footprintIndexes) {
  var lastClickedIndex = footprintIndexes.indexOf(lastClicked);
  for (var i = 1; i <= footprintIndexes.length; i++) {
    var refIndex = footprintIndexes[(lastClickedIndex + i) % footprintIndexes.length];
    if (refIndex in footprintIndexToHandler) {
      lastClicked = refIndex;
      footprintIndexToHandler[refIndex]();
      smoothScrollToRow(currentHighlightedRowId);
      break;
    }
  }
}

function netClicked(net) {
  if (net in netsToHandler) {
    netsToHandler[net]();
    smoothScrollToRow(currentHighlightedRowId);
  } else {
    clearHighlightedFootprints();
    highlightedNet = net;
    drawHighlights();
  }
}

function updateFilter(input) {
  filter = input.toLowerCase();
  populateBomTable();
}

function updateRefLookup(input) {
  reflookup = input.toLowerCase();
  populateBomTable();
}

function changeCanvasLayout(layout) {
  document.getElementById("fl-btn").classList.remove("depressed");
  document.getElementById("fb-btn").classList.remove("depressed");
  document.getElementById("bl-btn").classList.remove("depressed");
  switch (layout) {
    case 'F':
      document.getElementById("fl-btn").classList.add("depressed");
      if (settings.bomlayout != "bom-only") {
        canvassplit.collapse(1);
      }
      break;
    case 'B':
      document.getElementById("bl-btn").classList.add("depressed");
      if (settings.bomlayout != "bom-only") {
        canvassplit.collapse(0);
      }
      break;
    default:
      document.getElementById("fb-btn").classList.add("depressed");
      if (settings.bomlayout != "bom-only") {
        canvassplit.setSizes([50, 50]);
      }
  }
  settings.canvaslayout = layout;
  writeStorage("canvaslayout", layout);
  resizeAll();
  changeBomMode(settings.bommode);
}

function populateMetadata() {
  document.getElementById("title").innerHTML = pcbdata.metadata.title;
  document.getElementById("revision").innerHTML = "Rev: " + pcbdata.metadata.revision;
  document.getElementById("company").innerHTML = pcbdata.metadata.company;
  document.getElementById("filedate").innerHTML = pcbdata.metadata.date;
  if (pcbdata.metadata.title != "") {
    document.title = pcbdata.metadata.title + " BOM";
  }
  // Calculate board stats
  var fp_f = 0, fp_b = 0, pads_f = 0, pads_b = 0, pads_th = 0;
  for (var i = 0; i < pcbdata.footprints.length; i++) {
    if (pcbdata.bom.skipped.includes(i)) continue;
    var mod = pcbdata.footprints[i];
    if (mod.layer == "F") {
      fp_f++;
    } else {
      fp_b++;
    }
    for (var pad of mod.pads) {
      if (pad.type == "th") {
        pads_th++;
      } else {
        if (pad.layers.includes("F")) {
          pads_f++;
        }
        if (pad.layers.includes("B")) {
          pads_b++;
        }
      }
    }
  }
  document.getElementById("stats-components-front").innerHTML = fp_f;
  document.getElementById("stats-components-back").innerHTML = fp_b;
  document.getElementById("stats-components-total").innerHTML = fp_f + fp_b;
  document.getElementById("stats-groups-front").innerHTML = pcbdata.bom.F.length;
  document.getElementById("stats-groups-back").innerHTML = pcbdata.bom.B.length;
  document.getElementById("stats-groups-total").innerHTML = pcbdata.bom.both.length;
  document.getElementById("stats-smd-pads-front").innerHTML = pads_f;
  document.getElementById("stats-smd-pads-back").innerHTML = pads_b;
  document.getElementById("stats-smd-pads-total").innerHTML = pads_f + pads_b;
  document.getElementById("stats-th-pads").innerHTML = pads_th;
  // Update version string
  document.getElementById("github-link").innerHTML = "InteractiveHtmlBom&nbsp;" +
    /^v\d+\.\d+/.exec(pcbdata.ibom_version)[0];
}

function changeBomLayout(layout) {
  document.getElementById("bom-btn").classList.remove("depressed");
  document.getElementById("lr-btn").classList.remove("depressed");
  document.getElementById("tb-btn").classList.remove("depressed");
  switch (layout) {
    case 'bom-only':
      document.getElementById("bom-btn").classList.add("depressed");
      if (bomsplit) {
        bomsplit.destroy();
        bomsplit = null;
        canvassplit.destroy();
        canvassplit = null;
      }
      document.getElementById("frontcanvas").style.display = "none";
      document.getElementById("backcanvas").style.display = "none";
      document.getElementById("bot").style.height = "";
      break;
    case 'top-bottom':
      document.getElementById("tb-btn").classList.add("depressed");
      document.getElementById("frontcanvas").style.display = "";
      document.getElementById("backcanvas").style.display = "";
      document.getElementById("bot").style.height = "calc(100% - 80px)";
      document.getElementById("bomdiv").classList.remove("split-horizontal");
      document.getElementById("canvasdiv").classList.remove("split-horizontal");
      document.getElementById("frontcanvas").classList.add("split-horizontal");
      document.getElementById("backcanvas").classList.add("split-horizontal");
      if (bomsplit) {
        bomsplit.destroy();
        bomsplit = null;
        canvassplit.destroy();
        canvassplit = null;
      }
      bomsplit = Split(['#bomdiv', '#canvasdiv'], {
        sizes: [50, 50],
        onDragEnd: resizeAll,
        direction: "vertical",
        gutterSize: 5
      });
      canvassplit = Split(['#frontcanvas', '#backcanvas'], {
        sizes: [50, 50],
        gutterSize: 5,
        onDragEnd: resizeAll
      });
      break;
    case 'left-right':
      document.getElementById("lr-btn").classList.add("depressed");
      document.getElementById("frontcanvas").style.display = "";
      document.getElementById("backcanvas").style.display = "";
      document.getElementById("bot").style.height = "calc(100% - 80px)";
      document.getElementById("bomdiv").classList.add("split-horizontal");
      document.getElementById("canvasdiv").classList.add("split-horizontal");
      document.getElementById("frontcanvas").classList.remove("split-horizontal");
      document.getElementById("backcanvas").classList.remove("split-horizontal");
      if (bomsplit) {
        bomsplit.destroy();
        bomsplit = null;
        canvassplit.destroy();
        canvassplit = null;
      }
      bomsplit = Split(['#bomdiv', '#canvasdiv'], {
        sizes: [50, 50],
        onDragEnd: resizeAll,
        gutterSize: 5
      });
      canvassplit = Split(['#frontcanvas', '#backcanvas'], {
        sizes: [50, 50],
        gutterSize: 5,
        direction: "vertical",
        onDragEnd: resizeAll
      });
  }
  settings.bomlayout = layout;
  writeStorage("bomlayout", layout);
  changeCanvasLayout(settings.canvaslayout);
}

function changeBomMode(mode) {
  document.getElementById("bom-grouped-btn").classList.remove("depressed");
  document.getElementById("bom-ungrouped-btn").classList.remove("depressed");
  document.getElementById("bom-netlist-btn").classList.remove("depressed");
  switch (mode) {
    case 'grouped':
      document.getElementById("bom-grouped-btn").classList.add("depressed");
      break;
    case 'ungrouped':
      document.getElementById("bom-ungrouped-btn").classList.add("depressed");
      break;
    case 'netlist':
      document.getElementById("bom-netlist-btn").classList.add("depressed");
  }
  writeStorage("bommode", mode);
  if (mode != settings.bommode) {
    settings.bommode = mode;
    bomSortFunction = null;
    currentSortColumn = null;
    currentSortOrder = null;
    clearHighlightedFootprints();
  }
  populateBomTable();
}

function focusFilterField() {
  focusInputField(document.getElementById("filter"));
}

function focusRefLookupField() {
  focusInputField(document.getElementById("reflookup"));
}

function toggleBomCheckbox(bomrowid, checkboxnum) {
  if (!bomrowid || checkboxnum > settings.checkboxes.length) {
    return;
  }
  var bomrow = document.getElementById(bomrowid);
  var checkbox = bomrow.childNodes[checkboxnum].childNodes[0];
  checkbox.checked = !checkbox.checked;
  checkbox.indeterminate = false;
  checkbox.onchange();
}

function checkBomCheckbox(bomrowid, checkboxname) {
  var checkboxnum = 0;
  while (checkboxnum < settings.checkboxes.length &&
    settings.checkboxes[checkboxnum].toLowerCase() != checkboxname.toLowerCase()) {
    checkboxnum++;
  }
  if (!bomrowid || checkboxnum >= settings.checkboxes.length) {
    return;
  }
  var bomrow = document.getElementById(bomrowid);
  var checkbox = bomrow.childNodes[checkboxnum + 1].childNodes[0];
  checkbox.checked = true;
  checkbox.indeterminate = false;
  checkbox.onchange();
}

function setBomCheckboxes(value) {
  writeStorage("bomCheckboxes", value);
  settings.checkboxes = value.split(",").filter((e) => e);
  prepCheckboxes();
  populateBomTable();
  populateDarkenWhenCheckedOptions();
}

function setDarkenWhenChecked(value) {
  writeStorage("darkenWhenChecked", value);
  settings.darkenWhenChecked = value;
  populateBomTable();
}

function prepCheckboxes() {
  var table = document.getElementById("checkbox-stats");
  while (table.childElementCount > 1) {
    table.removeChild(table.lastChild);
  }
  if (settings.checkboxes.length) {
    table.style.display = "";
  } else {
    table.style.display = "none";
  }
  for (var checkbox of settings.checkboxes) {
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    td.innerHTML = checkbox;
    tr.appendChild(td);
    td = document.createElement("TD");
    td.id = "checkbox-stats-" + checkbox;
    var progressbar = document.createElement("div");
    progressbar.classList.add("bar");
    td.appendChild(progressbar);
    var text = document.createElement("div");
    text.classList.add("text");
    td.appendChild(text);
    tr.appendChild(td);
    table.appendChild(tr);
    updateCheckboxStats(checkbox);
  }
}

function populateDarkenWhenCheckedOptions() {
  var container = document.getElementById("darkenWhenCheckedContainer");

  if (settings.checkboxes.length == 0) {
    container.parentElement.style.display = "none";
    return;
  }

  container.innerHTML = '';
  container.parentElement.style.display = "inline-block";

  function createOption(name, displayName) {
    var id = "darkenWhenChecked-" + name;

    var div = document.createElement("div");
    div.classList.add("radio-container");
    
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "darkenWhenChecked";
    input.value = name;
    input.id = id;
    input.onchange = () => setDarkenWhenChecked(name);
    div.appendChild(input);
    
    // Preserve the selected element when the checkboxes change
    if (name == settings.darkenWhenChecked) {
      input.checked = true;
    }
    
    var label = document.createElement("label");
    label.innerHTML = displayName;
    label.htmlFor = id;
    div.appendChild(label);
    
    container.appendChild(div);
  }
  createOption("", "None");
  for (var checkbox of settings.checkboxes) {
    createOption(checkbox, checkbox);
  }
}

function updateCheckboxStats(checkbox) {
  var checked = getStoredCheckboxRefs(checkbox).size;
  var total = pcbdata.footprints.length - pcbdata.bom.skipped.length;
  var percent = checked * 100.0 / total;
  var td = document.getElementById("checkbox-stats-" + checkbox);
  td.firstChild.style.width = percent + "%";
  td.lastChild.innerHTML = checked + "/" + total + " (" + Math.round(percent) + "%)";
}

document.onkeydown = function(e) {
  switch (e.key) {
    case "n":
      if (document.activeElement.type == "text") {
        return;
      }
      if (currentHighlightedRowId !== null) {
        checkBomCheckbox(currentHighlightedRowId, "placed");
        highlightNextRow();
        e.preventDefault();
      }
      break;
    case "ArrowUp":
      highlightPreviousRow();
      e.preventDefault();
      break;
    case "ArrowDown":
      highlightNextRow();
      e.preventDefault();
      break;
    default:
      break;
  }
  if (e.altKey) {
    switch (e.key) {
      case "f":
        focusFilterField();
        e.preventDefault();
        break;
      case "r":
        focusRefLookupField();
        e.preventDefault();
        break;
      case "z":
        changeBomLayout("bom-only");
        e.preventDefault();
        break;
      case "x":
        changeBomLayout("left-right");
        e.preventDefault();
        break;
      case "c":
        changeBomLayout("top-bottom");
        e.preventDefault();
        break;
      case "v":
        changeCanvasLayout("F");
        e.preventDefault();
        break;
      case "b":
        changeCanvasLayout("FB");
        e.preventDefault();
        break;
      case "n":
        changeCanvasLayout("B");
        e.preventDefault();
        break;
      default:
        break;
    }
    if (e.key >= '1' && e.key <= '9') {
      toggleBomCheckbox(currentHighlightedRowId, parseInt(e.key));
      e.preventDefault();
    }
  }
}

function hideNetlistButton() {
  document.getElementById("bom-ungrouped-btn").classList.remove("middle-button");
  document.getElementById("bom-ungrouped-btn").classList.add("right-most-button");
  document.getElementById("bom-netlist-btn").style.display = "none";
}

window.onload = function(e) {
  initUtils();
  initRender();
  initStorage();
  initDefaults();
  cleanGutters();
  populateMetadata();
  dbgdiv = document.getElementById("dbg");
  bom = document.getElementById("bombody");
  bomhead = document.getElementById("bomhead");
  filter = "";
  reflookup = "";
  if (!("nets" in pcbdata)) {
    hideNetlistButton();
  }
  initDone = true;
  prepCheckboxes();
  // Triggers render
  changeBomLayout(settings.bomlayout);

  // Users may leave fullscreen without touching the checkbox. Uncheck.
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement)
      document.getElementById('fullscreenCheckbox').checked = false;
  });
}

window.onresize = resizeAll;
window.matchMedia("print").addListener(resizeAll);

///////////////////////////////////////////////

///////////////////////////////////////////////

///////////////////////////////////////////////
  </script>
</head>

<body>

<div id="topmostdiv" class="topmostdiv">
  <div id="top">
    <div style="float: right; height: 100%;">
      <div class="hideonprint menu" style="float: right; top: 8px;">
        <button class="menubtn"></button>
        <div class="menu-content">
          <label class="menu-label menu-label-top" style="width: calc(50% - 18px)">
            <input id="darkmodeCheckbox" type="checkbox" onchange="setDarkMode(this.checked)">
            Dark mode
          </label><!-- This comment eats space! All of it!
          --><label class="menu-label menu-label-top" style="width: calc(50% - 17px); border-left: 0;">
            <input id="fullscreenCheckbox" type="checkbox" onchange="setFullscreen(this.checked)">
            Full Screen
          </label>
          <label class="menu-label" style="width: calc(50% - 18px)">
            <input id="fabricationCheckbox" type="checkbox" checked onchange="fabricationVisible(this.checked)">
            Fab layer
          </label><!-- This comment eats space! All of it!
          --><label class="menu-label" style="width: calc(50% - 17px); border-left: 0;">
            <input id="silkscreenCheckbox" type="checkbox" checked onchange="silkscreenVisible(this.checked)">
            Silkscreen
          </label>
          <label class="menu-label" style="width: calc(50% - 18px)">
            <input id="referencesCheckbox" type="checkbox" checked onchange="referencesVisible(this.checked)">
            References
          </label><!-- This comment eats space! All of it!
          --><label class="menu-label" style="width: calc(50% - 17px); border-left: 0;">
            <input id="valuesCheckbox" type="checkbox" checked onchange="valuesVisible(this.checked)">
            Values
          </label>
          <div id="tracksAndZonesCheckboxes">
            <label class="menu-label" style="width: calc(50% - 18px)">
              <input id="tracksCheckbox" type="checkbox" checked onchange="tracksVisible(this.checked)">
              Tracks
            </label><!-- This comment eats space! All of it!
            --><label class="menu-label" style="width: calc(50% - 17px); border-left: 0;">
              <input id="zonesCheckbox" type="checkbox" checked onchange="zonesVisible(this.checked)">
              Zones
            </label>
          </div>
          <label class="menu-label" style="width: calc(50% - 18px)">
            <input id="padsCheckbox" type="checkbox" checked onchange="padsVisible(this.checked)">
            Pads
          </label><!-- This comment eats space! All of it!
          --><label class="menu-label" style="width: calc(50% - 17px); border-left: 0;">
            <input id="dnpOutlineCheckbox" type="checkbox" checked onchange="dnpOutline(this.checked)">
            DNP outlined
          </label>
          <label class="menu-label">
            <input id="highlightpin1Checkbox" type="checkbox" onchange="setHighlightPin1(this.checked)">
            Highlight first pin
          </label>
          <label class="menu-label">
            <input id="dragCheckbox" type="checkbox" checked onchange="setRedrawOnDrag(this.checked)">
            Continuous redraw on drag
          </label>
          <label class="menu-label">
            <span>Board rotation</span>
            <span style="float: right"><span id="rotationDegree">0</span>&#176;</span>
            <input id="boardRotation" type="range" min="-36" max="36" value="0" class="slider" oninput="setBoardRotation(this.value)">
          </label>
          <label class="menu-label">
            <div style="margin-left: 5px">Bom checkboxes</div>
            <input id="bomCheckboxes" class="menu-textbox" type=text
                   oninput="setBomCheckboxes(this.value)">
          </label>
          <label class="menu-label">
            <div style="margin-left: 5px">Darken when checked</div>
            <div id="darkenWhenCheckedContainer"></div>
          </label>
          <label class="menu-label">
            <span class="shameless-plug">
              <span>Created using</span>
              <a id="github-link" target="blank" href="https://github.com/openscopeproject/InteractiveHtmlBom">InteractiveHtmlBom</a>
            </span>
          </label>
        </div>
      </div>
      <div class="button-container hideonprint"
           style="float: right; position: relative; top: 8px">
        <button id="fl-btn" class="left-most-button" onclick="changeCanvasLayout('F')"
                title="Front only">F
        </button>
        <button id="fb-btn" class="middle-button" onclick="changeCanvasLayout('FB')"
                title="Front and Back">FB
        </button>
        <button id="bl-btn" class="right-most-button" onclick="changeCanvasLayout('B')"
                title="Back only">B
        </button>
      </div>
      <div class="button-container hideonprint"
           style="float: right; position: relative; top: 8px">
        <button id="bom-btn" class="left-most-button" onclick="changeBomLayout('bom-only')"
                title="BOM only"></button>
        <button id="lr-btn" class="middle-button" onclick="changeBomLayout('left-right')"
                title="BOM left, drawings right"></button>
        <button id="tb-btn" class="right-most-button" onclick="changeBomLayout('top-bottom')"
                title="BOM top, drawings bot"></button>
      </div>
      <div class="button-container hideonprint"
           style="float: right; position: relative; top: 8px">
        <button id="bom-grouped-btn" class="left-most-button" onclick="changeBomMode('grouped')"
                title="Grouped BOM"></button>
        <button id="bom-ungrouped-btn" class="middle-button" onclick="changeBomMode('ungrouped')"
                title="Ungrouped BOM"></button>
        <button id="bom-netlist-btn" class="right-most-button" onclick="changeBomMode('netlist')"
                title="Netlist"></button>
      </div>
      <div class="hideonprint menu" style="float: right; top: 8px;">
        <button class="statsbtn"></button>
        <div class="menu-content">
          <table class="stats">
            <tbody>
              <tr>
                <td width="40%">Board stats</td>
                <td>Front</td>
                <td>Back</td>
                <td>Total</td>
              </tr>
              <tr>
                <td>Components</td>
                <td id="stats-components-front">~</td>
                <td id="stats-components-back">~</td>
                <td id="stats-components-total">~</td>
              </tr>
              <tr>
                <td>Groups</td>
                <td id="stats-groups-front">~</td>
                <td id="stats-groups-back">~</td>
                <td id="stats-groups-total">~</td>
              </tr>
              <tr>
                <td>SMD pads</td>
                <td id="stats-smd-pads-front">~</td>
                <td id="stats-smd-pads-back">~</td>
                <td id="stats-smd-pads-total">~</td>
              </tr>
              <tr>
                <td>TH pads</td>
                <td colspan=3 id="stats-th-pads">~</td>
              </tr>
            </tbody>
          </table>
          <table class="stats">
            <col width="40%"/><col />
            <tbody id="checkbox-stats">
              <tr>
                <td colspan=2 style="border-top: 0">Checkboxes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="hideonprint menu" style="float: right; top: 8px;">
        <button class="iobtn"></button>
        <div class="menu-content">
          <div class="menu-label menu-label-top">
            <div style="margin-left: 5px;">Save board image</div>
            <div class="flexbox">
              <input id="render-save-width" class="menu-textbox" type="text" value="1000" placeholder="Width"
                  style="flex-grow: 1; width: 50px;" oninput="validateSaveImgDimension(this)">
              <span>X</span>
              <input id="render-save-height" class="menu-textbox" type="text" value="1000" placeholder="Height"
                  style="flex-grow: 1; width: 50px;" oninput="validateSaveImgDimension(this)">
            </div>
            <label>
              <input id="render-save-transparent" type="checkbox">
              Transparent background
            </label>
            <div class="flexbox">
              <button class="savebtn" onclick="saveImage('F')">Front</button>
              <button class="savebtn" onclick="saveImage('B')">Back</button>
            </div>
          </div>
          <div class="menu-label">
            <span style="margin-left: 5px;">Config and checkbox state</span>
            <div class="flexbox">
              <button class="savebtn" onclick="saveSettings()">Export</button>
              <button class="savebtn" onclick="loadSettings()">Import</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="fileinfodiv" style="overflow: auto;">
      <table class="fileinfo">
        <tbody>
          <tr>
            <td id="title" class="title" style="width: 70%">
              Title
            </td>
            <td id="revision" class="title" style="width: 30%">
              Revision
            </td>
          </tr>
          <tr>
            <td id="company">
              Company
            </td>
            <td id="filedate">
              Date
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div id="bot" class="split" style="height: calc(100% - 80px)">
    <div id="bomdiv" class="split split-horizontal">
      <div style="width: 100%">
        <input id="reflookup" class="textbox searchbox reflookup hideonprint" type="text" placeholder="Ref lookup"
               oninput="updateRefLookup(this.value)">
        <input id="filter" class="textbox searchbox filter hideonprint" type="text" placeholder="Filter"
               oninput="updateFilter(this.value)">
        <div class="button-container hideonprint" style="float: left; margin: 0;">
          <button id="copy" title="Copy bom table to clipboard"
               onclick="copyToClipboard()"></button>
        </div>
      </div>
      <div id="dbg"></div>
      <table class="bom">
        <thead id="bomhead">
        </thead>
        <tbody id="bombody">
        </tbody>
      </table>
    </div>
    <div id="canvasdiv" class="split split-horizontal">
      <div id="frontcanvas" class="split" touch-action="none" style="overflow: hidden">
        <div style="position: relative; width: 100%; height: 100%;">
          <canvas id="F_bg" style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas>
          <canvas id="F_fab" style="position: absolute; left: 0; top: 0; z-index: 1;"></canvas>
          <canvas id="F_slk" style="position: absolute; left: 0; top: 0; z-index: 2;"></canvas>
          <canvas id="F_hl" style="position: absolute; left: 0; top: 0; z-index: 3;"></canvas>
        </div>
      </div>
      <div id="backcanvas" class="split" touch-action="none" style="overflow: hidden">
        <div style="position: relative; width: 100%; height: 100%;">
          <canvas id="B_bg" style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas>
          <canvas id="B_fab" style="position: absolute; left: 0; top: 0; z-index: 1;"></canvas>
          <canvas id="B_slk" style="position: absolute; left: 0; top: 0; z-index: 2;"></canvas>
          <canvas id="B_hl" style="position: absolute; left: 0; top: 0; z-index: 3;"></canvas>
        </div>
      </div>
    </div>
  </div>
</div>

</body>

</html>