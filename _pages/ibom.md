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
var pcbdata = JSON.parse(LZString.decompressFromBase64("N4IgpgJg5mDOD6AjRB7AHiAXAAlAWwEsA7DHABgDoyB2ADmoBYAabEQogTy2wFoA2Cnz4AmAJyjhLNgEM0pbAwoBGetVEBWKXllccPSmQDMow9QC+UyDFjcA2qAAuHAA5huIWGCh4wRByClYB2kAJ38cWwM6RhZ9KmNTAF1LIgg7RRVqNU1eAwTqZNYAdwIIBwALbgMLXBAnV3dPb19/QOCw9OVVDVi8kwKUtIiM7pz+QRFxYUKQErLK8ioaxxc3HA8vHz8A1iDQ8OxbEaye3gEhMQkZ3yHDqPpmM4nL6ak5iqqllhWG9aat1q7doHSJUaKPcYXKbXVJ2e4xXLxfozd4LbDVb51VaNTYtHYeYFwsEPWKKOh8CSiGG3UE0Em8RSGBgUsQo0ofRZkZZY367XHbNr7Il0hE8RTCQzqRi0anC8GxQwUbLStnzT5czH1NZ85oCoFCiLwiGKvi0BjqPgDVg3OX0niK4QMc2W1Uc9FfWpanG6wEEg2HDLUQzCYS0WLqCi0IwiV7W2HDZRBkNhp6Owwx11ojGe7F/fm+vYdBNKJOh8MUYRKQw0JSy4ullM8CN8dTV6i1t7srMen7ajY+/GFkGB4NlhmCEPqWPgeMBxOjxsRsgiKeZ9VmGYQELSEpEKA2HCgWAEAA2AGtYABjEJgXzcUAAMTsve9AMHhIiDvU6gkSlJSsdURzTrQ4vx/St/wpJQgPUNdOTIYRuS9PMB0FItQIrb9f0g0RoOAwY7AdagyHUWhG0UKCYLg90yAQpDcx1N80JBB1aEMJRTRwvDYIIz8KzYjjyIAhgqM7NV4MQzUGP7Jj9XQ2xWPYzjx2oQD8LjGkHQkQwmX/VSRPU2Yu3VOipN5EBQkvQcADcoGcaQ3RAABZbBFWrJR1DIJQVI8rJaGwABBGiyFwy1gtC6h0SishXIrbSmRUtT1HxVETMknNzP+PFmMIih3M8v8fKlOgQIUvKvIKvSvKUGrqIMUyMr7SybLshy0Wc2KxAlBKxUEXCYMC8KOMi+qIuiqK3IqryVOqmqUuMiT6My/N339Mqup0iEKP6wybT40MlKEyjDNSxazL7LK9T9eS3N8lQqpq2reIw9ipXuoq/LqqgGpfdZmsCWz7Mcly3KZEjvN69tiv8oLRuGoawpipHYte9t/Mh3y6Hm8TgvS37GOyuSWLysH1EKjHodK0GGHBh7Hq+2i8Z5JqQisgHWuBlG7siyHZu82HvrGuHEfG6nwZmx6lGxt16qZ5CCauodcqZVSSz0ks+CejTlYtQwzT0pKGZ+5nX0J67iclPg9a24TRO1vjLetri7aMnHZaWi6Vpyh2GFV6hnd22cyvTb8yYDnjigW3GPdNxWPww6UnXJslDeesrE4YZO+u4o25eky6C3j9OGDNTPw6ppUraUMgjp2iPXZl768+W1CidyrILXocu08VDvTX9xKDPr07o/O2PC7W3vqE7gfIdT+2E7NWh1Bt/SXZH92x7+1mWqB9qQaVICEIhslMZhhGRsF+HkZi3ul5XweYOl7tGZjlDZPN9uj4gj6Sp7w+aY/15pLXOb9WD/V2IDNq7gD50BLg/Xqx11CDWFpfWiQtRYAOPhLR6z80pgJkmbJWfE4HLxtkgiufcu7jgoWJRur8t4KwnjdSMNcJSzzJHzCuUZaDsPVpTOhL9jbywsjvdme8YGxV4S2Yiv9z6oIvuNW+rDeGmDkXgs6jVx6rRYdIqU/DPr/z0RwpUXDBH4MYaItmkCOb7ykWwtRwDHooKvojVxI1MHGJik4ua5jNH4ysbvaB6wD7LyjLIjGQgNAuNorwzywU4k3wmpGESvDvEpyHho0eWjt7WI8FAzmiozSiDSY/c0MTq4/lEDRSp4glFSOMEGHmp9qCayln47JASIH5NsZIop35gzpKVNXYQdAYk11oJrBJkzvJJP6eEoZ7YonJQ6ZvHJTCdHE2Xq2SQPkEJ/wXmVNiogmnd0jm7JuBCC6bNysc05NC67cNIjQM5DchHN09q3T+ERhCVyjMYWIAglAlzNIYUqvzWn/NEICigUoa4MDBas76fArlezbj8v5RhoVPDhaC8FSodJYphbihFRsUWWOud7Q4vy+AISJTi4ieK040rpQCp4wKyKkqRbRcl6zCFxzWiy4Q9LxgcqZYcmlpgRVApBVy859Dlyoq+cQ6lBLqxstFbKxFErMUaplZy7VbyTK8oCZS9FqqrbET1bCxlcqZw0iFdKm18LDUb2RQQ7psACl2JpcvLFTxlzW0MBUzytEamhqSTFX1nljABpMKCrJBgPnuE9d6yR0b/XjBCkGkNtEkZUA8nm+pGbY1Zqtgm7lyb35EKLr82g0EsLlhqhSK4zLIwNp/OWGgxhW3yqESak21aBXyTraHTtvAIzNuhG27ZjaJ1gh7dON1PKlUfxVbYX54gNDjqbMoDi06dVbrnbu7tB6jXwQHSIs13yMJGFDti3dU7e32tyne49S4gxnuXYqilaKb0bqVLQbdD7J1MjPXtVVogSLvuUGB5937L35z/euzd0Gd2gZEs+iDAGoP3q7UBL9Ud6qIZbmu2tFBcMwZCph6c2HN0iSowR+DRH3W/uVeRgjjGaP4s4+h2D3HuU/r5delDFGGN8arAJw5iplx4fnZJwjFyV1sbI5PKgLYYMKaw0HGTGm+PGBCsxpTQnTXIaLrpuTu6DPgZ01QTyMHrNGYVSRz5qmR2AeA+WRztGg4QqA5puDS6WPKeE2ZwVrDzT6agzZh1HmHPRac/21dNbwskWXrhGFhaEIMHxWln85MBBSmFY6MlyXh0gl+XljLDLis5bbQhSU1XxhFey6VlTKX5JKEjBIfLxLVKtbTl1oDwhevstDSVwTLntFUtsENnrTWgXjbq4crrEhp4LeUEttroX2OpYlKN0VW36ukQO4txmy3z3BSm0O5hIJVujNOza2rpU5sjY2y1ibfbjUerETYiRITsCrenvlgNLZsu5rDQYLLkbAcUeB7hONnlHSJqoFW8Bv2en/dYC5IHWEIYCBCkjhgEP81TUh+NXHIOy1E5R8IpDu33OZylQ+s7mcrQvoxUz4iLOnts+26ZhnFWKBc5Cn1x0JZ8WmHoKLmrfPJtldu3YX5josgy+a/pCXbaVfc8y55OXX2L0K5uRi7XavWea51aGUZZvNtkH15d4jRuZu/KlzrsbduLcc9VSLnnhb7cIad+agDVu3fq/F+zujFZfah8Kxr9nAfLGpt6QDl3bYQqg5XiWEn4ai1JNTzQdPWaNBs9p2jwJ4jgnY+wPn7niO2fZ6hxG4tJMC/VOpyXytgf/0u5MCocmk6ar1o7DqhIfeu1oy1g71jO23NC6lJnetTbB+T8j/Psf86axD/54OjZzvhehnX4+5fw+vcAYYAfxfG+J8n4TzPjrQvaW4Uv0fvvJ/I+P8Px+1/2+r1hc66YvXWeM7LfQbAAu3IAp7EAg3K7LvddLrYiQAsXKA0/LrS0WiX2JAyfW/AXWfOwLrVsKDDAmrZA7DfAgzIgw7GuLA4LEzHfflRXCIMgwgiAwtEgoOfAxgcA3XKgm/Gg67XfIPVA4iLg93NgmkeAkiEQyg5A7AugkTIuDgmmCg2PA/N/dg2FcgiAorGQvgn7PJL1ZPKvVAkMcAjPIfBvAtJvJJYw4VX2RHIfUvPQoJTmGw0wovUiGqCwsnGHVwuw6nBwzvdrcrYUEsdsExPWPWUiUqKHLINWccEFFQKkQTWgWAouGIsI/8BIoDUqOIZcFkB9RQLIpI6A+qFIoIhgw4XIqJMQTIsiRInIgwUQPgc0Exc0SZTWI2Mou/YIiIXIpolozI0iIQNQmkOIR0WlK2QY9o3g4zLonA+/OwMY5kQNKY4YhoqPCYwwTI38YQPgTo1ItaJYzY7YysXY9YjaCUE4pQM45Ig4+SMY7SS4+InYvYtOB4iUJ4xBNnYMfY8o43SoygC4rYmhb4nzUYwE5YyYkEksH424v4mbI4lY6EpMc4yE4ExBaeaCePGguYuQv/EEREqEjEsmE5dYkKZo/RGhTE0kuE7oio2wPoikkxS0EkiPIOKo/IyCZ0CkX4uk/4hkgwaogowQbk4o0/dIuIr4i0Hk2k+Ynou4AtWI5k0U6IxUjIlSYeHEu4kEKIEuIwTIjySUC7bDXU/5dWP1C7b9XE3/QXEIpUvSeuE0sEPU9EskTU2Y7UuUF0/8CIsJVUrye08cX0qI2UvE20w0NUyUopYMS0NkmkCU2eRUfoWJXkuU+khMhUCjKVGuMkoUzM5MnM0Mm03A3owUzk3gJM7MmUN4xopk/MmgEuVMsMksgEqgfoyk+0CjBs6sw5Qk9EpM7sps4shY0sjYpEzsqDFUGsscokpMmmdeLU+EoPPs/M+cwOcEuKD4/ssTajd0hVa0+nFsgUzc4Mbco+F2bDd408/8EKaDGY/cz00coEm8yjEYxYiE448cW878e8oRA80jEc1s8Y8cxQb8smVEz83qa4mmDiIcw8wC484CokjIR0LyV43s2sgY8caCtCuCgC+U488krCqC1C2C6cvIykF8p0MiPC1zBCjkyir8oCEFf00IyU0C5imios+CgijMpi6ins8UyMkxaCOosUq0x8hU7s/UisyMZomE/06UGSqCy0U82i6bIPPiqCkpetMUp06S105QHS6CdSm7fk005S6M3YrIViwMzstiay7Ej0pc/9LS1iYFJo2y9UzsyI3hJyh8ly9dNyvKMJUZXM8sny0K/yv8ySwivM2S3ysK8i9sxMvKC0S4UygQ/9Rk4itydK8QCC8cvKyYcSxcvkhEj8oqtKkqwq2ckKk5ZozK+g/klchKoDVpY09kwEx47cvWBqy0sqtMlq7qrczMvqjq84nqzMggpIbi/C+kq8z4xUGauM98mc7clapq+Qw4yquqza6cpCja1SNiPcmKwKouVqzs7QyUMklK6a46m6uauiginKjs5ah6x0rq9TCK5ahFNsLa/Etaiimo2SleQlVaiMgM7y368GgG8MqSti1KsG/6tOYK5o1pPWOGo8iy3q64mLL0s02SzWTWc/LGhCtG32ctRS70omymzGp6jS1y50wmzsg/ESdCoSqGqM/iDyjmiS86taLrZcF4f8DQaYl7dTEWjfZopo38kydQWKoWkq3ZE9GWjo0A6ueUaW9muW+CBWgW//YWqYLtNWt8iMkwfoE2nWo2fW8qzSrMy28cMWtY0Ao2iQUWoY9Wko76W2oambJWqW3qZ2r2lA5QEUG2YO3W4KX25shCpWqXPSTWMQvA9TBO8cSZHQ4zGO4cgi+Ougf8DOlfdQ6uaYgu00agrOxW1O/O9O8us2hUo+XyMuzOhVbOni9MncpulSJOou8Q6uoSVpb/QTNu+a/kvOgenu+u2bMO0u7uoe722iEe56+krrUwDQMcSGSeiWteqcISQuqO+qJexmuAvKbIDexQfeiW8/J0NXC+uum2qune8+uS5OxgzCH8ZcZuiu1uqukbD+vgRO+e0Op+ieoB79I+sy/20+9e0B1+w4Lra++cwBluoRCBrKk+vWIwDyD28W0AzB16K22Wh+g2u7EKrBsYJcU2q+kbLEwhkO8Bx+/5bB7Woh0AkbKJdEyh624e3+6UkwHBl2lbMhghp2z2g+n2xh8hgRkO0g/fVk6R8Rxequkm2Wuhqe1A3mrOSO4hu2/9DRnWhRiWuFGgYU7RnhkhlOlRzWQx0AoMMJQysxhekiKuux0iTh9TbhoRqx/vDx1hpxtB5qqB7xtRox4QtQEJ8x3Rk+yer+9RwQV/ZB7+1B5RhJueuB6eqUBcRJxR5xixt+mJtJ3ulOxgGElWskLeyJv2wQpUUE2JiWgp3qS+yp2O3O+JofOp0AzJ5MDp/xqukwZMQyppoR/pg6bJnRqpvRrMgZsZ0AsiTgspyuMBmggJ7a//EZtiGZnVaDKDABwpnJlZwGjFbZz+2u9J1bBcQZ++5pnOleqZ0Z05opt+uZwBHpqfJRvJ+BrM3miJ4Z9idmmx3pj56e3vf50R3BoRsiYYiOsR8Zlp25kFpogF0/SrH896IOmF659u/klFsmNFrhvx0OhF3Z1Wzxt53JqJhQr50Fklgl2RyFkmn5slg5+G6e1SJkEbcsFeCqCGz5rIXYvWTlmCqUMm1ptl8/Chm1G+vS9QsVjl+dCk0ZPmwauFsepUVSctTlxgeciWvljV+V80RVkV25yZaLCECMLli89Qp/NsQV3co11Vk16jTV1kiWx1oCcsZozY+1qB61l5edKUF10A312eZsNE71oPX5BFYVahXdLl3yfFEuPGkDWFIV6Kkyf85e7F4XQZGN81rVkKBNnNkNkUqcVpcN7vYXetS4TVqVhNqt8QD1g1sthmyBiNm1PuW1y12LEQCkCkTtk6ZVm5rN4qaeYlvNwNnVEdi0Rtr1lt9B8jHtpo5NgNrE/FRdvt/V2dpxjN4+8zZQEMUwbg+3bDRUa4vhWXT3WQodmbU9g9rQuPCuGue5MPf3XQoFzdXWe98PHjT9o9y9t9il8LDQS1P9nlnDXCQ993V94zfgwJoPGTegSDyg492zM9pD83NNw3d9ijCDr9lD2LYD9D3nf9mDpwivQpJEKVDPevAWbwnPcnZGGTfIbxAnYvEsRwxPDHAwrHDqJj5MuvLPWj6HejmHPjqj9vdjwIwD9zDlLB/8LqJ93LEwig8UCQRTwTcEWKyrZTkxBT+gJT2w1ov1NQI2TT7DhCQz2ozyEzttWT9iKzkx0zh4LT5QF0rOeBRz2ztz+TtT/TjT5z7DkMFQMYcUaXQsnVDiVJ3qUMYQwS79Mz6ToXOz8mIpaCT1gzqQ1L/opV4zBLiZ0TCzzL9tbLjLlTgtfluLmgvLlVvfQrsrryCr/FZLm864qm/zxgFz5rr81r+miL7z2S3S9L9rhgFzoL5eTM+tZ0MD35SL9pgb4FC0TD4Kar69ttrrny32YVT62LOr1KlWLbpzjr8znTsazbkiUrpGmCmkpxlbrF2rk70Gq76b1zph6ap7w7kb7D9b36rya75Fl7uThKs706kyW70evfMbsYNyc/Vrprhp6H04nLhVMHzNqB64jiFeWIX5b8CUEQCW9HlsCEGlEpLBj7qugnzH3gYnph7e4Lu3LHvqGn4bx+unonxn0nvB1nhnnH9MILXLgLxLlO9iC07nqcXn/HysQn0X3Hvn5HgX/LylzWu0SNqMMmMElOpX0UbH3y11Kr+Xmrtt5Y3H6X8XttI39MBnikJnm7/X1bit834l6njnnVGRJ9y3kn9iMn7D13mNp3z3ttH32ebHsXvH5n733FIP2FEP9XznWlY3qnqPmXr3wXznZkYilX8GGP73NPjs7X+x5PhXtTNQMSk30P6TQ+EvhPq353sllH3dov4yh9P3qepM4DjdngZvgvg3/9Vvvh93630/XvqJUv2XoROv1tnvnDvvhPnnsvwfiv3Skfrvu39dO+GNJvytzPyhP1DVPPtx5fu76piniEIbBFYiOJ4/2IVbIDWam3o7lPz5y/3ga/5ETnkX5/ijG/pb+qcf+dwWvKLnh/xKSv8hGwvPXFfxSRSocmv/ODpMzAH08P+oKc/hLwx4n9IByAsPg/2nqa80BsRZePj3DoQDeEUwaAbb0P7284+FvRAWfy8gJtKBxLF/rf1r5kDwehvegRAOAFMD38EfDgV/wP6sCK2gfXgSAP+5CDqBUA/gajzbZiCeAp/CQWb3YHiCMBd/T7lgMjY59Z48BNGNtyVzC4NBRAl4KQPv6F8WExfRfkoNoH/wzB0EYQUwPi4sCpBk/awQ+kYFgch+7fVwZIPr4sJxA0/WQZ/xEEnsp+w/CwUYNUEmDiYvgkIf4KQGWDy+zgogTQLCGxU1+IqLQcF237r8DBJArwRPxPpP9/BVYdfigKl4f9QwreXIX/3/wFCus5Q7nLT3f7+C6hBbTAREKF6ACmhCyaVn3XgFoCihWKSobAIwYdCus/Q4wCUMp6FDJQAw1od33yGECP+gaeohrQWGFDEegw1ZkLgd4QCxh3Q3QdsLKFdCNhhzb3IoM6EVCA+PAw4RcJUEucZBtQo4ZcMZSaDYMxQ2YSvwXZXCphbwnVAcO+EzDbh2HJ0HWUWFVxsiZvfQR/3R43FARWA3uI3x2HTDxhVghEdcPqHvDyBq/BfjYLREtDy+UQjwfxBuHMDjBcwvdgSJcFEj0R+ItvpSN2HHCWW7gukUiL2EkJUR/w5EbCLaEkId+lIpYeCPiG8idh6wjEQINEwmtTQIXIyvukNSR5GAUA/8NBBlEMijyEKJIYqNCgmB8U8o8/j6TNCSiVRCFNUQqKDL6j8BM6XtuN1NHMhzRXIskeFglFWjeo1sA0RaKaJOiMgmo3Xvz1JEfCgOCKcAdhWmKdVYsZEJkC2EVHBjDRBFOtJaKh6RhTApvHVDqK8gTdExc/ewb6MxHkYUxKXBMUGDn5yj1RX5dVCvGjH0ljRuoksXehDG6DHRUoowDWPLFZt6xN5UsbWIxStiBu6Y0fqDwcHeChcQEaYcaATEDN8UYY5kPGIcoHRmxe+LsZ2RLjqop6lY1MbJUXE19Mx4Q+0e5lzGZl1x/vZMcWM7KWg4+A1H0VuL9E7ijxJoVpANh1Tzibxp42cW2wfGCBbxn2f7q+P3HJDsOQ4wMQuJOCthxxbEScXuMAnei5eWYsUZSx/ACVFRWEZcEY04qNhlqW7MljuzyGUtSKb1WFGhNkbYTUqsRQnuWxPoETMyREssWw1TarkQUvY+CBhKqGkMyJslZCVn2nrMSoKCEpHmdSwG1DqJ2FLiUhLvLwT/6JEmCchOmp4T1CHE1CYGjEn/8ZJYmWiRLUMFnkBKdEhJL/RIFqTlJbDbSeRKWSUTt2Wk38NuQokdjPmik8yfJP/zsQ2weYkpDGUEqyM7JNYfMjpF2KVdnKWAygFLmYZxACCClVGvvnrRjBKAgUoMDZJ1IVg7yKtSgHEnywS0800QXoJGD/q4QopKdZKTG0oC+xYewU00P1VSl5SYR6E2KpQEKkdVip7YUqU6TJgthJQ1U/KcZKBbhSMejUxECVI5pOktuavJqaVP5o+SYpP5OKcLhqndSg4gJWKalN4SoDMpb9bKbPHinpS4mi0/qdxPTblTYU7UsKWNOalCV6prYXaa2HIbzSFSh0jqQFKXE6CIylU5oqlJOmvQzpoIO6RCHCnXTVSr09ac9LcgShxWqUugI5QrijJ2Wu0wGbGR/zZi1MIM/6YiHBk2V/4joM0HKziDhIIZ8uIFg6BLiwzUZNAdGeXyRk4z4pUofGWS1g6bDcohMlGcTNaQIyCZQYImZGGkR0yyZKQvKNjOpmsJaZbg9mcjN2nLxuZkM6CWplPKMz4ZPMpkHzJml4yWZV7KGSwklmMyBZpMoIaLM5lkQgZGMuERWAZnqzmZEsv6XrM1lONyZJw9aBzP5kyyeZB7MWfrKFmOCsRNszmeLIrgwlbZxs1mZjPnDuyVZqHC2dLMFlazuRGEDlErKtmuz/ZiIZWbLIA7Byyooc9WSTJZlBC3ZRs0mXLOFksJU5/Mu2YjMNk5yPZGch2XuydkFzfZmkKPFLKjlJzv+0+OOTJjJh8s9IJScVo+yhoLNi+rcoOduOJi0RQiHcluSNh4zcyFmqiLuSbJc4NUm56dfOcPNjKjzdZIPLDmoLhzzyC6i8tuf3ILqDyl5MBL2VbNHmzz/4B89eaDPtkDjX0jc1SM3L5mPsR5BdI+RPP3n3z06G84+VfNHk7zz5mEtTH3OnmNMv578reenUAVPyV5U86+TPLPltoNAwCyGKAs9ngKP5N88ef9ygxwKyQCCouRfIxToL/5mC2+TOhfmNNH5iCuOXWmIUX1SFkeegGvNfnQKwF5CyMJQuYUMK0F7c7eYQsYU9zdBeCyBQAq4VoLkFICwRdgp/nuZYF+C7rIIsjwQKF5bCsRYxMplKR+G86R0LpIJn1oKQ7jdRRrO/lKL9oWi1Rbul0W8IK41YDhuWErA6UNJjuL2RYu0VWLRKZi/+A4uMWToreLi7hZeItgUV3G+6PRYjKMX+L1J+ioYSXL8VOKbFwMyJfJk8W2K65PC/aCop0WhLEZsSkxc4oSUhZ65MUyxXEuiWIyUlTaNJd4vlnEwD8ji+TKUvn4SgZRJSjRWQqSUvQMlEYaxYEvL46R6laimpYovCUizilPSxparOCVWLelsc5pcHFGVDKOl8/GmPksyWFKylmc4mPMqqWLLZlQQtZe4uUDxKwlFMviNsv8V7LXF0yx9OMtI72Kzlk6GparMGXnLGlfSg5S9HuU3LhltmNxccqWVNKfFuUKuNWyjmMohAFccugCtRlAqNpy83JaCobaAqa4wKqwW7RmltEEVyy4uUXyRVRyUVE0iucRBKoAzg6+ys2b3ExVxBsg7REFfWwfSUBVcFK7ub8r4gTEwV8U7FSCtJU0rCV9K8pX8vYjMrmF8KnFX8vZUpJPaRKxkYIGFXkrUV8/f5bCrJUQqxVR5E0FSoBkKr/4sq6lWqwFWKqEKJK/FVitFVWDeVcq+KWqrRU4KE4xqzVdLjpWCik2M0s1T8u5U8j7VcK21fPyjD6rUZrKrlSstuTCqzQhq8vp6r5VSrIVe87WSGpNWHwg18/OgK6vlXarfV6K0wSqrhmOqghQYBNTSsdVPLiVBKbNVqvdWZrJVnK81eIofyhgwaBdBrIWN8w2oyEgzWtdktoIMrVUUoRtTWqT5toBk1ameQWJbWmyWWwfI0oMxBl1rYsvahFOvIHU6qYxUfUdTOqTH/cO1faoOs2rnUVjBAR06df2uXXcDF1r82dcmotUAYRAna9OhusuGHqSFx68tQYotQ7rBmWQfdfWvPVrrFAUGbtfev6XuZV1u69dd+tEFVqANn6q9T+ueUAYp1Y6u9SupA1NqgNea4dbCng1drX1sWX2BesabganVfqznHQA/WsIgNkec0DeqoWwakNqo4XE+ofmwaSNNGo9cuso1GjqNZG5hXRvrWYbCNX6pjRMrbVn4CNoGrssRvrW71uNOG5jfOrE1CaeNE63QdBqXUZi+NzqhOPGolZioTKVgg/OpoSKlVLl2s46v5JuViVKEUjeTHY000Qb81VqIzfOF0qmaRGJiiUPZpPUVr24ZmpzXrEs1xrtNYykza5ofVHIPNk6CzayIwhMMJWB7FzVZvFV+RbNGmsLUFsc0havNem5zGzIi1WLnN3mzNWpr83RbcNKa4mIZsi26bKEeWnpf5pi1KrTEyWuzTltsyWhQpJSqrYVtPU3jmt1S1rUEPPXxaytAW39cTF606butjW4LfVrS1JYvZtKOrTCQK09bxtUW7zZJvpImhFt2WxLSaF82VaCtK2/klts60mL+t5fJrbZqRm7blNeGjCKdtK2jbcV621LZuv5KgUrYbjG8v1l9ilQXtkoDZixI+21yclky77W9r+2Gcvtuyn7WeX+1PaZsGQV7b9onLQ604cOyHe9rB0DbINKOkHb1BoDo7DkwOhHaBSR3VaEKhRIoYTtRx47T8IwexjeR04MxDAsVAnVDqp3YZmdE3YnW1rc0JhA02OopJzrZ0Q6+dzCqnXtth1C6Ed/O1nUHCx2S64couy7UVs6BM5hdEgaXTSBp2q76d3KRnUC3Z0DcBdMu1OsLr5bgEYdQefXZ2VN2fbkdEusyZzrF0W67dBk9XZ0A4io6DdCu/TXHLJ0e77K2u/HV0Fp0DcA9bzXXVgMt1TxXdPO+HduUtBe70teu43XLvj1m7bd7u4Xanpt0k6CKsuuPYbo13O7ZK1ugHa2pU1HBhc5OsyaHsF0qBg9Vu0PcunD0+7k9+e6PXOF51y6Ws2ernYFsj1PY09gejPV3od2K7T1ee+6u3or3D629g+3vYNuV1V7MyMYOfbXrIiZ7G9wWZvUDtb2T7V9RuzvduTO497Hd/6fvcfrA4T61xo+73Tvpn1gSp9V+q6jfsT0R7K9fu5ajXqN117hdU4BPS/G338bz9BezoIfrGov6ptb+sAwlRAPFhY94B//d9iT336YDj+ovQBMQNQqd9KuuXefjQM/7cDm+pTIAfL397TAaB6A6zQgNIGoD8B2SqMnwN0GqDmBiNS3pQPMH99he9g25GoNYGgD7+4XaOE4Nu719cuoQyfq31M7d99B2Ax3qYOnteDrBnfZQYUOMGP9iYFg3Yrf3cGNDwhuA+oYYNz7T966X3cLpDD4HRD25cw0YckNJ6VDuhnvYLvsO46bDt+/g84dkPT75DYITQ4kv4M6GXDjh7/d4ZLC+HAd/BnA9uTPZ6G5wBBqI0QfoQkGrtoIcQLRK8w1QQwqpVIxrKsWaxMjGOs2ZQGyO8JcjZ7LI/EqsW89B1W0pdjkbUVVGsjWSyoxmAKMssijTR+oy0cOTxSgIdRkxXkeqOtSKMFR+dDpC6NCV+ofRiMGMfyM56O6xRlWtMYyNsSijIxqzA0daPY0KMHR9Y+MadJAY0jox5Y+bqZoHGpjFYAY6qTOMlGjjZRzY+TWGM2LmjsxiY70ZuOZK7jcx8yjh0OMfGXjTpBY02kuP3HeKPx845F3+OTTHj4JjY18ZmyrGnj8mWExMZ2OgZxjxhtItscROPpkT+xt44sd2WfH59kGno78Y8VEm8TZJisMcZBMd1rjBJysBSahOTH3jbS5Exif/4iAaaVmGk14yRnKU2lwJuE9Uy5Ms1BTTJvulUjFMVh2TY+7nZ8ylMCmZTex9QivA97PHBjvElNuqc6OQnJT/JnRUKeJNmz8C4gaUzMbYn4FUkSpi0yceiYGn0jEplOoqfca2naTqrNU+adxOqmHTtxl4xyf/xThuT4pvU86d9M8miTAZ0hi6Y1P1NwzbS3k8aZZbGFgz1Jp0/k3jOEn/TcpwLSmelMQnLTsKM00qarDomczC+t+jGaRMqnJT1p/xbKbcPl6rTOpnEzWbDOpmCzdpmCZmc7OdNMzjJ7M42eSP4F+ziZ2Rp6aVMy9NTuS0iH/SzioDVIFcANj+UVGE9FzGnNmfZhXPYU1zbExUKkm3MqUV465m7pubQxZwaAx5vc8LhKSHmidV50zpuYSkXnp4m3Jc8uZfMPmNzXs2c4eaTKmg2zfEZc2HBYkAXBzyPM86HAclgXrzB5kCxORguPmfz55jnZMlDOHLbz8F/nWhZbXmAfzz51C4BYwjfhgceY+gDhaQvazfzWFtVv3KXPA4aLSpE87X0gt/naLfLCuHBbzFMXcLrFmi+XQ4v/wuLy++tIJdPP4W5zIlui//BItsWBLzF+Ln00NKTCIwQEDGs5JlYhgk45YNS21ztH8b4CWlsuPOl4QwVBVb9VSOop8a6XeuJIi8U2e2M7rywpl3CkG2UtmsxM6l58ZM1whOWTLpFcy7yyMs+MXLZFfS+XppQBWdLdNDSxhvYgjJorXl0UUrs5zxWEIzlgK4WxqjpX50NlryZBPsvJHIrZljK2ZbXZRXcrMV7y6Ji5NoVSrrl34WlYJOhXw1P/fsfKZenxUO+20nSJMlVKqQfw+sGflWD1itWfaOzLaUIAioQoRk6Yfq29iGvdX2wtam2hNaGMDWW53PEa31eCkbXFrM1la8PTWtDSprjFbq2TF6uBXOr014ZIdf8bHWmFi9PqcNcuu5YKSloLa69aOtl6irPtZ60tdmtXXKs71yPstdx6rWfrKV1VMuCm6fXRrb12GwnzBtzXvrQ6qjU9euJw2drWzaaUjcBsQ20buq9mWuSxtXX9zHm7HttbGuL0Hrky6HiTbxt3W5lFN26+DdRtsyaYjmym19fL6c3/JB1tm/dchvtbibTrF6/DdcVSs2eyN6myRFpv8aKpXVobOAQ/FOk9raAqMJtzPGt15b5exWzdb7kBt5rg1tnobengE2tp6togSrYsmggrbCfM27vMPq63kj+ts68ra1ufSurlWblk7fGvC2OrPtkadbc9v1YQbId/SBbfM643urjthG4twZ5x32b5ncO4gJtvx2PrDt321HZXkY2VaHtyO/Vhjs+3fIftmmwHcC302xbMQ9O0JY80F2Px4DF21DeDhS3E72duu1ze+il2c7uSvm2MAbu23ybXdpO0LcJsEUq77rNO6Hc6Vt2s7Pd5OydaVttkpJ8ZACCbYgHkk5Ji9uOW7ZBpNDKQVYY25tbKGH2IJqDZu6eppULW0BW9q2MfcWu1Cz7vdyZXvb5FNFt73RiYBFSftiAj7O9yZUHf+tC0P799sO4jf8F33z78tS+4Hb+uY3T7f92UfWphsJ3EHEHF+/xuBsQOQHq93Qag8zsH2kHmDiK/A/zsr3P7/3POxAK6gYOAH/Gye7fdAfIOK5/dze8w5IfJHGHND5+53f8m/26HY9jm/XYodgPebIj2h//aEf2K57kDjh5LYZtEPBHTLWB5XZQ2Zxz8D0wSNKqCFBngUo0rCO6qjO5QEimjxEPVOLW2ZTHBjwa9KuMc+wNHBj7R2TeJv6OHptj2W+PdW3lRJuTjgCy4+rC+P3HJSOx+Wcg3LVM8ZjuIKkksesOvNUT3KTpVCdDmW7+5+J6NJic6OrH6Th6XrCMdhP81CKIJ+Y7ydZOK5xgRx7k/pZdmRZQENxyU+qeuK6nCTm840+FOT8Kn9T6J0k5cejJin3Ttp0mZq19OuniTwZ0EJGctPHQoYZJ6/tyWTPRp0z2J5TJBaLPz8+TlJyLe/CVPEQSzsp7lG2ejPWnGzuZ3TY0K4Qpn6z/Z0BcidrOZnnjtmcB3MEBT90rIf+E85xEBSLQlIGp6YOnjPO2p+RcrR4U1XfggX7pm9hRkrAAvtp4L/EdC8+fhTvnbz9p1iM4Iwv6pPzqwTTAxfIvJtNB3e1HwWUQoIOnIg6ZlqRukv8X9Erac8i7tqARriW8KRS+6u4Qkw0Dml0MejwaB0SJLxl6qXNB/VyYfLnSNS80lcvkawrw+Py+CmCuulDPNl2pTnYVnPm/mRVgzwZeiuJaT+IDI2BFdkvBpcc1bHXpKQauqX2rk13q+2PsvnpQ2HaWa5ldCM1ASDh11q+VeQb4CZ9112S9kbOuIOCr0phy/FfazuoYSb15tswjShw3P0yNyXGjeIz58VrxVxKBjceRcWVrzVz69Q5/NEWlLx12VK9lVhvmebt1+XyLfUtN0gb56Ui+JdUBc5X9ul/zbreFzB2et2FCy8qz1vyXLN6NoIwLdDTuXrYRO126dJyv7ODtrt4a9fvUahXw7j2aO8lcM9e39DVt8Oe6yltHezb8uSnR1emuJ3Lb7yUa+2NkQ93sdkd1a0tdLuBVOTBiSq+npaKjpc77dxZa9f7v05q7lu565ddvvk5MrV991eXc3u2Zob0iE+9/cVyRsUbn96XtvfhPY3VrthM+4wiQe43CfQD6m9RYIfz3Fc8t7m7PcHuAq2s3D5u8Q/gfcoxHq9+C37eEuwX6y1epwTCvdvHN9Hsq+68KPtuRHpgVjw25Zf4Fq3Y07IOiRY8NWhKY78mMJ8Y9TuFbM7+Vx/y48ieF3s7j/mXZrhV01XrSCAfJ8Y+yNd3jYCT7Ldg8mnj3urzTwx6uvGuT3en2FLa/bQNSB7p9bj6HT9dVhTPjnqTw5ec9CeHPCnv99+/8EqfDP4qkD1Z60+9PE3rnkT+564fweIv2n2zCh6s8Be2ZabwfLF5ccUe5PZn1Nzm4YHee4vOHnLxAKS9J785KtAQMKg4bg7SvmWCTR+/H0ynxWZXsOiJsL3C8TP7KWr4e531tfT3QKHDYLsVkoygUwvMV6USkODexgw35YYHrrMFZYM036j9gY95zei3Ao6na08B5F5RFdXjq4UWW8woQoMio3SvHPwbZDvqCqLy3cUAne/7B3hBYLpu9NZVLx2xb/wce/WWXvgu2b9Fda2Xf6v33yq3duV37fcr7l56Xt9e6g+d14OibzpbB9seWWjISObul8tGkYfl7yq48p2996ABln6K+8sL3VfMfsyv77t4a8jYCTrEqr6DOas0wfy4PxMIZMyzUlL9jPjHs5cUNjeSvNP5y3T/Arp6KJvPu8gz7YoRjUwfi6n415hQVftFDPon7umJr6PJfFPzlsfjl88//Wav23T18XDbSlmXX/gzr9V9AMBvyP81kzgNfY+73SPqubGwt+JaIfm383/m9J84+Afdv/N195B+xtw6DP93+a19+273vnLQPy1Lf3B//Wof9bxH6syznTQDPmP9Mbj+xXgfkP2P9Inys8SW9/vtKhn/B05/gwLpP397+mMGmYfZvvKGX4R9HkbfOM0v0X+18Y/Y/Qrhn0b9GOSvlfU4LzB3+r+k7yfXf9vy39t3y+2lxX7Q4L/9b6jmQ4O0X5Fsm6eVe/ue/vwyZumxGJ/Jisf2wfX/NhIupNYfxr4V+7+W1gXmv8v67QrTO/CzF4ur6l9O0RRgetv0HXv+vfSDuP9r0//2mm/bfn66zn5zD8t7YfURhFB8/b3x/9gAxf3pJHfcd3RZwAmb1ADrXJV3/8lvNP0/Uq3IPydBbvJ2jQCkAt7wwCmsVAJtd0A07yzhuZEjkI8W9GP3KYlSEAJQDK4agIgDntDb2gCqAsIhoDNvMkBp9i/WgMXk2JWvxRkOAxr1b9kfAQIp90fPH27opcVvyb9ymSQP39b/TelkCcA1/3l8ZAg5HW8VA7dWYpRvb6BP8+/Wf1FpzyW20DAmfB5DtYGA8XQ0CWwLQJn91/CiFgkRIEX239UcPHEv9z/FwPMC22OgDtwCTCzjP5tRTWx8DlwGOWMwkjFuz8xvArtCCDnuOgE8wnaDQAQgjYUINPUIUGqWfxP1eILYlwgqJyXAogxIJc4vA7IORQyPDFDUBMNHxmqhFMBVCSC4HAoMCCkPADFaRaUPjAqDEsEyGqDAtZXCAwIgjfGgg/6fFFDBCCQIJ+1tA2iHaC73ToMGDIg4YP6CSkQ/HSCVAS3xCDRuNQCgwHGa1kS0Jg7oJPQ70Nb2/QxgyDU2DCg0YNIgNg8qDBh3GWJBQY2g0bi6CjgnYNODRkG0XKCJkJJmuDAuW4J8Deg78H6CPgqYJOC8g94MmCN8e4JmD60NIJw4FgkYKMBlg8QGUp5g45B+CgQ7YOmDBMfYLNlDgoYP+C20dVE5tIguohyY0Q5DQGCtgnIJRDLcRgHLo8Qq4PghCQmrV1gD8VKTaQ8DJcytgGQxEBEBGUTPzeCqLVkOfwKpa3C4py+Q5xady0NiC5CaQzc30hRpUUNstdHXkPJh+QzkIBCeQ4MD5CJwJUJksS4d2nZDoXWZyERaQom3pC1QjkImR6LDqmlDdQ2WwNCl/ZcEJxGwCqWoxbRdb1tCxaRkJoZ+fJxmtDIA9TDtC3QsmA9DnQsmBhcrYCkDiEyWL0MYCC8EKCWlBAdMHQVwdF0NA8dQ/0IJCpDRMPtCJwFMITDJxE5EZDoILF09C0wx/CTC4gFcA8gp6e83YhNVTWCmAoQiMPF10wxkMdDV/CvUbDkw8sOVCW9NsNLD3QisLsw+8asLjCwwvYLTDhCXMPZChwvsO7D+QrMNRCiw30PbCAwpwxzCYwmsILDww+cNdDFwqcOngqwvMNrDOwwBw0J6AXYhhR2INLBYd5NPWHVYzw4MH35BMMvAODtTG8KeBgwDyDYh8UUthfDxgN8PvCnGR8PRCo+NNx5xwxHz0nV/QndAEBJQc/llsy8JPB44XIYPmAjXwuFA4hxkIMB0hluHSGDQ88FNjwM+AV8OaIwMWnDpxfrG71PDCIhFAcCe1PnxAiiI6iP/CyOP7ErwOobHlojKIsDHQjsIrCMwjcI1sFHACIn8NQi+AEiIAjkNfiJDBiWKCOEjPwjyQoifw5Ykk8aCMSKo0JI+SKgjFIoG22ltkECM0jQEbDiDDj0DSNpR8veTWC5IIvKHoioQlSJY1DIiyNMBO4TIKAijIkKiEAvFMlhsipNCCJAj2idyNXxzIkCIap3I79E8it1MULOsIwVJBPFxxR/H3tIokJ2bZGI7DmKQIoytlpktIlKLijYUckkSiPIlzgeBeecsHgRxUT8WXhCo+dGKi7UEKKYjMcFiMQimZVsBEAKosJARQuI3iO+gMInCPGg60CQApBkEXdBEh2IVpFEj8o3qLw94ooaIyixosdhvNTQKqOUiao7jjqjq8brF2ImiCqPdFWo2jm7R2o2iE6jm8dfV55I/NnBEiHw/KLKiRAEPxOjxxeUUujjojWH0iV5AqLuiffa6KIUEUF6PNY69eaOMxQolsVuiCTIMJKiaFaaNV8DUR6KYVCCBCGXZvoy8NwVC0LKMqig3NZEhiEY5NiRieMXYmhiwYkqOqjfxF0QlYgYu1FkUCYoqJajkYy5Hxj9RCVgxiYFVsCrACTWmKSjwFGRAQcBo8mJ4xWYwGNhiIYo8KaI3obmPBiYFaUBrpY2HmLOjOOfQjTQU8T/iUJ+ogPyaJWkcZCFh3EZvBOQS4MZDFiDUEaN/EzQO3EJicorSJbl9YoqPiC8RPKMljnCH1DhwNY9GEiiWo4QGVjr4VWNwjjY8pAGizY0QB1jwFEWN18mYtBS5iyY0iB+iFUP6L3wzTXYkZjPYnjBKRI4kP0VjYIxaOliq8GTAx5okH3wTinYtxHQRr4bqJw5pER2IziTxb2NyU0KH8ANiE4x9jTiaY6OIli+UeCOWjN0WOKmQPY0NGqRtolWJziRYRjgLQrA+WJvM24kuMmUhsLqCyAzwmqAmpZmUeIgJsIyeOZij3PWNGQZ4kMDnjQ6MEKXizwleMao64heI4gnQCEA0j2wP7jpYQoGqDPDdYbePnjh41hFwg5vR2Evi14mHjviL47W3eQ1PJ+LPC8pY+PUJkZM+MIiBkXmIMsUkRkzPDyQb+L7pf4u+KAwKQUvTgiuOZOI6hT+RkxY56qGBLaicIjqO4jrCBMWjweYKCJORGxIeKASQJLIBniCEuGNVd4rO+PITAE6SAbiXCBMUegUExpEbF0EniK6jkYEeNMAsgV8OgSTkIhIctVEUhLPC+EsDi4ThE18LATYEtT3YQx4yRJNYxEm+L/ifwqRNoS13KMFvjQEhRNdZT46hKtQ1Ez9yUS5vHF3TAKE+9w/ingTOBMAxHC2K1NIEmFCsTTEnRM0TLE9VBsS8YleSZBMgSbxlMvE57i8T6AHxL/poOUOJc4jSGPAuN19ZcTSpfYG3FGRbzHJjgSpYwwlYiYk2vHGB4k5eH5h2EnJNwiVYByNTB6AFQAYABE363yTp4aXyKSzQSXBoEecGLmKSDElNHgSUk+qKZBmcQpLRhicbaP2if+LBLzixjApIyTi+MmFKSwgkmEtQgk4ZOiSBkipNTBTQLJMaS4HGZKCT5kpcPrU3wiJM8kFkneKPCNkuJNWTpkysE2Sqk1+IsRPEo5LiSEk/xOPMbcasEkVFkjoLSTbkwnE9xI8PZJAituMgLfigRa4kPN7YgCxbDI2JkD+TK2AFIeTxgvQU7kiozggPF/uNohPsBomFMSSk4lpJWj4Us0AqikUthN6TeIvOOZAwRZqNLMVkK+KwdhcIQGF4yYolLoEwRIOI3EFoy2PI5rY/FOF5momNGyScUjBL2i+k5GEjYTgjFI9jceYlNsSmFdFI8sRIQVITZfYBFPiiJUnZNJSnQKFI2jZU34SlTFrAPxs1wUp8IVTpU7KI1SFBGlMj89UklNIdo8FsB8ZrOGvhI1IWeC0iikUzVMAiQUM1OhS+bBNnEAnUw1LpTfolzjV43eD1NhT/I6NmLZfYF1LlTSHH1NzYxpENMnZrKFS0jTPU0JIMiEgXSExSo0ldSTSPLC1NhSPEphRmpk0n3yNSV1eBBD8C07NLoJ6E62JIshAHmHijyQZBA7jnYruI8QeUlNj9RvEdVKwZRk5IKj5GgoNJORJkQFO7Sq0smKrDxQzpDLTmkhCJWiV4VtJTSsGLOLQRT47uKihg+HtOaiR0ztLgdp0mmLtSe1dNOdT4075JXk3oTlGHTRKT8LRg1Um81rTwU8tPTQizY+GrSr0/tPnTFEPiIvTicD2NrSN0x5I/ojk02OvSe1L9UlJ7YkdJvSJ0xuJtQ69YNHZiR0l9IUQ+IoDMfTFxUSm/S73VeiXZjFKCN+S1knoQwz0SKCOBSAw0tKATrYDiE/jO5bekhRRkc+KhhkUoFno9TQajJQjaMq+kO8mMoSJYzQ0td3nI/KcjJblWM2OJnjyUlQHtTkzYXDYyZ40oOqTQCHjPYz8Eu3GkzjU8yFvSAcBBgkzXwwggxTukrBMwTcUzhPEzAIaDPwT41WgFQyPXAzMGizwvtJEy8GGxTISTMsDOSTJ09DI1k8EvKGsz5EXTM5SdojhKih0MjyiMz3MhTJKSuMwxOMAAsqzOCzt6C50wzoGbGVEyjyfzMszJE3o1tsGM3jJSz4s0LNPV0suTLizFM4Bioz7MsEISy46U+kYyICecg7CZMiTIcThUarKUzDE2TMqz6snDKF4ishxPisiM+lKGlq4YNILoSwdcKdIaoefALpPIdcOIy23EbNFAL6cbJRchKVrhmz20P11KzQTa4h7QH5TWBs4v7TWhEhNswbNWyO6KsDZcTEP1CGyoTY7NCIBslbOyyOrSgEuy5ExpkGz5s4bNbBQUa7Imyeswl1CMnQD7JeyLs/SBtgzs+bMmzXbCHRBkxskKH+y17PvAmJIcz7K9ShjXoNUoC6AMQX8v7erMWtZsqHOsitpTHKBy5splxilikv7Nxykc3qKDBSc1UmQSTmJ7JuzGsq+wrBkwadnTp9HGxJ6kHIz4gvo2cimIYQhpCnwlBhSYHKJyBcjVG5z6c4VOnckZTJipzgpdKVpzxchHITT+c+BEpz06QnOpyuJeHJByvsqXO0Uuc5bPOy17NaOvJ1cnHMOzvjE3INzhc6nNoUWcunKVzD0wlxi4WwYlkVzocokBdz7c7HMdyzk77PAIbYXYktBGyYKWmzA88QCnIGcu7L3RRs8cEuBI8hbOspA8qtJDyo8wLXuzBc4UkeCzTVUl2ys8xgBzzbs9PNgwTsnznViU/CMgezdOFPNHSUY6dyrz5OGvNzy3soTSDyE80HJbt7swHMbzg8ivIVIfs8PPLyLc+E3By1c6LgjzU8hbK0UFcuKCHyi88vGYjOYQEmytlwOPJizPM2JBGxScNhHiRI0GKQexBI1TnLzUMlTKrwppA/LXzy8ipDltqkKHBvz6ke7IpzoM1TnFwhUjvKaSnM5aKmk4kQ/P4hPIetHGRIWWZB0CZkB/LTMeUNfI8pTM+fJJMYpH/Pk4/UetFzyn8nvPbzdc6T2Ryx88UCby5clfLdyLjXvOHz7acw2Xh8C/lioJqcznMMpyCpApgL2PUXKzyJ8vvNBAGC1Asnz386POlysCggoTyepLXLjycCtPLvcISAWWoKmCzXP/oy8tAsRz+c/XOoLBCoSityxCufKELYCpQqkLJ8nqTtyyChQo4Li8r3J0LCCuXO0KNC2vMpjesgPPIk03F0FDzfIEcWlBFuIgqZow88iXgQbCnbKTyrCsF2kSkczPPIlstMDnuyGyB9F7gAipwqCoS8q7OL03CwIsiLHs3uGsKfC3rPCz4i4ZG8Lm8oNC8LHCugraMNDX7OL1Ei3PO7zoi0gqSLvs1kLHze4GItzzp84liqLSi8IsxNMCsyUKK5cryEWsEi9IvnzT8jqCmlik7xE6LFuODJdilEYnL1ji9UV1ogzM9j2aLXChoraL0wSopqZ5ioQp6KXIKaUWLoM3uEmKYobTN2ifMsAuFRNikosW5pi3IqOKUciYqzcYcpojzTtixYOVznc5nLqLhkBrWNyqCqwuW10Ctt1YKTi9wsUK/9DVEGL/ivQuELK5GXIKKuijHP4KrdVotUL6C1XLMlqiuXJhL6i7IvhLziuQqyL/inqSxK/isor1z+mJEpWLFCkwshL0SyXOk8DC7EtiLqS/EsaLUsICCt5FRc0CCktmRDjF8oKVksilui8DM5hO3UYJPhNsLfMig9i7zJ6S84p9hDhsKbksMAzi9GyjB2A4Uus5csRUuYDEweFEcyrYu9KlKWwbCnjUgwbFK8zm8GuEFL9S+FDIB5SljV1KpREsFEszEyrCZLT3QMHtKGSmTkDR8CksE1LbONN3kiXStkspLSHEbKnBPSg0odKY8kMpZLG5XnNIixk6uBDCoygMsjxoKdZQyBZSt0qFxqMZkqJpVIFEnqwOS+MXj08y1Yr5LrY00rnTjxRUqEAjSrlL0zl0utwLF+om8RBlhAK0vnVyy6AOVUeULSI7K8xK3h7QtSxlJ1KCy4vRIgkwGsoOLcI3sqJpHJcQDbKt1G0vIkxy2Ei2YnSlCQAJiywMuUzSyu9JTKTAGculBHY7aMSQEkLfObxm0J0C2KNy4MBPydymWIvLWoq3WXKjympHvy78qpHPKPSgYsZ4e0W8s/z+S/djwgryqCDyJAC0AtKJwKvOL3LgK8vNbKciqjXR4hxZfVwg8iJrg9Ll9XMpXKtyuMvQqcylsqa5xiYxWbLNy0EqfCqwRUvjFbCZMCa4LFfhQdBvA0MEHLF862PWzRXegxGymosUtySoK2isLj6KvA2gKMShCu6ggStM3SoCK7CJCKmc4ARU8kk7UvvLeK+g3INQwCcolLm01itLQHQMQH8x5yrNirAgglWgdBlK5gpm5MGEiEzJ2EaivgqWNXmkId+Kqyoi5SINiCsMGKswr5yukO8qrwZuJyswjWaVyuGLG088p8qry8w3SpdKvfFsrUqSysYrbOCYjsqZTSyzcrYyj/PkqvK3ZTyIeYLSvYYXyjlO4r1KuKsyqEq5MHCq1uAqosrJwOTQxRDSbCPKrsqjMuKZ0EccN6g3sh4HqZrE+6XHAWqxgCYraohhIAsulTquZBhUUUtyTjS7BO0UhAD9Ou88nRgBKrJmfqvVKV4EQBoB6mSZFk9mqikkzgeqpaL6r2qqasgyHgVSu5S/MwQDWr2ITqs2r2kISrKyJqjquaq0YbqtsZGqkxGPTHq66tFZ8w7UPurMgNLOGRdiHdGu8hqlausqPq/6uFIlq4ap1Y7kr6sBrlqgkqASBrcVP/Ap1OJkRqYa48NaqQa25m0V1swYkkjVqqUGFIDWAaW+Lty/8rsQhCQNWaRqNDQH3KuK3KvGqBZKDHiI/9WlDmromOBA7JCicuK1FQCJrWIpCiE4BJqZCjyvJrJEVAiZqhkeBCxijquspihKaloniIha06Persapmqs5apdQhxqDc6WsTj6M0xC408azWr7ooYAjSNq9a+uM8rEEtIoI0WaySN2LRq2st8z5agCHit0Ybmtpq5SrGtVY2WVLxZrPanVjqU0WQolZCLa0WtSrra32pUB4iUOodqGasaopwba5eCVq5bL2tVqfa3yA9ExpVOp1ZwCLOtiSfwGMrDjqmYiENqU6wutzqy63qF1r6qiyzzqpRGutsYg6oSEbr06qBlLqTAG2HTAaocBMsYGqVcWdE2kP7lBK1i2HFDDPJIMklFqwWWudqx6/uqFLu6rEnZrKWceuUhB6sqLaqEINesZAM6dxNJqWYMWtUy+oW8QXq6nE5Bnr6kVAi/VTQU0X6rl6zk3nqfSM+sUSO6vNMZBn62ut5Y04/Ap3ozEwy3Wwf6wT22qEEnHAJRxUtvEZBVYc+vpqE6/TNzKfwX/N/rLS72vbqwMfe0gbrFF+rQbhSKVCcTeSw+qMJhkKwMQarUK2ACrF0ptJOqGZSkCDJSGtOuwqcsohoQafSOhp1Zv6lhp5dgG1FPgJeVJqOdFn6ipHxS0EYFCrTL6phvWjnRQT2Qa26kurtxO6hAqtggINqpPqFGipy4bnMvqC3r3auKHIMRq+OqdqxGmBJMi48taqAh76//FXqhIMQF0bN6zyR9JriRCXwaI60BqMbpoZ0WggKnC+vGrr67Rt5VbQ8xtIZXGrOCrC1Gp6sGiu6jxqUaUGkuvYagyXyCSonXWJvcaLaU5P8Rr4wyTw9GQSJt+rqG9BoAEUmz+tZZsG+xoKam6kmQWYZnUJpkbJmMcKaqXtIiL/q+odMDur6mv6nUbloiWqthzqnHSaRqymBoMbvG5pv2q8iP6gCbLGM6pfNTAa50+YFqi81/B2m3aqGamKIcWDR+mycsTrZmpikrApi6Jvmq9ql8hWbc6wzBMRDMNpqcahyo+qDBDMQuPvNaUOOpdiRiuBta4fwL8lHYdmksoIbI655ogawQC0DDR607OIoaxGq5qmBXmv5ukaGG3JGcbYcVSF8sfmqHOrh7mgZtgaqG4FHFStmxFr/LoW+AjRaJADFv+bHa9Zrga/7F5px1fwd5shbczJptxq/tWYMS0JawmvzJi+L4pFrx0z5pcbOawqpKQoYHKrGqUWl2slE1Ab8pOQ6WsZvyZOW/MiKTVwPmolavyEiHgQFmimtOrCaoZAa5dKLxo2bOWuVq3SxWmZvVruuA/HpbqWg3LVaWWx4vSbm6/Mk4oWwnFsZN1y1IwVbzm5ivFqDa22px12i6CA1anmu1pYlrW3VtZZ66m8g9ajW0urNq5WkOBbU5Ki5sIao67RtGCWwXlsCr4MxOtDbk691ojb/Wwyzdqg2iNsDrs231uopZKlFI0bbUKcFpb1WoTiEaakKtuwTY2gtvgRM206qfwRxMiECTzPU6uC4yLOZgtBFWl1uDygwgbg/sgML1pOry6LJIG5u2lWspa0Mt8VZL1y6BJrgjW/trRYkyNFvAsnctluxaO28donIjki0BHaBWxgAHaJyNdrgrqm6JjBCaLX8FHZVq5tvzI92sOvSbYkZkHzJT2thr7kzyB9sKacWj9vvaSwHttsZEWlzwna2279tMR4UF4tbab2wDrZcpKqDoA6PmrdqDBxswSNXawiRNtGQ8IGiEw6gIYFtFlUOrsinALQLFujbI6zODV4WJB9vGQmtbzJo68OlDpYkSwUIxI7nWy5qlSxARjvQ7qOugFo6eO4FvI7riSjv/ap2keqtrQG6eCCC28AciI6CI2jhw7icJNCPiFOlNvY6pO612Y6nW3qqVb2XZkBYkSIdhhiQcO5BEU6G0ejvJJB2ySpY6tOl1uQ7zO+yhMA2K7aLo7iMPjtraBOviqZk22qzp2rtO1Tos7HO7DqPjjO1HCC7gWzyEtA1O3DHYZvOkBphb3OkDtHZuOtiCuxXOlTr9d/O4wEbaGZQbIm4h2kNtlQXii52ZDdmi9rvb5uYwCAk+ay9rItjsyrsQ7SOjlrnaQ9a4kmQD2seuq7yunl0bbl2+dtOJsbUOh660xWWjJzLa9lva7O2gbmZAeXNrqEImu+ymMAaw7ruq6JuKbrq6BuoDBJzJuvqKLqXGZ9sg6Fut4uKYgO7cn1FOGkrspZlrLyBO7Vuxpsu7gO+ylq6du/Wti4X2zrrW7fXJUXCY3up7q1MdO/buG6dWdzpW7tusDpKZ/rIpBu7Ae8sMMr20Crp+6j3P7om5HunVnC6vuh7rh6wOyURVxpqC2m0w+6WMguccexdF7aj6tAg8IiaK7pGwZut8QZcP05alx6z26dvMyye5/DW0GYm1rfE0sPsrS4fwEnsIaCe4FCJo1ovFrWa1K0doQIAC48R56vY87s5MTgYFGX1hewsyx6KCLbRbRI25RiXY1cE0Gl7c62lA08he9XtB7bQg3uPElevXrxkieyoI3agE3tmiwrevHqO6gzGHsLrrev3M3aGuuLuDyPOpOkYBE2nfO3yTy2tutg8Ws3vV6Yu7hoJRikH3qV7r8j8vfK6kWttDB5yImml6I+ktoRRQWqXo+I606ZCmQIK/PpU7ve1PoeBGe0iqM95RY2lT6c+wOr1ipK13taC0mhGuT7teos2J7bGZkD96HejXv1rYyRMWmpu0NQNkY0CBASupB+pKqjbWO/npNDCqsmDyl2UvloGbNW9Am/LrOKXG66Z+6amBR2wOJguBiIJGkJQB2VlpERR6oQhX7HuIwDGRRe46oFaZ+0GkP638/esYaR+kcS5ZFAgbpfUlit/rUDy+sTMKk70aagf62qtJBd7ObH/qf6OrK+pAG3uS/uYKoB4rAH6mkCfuUYugy6WWpx+3OoLF1ytfvAHj+jzy240B3VPf7fXMQCrEx+pAb57I60gbcb0BpAfIaMEYloISIYT/Tegrqpnor6CB+MW/64BgtUfcL+9/tE6xunhuUtQaSD08Jr+uWphbXoSUH4GsYWXv/ws1PgauoxB1GumcB6lgZ37Mejbo6LK9KuA56x2mi0zg9Bygca7j2/c1x4S4anoMHmB3Qdehuuo9pXb98dME0KtahwfXKk4WOJMHxundv3NBojyCsG3BtcSsTeEJbs7a9xPwf0HtBkcSdBe8Itue69u8IdEpCzO7qP0Ih0HuO7wh2IffaruvcXd0PIY3og7ch4wZg6cutcTyG4h37oW60e3wayHbGfDr3ELB5Aee76htcUaGUeyToaHnBpod+7uSqSoRQ2MwHsbk+h8oa0Gyujbmh7VqsIaB4JhzTp86+2wIY25OUXPv0aiW0do67xhtXnsG5207iWH6mNwbGpLQO0q8GJaibp8oHB/3p6T+WseoWG3IQ4bkHz2leuW6YDVkuV6oh8AxeGCh/UQOGwiHgZSH3htXnSHf254YBHAOoEY2HriT4de7wR5Ic+6pKrxJBGHh//kR7phhEac8/qKEeh4Zh+rqn6yOzaAI74RwTokHZ6+AlR61OyWUDUsu0kZ2HA1doYi6xqIjohHZh2LpJHJOhKgZGLhnTKX64G9EfxGTbR/rwG13eUXDF6RluQ57kRnyj5HQeloYlHRRqGr+kXirj1RHf+xLIJR5R/4cZGnXKkeBGNR9gdyKh2gViRtM+x3vNojpcysNH2+7Ees6AcIo2ZAmOpGwusqeokbAKeXezHNGpgf1ptGtsqV0xI7wrI1tH2wDV17ZeepkdRSijU0f6iUg9Xra7PRu0aWsgxmXsRH5IMMemExgSMfxpzaWlDFCNXVpDd6m+ttxOQUZCFHjGsjLRSEBsxo3vkHopWYKmtyx9MYbpSxzd0r7G+sdOk8Cx1MZqYLR14xrgdIDVyNGe+rU1GCt0QMZr7XaDyjlUixkcctG5ho+os5uIpazVMRewlrF6XaryEww28CcbvDG22cZ7H7RqTFDptx3lyVB6Y4ManHmR76B7R1xo8deh2419MeaTqg8ftHrxrcaxRxxq8Y8gjWwcdfHWkScenbT+gtHaJBItMcXGocGtoLQa2xOs/HLx78c3HKx3QUuAYeXsc7HI8PTlBs+xrwc6DfYBBAhQHR5YcX7VhqNE3In2N0YkB/WjCdfMNXHCZ+DMJ6W2LGQxydOVxfOHmCAmOR/YuXGVo5PtfMkbeMdInCJ33jVYKxy3FSMgEZicKaXcbK3eMix/mNODBkQCFrHmxuvNJSZJvbKRscx40dVQlJjfibH+xphTSsJJjsbrGAMYMDqd2xrSdEn2ZEbD0mX1X0exDxWSydUntJ3ZNsmVaESexCP8EyfsmzJ9MFPj3JgSf+5JQEsGUmlrNCdgnGVMysPHTJ9VVorEJ3MZbG6EsTtigRAWePtH2etrpNBaK7xGNF3RkKeu0RK0G0on1VXKcDGpJrwbSmggjKf4nQWp0bmQJwJKbjGpJ/1tKnCHFyZO0wpuSYcmGHEUiaJOSySasCQVHyu9GPJ7KbKgWwMMQGnfJnrX6nop+SfMLoVdmm6n9JtSeGmIu090ynpp9yo96cRg+BbRUkR8ffH6B3OJ7i66PUvnGnxuieWjlVZtAjG3xl5oBaF0hgeSRtpkpF2mfwdPvOnj6oQCumcxqwNSnTqy4HRgepl6bOmKORjLNMuJqSZ+mjG46YBmEx3Ua2NaamRG55NYRKWCl16U3POskZjKSBm7EG0cwxypzuAkAukpcZv73QVGYlAZ+DGbYHlRh4y0CN+fGdVtmTGIdpmTw4VixnJEMMa3IZ+GCARwqp0Yppm8Z5meoAPRijDF5PibHi5mp6MMf5jI+WCWRnExqsfbAKUmfgFmSxhTPbGZZzGblmiQEniLTOZ80A1mJjTWydFseCmcKaijBWbRZjZ98YlmAhBNsRmrZsDuPgPIZyZtQVwRRK8gKoZ2fKaWZ08cj7GYMEKVnGsBfuRauR+8ergnZmfm/GpQZ8YvxueE6n1nZGP2Ytn23FeEbsIB9HCEHUcEbIhhseMhEdB9ppdJXGEIf2fOtc5kLM1mFpRkwH8S5lOd+rHZquex5I5+GrimM5nlHgRyZ98aRaRG7OK7nKGlccrnC4huddmeJ7SsFy7Z2Wf+4xAW8k3cLQe2dZmZYg6EyZyZ4bEJmVhtiYYmp59ufyxh5k6jHzjZ5eZ+DoIw8dIgBrJubJroW9eZ2ZdZkHB5nm0hecNKS5k+eHnosWnLFm9Z6JJHnd+Iszfn0JyvzHklZq2EzhACs8tKJgF/pPzD+U1+a3m55tKqrCW5K+e5nXy+PoLQ3y/pMMw3GnOcfnoF1JLvDsZCOamAV5kAvz7CF2ZH6SrcHqBzmAFymbTmIUnBf2sbUfBclw0FqVxnnx5qmfnVoagestnx5t5LIW2eFhf1nBB8+dccyYTmeSlDOpTsC6sOvJI0d0FhtVPjXpgCpTGb6863Fmku3juS7pFgTtEW9ohRetjLYOBZUWxFpztc6igjRf6T7MZRcgXcIXRbvTGsBmQjmNEoOfk7JF3DryTvnCBfvSdFrBdaSZF7ObkWEFkzuiRAl4zv6Sk4ERfRmtssud/H4pl3DCW/F6UgCm1FlLrMXm0pRf+ncJK2ZsWZY/RY8WElxgHEXTO4Jebw7F8hf8WqFgUYPqhFtJc3mAl0xfUXZ6l3HcWP042ciWeJtpL+lEZ/eexCVW5heVmhptKcYzPZk2YKnejWmeGWfZydK21KwfdvRnl5iGbEAtQmpfKXzWjqZjAPIaecKl6ZiuTWX7cjBcg8SpicFGX4FoOcnKrhqZfWWlZzBfLmcp0Ze55xZkFXTBeET2fuXvFhKbcis8EucoWgF3fJ0DQFw6ZOwwoFRbfmsllOO3VSi45bj7E+5Bfj7MEZoiXhml9tyuXolsbpNBmiIILwWCZsCqIXLgwvsOn3lpifbdKFhqYmB5laWZWCtlv5Wxk6F/hboztZOFexkx5+Oca18VxldpXoVFYOpW+lk7Q261Zl5euXhpnlbuXv59VUFWllwppvEzTPhfGWZVRyUlIuFgReoXYCq2Aa4N+fpiNsCpFeLw9N0O8PNtXliqQ8hmQaDO1XYQjfNOWQ5/NBjA1AQCamYA2IWaRnDVhVx7RwuISntWiSD9lMs2VjaatGz8icHiTrV/mIDZox+JiWqjV4WY9W7VzVc3cA13Va/tlVvGgVcNMGNeRXoWxWwa4EVjQCTBcJzfJ+Xs1mHAqkgw/JdZdE1/kZWXm5lNe3UfqhPmjWs12pFvzoVxPtGL5KBlyrXZzTOBBXei7dSaR018bJrgsV4ApxWSFm+AmA01ltczW7VzJi15hZ28mYKKpNnCaxtVyDwqHCXJtfnWbVpNadIhANNcdXF1rwYqlQoPOdZcumLNYD7Ty3fMbXnKwtc3Ri19tfWLTqnSEvXhjWS0hW6192ZhWh11Sj/sW18Nb1XTq55hbXp1vtbz7B16KGzguTUdZgn+ViqSg62eeIKgwZ1t8SMmpXNVaTW2Fjug/XV15DZbC91jiEdBt19Vf5XVsfuDZiF1/DcJZNYNejw2UN6hb/Hi8fWKrWnV01cuHzV2HFlo16ejcXXG22jfNBHVk1e1cuWbja/XxcY4eGMqwNQCrXi16nq42rpsWnFxON8jbR6r12S21ciN52erXhNs0337wNx0dPXA+v5ZOrYQxWqLXZLG9ZY3CCKUHE2n1oTjfL612/MTqPeB9Zk22115dWxaa8zcPWAN48vAriFsRo02aALTZLWbehy18EM1hVx7WeB+zZg2dVpdeviItyjY57fNyPkw2zJ6qEQ44tpTj6y0t15e04+s8qcw3853uZWjj4O3Fy2wtniZS3d5x9dI3I8CzlS2LN0jcEXPe7Thi5Q12Dd7Wb5+spq375xTdtWhpprdq33NuDdyw03GDbC3xV8qFhb2xpLcRkt0axnY36t6jfimtISOPSXcetraJnJBrSDdS/FzDeJWuoc9R43Bt6beW3Qtj1YOXLgWWjq3p4H6b22VKw9e/X+VzbdUZLtlsMmgJthNaU3Xl0GGOpLxjNbvDvl3TbPWe4oyczRut6eBM3fpVYJ+2JNqzaQXX1htaB3EiGZfdXZNz7ZJhSNH7bC3ANgvuA3lEe9YGD/N4lc2gCCULenXzFRHajWotsbZG9dltdZe2SYb7cy2HttKj8hVV4tfMU9cGndW3uh3JWHFOdhjfMV+4IDAO3nV1Df21LI1UNVWtbFvnF2BgxndhmHjRVl6CKJ8kmtmtkndGwmVd3dYuMnZ61f+cFloNbV2oJlDuWXAtsHN2IddiieIFbbQEiRn5IyMY5Ctdw3aRtjkKZHa380c3ZDKVJvfqFnDdjVxd3Vdwei+q/MA7q12LFTIBUnWB/7Z03DikVscRg92WhM3uqNQDj3AMA7ufXEF+HZA2YuMhC92OQxPbOCz+MGf13PN7FYmRcVkDbD36ACPZ36hZnEKQ5JJhZdtzBNZXYJZRdkfOz3JhDXdpYoTSvbynNdoad8kPGzvaPH+9r+0JQjSFvZXcKllKs97fJdsXtGVdoNfvX+4e0at3a9qZr4m9dqJrH2N90GxrCp90tbPnZ9+nZX24xtLhOWmN/CfdBx9rCcrhKQKJbb37aG/Zon791UhCbh9nMcb2B9/Jon2i97faEp396W393TZn/Y/3gD4KWX3N98A8g2RNlcEt5WwJOCyMU5oPe3UmQLap/WnS0lppR9e/Jbd2SZ5A4HnUDpOCFnMDjfk3Wsga3bEw+osg4ZcRdhbbG6wx070IOALJOCDXSDqvloPBK+XdBNi8LqEt5JkRA5RniaQsdOrmidA4mWv8iEOWqOD3ShOWg+35cB2QNxyXE5fUMQ5N33ek/vimijC9fKmWDwBZh2oVuHds2h1k5FVCCViLpLp89nSmlwOD0IgIWB1oDedH913Q/jVrF7/esPI+O4beqJjJMD4mGpQQ5gPTDmLngO0D62fEAcNkI4CPuD25nQIUpWw4oOkpTOs8Owibw4a3Np2HAawHGqvjEP9D9beJHLCaIHiPZqoaaFo6lZ2cmqojhObKPLeHtjoPp9qFs96haPOvMPaj01c7igW7BMyPhUbI6xiuDx/cmZYjvw9aOkpZo8t4Uj1Jtimj99I6FpuIUNb0Og5nuerbRGzo+aOijh/cVWjPEmg7hJ93fobIonLvYP3TdypcaOJVd2fSWt9+w7NWr91Aj2PCDiToT2Sj045LpLdr/a8Y+5GuHLGHd5zYlUtWO4/92rB94/OPGg0ZG67bjv3ZD2+a7ftmSlraA+TWTjsQ9Vxq98Qej2QFxQ4FaI28qZ46HjiQ76qMT53bT2DDl9drXDG3YkL2lrYE8Fnvj5omKxMT/IkuOgCxw/GqFUiJBSDWB7rvPwcrOqdeOBu0k/r2R91vY2O/+3k773u9/HuZOdjzHsJqqBGE+hjfqmRGsTwTgU/qOqW+U+lP49mRlcGOQxU8OONDhyxPF2M9U937Dh5SgOPPVxScZgPjqvgQPxDieYkBAkyI5tO0j71dSSq1TPGyOaAXA7yPm8LqECSrT0I+3nDnGo49PbbToMDOODlCu52vV6cbSqfTq7e6t5jtrtDO3T+M84On5mLnbH5jxhbpQrXTM6y2W8I4pkOlRKPdROYcF3GsVWwKvgEOnNnE70XyzuY6rOFj6zaMPilwfBZO3xCM5M2yzo9rmPxjrHe828k6sALOUz2Q7aXHgodzWPJcVs4dOzT0hzdrPD60+mTBzk06IPHT+g6qWtsowB6PMx/LeKW/qCkC3Oa4Ts/ZkxjS8YuBtz26dfT+kjc7mPWjo88awTWcM5LpEz9mSnBNzlM47O8z4FKHOaUTg+fP7z/c/fPLD3reFmdIEsNNOeMI3mltjdn+fjQoIVfeL2vT12MguF97E+iOs2WC9XWLjnjFGtMLik5gvkLmE4JPELvOIwu/FrIG93gLpkuyxtT6JJ5cftGi5gvnKstvJPI948uAWFD0s7hwyYBCHxPULp0+jPUkk5G4u/joi4T6iTlBebT+Y37lz2QTvM5J44+P/fpOvNhw9dimLu4+nga9yi89VOThvf/3ZFMHE+dwLyi4MvNJ6C5gU1LiU/6WwJ5eGdnWkdKh5lRgmy8DH7LmC/5jPW8k7EBXd4i57jHL5i6LH7LnibdSSSbMc8vaLty80nGAUoIOXVxmy5UmpUy4/aP7pgiaCv3LlIPiviVmK/rm1WeK6rjpa5y6+OazvpG+h2i3XeN3BG5Y7AnljzBEyu7j13Nkumd8tAZdpzh5YW55z0I4OWuTaCndOKDiGb+Y3NmlAXPiVzq9w3ur7w561xcEa8Au6jw/eOP0jtKdavKztQ/mXM4A9Z/OPzhq76vPDhs4eX6AVddzOGrjnfKOFzvqeG7mr1HeIbUrlc5OXErg6YemEGy668P1j5U7vcTQQ6/4O1DkFRJosr/a7hO5riYAW5mD3s7wPUVgG8WviDqy6hZvr8Y76nM4Qy7fE7Djq7NBiIZg8vaN85xcCXlOw6d0o/LiYFSN1DvMamPnTradviHrhs6SWXOlJYemkbni/jPUb8HePqjpSs+C5TV5zrqX6kE0BJvTzhs/pvhCKtWyO8bgpdcWQuqRdhWhLmQdpvmb+m/Lp16fm7qdBb4Lv2RCl2FepvmD55GRxzrlW6tOowPOeMWNFtm+qmoIHur9Pwbwq4BwOb3cKumRp8HDk7QuopeqnebtNuwO8bqW85vjb3I4pv6l9m4Zvxbga+1unrma5FtTQKXAzOcDoe0Z4DWMY4jOQD/UYQ9JQLpSQOUxxOzjus0tc+P2mS2Mcqxz8SarYPwxh22Tv8byY87yqDpjsTss7h+IBN/RqVxdDh61O/SPkx10djsg786rwOYx9sAdtH8fhPcPwxxOybuwjzMYNHG75ypnOwctsaTv+IsI4bGx7+O4wOGxvO/HudzvfOrHqy2O0ajmiEg4Gse7oe5LHLpYGy3uZ76YXKmSIJZpbvP+A+/buh7kg5OpE7Ve8oOGqDiBI8b7h2ZfGN+au7dmi3MsfPvp7gjYLQlIEj17vEj3+6nuU756/MzIJoB9WkD2Hcdjt87syfgnhJ+IHHuZgwNPAef5jidv3vA7O7wOGJwNLnuulbeeonS7oPJDP+IAh/bvjm1B8YnP75u+8v6ytB4RXX7tM99TB7r+9tOgIeB+XA97/lbEmS6Z2bvQWHnheywX7mB8/PasS8b4fqH+DLvGCJjSYdsb7tpfEneH/++xCTCPSY4eWH/i9i6yz6NkIOj7zB5ofpHlR50fe70c+0fr7oZsnPg0l+8fvPztybIeqCYs44vilkMqhn1MC+8/PnHq6bUeJHmzYz3jD+stBleEMh4jy7zjwhcfdH5oj7OVLq8+8m7H+tDaXQn9sfCfiHgJ94fhHrh/MnZzFB9cnvJrJ42u1S3J5lUop3B+AeA7ho7+vEp+9Ydsy7y48v22JxqbbPxHgu4Uny9LbVnjCHyapBVCpoJ5rvnr0evqfD73u/mXap4G2Oahrop+Yf/UxrVamqH4e9SdOpj6YKeJp0aYKeNH1FNevRp4p+uuG0jo9hX+p2R6GahruacSelHk7Tirjnzh9+uibt5byJPHm+4hmznmZ6Guznsx46f1VfiOgCUWcx4huh8eacaeQVVYI+eEH9R9rurnjm6MBumyrHzuF70W/Be/FpJ6Gufn85/4fGtX8F+eTny54EvibyXlufj7/R4SnUXzx+MeIbgl5efy7xrSXhAXpJ+juEGjsiGwpwI3K1mRZrzxsvfcgm9murnnGdhDEBOPk4q8X9mdPJEBel7EASDxmaIEeXlYyUk5VIbAI10cjF9i7+XsmZiF0sDjpPu+ZxARleROwU7hmmXogWVeic+GdpeGo1l8LvGck5FW8iBIV/1fDZ+zxZedc3p60PP+VWcFfaHaF5MPrX9V9a4y+rV+pnzZqz3X0GX82lUQ0WIbD1etd2OJZSYhcaRYnxS4me0O6ldGBDfwIGGf6OIi8N+DfmFT16yMC8p0WlfM3x4/dmnZ3V6TeRjmOe5et69qYctE5v1/FekpfubFfy3h2fWWq5obBZJZXhOabfyHW15G6mFD+cpEu3mYKnmLX2h1Qed56DJbfy3588nnL5mIUtft5w+frfI4g+YhLI39LEfbNDsbovnV8pV6TfJ30d/VfV3p+cHfEBUN61xw3vt5Pf0njhfE9IwS18nOdmP19vfPz6CA4fnXmhovPk21JefflF3N8ji2lphaLeA39SeFR0FAD7tfSn9OaqXgPtxp/feX1eeJmyz28ghhE3ykFHPEPogSjfJzy2D9eMP4C68SYKId8A/DJoMwHq6X4d/cfSKV95Ve8XxpdMOP08d9/fcPn8AZkF3yqvUmmPvNJbfjAMD6OOZ99I5o/7FmIUUaqPuD8kHGlij8jfPX+J9Ip0PvN5HxfFmT8XfcP+T49fFPuT+BQSPo1+4/dTspOU/t3wj/4+OPzT+7eznEMKeWCPj3MZUFloXco/jP9d+hbzlmZfo/YPvCbqfDlxZZnfaHIa6C57cpz+vMdl3L3IsEGjq6s+28ZD+E+XP4mYc/BI6V4PeIbkL9A+I3Uz5DAEvsbfpXH7G97I+TtEmRtfH3029BWZEMHBs/XXu67svvEGD69eQH/NTS+NbC95lVYJdL/9etPtl94/QXzQNwWJPyOIhn6vuj6M+hr7r4U/WP4aanB+HDN9U+0LyF2WmGvnD5O1osKb9k+5XtZ5/KPlzj7fe8XsF4MXyvoa9lWXhUxos/rtbb7FfgPtd7LXPeiVY2+5KI7+K/lEfsuW+Lv8kiGuOVjW2Wq23xrUe+Bvit8JvMX/F8nEyvoz/Kvu58CcOnHvlT5EA7V9yH3tlcQXKkcXVyNaXcof+HqjP5X4NcNW0PXlTsIT7y1YkbIf8LPoaU3zE1dXDxso6CM17An6XcGMSM7s/j9zH+tX2GCDiDWCftD3J+IWvH7Wh+Qv1aXdvnaH43Xwfjflp/ofln6TGRSQbKlcD2ZRw3Xxs3PiZycfrXbBwM1tD3h+rv90Fl/+rqPC0tKTmA5XWRfzn7MT81+JK1+oIBH8p+677dT1/GftX/p/S2BHAA9tf8db1+yftX8+lBXSX+mcVcEA/Q2tfwv1iL3fjn4N+3fpMFXW+fnX9A3Jr5XG1+3f/dbZ5A/z6VMtnf+H7A73RGqTh/pfoNnk3efuP++OpN1H+go9GiL8kHCN0TcvHRfqsE43+N9saJ/FEqTbJ+xadTdT+0PbX8k3S/xn7Fpmf719aZWNhTcwhfflP6KTnZqP8ePYt+X+T/hmfzEj/0/vL+tqZKmmEH+6f996keWNkf/KmXf32E43/kSdb7/hmXDkj+w/jP83+zflXEk3d/634N/ONzf/t/XfoNj1jI/vAwkN7Xjd/iA6UAle6hTSxX8qxWz0Naf+owI8/K33/wlCjAX/+/+GqqP0CcLf1v+QiyLmiYib+zyGfOV3U02AHiZ+X/1E2fmzgBzf2gBB0C62UeGb+hO1x0pwAA8Y/1qUM2xF+eANWeky03I56iz++/2Bus+Qu2uAJx+u216iG9GVwaP2tk9AKtcgEBDI4/wPg52xbiofwN+12xYBkAM/+Vly4B+vzF+HymwBZf23+TO2p2m7iL+ZiV+kVbEJ+RAJBeX33kB62Wn+VYEV+qgMVeyuGv+6v3G+8HFx8wHB9+ogPKclwBp26/wW+JAKMmwHD3+6PzW+lfiiEdf2P+Vl2sB5gN0B5ikkios1V+5/ykBgu15+vlHZ2LOyXcAQNR2vOxp+b81Wa9gOgiMQVR+YSBAB4HxeuaVH1iMgIiB7O2SBZPwoOp83ZeKgMsi5FkL+0eDsBkjyTamCDCBjP0yBhOz8BGQMiuAuzyBwQL9IoQMzw2gKl+M/yWOAPyquQOz8BsQOeQPu0D2vDzwMBVDlyqyRfu/QNs+J32N+Hu12IVT1uKkQJE+s9Rt2/ryqeIYDnK3+wmBJHnZoOkGpytuz/uVq2O+n3yR+Tu1js08EuABuy2B7dx2BPuyGBidiOBAwIxyvQKuB9L1GBZu1gUfE0vMGVGMKzeymBXTRAOHe1Ns6wKD+ve1Lu0wJAO1YA4ekfBIgvbCusvkh5QLwJGBoeyC4duAds+/TQiNtykWwt1cWoxUAOsj12uyb2UBSP1VCr50RBDwPJu+twxB8IPoeSIM1eoAOP2m0H6AiIJrAsnWSWntz3y+IO6OhwIeB+e0gOBKzSwKwUFuCnTRBmNwr2YGBT2BeCWQHIKH29D2PmdSBRBQSzRBISyHWo4D6yVT3mSuP1xBoY0r82zXoeNomS6utyZBpIJsuh9xGBHIKFBXIK1BMwNlBLizlBgoMhQXIMlBOIKpBxvxZBBoKWBN4w9ujILAKNIOFBpoNr2drTBBfwLf2P2mH2knT1C2nyLustDgOQAgVS8G14OX1VWwkYLDeq3VC+ws0ZMZoODmV+0YOXUAjBmGniBPH2jypBw4Ew3y5+DM2oOHAlLq0/gwOBByAEpCT/+qrwTBlYLtwzIBIOBBxLBhiC/sYYJRkQOBbB+gKZo8l3IcJyE7BAJl8OLwnXoNUEN++Y0HB+YOTBWRn3WE4JHB0dxmQvYPsCkIM/4eRg4EcYPzeoxzrBwIgAePLmbBuAwSBoD0e6u4J4GV3R3BmYL3BOYKpagxyHBa4KEYXR1XBmGkx6UJ0SesIL5qYJ0WBbwI4BY9UBOnwMwieBxuOvx3fBywO/udzWeOP4MaaIEMtOjdx2Bwm316GAUJBxwL/BTx17WUEK6moJ1+O9wI/BA3SfBGEJuBXYOiY96zBB1wKXawp0BBXwMeOPbDP4pEI2BfNXFOYEMx6XHzBB3zmma09CE+voOdBMEO/GDTzQIIkAceua0MapoDpQ8EKAhlgI6aEwG1uh9yIh6ezEuhjSlO1qyDBlIISBf41UoBIMbugaBTBZe37WGkMManEIGeHdXsGkoEUeakPqYskMIemEIF+gTRMhgEKXanENMhuEPMhughBB0bHvBQ/XrUsZ3s8zFHPBIYJa+X3yTOgC38Ew4I0BWD03Ivp38hkYOzBXkLgcrp2Ms/kILB4ZSih17wISW4LzObkMrBfkCRaVxzXmf+WTOQOHrBCkIvBEKTchR4KzOTkNShnkOa+SyV6CylA7BLkNiwc5xnB/P1b+W6jqhQAlihkuCXOXngCho4LKSKuCqhws2YoWkU9+vUI8hFP1nOe50pEw0MlwRHWlOsYIfB5H0aiZ4OrBt42KBqSymh0X2GM8VhVBlX2Q0bSTjCRUO6WH0XGhVYJ/mo6gAuhGw2hf5zBop0LhwaUPieB0I4EVcELBtUNiS00PWhs4Mou/ETAuVABfBh6EgutkMeB2QM0eWZBNYcLz+Bz5youq1y+hzoMCuOFyrufoJgUMMJ7u0ELkuBF0qwkkKChpFzOBqEMouv0KEhpwToun0NeBdkMah6FzZYWV0JheMJMuVEK6hYySkucNzkaZEMPQFlzohlFz8gZMKYhRsVZhfQPYhVl18uvDyIhMcTNSwwKBBlF3CuVMNyuTl2ZhTO3QQBkOvuEILbkJgDJh30Lwhe7EauTWBmhNUJ5UrV2chI0L2Bi32GuPX06hvVwWuoUKzBXnxWuaAk6hnT3NhJYNyhHV02upUMWhswK9u+sM3BDYIhum1z2hLU12uCUKOhEN2hguXj7BGsMZUb1xahk4L9h+sQXBYcNOe5FgDhrUIhuvIVjh/UM+uqoQDhN4OVhamGluzbyUkQcP2+YgCzhE0POulIGYu6sMdhuf1nqJKiLm/UVWwsUOJWDt3chccPiEfs3rhHagOWdcJahHanShtT0i+fUDzhhcTOhI4K2+vcPuhG0MpUDaF7BD0Ophgd2xu48JHhIqzHhnsPThLCEzhvYN9hjcMrhC8PshGY27GIXiDyMpFbB3dzk8u8P+h3kKR+6dzbu/gk2gowRzuKY0Php1hFeXo008YMCMAfowfhcnjF4KNk/B9dxIgb8K6mLoLLhzo0rub8O6geUIihxeRdGZowvhCDT3hExn7uIXigRx8NzBxfCgeq9HgRWb3bBaO1GC0dw3ucnifhQfxNWyCIwRz8PcOZUQIRXiTGMJY3eemniPhT9wvGmnnNAmCNHGa4zoRoaEnhZTyuepRxEqOCMaCf8NTBbExmOa4zk89CKMAW40geXnmX20CKqOIlUfhbjF2BAMN9mz9xwRMiMV+HCLnGq9Eh0ICPKhl4Ofu0iLYg7bTAegiJYRwmxKuy9xQRv8P++wjUB+94wURF8KERm0P3BgETge17xjIUSCQeTD1Xo1COShSNwQQaiJpgm5yChKE1vhUSHwe5ExwRviLihXiLQEBkPIRyUMoekCLMR/iIiRQCLGMjDxjYpiJcRp7zYeTiNQRuH2KSI30aw6SJHwCj0fhYSM8mRSNCRDCJHwCyzyRuCM8mUP3s8ZCI/hfkzqRVCNOsnkycmmnnBa4ZRSeHSN/hbSIsm5DnyREiPWSbkx6RBSMXhQuC8mvllGRQyNqhjckCm7iNaR7sPyegSJmRPKiCCLSLGRxALemFT0cQPiKvhlAOVWaBBWRdoPsR4qh2RLwkvhRCJO0XT0gRwCLthZUx/hUSCGelT1uRySPdh6yMeRqyNCmyyLiRmyOJhE32+cp7jSRXyOu0Rz2KRFSPGRlKy6m9SJqR6qkm+4KKuRkKMZUXJiBR7MhGsLjguAqSA2R0CK2RwM1SMT0wvh6iM0BHbQx4iiN0RUt0ReZKPTAxKMemCbxJgMiJdujQSrhaVGAREM2IEBKJQRwCIpRf0ySR1KIORDVGOmnKLeRgRxpeLwjXa8fhRmOryhEGAQlRn8MlezNUKE9UmmgqryZe0qKzufR3+R9tBpmOwiVRYR1FeUIhbQTIDDeqqMKEurEY2nIzTB8qN+++6E7qjYNGoUIjNRSBylmOwkdR7h1rS5Dn7ksqJ8O5ryhEuqKwRPqMVRHEDDCAJmgSWcPLCJkTnB5HQ9RJwSNRKMzNAhbzVRnkgdmdb19RN/FrmYczDRMaImOzT11hGjSreBqJ7Y5qNYmxMxmOHs1TRtqPXBpb0KEZ52PBRc3TegkDDmRiMrmSH12U9aGVRS0J2e+mXzR1aLbRTTxmm18TrmHqPLowaPUIg6J1RaaKMRMNjTaowhlRG+UWOIE3aB9437m5aKZAT81UQdIlnRA7x2YOwk3RniMPmvqKDRF+wtRmUKneW7xnR6qLney71GEfqK1wo7x2EhqOzR/aKN+Vz03ea0M9RRaJjeon34g+6OrR4gFXRwF1PRuXnfRoIVHmDqPVYOsLGSV7x3R6qMlwUH2ve4qIgxJ8NRSCH3QUiaJvqQUNVCf0gPRJkVHOY8h1Rh6NgxeGN9RIZUQxbCJ8hv8ywxiqJIxf5zgxBqKxifaPWmikzgx96PoxjC1hC8GNqOszy7SUGLoxEaOxC/7zAxSaNw+AmNNR4GMIxHS0ExXqNxReiziWDqM8k9h3Ru/IN3O6nxbRQaMhQIT3BBdKPfRxIJ5QqXVSWsmNNR8mJCeVvB6+oRjmiOmKCClN2keFiy0xZqJCetHwNReMjRuEiwxuTjxMxcmLmid518WjmMhQ8twtBu5y0WhQhBQIyU/OBmJnRUSQsxznXMWmmLQxGqPtBL6Oqo53zFQIi2lBCtyM6Tjwcx1aKcxGmM7gsWMixemP8eTS2lRUSTaWUbEM+4aJHRsyKFaHGL/Rj6MYxLT1jCgy2gxQmOuRty1ixwX2mWb6N1R8yyOWQWIvRcX06x+GL4x1yMGxBqNqxwX16xowjNR8y06xY2IrRDV3i+kmOYKAyzM+S2NS+VKz6Eu6Ky+qWWaxUmNVBJAKsC7X3PRE9QOR+K2wxXkCeeAliGxlWL+ULK2IxLWJEhwMzOxVGJOx9gMOx/KVGEnGL6+O2N4xN2MZUG2JYxw2KRRoKPhWgOL+xIOIZWa2IhuAOKhxpzyuxsOOBxw0ze+c2NjR3KymRCOM3h12lFWomIexPWmxxx2L2xW0Jq0k302xMGPVUB33ax3+zjW+9nwITs2lasa1h+ynjpxH3zkRk6X1WIa2U8k4GTqGP0jWTOKI6FX1ORWxlJ+nOIsmWG2R+RJCtMp8QQREHyp+vOP88JcAp89PwNWZDXlxUuIjW7P2U8CuPpxLqx5+RXi1xLOMZymvyK8zOM+klv2ve/oVECP6wTaza388zOPp+JkQPWI5lFxdqwdxaAj/0J2C9sW605xK4ANxZGKR+m6y6u/nkjiZbQx+ZuOU8oF2Xgtvyau4eIDBjv2F+RXgjx0W2k8RuJjxHuIKkc63Nx+uLd+GeL1xcSAleAeMmuVpjzxMvwj+muLzQ/vXkOfEL3yTd0LWReIp8+exrxPX2nSiuMJOvjzAK7vzLx/UAbx0G1Tx3OMZO/Z0bWpeNVxjMDtW0GwTxseIKk/v3NxJuKpxU+ONx/OM+kEf3nxluO/uCfzZitOIXxKfwL+y+O1x0mJdamfyDxouMk2tf1tx/OJL+csSK8XOPi2pfz1xUuJr+Bf01xeeIb+csU7x0EDk22+MfxK+LI2Pf1zxX+MxxwLFX+buJnxG/1E2QBM3xn4Jc2oBL5xLeLxeLm2lwPMCdxJ2BP+8BMvxouO1c3LT9YQeJ9x6mwwJCBJQ0PuIP+UBP88ieJP+oBPHxaeOH+l/TdxiePj+gBPIJToR08dBM/xu+M1RPliYJ8uOLxQbFwJv+JYJROOtKb/x3xTkSK2YBL/x+2IgywhN++FuJDxHaKSuhWw1BkhJIJwF2/+PBKEJyYDHydeN4JikJiWlOkQ4veOPWXcK/RnWzHeLaXrxShLUJXng+hDBJQcw23oJSeIaxbYDzhghOBkBAKcJqOxu2dKPdxfeKdh1U2EB0BKnAdAOO2IuIoJ+AMCJquP6gZ2wIBzBOjeeVWSQ7hNfxJyPyhcHmEBKhPMU4gJSJLgPJ2rhM6UZgNy8UhN9xMuL+urgLWheRJ+meO2Hah+KQJLgPIM1nwqJVhPKc1RMpEIZVEJ8WJyBZRMTBTROkJ3hJKBORL0JhOxyJthLJ2/mFyJNBIyJQxIGJrikyJURKp2kxI4JX+LuUDOymJLgOhgjRKzxrig52uRKvxVO3WJqBOCJqskqBQRKdC/+NuGEu0vx4RwjcpiVl2fhPyJYJUV2MYJJgpiXg2vuxwRDxMd2pwJsR0YSPRxaMkG8wPSwzxPLQFwIt2giI+JmwMBJcSOrAdWOSqfuLVBBwNXoU1j1gJwJ12P8PBJFwP9emnjhJjxLuBcnnRJ3wMC+kSIGSjxJ0okwjURLxJ/W2lRz2hKIeJS+2XA4e3eJZr1r21JNSR7MmBJEBwZJFyOBEtlj3x1o3KgvvUERhqw/RMRPd2hJJ6+/kzpJKwKFJHSKxIqu1xJEpLNeOJI+BkCMlJTezIQaJPJSpGP0K0pKxJqpLf2rJJVJelkRxg+wVheJJJJO+xrEj8ONJj2OxmLeCNIfxPhJJ905BQJNFJMB05BdCOZJO+2tBdCL5Joe132vJPLQS+3n2CpMdJ+pKtJRJLSoipIgO4oJlJ7YGBBEZLfhYZLH2MZIvh2JO/2gB11JsoR72u+1TJapLBKbYPs8uPEHwSByYONDkXqWZNHqno1pqZQioiKWL5ewsyYOZQmLJ98NpqNDkrJeqOLBZQi2yhxLEJS+RrJGYKaEht35JDNV5mtYN7JdpQC2oCOzJTYLbJt8SjBwh1zJfZKwRZhyLJbSCjByMkZJeZJsycqMHkVeyaExZLYOzhwrJwKQYxkJLAR04P3JrJSnBERwrJO/RLJDr3CO0hyaE8/X7JVw20O6zjwJI2CdAIWMCOK5JeEb5LPJKM3HBZQhO83WT4JPB3/JTQkApYR1AptQjnJbqIXJk5PzJKMxPJvZKnJT90w035PApiRw7UaFPfJXGKhJeaLKOv3xVwg+Gp63LC3JtQnApIiN5UTZKvJtb0opFZLE0k6NQpdFL5us/2WhS6L8aTFMjx64NQpTZPoprtA3BYFOwpRiNmOcFOjqlbQquq40XRhc0YpAlNZK3XWwhNpJ4GsEKicxJL1JnJP5634NpJbd0QhSlL7h9xP+J5EMBOLpNlJr4LOOPSPBJMENuOmpN9J2lI0ppiORJBlPQhVlLTJ+PXkpiZK1J5EJIhClPqYXHiQ4KlI5JnZKValqDJOflMfJzG1QIzJ1++YMEDJ/+PCp0eCMpUZJohcVJ9J/lJaJZ4wROESFXo7JNCp1x1jCOoljJ0VNYJ+EJ1EkZN36nlIDJCVOAhZVJQRcZJ5OREQuRSZMqpdVMzJ9TFohblNUphVJXqlkMTJpA136XVNhJ7lOAhfVMsiA1I/6WpycpWZOZ6NkPGp9TGNOYiPxJnkwtOVnjXJJlWCh0J1qExZJHehzlPJVZK6Jt8ztOcZ3WpS5IDOmeCbJB5J+CYZ2HJBGgoe6ZxEp2VJPR2yD8hUFJHJaZ3tOt1OKhkEKgpyFJyRmQEXJ8FMqRwRzrJS5OOhahIIpO5Iwx7UO2ph5OLqFbEJQRxVOpv5JHw7UKopf1ItJtiwhp95KvJNGJi4BFPIpuHzUJNDnQp2ISnOAFMEp31NXJhNMKRP1LepZNO/J0FMRprKBocdNNRp2S2vOHFOPWN1wLmK0R2hV0MdAYmi8xJ5zZp//27qVqDZp9mIfOl1K8J/8OkWr52MJ5uwI0XmJlpbZJHJF0JCciYLlpnFPSe+MJC881JgUOMIpJ7VNSpyGKBhcF00pnxM/RDSyoO4OH1pesGhhwMPiptFwRhSJLtw+F1PE41LBhMMKdp/t0SJgEXBhkSIapQigjxzVOMuBUEpE2ET1JsihPqodJ1pn4M3QkdIUpYMLUuDpPbAgVyZhptJ4wqdMypnpLkuidJsRfJLBhcdPKpUNMnkkdJKpnMRDppdODpv3Arph6Eph01Mrpnzn6p4dPrUyhyzhzTQNpguKJsNVzoRbEGdpx8iMAEsJsRPdIhJk/QSxKV0TBkoF1gd1O7hvMMERQ9MCuosLfhk9IFhwVzfhkVxwpBRNa+NV1XpeUn/+Y9O3pydJ5hHKFbp8+Aqp8/C7ps9PMpqOzzQKgDWhYdNtJrQIsRklNigW9MHp9lLye0eO3JQNMimWsMBpKNLUpvHAnA5sMhpRsMM2h1MHwZsOgo8NLayln2thStKup513thSFKIpByImuPX3Vpo5M0RiQKrgxFE+pKNJ6014TVhFxi+pB1wjhBNNJppzwBuZDIRpzNPy+guzWhhFNEpb2K+uulJ/JH5MRxqKxjhyNPXJMqjoZPFKrUHV0OugtJYpnaIemdDNFp4cIjubNL6mpDJJp1DP/pW0zNS7l1wZjDIXRbQM5pr1wjhsjLYZ8jISmmt17JpGizWimMVu6IKxuY8IAp5uzixWhJRW2cCNuSDJUZ+txJBWN1iSLDIpIkoEZRjN30ZjNx1BboINurtzsZljPyhfT3A6fNzApFjN5BLiwFB13zFuzKNJOR0gpRZjNCZSdD8xdt2VuzjIrJBeCLpDKXKeejL4kGTPyxVmPxej0DVp9ZMLhFt3SZ5/GSZ5oPtuTcPMZSdBduRTN/p9jN0xet2aZ5cO9uMTJpg5/ARewdygZ0uxMxWcPQZY22BQeEETKPJTLcoEREo6ZVR21xFzK+1Tpxfm0oBkmH16MpWjKxKxmZjwXgkIpVdkDBiWyXpQKyOjNPYEzP1K9pR+m6zMLWgYAtKazImZiojDKEchGZxzIDKRxM2wXkwWYGemBqZbk9YnJyx07zJoZADKY6CsIEkW2XUhBhLaZe8QUuKlGmEegKeZ/zMukGQBnmYzPn4MLNtKYNGHpxbTemhpHBZcLKoi6UI5pBWwUMQ+wEk2LLWZjUS+Zm2CoirshJZrzNe0PzIOZraInqUFDDK5iIfpXtwxZNN2+ZULI6pamE7apLL2ZYdzwgdjQeZCLOhZbD23qiYFdK/8H5ZorIW4jzM5ZWciySPLKmZBMiMAAYlGZrCLUcwzKnsVujg2xMWzcyxEIk2rLVZC+Va+ZzLp6FfA1gpzKOZWrJdQazJ2Z9hVmCuURTktrKR6svwOWSzKQBRSGc0W0XsBJrPm4svyuZerIm4nrLkBrnHuZ/uiDQQzMpZE3FPiDrNQ4nzJh6ji1yitLKRZA3HaKXrN2pySDBZNNyKQ0bI0RJrw6s+LIVhUbOKSwbKRZUbLzQ0uKNZOQNZZHnUVK6CGJRybPsoeaBCgxLJeZZbPQQFLNbZKbLZcsiKQxJAMEg9LI9ZOaDEpajLxZzzPBZ2bO7Z9NyOKAYnm4WEHUhleJPW1UwbQwXBD0QaHpuy7LTag7NBQUkJ8eS7PlZNbIx4zbLcJ0IKbKSiSViJe00hDJx8JyrPFuqXDnZu2xPZUbO7Zrsn3Z5EgNZQzNfZxenfZ6SjaS8YiFauMVlZxMAW4qgAaGa1WWxsGDIQ0Q0qa15OsZRbkZMa4jsWZtIFJsUHIqJ3laGYHKuZ6PDzEaOVPpKcl5UyiX3MYNF7pn4MOZkHLXExNHvp6bOUQcHM8IC4iI5XtLHJcHlQ5+RQXEFHPA5wHNSKto3bp3tPFUpdlEqwImMpHzLKifQym6p9KTZ/zlUgCHNuKU9I22raIIIQQxgSmTKI8EnJh6mfSbpOHhU5e4ilwxHN+ZB8D45anTP4mtnrZKnIQ5BQWJZu4T6G2nL5ZAbH45onPXplbNi6qhi245HPd0c6NAmElPUZm2As5CnIKpwFO8ciRBFQ5gzA5rsljiECKC53HLHJQTKSG38IXE0HPrZoXNPZAnIPpTOwC5/HLY5MSkHGe4nS5x7MHGPnK0p9gOFQuXNY5rnIfZmXLy50u16CCBHCGinLG2whDj4q5iLcdO31yUrPI2+Qw1uhdX6icOgEOMnLaZzXO0akXDsG3zw65q5m65lKmG5QYit41xKCZfXOwoQ4n8GByPSw4txGAk3K2+Tkg1ECKDa5a8Pq5s3I25dhOi8NUn5YNzP6I4HLZYh3P1Kx3Nbh1YCY++pTqU+hOPR3cNO5KuMDAx3NrhV3LqaGhiekRqjlsIlFLqwUQCpRVwO5T3I1KCuOJRVzWu5DLIUyAuJ45NWkB5hlC9KCuMoQZ7GQoiYAu5qO3VYJgCGQQFXm5zLNUZo7Nh553LhWtcO4umTSMou3MoQZ/GR52jnYKgHPbgFPLh5LBxO5z309KDPNq5FoGYa+pUGs15lHY7PJUojXNq5GenzITQRiqjcPQUhXSF5MHPs+piEEgV5UVioBUoB3ODQooFn06ATMY51mjQocull5Gp3u00vMlaNYVRZWTNa+CvLQiE5AVhKlXl56vJl5MyDMaVlyN5hXVN5J3IF5vrQMhE1Os05QgI5cOCAKlCAMw7vL7SMyFbhhq3diSZB5aPXK9un6Gqgf2iAKtcID58YjNeu9HJ5ACxj5dvX15o3Ul5x1HD5CFiXYCV22eshKqKCfNAsmfNrhbvOgsmfMoQRfKZanvLR5Wd01irfGd5TLNx5ofKL5EfJmQRPNgU0FmV55WnBgbfLj5aPIQItHP/MyvJ+mVYKdAoFnJASnNyUQ/JHEmvOl2E/KZaTswl5p3zVYcCFNZsfLN59gNVwuLCb5msFrhvfIckdAD95VgnLiPvL35Op0wZcHnWwuLHL5+/PiEh/Ick9vNZ5rfKtazvPK0S/Mf53fKZ2tqFN6vcBDCxQQTg1UCicX/MWKWQN7Z2yPjQheCngYc07h93Nk55/H0cxem/5HLL85Yu20UGiQMkjaPJxmDCkqMQTQOrcL/5HnR2BPCX5RGAuL0aaIY5p/LV5NUH/5h8CrSPMg/5LxXwFQAvzZAEBgB5EjSQ0/I2hhElYFl3KRuNgwoOsZEH57AuIF9WXChZAti01sADGxegpCP/PTgYgu4sx1CdArcPqyjiCj0pcFB5MgokFyfVIFebLUc/WFE2LulLgpfOYFgguHC/3LNuYDSM5WrOoFdfMqunnJ0FSgsAwQgqJ57ug4F9WUoQPbCQ4d8BcFaPJbQESCngnfRz+vCIe5bgsKqgMndmtcO8FBkj8FrgojyegvkFaPPqkdgr5YKguEZOfLv2BCXUFpcEcFIHHSFsQuv5TgpYFngpI5lcGVWprPoFVgo85ePPiFwQtYFwgq0FiQPIqowR9IsmCZWBXg+RzoiaF9nKi5uUziaXHxqeUAtBZ6UyDI7QptZbT26FBM22ZIwudEo4G9munJQ5AwsmFtNSQ5A5J7iGlWpqckSjmVl30qhDkZAFXWaF5Hmme8wtYWNPL4gtlSlEhfjGFErOeeQZEAgqc0NpfbMm+cTXWwiwrOW6VQ+mVwvFSmgpzRcz2GgZpnsajwtdk8KLiaAbAYFG9KrZRz0BFGl3rZ9wvcaQIrWZYKPBF0wpTkcIudE1wuT54dQX5e8QGqBwtqW5Qpx5mCBOFbwoJmazMRePpEawFK2OFxIqDIOwvs5THIpFWIoq5+KKEgorkOFiAshc+YSxRlIoWFIXNhejQqsC1IvzUwKHw5eogRcrsmgiZECFFfeFdZyfW/ApolgUvQq+J/Qo7UvjVmkcTw2FUotOF/mGBQ2zMDUDdTpA1PNuF6LNFF2jQE6ABUWZaoviIuopV5Igpq0RQj35BpCDCFXI25QCDJ09oojZmGkMoviLn6/wo7U7osXomoumZWamN579WF4TwuY2p7BkQyXWrqvoo+FT6IaxMJGbQT9WDFrsgDFP9Qg4eoqsZkvINWfHX4akmDaO2fNuu1HOTFQZFTFlotqFTHOPMFOhx+Lgxw85Yp9F4MFRFiP0W++6HoR8RHLCJopx51gtHZmYojFhRCjFU7LtwxNCLFOYvrZaFm7F7mRzF67JHFz+THFksmJRthAHF2YslkfYr6cU4s6ZS8FOZ+IV/yq4pLgE4p+e5otIQ1232Qo4q3FJYs+FXaSMG8onk4JdERRJGmowWcG2a/yB/mgCA9OceT7wfKOo+4mTqcQyHvFwiOAuT4sey4oFfFWkT/FunGcGwIoc5RtLXI1cDjyRTj8R74uAlceVAlNQtPFcDkgl8nBgl4ZXPFreXQlZk3WcdPnk4SDiAlFTggR4oAIlj4s768JOi40LlglVHLRSREs650lVLMPE2BEdjHwlKgGvFnGnIlVjXzCYEtHqkbBb69EusUaQuSF+YrRSnEpfFEeSQlMYt+suEuIl1JgjyCbH4l+Eog4PbNwpEGUvKuOmgl+DDKF86LxS/ErjyBEqYlgMgHuJEuPMdAjZYVjTfJPEu0Jes1wwCEvKEwLL6FzeE76zmn0lNySYlVSFklHxAfFZvA8lUonlGjSJ0ZkbCMl2jX8lDIKKBIjIImNkpi54oHDE6YEMlqiCsasUqAlwUvwlpkrzOhqzegL4tNKKYPnRHYqclwUtclsSSYllYBtEqjT0unGmGZb9X4gijXrFz6PIx8yijAQpWsauZWfOGjkkwJjRqlTEo4eA9VU4NjTN43UuCaDjRUlIIsBhbUp6gWTRSarUoGlcTQq8kkvqx0ksqlETVKavwhKlorJCa/+3/xQKWNU9jSKwz3CFceTXWltUpNSXSgOl2TQTYc/WR5h0pwlF0sMoV0ohESwLIKpjSOluaLUlqlDE27jUTYSLSMZ6NzxSnrA46bQoGC0YvmlrOLUlTSAkaE0s8a3jNdBuEXIl70qyan0qPOepFOIcTU+l+TItpvsDXoiDWyaiMuIEQPMHOBxnCZrmJhl2tw0BH0rbRiMr+lPzXxluHVSx/mJhlb0p+aU7yyAFMrBla+WjC/gssxuoObSGMqtWHUoqcOMuPgU4qZl/gvSxKTO5luMqnF1MqBlR5PAl9EzGkmMr5lNMp8ZjjPrKSMsE64+XZlTEsmqyPOalCTThSQ+FOlFXiGZ+wqTIrNRFFrQtNl+NWmZXQonIPNQcl8opZZcwstlWMWGF963zIdsvGFbsr+0zrmGlssoNFDyInINl1pQpzJtlQfJ9lVzItln/BDKIop+RSZCDlQzKRFccvfGJbMTlUcuFqHdInsrnGhRkrWjlFwo5WOcvTl0PKJs3wtPccctzlZbkmmLEjNlGwtpFYct6iXIvWqZcsLlqvN45ALwck8colZbcvdlVspS5tcqTBxtXI8DIu7lzcqtFxcsdFF5j6cdOxtFYoq/Ik8slF2opLEQYTlF5tMdliotnlBGjmlMsqY5aorbES8q1FkWBvIR0i+SkXMW2rwj35X5EzG8SFNFC8px0R8oQFGcv85hopvIl8ojkgoovlNcD25XwprFh8s6SFLLdFz8o/lrop46ACrqJ5HmTFICs/lItjjFZGXfloCuOFijQbEc8uPZXHK/IIZQJaJZxROeItuKy9xe0H8s3lI9KrZ2Ct/ytoT9QO7ObOe7PPUU4qPujcj7FN9OIVtoy0y/eKiePcTnFgYrswWMXwVwHmMRN5AYVfLMnFdOngZvcsoVAirgVyHn7FMCpx0SCvSemEpO6FoDfM/UrqcE3DkVClhMFaVXgl9lHLQq+SChkEu/KpBU24XUuGqqVDA5jjV+ED/yMVs0geKgTOslt4t0VBxkk52irMVE7UrAmXV/Ft4om4diqciMivcValmuJWqUUlE7WeQQEv8V9lA8VOEuCVRSFCVEIlUo87UiV0is4l3ivkVjVg0u8bOUVviodSvkqUV6NE8VoYXEF9lFSVj4pyVNgz0V9ipkJIksjYhSoN0epFzZyEseSUUqnEsSrhSCvPqVPisfFTSsqVnqlalbSpCVPisMl35A50VSroE0ETIsSlF9lfipEa9rUGQ7OQqlTOEn5kysNZvEvEyAkJsGFtAW6rUsWlLEjmVXUqWV7kgtoQEoGl7spfUj4vWVCFnC69spXlMMumltspfUnCp+SMysF5pyoUl4yvuVlDk2l2bG2loFmOyhEveVJypeVRwu9wJ0qkqUlymVGGhulzyr3qLIsN4oKtAsDyvulnl3ckFXkNZWqSPidVCBVGEsplOyoW6OEvRVGyt2VdbE8uZ5ASAsr1eVBQJRV5EoTYvAoJVCKoTlx8yRoMyG4ZeHMg501DpV8/L+uNHJsGhdVZKFrLI5V1GZVmHJASoNE7q0DJDk+HO56I5NdZkRGH5UvSnJFrKw5qfWepGwolVI4hrCeDL9kNKuX0Som4Z0LJs5UlXtWQqvjk2qvVVxDPYZXnOJ2qfSNVKck05Zqr/pfyvjklqqlVKqpw8VaTC5hK2tVEKsn4qXPr6zKoy5gXJdVmqtUVADMK5maGWozKoPFTSA86HKu0ZNqvoqYaqJ61DImcg/Rd6Zrz9V+ooo4w1XIMAqsxplAMDVmlQlU2FNK5PqtpQ5DMRZqAx1V9YKApD8rF2HquX0Zaoq5JasNVrqorVrIrrVVqvpV8XgTV9auTVjaoMB2/TSwy+ldyZYPGZo9yJo/at9lUXNPIofWbKIrQtZbY2HVciuqVUkq+F46ph68ehFaIosFyy6og4OoyTZjSCp6x4hCcunUWZS6pnKcHKuZQ6r3VAh3S8BdXXKVvCG4KXOPmG6pEg22URZ96uQqF6ojZJ4VfVt6sRZ6/Lj0+6tGV/Ip/Vn6oHViLKa0MbFRWc6qGZX6mXVdyAjc9WWS+RNBg1Z2w/lFZ2PEjQQPVBXIa4rIOVUjSASJLcuGcyGvz02spiU2yHz0ibCm5p8ufeJhBzKZGtnFBGuo1VbDWZUGowqZGq5F8GsrKOGqQ1jqRnKF6u0lliOo5UGu/KQdxFaTEuGgAGnQGJUs8VbitBox8D38MdIMyz4rH6alju5DsouVn4uk1EmoMVHpwH6SmoTYZiumofTmmuVirv+Oivv6c/WiJSwtVljiuUGXgRPFC6rPFUmquo/k1k1cKVE1G1Cc1aSuQ0Mkq4GfzHXWnGnCVGhDM1YSr1i3msC1USpYlpmqV8v4viVEWuc1JGgcidFWyiEmuulsIW812/QHSdSsAGoWukVGSpi1nipSluWpwl+Wsc1WWrhShSoH6SWt/Fq0uwGpCSwqJGkWl91BfU5GuM1lyuDV4XTClUtLxSxyveojWq2VjUqZVbWt012yop6orgrZCyrGlprM1g3aHM1Vw0jYLWolUI2pE1dytT6U2seVpUuW1JFRtVW0vjWFPTxUXyu21UvRW1v4oBV6qsO1vwihVB2o21bqtEwrJQdW62tq1HEoelDWsu16Ysa2lbE8u4aozoUoNKVnNPKVQ1TU6QxCAwuGswZY2sploNE+1PCI6Oc/xV4+KrB1hUiB1tQrG1BsrU6M2h7QrUu1lwFXBewkMClZKT+lw2tR12iqR1eOqx1UatyBifyDEE+AF2H+KgoVSQ6Fp8qNIdG20oN2tKJJ+OOAfeEJ2N+J25norWJF+JfFyfRZVrX27qbG0olHrVKJjf2i4LXW3FLgNT++Eo9aNQLJ1wuolFLgPYJAErNSYd3wYS2RMIiuqkByuqZysuqacKBP0leuqkB3BMN1Wuvn4fVEmErOtoKTO36Gw1Xk4qbPA5ViTt1ceQd1By1huuhOi4p8TbFNEv3MlUOpq+OVs1wMpFs7uu4KwHzN1WygEJL4rDmz0pBlFHFt1SAIAl0euJRIeqFl2VmBQxK3j1unDT1Yd0z19uuKS/OpyB5HS5Y5Or7wvGqfpaTgf+Luvz1hO0ss34Dp0KgD1lexPFSCzGPgflAOW0EROCs8tCgkApU1JQJloIYFnlDevvlRcszlHepqJoFD/sATgDY4+q+hBeXmVdOv71NzTswCuI5lILK9uY+vhaljzsRI+u8czgzV0h8pX15ilr1DYmbxVkusZgCDPKOOmhq6kNxZ6+uOQHy1Ao1+vpuERDZc1Yj/Ryeos48SCv1hmG31J8vP16BAf1s+sGipRIFkX+tAoW+uf1oBtVaW+p+mviPrwOOggNqOwXw8MFvl2WBTB30pcxmCHI68Bsf1DlGH1f+sl519DcYqCpX1aMq9uyBsBWoFCJwv+uB1p8o25RaFQNaYDIN1UyINo4vlaflHpuf1Ak6JYjwNhMqUxLBvPCYaEYNCKE4NBq0AN/dODAIsttuVTKwNsOWpqW9UzgNypT5C/IoN8htJOUEqhlKsuUQrBqoV0LnquMwrSciLVVa6hq+l0huMZloO0N96zAN8QDwNnBt5pbBr0NHMtZurTPINghuMN8lCUNfdlCMiCtCgnFirC7FCANvNSkB6rECmccpqlAu3pihXSel7esJqgTxN5ujWZ1kRpYkT0vZ1xfBh6f6NzKgQNjiLXCNloQIakbCt+4kMqiBsRqX1DXH8aUusiNLXGWl5upCNwpEKNG0v9VB8EAQYh19aYLhxZeYs85QaD75U/D+akBvoNrRr+aH+tJOy/O3QbNSQNsSCglOOiGlPevOVJQJmQkqtAo0xsgNJNGGa0xtgNExqFKZRrGNNuvfCF5iGlnFkAg/4oLQ1RqeZ19D7BVRqqacykONqVBCclxtONuxt15lxq2UeH0n50RpcBx+sDZG3WDZe+rY1HrK+NMRv+canV0RFAKiBi+pD0XxtSNJwTTEXJglk0+rg6K8HYBBhssizeoG4yqrOVyHLyogJoG4CJsEBvgOb1E3DRNR+snAU4kJN4xsnAuiswYpcKTac/zcg9+sKqYoVNKkBpSK3Yh4Q7RsBaKQov1X+ujIrJs4NABvpNOJpmNGJpCoAbF0VApsgNIpuxNbREFNFmu0NfJslN3QKQNVhtFNzTXnZ7FyrxWBr/oQhqKQaJrsN34C1NclCVEOUqbOxJxYNYhv5NUps4Nbhsm6+kA5lV7IHxPcS4NXJpveKpoz1nZRSQNps4sZps+NyjnuNmeCMVAwUehJjisN3poahV2r3Y5BhloLAuLw3xvyNdApH+8+usZ0EVjiX7P7gq+scl1UxDgSkGIF0ZtSN2RpTNqgCyN7xjvZlYHb1sZpD0b5PRNMppRgJRtnZ2zQqBlRvLNYNCJNkZsbNIcSM1hBoUNJQu5aGhu+1o7K6NPAu7NnhobFVgNBQkxvhERSTZNd0xEl5NmGNX7InNvJqoIuiqdmPZp91rkTRatZurgyxvXND3WG+0pueFviPMIO5rrNVl3I6rPTiwOrNYc1xqjNTZqQN1xuzNYNGT1d5sbZ0QHnVQesYFp5rIsk4AvNJjk8kn5orNbut/NuipFA7WoCFsnPVRY5rSkFZoz1v5qjZ0QB5kViSSpz5oLN7xuJNy+jmVAu3xNRNHQtDQKxNx4kJVIFoyh3cJ+NPvU2VSxMBNaFtxVaxPItRNGKgCZsl5xFtnVgaFF1uFteu1yoqBmFuPEYOGBVysA+NjFvBVL2r+unJsE1K12nqwks6NdJtpo62SHNdUsc5IVGZNx4hEtk5svODps/1wlqktC5vgNrFquaIBolNx4lot0lrGBAuqgNNFuuV6xo9whVRkQVzWgtD2D7VMKt5sXpqwtlFp2NfpootmKqEswZsctblpt1VuELKZKqEsPlrQtVKpcBQ4k5Oe62/Ypyjt6jIQJmx8toNiZqtW1KNLCEeR2pHWqB2EojbwYVo7wwRuwVUVqEu0u0xl0pxpUbEv2ZjRpRgaVrhkb5ME4UQPitgkUKtPCGll0NKxEOF3b419j9N5ihCto0kRqMVtLFhTmmcTVRpUBeAKyEeqMmMYX363pUKFdPn6IcMjRalVtXNTOFIGcMgGt9VuEcCDTekwyCTg8Frlsd1UKtZYQAtp3h5g21poYH+pWtU1rLC0Fr2tAMhw2eqvMG51oWttqDd15JG6aGVpmteUvr5LBt6t+1tMQtqAz12qRGtFVvgtXHi2tfUFytY2zP4afBytmJE4sJFj6tQNohtJ5qRw0NtGtg1qsc8NtXC0VrAlNIskNmqitQiAW/VMswBk4LxTc0zIAs6ssKtsmAIta+qXZ62Hdi/Vo8kNBu6tvHOJtHVvjKCHRA184IBkAwV2CJVoUMMszhkFxMrNzwu0cJNoAgurnh1NSrqFVNrBkfNpfZmNoBkUtqEBDMVFAhVuL4sGos4ituGQyttdZBGCn+ZKhGwAryzVqto/SStuAEjGoMg7Np2QJbK1t7Nqhgo6tPlziseC5Vutt8XIMg3iGvs1tt22CttWtuZXWWwMg9tF1o1t0zJCcSAJptetvbFOIp8JHtqmtytt22wxvxttNuBkXHk9tBNrotC/PYQN9AWttNuu2zJ2gypNtdyu22ZOntuZtvTnztF1rKxZ23ztU1rKx12wTtLtoAgGPFfNW8vzUqds9t2L16cMdvKtddrG2kkRY519g7tecjEOsttZCiKsbtbdrJUctoJkxdt5tg9o/ZoYCdEzLmG+JbIYsBjhsuoZoEtxrMYy7l3CkPWHQ1q5v/aOPHMcy9rptYtqY569tBcW9vS8J9rzCT7FG1FGsXt7IQb1gUO9ZJ9rvtV9rWZi9rzCFipfZM9t2kSdGcVndpa6GYSlMT6vjVdegekGm2vtsHJggfhAdCqsH5toYrGKf/wCkYDpNtx5ibCMDpC5grlXCt5GA1tLL66CDodChBAItt+qXZkDo+tj+H7F7tpntTYQIdPtsod5jjAdmtosV+9uG+ibVylYdswQuDprtgDtFtdmsYF9tQoIDoSNIvTilQ/Dvm1S1TLtMErodIgAftq5vYQbhAEdS1TztRTlAdUjuDZ6igHum9rP44Dsl5fDo+tsEjY2YltHZajrwdX8zXo0dsLVMYT0dQDvi8WMREdM2jEdbhM6ZpMv1WjDuHZj9M85OjvZCNYnrtDVr3Yr4oVCZKQLy6Xk/Qj2VykweSJVXNt2UFR06kh5Qh1FNrxFwTo+tnfXZoazKms3dsjSxAn+FFR2KkveH4t7ZvRFCTvMc6BHWiizNSdhtpvMSkEPtPDvVZCToekRTvS89aGgC4Ujqdf9v0qu0gVx7ugy5V3OKks0lydBBvRFlIEk50TgOMxTow1jYn6iuUh6dlTrfN6rIGdGTmGd6Xlmd2ToZiWjpTtI4Ji5iTmWd8XNIGhcQ2dRk3dtrTqWdRkx9tBzs6kkzs1t5KXStATvZoZevcdazvGdb2vd00doVSGTndEe33Wg6in4UTTvphndo+dBjmadiMnWcECK+d7NE7tgLuOk/zoJk+JOKkYTv/VyGlwwDLDiCDBhWp8LoV6TtGE5MeuAFAFV1cB+CdoXgS8uNEtQwM832qt5n5lwF2xd4IT7S1JJui2RlFoeLtp1d/xPCJNDRdBBGXlyHIoU2RlxdnqjH5R4UZdqLqDo6Lpui5uwjoa2GF5iOJ6ijoXP8DBnDKXQV6MXaAnihNrk1YYiZd2wSKcsTvTNecRldlgxPQ8rqmdDduQ0Srr5dOQVVdwEjtKzwWNdeZzqI8ag3wK8QH1BjoOiolkl6Rrr6oPE0tdz+CXANruldprF18qtoVdMwsJdyrpyCqvBAtrDp0lzaU1ddsUp0bLCPO0CWooG+BTmtrt7NB0X6IWrqXAP2iAw0buTdEbp2Cw7TtduERjdKbuX15hmjdKwQLd+nT6oz52xBpbu4SIYGLdHLpPQ1bum1zG3ZdvRjjdzmm4d0zohSEHAWYmGF1cPGDSwWwpvMwAgL1gMN1c/EU6quOm8eoFotpuGEmQ1NR7dJSBddJLsMo1nDqU44iXdyNT/oD8Wx1M7soNGhA5tFbqXdnVU3dS1t/E/bpeqEu2RdDMWRqF7rMmc3JwB13gW4ZLwI4b4Xvd20mdAGLtUlAFQJmaFiPdiRBD5rsRfd9Ern6cisCuSMhei13mhcJSExiJcHA9KGkTE9LqEWd7qA97CEndkOtYpyVzA9S+rF4WakCuG3Nfd2HsmeBHDw9UomA9W7pKtm6CrUt2z28Q7pudBW3owVYSA9j7pPdPsVW6yNSY9nMTjCJHvY9clwviQpWG+urjBhIYXTiD7vfdgVwviCzH49UHrpiIYQk9KHoQ9r2vVifUSPd8Ht3p4nuU9OHpZhrHvU9hHt4UFIXw93Hrk1H9iLmzxBo9rjtxFklz09jHtE9ZLthC/AQJQX9PvEmog7kG1ItdoKFIgKkGbJB7tecKkBKZ6TwNQJYTJAzZOAkAYlAYgir9d3WG89m9GlVQUP892jUHo8tJs9rzkTo5qvrUgOoQgUohzGDap316F3jKMbHKYYqpgUolHHOUXqy9eGpY0kxmK95TBS9BHCK9hlALEpXtHl86hQq/cD0gLnsPQk82c9DnvC9WgUcQ5TAMZfBuMZkTJWimSK3JbpAsZR51gUcd27o0XuVlLhqQug0WpqHVDiZPHtISiyFcZx62cNnMrViF1hQ1VXvAZclyF5iyBDKTTIwNIt0kuI7DW9BjIm9MPFG9R4zCZtMrFl9ZR69i3s6ZF2ORhC3o89eTM0Nc3pIuO3qnF9XpUAE3ou9n3oqZD3pkNkl0O9GpHG9PHqKE/3rBps3q29rsWB9kMFe93LtJSzFFJZ8ojjVzdIB1JiHi9HZJTV1sX6oCVr69XjIiZ5PtdiWA1/yRwLqZ2dKrU/3r7JzBpIuHVBJ9lcCu92dLWwl3rJ90Mq0Nw3t4QZUWm9+3sM9anFZBY3qSZ0oL5Bg3rViw2AiQpPrcZclyp9UPvF9dMvB9T3pZ91PtR9E3vV9IPvbRPPp+9kl359u3vs9Qvu69MvsWQqPsqZ5hrViIvqO90PsM9hvrh9S5KZ9Bvs59OvrR9pDiEuVc0C9Z1JgU6CkmQgDDC9ryvaopcEggGsD9Fjns75ofsHoH7pGlRtNGmPCUQQakDTNverDduGFo5FEDD9zHqYU8fuZISfuAkQ0WVIqoXk9fH26wnfJoQ4XUF6MXoEgCfoogUbBVFfnrT9WcC4t4fs/EfaRY5dgWpJMfs7dhOBnyREQPwPGBvp/Cg79JNFvdg/oWYzfuIeT+Hj0UfpH9lFx79+BS2ys/va9WJxn9Lfu3dZ/GlFXxBm0Tixcx/BpIuihuilsYVhuWfuHNEGXiCoRnL9nfud9T3o399Es+Z7ECB9I0x+a9/pOWm3qix53oDIS+on9QPoc6z/q8Slfop9e/vO9T/pBI2/uu9iLTv9//oUxZhtFl+/ocid/qC4nd0M9t/poQiAacNJi319T3oKggzoz90fsf9nesT9mDUt9sAfO9v/poQUAaB9n/poQmfuv9yVzZ55RIogaAdw9B0GFIKKOJ+vChFNUoj791urFd8unswXJCL96dOGg4/or9XfqfC1YyH926k79Qgen91Aej9t7oGssksX9LftkUcGzFy8THkDQgPxmQuQ8R49rb4m2T+RhPqKuLv2DA6dFwRmdrb4M8jvhQgLwMwYALosKPHtB7FHk78Jtt1jLYBOCpve8SIK5tgaX1Nl2FRxqvcD+BVXeIKPWg2gbGyvSKEBkolm2jTBcDwMlIS7GVmyEQaZ2S8VzK4QbGREzniDp2V0DAQaiDWcGkQ6Qfi8n2qBy2QdpZ+MvT9N73/yIFtO9JjOSQIIOpJ6dA25FIGf1UOVGQ6uS8DevsR9JQLrRQpW2Q8Kmf16ywWNFQfhUtAZRgLQepqwQfbdMsqCZwvE8ajTEaDPCOqDQ3tugciv2qvQcmQzQZ5QPQfmDxAdtuXQdUIZgd+SuroIVslrKDPQd5UFZ2+9nQaB2YwasDQSNCBAwdWD5wfQNMAd2DCO2OQqwfmDzQbV04waPhIweWDLRsaYTwawBiRCByDgfN1ddryDsQdCBqSFw6MQY1ZvEMXZJQKMGgwYmDz+uRDqwfgRZCpNNJQNegwcpiDXKOhD7YBRDtiMieWkIzNMIYxDGrMJ2eUnb9IqghRdynWWBgZxRJOq6U3uTSkiyNnswAmKDHIYCDw32hOP/n+qYd10U0UIFDxEjcJDkWQhP/g02mduxkQpXXohPF22EoaEgtNW5a8dok6yoZ46TWu0d1FD8hn6lIKD8CzVSoc5dgyEUd8aNFo+oaFDfIalEt5jFDyQfLQ0p0/UmobiDIIIcYFoc7tVzThCUcttDtSg9DDjBDKRkhyDERHwK8oYDDEzlmkJiBDDXfqCZ2lWGD/Ls1ophtRBUvp8JdF1/yS7ANWzQfoRU4ptDBoYR97/tiJJPFa6cYYLw/QalxaLvjDfwfKgmYeZdCofuDzTR+aaYZzDRMqADtQerg/UDLDxYbcJKYadoUEEbDVTNV9yiBjDhYZ/8bLHwNsVu0dBYdTDRWDUQlwbzDuO31ib51FDK8BLDbYfRYI4Z2DStwR2dYe7DvlhP9MlsW+4JJjQojEFDFYfPCK4eHD7CDoBSyFMYgDrJ2CwWDDToZcBnkgdDSYO9DdyjuafocFD7eq8mC4ZfDvYepN6HpRg34azD3OHoAfRKDuwYbdDriilwz4ezDUYbp10EdTDIEeT9sxqB2CEerDS4aqJPHXvDh3glkV3M9DBCVVDWgb3a4+Ev6wMh1D5QStQZ+u0dRoZPQq3tgdV+yxksoavwl/QMt0XnYQ/+XHwquFUdSofwwM2iojKdvIj8mHBesiEND6oY3wH9lMApoeihk6GEjwMitDTaFkjkQaDDvEdIjiMl9DCkfvW7oZdDGka4E8XnUjzEbsEJOoq40pw/Qqkc0Uf6QMj/Eb+ug4cEiS4G5aVewl9FPvYdXYZPQGdGIgGYcPDj6GEj6ULf9BWIHDE4fEj5FlHDCOrp1rYfcudkaCjJ4fnD0GRkj961YjsersQt0C3Drkf7gCYaFuSYZKBYUbbwEUeiAU7JcjS4DcjaUbSxrwfzDPCFsjzpC66nYbKjV+AYw6kN8jBTMmgVYdojLEeXD4UYqjFwZV9VvozNpZgAuBUdSjHkbfOpkao4M4b8jXMFLDtEdqjl4f3QnEf0SExLvDKkcMjYZoGURg2TY1cE0jriifDM0Q9Os0akBm0Zmj7EvKcrJXb4H6C4jVOwW6x0brcMaFwjv8JIji0a7Vk/B4Qs7qitWIw9UFUDzS2GyVGETtKC9WXZCOlHKQlAMalCB1+j0PVrhbDwHqe612GKIg5O/jrCIRw1R2gMZ6g19heGg/LBjEMCVtdpWJWCMebtHwyMQZe1+tOMaZ2aSHpeftrhjwak8ueHiRjn0aWjuiHJjxLEpjOoyCEuMopj2cCpj90axERMf3sH0YZjtmDFCaFmejrMbydf1zIQJwCmtUwGcxiYZ+lPcX1B/0v6tjUqh5fTqFjQ9Xud+kAo6I0YajN725cosbtO9N1ndeRi1jq/I6Ds4akQSsfKtLwx1jpDR2dpiDljA3sljySF1jQtqPi2sfhjr5xljVsYa464aCWniGPM70r3WxYR1j3scudvbEJwFYbpV6cS5j8sbHDC/PtjlsaDj0SDB9XUc8QFsYWtcsZ1jJscSt0PRDjJ4iFtscYwZ9Npq0ZUT5jv0chjwaix6WNqY6ZULzjRNjDExMeBjqI0ZjMEE5jLMa3VEToOM9L1rjhI3sBfvr4aEMYpGVly7j0oT+jdO37j+NpoYWoYX5/cYWto8Z+mrcddjIEfNAmMYbjWNvO8dO2rjjcbnjkCsYFq8aXjsoyMQJ1DXjvNObj1Ma2Qe8axtB8evMw8dNjAsbK9mcoQaa0Qek5IGcpBzhPcBVobUEXMjjf11CeNNzntZrx+mTlWsS5jgfjger1ddIWnyS9qY+0u0/j0oTtwl9MKFf8YSt+q1c5v8dATnjv6Gu4YaxcCbpj8TFc5S5iaId8bvt2CYhuJjEaduapgTMqi9K0NraQb8crjmco3OFCebQj8cZU5CYsdgCdS+RCf8dHanU5fykjigNo4TKVNXtOQOpOpetLCBeD/DiwedhFTketRZgusQCeODesPgQ59VLC9CZZuGAauDD0xu9aMZ+O8rSluepsF6wiYQIlx3qjvXPkTpDqUT2ifIuZTsP5lHP4NzYeu+OibKd+vS0TCDLm5dDukTHsYsNCU3UT+9oVBUt08TAUmnEr/pUTRsZNAxiYATGHPOudia8TQXDcTzsOKgET0Qd0iZ8T6WF0dgCYrDGmFXGkScrAhz1a4q1pOwgnLq+hdX8dhatITTzLQIxik3tNXLnhZSaLMFScKFmyziTzLmk5bKI8anDqXYyXONVdSZyT0CQYTWON6inSYKCHV25w09T8TBQRpRw2HqTiK01sD32zQD0nIsOnJ60gyeUdeSdpZkonB5CCespodtDdD00GTLScU5xKygRRJFykOPF2FQFhv4jcciwf9gOWILgkaoTuDxSCf6YlzvOTbhyZ2VycwTQ1RXAS5l0ozMb1I1f1R2MaNdjtEmxFhFtk5LydOddoT2Tpyc1UAKYgTXUwOTlbGIEfIrOR3Y0muEzrtCIKgCmTWAmd8KdS+6Kf8dUKbRTBeVxTRyYRTxOKRTq1seTfTKDyJYUOT9L2L9rX2pO8+FOdUqHFj6Udtj132MAplmidwv0ST4R1Od8KdST4rELWEzqZT2ia5YiTrYgjKH5TgOo0TUKe0ToUkSdYRGxFYiYNu2ziDtlbGFTTiY5T0TgVTO/sKW/YY8TKHk6kg1jB251wFTZTr1mvpzVjRialThqZpTIqc6Zhqe5ahjJeDG4buucqc5TDLm5TVv2pTn60tTMSdFTDqcCSWSYRmnUh7YQ8jeerITJTGiURNJSYVmyKcrYQ1Sa5sacjTWKYhuSae6dKabRxwaaGdGafaToaJjCeKZFWcjUJTNKbG2tjmITlEdeStmHyw2lVjtrAV+TLu2Vj2Vivl9gOrTBKJptYRHBTC3TBkTaY+TXafZt8aGTtH8dwg2lUntYRCQTXafKtA6b2Tw6dPcNKkWKlaYrkZaZhj86fRtVXxGQVSdhaERDRTXMwHtdaYau3ECxtK6e3Tes1rTXVqPta6ehi6JHbTC6a4TaFkwTFaasjdKffJj5TnTziueDEscwNh0znW2dqYFRyW0ThOEudBYjHTvqYNuz6Z/TSYBGsZiamavNrfTqSYl+gGZXTUtwdxNVt/Tz1qTDNiYSmE6xQzEGZ0gPicGy4GeKwaGdFleqeCTcrmTjIIJ8TZGbJU3Y3QVDjMwDtiYAz6do7T4Sd6a5GdozXUZIzw61a45VofS/6fLJ1GdMAaGcR9vPtYt0GeozPdPijgdw+i8kUKtlSD6mxAivTAEAHTHV33W2Gf/tN+o6No7PQ24GfUzUt39+lsdSC2oMTdvjJw2amZntRwbRZwM3aoofWvsA6YhmmJEmBOtqnT51wcz2GesaRmdXNlUn3KTmYiIPEzkVFTlpdTSGiS/mc1ZjoccuP8xIstoW7D1uGU1KEfrKIWeJdwhBtpwF0izwYZNCA6TeyqQeizCBAizdklhDYWf7pz50yzrQaDo6Wb8zeWYjoSWZWp9MQCzuLqCzZk2KzEYdQG4ZRqzoWfziHmtUiFWYMCfkVE0RETazEcQazfWYjozWc/CQ2ciCBYlcDQiyOkfYOtdqoXfTLKc/T8Wcw0sIfddR9wszBvPIxrWY/S7rowyIwe14TH0fSDWAOgR52mzCftTdlCb2zGhGOy22dRwGGROzy2Zuz/dPaINscWzBE1Ozh2cXq3jsszFaQez1rrWzL2bO98WcGskxvddc2ZOzwObbSqODmzl2YSz1rruzeZ0McIOfiAF2ccjRMrzi5YpWzNhvaIJ2aGzcOZbQMOYhzG+E+zfmbhQW0YPYzELz4WWfrd2Noazj6vYyQ0Ypzz4XpzdmHaqEWfPwswaXAMtPojmULVMLUpPQhdSEAfmfZzmrM5zRxRazdPi2jXObZz4IMhzBeGaa//y5Ygxv5zYuaFz4INujjOd5zzOblzwYPfjCWNhz/OcBRtHubwmucOzpDS+zQIg4ecqlPgk5GmSBInVgNueOhaulMDc8DRWrLqrNPeEsDGMBtzbSydzHclJOcyfWSvub0gCqTujgsYSxPaGlIUPprAf519zHnp5lPuf0DUedw5nGktzwpCOBNYBwlwXGiDgXp5lCkr5YePtfOYnM21++HzzDpGGq0SXPwpeZ8gDud/FWeZICz72TzcVkKkq8AbzxKZY0QiPwKWrCaQ50u+DZeYzzv4vAgCQbu9/ebO1veerzI+d4DHeftzE+ZI0QmpbzNebk12MnPCHnpFiAOZqDkUtCkeIY4CJFnd9L0oAqIkFx0i3sLzASZaZqiY3z/RpR9IsURlZr0fKgXtXzIGbxSk5BKzY3prA1+a5DPnp3za+aG9kbBvz+1UiuGsRxl6y0WQE9Py5dtz1TKvAvzKcBDgaCb3zTKVHNiyEFSBicCTo0Z/zh+fHzbSex1j6u3NUBcJ40SZhlZpnyzBKB3z1+bQLXuejzD+e5lN+f+9iBaYlzlTazIRoDzGGnkuwedzzrio0chlDuaopwch7oib96CBP5IUbv+fVEpoNCDYQSsoJd7mWHRIhZV2bSzsVC/tELyT1kLkECDyesux1C3TbR5AdEuKVv8eshdQDFF0vePBcggori15+wg9wQmi6aSpzZj5GFPNSgeULe0sONTfqMLbefnUZxtyVFEEcLCkqwLkED4LTha3U1ha4D3hcLYTOCOgARai1YPKULe/XOl6NAcLEJ2y1URcMLMRbhSyit4Lo+0nzGMqUDIRd+EruWMlpxwsL2Xr3wmGk1s4RYKu+srUArhdjCCReJVu1zKL5heMLnOCqLyRdyL18d8Le/NH6FEAyLcKTNe2Rc4L/BfPTnmrHKwdTVT6iklwjkixygxZyF4XvCy4sGrquGAIF74vZT1sHiIDlCdAPucqQ7nBmL/iRQq8Fmu8i7VeCuufIx8xf5SD7q5MbuZm1Y4qmL2xY26u+cgxIxZtg9UiGL/UuPSbHuOLmebBlyNR2LFecFD+BTuL4xeJVnxaeL9xZWlhPHwKi4gBLk+ZhIaPUKISxeIeAYgVmtREL8YgYdSIKAhL2UUuL50s1sXxZw2PxeLzUpqhGRxdBL9GnRLcJdBLxKqRLRNShLZkucVRJaxLRgZliqSBqk47pLdCIaD6j+f7FWHsxLMBYSjd6QPzQ1U6q7JaxDEl1Vlq/x+a/+Vvi1+dvj47sxgpIavZj+Z7+DJdSMTEvhmEnu5Ye0qFLVJYRLnmtVLixfhLrqR/xWpeJLJOthjsLPZDBQfu0JPEPkPIdpZyNym6ZgbCRg/MO8bLONLTQZt52WHb4F9DBDJakIqY2TuRaPPtLvgcxD5vMIq6uQJD7/N9LaQZCDCRQVmUogmDtXJi473L8DjSMzU+VrDLFbLP5SZbaDJpfbgaZZIUFpYNLsZayDPIczUeUjHUOZaPj7cDj4cZahD8QgpAt2piDSQeNVOYxrLiQYzLJCGrLyPPyDzIdLLLZehi+ZebLqmjWqTIZTL1mlg6PZfDLrCAetA5YOWipVuKtwf3Oubs8QfBanFgahHxNvOHLyZe4Q+yArLdZdpZ2t1KLDQfGw08Y3L4wfgRmMcPLqOUMRKIhDWZ5YhRTzNoyA7oIwjzF/5PHQcYIkF2LAhdT5i9CENP/hyOdpafLTtBfLm5udLskuA4+8VM0QFciuwQX4Tslv36zlTRdyCTtLkhCGQ6sVIStcLpAUDz1DjJkR59UiazGFZt5nkmfoSFakF2xSqQ1odmkPhbF2yHV8E5oZwr8Qkawr7vvLZFchc4GPwr/5fJ5dxdFoLFZt5bjHwr4FZoFYTpIr1FfrLfFaorD5fTgQlb/Lt8VZ5DlGVDHFfiEjQVg99Fdq5Zr2zzn/AErmanJdHtByOtXPUrojE0ruMa0UWjBWD6pfzjW9WUrtxVIS65aDyWjBkr9ZdE1PgSgw0GFM0R8G9d9le+CPpeGq/cWjCeTjtLTlfEjT1hQr7lfwwdjBO5D/3U08TTHjf125wOLnkwEoGgwdpfcr8mDCrKFacrTaBirrlfiEtlZSrV3I3j2gpb6/ijCrXvI0umVYcrNvPi1RVbSrcalKrvleKr7/Nyr+GCes8fILEdVeqr9ZY8leVaKwXPJyVZVeyriQJzGmBMnQqVbp2vVeLYt5GarN5darTVfKruWlUQW0Zcr3VbP5FziVMI1cmrPMeywi1dmrk5dWrMUbbIT1gPLph3KjnlbIgJ5b2rgVbyc65eOrQkcqQ3VaCZGiQLEF1dirAMc2rQkd5jJ5dQo/im3hJ3IWrb1d5jilfU+X1dOrKIl+rXVZ+ruIWirWVbOrjVdBro1ZtVQtBMyEYYq84xYTmsNY9ozgyMrZWTpAVNPRYKNaSkiHEt1IFzEORiP5iovqUkmGmURDZWtJmNbEOW40Jr7FbThCc2prd/lmCtKa++QtBxrxLvhrWfPZNIktwcKkM/U2lV8Q39ylKuNbU4+NddoSNbv8MNlRrrTGysz7E/UhqxErownzC+Ecai1JcsL//B7qqwWRrItaEY6tfwj7NbA60taQ4vNYlrEvEnIotD1r+bxiCS2RHD5Ur7odIHViDpAi6ktZiOltdXgi3BtrWUjqIIoaPGjtYJrVzTi9lNFaDc5a7RntaFKo7FKCVNb9rwec4hSUlMOkEI4CoVyMRIdcSga9A5rU5s5pIDj9rPntCuW4xDrBsBTrSUhdredaiu3xzxoYSA89ZHLYuOa0RD+mQJ4koe9r4dZLrkvDrrYdbELu7N3ZidUegQZg896dxM2owkw6zdZh4gdaYVZIY7r2lXc9KPsg5jbRmZoEJR9pxEUSndcmuUBeLr39wXrq8HYQ7tbfopdYC9rtWXriOPQym3D9z+ddsyB9Ydru9Zip7mRPrGpB9rNWTycaebdrcEYzmTOHBBK+Y5CpNc5sJ7ivrDde/uT9bZDkV2KLsjB/rneaMmPRaqdfsoYS79YYDO9dbr/4YilsOEAbWdb4u0NfEyt9aLrG9c+YFTkssqDadrqrErzDBiwbV9GcG6getrD9a3aH0Uz6yddKCb9cIbPzT96MzMbauDckDLdd+qRTjwbn9YaNNJcIaLDZwDNTDnr1PS4bS+qYb9Db1grDdnrMzIIb2aDTzg9dXTYmQq6Wxahcxtdsyd5jxrKtbyL1TFkbBlaxrNWU76wYeVrJDZOOQRdvzxNav6xmcTqShBPEojBRr9DfIqMmn3iOcOnoBjYcYfNaZrZ4zMbSsSf8Etbfr1jazDTjfob/YtN6Rta1rwDG3QWjHNr39bjuxih/8mjaEYgLuDD8SQrjvRZVGMTbNrpRZ4G7JIibULhSbYHRvoN/FFocd3lregkXajjYUb392nSYYhNoEeR4GpTYR0MkdIGLvLEyVTbertTaMYzyECmNTb7Swm0W4kvHEjXmi2enNfTrUfE1s2Uea8faUbanTYkVdkZ6bRjHj04zbBARXQ6bLTaGby4AjyHMqIdidTGb+1dp6HJcYa34EGb5TfabnTBBQ1TfUwFTbA6HhCjYezbsbppjTAPgW8Fw7sj64ECjY0tAqb1PSqQjQSvwAYtGbEeQ/utEYDFSEgFRXaBurdzY0arzeXuBUejC/7rWbBM2dzBUYEgVxe2bULZ8Co0ziYZzbsDG+CRbpzcm4qLdcjsLaMYmLYJM66fiboDfMyKLfxb3ZcqbXzZmiBLbqbKoxx4RgHkUYjc6YMtKv81JJULSDdpbWLbA0eRkUSM83zCotBZbj6eZrzqHlzACl7YvTbTrBW3wIQ9XrD/LdGbZue3kordCY0YCCDTy3YbkFfubUrfoUMzNJrcKGFbF9BVbWzcgGGS15bmrcb1qpiZbp8gZbJTcDU7xgvoFzlqLCpm3QNrYi9towspJLXTo8aKHrNEtNMOzd8DdrbhbhrfLL/kj1bK10USgbajL+rY6b1rd8D+rdJrYbfdbSwINbVLWDimT3jb3J3HMUbe3kIjWcb9zfwW0ra5bRuewSybbiNtrazbjbXaIW3AtbprYgSFwCAr/LbA65bdrbXLddYu4UkDOzEtbMwpDe6OxAUordJrgSXTV66i5bZbcDU6gb4S9rfvcw7aFyEbe+Ofbe4biHC1bQdZOqSw1LQerYTbZbZbb9LarbKdAbbUZazUrLc7LqrkdT1oZdLcTF1cwOD5bTbceOp7br1TtDrbblkZQpjFvbq+L2ZD7YvbwzBMYbGovou7ekbKo37SC+AubPA1/beLGGbhLY7d5mUA7uvipbzbbaI6mjJbwmzDEmJG6b5hAXbLtQeAJ2CEjtTaHbDkXKC8aHyb8HZtSszbRacHaPaabUoYyzd7b4qfCWH6CK6a7eg7/7ddYhPCA7Szf2bEBO2McayvwRXV7bIrWUWVHbRavde6wVqyzdmzdJroUHcg7Hd47GfzRa3HbbIKwep6gOsal4kZWDfHbk7bjTsjMncQhRXSk7hOEprjx25wXdFjYpcHBxLEMHoHZHNYBnYYrIpmM7xbGDiMFD2GSMys7CsMJxarY0aU9QPWzYH2QCUGQ71wzs7/rAc7MiZQGOyA8scfAZkbVS3QPjCC7qOI7bpiF8sEbo656GJMb+mRbQPKYV87ncTbM7V07Jnbb6ncFzqvlis7Zncx6WgTC7zvLlOBXY9YSzj0b0x1OqptXlY+6GStU7sMaBXflYZXaW6ptQ9YNXd36ZUUmuO/j6i2bec7HXZuzr2mT6sbb671Xe67S3QC7HrCK7bVRiGhXd3o5XfYRUXffCjXepJ/gpDdfGrnq03flYRXbLbp+s5Y1Ze6T97kcNu3aHE1LbKyyouZz3ziKcrrEO7/rHJA53Gnb1+sn88Qd7bjhpu7kyBIgZbev1nLFUAzFjpY3JC+78Qbg7p+te7TQV7b3JEhzNKtUg23ZX1mrDe7HPTIQGWVjYe3ZO7rTHhTM0RMiOlCu7Q+ta7wZXrb13cP8OPdmYO3eq7BPe/u8PeZz6PcFCa8SJ7CviOK67QVj83ekQihs27iU2ZTkvtZTsODFCkhs275IyU7L3YV8Wd2lFFBcXbJhuZ7zml57Hhv1YNuZGDI8SH1+rH+qucbFtf4057JWebAQYUrAX+bEajPaRzMtFfz93d4NCvk2gZEA172CT9QTBoN7LPaU71BtF7Vibm9vPrpepBv578vct7aBsl75BcADGUf0yyvcfSZqVmklvYd7obHl70vZveLvf573ucvbW+om7OyBPbk+sbYZpmR7vhZ7qJYWbAu1xCDkbET7uvn6wS7EzzDaAz7R31OCT8RRkEYEz7HZac7aksHOVvyL7g+B4unnb4lGRn7ixfcmDPjvCwtuqe8rxW1uhbGhiYXc6LV1eslA5n7i/cHdE//xb7EMGbA3feKldfY9YKffz76fcn7Vq0HLnmvfJkEMr7piXS1jUVFARfbz710sWKHlgb750u37s/az7UWvoRuvgH7qfbJSyfTC7U/cK1dzQz7pZkeovwiyS6/aYFh/ekVj/Z37m/bN4b/YP7JfdUb9vFvES/cq7L/Y6LVEUv7c/YazncEC7V/Z7UEA/LAu/ZSzMA/nQcA8nYm6z6rz/Z/79Pc2zmJHvmlfbYl/vVWbzaWlIe0UQHefb8zWA/cYV5ISCPajIHHrG77EWZQH3vZT7uYr6bdHptQ0ZXlYY/ZSz9A+/7pwTBcl6VP78/dUiN/GTYCs1e0n4UwsM0SQHvAcGsYLlgHH/cnY4g+4HDWaEHig4D4Hp0+IyfbAHeZyE+ir0r7OHSZLemwImyq1MOxA/JIjfe+zd6SMH2A7QHPCJNN7debSy1S6CiA7v7CvdAbCypDCGMsQHgaGr7w9elL9g64+Og7+qR8R4m7g7HyRfa8HTkQcHybH4HZk0iHKg5d4/g/cY0Q55hmYYgI4xBoYj7BSH0vkbk5at/7WImijqQ+yH0uzUhBQ//a5ncn4xQ6yHpQ8fYXTVSHnTJyHGA9ktMuccQ5Xk2gQmbidPlxqHKCVQomJAyufzSI43UHw4r6G4SylBaHfiWiu6qAiQ5XjqHIYoYj8QC4jqYFaHwUYSbndImH0vmmHj7FWHqYEKHY2wqHcyXP4Dl02HGSTQIZ6aJb+akbE/Q+OHDlxqHlSSOkOw+uHhSVuHx8kOH5XjKic1bOH9w5/CmwYOHl/TPCXw52Hzw/Kgy3Y2HPw9fC4LcHTm9Lh6bmWp2Slo/eySHOHkw/KgfaXWz2sixQrYBniiO0fYKcxGHhgJ771jOKHzCTBHxKPlaQ5ywy/mEkzjAt2Hnw6RH1Q69lnw6BHShLZ5LTXEyrwNywjI67qsZE0JuQ/IwyvOdKlkQ7gQhMoEwTQ5HHWetKu9F5HviKOBb1kyOmRD2inI6aLWbCfYN9J9Iwo9ywwyVulKo7zOuOhJItDX/ysWbZdszYF9g9X5HZWwGsnzkgauo9VHNDBwandTNaYefIxJjENHPYteB0ANNHVMptHZg/M4ao5lHLI/zKaMGBLso5FH7ZT+jjIvdHaFUalNsAlHco8a9W6ivFfLqdHko9s4ppTjHfI4TH6T0O8S8GVH/I6a4THXBCgAqjH1CYXKbI/vaOLeOw/aty69MTKHBXDFH87R5cIlZGedSnLH8VmS21Y+LHTY7Ds0o8o6JY7THVSUg6tY+iSDo+K9RSD7HP8y1H7lwHIs5qChA46vK/mHisJo6tH9ZGGNlo5Xpu7XBbI47VHnY/isLo6tHlHXBbJo5JdrY7rHDZSVHG49fLive0JE8SETSZEK5+LsceGCtwiJdF7wJ4/9bsfrllD4+6aV49hb/JbfWHW2DHO45GbeZwoFG3MY6KNalLkFXUqOY+WV14+fHEKUAnbpuUlCNZQcwY8bHp49OHyGnTHqHns6FY+zHE+GQnlY+5HRY7XEOzee44ILkVDQxi4zY45tZE7/8VDkFHVE+/boo8onhE+PmUo4bHTE+onrysVH/vtaG5E/qwXo+4n7E/I9Phm1HC4ghpk4/XHsXOxpc4+XHFeqOKS48+cvgzKiArcBhU47YnIkffFo44M58CEkjShL4ndHOYnvo+PHek4En+7YAw6E/cGahLDHq4zonP81jHprIEqak/ClshJm4SY7snK1x/FaY6Qnqk7QqLcncGRE5sn53nRgvgwca3Ofg+YdB8nqk/JHjyVbDGY6CGwU7QqNDGiGbk6HtYmWvH6u2ASWWSEYqU434GiQyne9aMo6vQZ4OU6RtfdFsIMZEKnjoWwbaPAwyzs2RkuU/wk0Cbt26U+KtJk/WpLXXKnqWRUkguQoIdaAqnwm0l4yrrrQDaIhb+mVF+fhB6nqWUba/U75dg07HaKknvu004TEs4RY7o04JWtU8YVXrepMULAT4J1HLCk066nkfDWnv1TKOVrkOnYHS3yNlu2n19GKnKdF6t+x1s8JWUeOt05qnQ05UkXLfbGWigen39z/o2x22nr+TiY30+hO409ynryoII0zkKnV0+IeoM7unRU8qnbbCOkAbHandU9E0p3kghQM+anqtb/UIBfenEM8/CKM5OnOM84HtxsRn104xQ6VGK9aM7m7m2Z/IWP3unTTKBTFtLJnQyYpnJOZJIm7g+nravAirM8Kn/k3qHexcBhjM/Kmh06Kz1M+tWO08jVJk+NmutvBnhMlGzRM8unMs5SzoUhEOMM7EHFPnenvU4RzPWF3VFM6KzZpnHrM07BCfmb1nJ05engGVvMJ09sI6M7tH/M+Nnv0+Cyus7Vnv05MyRs7VnhU5Gc1WaVn70/dnSg7pxbs4cyPak9n0s+BnxeY8IRHSDnJM/bUxs/DnsM4ejfkBD+TU7DuqgFMsxM5jn7MbB6J041nwann8UrhVnVlweA74Wjn3CGznhc77j8KChGFM4rg6CgyMKc8nL/QHelBs7pn7Q+SQVc/VlzM7zndc+ynps+DUHc+5nS06RNLc8IOQs4BjHc+2nPM+gncHgHnJc/xEZc7ZnBM6Z2anE1ofs8+n8/F7wi86dny89pZ8aFYO3VjSQuC0oBq86QBdaHdnxKy3n0UKPnUWXec1sDPn7aH7SPXbemC88PnN87NSxKNPnfizBCZqRPnQgoOnN9Kut8jbXnO8+9nqO07qPVx3nEM4LbmCAfnq0+Pnj055QaU+2svrvqnTQoZ4iLVUQ+teqnyC83yjTVKnjU5QXvrvPraXCr63VngXWC4anm7mIXZ095UVrlwXWC/2nGC4cQfU/mnCKxLoFy0QhK04T41C8mnjC4wXm+bmnULGQXpJ05tHDetqbC6IXvVjJmrC8YX7C4EXHo61MK0+QXYi6wXlC/kXwjeSnKoyen8i4qg7bXUX7C4UXZ09O8d0/IXbDDenyi9QXj0+MXOi5UXKkl3NG/GoXDWZ6Fzs0MXk7HsXdC9MX6T3hngM7Do9C5oik8yoXmC7sXslhMXCC+RnPi8CXqi9siN6sPGti57UK4EiXfi4RzIs/YXVBH3aQUIFniS4cQLM7S43C+9t0A65nUi7hWKzpL9qS9EXKi+FnrM7yXWoT8zMS9CXss/7LFi9cX4XqlM+s7CnwAgVzns8SXBBZOzbS6IXhmBzd8Xfizts+6XHS81n2tyum2Sd6X4hbcYP2nKX6boRzTF3SWYy7VdKfv6XIy+mXMi9yUSc/jnji49Ucc7Z4US8Jj6c5cXQS4rkntdXWey+NV+c8+hWy8Zjxc7qXeC5J12rPLnni/qXQQknnaS/qX25ZHn3S83zP0wHnby4lAC8e4SNi6SXLji/4HfwWXBy1+XxS9UQ08c+XM3GkXJ89mgDi90X7zhnn1S77jV86lcI2S1Clc8eC186xXgi9L7FHEgXUi7IWPy9xXfi3xXay7OckC/4XZCxxX7s0j4KZRZtm84xXUi8nEhDs0zXt2JXRC/GIxHXRXpcExXvK5ccr8+QXBqwJX1s8W+2kBAXzk4cQ4C57ir8/YXYq6pXQCWKS9vQ/44rEi4+PGKQauHQykvDwnatarYylPcyeq61Xysk08qL31X1QkNX5Dg1XY7dGE6+lN6CDBoYIDdA7RnmmW9MXNXJq7YYVBCaquq81X3x0K5Ahzk8+KL1HVZtqEPq7wJXH0i4k09iQd1XQynGBUksa7QEbOH59fU4jX6q+dXMw74RMUnhUPXxTXoYBjXulBeEtq/+nabmgCTq/qklq6YkOHRtXdpVFd+EhX7lIhLXFC9e0Ta8zXKkkbXnq/9XX05rXXa7tXUeBx49SItXfU5WNulI5OHamN7idQsmLIHVX17j471lF+J/ghLXQfaFd5+AzXY5T87G2bPGjwQew664nXQvZdqC69JaFa+jXAa9Vwu6rUy0xEnXI0796B1P3wG6/nXQxFD6l6+GIeBanXo6+DX/bXnXH64vhisX+juYdGjUFJlewa71X869vXzKKqG/67ALCcZvXyN2ZROLmGI36+A3v671XK6/A3n66Pak06F5Q64TXbDGpIta8Bk8feHYf0juJza57UJG4GRw65SzSQyHXXq+jSUMBC8VG7cXNG4gEZG/o3Bc4zXla/AHsNzERTG8LSTWj7Xd84AqLLr8I8a4YwRWc76CDr9XW/JSzFTgoIYm40AskQ8hrG7rXQLYgyS1S8CnG8i4RWbk3eBPzXm66PSkm9Y37a+gHPG+M3XG84HxUHs8+m/PSBkGvebG6kHBeWihJ67HbDczs3gm8GzVm483Ac8UNjG7o3Ug4LGa1Mr0hG7XYEtfs3Jm/SeExG0sWm9c3EqjUO3m7cXgW9o33a9EEQBb83KW6eZaFgbI5m5S3jMbhqkSL43mW+DiH1ONXuW55jMiGc3pW5dXwCarjxW6s8Dm7y3a+By31W6b7uiFBiIG7K3xy4uivG/8325a8C/0oU3oa+eFh0RVx0m/Hn+almTNOPcyuG+DU/W6bXqm8nL3W5i3Wa+7hk28TB+m8xj3W+a30uzGTeHhc3Va9yghBHou6q4W37ziKEheLkYGW/uX52+TXEW5XnN24S3xqqO3JYTG3OK7WiTiMK3ETrY4VvwQY+6GROd49vHEC71mj1Mu3Mm8KFXMxB3y69bx0kOqmCsIFkJ28I39N1lFkO76yccZ8HYE+bnmeB+3ug1FLfcbn6lW8UNDGErnAYIuRn25MnlZBOwpO/83Ly6x3H2963xef+cHq7Xygie1EJ2HVK/LBh4Zk1fMAh0by7LGiS341EovO853wF253TI88uwu+TEUjt5H4u5LNIu55W8hT53/gQHCQu9l3cmooOMHrjy+/UF774pMy7l2wKfO54m6u64n0XC13A6SN3j0rg2am4Aquu8Zl/RHV7QUPN3JjUt3hu7BCZo7igLO7bQMQUNIPnA93fnomNgeS6ClPZoUPS7vFdu4O3nYhD3Pu4l3n4kj3AhUV3ZLv93Ku+iSshwwn+u+j3QftPIyY453qu8/EGjnBC2e6E31sXjRibDj3MPH/+xe8l6oXH/aqXafCDlD+YUe5z3NCiFc4eV934XtBQfzBMa1e4rdze+Z3MPBddze4QKu9vHE95zvFolnKrrysZ3cE45OxydVQk+4ckt5AVWEs6PGMHsn5C+/53Uu/taa+65306Tuqc5DD12og33q5H33cu9R89ZGiw/O9d3gKq33eZ0d3J7WpOJxabdgGAHCenXP3hu61Yxu9Xa9++1E7+8K6KsGmF2Opt3LEmn3K26/Rt+8rImEyWHqE6o0Nu6P3p8X8Cp+6APx+793VBFmVEB/HEse4nIwB7MmGiVmCsB5n3AGBwPZ5ufmi+4xnQuEVKk3DP3cB5nQSogwnA5HP32B4W6qvTEwSB8/Eme8n5e8RuFpB7rEbB9faX+5nQ4XSYPoUGvo2B5u1NxvYjz3EDU2/UoPJB65H4WDn3TKvIurO7KieYm2cibIZ3O+9f6x5i0iAu9LlUfEpo2+5X3Ch5jZsWB0P2A1UAsLugP8u+moWh6V3zzgic+h5v3P+9Boz3xCnoB8v3oNC0PkU4hS5u8kkwH3DKPh7B1GDx/mgB55V5Fz3Nj+7APHHizuLu+V3YOsUPnu6sPcR7UPS+/IPfLuDVQR5nQGB+DV8R793ZphUP5h/QPeR+sPDh+QPFB48PJR8/ENB+wGNh7JdPB/KPxh7rEA+/qPk2de17e90T9h9vEFboEPs/RcPLru6Pvh+zQ44n6Pzh5JkP8z9Q6NBGPnR5i9Pe+f0dyWRH2fqaPsx8GPM6DqPSx6CNvAbr3aR5tQcx+H3dSlf6BR9qPex6MPGUWGPoR+SPXB7foa9DRmVBskiPAyuPJrSDyxgqEXoDUEzLS6mNvUWGnJ1XuPuhoDxjbVePM+t+4uOPUIjy2uPxxoex59YSAQmnrBndVYyb2HwK+nXBPSDcAQPPJuPQJ77oyJ5J5gJ8c7sh9skndUMoWJ9SbE8WR5BJ5AOe8X8kEzpTmYuL/dEiopPF3hKtj+ShgNdqzBwEy0L+aGpPKGfgQ4rCFmkpLadXgUWmDJ/JPkaTpPzx/dAP2SENbUlrS+g7ROop/koX+qadstBcHHbtLJuynI6nDpV2Na2NNApbZPRIYjFiTh5cEcbfLx+ztKWinMc5YWx52O0ZOoxTFPnDrtKLYG5Pe/JpP20lxYVJ9j52Tv1PpJ9dPnUl8E92puKUMC0cAGWAhVaTjTzrlQUw/SDPntqrS0aZKtqBFd6Giapt2mw2nU1n0gcMkjPBm6PcVgXCyAMlgkYaa8YJFmDP2Z7eHf/R4Q5aYLPt7R+FcMlLPVJ0B1baaPGbD3ZpnK8ZqW6HRgOag7gaZ+viAkIEgBKmmc+g2tYMMYJmOZ8i7UEAEg6albPVg17PcMn7Pip5q3rTCHP5adISiJuH6pcFnTi/P+cOw6RwnJXikpGQcu65/5kMzN5nhp7+u3gUfHuMj9NP00kI/1Sjke5/G34qiPPxCdV4gw74gWKH+q0slatPMJGmbGvik8rRvTj5/fPo0jFCISRxPvcl/PM0i3Pd8hicIF/jRSk8W+wRSN7qMkDXqdeUtcI+zezZ4TEkF4yuyF5mk8F+qHs5j/PWF55hYtFyVm55LofLMkI6jtQvAF/lHrItIvGYX/P355Dk1F5fPFF+jHYuztChF9YQr57Lc+jiBd7F6YvBY6zYmQNT3zClwTTkQEve9AII4+8EntMnI6DQYuAjbqv2aV2lA6uVkbhu+DyQbZSQsl4P3XHj3o+KTp7zF73wQrS6dMl6IsDQVWCskpT7ul74v+l9MvO7eEv2olSMZRfMv4VYSxJbvPhd9Ba6EOvwH9ZRcvPQatWNbpF39l7yDeRjW8comsvZdHcvYx9GssF8/bomwrxapurr9ZSHpFEs/bwl+jd4JKSvQl5jAX48z2BEzSQE9NfkyYGVXhlvIxcc3SvAh23QoE/L2OV8iv2jSKS5BhddjWGyLZV+WroYiOK17bmDGl7JdrV6jLOl6ciYoXmSqOQ6vdobXqpfiDysGrciVigISiKJwdsEkBWbSmgSs5YK5bkSENbSkmv8x7Ocb2E76VinmvsGp2bW163LRkdUQGXYGCvZfWgh1+LYAkXQHel4MBZCwy7F19g1vlk676oMMDhK8SjcUCdmN2bSvb4scn05revXdaswkkSdLyQYevHlk+vvTjOvXmGgTAUpZDOFGLYx19HLv4VCH/EH2vIp9+kvkC2rcN48vDZ+6JaN9GM5ZQNPyw9H1MN68wAN/OJf0lQHd1/b1ZN8fSwAO8Hq5tFkSAJGvdwd2jYMHOvHZTJ2+vVdMbN5PNZrxqJ8UgeAL31YcPN+tUP9oKXrXy1CpBWrkMQ3Jt6rodNQt6jkIt4z1o7swTkHIFvJjhmQvN41jILqsuavApCM0hO8qt6AsMzKhGfN8CdpaaNvyt/5vLjmG+w6Zmklt8uT1iiFtwMLIannc/0SoktjzzCaIeyYdvf56gg3FsNvjwWVvvt7CXN8YKgjcY9vVt8rzzMfVvTX0svBgJTmVqxmkIt5ZCGRmFvDeoEHhoTBcYd6Dv75nyoet6lvnkyFayJdnd6TBdwhd6FyMPBUbDQ6NpgmaPaNpaQ7cxbLvDQZKlNe8AiNd4E2gIcTY0yQEhRd8lkKE9dX20KZKRpZAkJd4vrr2jLo8anD36k0HvUZdO0Fef7ppLOLvfd6mD1iswYvgYMgxje+vP2uQb2t1roE966lq99RyalhWpFTjHvDQaPvYSptEUZd7vFeaw+V987vj4tvvdd/+3rJ9El7kBqvFd5bvC/fcg5d+bvkqW/vZ5epCB54Sx6kr13Iqnrv4hYDEkoiUv4nekVt97GyfzGhL4xCzqyh8rvV1/t4SD6jL9MQQnGGgwf498AfBN98LuD93vI95AfQuVnvqXxmQnJRkjqaTxxxNAlYqFZbAAybDEhcS/wc6QW5dD6vwuiKnPrW6G0e/KxbrD509jKkxIVD7BAa0cnv6cE/9PgWWsgj9/5oRlJbqaRvLkj4UjND9swy1hPcyj4PSVd5IBaj/KJBUfcWoPJLouj7DofNlrhhj+TYH8qt4pmjkfALfcWtXIL9iLesSg1crz/CgKjjj9bhBUBi5BUaOKIB7aZt68Gdrj5DgRPNfWALe8flCA8f9D8alUnsKFWaj5YaLd+4TA/FbofPCfcT5QyJVbgUYLbPSRqnSfdbjcflfKIiEbpy2k7tW75eoLUsT9cjjj/9aoFEXoFOiLcMRlbC1T7h5R9x4Dm8/6YPELJamtmQjyHKqfF4WwoTT+vPNWj/RskyYoHT8rn/mAp09pZv+Fx470A3LqN2s1Z8aFGOyionPCkz8AvoBhmfSz76y8z91tM+VqfKz60fy0Qn1J0l/yGRiJDiv0OfFimwoyz8gP/d9P86XosUiomnrRgV7iiz+wojz8Ka4BqTowpBmZXmmzCnz42frhimfrYQYVXz6ufCYQVYcPNBfQ0xe0BrAhfmz4TCvanhPcz8be8aAZMgrgHlC0jBorJgHXWd1hYe4bzR+T5YfMphTmwbqbZr5VzwEE0xfhL95p0R8xYa7hhswjcqMxL6SkBL8qMGR8BYA4xZfaikqkiRxRfuRnaouL8reHjSxfnkl7qC0iFfDJkm4pegCYf43rBwjbUUkr87mW+VJwvyQY4ocxRf8r57VJEWZYKo1lfwr8lfSUkvKwr+5ftL85LM4yBihL7GM/WAqQSr5qQNr86O5r9uM/WC1f5g7Nfdegtf8rsVfoaFtfXr/tfbr9GMixWFQzr63Xvs3czFr/ZY3Rys2ueGQW5L67Rob6OMeBk3l0r/impR3VfPJgTf1+Sjf7sxjfS6NTf0xnDfib+UYg0UnMaL/bac0XVQYyiZfJr8xdgVJCt6N6NIkwMjfkOGjfqr4FaoKEGj2L92IQb61Me3cnM9b9Lftb9ZfOL6rfAbYHfXL/5fNEIx5hpnHf7L/TPRb6nfor5mac762v2/QFfsBfmG/Q3RvCr+tfPr/K4Pr42ac741fRUuHfKp3lEk5n1fMrQ3ffL56eP9F76p79dMAb72Gl79GMRyRbUSb4zmk1XVQjr4jfZL6bfWb5bf1ww3fz79CMBb976RERtM8rpmpbEtdMEH+PfYDcCpSdHbflr+/fUODtfu7//fqBAQ/W1fisTr9g/zPUw/XmAffF7/Lf/r/j0q79Nf/PVrfRxlT0hnVJfSaFo/mrUA/uxhw/M77OcNohAoOa98snFgEhOsrTczT4idMHtWV4up2bYrcQv2hu4/qeuE/it8UaZBV4/0uwE/JPMK5nH6QN4n5d1MTxdvoKUE/4oBzi3D7PMYczh5bLirFBzgLe1BRVwaYtWfQFmM/+EuDS4HO4uAxbV+Zn/2fFHFs/CDq0/sp+JRzn6/Fpn7bPHU2c/9utlPS5ks/Luv8/2t66geTU+6hn6AsF+qzyXn9LTUX6s/vBSrTavDC/Bn6I3kLmnSUqQ1ETZ6XMVYWRLn1SifxqsnpuX5S/LIQIZ8X4c/aD6xEhX+i/1n/osGsSzyMNk25BX5Fi9X+C/QoTCQyJfs/qX7jv7X+q/CX8XTPX41EAUy6/k/BMiVbEG/fX6FUfeAqaMX8ITU37K/4HMm1IrXm/HV1bDcMryU0l/U/i37W/nX6Guq35a/5HTZUc36C/B3/dhN9IqaAU0a/PWkUNeTU6/62PXTy3/VU136+fxX9O/hce0oQ3+kZDaHG/5X9jvk/DY/xJ+K2T7pMc4n5a4c7bd1pjWIVmQFQ9nl7E/nqioVUP/6fRNnk/8J4R/nFgh/QbXmUlM9kt/36oVgP4QvsI+0NEP7lamP72TgX5N54t4C/en5EV+X6eZHj/u6E+piCNn7DmQkEPFNP4idHn7lawFfc/zP+MNjP72TzP6DawFcp/OQ05/citLToX8BVoyxs/cX/Xlvbu1vMv8kVjP/fMZ7El/FP/l/SNzqNWDAi/xFhy/mv7+Yw38q/qsKtaav6FCRv9l/bP/J3uElK/5v5s/zX8F/Yv+1vdv9F/QP5OTkoOp/Bv73YJ2F2u7v4+Tbv4Lacv4auHrXSNUv8O/Y35t/rCaO/iv4D/ZCejCdRr6cFv5evRVy2/8LS07+P5pN8TFj/Nv92/sf/t/Lv+u0Qf9z/WP71hIdPolv3DhWUp9E4QvwGgUf4XdJqe4gNv6yvfjzZTZ39nl4INS703ODS7sUWNme4qvOO0wzv3FL/aXEl1DV07/DYgZiMj+GmwvBeirfBN/7San/wf9n/E0wH/xv+j/pxpB/KbNVgOevX//ujr0he6KuyP+a6dRGT1Kn53/dRCk/C3UDZu/7R/0n9gtJUrd1J/+zZm/+T1RP+fNJUtJ/VP7nNdT/QGH//m6cL+1vZP+jIP/8hQgF/bsQgAKRNDn8Hukw6NP8AI2WoHn9QAPAIfn92iiR6KADhf3u6VLgUAJC/NXRMBSRfTUILODg6SF9nkwV/QACv/yAiJYE32RGfdX8MvxTZSYAeZHpiJb9qANIGUtMzfy1ZCgDTf2t/X/8AX3M/YixmAOIA9gMgLCd/SACiQ1LTAQD0AKEAmSwBv3gAvZ8Kv09/CQCOAL4A4ixZAPHNTgDKLwMBUb82YiUA+QDhpgL/SQD6JxoTbQC5AJ5kZP80xDAA5ZM9v3m4KACaUTMAgwDs/3oAwQCVAzG0SP9RALX9EnUwRGn/CvgSAI8NfewNAKgvA7Env0//QoEHmhgAoX5oYl9ZTBgxnjO/YwCPAKuceNkCAKRNak4f3Qe6TRUIZmiAnQDDnhmceNlXOT6ZCekvANs8H59yIXFTaAIIwCHwNvU+alDCO6oigMHwPdtE/1J6MoCbsx7pINFY21qAkyxKgOufac9salqA5yx3IFLfAoCQrC6AmCEegOaA2XtPOwlqFT1d0HqA7Y08pxWTcoD2Q0GiNqpGJzGAsRddAPaA32pefDd5YyEh3WcsVmclgNVYKwJ3/CKArYC5gL2Am940uG2AoJg7TlPcIoDAXV36c4DdfDpVCLtXlS4+Lj5nLBaAyXB4gxmiYoCqgIlXOWVuEnVYEywugJhHKHVT6F1YQYCODVw+N4DOgLAibgt11QhApSIRTx7wddUQQM9bQIDYG3hArj4/gLQoLw8nwgqcSSIMrBloDCUKoD4wZyoSgLk1DfZC8CKAtpAPOxROQHdUlhWTIZsbLk5QO85aQJMsXeh1pzbrchV+kkBNQl8VyTe9EkDpxHKjexhWQJUue01/HkhQMkCDTUkwGQsBIk2A/89dNWAiVYDGpRwlAkDk2G5Aue85QJMsCkDU525HDuA0Kw0IBb1VR13CZd0IulDzFQCK2A9OfiJkaiNA4id2iCtzXCRk9h8A8QlrQOFLdmgEQRr7OtwokGFLS0CytkdA5GpnQOIeM0CdQLVMQtVktmDoa909QPzKEhEfQI/sTUDwsEMfAGpcJFtCYh4q+zs9N2tjQOkAmMDcBxI9S0DsxxGXUMCRBFeVWMDwamNBAioj4gk9IsCdJwNA5+VAIB7KbUD8T2LwcJ0l939A2sDAwNVKd0CXyGbAzUdHQNeaJZANM2YHE0pOwLJaQMCvQNbArsCOnV4nCsCRwN6dNMD3MDtCb5sXtCrA1UoIwInA8EdyMWnrUPpQKBPCbe1bx2pA+spB8DYeJihBwIAnEENSjTrAkl9YdmxDdSoJkFJadcCtFDWvPF8IMmgoOCEcdB4QcL4hQOYVHcCa1y/IDcDzcxXkB8ConHXA0Qswx3SwSsCtb3SeAsDgIINvVVBVwJb1FFELD2tKGsCcenqrMcDzQKF6MGtywOQgs3pUIPZKYcCMIKhrOEC3QPxzY8QVbDwHLG9m0gFUOpAcIO/AIcCW0GrVA+t9QPQgtbRaIKUJEMCBVUQg9kpFwMIgxiDQIMvA+vp1qx9KHMCWINwg6oC0qiTA09kP6HurPpcCJhEginpnq2AuMCCUIOarZMoivR1VAasbJyUg6SCvKyChHupF11aeaDAeJi0gndA1tG+rH0pXZ3Ugyntz63j0DRx7dXVYPYZxcEDyZo1Meg1wOyCt6kmGDwg0JWcgqs9djX0lZHIhu08g6LhmjUxAzY5QpHz3axR0XxmaRyDWJXrlciFJyEEvYapQoJYhECQs9xCg2CCPql2yNyC4oIkILjxLxT1mYO9bmEojQPIFuHWPEgZhqnyg7KD0hgq3CKD0oKYaDXVcdGSg7GpwoImKRNhrIVsg8iRTtHTvGc96oKt0VqCXILPNWmQLtBFPE4Zyeit0AyBJaRgbWQkBoMl6L/lXDlCGVyDoil6MfQYOoKqKOaD8u27IciRe7yXaBKD7CmGgws8VRjyg1aDGoLYafrIGoL6goSCvmmDSb8oGZAraWAkAIGKg6IpplnxvKA8yskssbLdboKdmQOpioNcKEFxhNiegwtYqihBcanoiQ04IYvRjxnugm59HoO36ewpgYNzqTKCgYNegQMdcoKoJciRIYKeqaGDOoNcOY3oUYMmg+bRNLHeguAU0YPIhBaCLjHYQRSkCYLzhAQYkGwsgrY9SYMubDtoZoNZoHlwQO2Xvd98goJsGJeI6NmGAmmCJoLigNEdvPz1OZmCLKlVwdchLGBJggWDtoJuqaKD1ykjiYgYtag2g/mDS6lFg0VgEYPoMcJB8mwBgkcQ6hCXvWRMS2hMIH6CdZHvWT48XalVg78p1YMR/UVhtYLVgjCJqYO+g82CDVlxHJDoqCSNgqGAoN2RAsaDroIbIGQwbYKy6RWCqDBtgqGDRQFYgGsA9/0uafopCqipgtzlxKU2TA2D7YKVggOCvQNFTLKCxrhQcMhBMCXFAAoFktiTg3ThU4PqwGCBQ9UzguTVdyHvmEiUj4BWbEiCfxxaIIWUCgQCgtCds4JM/IuDVSjjg/SVa4Nkgr2CAJWDSXLB+iGTg6SpOmTMmZtAMIjQlTplwyh7gnUDtcGjAmThhoCHg3OD/uH6EWcCo8ASOWSDphGng4eCCKhOCLPJwYLTg+uChoO5hdkp14KngB4E14M6ZAyRd4KzgsuCD4LMhQSd84KvKUdgupn/+c+CJBXZBJiDj4KBguWF8ym3g72supm7gr2Cqik3gqhx24MIkdmEbJ3nggjpMSHxSf/5B4Ivgi6VvwLRFEv1B4LwFcBCQEIAQoGCu5iPOEawPiFxgq+DNIKzzQBCIukFzQ8DSCkwQnYFnzmQQ3ypJoKxhVfEV1ReKDVUOZx3cMhDyqnd1eP5qEPoMcXBKELfofqg6qC0sBr0gH0FbFhCQqg3Xes9ewOwSLhCGEPd1TjYOqFYQnhDlNlhaF4otuED9JBsbQyiMEm5wtkBkPDx6KlXUZLYau0kQsRCi7HLidRCVEJ3+HCx2KjdqaAE5bBmWZRCEvVXxEJxfjWpMN2p0CRwsCyoPKH3PM8c7/jQocq9WaDsQkT8Cf1M2PRCXEIYwE2CFyjUQ2xDvEKG2PqJtEOkQvCDGYHx2TsgKELDgkdkTSjUQ+gweEPX2B6kKJh7lAA5IiDAOcuUgyV6sbZw/dnSQp0gVYFVgbJCR5Q4QvEFo8HV7OMYWQA5XPhCMQRKQsi4g5UrgrYw8kPgebhE4oLn2RJCuJnKQ4EFO4BnlecZkkNyQ8TAaJnaQ5MlPFGzGH2U39iFabqdAMHSQ//FfJDGQ0GwO5TH2GZCkkMKQgh9vjDjCLpDsJh6QnvYNZAWnI4ElkNcHB14lCH0qZ3YggiqDXf0PexA2GChMGC4mWhQvD2VPRQ1jzGd2NBURg1ykD3AmZ0AwY5D89hWjFXFwgnMbA9d3QDuQsacJkJdlH9YrEgVmK5Cpj3d7dntcpH3QL5C3kOLiYFCrugQdIsZrkLfXIdYDkNeQ0dgK0DlRNFDMTggHOqNkCwKZKFD5WgJWHZCJgJ0ZKFDe2FDWDFC02T7DGDdzkMlJSlD+4FJQ+k9K9CJQ+0Z7aieQnHcYUKpQ28C23E5sSkt7RgDqWVxjT2GQyKDgIViIPk4SUL2GBWZZkMmQ8mDxUJlQyqD+qlH6PzBZUP6g0Q5wSTaQ3qIhu2KFB5CgUOAhNaplUKKFUVCP+mlQwMYBkOAhYvA8pg2Q/Ho6iAlQ6ohaoJ9qCDpwpmVqNhoMaAKQh1D26g1gcKY5kKc8L1DFkI9Q2Rp9RHCmauUnXGsoLVY7vV2Q0GDRWB7QN1ZF+WNQ31wXywh+QFCA0JqaRNDNJh9QhNCZ039QqUY3UmDQ61DimFnMcNDJUMPpIrBs0OPkeJp3UJ2HCtDdUJccbLBIWErQq+lztF12e1CiRybQmtC6kM7pJtCzUPjQ2zBuWFsue1D/hzp8PNC4oJkwayh+0PNQ41VwCH7FEVCR0LswKR1bLh9Qp5lwQVOIBtDy+GXQ4jYI0JTQvIdYkkeXYtC10IakDv490KRNckhdrhUmc/h0oQXZZksfLkhYf6UVUL1Q49Cb0KgmWpDG/y9uOkAlqjPQ3qJ6blvFW9CtVELqXv9X0IT+KCZVcAArKWE6nCTQ9flCoN7QwTRGxhDQydDoMLLQtdDAMIQwoMkndVjQiTokyihMVDDvUKGiHKDvjCww8E4MMLXsXCVsMJlZEU9cpGT6dFD6VgBAgCNyMLbffE4YSCFmYjDAxiRnIjDkcnCmelYQDg39ItDsAyD+W3U0MI4w7/Z6EShNCPYI51BAPWYz23owoVkbVUOTT30CMIRZBdxZMIX2UjDAX0OTNLBTLgDIXjDNllsuHjDOMLSQGokNdkIwokBE0LavAzCpMLIwm8xsMiUww0pPOw2dP+grkPC6RjC9MPTQnDCBXAx5fTDU9mUwr4DJDiLfcokkUPC6INYfMKfQnDDGMLcwzSZJRB+ZUdxQDRMmcLDTgJLqDtRd0J0w2xh4sMbGav1cMPbqZLC5MNu6Y4cF0Jcw745aZHdjOMZsZGow2Bt4CGywyTCeUMFGbLDmMNEwkkY4EEbGATDv7nIuUoZ5xg0wnVh5kl3QhrC8py93fhRWThqwivherEyw0HplDgzcVLCdWGGw5XZPMJNAk+husO0w1rDZmEvMCBFTMLSw6ph+fUXoQbCp4iCCb0YRTViwyZg0kEOGCiYJOkUSY5A1sPtGQ7D621AuRbC2fT6wpi5LsPQwszDAXxkwO3cM3ESwxDD4gPWw0DC3sPKw12RtmBMmUbDpmR+wriYisPrZAHDCLgYwjYUfsOqwsO4iKAYBK7CR4KA5bfoXoiWw77C/egzcTrDoWSXiD/Z/nD5ZOMJGkL+wlLkccO9GPHDEWQJwibD7sK4A+OQMcKguObCy3GWITfYXsONVd8Y3yVJwhe10vSpwybC+Z0bFODcEVjuw1w9QWVbPYlDtsNftCTkDsJVKCVl+cMDGCeJlwNktUIhj5i4mSXDTmS5w+zCaAFftVnDAxmM4Clkt7TVw0XC71U1wpXCeZEZwsA5csJ1wpnCvsLFw4XDTcKdJOMIO/mDiLGC17BPODv52yVtHKbDMTHtwsg5TXSJycMQRGkt4d3DQ9ltGXToVFjmgxX5fJD9w61ZHcMKvMHJPcMeXKpBHWh32GBJaZmyMeWCO6AnpOyRY5n2giA4pUmtwhPDgQSDuS7DJtRjwgA5MgXKOH3DkyULw73C8YPmQyK5PZiXgJ3CpwOikEE9LsJtww7oIyFGsRRpU8OOg8nDfJGLMDM5yGAleXzdc8J7wrXZkDVLQMWY/oJPuPvDLbh7wxjDXxXjwz6ChUIadePD2U1tg6kEu8M5mRfCg8Mr0efDV8NvMWvYu8LuWRfC39l3wqvgB8OBQtFpBnRpQd3C5Vwr2FfD4zknwqnEJI0m2EGRriiJAIOMd7mGMTHVw/jsdBNZ38N2sfTpOFjfw0twZhX6tV85ttg5Ob+EbMIAIH6Mi1kx1IWYECHqyBVxQCLFxF/DJtgQIkA4iQ0eWBVxH8KJyUa1X8LBjO7sYDkwqKNYTpDwIoShGygNOf/DLFWdw1n57PVLYL/CACLVsCNpEtkwI1Ajx1AwIjCIsCOdATVkKPTYI1AinKkIIoM9+rF4I2giKCNrwokB/nGN3K9Zv8K/sUhJQ2QkIgAipkMX5GQjyCKwIgSEyCLWwOQjpMJF0Kul6NgmQCV4Twi0IotY8nDhg74w9CLhuaTkeszXsfEIjZnWhEnxmUMsI6TZIsEsGcAi7CPE2QwihZjsI+AjtnHg2EwjJdk8IkA5UBiyuNzDzCKJAMMR9CPowXwj3DnBedu8P2EJ4KMFfkmUSK9ZDCOjuOIikNlFCCV5h0wv5bQibCJMnIoxIiMm2QJwgiPNoSXhRYm1WHQjjUSGiFbY4DQSfUT8SZkVkewj0CB5gtd8uSU7qFQVWXEqI9fDax01iejB6iKsOC6xJVWiI6dI2DmaaTojhZhiIqw4hiJW2NnlHCOrJSb13Yn6I4f9JgOBwRHD23DTwrxhFiKLw8vCFiMzvMvDbcPGaTbg3cI2InRkJaj2IzmZA8PZguaJYWir4d3Cluj2Iu5YloJlaLYiTiPzw8yD40BwBHOYViPW6Oq5biKeIpBs8VFbab3DVZjYaJoIMzmLwxrCg0RMwjQMdiIssMEi1ZmrwtqD4YPmSK1xG8JDaAXJelneI8+sw63geaPDRFVZYFohMSKzwvLDfSHSWCYhLoI2nI9pVYEeIjWkusMJIy3gOHibw3lhqSKPw/tInL0FbDEi/FkzGBNpSazsYLysb8KZIykZpmxpIpkiUen5Iikil8Iq7P3pYqxLmRqDL8INgsZsRSLK2T3DGCO4I+rAFSKEIuEiFRxVI8TZJCKocQzkYNhR1UW97Rx1IqtYECOvgw0ioCNFcMrYdSPgIwrkB0mVZLbIrSMXoCidYFFYIugiUHGdAOVZmDwdIjsDK839WV85xly3A9U1SIPfEf1Y9SK/+IMjNSIC6GHc7Bw62Q7EWtiIInT9g3zllJJdHMzCI+PR/0KnKZGQ3Gw/YaNhw8LGSJMio1im4AUc9HWdI4QjfvwK4GMjiyNOCeFB1XCrWJgiAJz7kbzMP2GXMa9cfxy1YFrYinBcVOTV4ykm1cMjY0F+QmVcPGhbWZcwkEP0qZMjhZibIvsiw6GGIXLYQyMPA2JMjSJf1ZsjJIJHIn0ihyM1HdWJHyno9Y5AUUJ3A+siWtirCPy9OyN3I+jZegn96QxNPyinImsi2COHIwc5/Vn3IjDpnU09jcCc5yNaIl/UkELyISY0uCIjIujMz8xWiNZ1RyN7wNXQytimAU3ptVmclbMcJE1C2EEFE8KzYbZptuVZcfIinIlgonS5rCL+5JfckKNU2VIj+gixINeoEiKyIk6D6okwaSxYxME8I//5CKJW2VIjh5mwopNwHCJWpdCiPCOnSWB4BghwIhCj+gibrVTYaKNQeHl5ttjBcUwNK6wB2Ti4KfHT5XCiQhmShYAjttlSIl9DcInFwNbAW1lGI0SjMSBAI38Bj1jtNN8CCJixic3ZByNZCYeYV2CQ2cVJLv1chJ3VEthYogDFDKMdWUoitcC4osyi8KPJw5XBdZES2SYjaKLiQTgiUKKMIiHgnKN1IxIjb0Q2vKyjUKMBfWyj2WCMo8yjBJjD9HyjXKIMBVcYFuDbwukiyoAioqIiISJrw0si92Fio4EiNiKCEBrB4rG2IhKiHEMl5dKjaOTFmU4iJIOfpbqA8qPionMiRbFyo5hZ8SLXQ4Zk4qKxI6CjIXDpbTDQoqIjcdL1IqJFI6K5NFQRWYsIFrwB3AMi4RzHQLqiriKvpAajLiNcOSSjqrgwdNki+skpI2llqSXlaI/DYYLTI6q5OqKPw4DgyqIpHSbVh9m39bXE0qMmo5qidhz2opWZ3iLSozqj9qKvpHlwEQRvwtaiK/1fQ6XBb9jDwr9C7qMGosajodyjI5RA8ZB/jeM5pqPjI5Q1Dzx6we6ie8KWony4LqK6orTt1qLUcKHIskIWo16Dj5BzGXJU3iPbwygiWEA+o+GjliMhI29AQaLOo4I0sW0/Ip/CHYCTAVUiqdgJonsjziWmrRLY9SPb1MmijSOtI4lEVF0BWWQiOyONVOmjEthQI1xRiaNaI60iqdlR8Q8Y1CLxol6BkZHtI4gjaWQEqLA4kwUXaG6jTTWWIKHZoCKQNERpC8AZomwdNT2/HWU0DWB9IqCi7DXdmH7YCyKBo5JARaIx2bMjoLU1ojwjSPzrsVWiKyJBtCOEo1lrI3mxmclVWa2jjVQ+iLepzaKEsVkoUDl5o/Ujsf1dowg53aOT1L2ijSM6bV00eXkJol2jkbijWCmikDWcZf1ZtaMoBBVIt6hJo761Q6ONon7tsnCXYdijOm1i/MYYSiM2UKtMXyzoWMwiwqMn4NUxNugMI7OjF0zcYeCxhKOZI2S0dm38mf2iBiPU/GujwlkrovZNy6N0o8IihQlzomDYOKO1vFkh3SMCI68w/mmLosIiGKN+TP6NYyPpCCWjMEA/oP9CS6JEo2BNcMAbIlyjxqJ7iZ5BuLlko6dJ6bgQabNAjSKUonWjlEEGsbdlD1npCadNH8B5ovSi6dlXopDZjKOeTVXgr6KCo+fgD6IA0LOjfKPJwnXo8TwTWTyiTtAcaK+jZpHqo1QDv6MdWX+iHlhvZQBjpllS+QmQz6PbomVQIGNCo4EFO6MdWee039ngY8TYP7WTJZBii1lQYsfZW6ITWTBjACNz8WujWiO5aTG9KkPlBVuiUGOcVWvZsGJ3o3a4kGMzosTAiGOzwrAcEGN/tCA5Rvy7ohhif1nZTQ+iP2FzQyej5QQXolrZ17Qqw8j8O1gMwGeir1hcdNvEYdwxBW+jpyJftThiP7EXol0ZNwNfAket+GINQFtZc0J3w0+jIKPsdMfZb6OYYle0O8LIYCuisyEQYiA4x6MMY5bCmaDcnK+jzGK/sdnM/8NN5IxjHP0tJRxiPyLMY5xUAsLr2amiFHUEwuvYrSL0Y0TwAmKNIlR1B8J8Y1oiVHQCwmKsPGOUYiBDp3HcY3RjgNVHcABiW1kEdTjDUmMPWdJihULgI8hiXGJEIiMhbGJwYlhiHGJCYjBiSmKDJQCAh6KzIHMYg/iqYvOi8VHWPeQj6mJg2Rpi6mKoY1lw2mMd2MhjD1n2wYhjEnz3yCyYCGNjpJZthGMZyIZjTGNRmE8ZFCnQYrMjGsG+BXuik3CmaSDDjcjYY0LY+mMd2P6N01mOLVU0q6yvQrPYF6PTWNpj89knmWCQq1jaY5eis9lkYlwjGsBOYxRju1h5ePej3QDJJPojhjDUdH3Z7mNC2Hl5bclpgejZamJxJX5j4KP+YuXItmMdWYFinSUyY6Ij3ILH2GJivmOhYvBjx9g3IsTATWF5w90EYmJK2Hl519hAYo0iUWP9BbFjImPSwUPZv6Ny2S+9+mOqIufYb2VCY9LBa9khYqg5CWPDJXJjD1m+Yzhi28gJWAhJtFGlI6/ZiWNkorepmu1pkKxjVqnIucmjcGPMg8w9hWIqY4fol2CgeCRiKmMOIvqBtFDbIohjY2ylYwRiLFW66FVj4CI4YrxgxWM1YmhidO2pJAVi+am5aJqZ6GL1Yljsu1n/IqpBnbypAvqiDYL/sTMjhjDVYvLD7WODIyRjIyPZAp5posEEY+RjzWPDEB1i4mKeYnho/eh9IrRidOz9YwgjsmMSaL1jDWNBI6Nj6NnsYpzwuPEanZxjrGOmw+zBjFCvWQVx22gk6QupimPyYxKikRnTYnmihGLawsZM82NTYi7o6k3LYlHohLlVWAyF82OWQqBhFcy8BBzpoOiEYZtji2JZILdCYJDp8FtjIz3baQMD3MK6mNtjIu0HYrWjkZGIgkhiTqjHY8TYu2NGbdmgh2I5kQswO2PgIidjTmycqPnYHIgHYi3Ez6LXY744P6Ab1L9Z/ML4ozBV9MhBcZ3Mr1jnY/djdKAvY4Ywu2MuYl2pj0jafHhi8DD47Y+ZHm16Y8WiL2UtPM9i/fW9ok7BlwFGbAqJVNl9Io1on2LrYrdjTm06SCDiR2PHMP9jHVkg4qk5JeDiNejBQv1jbSIitaNC/PjsUdWfY5g81dFjbZDjvaKYOEGDGYK3aGsJikE0YvAwATjV7SjiDyMHPcGAUOL6hKjjtKVEoXDjaalfYnmF+WDyIhNi0qK446tjOONPvcpjAzUfPCekJFRlYhti9kLxHUTio6KVY9T830GN5cTixmIpHaTjdWKsdCuQt6hwIuks1SIao4EQEdG1WHjje0MTEZAitWOPQ//sMdl4Yk9i7x2WojuAodidYwoUoglFo151pHTZA88D+qNpkaTZMxjUAL9DM1gx2QR0nmJkwMzjNGNuKdC87wlVWHdRa0KTkbjjZWJJ1McoWSBjYs+kzOPi46FkFsMl2Ezi0qKkuVLizWIfQtlxpNiKwZzi6u2qmckhxsmoYrzieYQ26DxcM1glY3tDyuMm2D+hsHQidTWh/8k0Y/sUiRxq45ri3YRS5FLjQtmodCVkuuJK4j2joLztONdd4KOYdTljT2BS4/riXXVoOCnZwWM/EabiFXC6Ysl15uPOY0ZjgJD8oVTZFuMVdVzJ/2L6Y8vdtuJW47RQXXW249Zj5mKIUZr0TuOmYoP11Yk/mfoBZfBnQdBQX5iTBU7jNaT6yQF5buJWY3hQG0BWmGpi7uMM9L7iVtmWYnsCBmJIuf7ieWM7fSi5XuKQ2Tbi0FBKlN7joeO3dWHjuKMeY9GFEeIO4kwBQPQFFJDY/mjigytweMjhYyNDSOIU9XTjxKMW/RcjhvUcSbijHEiB9aKc0eLxQ0/MjY3owJ4JZ2NbDIH1MSA840niJyNgUQ7xaeIm9Hl5cuMcSMniP2DZ45nij2WQDDxpKeIHI+OMSAxv9JniOaMVYa71ZeNQ4xVhLsy54glFtVlqY1nj/Qmpo5XipeJKjZK4+eJbWKniYfW54oFiOWM54ldh7CK3iXD0pmmQI9c8f2FHND+jnuKDJDeV4iKzIe+i1bD9QV3j86NQIz3iUiM/okgi6nGKIlyitdlKCO0o66KmIze8Ctg5UFNcXCI1kGAjA+OooqBiPeIKgNuiR6JgOf5A0DlgY3awP7C947uj0+Pd0Pk5+6KuMTU0eaOvovBiEpDfOZ+jJ2OB4odYK+MVY6ZY3CIL48mj/eP2MR/Dm+Oso1xi2ZjSkC2Cd6OmWINY/KBeRZujv9gH4wvjz6OL4vNAz6KUovwi3RXsomIirjGMYYtj/ePkIgWQGhVj4goiFSBX45c4i+OH4mfis+K/saYhAqI74gpjIIL6YyLZ3ePrUdbJYJA/oo/iC2Jk4U/jr+PX4gDAFbTDopfjBJ2f4kliSKNdA9/i1+JI4nh9dBGf4+ijtfyf4+/jw+I9/GMDTKMyIx/jTKmB3QASwBJk4NUxVNjL45Mo0VnEIt3ib+Oyo17U94ljDKviQEJQEmTiG+NkghASH+KciNOIMKNf4vCDSBJJY3ejNIKsCVkEh+NAg2gTNWLAY2zgvf3zIqfjkoXAIFDVGyNZCPhidwKkuQRjXCIAnfgSf+IfY38iBDkuuYDgN6I4Ewrl6+PNPfs5hQLUozgTx6K0ogDE6UC34sfjbOHEEutj76PzArQS9+InmJQT9BLX/I5IKdnP41hwpHRAo4PiTzQsEl/jS6JMcBWYn6KsE8a0HBLbIz/jCqP3MFwSf+Iz1FwTYBK4/EwTfBJPNAxjIBNgsGJ98yKgY040FYWQo7fihQhMrbQT0BMk4yXl1zwAuHASG6NiE3viPIAz1SISyBLsEiz96EWyEl+jO+NMFDnYabnowagSW03nDb2iKKP//PISmBP0owW8rw1qEv+jC6KVfRASzBIOcLxJ2+Cr4y5MOhJ+2BCj3Px6E9ISfqJnMFoTiBOy/O5p8hKroxb4SWRKE+hi++MoBaYTKhMEE55Nvw3Yo9gShQnucVLjmBJgOBfBKaFTw0M9MMOKSSwTIlgHPeQidhKOEgKYBz1HcRVg7p2OE0UiOXhLzak4TiKhydfDvSOG48/C/eiGEhJjrhOeWaLBe8MOE6eZYQjWmNoC8MMeWNXA3iP2EojCFlksEjyUgRL/4wpjrTFRIiESjMJOCHCjliOFPfCi/kJRE9JZrOwTPZ2CRJUOTaBIiSP2QUiBGMIREsvCkRMKYzMY/8NuEwfCqRLZI4kT9YL+QukTRqK5PQTC6RJpIh7B4NlI0NbUb8M5E3TC1qhSoikSFSETYdyA7ln/aOATopBFEv/D8sFXPWVxc0N5WcUTOMLqcV/CYRN7w5USYSIwCJoSIinYYBZ4A5nQ0T3JpSHmmCjklNGyIzv5dRK+omT1NgTcYKVxjRMmEtnELjGtEzmZtbjJY9xCbdkdEi0TeeAuBa0S7lmdEzXIprF5WX0SVgQLyb7jJl0G+G3YmUR9E6GI5SXCOWOYZjGpyWPlpZmcqE0SMRKT2XyA9ROc+UaD8RLigKrsb8Jq7H3ZsQRtE93QwxLigKVNvcMtE0klgBCt+FlAauwN2SsSpqJk9D5jSxKPwmrt4xIx4Tw4nEK1El3C8ICZmOMSIDnBJHsTeNHMww/oFURzmGYw/SUBkBFZ/6A0AdfYJxLuWJZsxcT1g+Oc9HWTErzCuyUXEycShxAzE+md3QX7E3Q4OxKxYwKZqxL6iN/ZuxJpIlsTkyVPE5sTjxPDJAjAyxMHElTD8mkPE+JhyxLdJZOdLiJfErrC4UE+hHESxRi/EnM4LhM7EwtiJenJEy4SZWFkvQUSThOjPIoVJwCeElk9MxP6bYE5tZw0DVkTGsPAk24iochR6YCTYJILo6bCLOURE0CSTagEhb8TARJwki7owxE5WTUSxsNIsPYTIJLVQ0osfyCOo8VhOSM99ekTORKy6ciS2eBpE2xg/0ToWLiTzWJ4k0GjORP+ggSSWRJGwLLoBJI5E2USnXDU4UxiguyjPFqdiuBPSI/C+RNmYfIjOJIZEuDthGw+WEfCmJMQhHulOUGUk/5wPu3DDO5ZKT1dYLSTpZgVhWESXX0IaXSgDJJUWUkVe2wsk1fDwIDLbZxQ+Fiskwsw7JN4kjST7u0iwKaiPhM5Yu1w/o0MkkkTHjnLibHp0xOXY9ehxkNtE05sYpM8OIsTlenrBBac4pKpOFKSNxOdE9Dik4EGohsSDKRykyMS3nW9bSKSVFkDE4CFydF6WXsS3jhhNQqTtOJFMf6oKtlDE5XpoIj4WJMS7RNEhV7RAYJLmMcSziJakvcS8xI8pGRBDxjSkrxh4tWGkpKSYITGkq8S0d0TPKaSPRNB+ciExpLPE68TRpOouaaTAJIsaZ5AKtjyMFaSBui2k8aSPxPMg/aS7xMG+IQg0Vk3cEaSFiPOkk6Tlegsg2MT7xNfo6Tt5KBokunZU/0LEj4Sdh2Ard6ShRPjkBTJMCXeE9ETVxNevaajH51VE4HC9SHMOACS1mT+kyyTfhMfYL6T0JOskwtxjsknWH8TvsMmqSqi4ZNVFXthExMokiVlBdSPmUuBaJIxEw5lyNlDWH8T62QJk0KSGiK+FNaITWL4k4nCrVkSkj6TpmUxlcw4GRItZJmTRJM+EjqYC/npk3yTxmTUhSST5JJJkxMABITxmTyT62WDiemjMuxImaZlpZIJWDrk4JLQ9WBsFDHFklyS5ZMKFdFMZZMm1Z4SSnUbEXQ5EWk1kpE0g0RBBS4j0EDkvVz5tZMhki2ToYQiIe6TBvm1We2T3xIekpGjBxF6sA6T9RNwUU7wmqnPww6TBJzYeCPInRJCA10DA5IUTP2TPROxhePJapOwuZ2TSpKjE96FJeEJkqqS0FGooI+YzSzqkitg3Lhp2JqTh5CjYKvCU5O3deUQB9W6ko6JQ5OLk5g59xODpRkMXZMdk1eQa5Pmk9qSv3WM7UPCOxPzpJGZQ8KSkwK4W5OWkxTcYFHmSNjUjxL7kqWEoCnjwsqSz6SxQdzDBrATk4X0PplbkxqJLZOnpSeTLxmnk4V4RYTnkmkiF5IFhV3IaSKC6aK5R5KPw0LpQ5OhRVuSgugyuUeTd5IbQXK5gBBjkq+lRghLk0cSy5I2TNbtU4hhDYOS15Mtw1pDY7DRyeDZMkMDBOy4E/2MYv+TTbAAU3+TqkKuBXYDfcL5YOF44/F4QmviK9mqQxEFdgNr2cBSsQX+qf0Ev5JRYPRAOkIRI0u57zloYqGiV7mwUkvDN/wgUwaw39iGQ2R5s0FIkqgjVkIQ8cbIfTyJAQwiFp0kIfphgQT8oFhTYFLf2DhTfgXwU+FCn60RBVrIyeOeQ+oU7Hlr/LFDKkABQvGRBrA5Q7FDBFIqgD5DoUNDWFww5BNt7ejM/kMkUrkFQFMUUzosxFNZ7JyNUUKUU+RSMhPhQ0RTVIW543XiXU3zQORTv5PXiD5CXkINBdeJZFM0Uqp57zkUUilCqnicUyxTHyLpQ3RTzFPEUvBj/kJNBe85nFI8U2xSG9UYwult7uhRYahSBXGFQ9u5eog2kwJp5ULwU8hSZWlNQpBS0lLFQjJTDgUgUqrpihTIUwBTChP56A1CJQT0QbVCNUNyUwawlugKUtBTGH3SU3QU6lKSUvuoUHVcUrJT1ugadRiFiFNBIwmoSPFAU3Oog0OvuWJT9WMGUqhS2FKbqLBChlPGUxrDTiHDQtLB0FKbqPGg1gT4UxrCY0MPGJZsFlKdcNNDClIlE4phtlMyU/L9M0P21TO4VlKpI3NDUlMOUmVhC0OWU9pSl0OrQ7+TTlLSo+5TUYTyUkeTS0IOU8Dk60NQE6RSilI5wkgEvlLkhWBTW0K41KpSAlKXQrtCmlKrid5SiFM2UydDSYHWUn+TH2DHQ6+5ulMnQsGgO/h+Uz5Sd0IfuYZSpYWxUqZTGFJ/PNEcrHlxUtFSiGJRU2FS0qKNTYYFTlNmowDDP7gj4/0j4r3eox9CPlMeotCwxHlAU0QSAuLIQOSFykJ5koq9GhzAwsR4awl4o9HdKr2fpelTmHnmIpdDhVJ7uDxprzDfQx5doE1uUmLj4MLaUy5T1OKQwjVTdlMKYtjDS7hejFJjeonWU84YMmONUq4ECY1E8CjCLVKvjP5TvMIoww+54WSqI10SQpH6GREEzY0Ew61TZHnbJOJTzVO9U0mMUMIciOZT3OgFcG8j1lKdUzjDCakHk50g640ww+zB3MIUyGkZBMPjU4YFi41E8LTDS7jTU04SAFmjU8EEA1NHcHNS+gRejU4SnMINU2NSiMPSI58Fi1OZQ4zDPHni6cAja1NkeUUZHMOzIm1TuYwrUwJwX7lNU4FDQsKbUwNQAsN7Uw4EPVO2E0LDr7h3jBxiosLHUpNTGsIywqp5DVKuUurC21JoUhQZZ1KHU8tTimCqw91TbVKKQyPp8sNbnOdCw+PZgvdSdHnOGLLpN1JXuH1SksMXU/1SGYLhE3lh4vWGBedTCJM5QB+5L1MawqS5Enm7Up1xyuL6BLNSfiJ/UzNTp1LXiBbDnwT/UhSTxIUuwvNTqYIg0qtTt1MbYlbDyhEg0r9S14gq8VGjE1KP6QF8R4k2wwDTBYKeYAzBINNlQZpS8NMTuG9SAOwuw2DTD4wewlex1nDLU9tTX0CewpdTPpM+wtdS6NOOFCHCt1Mo0oGSirkurdOIUWHbJYHCsIE8eU9TwcME02WF81N7QhjTSNKGZBHCi1PXUtjSUcLE029TkvGmEF4FkNMdZDuBfgTA0qjSZmRCRWxSgNMRFTzicNKI0kOQ6fBeBCNSJWVM030Fq1Mt/A3DfgSfUsBVVcLnUuDSEhPydVnCnNI7jHe1+cM8U3uMUuXFw7zTcNJDkPzSV7lHjV1kvNOC01WNvWUVwle5m1I2FLnCp1IC0/VVdcOi0oDStVSS0lFhx1OfVNLSY1M40t2TyPHAgf+TLVItVc3CWNOXUuvCrcL7eSzt/QTjwjgRvJh2wiIpXcJq0nLskGJJoAOFatN9wlrTEBDg2HW5CqODwjrT/IVq0lBSWtKIELrTKDga0zrS2EDhwphSBkHu6aV47OyQY0os+3hG04EFR2A1QVbA2tNYYnukbXhAkGQ9ctObwnPCttLAwa2YW8NW0pmRDtPYUkcFFtIm07hSLtPQ+ObTkyUPwmIQCuziU00obXie0k/DN8KVeKrsx8KvFZlEDjBfLKfD58N1eU2o4lMB0494Au1D2a/DE3kL8F4Tp8LB0wvwd8JJ4LbTwdIsYxHThtOm7QfDT8N0pc/dzNjM9V60MQUh07rBpuztWe/Cl3EH9L34SdLr+YaA6tPx+CnTrfip0/qxf8K1+enSf1lgI2RYRKmH5cAjWdL8WZ1dmZW/2LnTggU2gSg4kCIF07AU+dIFFVETdQikFfq0rUDL+bCJUH1v46KQGZGrLDn5mdKkIlgj5fiBxeQiCCLh+IHE1bA4I0f5NdI0IhjxnKPZ0yg5jdMj+MnSeCPrQxn4FQN2sQQjKdPfcU0SxCJkBLCtYimkIk3TXdNQI2IgPdNV0kgiVCMj4SXTqdKoI7wi4fnMMK4wdBV5+HHhStOCIiPSOfj/0K4xigIkBePSf1mcIgDxHlgcjHrSmZEHwK6Y/6BMINwjE9OCBeZJYihD01H4i9L8I1YIsrnMMdCwN+PqA/wEy9PcOeMog+Nz0tIjciLh+bdBJtPNoVvT5fnb0rIwiiNYBPOEAw3kI0KA7SkL0uZhGjHbJUPSLLwwE434OiPSWOpRrwnaI2ois/mvCMYjsZARWefSM9Mj450Z6YmGIjfTWgM1gyQ4ZiPX0gotOnyrNIoxxiLKBOZgxiKrSOfST9JzuSTAc9JP0+wYHiMjeO7TViJf0tbSmtPxgj/SuyC/07VibiKAEdbSWO3OIgbdS/Q5TM4ikblAM7HT99JQGAAzHtKu0+4j0qGG0hAyLUIt1W7T42HyUpAzxtNMsdIY8DAShIAynPA4eLpCQ3jO0/VjcFOPeUgzQ0L/0a94JxB204/jWWCxIIBA5sBQM31CCxhoMyrSdOzGbZAycDI76PLjuDM4PLjTLmkJIzrS3U0QhMkjSkOYM0ywsugZIx7S5UyhqXmNhtNC7L6DZSMe00LtOSOEM1Qzwjj5I/JDOtKUMpLDhSPgMngzzWPHXX7TLOyCk+usJDLAM9W40xw1IgDxLdOVI/0YVdMd0vyj4gEcMh3SpBROUuBAnDIgrQQy0qmgTOBAgATQOE0ipcHX013SLSJCMkXTsH3wcWwzGAUF0x0jTGMD03LA3SID0uXSO9Ohscsi0PHsMrZgGy0J+LIzwvQ+opFjA9OgBDMiafnoxDtD2yhKMnXTDO07cb0i29OcM3wzUkirIh1iHpVmLcQsCjJ/+c9CTRz27YIFlBBonIsjUfl6MjicMjLT03ozqtmGM0P5fdKGM/oy6dPqCGozqyJmMnwzilNSSIDpF6J6haBslU0lKdcif/ivkN8iLyIWM9AN6eJQLTxcByLgBSKtryLjo04zqMEuzLsiPGJ50mAyEyPvAzGAafn8mVozrEzOQpcibyLKBajAv/i2M1H4r5G3IySCjyJoBe9DsdRWM9/4PiGDlCcibjMX+MnTzjNHIpwNITM6jaXilyOfIxgEdjLrIvYzlcDJ064zlyMH+EEzi82uaSwT7amiSC7THBLUdeXT4NIrYOij5fjD0rXB4ymQo5vTYHnpM3v4o9KwooKI49Kn0lzSS/TIo0vS5mFIoqii6/j/0coyt1DIo0fTqJ2QmZkyxTKD09zACr1fwqvTEKLYoqUzYHggE3AFaTMtwIV4A9Kr01B4NTJpMqjV/ES4o7vTtnGHmSyjDTNDDVyETTLT00cBOKK3qbnS5InCPeS9MIFHiRn5oME/vKjQKfDWwMn4XTP6CFUydAS9MkyjKuU9M7ZxvTIDMwUzOTKjQkUyfTPfoavTg8AtM0P5k9PSeGGQyCJVwMfSvKKv40Mzo9JNwdyiOTMQorMzdTIzM1VBEzM1MtUzbThCovMyq0I0cG14ODOqoiszGtIwMkeSazMAMv/Sz6WKo/AymzNmolszsDO60rfTCuI7M/rScuwyuFsz+DKhwmqjXtJYMpdDPfmw+N/TmzOA9IcyDqOPMdgypzKpUuIt1XinM2aikixXMtMTKAUDQcwUSDP+0t89MGBq+Sgyz6VOo495gdKvpFajPtM3M+wE2/3PhObAidJ5hJIs0dJfLDId5zKfMugyFdNfQQ6jHtPR04+QvzM/0uszJ0L/M3/SALJOog8zazP/3CJ1CcEqUtbTbyFtNOK99mJZU/RNGzN8gR6ikLL7Mq8z3WNc496i4aJbRP9j2/1PlSGjvEUJ0l8t/OOk7aCyuyFgsjK5/qI1sN7S10Jws9AyILMt/FGiFzJAsiTSTpA1sKsymaPZorEzZ3QlkbizMIEmMlkN+LLuM8xQyaO8M+0CKOGZowIyOdPcEkKhceEf+MIyldXksyIy1dWEs1IyuaOqqUnTeLNEsu6dTdItos2jMjO0soSxfShkBPIzhaJMswyy+BRjo22iNdNCFE81baKqMuT8HLO70+oyljKaNGyzcAUViU/T9zQsskYy7LOctSMoBjMM7cmwDLL8s8R8QrMCssKzOLEto8Sz9LMisiYz6gnMGKtRI9MEsy39HaManRIyXaJJIXv4zLP4/P2i7DN4s32jsrKCskDCHaJeZF3TfdK2USOjYrIjo0OiSrPtM1z5Y6PhMxSybdWqskqy/DVTonoynjyo0oui6FnlMpcxZmKjM/MyyoF6srf54zIfojpi4zLDMwniP4x6YxgEi9Pc/OayhrOFMsXZG6JF+dPTaAMGs3HgUzOeTXuiizOjM2SRqmO2s4ycerKCE1UyDrKLMcsJJ9Kbk1698sDXo86zkPxfvenoNGM8so0ztb0sY00yw7kfown45IkuTMeigAT1MltNfLFuMvnxXTMNCYGzAzLNM/r9AWN9MoMztbzOs2GyobKfjGGyhrNLTBGzUbJksD6zrfnGskpMPGjJM1kz1VFpYpYE4bP3TRljIfh70yKZ8WPJskmz2kxgY3kzxTMa0OmyHrLgYuhjJInp8dPDWbPLiexCHoNBMQ7S+rK5so7TJrMwgYJtQ9iWsia46Zxh/a/YxbIFsyhidpzJ+dHgwFNZsla5O1SAUvayddPZssfY1mMZ+BWz2FJRstmy9VU7wq6yNdI1shFjgbMX+eXsfH3dBf6zLTIZA+7SDUAF0zlAD8PtsgYyTbLJQ9zIXrMYBUiwl9jNsxn5ZUB3wo2y4AVlQbhS9bIEoNIzQQEwYBIzQ7ODshIyBbN1smOyRbIsY52zrfgTs7YSibItsgVxYWONs7mylT32Q9Fis7MtsvfIN30KM3qwzQEYwspjYjMds2Vxy7ISqV2ya1IiYz2yGJLHwvOzA7Nts7YTM7Jbs0TCoULJsqPAg7MEwomyo7JyYv/C3sFrs00SimLr+FOzgmKps4WyR7IfElpi29MtSKEw57LQ8ZaoSnmMYpeyAPBXs1XYhbMjiTR87VK7JCZjudIOhZ1S5/kBIMWzN7J92beyj7OpyLayr7JWBRZj57In/G3ZU2TJ+VZCAWISMyeZH7N+vQgFVgkDgn1YSWluMj+yC7NGKF5if/hDCAVSngU5QSP5TEnqUjHJQWOdM3eyd1PtEl5jj9LNKE+5/7MX+DGU7TzFJAOydAUbKH5jI7LwclYF0bJVwEOB8HJF+Tey37PIc0J8QWMgcpdwKHIvE7uySHJgcgA527Nwc0hzOGPrsqPBUHOrJU8h3ZjKBQJ9kyWrs1CgF7LtwoRzUtCt3S0k/GluM8Rz18MRYn/47JJpYxhzxHJPExhzMHLuEr75fJFZY5ezvH05YwfYhBX4crBz9UKFY9Wy9VQlqYxzx7Jns8nCzHP5YixzTHPlYhzoOfgnsuVi7el8qHQEFbOVYhVjbHJ8QnYCNWO1s6FxBWJscuAEdbLIMwgENMGuA2hQA9OVs3VSv6jjY3AEwnKhqaWETHN/syOoQQVWMi2z/oKTY54y8nDBs6NDg2IdsvrCLWJkBeANknPE6TJyXbNq7bcTg+mlhX2zW7KpIxJyanIKc594M2J7syuzY2OmTBpycmiacwn5Y7J07LpzHHJNs31xMnP6c7OzgRPSw1Oo49Nacpzwi2OGc8R8WRlzYrxzS2N6iGZzQeirYhZyksNrYpJzTm17YxQEf7KMYbZy6HOockpt9nO0ckRznTAXY3n56HJY7Gdi4AVWQ7VtznJOch/1wpPOcl+zLHwObMt0XnN+Uj8zKzA3YmQFAHOabJ2ZCflvskptoOIfs5Ft+fSfEpYEEHOn0+btZzAo4zyy2Hyugg9jGONx4ARySm3g40vT2HPbY9Fy4AUFKDps/2Pgc1D0m50fY8Fz8gUbKIDjk+l5+NRzQmFVXDIFMXLyncDjaXOYc8cwQXIec2ZyDqghcy5zQ6CRc3v5OXOccwjjYgVEodDiaQQFcsFSoJJw4wv4ZHLOI/ly09IUcqk5WOML+JaonphspGjjrfim6GmTq3z7aBjjCDjfJK3grBnlcuv41XIHMwTjIfnic4+Q+OLWcqWFzXOTsgZzDOJ/IF3SnHMgs6Ti/HIlskuD3qKdc61zxZyo0+TiUgWCctdCrXLcc/xzkhxtERQFTXLXQozj5bMDcqWFIuM2c4+QALA8XfWySnOfpONyc9PScrczAuJts0uyeYUS4oAFJnLSo7NyRjMsctyzn6XTchuyKnKJcpNzZ3Uf0v2y3z0rcsn5e7LXQ6NyOnLXPdzi63Nzc3tDG3I9c8Ky7MBbci1yEuM4LZZzwcPuOCNymEIxo2X5h3Ikcoq4dizjOHQFtkCAc4GjZfmdc9VyKRxq4sn5Z3MfYFdy6/n7pIv8+2QWwufSY0EFAlWSUhSncnPT93Jyc/zk+uOt+LdzkcPGycdzoriG47VzU3Ofkkp9GuPloqPAFbKm4zFxQXJuiT9zWXOwPYR8LnMOc0qI/qDL+XlzBJwNQH24o8Fuc10DwPJz08+yyXXb3Mv4gXLm4n9ybnNechv1phF7+P5yZ0EofSlzX7Ln9GWgr/kIcw9B0U0I8ulyEeIVxW/TuHPELAz9YQzYcwxzeA2/dGHDhHIn/Cj0KPLqBTJ9DPRhsWjyZTDsk3ekkZFu2RgFZXM1pLjyoHLskvt0CPMZc9RzAYV/AbTcN7J0c3HSXrRIuETyDHPAckRj6oiLg15iUPEZU9DN3jOG9NehuPN5pemJrvSWQbnTN7JV4zplNPPnwGVSA5KOkXfSrPOUTQ4yCmXowEzzWXMf9VUJGfmm0wXiQLgnXa3539wm9fTzj9M887xT3Ey6IrVggASRma709jnC81RThM3UU5zzZPPJsjtIePVFFaLynU11TWlC6A15CDzyjPORhFzz4XNQ9M8ikfRS8y0yIvMoudlMmPOgcgdJi8FNtA1y0POd433jrrP6sBrz0zJ94lPjszP6sBPj2vJZ0hPj6bOLgqdj80FD4uzyhTPj4lNclTN2sZry09Pr09PjIiNH+Ysy1bBz49aypvKDJG8C+TlQoGmzW+ItgyGzt3MkOECQjkUtMwGyaJWWkHvicXLes9Pi/WIF06MzNz02vZfSTrIaM29YVvMf+OyRN9LxEzmkrvL28xgFyKnuMoaQHvOCBT7yrjCb4rbytdgEgK+FsbIO8l61FPNr4pvjnTNO85bzd+Mv0hmyLCIX4rrz0+KR8lrzgpE34xQFizOX4uHzmbPR84Yh9rOGsuFdGsFm86MyifLTM0HzCfP3YYnzkfMngyQ0XdJxst/i6fMX+Day4EMVYRf4o9JWsiKo6fLG8iLgQBMm8nazeAw1ZJMytTNs4YFITdI2s7uCiBOh8pGyqqkYE6XztvIAqUpguBN8SMHyCuKgqWgSMHJdMvSDM1h+sq0zbOB1837zrwhsnIuiJXM+8kBCdfJu8r7ymFANWFA499Ka4KXyTvMH0t/i+okLDKazHrLDtCHydwIQEzXyYfOx1QzhlfMIqBycmVIQs38jhBIp8m5DzxzD8t3zO5iVo7K8xBPkoUlyr9OkEkHzEbKUuUvZfB1oeJQTGfhgSTny22BpOZc41vJl8yCC9BLLM2SCS/Nx8y3BDBNL8m3UbBMa8oSxa/LR8mvz/BMb8uZQfBJb84WjPBP5857z4JNHZIstCjI587wTJMB+spbytlAb8rvzpTNWUYhyRfN5sUISefIdorITAfJksCoTF/NgTQfAErViM1XzKnKnoioT5fP5/eaMAbIHotfyinL+8pA0shMt87n87w0t8zISMPMN8hHyTHAX8+XzLkyoIZITlrLG48p0kcF38kL9xsDr8oUIehJ/88ACBhIes4rCUhQQOfdBP/OeTEYSW/N0cFYSafNpZBYT5fN/jFYT0zNz8wuiYAsf8mSwNhJX8lDD/hPQ+EmRKDjOE1rTaFDDsqFCkbkIC1eIrhPNCGrSiAsHw74TxtLdUhtTaAv60ogLGMO+E5AzvzT1U0gK2AorYqgiPohQFdV48Aozs3SwuAs4wskTOtPnIWIpacI0+A4xowlpEhp1ftN1jB/dLUUkCltFpAqQDFDDy6EukEN4TxHwCjQKttNmA4FCEROPeIt8XhN0CowKMeVJEkngaDOKQXjDRAu/MmQLgULEOb94uyCIC3Ry9BEsCsQLowkcwgUSqAvICzDCGnSkCnulr32MYqUSrAruSCQL5RN1eMIKlRJV0YQK5RJiC/gLV4maYw0TKzNiSLez/RJq04DDvgWSCjILRjMXskaZy1y7ITILSSXyClQKb+DCgcAj/qmHPfrTgMK9Ezs9j3msSWkpsgvqCxYpvgWDE7D5Ugs2BCMTmgpBKDQjYy0IZG/hlWXjEpsTHtJxCUPZA0EdxBqJQfWrJbSokuzmwHEJ6SQjTIt5cgrtw8YLDzNndR3ZsQV++ciTygsz0ixRodKVeUawrfKlyAsTIgvWC94EYxM600YLOGK3qNzY1tOAw1wK+gpUCyd8z3JWQy8TI3g6CvsS5GnQ+D4K5UWHErYLIrl19F+859gnE495p2RnEt8SlXmnZf0FZxLB0wYzmUPXE2ELAQrV8+UFdxMuC5VkDxMW0q4L4yVvEtEL7gI0IqsJ5kW6wLEKADjeCu4K4QtNEgkLxoQ9OQztgQohCskLurKsco8YsJMjeAQKr1N7VQAzqAs4M5kK1tM5Cp1w0JI5CxIKoJMQk37Sjt2ACrmtoJIvXZwKOqDPUmMBRzPYC3lg/xNiCxrC8JNwC3wLn1PZC+Ay2zV203lgOJLR0+wLpJK3nPUKggqLc5Ww7hmPebQLhJK3nDwK1AvPrT1RvKC0CtUKt202wnb5rAq+gjiSzAtEtQqjTQrHTJV4i33Yk/89dXn0C79SAwutCiSylWn+QKYseQo6ocwy+Hw+xQnTPAsvbdySjQqOwtSTkws0k8MNzQujCvSS1JNDC4ySLIyVebQLzJJMkj0K4O3ckj0KxQv6bMUIjknLCtyS/o0DCj7inmCTC0MLNJP8kgUKIngU8th1PezLCuwKbQrZbBKTvguWC50x+wsAMooK0XKDMIcFqQt2OAqSRwvJCjESbjhyk7oK+vPgUgVoMpJnCnkDJgIyk3V4GgqQkccKtwpaC8iEKpIHCwzsbjhqkxcLMegak5l5ngu8pDS5LwuJC5xyYhjPRSYKkQq38hLs5pLmC9ELyIQfCgL4V+N36L8LTgp6CtVCe2EXmA4LZ3VjbL8KKDNndbroLwv/C0NtoItxChXzAqXNhX75JyCmC161PfIFaC8L4Iu66Y6TADM5sOU4cIuqC2cLGQqtudQlCgsHC8VprpLXCtlztAtpyekKjTn0gI8Ku3Lek1UK8/xiohGS2wrDsx7C5FXwM3kLEWRhknwKyPRRvYx9wkDoCz0LuzLxFGGSOIuhkiGSlQrPpdiLNQu4CrOQUZI4s1kKy3BGaGgyjtyGZOmSdvnPIfXC2ZLTC6ZlSNCENB0L2wu9ZNmTcwo2FUjRdXkLCizTivU7bJpiGuO0i8sL62SMirYLrApQCrERWuEViesKS2W0igyKtZKMGXyoowtMitCLOwozZJyKewqOCu8CKOA1gRUpnIvU/d8JO+hrC+WT9RDwJTlAMeWM5dWTfQvMC/0V2aDwJdBR6AsftA2TADIFFCPzYORm0YyKuyFKihXC8opKi/oY7ZIR0aV4fgrQUD2ScgoZC7UKcMFaiqiKILmjk7qLkYXjyRcLd6R9k/KLJwuYDaIUzwvhhOOSQ3m3CxOT3dEYiiC5FxD3CgCKXDOzkgL4rwuFiDuThtLvCgOTh70TBB1dnwvLc2OkO5KwirS5JZHPeVCJ06TOimCKYLjNSRz5TtNAi0OTdoogiy0BArlui78LDgrLpBuT3wrxCvCCRWieWKiLOWMU2C5YRgo/C+syb5ImitdDl5KWisMK70jdSV3JOtOOHM89l5MXC+ekN5IRi8iLIMBPk4bSyogQiydyD5NkMoGNj5LnkkQyEDnPkmENsYoQOa+SaiWmi/cL7OPvk3SkHgFQi8Hywoveo/GKaYpeiwRyv5J8RQIR0yS5ivkc8wPxC1JC/aTtA+bSdDMTJEWLOGMQUmxEowNkcqWLYSTtAlBToFLoRKMCMFMIUzKkVYuTJTpDtaTDAsfY+kOVioMDBkJ0oNElK8woUo2KsSQlip0lKFPFinmK7cK2Q4WKBYopCu2K0SQtigvDmCGKRB2KUxPEyARTEyVAuaAMP00BzaxSEUMipOfptJwkU1lDrYunDADcCUK9iw5CfYqNIdxTpyzjiv8NYvJ/IwlD7kIjiqKLBVLVBEFDSZWqpQvZUcwwzclDE4thJX2L7FLMUvOLI4ug3ZEy/kIcUnBF16DKi8tYbFLUReuLnFPDi7mLQ4sCUoxTCURbi4LywChzi4wknNQ7it2yglNCRWkFfkKLi0bcSYHriyJS3wjERPAwJAviUxMkEwIcgnJT24tDbFJTzYo9i4iKN4ozi1apalN3iqs8dUOliwtUKlMuo+WL+gBqU8El9YsYLIWDV4vZkDWKLUNaUwlEdYo6UxpTj4p05dEinUONizds66lGUg+LGsK/izeLdIxNqMNDcvEWKLeKOosMsSZSgEpfqP1DR4tTAr5z6SPOUrEll4o76LNCYEtB6fZT/4rRGdBLn4ogS+gyeGmQSvBLgEoLQ3GV3YoQSyky8h3uUteKoVP4Uc+KKEp5s7xw+0Odim2LX0AhU7BL2zJBU9WKT4rk4ttCM4oHMx1Jr4uHM6FTuEo/imLj4VPIShy5kVMERB+LALNLqMBLqTgcufFSMEuSHeRKWEpISolSKNhUSqWED0NDpLMD35HnQyRK73IH7R5Fu/MXZbcCWVI5UmBL2VMmAGBLuVOJAd9Cl4sLVL9DhVLfhSQ0L0OUuNRi4RylUtJFQI3wvFa5Q6R2QBy51VOISifzX0BCSmhLj5G1U0JKzVLO5QlF+GSFQv1TEyWCJU4T9VKxJXYlMMK9U5JKCfU9i4jDIqUwmITNJbNowt1Tsks8gFgL3skERLAdfVLiSzKkqkv8YgBpH4QSS0piNOLoROpLthJTUtEloXHwCjpL0kpyS4IKektKSgVwM1N6S4zSxMOGSwZLZXCY+Nq81ESaSlDDS1JwRWZLR3ErUxpK+kqLc2zDN/RmS0hUG1MrU2MlikhbUxdo0SQySjtSDkpGSwfDB1OqpYpIB1M7UkZKPIsxMQLCJSQaSWVxJ1N2Sq2dIEqZCr4YFkuxI2rCPkomSmdTr1N+Spzxz1NhJFJKhQrKwmxEsB05IsFLgUr9QM9Tz+AGRApKX6lXU2pLG5FB6B9SVkrFGdrCwEoRS0HoANKxJLpKdWFxSgFL0SMJS6FK4exA0w5LVkoISrmR+A1OS7iSiQPRS3HsKKgpSuHtUNKcRGChXkqpSvbDclUypVNlzJJcrF0lHktJ7cjTWkpRS1SSSNPiSylLEErYi5jTNktekyTSiUpi4+VLSUu+w0TTaUq1kkHDkUsKS11yUOQ1SyyIAOOhk1VLwUtFS17CaNMqS41KGcJk0hlLeuIU0s1KTh3DMytVKcM6SwVLEWUdStVKGcNdSgFKDNLcRPVLJUsoS3x1acPqpI5K9hRZAJxF8QQjZJLTZUqTFRzSJUqk8znC3NJjShqzu4Rlw0ikmST2S2LTitJ5S51KitOPmOhFIiFC0iTlBEUiIRNLZOS9KN8kXkpeC1kU4tPLSjXCTcIVJZ1LUtNrSi5LRMNPYfLS/aRBSmzTW0uZSpMUM0p9S0ZK59mq0g1FTbz7EgdKmhAhdDJDytJocMdLekKG0soQx0rdsyPC30UmdWWK+tPDXemFBtK9wqEQznWHS2wD7VyTkjpCas3vRIdLdYoW0nYQt0stizbSdhFedD3D9tMnS751BkIvS2dK70v0Yi51b0pAgjJD2iBO0wrk30tyQ0vDB0rfS+Qie0FV4U9LC0Oe0oDLN0pAy97TjsgdRYpBpbyWXaxSftPAy4gQAdJefU1EYMpB0lDKpsThJCHTEdIdROEkYdI+0zDLyUgR0sDLTUSwylHSSMvtXCDKJFOedR9LrnQ7CiODr9gJ05m4P5KDJYXSmcT7kJcE2MvlxPoC78M/wzXEeMqkIxnS9cQEyvBiudM5xG0Rq+PJYiAjoPhTYLoCYCKEy8TLGMkXxPjKg8Qky1AjxdMS8IDolwWwI+zwgzCUyvnT1dOIJTuosCMMyq0wRMq100zLZMshAiMgj2mV0/jLIvCN0/XThMusyhUhSCJeEbi4HMqd0+3SjMrAwAQjrdO4yzzKHxOd05zLTIhsy73S3cX6GWECgsvCykLLtMv9043EOMr8I2PSmcQnpInIS9PlxDTBM5IiKdLKrTEyyhPTs9L1xPLKU9MT0znEnlgqQ5cL3QFT03LKsIHz0grLSsvzQiMgcspQ0MrLy9LvQchwdvWmY/Yxa9MvxFrKIiKJ2PXEBghb0/rLNcSKywI4u9IyyrCBe9OGgRLxJxEu4jQjUXlFiarLOsuZMZIjjcVSysoiw+MPxX4DwCOaI92IncXVYVfSWiP2yht9M9Nn0kXEDsvLBSTAm8X8HWDK4s3zQdqpNYiYISSJr9Ka0cPE1dFuy5Dkwxgf0t7Lnsu/0rAzq0SPSj/of9K/S+sDMNLfEYHKp0ulguAzV0v/SsVzIDMTBe+1rWPEihLt4ctoyz298gOhyroA90sQMl6Jd0tHA1Az/MEPS79LpYM+IzdLscoAS8gzChCvSvXo/iLRy7tikRiIMpalIcpAS6gzX0tByxkKBrCC4NnLs2OhIonL2creS1kjT0vJytEY+DLJy/HLIuy5I2C97VwIwD7Kw1xqYPLixcqtgaQyFDM3SmXL5DLycS9LlnWUM6ZsoRC7dF0S5/h4aXmNdcuWdbQymDOlEI519DLFivHLJwMQc0SFxSI2S3ZRAnRjClQzrcqU4x5JbSMlIWnFEsocMu0j7MqiymyjXDN9ygLLQsuhsS0i/cpaPEv1/DLjCvTLAnldAqPKm8Uiy+JjSUnjyy/E1Mp9yz3L1HH0ytMd6XngsL3KXMtMnZIzU8qzy/IySjKZxJ/BJMvcQ4Gw9HTLyiJTNRxjImvLY8sKouYy3G1pxcvKv/lMsR8oyCEciaAFYyBbygLVGMi/+XvLiiSw+ReTDCQ7y4wkjpAHyusjCjXDxUFB7yP9i9fNCtl+MrAl6pF2M7sjg8oItQryoKiBMsgg58rhM4fK58uuM98jJCUTy4cjnyJHMM1ITkIXy7/M90E+M4gk98rXI1sjvcXqkAEzfyJ3yt90qkDfImfLbcRslI/K9jLzyjiB98qZxX/Le4vvHJ4zn8sAKjEz18oAKzfL8UItpP8jiiQKg8GiIUkJM3Ik3ZFOCUkyLCRHypkzbQnayooRlstiwakyJsrmytCjJTJGyybK6TPZM8gqSCoxErEygonqyk7LkctoeAUziCuQKp8JRTIYKrSIiCpHMXrKEzKYo3TL8CoeCRUzOCutMjSitssYKl7yWB2kokrNjsqTyrOK5ZWkKvAk/9G2ypvKLjBtM87LweLk1CyZK8x+yiQrkQtoeCnkW0VBnTQrwvTTAQehdCtly04ttCpkK85xfsoTMuyiE8Xeyn4JvKOoKrLLyMB8tTVklsoeCXMzbcXWygDEHCpSyigrgqMHoNbKgisnQkcy+ctrQiIq6cvLMtqjR0qfS5syulGveEHKI8s3pXszXctbQpIq6coHMpIqhcvFyp5SGzMKEM9K4VOTMyIqkVJnMxXKpcOgvC8zCMqRyyQrX0Mmo3DKiMqvpRorSMvJSIkcairFk5or7OJrCW8yjKAqdM880i1MxHJ03crg/Sdyhit1ygYqtzN6K1TERipcS9izdcq0sAi1L0IMHZ+knqOyKq+l1iviKujKpGLeo4tzFOUmKx51zqOCSRDKXwLJDBQTJVIWKqnKliqos4JJgMoydWGjFOTKKrNynir/SiCC2IvYs54rsaLwK73LOlHZoszLAssekxMR2ssTy0SzlLPDyymj5LMUyxvKmCtx2KmiN8sJ2MSzoSuvMYEqi8oKE+gy3IG5ohLL88tpNI1cY8pus/f8PLNbyw9j1PzliRzNiSrnopE0ySsQK8vLHzWSshvLf+JskgBkYeAuMrvLGMnWNVtdw8UciXk1OSuIJbvLrLJGQYfLuSpPNcqzsSpDysqBsKTuJDzL/cqLc3wZirNtxDjKirN6CUrLiIhFKoOiISpDop2iNSvGtSOiVSp4hGOjdSoRKk802rKDxbbSOrJZAHrLfMvl/MYZacT8KjuibSpTYUbKCv3QYrwr3zDls1wrLkx6YngrJIkWsnadXCpbo90rTSoay4iwXSuay5JDafzVswIqCCoOcLWygyoJ4g/SnP2ts2Qr3P2uY8Qq5CsaI0FZL6MkJG11ysuqI56zD6NkKzeimBgUJd7KkEz+kCfKbss3oseQKytLK+YTiyosK3b936I9KwmzGWJHMRdphrJ16VsqUNHbK4Bi2kkvxHsq4viXzHrLgyuGmJmzbSrCKgDLQysbkYK8e9inKkUsWbOLo/Ah5yogODpilysXaUWy/SuIJTd1ZHK9KqPhF2luS2hTVyr3dMFxaGMXK48rmV3xCyMrbcRiCChTn7PDxTd0IdJeskcwECFzKl1SI7MmNZ8rwQQ5BVMrPyuSXXYKkypQ0F8qOQXrK7jKwXCX2asr+MrBcb8ryysgqv8rDvPcyc9DYKvTKou4x7OvKmcrIRNFEpnEbyuBQ5uzacRiCYtK5gWzYSlig8UBKMuz8WJHMQEpQ1PIq5rLxVzWSoiq2klKyxwcm7PcgBQkYwFGK2ApEmPDxNiq4lK7KheS7l1HszJiyCG4qwezzcWXK1OzeKrEqyey+yuU8SSrmmKnKo4paSjnK9aMYDnXspcrlKoBKQMq1KoYSnOyGDkwgTcqu8sv6dfCD7JkquKML7M0qgLUzIxmYh0rTRm0q0ZziCnvsznFLKtxKO8q+Sssqt2yQHM5xemCjKp/KlDR6YJOYnyqc8sri+orBmK2Yzyq0RzuYxCqMssMqtByx5ATyviN/KpgqqKqgqv0KwUlIqtyyy/pFHI0+TLMDoyYU9uzd8p2jBFiImLIIRAEl9lwq48IrUCxY6SriCVE2PFiqqpHMemCiWP0coPEvKvAIuRywqqHi/ELBKt8qtEcVHKyq68Ipr3hCrRz/PH4iIPyPfJZirlimqvyq9ydJgJ1YrCr0KvGacxzhqvXK/IDFqrXK+ar8mF8cparaKr3smt9PHK3KsCqziJVYmSr9yvVYhViE8QfKqrpVqvPK+nKFBgNYuaql2mNY9zK7wgvKuiSynKDxF8rOSK6cznEgKrywr6r3qufrI9S3qt/K5CqNXKEMudkkKv+g4D5yStkyqCrnWKhyYokAxDgql+8eGnBq0Cq+VxnU8ZzNcUssW7ppnOOq7aqpUrmc4xQ1qpDaVZytqrcKpEZSauJqmtj1sGNxbCqjnPecxyqNEoVMY5zhqvUq8+sV2JMqpmqMmGeczmqYYqPqa5yDKuSqw9zxQoFqhdQpUHnY90RGiSREblsWasFqsJLvnPX0DYknKrNbAFyE8SujPFz2il0pQKqlwuqIjghVV3aqzOKMyutqcDiDau1bfFzmqvCq69jttJGy6KrEXKwGLWrliA6qtVDMmHZKpKrvLLCpdtxrardq7DjpXPqqtEchXM4iC2qnarnC+bVA6r9qoWrJbOMIftkDauw4/Vy3auo4w9jvavSklVz0qqFq8tyNGBbkdolHasNquZ4NOIEKumrmzME4qmqBOM0Cvcr1qtvQFTi8aoG4/5T3XLIIbcq5ONrqsuqoMAyuSur9qpZtXjii6uuqg6jg3Npq8uqYqPDc+8qTyqvpdNzgaqJHSLjvqq/K4aj3OInqpGqe/NfQkerAKsnq+ziSmDvXMGgDquvM8uJC8DMy2Gr7OM3qrOqJ6UsKuB0GyH/aJCroZKHcwer26ok0sdyL6tSKnIFj3LeypirrzIy4m+qMrg3cozK+6oQ4HLi9cVCMKoqd3LEjeXEf6ta4nLjNcR/qs+qb3JAatlhr3J1XLurjiuRke6rO5nc5BjLxuPuOF+qluPWydrK0wAiw1L0apCxbJcqrmnlq1VAe/lwa7tIUaHvEKFBEvEyYGlkwPPIa2fL1Yj24yeSZKvwao7jJ5ITxdqhiHiIa9rLxqDDsutAhiV0yzBqJDyeWYhq3snViW91syPNxLhq+3WAEcRq2GpgudL1bgsdKtsAwYUO8bHdhGuKOYTzvp0Ky0hr2FA0ax/FnAN+isRrdGqn+UOS5GqUKxNgaYFA9HYtc8XsAgjgxGtYakRq5LmFoCYKgzEUa+jK1uwo9HYtaGrUa7r1QRKUK0tguzLeM9ntQKLHKMvFwkGu9UcAm8Uoag4yuZSe9HxqZKoYMfCy7/hlykHcceGTPTnj85IiaphqePSh+EJqFmQhQ17NyeP6IIwq/GoSaxD1SYFMa00opDXS86uLtVm7vRirm6rkuWJrTSsfqw2MjjKHELSxxMrbAa71CmrqaoqM6ZV+9bJrVcVCa5GFwmo6a3JqWmqc8+hj5KB6a6GETgnEaveIf2GgwdzLMMFSOI3SJvPHK6MqbMrWax0qJytWatrzmyqkIzrz9mtEynry4ytfKk+yAEE2yrwqRvJH0kQrxvL2a05q/CJm80IqNmtcyhbzhyvjKraRdvPcyq3BmkLSkRYp3mtvqpH4HvK5KrCB++Pks7Mqyssb4j4cu8rCK/YwAfPDxT9ACSq5JL5qFCURa9fDgWuIJRFq3CPO8hFquPiuMHFqHmpT07NUoypsHRBq1uze8jKkwypMK7HyeOieqpwr0fNR81gq/CMZa10qGWqSzZ5ryasF+JG5xUw5aq4x8fN5a2SC+fPWajAqhWu2amgqA8sv4zwqxWowK7nyjmtBMpnzOCtZ8zo9WCr0g2VrCWt586nzbmtAglUzhWpoqGAStWsF8g3yDWuQEycALCR+awFqjaRt8pRkAtVBamgTTWs4KvSCHfJhal5qn+KdajQhEWpsnC3zMWrRAr/jvfNxa42T8wKNa71rFphm4INrvSo+ah4zFfNYEklrAYvnAXW0HWo4EzCYKysCC3gTJILD8q5qhBLBwCfLZssVos8CtT3j8qxIGyuT8t85iquGwJ5jlcCz8+/K7kmHmNQSsCsSIEgTy/N1asvyE/IFayvyk2tbah2ix/Kba3mwu2ulakG1e2qWqWFqrHDb8plqkDU788NqzmqCAvvzs2syywfy6qqpalxwhqg1gAFqQbTOs7trW/MmiFdrtbyP8rdqYhO7GDYleCqpKs/y+Stta8oT92oTam3UH/JPal1r9zCvasggPWt+TNfzmUTRHH1rZLMGiD/zg2sZKn8wd2v9aw/z9/PVao9qrwxja1xqSn3TcBK0J2q9vb/ySWuy/FaMO2rgCwALhWv6ElaNw8XrayDrGYEKyodrF0zQC0drYEyQC6qqy2vmEvDqM2uWE8YSE8XrapcxMApQ64bAMmM4CwdKRkBB03YTH0vo6vuzaOviK5jqHGNYCpjrKByxQxgL7Vw1gfXKaMIeE4bjV0pGQFgLKAs3S/jqGOsdXLoBJOv8YgSE6RGNOXvCoRKAxUSxLrylS0J05AtPS2TqHGLegUuq+8BzGQfDDAqKKlCpR8sIqlogihAk6nMYLAr61VXL2OtE8WwLRhC9Yi1r7RKeCcW5HOuzQSdrYG1ykIzr3OusSRjDdAsvSjzqhks06yzq1OuhcjRzWNBtEOjrab2ZihjKNOos6oor+Oq8CzurCuTs6yLD9KngxVsibqslE/wLMusvKJcFMME7qgKYPomiCooQtOoM6uIKyuui64azT7PSCgtEARABKOrqqcsh2LIKmusc6lrrBgW9E3XKOurlRSoLumntXAvBPOtkJN0Sqgva6rFBagoKCtiU8VD9E80SBuum6oMSe3XvRGbQRchPETko5upMVDJDVgtPSwbr4xPG7TdKdutJJTYLN0qhQWsSAu326vFR8xJWCeDEyIAa6rQorutPS7lpf6skOPYKJgr/dazDM9MeC1XLEOAWCwvwHusQ4bUlFgvO6jbr3KtCgeRr77n9QEDrXvO5JfYL1upBq6PJKQqW627r0yS+C+rqSyPC6vEFUQurRZbrxxM1TKbF71nYq9jx1xJdRfHroQrpCxnwGuvnSqXBXuq4jRZc7suv2THr7VzP4AnrcimHE09KmepPEnEKiivZ6i8TOesZ6xMQOesJCxWs0esYS14LeeqMoHrqUkJhC5rqKep+IxULquswkjUKROu46z8TuQpzXNLqwJNlC29K7OrlY4ULQuoE6krCJQpiZd44v2t+6fkLEuoq6zUZVev06sLqRevbqFUL5etsYIiSrPGt6zlrSGDtCjPKXerGwt6AxUVU66uq7cvdC4zqRkGEk73q9ev9Cp2BbOuV631xdQt1yoLrp22dCmPr/4yPUgPrfOrilS9tnQsC66xIdEjuGcrqbep0qpDoZJNUxRTrzDPd6vAkXetrCpSSiisuhcySJkD6ERtRnOtEhKsLbvlNdGLqUqo57HMLK+o+iPMKPevjUSPqf4gskl1FF2FLCkKTSMrWiJySMwpH6wG88p28kvoRvxhCDYKSK+soykrq/JIYktjqW+uKfSsLuwsX61PqxwpKkz7Flup3C3frxepl6hSSIpPk3I/q+aJYhTcLuuuP6kOrC1Q0cIHqhuvFCu/rdEzG6xmjzIKv6ooqDuqxc3cKH+sfBH7QOMX3618FTws/6+brgIT/C3/q+akmKFTqv+sHPTCKiipO67SkoBof6qCKhpNPSqFA4zFQGr7qycJNCkUgD80XSx7qCOKGkrAbmepVGMQ5t0WIGlqk8Bu260AbBz0HObW09+oh6p9z+mzIGx8KpusA48iECIsc6l9rjIXCQLzwhetd6yxhOBvP66yFKIul64Xr7UqCYDqhaIuEGmakGItR6gQbHz3kiz7EwbHhk7iKteuV62VS1Bq4668wQZO/JY3rXWUki83qeqOCqiSKIZO0G6SLwkBz6lqilBpk6i3qLUsaQPoRFOvRk56S9eupVPgbfepFFADQ+OrsGpNkIoulyoPrD1X6Ga1FfeptZHGSHuvV6nDw/IoT6qG8hIoW4M2Sqco86+tk/BqMoDzrYRTsilIbM+tsi9wbtOpNkvYLjCWGgAIamBs7FVyLQ+v9FLKLMMtH6hKKFZNwytaJ12WqGifr9epSFWKLKoo1gWobcosViRYqcxlOZCqLrUTWwSfqk2R6GzobjBtb6hQxaouuKqzqyvKmiyJ0keufdKYb+BtvdLqKxBrxhYaLL0ol69f0BopAGrRVVCrDk0vrYQjf64vMdhuoGjbqSYjmGhZBsuo4DJOTEeov6xnjGoq6AGAbXlUckLUIjho5hJGQ6RDOGm6L/QkXShAb3xQLGdz5Yeteiz4a0BpmG3hQ3or+67Aadqthip6LjOt0JUOS3ouIGlOkroooG8y5ERs2G+vqv3QHk3Slwet7IoobpfTOi5AbD6XJiiAbIYvZTN4b7hoDkk+TjusYG1c1BxnKJf4b15J3kykbrhpw4NGLoRvBG23KKOFXGN49pcphG7YaKRtZGkgbO6QvkpEbqzPBi1Ebornpi+Qa3/M5G2ka7hou6pbjyhBtgdHhgRs7ENPlFRrf6BQbCGtVG+CRObFOCMSgyiwNWG/q7vJWiPUahShtFLYbYSuNGotdTRvVGo7jJSSWfUnNBXUKLS58HRsS9cipFRG2aJkbyJNaLM+VgeoOGl5CWSjQII2JlnREodUbR/WGtbUblRsgwYMb3RrWjDUacMH9G7CgPRrxhJYrFRqTGmC5fSEx5IeAr8oWzAOK9PN1gTHkHIn2G36KfrUJZKkbvyIZ4oGFLkK5KGCA4epfHM/01eFJlNMoaxvM8jPDSxqLG2gqQLkTijIBCxoWDU5DAmuFmdHgpxQ8oZ0B/PPzGy59vOVAKki4MxsTG9KhRioWVAdMXP33YWcaWxt3LEihYxup4rxiSKGXGycbzvQW6IcaexoV41caUKFjGlXiGxqHG7KoBRqa9AG04eTQBcMphwTh5TvpfRt+izxRMxubGguLdPKvWBWYCxos5LX0aALbGiHUt8oh9HShXxpHGun1QUOrG50AVeO/GBRMsWXG67OkOcSgoHsavPMEyRsas5VAmwz1DhiGTbsaJxqRMvXjhvRfGmcbEpl544CbCJvEXKOLp3Wgm6molRvbGo0bN0A4U88btxtwmqxS+fQQm7CaCCF/G+a01xrLGtRSfyLomzDoGJqIm4y4uk3dGgoDLosp5R8bzhrY0rOZLxRx4djlqoDkbaXJRXWS46SboJXpA12QxHwzgtSbpmQ0mhCVfuGgA1WS90CwYf3VpaiXc9VkNJvk4b+8SLxUm6LhLJuk0n7EhPzf5RFl0eAUm2yaFVW1wNCUe6j5ZZENqChMmhOUMRTQlLSaacP8ml8VZJuNldyaQpscmlOR/8jvFX0oJ3NMFe+4+cxTguTcyeLDFRpB/dRkmUyaxivimrNRDG0Umhzzomuo5IM9jJrk3ddlsgC3zSDzmKArDOMVcppMmicU6lC/FDKaUppR5JXMkpuYoddlFGhr9GUxisGZTYqNmJrDFIspTdX5rE2SipsGmk/MCppQ5HKaJP13oUqbgOE8/WaBX8tPYIN4Gpu6m0qa/mCmmg2NyxtGjBQxZptGmlJ1aYJIlGZxa1XAIDODPJsg1b2MPJrwgGJQ0+B8mwKaAg37FLCVbpvjVa6aZJscm4Vlzpoim+td4vHIqGKbQppF3CTLPim4WetQKQiLNGphhVnSeYGaYei1YQGaTD0McQiR3yXfM9HqjaXhwLclQildmf/5kZuCFeGbvHP0vWGb/CldmbUR/puL0YPECGoaCW6KWilnmZMQO1Ehm4maud3jUDEYCUBPmfwIs1CRKMGbeA2iAFPDoilZmuUQ523Jm5kUXDLi0emad+mhm3QQrVioA2EoKZrb3dbIJGiqKIxY8mtzG8adPWCJmxxZo3V3/PAUsZsuzBQFpZpqYZKRo3QFyNTpOCCIHCciwQirYTmaoFkVdOJt9ZvKERVM+xvyao+c/9H1m3xFlcItdIihAEKtmnVMZQQy840apZsAQyLgvGux1TWafZsiWDWbVZoKKTJYLXT1mgoog5p3GhK8LZqVm+RYLXRDm8Wbr5nImg6II5thKVpYyXQoFaoZhkC6We8QhXToFcgxGLI7G9LApUgmKL5ZLOIsS40akvwdm4FYLXWrm02bsRVsHD1iEr2P9QBDC5pzq0Gq0qlKKf6VQinwWctrPA1Lmq3RTEmrODY9Om0wFF4B2GtbmgGaEZtt6l8Qp5tDm4WbOxFgkbOahZpnmiQbu1VvIFGR+kGsg3riv1CnEa+ohmU3m/eb4WJTkAcIyLAPm7SbZDgN0byCEorPmwdot6gPKpSLZDg50ZHJvsL3ml+bjUPRw5Dp52iKwdLxCuS3mjN5P5pJ1X6saLA1kHtCcPG8QoxUL5pS5SBbcuhPmv2RJFCUVHeaYFrvQMixf5opZDOgW2nQW3KLjGhCVRbhsxrZ7fJr8WR8GVhRbxAnFMOZ6TWvqHyM4CpZZCkIaBgaiOFCtZIKiU1lFavPZFOa92QoW++b8TNiGv30WFt6aNKNCFtzGxaasfQCVRhaTZO0EIpV+FoWmxMBFIlRNYtlSptkWjRVi2Sqm3tF+TXVYBuL0RWYWuRbt2Wjm/jVU2QN0KZoNFtZVVRbsTXUWlRaRFqUWzFCGcKwGFtoKSAbCkORq4y7aPbZO7XBeUBbsFoJkOIijFXcWpE1TiEbkUxaZanU/XxaPln50e9khAVcW8+b4Fog8AUVQFugWnxbolskW8Gqs1XiWrhamUMt/WHjQFvhwVR0MmSMVTJaud0JmiUZkFv+4CGaxqFiWifd8lsxKyJaRZtxmhKhSlskvWGaYDBvm1QqMZpqWh+bDd2qWs4ZX5s93cpbT6E6W8GayZvpGQpa5RCpm8AxelrZmumaFRmIEHHjAMGZmkpb4WIn3HmbZlqmW9ma0AOZ2CNqV5AFmhUZvFpCvdGg4Rm8W/2bvZraofBavPI0SRWazhkMWlWa6iA86AzAAlvYWjV0DlsiofBbdZvtmw5afkNuWsN1E5oqW7hbi5tjms5bwUKbDD8a0pGeWh5axFv9ml2aYDEMW1/LBp0FyfEYk6BENBOboVoSoWFa6ePGmwadLlrZGdRanlqWBRFblFt0W40aflp4Mc5aE5rRWgpablvGai2k88R7myyJ5Fszm7fo4RjsW6V185rGoSZbJJsIa7GRs5uuWjKJ55p8oelaRDwoFBUYeVv4PNSw6VtKgsl0CCHZWksCTjxw1AZa1ltyUZtBAdQH6fxx1Jrh1QAYQnBZW+ORBIDlUZah2U2YhW9gJiG81VVbJRT1W0QZqqiSGo1bHNVVW0IbZMH01aqolVvlW41b+ImNlEWYFVuWcY4V4/3r6aZZqIRgWp5ZvNV1tEtlMmCawLVaDVo2Ff1aVD21W9LwQ1udWnXMpUtPYBXEAFvC6F1aQ5A+mEsJ0BkVW6ZlTLDjOLVbd6HmzQRbF8u2mgaxRBjGMWsasptBWOvQNunv6VVaVFpVwUSDneTnGijULqMCnALUDoBUWk9x2VTDW9dlEdIbWlwMCFoMUjNl61tM1Y7N/RRnVZQZC1ukWhvVMJlBoQCdkCqi5dNbRIMnW5tay1rH6fxx21pOkTta51txW09gO1oLW5podxQXWlNbns1+QjdaV1onW3FoiRV4/LforEgjcNLhJwEAGX1aWnWvW6TVU1oJkKvSuBg4eKNbEZpIBeUzRINfWw+rZh2Js8etYAIvW6O1HW3PW/MJgZAH07AZbTzRG168/1tXW8kAf1tc+T9bRBhJINgrh7VCqfTVkNuOde9blBgw2+W0z2C4GK0dYNWWMfVaTnEekgcw41rDWsDbgNvLWkjaOorW0f/IhIHWWfjJ1VEkILpCRgElWVhN6NsjEdjbCbPFYRUa5O1xi0wUSaDLShlkMeDcQ9P8hNoQQNjaW5F2/XjabmVE2tlRONv1KeTa4vj53eCQTMTRTTMYGNsMkLtz3B2THBvUzUhBUSLAGNv429bFdryDEbjaTtCM2tTamNo2ueSg1RvU2t55g0hDGhzbak121OZkk4PdmnNalgwmAWnp9SkVkPTNGUEx5fjbUkzc2oMQ42ApRMDAqJo82kLbAtvM26TaNbhhNPza95zlm3Na71kfVMLaYKCQzXzaGWUVkaRbAxriTOHR1lkym6blQtt55XLED1pp6Z/5OJBMxCLb0trK2uLsq4rwm5VREtpy27GQAtqq2uFl3MQq2oO46tsK2zuAnniQrVcwNuQW/AVc+Nv+qHTa8bkVG3cIR3PTgPrI9Num2uKbQVnGOKiaIugPc8tyEilMLDnlheFMfTIFVzAoyKwQ7DhEoYYgRnITK169tplQm+acKnMlsiMtIrh3MJGZsZtUAybbVzHu2/55mnBuZemJFtoAZIkMOtq6ASVY3/PO2uZkFtqGuFjb7WhnmBd8tAMU2wOV+oBJmujaJkElaaHa0U1k25I0EdvOufRwEECD5eFQgeLzK+JheNuR2peoIbjR2yfkgVGDZJoI4dr+0THbwGNU2quVeio02snbEdAp292E7NslaG+kSdqs2vHbjQoxKkthk1oCEVdhHvzM222UadsZ2yyDqdt52rL4nNvdlQXbXNpGaZI1bRmzWntbrvgsOZfl0eQ7mz90zttpUYVoNumgaN5atk2l2wOVZdtq2hRM45Vl2mLaqtrjlaHaKURa2oPk1okqanMbUtp62w3bZYnI2LLaLnFB0NBJ11s56bO4ELDpAIxa6U1K2/vlNN2629XaRdt7CoSL7dq5afXoqTWIzT2bmtv3+RHRrdva2hB1TZV6K1JNttPD273aBtsiuQXk47kpUacLA5RZ21L4ntuSNABJycTe29naYdqBtYXaodtF2uNRDtvh26vaby1r2svbTNDDcYPby9pOwEGtOoLmzX38O9vhEShU0bLf6N9k+9sxsjgjB9pnEUeiOCIkFbIAKwtHZGWYALl72gdbnkxrGzAVAJG72yyg40NGStbR0xBagrvbMbLRWe3RsgGxTFdUWBX8wTp4Tgj/ZXBMPwji+M/bR9sv265Fr9rgFHfb90yP2h/ax9pamcLpIZt5CJ7rgZnGyd6V4RC9KARb5do8TFVsJBSRHKDN04nn2jzNNpvVjWX5f9ulcYQgkMy80PAU2XHYzFOKgk07WCroUzQX2uIC55LwFFJs5drRzPFZEDq/Zf/bEkyxWq3Q8Dry2n/b9Zqa0DmLakyoO3GCHou122xNP0FPZDGgsDuWTctB1ZUxgnYLGtr6m7+x0qBAOnjowDtYOz/bUk04OvAUaDpV2tRwwcGFoAyR6R1OeOAy74BP2wuEQ1HUFZsVNv1KLW7Yo9HoRPTMCxgbWvlh1Dtks6vg+Gm0OspLC4RjAfQ6T3GbTTzNN8zwFKw6fdoETWw7iBTJHCGZhL0sOskcZCxrCTMc+6pdwK3lvR3xqv1LwsFGsN3cDzWkmF0ZWiFiQP3rFFnCO00R66tUKuHo3NidHLoIfc1s8oUUh6pHwPw7YjvSOyfMI4XVHAuq3kjNeHBoEpDVWtPthHwTFbI6SNCDyCnRQjrCVNyJaxR8O/fA6ju8OuMbSjvqkZo7C2GDiHBomtCiOplJG5A8DPcbzRoCa22a3AsV5Z0RQUHqaxfMPCCPFSI7qFsc89GU+jsQaW4p2BsXzOxa3R0ORS7M2iAWCc0UTqvSlVSg2nx3qTPoADoIO1WVVjqLFQ5FEZQPzNhUg0GZqXFbeUg1gEhoSHMRlBY7aGhIcjY6pjsllbo6HDtGlU47JGleO246AnUDqg46DMCeOsEIPjvwqjY6fjowaDGV3JXhQHBodkLRVO1zyjpeqlwyYnECmHeoLqof7OBAijoxO8L09SBfysY7gBAIqpyVyLH2OuSyd6snzW+if6hFtOthwYBTFH+rHxT+jN0dAGtdAvE6rjrZcf5dfxUZOp+p6TrN4Lk6sjuRO2ib400TqxkBPjtja1E6qZWKOzw63dyu6TDqHIUyOhA0nSoeA+U6Pn1lOjFAEjpOaHNrHc1s82eUysqFpGI6FTpqy3D5wjrp0Q9q3kmVO1HBD2uJVXI6WuDtKvyZCjpNO8MrsS1KHeE8bsoUlJo6vyE1OyrV3ToNOl1q+JW9O7v8dmqX3NnA2ju64W064tU6Om07AzpROy46XTvpas7VQTp4VRU7sS3eOxM7VTu9wFM7QzqjOgPKHwokVAM7fToBOtE6f7izOotyVeGcRD07sKK881k7iFSgoqdbrJUJE0o0c2o2OhygPAw9wBqhr8w7ucs6GqCbO150PTtna9KVGTurEOWxKzsUYzfVsKIFlfE7H9RpsSFbBixbOvvBz8BxlMs6pjV8cbs7XarzO2s7jNRHO7rhlzv+O8U7BzsBmRfN6zszOm6YmDrRSTc6lzv0cWgsSNzp0AcrfhCYGWM7HTqX3YI6dVUHzY+95To5uEgpPJjfOnuEHKjtO1I6Zyg/Oz859TpvEC3U9Tu1OvdUSChSO6CIMKgt1SXAvzuiVYeScjphfZfQXzuGLI+JoLuUO6RVnTpEsLUJ0tSqO39UALukVPC7kKgIuuFIiLpotNXRonLPwLC7yLp/O8M7ikGQuii6cJRjO7C6MLsSLBM7/zp/O4lUMzvAu2i7ONG4u165GLqi1UXkGLt4ujDQ9jufOwS7X+1pOli6ELqtSV51iLs4u7Et6zoUuz6aMNGUumi6lJqUu6S6NLpWpcU6RLs0uy39GgjtWiFkMeFcFZVbZuTofWrk3IhtA8/YmXNUfW8ROSk9ESy6e+TNW4wIHKFB5By76JVsu1TyRbDCPRy7GfAcoMy7jLrcurCobyz8DKlklIEGrFnYvnz8gUK6DS1jiOz1S1sJU8LRT0HnMMMEN9q5kTM8LLtMu3GNP0HnMKuBmHJvLBK7bSgKuleMMeG3rPIZCrpJ1YgRsEWp1Zh9uEFvrNK7nLsJjRq6NRGauj1RWrp3MSK6xthquxK7Sru4QPE6GNv6u+GNsgHHrY4BfLFTaqRAvxv65dK7zY30qGa6OH1eo5ublEHnBXdUadAcoc2MOzyDEMcZSLN2uHZtydV8sTGNRQOM2scZuEAGMEq7urrznc67VzEuu2bcqNpMuqq7DLsZQaU5TZQFXDvldEStaaa1auWeuu3kvrqsEWtlg/z+u6J8Abr+0c8Jj7KCArwJGYF9aaa1a4QBuplowbveul664cARum3kNunb4V67KjlUfUE7CuizUQzVaNqI0C8k9dpLobhARwQ3oVvggbvOXUm77WiK6HbcqbvdlN66852PgNwCxaExu45dbCBwBDG7Vzkt/JMTmbvjRZ1ZGY3WcMm6IQiiOTLdBbupuim6BbqtwUHaGbpau5pp0jWs7HbdkNpj5BW6ersvy+W6Zbu2XOv16bpFuluNi5IbWlm73bhMGqWM9br+0WMgK0oMBW+dmbppu7hBB6Ctuim6+t2EOU26ergBjW26POnCOE25zl1duplozbrOujWR7Wm5kTiLK4He1FqCJZszUSYA3ANKCPmbHpOgmiO6+VjjUVWAhbsjuteaZrMN5BO79DsbmDy6+ui/ZWub3+TTugyR8ZqsEcO7IZsbmLSs8aD/ZaVZctAW6Yu6C7vf5Nh4ukLvgRmbcY2BSO1lWZsy3ZVlJhHhELmaVq2bukO6o7vxu76N67sWYRebwtE9ebixpVky3SDxB7uiAfZYjEDAwDu6AED7uznbttPnupO6dtznu+wpx7uquye71ymM7fA8IemVs3u7k7rvUo5A/pW4sOO7GY20IHe7NlkDugWRaHU6g3Obtl3SoMe6H7sy3OFLZBRru7ZcGuDHuiWalTuC4L59r6DovQyZL2hiuji9eAy80ICCOeQfPKe9BSve23i931ogySYtHMzhZW1A9TsFKyB7JOH0LGB6BJDutbEJgHvgkHB7pFV3IlkpwrRHwO044wN8gMa0wSzAEEblKHsqO/bBXmVfMO1K7KvQfeh7YHsAeviVWHplKEh6qHuC4Yh6oHrPwV6A3d30cOB7Z5vt4XTiSrrqtPfsB6UDAUB6uLsiIBh7QHvo0eR6+HqYe4+71BEvvFR69pTjWf+7uHuJVQegs6mEe9h60ol4erh6RHrz617UNYhXZLkpw8FalGCBo6mrGnodOTu2GGUpgbV5O5x7OJDGHfs65ujhZPxJWpSqSLy79ek9c7M7/HtXMS8wK830ekq6wnuv7Ex6VKCies3gInrYekmagpSToW0pGHr2lOx6tNtke4vNwHoMgwDAeEH8SPB7munU4S95Cnp3/Yp67Tqwesp7bvJLOs4tHM2zZB7Asdsry2p6COlmkJ9gViy1KxtkGntguv+6o2S6e1xVCjWP28p6CjuSs3p7dwkzzah7yujGes3gD2CrmD1kS6CSe/fBOHqqeuwslnqUO8p7iVVW8P9kburv81KxywkwFbZ6Fnv3iSUQkekLGqR7ZnrSkeZ6t+wHpOZ6hnr4u5R7nDvWe7EtxHsGenZ7ThH/vB57qnvoM5J6YnuzZak462G0EKNk/nq8eswZD4Dg2d2qHTMsezdlWEGpOR+athAyet9kwXtdSdx74RAGsL/amUgier9lUXqH7DJ7MXt1tQyUUnrfZVF7yVQJe6gDnNUwLODZmLhue7vz1+pYHSmgrHt+ejk4ZCx6ehDlEOIyO5l7WOS7Yz872Xv3Mftjhi0qenl7OXsAutB6FxCXY1B6LjIFe0dh2nvkiBSdiujZeiB6RXr3Ywh6BnpZe2DjA8xGeoIZFXp4ep0RCOTYeTxUZntU5Xl7KtVWenHVVXpwfY17HTRKO9/QfnreVU179hEEeyzlWXtSLDR7CJ11es56DXsFe7LV7no5e217OcDeyc56LXqYu516RJ0de2fN3nuDekdi9HpJe1jlO1OJe616hGgFOjqLvnu1ek17L6qYLZF6U3steoeBHBnjeoCVXh1U5Kw01VpuOVIxCYhJIfbsOCGrLEt6hXyg4it7OWFLeypsGy0JiNpAhaKgkiKTNYnNYJt64FN1ql2Zq/3beptNPm1LYXXweW2IIuDiB3treqt6DKWLezVh9kGik0d7/WEmAPhNGQuDiPpwvuxjIX6oSZBggTlgoWzZc9d7273NYLd76mFOaQmJ93onejd7J/FXeg97J3vlYCqAOdoJqiVRL3sP8Smg5TkPe0rtR8AspYt7Gu1HwM2rIuBH7GqZe8FlbGt7qu0fe0JgAPpp7VSLR2OH0n97XZhCi5Gru3vdiZsBIPDXucKTh9IJMKD613uQ+1rtRzUjbOflXewADf5b2e1NMNA5++zeTEpqTjh3e/vttnDEiqA78jlDnW7ZQ2AKit9ilZwjdYYgkbiD7Mj75WAo+r46c20I++Vg7Fpt2rzaxGho+pj7YVqkO4tbjas7qOD6RSAohMnibjgXknD6SPoq7JoIjolD7dJNfkKLent7t1CI5bDjdHkJfZj6AgJ08/D62+nfJHj7xMK0+996FfA4+oPtFPr4aZsBhPtBOc3YUPu+TblsMyJP7DkJBIrByu3dTenNYf0IEtPOYGZkZoh/IBE14/l5UTz7nIh8+r5h5jPbegOD1NmdAoZs/mh36YTtgvvKjOL6hpvPrGXK1cEi+zQYg2Bi+sd7Avv7+RRL/Pqt4amC0vuXYFcAMNMZC2C50vvbcHidfmD8+zd6FKqC+2r6fO3q+lP5ajKa+tyqZEPy+r7tqvrI2Vr7kuwcaMOzCNl6+nfw/Aha+iL6aph6qjP58vo/e/2r2YIh3HT79sGDq8r7Evta7Eb6avrG+mJc+asIaOb7GuzRHIk7+EMS+nb7xav7+YHcUPt1tCv4Tvow+9r6FJIq+qIc2iAr+Zb72PvVq/v4HvvM+p77hmE6+x76rvvc+j77+e30nd76hvpJWWSd/CsYQyftEHi1wDXAfGDRgYF40KIh+2AcFghY8nmhioDh+i54/fLlTb3st0C12i0bOgklLXdAofsechMy0fpoHLdBnuHia5RJR+2J+2B5ooMgHMH7LcASgrvsKfuExRMRi2GWseSUiaQ/s5H7ofpcM41QlTDx+6ZI8aCVMKepV7MTes4Jn2GT7Gn6mkWd1BXwSEXEfVPAQ+FB+5F4noRvoRIdpfuOhfeJ230F+sTaAI1iWJX7PBwOeXD4okQkHeH7pkiGqEyMc5s5+wU7wxFx4XX69HnELS36ErUr7Nx5L3hN+iQclW2SePqgeftd+46FjOEhzS7pvdWD81YrS70YyH36jfrvOKjJg/qHuUQSXcCrSe37brGCeT85VEFZBMIdcXgtPFP7+km9+pwcJjRkLD4hYB09+1yZVKDR7FX7cPmj+gv7xfrNO6zh5fqF+r57Z2i0SqX7tSwD4HURhB3ZLGIcG/rh+54sA+BOoKEZK+zb+uTUg7kcS0fsGXE1+lEC71j7+ohp1FGCHDv60exFaQ8dg8hr+/v6JK2AuFkB5dWT7Ov6XeEUnKIcp/pl+jcoIETCHVEtPdw5QFx9R/opM0R7RMB1PA/6lkHxLIGb9/pQ+8ksRdzHKbf671gv+kw9XqxP7G/7wZvIMe/6g7kf+kWbDVgP+z/6j/vMekv0KQn7bZf71FHRmn/7CX3P4YqBDd3f+iVhz/qiMkoIFcXv+uAGBNrSqQ8pPHyl5YqBnzjQB+vt2S0N3RAHYAeVLAman2AJMSAHFjKr+60EP/tf+opa/IFyVEAH//pTu8jEqwXPhOgH9JqcnRfkikk8HTGAVLzuo1v6v/pKCUoskAab+xw8CEnr7ZUssAYEBnAHjizf3EQGc/sxgb/d2EEh+wgH+/niSD9tt1Bc2wlgVAfH9EzblAedcLQGLNsJYJlNWA20BljtkyEgbQ4Zn51m+wwGaEH42zjZDAcggbTbtXE0B+wHlNtXxBNMF/SaWbVw+qFUB8wGTtr6YB5sjoD0QOJhNojUvOHUOUtve4IGuA2MB7/FyOkggDwH+/n8B2IH1AZ08Vs8RA3UB1L7xYMSBmzbCWFC7LgM4gZMBnIHy/S62r0KcOHCOO/1ptpE+8zJYQig8RBAogeq2AMhBL1CBlAHGjPqB7RoWSCGiQxChv2sByVYythaB+wGPtvQJMJY+geF4ZLY84XBCRoGDOCRkSCAiIhVs4X6LOEmBmhBpgZWpYrZ9ppJWYYGlCRU0pv0HAeVI6KbMgbCBwI6LGm1wB8boyjjMaPA4eVuZDylTgZuZcVlRpMJVK4H2cPZGwKlRXGXbTbBjYljbJ4GfmlNdIMBuuneB+CQsgeH6Q4Hfgb2B4/6V6noNT0pFWQG6aIE4eRNsSU4O7huZWh6tagTafy7PgcUiwJpEQdSe64GBujRB1VkYQcMwbEGL33ObFZl7gf2BwJpAkhsu8EHJWJPEW0pwQecchOIvLtlKDxy7Li6uhzCVqqqQO4H5MK1qW8wbLvOB4AzOQY+B6ll4NpLRRngPygZZe0p1WPSwL59qWVDbYdMkQclB9IYEsDxBp1xUnP/u44GCSMaqQkH3utJInykl9XmZCoGK+i1BzZltcMTY4uS1NqJBrkz5uy7WZ3NOtphIDJy1QYhZazhpDMaqG67DQY+6eUGmQaoahSSj4lxBt0HYEtdBkUHTQfXmmpomnJiujEHBnONBwVkUQcEG7qBl1UwqZXp34Uhm58pJTijBpcoumEg/TDBkwee1I0aMPx2uyspP0EaGp/qVGH1m58oN+jHGESxcweMhJMGENTLB/GCbngwqfCpSgOwiaDUqwf1QkOBr1VnKB6qrcHsKBMGooI7B9MHkrpYhO05JrmIqOK6FJPAjbnaiyj7BiQh8wj7KGMH0hn9Ca9UZwabqKNglVQXB81jrmwm1GMHOSLXB49VZMCy6csJudoQITcoSBiRmHe6uwdXB48Htwb1KMQyPdn0OosGdO2vB5CouyLYaDWQlVWa9Qt6amA+mVsHHwavUkaYHwdQqPLCZaCt+bDVxyjEM7L4G1pAqbBDUJMwwPsoCgOSGACHoIcSIHo6bOnxSNzYLpkB1SFKoIYQ1BCGsumQh69UwQlwhBNCPwd/Bt9azQZZI8jYD1hJULpgYwpwhi8Gi1qVWMGoBpnLjT6R6Id7GPh8Zfnohw0Y+H3XwsgaIYUiuMMQ7VhiGeOdeIdv2l1YBIelsWGMSZvzWQnpAcK3TAqQc8NBscSG3fjkh7MZGIdkhnulQbGvCVR7JrHywaWwNIa9+AS8NXF0huhDoymUhvdMyNmMhjiGwxBr+Ngcgpk4h2b6TqC3eNUQ+HxX+SFkWIcshi/4XIZUmFSG84LBI5tC/WMmun2w8XU8h5jM84O923XZxIdEElzY+WAZQ9siEAUJQUq4ECA8S9PyMdwImDECkdkrgP1iythGsR7iNLmHeq1g+wS8BOxhTIfSBqKGDIaKSYicfIdKhoqGWQ0v6GnYlSEAeyaAt2Nch4SHSgxqh3XYCi0ae9P8hDF8wmpgnIcfDVtSLIeEh1WQVHgiuLyGmaNMSbKHDIclsK8xKoc0hyNrXr2bus/Co+mAzWSyFobuOL8TYXuVgcaHGxgUhyWwrmm2h0aHSgzSLeKHJCFKJI6GgoYwepmijoYOw3KH6iQjybTCcsypxZiH27kwgmH5eRSTuNXQkWp9WICKqxKRAcwwuIdEhvO4Pof4h94V3obm8qExuIdNsZVYJL1NE1J1J1i8HZq9n8O0hpO4gqzd+JGG87hRhyfF/82Rh/6sNfiPiOGHnnXzxPGHTbCgo0ZLCNnMhxu4XoZ08M1IKtifPaazTtv3xamHlFP8HCvKDctPufzDoHiBh/v57IbBBZmHtXG5hnu4XoeKhtlgk7lYgqhxiAfWUkmGRx3FhvO4dq0nHHyH0YbycTKGmghI8RMQg92sJZWGDVMEgwU7UobkhO5Cht0f3WJA2WE8UxWGlCXFhzNScYeyBkqHjYbMgmRD8oYRUoyCN/ithimGtYbeS5ZsvAXhhm0iKoeehl2HOdomHGnYPYdSJRqHAYax8iJ0/YbkhZmHaaOGh4OG6OKeZLqGhHg+hjwF+oedh6GGqNIGSR7iFMgth1WQroethz7aD4EEdYfCvoUurU6G9oZzh9nVDVkfUhSCPlBDWeOGQ4aEitOHw4Y+h2mjq4ejhk3qedi2h0GGLrPrh82GbYbrhn/ajHiyrN/z64dLhx6G3obfhTPohdKehwlFwQTYh3kUcERlzf6H3hTnh3o0qcVEhx+Fp4fTxEGGx4buNDQjeRUiRFd0vfjRhyBFx4dRhqSGj4aeNcGH9Ia3h1VtjGLNu0UAUEWPh1SGbWEPha7MjIZhIDpEH4fe+8mG1EXXhkwHGYaXhxEyLRuv4eeD/4Y2h5hD+Yf/hvmGPIbPh6+Ganp1hkBHhOzthkBG+OzdhgeKruQARo26OtnlhqeHl4e8h2wNKkqizdTtfBDuilWByjXyB0Y18EfQR1vrX/jwR8FLSEaZo1qH34fPh8pwGEYgR0IFWofgR9T844aQRvqGTkuwRgJxhocYRmBHfYerhx+EJiHMUD6ITtLGMJ8bRZKHhmxFRXEUC1z42kkUaHBEJiFARl5RDkVzSphHNoY0RgxEV4hiNcuHdEaRAueqMzS2hwxHdQfFUfOHQ6WJqWE1y4dER6RGjRtBgO6Hn4aKNUKKkGpiSZRHCUVURxEqaMFSkMEjfNXKcTKJfEe37RNzcSqz6e7JgkY/1DyR7nVLMEpgM9QJtXaQYkZtOLZR4kd8RpoIqNjSs6vdRpENIITZ/LVKTVJGxygyuqvk1cHuyNJG6diKRzVQ9z3SRqjTgzpacSpGykZ+0aE4M8g0uQpHuSyyRh7B/EZMcWcxIISaR+bYhIraIaNhEQDqR5PUukZQvAqDDzmNKpEISkYKRrj90CCyR0pH7/1mRwZG9ZjW2Wa07mmG4qZGethr82ZHfEeWRx3VS2G6R1zgP6Eou1Lgqal8RlqprzDBCYihwkfqIyctikjc2a5GFMmJRXREhWkGRkEFrPO5u8BKgkZuR2e66RkGR85Gero8ymMIRGjT4j1QTIjHye7J/kauujTCzkZb48rdoUcGR6Nh0SujW44C9ol8RxFGLke0UVa0HGniEgMH2Y0SQTBNsUcf4ocd54LRRnQSW40iElDNCUdM6rldn2hrtFroCBPnnZ9o0UaAYlFd4UCCRt18IV1pR15G/X2HnYBG4gGOyBlHzlwpRoJG1hI9UfFGRUa2E85dxUdeR0VHrly3yAlHIUcJjaVH+UcVRlecmUb+R8gSHxNE5LfjsgHwPFFMrUHgI3kVdMLlzQ1Hh7rEw5A6eaN1R8R8mnSzuU1G9UeyiW1HzmM5Fb/Y9cGTYq1HVSF6I1Qj3UZ/WT1G2WLyMHHTM9N9Rp1GzZqDJX1GE1l+SWIpXUbDoiNGQDndxZpymSjNRtqR4rJE2Ge6YDnhnVASCxlTRg6QFUgCI71G00ZzRjbjnUYbcAtG7UetRm1qM0ZzCa2YBkH6gUtH62zYQDNG80bXiXoIK0aNRxMK7TnzI1tGIWHxlKNZG0dtCpjDQmLNRpBIKks6YotGp+v7RkdHB0Yy+dBAFuNHRuVj9QVfc2WhIPF7bV84F0atR7btFP3DRrNHfuyySq9YY0cvbNpBLBITR/A86XkyKcTY90ZY7YbAP2tjpSTA5Dngs1YrO20VxCdGnk0i7TlBH0djpBYUIoeYUZDrOmMnAET6le3aoHG5+iExWb9jU/s97HrAZhM6LEebbQoAxjCj3hSg7aaMB0aPutTwSmE6Eqg5J0cvRqITK0YTlACwk3EbRqKbyQGooztGGcI4TQjGzUbDFSFhcMdnR4BbfHGQIojGU5BoxmdHF7uRRuc6RDhFaMjGUhvAgRjGkMbmh7jSF6MqEiNH4uTlsb2i10Y2FPjHN0YRFVDgGMbPRrNHhWQ2cxDH6RW7PcTHy9rnrSZisMbzkJURSMe4x36jWvkQDex76MFnhwJaHb3Io94UKHUxILjHpdjvYSZje0YidSzHxKMXhrNV2I222ETHkg0cxhNY4McRkMk8k3H71YgKyUnISJdxucDedfVGC/LXoGO9iQaMwhZAfrIlyJZKvSkJ+ALG4xptRjKyQsaJyKNH/MfNyF1GMHlSxwj42pACozLHQsZIhpH4g0et+OE918MKx2yicciFmMNG6/jhPD1GMsaqxoL4XUcnAZpz160Cxp08MrKI6fnL6DPCkYgJefjixj1GJ6VQE3mkxvnkI9NGUgSaJD1HApEpcsbGXUdlDSPTqseCkdL84bmaxuMblbH59GQFesdmYZtGinIlyW0LNsZ6Mwj4hsG7R3LHlseASYdHPbP2xk7GyTPWx0ntx0bKx87H50Z6xtLGL0ZXRhVzisfZg+7G0PDix9dHp0bqx94qh0fxsubHSewPRrbG7sZbybpyAcan6lDH/ASixn+IsklQxpbG4O1hxiVz0uj0k8DHtXNVo1uHr4gwx3v50cddYVHHV3ONeeB6GEixxm3TVvg2nKJIX/OyqBaTSe0Rxn34xvjpYSHHacZXEt5L85zhx9KhTpK/RhDGAPCuxiHHYOo+xx7G14jxxvnGCceBBrlkbRAl07nH8MYzoPbG8sdxR3x0SMelxy9b5knFx/nHoWSkxkYzCPkWmtHajsY/ZLXGhcbedDdahMe1xgO0hMZ+xx/rPOWfecCA9cZQ21uVDcdNxl9ldcaKx+rGUuSStKHGNcaMoRTG7cfltB7B9fjpx6x0sO0Zxz6GA1TBux/ThsFp6oU1bMacBBj5kg2Dx/HH9cZlMEuhEPO5wKDbjAyvPL4yRnQtGoyoE8bTx2iHG7SvPDIFySBodMzHI8aZxiEbTBRXiBfArcbf8lTHudLZxjHHpPG1RiwkYwC9RSLCTUc8qxE9R7Iix04k0TyMwi1GivCbxyi6EsY2JD48ascdR/zx+8djR2rGx8duPD1HJMHYySVtp8Z9R2fHTGshPErGl8eU8fvGKsaXx4TKYT3mxyfGzMp3xtNHGsbNa4fH5sdBJffGfoofEkbGivCGIGkLy0dyJcfGXUf6x+/GF8YbcCbG+8Zfx0NG38fXxj/G6pBLRtvHsT2Zx+tHn8e7xxsL20a7xgAnOUt2x//GyNKLmYAmICdvelckvBt8qkAnVXHHR+fH28bByxAnG8Z/xn+JnsffxjAnMwanRrerZMs7qZdHFP2/xzyQvsegasGgD8cfiLJLz8YG+8UDpOqFeZvHcCdPR7jLaCbnR1HHZ8qoiXttIcZ4J/9EL0ZQxjwkg0FYB8ULicfvyqiIlOx2YJwLtnFIJvST/+y1qtUxBCZfRxQmZKvCaWTsZCfaJZQnzbvdVMXHEvAfxiuUCMfAJ45GvOSlx6An/hQox/An4CbCx8kUHcfqqlAn45DVx9AmbCZFxuVl7CdwkHAmcPDExignXCYAB41k+Mf4y+QnZLItx59dPCcoJ0THbcY4JiLt6MY8JmgmL8cek7iUd0AcJ1gnvCY9x6InA7vqmnN4SCZiJ6x1YkF0yzPoEidlK6kxvcZkq1rhGRK0qfImgiZUJp5lq8evx8onC8dzyhdQ0BUKFLImImvPCQf6UhWrxkyqw5kVDBPHr8Y6J+O1+ieqJpoHOAU8x6Amq8eDxkYnKn2k7f7Ki+yru3gI90FHYEgH1WDphtMJRjRWJyOJFiYniOYmCUFsvV5Y0ykSqRAc6qVivPZjViu7G4P1EB1WJuvH5CoOfCDk+0iuJrYnRBJQoKw7jibFHEzY0ykjBRAdCam13FP6LisOJ5MBjibP4G4nkjE+JpqjvidGumfwZ7RwBeYn9if5WF4nCcsQHBYmZ/APrDPtkSahfWYnPoizlGfNv9GE6fFs0kCLzEycOKBf0ydACSb7CHYmsSY8oCfN/8W7Giw6m0DJJqEmrDqbQORUxEqJJ/dgmSfkwFkmnn236bphOSddzd58Q2WOoIEwmfpRJ0IwIOwPzQknAX2JJ/7LrvBOwbYm8SeRqB68BScJwGUnLrJ2o3EnlieRqOUmBSf/tfD1IUHe6b/QSRpI9fUm0XskQAEmqPVwkHuK8Xm7GmSpOqhNJmYmeSefob5x1Sa4MVEmLQMhQZPGAcARJ4T1bQIAsM59XOCOJjaoPSYdJ6EnMwI9JxknESfuqKeovBjTKS2AsPQevBBrw4LW7b0mgPXtJs6IZgAAAIWfAU/0AKnCw0tACcHLQalC6OEbwbN9DB15EONA12Sk4SBCEsTzJtvBWOCHZEThGydwiWsnQcErJheh6YaPqT30rfgLJonAvCGE4fhD4cHxwaTtssA44bTHOEMHJxHBrbibJywhSyZY2CcnqcBHJqsmcyb0WNPA6yfUwU88hOCsIGcn/3xrwQvBWOD9NUcnqyf2LVcmBOBW7Lcniyf6SE8mJOGufDsn+eh04Mwhn72LJ7cmfCF9WNwh9yYCIdsmmSpcae8n3CHAfZ8mmyY2aH8meyY/Jt5hbyYAZLFBxOB7JmjhpyYvJny5mOFPJw8nlycnc+Cn3CGgpksnf337J6q4UKagpi6Hl0GPu1ehpshj5Zs67j0Ip9yQnJH48PyRjpCmaKXSQpEFPNEdXLM5cbWQIZNvod2z0aIlK87xbpUb4Thw5nmYp+r8CF2isluRqCjL/KEJ/6A5sLoRkKm5YASnh0bBeACym7ArsRIFeKb3EBzosGtYcDimlKdhoehwGsUUpmAwJ2GZsQSnwDF0puSmvHDF2bSmIkJ46ZJirHDUp2Sg7SnDEbinA7gx5G0DTNJyqkhB0CA5bcTI6XBwFBqdzRTpcH8s3m2rqItxt+vrLD05p4KZwUsxTNHIuYEsfNRwFCKn4iB81HvVJfR2ibzbhCA/Ywog8nGmqxR8Gp0yINKmSdocpompsqcRuAUU53Q8oUarhas85YTJLqLJ0R9VOPoOxKuAKqcr0KqnRk0KplsUqqd0Ok+Lq6jip+54PvXapzV9zrjxAo0UOqYORK1Y6qY25I98R/x4kmUcPKcimG/gW6jSwAarQ9qUgYamAqYFB2Tly0HjQbyn/kHCAwtUDSDskDFEFqYjHQSA5qdFk1an0rwAer68nrNjCINF9qiMGDamlkXjQTIhxcATLRrRMMGyLU6m1VuCTcan4iAepjFFnqZbqfKnocQ+p9qmbupJ2vamsqaBp1L4X1H4sG/M/PjNEF8GiQ0DxraYYaYPKWAV+UUxyUcoc0cHhJAC0acwmf55Mcn8KcoRc4fxeVGmG9HxptqIEqYwibza5onMxIebVxhBJuZ5KaZ0GK5pItRO0CGnuLHcgMl6InTnk8ok9VECcGlEMZWMQ0xBlVmK20+V0aEtgUcpBaZpRV3IuaYFpwJwEDolvYmmeEGSAp/BLZvxpnxMlaaJmkmnTsUiIV2aVafdhKxIvCmxpgqY9wkhKA2nakzqUBVFOinHWg5F3wn5pxlALzoJ2gFYlyl8cNFMHabFpwJwVvwBWV2mVkYwRtlMF8ELBwWmxnj1pz2mFvy8STAVMxVjSg7EQ6fOgsOn/trHhC+C2adpp+ynSGhKWpCZVH2gTdG73Mk7GS0s06bJGBnpB+QniN85ybHZ6Ux8Ysb3ESnpBq3zpo/RdejR5CumyhnBmPYoyac2gUPls6daGcPpnSzuhFumDJnNuaMAGhl8mZZNFJ0S5chg8wbKp7iEbBn7sdc7JeSdVPyFh7D2mTb9FJzsnQemItuTOX3U66aYZP9YFxDT6Xqnu2lrp76YFuSNIUemN6YOua8J4xHZzayYsviPpnumYplsJ67RMs2Pp83pIpgupcwZe6ZcAielooUfpzuncBsZQZOnL6bcJ3uRb4nZ3ftkHLhbkMXcAGbvcqfwXxQqyU5kxyhgmpnIjBjUR36TCal04cXB0vCgZjODDMgMGhBnoJUMyUmmeIm8287wCtowBUEDQMKn8NCVBMnhkkcE7xVSQT4DiiZMYa0tKJSqQDqGggOpJUsxXJT/RL9CKQN/yRrG6alksmhmALhMlVhnh6oxoDhmzjVRYwrjw7sZlYRm2GfJjTBngDTTcwRnpGfR4loq5+xYZrhmM8duzEMJlGdrWvEd8VQ4Zt7AVGe9p5+kpUl4ZpnJ6Ga/Q2XahGawZrcy/mCMZ6ZxBoi/QqxnxGYsZ68yzGfkZy8amEuBvFhoO8vhk0QwPGf1LISL0xzGu0+gO8sgZ5VVTRBIscxHrRWpJfAJhTWKgdGSlRBlHcLIQkcnIos5IxQSZ7BmcUlwZwkkjRQyMZYt8L28ZlsUHwLIZoMwDSAKZ4erbjVNEEphOiZ+vakk24zGOipm2GadmCU6KmaJHYvg8ZXznaCcgmW92/6UexVSZ6YqBknNFBJm2Gb6ZlJnb4jPPObd+mdx3KWFtIyLFP+wih0UNTimZmeiuOZmhkC4+EZmtzMXEIHlfETH+5IddEVrFPgHb0HWZn0VDFUWZnZnzRUMVIkdHIR+aYCUW6tX4yMUjmaeHG5n36gWZq+kXQ2WZw+wFjjJakp9coXBlQJmtmdAw8hmB+gfcLxmwbWk1QFnzqLAZsfoH3EgZjBmrqBt863GImYQZrfoFxhVS0otABgiIeGmdUuhZrVa0WbSZ3TIMmfBZ36hLpios4hnHuEumMhmi3De4Ulm3zxHBF4o/9ECu2GjnFRpZgZh0WYC4hlnRBgOgalHCuNKCOfaNCDLidC8nSkAGMuI75H5Z+/pPqmiuLln/tVgWIenR2SYZhK0tVs+qDK52GcAGUVnY3OpZ/TV2WY6o6lm2WfcuyHrpWf+cLNkUSwx4UxmlGeUGZCGmpojhMccNCHfPUxnrb3v6d88KwyezAumU2EJZ55mgaZJZ0lEKtrpbUaxbWdnMOxnnNAI6RqJZzDNZ7RnRBmQh61nrFAnW7PJpFvAIJdgQ2Y+mOxnXWYhZ91mTzpkwA1gLWZ1vESAv0ODZk1nXhXd2z1nCw1gA7PJfWa9ZmFnI2Y9Z7KmQWcNZ5IdyNhpZ2FmNhxEaevoPZI7Ktsh3rz7VMWhg2X8Z69UXfNNJ0wUO2eHVNtngmeSZx8RQoGhk5VUMKl9vWJmA1r6gIMxEIfimyJmbBj6iQCAcWdrKPFmy6yfKIZiiWZb2tdm/wjkiltnRyiGYu4cGmewuwCA75HdMo9mGIlM490yENTONUZmymb3Vd8JXGZYvFpnf1XvZoVnalz3VDoSxWdvZjm4OhI6KhpmZyg6EhVnD2f/ZowZqhyA5ysozjQ1ZmpnlVGvZnVn56v32Ptm3GAyuA5nkKmnZjYd+oDoFdL1mofES9Dmlyn3Zp4ccOYQ5rDmmLOQ5wjn22amZzi022c+k/5nrKf6YG6H6NOJZiJDaOfDpt6Y8GdNZBVSwCO9ZFBm4kKafA1KUWe45t7JkWaaqB0A69ElJhxGw6ExZ6kw5mE+JBumEoEK4oBnTWU8Bd7tcmeBZ1mgd7LlS6jnVOeWqDK6ZWfUQ6IAihxgdXTmikjFZ1lm/Kj05m9naGeE5184fLopHcVnbEKs5oVmpulsQq1ACaYC4p0p2Kmc539nmGZcQ5znAOdLMJzn+6VA5vzm4kL05jVmvOejVDgHYOc5ZtW4aOcGQazm6xo5GqXB82aZyLTnJrtHQ7BV3Oe3QI1mY2ZcQqTn7EtgGJLnFObi50T6D4GhidRnvOfKvEDGLiqY4P1n2KkNITKa4PDzZyRCRsn27FNm5+0zIdjntOcMZqSoOuaRU7K0YuYO4fC9d2YlGIapFVMyZ+kYRudAZ1dm8qBG5gdnAIapWzLnwcNHZ7Fbt0AnZvMRV7wCO/LHGxTnZtqgi5kWXGTmV2f/WkKhvxgTpikcxubaoY7nCmcHBo7myzCYs23Y6VvOAk9ma425Wh7nh6svZ57n8djTcr9nyshjAPlm32Z4MQa8EuLlnM4ZtRU/ZtaoYDAXlOTi7ufB5yLBAOae5ngwQeZVZuHnLIhe5noq/2fe5v0ixqrcRvGQ0uDZGEbmkOZ2Z8bnjLz44TJdceZu50WSsUBx5s4YB9POZ9DnSeZjhmLiSOcioC7mnhwLEXqhaFDWJnjGe2fTEK8prwkyvSxnWedQMBbnJmdZ5hAwVud/MqboFRgm2UZKbSdRR159ABRn8fDTJmWoFHUnFeYDG+oIUKARSNMpleYOJ/dhXga5KSwVPOw158YoSKBAkXQmTDF150YsWulF0ofRVecTG03mdSdQ0uHkYkdZ8FrpZeZN563nEcQyAJzF5zEhPJ59DvDn6NXmyAalSjigskkVGoRp5nwSSRUbneZ1J73mHn3l523RCmzK4almg+avp1sJ9Hp958T6wX3P4MPntefhJ9TBs+cD5+Z9jhyj5+Pm8+ex58EJk+fmfeLCGNuj5nXncoUr3fdgNBX9JjTitXRQoDQUPidRwABZ+uWTAGSyLRvANWXi2+YyFOvncJX65X3m2ugn1V3dLn3E+jvm60Qb547IgjLwOcA0+dSn5tA5MY2XmuDoxomDZEubs5p6wX7jzl3X5+9pvnC35tlJ0jVp+btnQVh34Lg6oXCP5p5GT+b06Cis1+awYdI1u0Bvagead+Zf5uMaIej5W3LoTcgGujX96yAorHq7tNDPIBYJX+bwhsDVr+b35zLc3usP5vfnGYxgFwdpf+bznYAWf+bgFlas8zXs6JAXa7o+mEAW45m34EWJYBYciwy6HgAgF3fn7FvTgEgWoFqwF+stoURO6TfnytAcoVAWiBao04pb7+ad4zNRhlrYF8VriiY0uUpAJyA/5wfkyZsY6KboH2cYrfpbhBbQF3FRxBbv3VVDRZLsuQ0hGOkRB0HkJMuFaDHhqWoNLbpbQetnQ1gX+BcAFvJ8+BYHICis3/Oj9FGbVokO45AWzG3yFFohuEFQoembQpGsFiwXp0NnZBwXg1H3+uDobYM2+gBlJuFPQnc1FanU/bwXYDtKLdbJMYzcFwl71shsFywXMXvCFxm7dOqsFiTHjl30qQWazXn4qlgWRXSjZBQFt+BfppHoETXL2njpCFLvZFwW41BOoFe6Y/lyFtIXBBUKF3LQinGcFQoXLS1xYOwV7BYDR3qjmVNigFHDTBfCQYaoebgGMIC0FAXsShSiGhY8Fnm51nHaFlwxbTU8SjPzlEFsyhoW9ogmO+stnQHcFMcs1OLLLM9g4hdyFgYxVhfJ5Ge0ahaLmsTnYWitfFgC5fnfG9ntUZrSFB7opSh5ua3alzSlKCsN+sG2cZwX1hWifXqQWFo8Fm4XKpXpNeZ7NGdT5N4X5uGuFo4WiFteKBfSDhYeFpE1ldvOg6XAjGqYmnxTJhe2dc6CZKj/R0+VbhfR2+wU/BeTZgCAc/OIFUupqqbemHfpARfHNQ4XIRfcTBIoucAxF4rYebm+Fq3RwRdmO8abQihdMioXgRZvLPpwIBctrCNxY03jZKggUhcek4LVwQk5sHG0Bbq56LKmp7TznUzT3ODHtDq7hmQbqUUXtyz+YfwZ2qcHtJ5HpRfolOdYZlxau8UWDSH9tYNRhRbVF4AQgBa0sGam47SMQUYH3OEGyDbnZcbUwDRJ2GHup6k7cY0iOgUWcbTbum0XYqcFF4NQ80Bn1HkWORfxu80W2QzdF4NkhWn31fpm7Ra+jE8RuGwkRsibmhZD83uBszyX1QF0vgZ75PuBPqZFtPoWgxajFvm0ebkjF+MXu0FIsgXdgxZbtMIUX33up3u1ZKw7Yf0X3Rc520hJR2HiZ3kXVH0jFisWSxeRRikILRfjF7UWjVHvbW0XaxdT57YoWxcdFysXcVDsB4sWIwZIQNwGaxZ9FpwG+xYBR6EDuNXaUi+7xxaHm98ZTCb8DL6ptilnFga6pQImKJcX4Y3zktubZxaeRjcWCihjIIrm4PDny6V7hkD3Fp5BpxYSKE8W851JgHVVOQfA5eNEngN3F2FSJ7sb0/woBexJu+SdeBk+c9sX20HfFxQZNVNuQHupX1VVU7m7YKNSoK3hJxZWrR/DAJc/FzbntHykyOOmtxYrm21jWhZwai+CBhyFp6xkYgiGKBvQBez6FuCXVxeqUnvlWKiJmw3tMxc/QCMUEin1ybfl5iysKfXJt+GA4UCWbxa0reiWoJZO5FCWWJf95TuR8JaVcm1iWhe2KTLFQikN7VMW7QqJmnCWlrqws1oXVUhKFa8Z0JdT5RpAeoAElmcVKudUoiSXCZEjm/pgo+UJkGiXplLjUQJUGJfSwUwm9WfiqMCW/xZIQOSWXwf0lnq6hmhHECroYhgaurJ10OVsly8X7Jdi5Jc8bBd4h0DlHJcKFPygSaxclmIYnkceCavkWUJGyTGMApfcGMOY6hNuQKyXchnkmnq6Fgnd5GyXz2cZjdhgWOV91GKWYhaNp2LlO60oQBU9VOQ0FT/mqBQTRXyXEpdUfHKWSlv1vHq6j7nfFhKWWRZNYZN7qpdbhS1Bb2VdU/UqeJfDFo8Yt0laGX7hx6YX5F9R1WkylkbJExaM4hyWM2biFDqXYuS6lzMXZzCalrnBKSrGrQ69chip68rRUtDKlzyX6y1C0FaXipdxUTwj4xHqlm3l2cyql6ryWRdZDGHpdpeifY6Wyhip61QVFqJ8oQ6WNJYyloLlVpcTLItw+hjyly7lnpeGlsPGqzUXFqsILpcBkV7lnpYWlwGQveSZIwGWkUa/FxrjlElU4ImNr3MhlkmAHGgyuiGXgmj8aOVLTeZJFeGXQGaCMyYV4ZaJHR4b9qkoXDAtFUtRlmaUjOetSjIj3GnqSHYdyuN04BLl4ZMUZexoKZZeKmJ7GQGc0RvNX0GOHRkVkZbuHc/gOZfRl2NzuZZ84aGXGZazqEeY6OcfPVdRQ90Fl+zjQIiX1E6UOObDF1YrR0IG7K4UB9NMZy+8rhQ0hvLnpZcpFeGXM2aVl5EVqeaUlrxL3qL/sB0tIruSzS1yTOvsaBqQsVKDeqGWBubxU22WSxPtlwuqZYTXySWXJ0LywBZhZZdekzZ7GhQGQUwmruiZl8qB/ZZjiPK5BhRDlnmFjgi9llrpWZcfPKOWBZedl5LiFKKZVaM0YZb7KL81+xfovZOWhen/NKJKiZbN6XOX7ONxlnOWHzTk44uWOIOPNIhnM+Ip6aPcU5DCevspvAiYiqmWU5ZvNV7CyZYYgnPcl0ISe1PphvmqHfmWS5a1CznaypkcGWUL5Qpio9mWW5cHl5FHy+a4GeM1MRwI0fI9U5eeZo3gB5d2Y/ijX0K44n3p9HAUZ+zjxHp7l7ZpNZZXlguWwaF1lgyFU+lO8edlxheShoqiTOp21VQABzMtlu+XCKy+hIN7g1SXlh2XjnrB1d+WXZfOes/ap5a/FwOXk3r/l9tnW9Vnl7+Xt3Tmg8NUE/nBe1z5GYHpe9twczRFhMOWrqGgV0OXrntOOVuXj0NAVp+XlqendSBWKenlaUQXwqNAV6tU4LSriCZ7CILIVw+kKFbW0KhXqqJoV31ZMFbuUhhXR5bvGyBXFekLlhnD65f5gtogS2W4VhKhLzCI57TT+FZ8oQRX22dxlsagxFYxlyVVXtmINMuXTeaVggmY4Wc7pCRXFFePZ0mX3eUGy89ml0OblmQxeFdpl9uWkb3UVqWFu5dEVwR4+5cxp0RX/nEzl8eX+5asV7dmTqLsVoiB9FaFlyipiO3bZ8WWeFe3Z2aitZfsVyA6q8UrmxWWz5bpghzpPhYX5evnT2UchFqXMLPzapjgj5dkVtiBT5cpe2fJuIkNliYWb5aD6umDJ9QflhKx6DEPsWtDnnr0V7xWGedflnWQXFb9cgbsvFaEVx6TAFcoqfJW25GhcOpXJ9XFGxpW8lcn1MGF8FdZobZBElaQV9BXXTkGh5ul2FaVgrjwZ2bSqBPCPOjQBaJX9GdTiMARhlYLyc+SGFcmVlqjfZbaV3w0r6U2e1ZXkQRxG12IEkgbWtsBEOb2lo59IxHQQMO5uzhnyZxVqMFq5IyKZPzuSU5XBdRXg25XLuXI2RmV9KmgbUqm8eXuVnblB6Fe5Z5X1uUHoVit7ny+Vlrc2ZGV2uHkpyzuV/oZPSl0sLtyFZml3WLjp+QUyen9LEMuVtumGnUvFR5XEVBFE45WUVff5Y7JjNpOV/55lFWxVoRGHgaT/NlhoGYuVt5WViulPVFYNHH91YLJ5PrpTUyxFxqkQm8dyFT2K5spGkBfFW5WkMzpVl3U19NIsqax2qFm5FclLsXaoDUQVyUpUeYHqdQJV755pVZGAWVWFDqkPIMRFVfaTcbIrGmowVS6/lHVV9FWcVbVVw7xdVbQbSf9STiz1DFWNrhNVw1Ww7nkoMo8ZVb1VhvbdtvI5QHLM1Eb2sfoEivtVzPbpNQSKktRN2fQGN1Wvow/lRPbsonphUHkA1e/Kdp0lcudLH1WHnT9vBOAXVf3MYoqSk0L21jknVdTp4PJUqHDVmxXmtoQmNcQRipBUPlh57tDQWHLLf3nkAtXmcr+UfNXohhhdCh9BEyy5FNXtlg7PdwYq1ZNTRcRO1rqdVLnGsScqHNWbivCTPSic1amK3Yrlro8TFtXPVeSdBBkRpgbW5vUVGPOK5SW0pgc6CdXQqGUVmhMk0ncGBdWYbmwgR1Wi1ao0wnh11eTV4nLtlhbBxtXAcuWTQ2RR6bkrBhmDJtJ22C8PBLhJKW4Qduv0PDLNvxPV+9XuiriA6ZYr1fKdd3QIZg2U0em5ivOub9W+1c/VlBl3wgnV39XcVYdViJCpoXLp8DXFpt7UfnloNa6AWDXEVCjV8yJ7+xBF0NXrKZI1Tt73EJJUOIFrKdT0E7ntBQDV9rn8NcR5eDXhAw0GlwCk1ZbS3W1BqyCCJg9yNabZlg4gEAUMEAY81cRqdrnMNfBp9jWMNcQ15mnuNYg1mjXq1ezVgTXHh2jhOnbqNdE1uIC05IbWlDXlKLvRmlWO1ffV/uQZqI5phASbBjrXNfrY/Kb/IdWxQh415b1akwPV6ynEhWUoq+WJVNnV3qwjNfhURdXvHEUaAbDLNZNYNdXmNeVKVDWSkzU19rnINYeWcdX3NcE1whNIdrDFfrA/PiDRQe6GNZW/TTa8NYC1oZ4y9zMp9n0FsSp26LXJNfGuOLW1ZLjCYL4+dyM1oT0aUTvVsymhPWB2vzWxZJS15ja8tZC1v9X6NvC14rAY6c99aynINcyElJpaiChgTiw/0TazQ1YlIHB/ekyY6i6UM3He/Ma1q6mumkgKm3U20WBLXrXF2oG1urXGvzX/OaIIx2ZaRdqa5FG1wpGZtcWLerWhLHm16upM8EKRtyJaQ0FcCKXDlHgQWGXNteY5uPU47kGDWJJCvj+FoRbs2A2vRYsdRMtNC7Xq6h/yWAq5jvINOWk53SlaLEW49Se1hbXC0ArDEFCW4khLK7XZaLvuS7XI81O11La2cHT5QWpZMFe1168o2DOYlbXEOHmzXqaoRdigAMRMZfB1sHA7DS2yOd1VtapFnxksDVC4q6nj5lwzWWiYBRTqE7WCRfINbCihSju+wnXxrQp1lmo4da+197WVtdVPV01/Jnc4EmgBldYcb6JJterGEG1utYMkJeBHdT51oGDZsta1qLMrdEHarDX0/2ep2EMIxdmyxW94ykRgkXWhLBG1iQUBdf7aibXUBTTcSG1uZH51lig4bR111XW9dd5sZbXfoKN1ztqNdeiKUptOLB217ixBXB7h6pHDtfsKIWaykae13XX7dcekrO4oinIOtXXcka9103X3dfxu5HWUpflys3WI9RgFD6CzdYiE2rXyOSf5ISwhdZEnEvkkDQG1sNWFujeV67bB3VmDNJwC+UCEhXWpOWrLNH9c9eje16aSdXxSEP1CJz15bXXYyCy5WPWbdRN1slIa9bmUOvX+hmL1tKz1teiGK7ktVe21rJJsOQ71lzm5GDEKnl7a+UQl3iXgt3T5QjkB3stNa05y9aw6MSXYlf71luJB9emmonWx9eo0Ad7SLO+10enHUge2v78KdfCGCvlebEd1rTl2+RFK604j9cimqxwvSnd5ZvWDLtCSRIAagBAAAAAzaQBEABCAAgBLwAcgAgAUACIAe8AQACfACIBMybsAO/X79Yf1lAAUAAcAZwBX9b8AA8BDgFAAG8AH9fcAAABqdQAAADV8QEvAFoAwABCAXQRayd1wQSmZgGQAdAAf9ecAFABoDbPUR2qecG+smYAbwBPAYg3SDbIAFgAyABmAY8AAAC9tQFpAGuhcpDUCaQA9wBPAbUBswBAAeyAIAFIN0AATwGkADgBMDdIN3/X8QCzJmYBaDewNoUQxsDwNwIACAFYN20AGDeJAGYBuDagAXg3uACgwKgBAgHKAaQBzIEvAAgBWYB0NqQAREA+AKQBnAGIAKWAcAEKgEAAiADAAA4AQACQN5A2AAEkAADl8QC3AU8ATwFgAQw3zIBQARAATwC/1qAAfDdf1k8B/DZUNtg2DAAH8OI3pgG5AUQ3xDZCASQ2nwCkAGQ3rDZIN+Q2shBxQE2xDUBYN2I3iQHUNukBNDZ4N7UA9DfoN3YBAjb7AEw2zDbcACw3pICsN1gAnDZcNtw2vDYiNvw2AjaMNvsBgjdCNvcBOjaiNwo3hQHiN9hU79c3AbcBdwH3AQA2pAGSNzA33ACfAbkA4DcQNlA2AABkAABEAAHk0DYwNrA3cFAewPjBI4jPQAg35AFAAOQ3OxDYlPjB33WfQag3zjbuABg2mDZiNz3IcREScd/otDZ0NzkB79cEN4Q2QADmN1I27ACkN2Q3sjc7EeANzHwoFZ9BhjchoOMIN2EaIeHAyje0Nvg39DeqNno33ABvAS8BfQFaNxA3kDfWN9w3NjfWNgABRfEAr0DwANIBrDdsN7gAlACSNsQ2JDYBNp8AgTdIN1OJ4cDldDyhpwEhNqShoTexQWE2wiveNxE2qjY8AGo3UTbAAdE38QExN9YBPDYAAEj61uQgSTZAAKk2UjbSNkAB6Td4UA43k2A8kcVJHjdUNiMhrFHUNpGR4TY+NmiADDZRN9YA0TYxN5w33AAAAcU8N9Y2iTfzgGU2NwCkALcAdwGIAaY3/9dmN6k29jdYARY3MQGWN9YAEDY8gVA2pAHQNvwB5jeYQwcnMsEm1D8QTjaIN4E3PmEcfDbA7mjvEEABbjZjNyIAHjeUNzU2pKA4NsaRBKB5N9cBrDekAIQ3syb+NhU2MjcVNrI3SDcpwDbBIuETNtk32DZTAe4A9TYqNgwBDTeMN0w3LwHMN1gBLDcqAMk2iADsNwHApAFFN1gA/TZQNjo2HTciN/w2BTfWAPo2wjcGN6I2MzdpAUY39Ojv1zEBizdpN6Q2yzdYAO43gWDDNnFAIzYuwWs37gBKNrg3yjd0N5s3kTdbN+o2bTfMgZo3HDbNN303/TdHN1gBfDaGNyc3WAGnNgY2xza6Np43IaEXN1cB7TafNyY3nTdINmYA/jYWN2U3vTbAAeA31gCbAAM3WACDNhwAQzfUmVcnwzeGZdnAozcPAAQ2UzYYmchMYUDWRz3BkzboNtM3dgG/NzM36zezNxs28zc3Ngs2fjdXNiIApDdLNpU21TuQt9lASaE9wA83ijZogY82ETdPNpE3+TaNNuC22zY7NuggbzZsN3s2KTYHNu83WABgtx82QAGfNic3+LZAAd83wjc/NoY2SLYXN3ZAEjeXN2oBaLcOAei3WAEyNzc2sLZbwCJIiXTYttS3Dzc4tnM2TzZwASo2WzdqNwS2Gjc7Npo3uzZaNyS2QAGkt7w2VLfktoI2QjZnNry32Lf06Eo2/zYmNp029wGAtt02UjbAtpY3ILfcAGC2Nje2NwM3djfk0FLYfGAsZSfB0LdqALc34QM/wajQi3BPwAi24QCItjwBzLck59Q3nzKkAXM3PjfzNws2IgBEN902FTcYt73BsrEevaWFJ8ACtyDhGiCst7i3OQDstwU3hTYktlw3LTetNxo3MoBlNns2+zcpNlc36rbXNxq2oNBSt4m8rmGIt+c3l8jIt4xWLIGstg03zzb7AE02RTbctngBsTdxNgk2rzYugO02prflNma3yzfk0KlxIglXnDU2ijZBHTq2KLZ6tra2+rdNNlw2JTZMK4k20gH/N2S3ALbCtmY3WAFAt9YAvTdqAH02pLf9NnY3gzY9NliEHuFFQCphWAAyts42UzfwIIekICBv7SfACrcNAIq2ArazN2aFwEA2t/g3vjaLN6a26LfSN/S2Nzcwtis3XyeUIQkxkCBxtsi3SjYqtja3bLZet9YA6jfbNxy3hLZctgQ3yTfsNga3YrYfNzy2ALa6N183FLd8tj83hbdUt5a32FSCtxI2zrZpN0m31zdmt3wgtCHht4q3pbbpAI82urf1Nlm2+LYvNjm3jrfcAG83BzfctwW3Zze6Nny3+jeUtyW25zfut383EjZCtqY3wrcBt902orYgtqC3WAACgVY2AABUlAHgAGS34LcQtus2lsj4YebJEbcptuUB7axUgWr5MbfuN9EA7rc9yMq3bLEqtmiAvjeot4m3zrcVt2a2u8ijtjao4XHVtoo2NLbbIJ63Nrb1t7a2hTbet9wAJTfMaka2TrdJNzc3ebcBwOU2Fbd0tuk3LrcryUotV4HnIebJ2LaLt82IU7bPNsu3Xrd2twa2rTcNtv4BTre0tkm3W7Yptrc2c7aWyFZme7ZKtvu2xSAHt3i2LbfLt/q3XLdHt4a2nLdGt7635bf+Nui2DLYjtju3c7cC9fnHe7ZKN1e2CbfXt0W2drf5t9YAhrfHt3YBJ7bqtzO3dLZPtue2UeQXtykAl7eltle2S7cHtje3h7cft1gBn7drtxoA7TcdtoC2Abd+N123gbfAt0G2YrfWAL23vbeEAf22hbZAAQO3obaNAFrhE3HwN1ABTjdPtzM3z7Ya8BPJY7dTN+O30zcLtpO3tbd5NtO2arZgN+B2P7dsAQE327f7yTu38HYTyK+2aIBvt7q3S7ZAd402K7ZHtqu3xTZHmr638QFEtia3m7aPtme3s7Z/tvjaVCgLtxO2+HaAdu+2FLYft7e2LTbHtyB2J7YPtqe3WHfYdwy26DcUdlboPvxod1R3GiHUdvk2hHdYALR3bzZ3tl+2PADftlh2W7bYdr+2UzfntpR2eHeXt6+2bHd6t4R2t7ccdnR3d7elNgx337fcdkABPHdMdwbI/YJSQCx2lrdodtR2mbYEd4B377ZEdsB2QAAgdve267dlNmB3/rddNl23IrcQd6K2PbZAANB3DAEwdyG2ELdwd4kB4nZz4f4pw7e/tkxh4nd7+/4pKHaqNxg3LHa1Nuh2bHcYdmi3p7bYdtu2THaJAOJ3K1am4BO3enZSd/G20nY0d8yAHHZNt6u3Gekkd8a2KTdkdhq2OHdBAcZ20LRJKXh3rHdSd/U30nc0dzJ3tHaft3R3cnagdiJ23Hbkd4Z3Z7a8dsx28lfBBdnB9neLtw53eTcCd+x3TnZCd852wnckdjZ2ATZidsZ2uHawtPZ2/HZmd9a25ndsdjJ3gnZNtnJ3wnaQdyJ3bneid+53YnZBdumDnnamdhUhAHfed9UBPnaTN7524XYudhF2frcdNp224HaBtz03EXYJd8p2AAGE2Bhwdndw+ZFeZJ9RCHcINjC2tzfuwVMUbmQXAKg2wABoNrx3sbZKt5q2qBD6AJgQ17Y1AKi2mHfsAG53NndGd5hDf/BDG0dQsXdpAP6g/WDFd9nAJXfxdxZ23LY+tqJZVnYbtsS37DYBdrO2tndf+OygfHswVgK21XYHgDV2AndZtr53YXbct+F3/nYKdl03DgBAthB2qXbKd9wBaXcZ6Rl2wEfkCC6Y7Ouad5G2oXG5d0cpYAgJdgV3CLeodpJ2xncBsEo38gH6d6q3BnaMdkZ2SHeBYRV2pLDs6613waCTdkQQtXYddgl2nXfetyU2C1z0d1+367Z5to12m7cPtuV3M3fNd6GgSUWV6vN2n4btd3F3nraHtoJ3K7d+d5x3YAGgdsc3Qrfdd2wBPXZKd7133bd9d+hoA3cgg2pglYPmYNl3iHayt/CCtjzTwaidOnaFd6W2RXd2YDt3ZnaOdj0ABDfTt2q3ZXYut+V3IIMQ8CWCHgFbdkq3Ib3VdyjhNXdvt6F2TndLdsR2i3H7dsa3DXZkd+t3T3cbdxMB5GHndwBAVXYMAG12C3fFdx93tXcJd513iXdddod3yXaKdm523beQdul2olhndg7s6FGaqLWwLsFDdqm2lvVFia7wMaARZDd243ZUdyvI0wBnlOI24kAfdqF2BnYztqJ2M3c5duSha1B9AwHIgPa+hfN2aIGTdzt3n+CjAeZ3N7d7dqS2UDffd6t3pHfWd793TXbPd1lhlKZeqTD3WPdvd21373ZLt2QQePafdhZ3IPacdyt2XHe+tt13nbYQ90p3J3fWAWl2hUlQ9keJ0PZDqC0hF3ejNnD2mSBbqBqgsKiI97p343dI9opwGbd/MKj393cldw93pXaRdht2GPbe7ePhq6nCw/c2b3ZA9jj3C3Y2tpT3jndU9l93oLcE9jT2B3eE9xu3JrcMduj3UXeKYKT3MiEC92T2Qvd3dyF39TYi93j3QHbOd8B3oPdtNrT3YPdgd+D3KXakNn12DPanaYz32QykUcagH4mw9jdSWiBbqE1xpwHs91j3oKA1ymiBXPZTdqV203ZS95W3GPf89nep+qCy99j2cvZTt/L2VPb490R3fTdi9y539HakdxL2TXfkdrZ3PXHY9gk7V4jbdu92IKbc97UBZvYg96L3ivb+d0r38nfK9wp2PXYitxC3qvf091gBaXb0Ber39ZGjlkZAsPaIdyz3WvY7UH0ghWE69/l257c3doo2evfI9uzBKPYG9zz2hveRd+j2w3b8958MmrCC9jW3svYU9rj3jveLdnV22jaW9hF21neNdsT2NvYk9rb2n4fcad73JvfbdlH293aO9tiUCvZ7dhb2zvaE9y72ALeHdnT2qvZBt2A2UHce9rg4XvccoFvUlKENQFr2LLGs9xUQIKf+9mN3CreI99i2QfZc98H2uPcJto93mHZ0tu52Rvbh9+E9efdJ9/b3OPYp97gA0fe7dx13+PfctrH2DXZrdr93kveh91L2X3G29onQG/Ec9qShkfYO9xT2qfbm9wr2fnbp9uL3B3cZ9uD2bveKdu73WfZpd312YZi599D3W+DQkfn3eWEF92eUSSHytgH3BXfF94V2yPal9rNGJXZo9492FfeMdzN36PiRut1JKHD29+T27fdR9h32Tvb19mC36fZx9ut2TfZ89sN3k9iJ9oP2s/eC9qb3yfdy9yn3lPYL92n3snZK9/e2Gfd+tpn2KXa9d+72kPd9d0qyA/f/kNDocbRD91lgw/cwPCkhI/dF9rG2Y/a3duP2grel9zX2qrcG92j3TfaV9s4Rh/d9dbP3QPcO9rX38/fR9tT2Vjdgt7H3P3dE9sv2f3YY9yv3MCU39go3a/bJ93P2l/e49yL35vaydl12LvdJdv62R3bHd733qXbBtkAB6XYZdpK2nmG59tMR8+CkAUf3SsLa9gk1YiCn9wH3Z/eB9+f2+vcX9hv3KLch91f3y/apt5X3QA+3Z7f3QvbA9gR3tfbsdkt29fbcN4v3T/dx98/3xPbT9w+Btve5NHAO7/fV9sL2CA/39nX3iA5b9t/32/Y/9rv3KvZ79n32//fpd/12gA9VcEAOKeiA0CAO2fR+9rC0PKFgD6P2HPZI9/vJEA4o9hP3H3aT9+X2hndT93z2N/YlUIDRcA+m98L2WA6IDjH3YrYN9i72S/aS97z2L/Yr99L3RA+XUXQP6/Zm9gwOYXb19jgO8na4Dj33R3du9j03e/bZ9ul3i/kStqG2t2xED4dbxjHED3D3qj29xvl3p/bjtuQOJfcUDsH3lA+o91N30A8sDzAOtA+j4Vk2GA5z9jX2UA70ARwPn3cL9kwP2/bMD9b3Ffc29mgOq/bg9cYw7A4f9nIOn/ep93X32A7b91wPtPe798d3vA999gz309X8D2p3Ag8D9vQRGlFCD8f2PBJs7KQAuvZ6dhQPnPYX9hIP3PdUDmV2U/Zh91IOmPaCGRpRqg+yDhwOm/YP9073XDcKDvJ3ig7x90oOCffKD6/3+g9mUVYOmA7y9vIOovecDpoOrnY79sl2Kvc993T2J3b79zoOjPaEDtD2h/eGpJmmQAEGDqAOaltLYSIO4A5iD2P3Jg6QD6YOGHaSD5P31A4WDrdstA+aab4Ozg/wDi4ONg9YDowPFveP9w32RPYoDiwOqA8v96wPuVqE2tX2sg/ODxv3n/ad9ol3zvc4DloOeA7aDvgP2ff/9qU3UPefJFXw8bBeACz2OXYeds+wdIY9kMYPrfe2dxN28A9395f20A6hD9N2zfYbobN3WQ7PQREOhQ8EdpwPGg8pD3YPyA9L9nEP8feoDrmhQbCTYDIOkfbr9moOi3dRDw/37zZ2D24O3A4eDjwOvfa8DukPfA+e994OtHivuKUPn0FH95XBYyHdIpMBSZF5D+QP+Q6WDvQPEg5X90UPhvbNdpG8JUK1DokOd/ftdg0Otg5cD24O9g8oDtUPl3bjJr8YQw/GD1V3dQ7WD8D3Ng5IDiG3XfbK9932zQ+/9y0Pf/fpD+l3OffeDkG42cA1cJMOEbc+9jkOGTbi3MFQIUBjIFmQPQ4l9gUOfQ5mDyEO1A7FD2a2ttEE8CsO2Q+TD4D3Uw5JDvF2Mw4VDsgOjfbP91UODg8zdjm5fjBmsfsO+Q8HD+/20w6hd5v2sneHNjEP3/epDx4OWfcLD3wP/ffeD7Q5YuG54Jqx2Q8ytzkOkZAWnbHjYUmbDkEPevaUD6YVE/Y7DuYPoQ/FD6eg6UE24E8PmrdDDwUP7fZRDwwPDQ/Bt40OVvZjDqcONA85DhjRzrFPDgcO2PeXD4cPcg//D+UPX/ZuDlb3TQ+u980Ong/aD/gPA326DoO2yzjxwL8OQ3erD88PSDedDowtEZkyOQEPZA+69uIP5lMfDlQPnw7AjmEO1TunotWZoI8XD2CPGA6RD0kP6g7YDrJ3ZBGAjqt3Vvdrd8wOT3dxDoy2uoFa4QiPr3Z1DuCPuI739xCP8g7HD7MO7g8/95n3eA73D313Mk1wj6G3aVbfhmfh2I5+D4iOkbdrD9HtrcMFHKiPY3eBDuf3QQ4fD2UPZfa89sSO4w5TN8249WCgj78OYI7k9sMO8/cUjq4OW/YEjzcOig+VD0SP5g7fD0qZQ8G14DyOOI68j38OfI7JDmn3kI8VDk0Ptw4wj3cOavce9ujimQ4mAPywd52T8M8OTI+fwunxJ1hiyF4xbw6R94Dgi7ZHBN2mZfYPdom3/Q7X9rZ3FbByjnqJSmB/DtsOjvetwXiO0Q9YACU2/A+W9oSPQI6cj6cPv7ZwF4fZmVcRRGUPFPc6jx32Eo6K9kABeo/1drcOrva/9zwPEPZ8DrSPp3dtD88ZHaFyjvPxwA+Mj6gOp/s52Fk2RfaBDrL2Ko/UNqqPnVifDv0POw4DDiT2fbHyAQqdk3Daj+wPwvemjtcO5o+rtrg5MQ7W9/YPwI9Ij7aO+TnGj2/3ZI64j2UOO+GIgLqPAI/mj8R2YZhg93MP0I/zDtaOOg4yjlD3Sw4yeGqc8o/2j9l2SI+VgUIgbuJOjyyOxfesj+62GMDuie7Isofod1AO6o7ujhqOJPYR4LK5yuKwqSaPUfY+j0cOsnYlNsKT+o8094SPjfaYjsKPMY7dnK33PQ6XD8GOpo6hjmaOGg85j8U39zpJdlKPkY709l4OMo7eDgIOtTf0kSs5iRFH9wEgj4g3Qv3oDIWJjmf3SY5GNxSJLo68lDmgbo5FDumOMA89yDWP4zhk9zyPbfZXDvL3dbYAjrYOEDeEAZA2hUl+jkSOSg4Bj22PTJArD74hXo71D8L3XY6QjuaOow9QjhWPVo6Vj9aODPZMKrKPbzBFQSKwrLHyjzN2ijEMES3hB6w5oMqPgfdbDt6PfQ6tjl8Ouw8ajgcaEZyr4YKwQ4+djj52OY7mjjvgvY/HDrEOVQ6Gj/2OxX0aEVOOojlZjx/34o+ljyOOUI6EjtCOVo4tDlGPsI5tDtWOZmkBXDM5HhCrD3GOCo/yYVHcTJnZzbXE845NjkyIzY5ThCH3aY5Lj+6PqA8tQbIBs45Y9x2Ohw/kjvQBw46Uj9cPPY+9j0wPgo79j5iPJ48AkIOOAym7j2oOeAHPjvyPEo/p9oeP1I9pDzSOE45LDiePDJinMS3gq45xjpd2JI8C97OPn/FXjyvIC49DjouPt44Fj2a315j07TuObThfj/UO3Y8L9q+Om47+j2MPho6Mt6CImHjQTk/AME/TDiMPrg6Sj6OPlo5/jn/30o//9ljLUPaOitOhabi1jg6Pl3YIwLTVDRnoew2Pog9k9papVxAzyTeOao489xBPW4/vjnDACPZzOB2Poo6dj+CPeAHfjl/25o49jxuOVI8Gj0KPkE9XkFhOZrGDj4+O5I4hjxRPyQ6g9qhPB45jjkeO449Rj//3qwBqdoO3UVhMIDM5QE9nj8BPTI4GtTw4c494Tqh3jY9gT70PC4/bD26Od4/pjmcOJwGV4X1Yu48yD7yOe4+hjrYOG4+vjoKOJw+xD8RPBY6CQ1DGYwDCTsGPiQ9PjuUOL4/7jkxPeY+/j1oO6E4e9qxPAA8AT5kOyYUhvE/BtY/DdyTBE7EysUYOo/asj7r24E5rjmmO5fYCTm2OTRhFAduwh/FkTk+P7I6iTyhPcE99j/6OJE5mOOygfbB6T0WPOI4yT/pOpY74j5ROsw55j+L3VI+4DncONI/oT2l2byh0jhyEBmESeCpP04+Xdxyh3SNWrRjwYE/7yZpP5E4cjqH2Ok4LMr/huk5YeMhPVw7rj533W/dyT5ZP1E9fDzROEw5fufZO9E/FjkRPPo5eTjcOv47MTzCOrQ6ndzaPAE7LD45Pfk6cTr73GVFJUbThHPDOTr0P4+Haj1pPHI40TrZ2ew9PBWOxYU6mTmKP0U67drBPlI6WTj934k5bjrFOGY76gOcPvoEmTx5P3PcBTk23gU5Uj/JOaQ8KT5WOrE/Rj0pPP+GPDxARHE6MjueOM46hcMxqLXkY2jxOunZoj2yP4g/ojhBO2k6QTsoOPw7oSyC00k7JjvpO/w97j+ZOXk4CjoZP+Y8SThR3lGOZeAVOGU54juZPuo9eTkFOaE4KTgsONk/l9OC2to+eq/oKBU6dDi4xyI8FecVP6k6iDzxOpU/vDmVPZk9mDhVOHo7SoSjADBDTjv5OZk41TgZP/I8WTk/2KU5Cjz5PAw8kj+SIR4jDT3pP9E8jTs1OYY6jj0xOrU/ZTm1Oik82Tur2MY4xk0iKnliiOUf22eh3S44DvnAlToH2xndoj/r2RE4DT/VPsU/emAe4U09VT4UA5E8yTwgOI4+1TmNOfY71TqlOgk+VWUPAO0/QT8JPYo8f93tPsk5eT7NO8k9BTtKOC047irKPRo92XZ0COaCqTtFZY8gA8YWhc44aTkmPzo6wMymPf/i3j+VOW04k9pqPf9iIXNSHSE8nTolOqeEljplPdXfFN00BdU8nDi9PhU7XT0VdCQ/DTiJPX4/ZjihOW/YlNyfqEY8799wPFY+eD+OPHvfNl7B2to8HGPk5eaA268QOjo5kBPdPa0/gDrtOLo9FPKmOz08xThNOg04Qzxldb0+rj+RPIY81T81OJTfuGWNPm4/jT0uPCM4O9n9OEQ/vT3xOOo6fT55OlnfFN0riyU5zD8DO8w9jjqDPLE82Tg8OoU6Fj9hcN04OTlyOABBfUXn50M89Ts6PHY+wzk9Pqo8iT0RPz0+HTrc3GY4cXEjO/06nTgDP2M6AzmWPDqzUT2+ORk8Fjg/wZuCP8UjOe08AzklOjM/hjpaPEY+HjsFO/48e9mu37U55T1SQSwSp0KpOcOg3Q8F5oERRTuI3TY9FPc2O8M+uTlIOA4/5Q/yEdeGszgxOKM5hjlRPYk6VDuNO747fD7qhA46zsEaQ4s8U9wxPZo7nTgeOF09zTtZPf442Tkeak44UN/yFRNkEoKpPKQB3V85hwxHrgILPDJrRT1jOMU4iz8SPTHdgUCuOqs/f6E1ORw8Mz+uOcE5Mz1LOzM5G99op/xGNcPrOWM/gTxlOOM+MTy1OnM9oT/NPOU9pd+c7tk/yYKePvM7n0cQO88NeI+IACta+dr1PJU88jgRPCoCETmZxws+SDzrPLGC2zoARYs90zh9O344Sz92Phs54zvmOP040zsN394/2zvOwcs9R9vLO+44Kzt5O3fb4zpGOBM6wjosO4Vo8znoO1TuAToARqs8kzwGPPJEmzrMhGs4wzrxPzk58T2bOIQ/8TwNPf3cnmPTsps7UCfrPiU77Tk22Yk/fThJOvs8BjohPGSVw4QShSc6yTj+Ock8WzsHPnM6XT1bOcmZhzvCOtE8Wy+XQds/YToy3OE8eySF5Ds+jdhTPoo7OzjePLs6bTxiPP044TqROOBAeztNP/k+nTwHOtU+ZTt7OaM7wT/HPFc8tQBDxYpH+z9XOXs8GT1lPF0/WTgtP54w2z67QV9HchRHOwE/hT/P9nhGVz9HP5M+ojmCPt3f/Ty2OxE5pz29M74e2MabP0k+9z8hO7M6Gz1RP3s4+T+jOR09pEDgQHc9VziNOAU/mz9T33s7ZTkrOOU+gz//2OuLgznlOd5HIcPOExkVqzpBxIkXh8I7PJc6mTr3O9M59z9TOCM+FT+II4jgPsPhhjc9qD03PSU51z4ZP8E7bjz5gNQ54cJvPHs7azsnPZ0+ZTgdPHM/Zz5bPR46hz8ePYc6A+BeZe88LzoXPkc5dDi5FS84lzj3OOI8rzh9Ork+uz5yPkc7uT0+w+84TzkPOnk8Gz4HOqc8pT2vP4w/yoSkQC8+gRJnPW8/XDkfOqQ+Kz1KPLc65zgBPp86WmVC258+gRCtO6w6leAARofHdzxpPPc4uTzJOt8/qjm5PRyt7D/fOxkTvzqNPP45Gz2jO0s+7DmlO+jCfsA/OCU+7T2ZPn07aNx/Pmg+fzyDPIc+Q9kTOP86PD2JAdhHjzwVPnE61mS8PNsR8XDHOfU9B9uiP/U/lzv3OK5hVsCgug87VT9NO4o/gL+uO8C+jD0zPO84kT+u4kCZHBEnOZs5aThCP789Zz83OCC4hz8FODPbMOnnPobfwjg7AFa3f6F1P+WAv/aVF6C6ALw9PPc4bT5APq8/wz6PPL85DTqERKC6ZzmdOWc/7TwSPeY6jz3ePDk5eITguJC+DzqvP9A98jpRPT87kLpbPrU4nzul22GVQ9vSPSIvELmrOF88m/KtPt5edWZrPJfamD2VO/E+LjvXOpM6MadtPb8rcL7gu1c9fjy4PvC4pzgQuQI6EL5IvTI+YtwoQrC8kLsjOci6MTlPP5Y/kL8xPBM/4D/wkbc86sHKOEGDXIeuAt06Kj5Nda2LFIZrO5GmPT2/KVM5bz2qOa87MLh53v0/VXfNgxSGsL2zPyc5fTvrIz87ozpwuxi7s8ZNdByH7znHOtfZmLofO5i6U51POLc9KzgtPWwBsT1QugY+LXNoukc53cBlwfPivSKpAGC8Uz/ouro+pj4UPfc4vzoy2iM9Y3SYvm85m9rYvbC84zigUFi+QLwMP3i9nXXx33C6ezn4vci7mLkxS9i9qLlzONk4wjFQvlYHkCVouzAjhTmsP8Y5kz1jdui7uL2ROlM4GL66OGI7xzhXOpM4P8BBhPi/WLqQvH05kLl5Peo8+tm+PRs+EL8zPkS/EyUEvMi8Tz6dOIS6qL192JHdHz+4Pwc7qLogvfXcogpouMs+izqCkebCoLp3OWCl1jgZFzpx6Lg9OjY/4TkLOLs/66EwuOs53zqLOZtOkqeZoKS7IzjXPzU6SzgEuxs7LjrzPT7FdEQ/OPC4ID/Uus08Kz5ZO085fzg4vVs/RqnPPSC6jlNIRhpBRpIvOSBBocKvwy87XzivPQC5YLoku2C4lD0uxJ0vTcL4vQ89mLlw3Kc8QL3XPiS6ptibPR+nDXCMvdS7ALvgufC5hLvwu804CLoUup86Dt1Ag7s97JCUvds8XjqhF4bRxLglPpc9Cz4RPVM+bTkMuWISLL2oRDBEjLq0vqS61ziPP286HT14uqbZ+z3Ml3RHrgawvrS8jD20vQc75LjnPX88zzwz33895z08gYwHDLz0uIi5NwSBOyhF9L1fPgC/XzwMurs4gLyLOTcHQUQ15Pkm4ZOAvM0+iT7XPB08+znsuHIS+EFMuUaWPLnAvQnbZz8cvx84sThouSC95z2z3+c+0L/roXU5Fzi5E5S8rLgK3qy5VLi2PCS6SLhMvdPQNzn0uchDTL+LOMy47L5LPBC4ZLoouIK5YTp+xzS8wL9VOAc/bLhbPfC7Hz/wuXy6LDiYDgi+eACttZ0tTLtEu8Y4RTl3PVy5Fj2Iuty7lz4MvLy8s+O0Aby6PL8ov0y5PL7BPOy/PL6nOmK/2+PwRWK8Zz9ivsC+Tzh8vcK6fL/Cv6i8IrkpOP89a59RR4JGVdx3P0S9wUFwu/Np/Ouivsc8pL8AvrY93L29Bqs4Urq13hK/DDsPOaS8lNiloeK/Pz0Yvaw4qalin3LFBjtkuj87mzk/POM+EhMDOJK5zLgiu6Xapxl0vbE9n1eSuv2VMkC4uVK8R4JHpLPAAr4V36K7rL1gu+K5io/SuAq4qYu8vRK7FNyU2O4osrxYvAk80zutxW8ARehKujK6Tz5yu5i8Cptyu1I8krwUvavchT2Su/K+D1/eJZlB/L1SvWOUmd/QvFS5ALzSvLk+GL0wuli+sruKuRXpWDvKvVM/vL5Kv1PiNLxkuUC5srkTleq7BLgfPmc8hLst3jskfLkquPK6krryvuU8qr/rB2iAefShxf84pBFkpAEBkDjcuCU8eCBBwyyCBlhiuwK4bLmkX1q8ufU6RPI/hzpNBkTG+LgzOTK5Nt9Y22BjSrwEvqU7Wr6eCF90MgAK3bq6hzcYwHq+wrst21AuKr1ZOHS4zzoTP6POIrz6vCukoLrav6QVXIUyHei8Orvu2b9OnANUvt84IT2sOYa7IpycRZPb+r5tR0a/ejx6voy/cAdY2VnfpLpAvjS4+r5dxcujXIfGuqjBKNqcwJY6Br1939DVBriDOFC9cz//2IIZ8r3SOmBUur9Ob1wnhrpZBEYLpbcKuNbZRrko20a+3LnSubs5IQWmuy5qX9A6vGa+w6e6via9Zr9YB1jfoaN6vqa6CTnGuDylBLX6vVa7urgGuNa7grwqvFo6fz7Mv085WzqcvaDr5rz8ziimJ9xM26q5CrykViRA0r1rONi+eLkYvOq9fQbqusmhJ9mCvjK9JrmL3Ao5SzqmuRq9bTsav7GmDri0vN84tr6ouOa/4zgUvFC8e9t9Omi5TZ7/wgshNsuquLfZZQwWx1y4MLzcvWq44r+suYq9fkp7Z+GmF8EOv8q6erva37C/eTwovwK8fPPCGn6lrrhOupq81rl32sy7wrxauyq4zrt8uTi59bUVl9sDOaCiv54+9wD+wNdXesU6P/S9iD6VPmC9lr9pPdK6g0ZNwLJuRoVsvkQ57r7YOI68QrqOvkK9JncMwYpS3ruuvp08qL/LOKQ/mrsGvCC/Tr//33IyaL4PgLC4+lAlgXU4XY5Ss0DmWqv0v9q8Xr31Pl69Orl4urK6utlkPX65DoawvL66Bz5lOm6/JTw+vW6/bUFaR7GlJYCBuvC65Lvt3xK4Wr22vcy4M9tpNiK5tsSfk+GD59pcvMYvdrxHQDc4lr/OOy66DLs6vK65/uUWIk9r35xKuCq5jLmBuEvY7zo+vb0HEp6nbGG76roYvOK7bzlOv+S7hLgtPIeyzrr6Ec6+jAF4x866J9qg1RJCarvhOWq+9rrSv2q/VLrGuA64MYEsQqg94bzBOw64E9/euCi6Qr+BuYqPbrzRuXjCYbhuvk695LzBvwa7troTOYxcRL0mdk/HcVKKPJS+Ur6evYIVfaSiP5G+9Twwul68bTqKvGK+Ab0mcN64naFxuUG93r0gO4y/YboxvseHDMCJUwm+0bzwvd6/nTu0v9i4hr/gOvGqYTqPgX6/75GxJ36/dEaIMzdqkk4uvmq/XzowvwQ/azzGuu8/Xr0Bvcm/srrtPMK4vr1Bur67ctyJvI85brhsvYm4IjpXkbEnCbpOuxK77r9yusG88r313jUwcb/Znna7W0MQPiG/A4Uhupljn0L2vRXe7rlRuqm4kTmZX6G+0D2wPEm+PzixvjA/0bgaOOm9ob2OubA7n4cxvdG4tTjBvb665rjZPhojEb4LIAFrHaMUhpG+OD0gGms4VLhRvS66Ubtqu1M46rjKupM85Gwpvt2imL7ZunK92b8Ovhq44b4xvEiCksNbwzm+2Lyxvra/7r4Zulq9Gb/MuR66cb0QZ55CCr9xvnoKuoMIrYi/KbhIvcc5oboJvI51KYfTUsW/Pr7Ivmm6gb1pvWG4+z3ivSW6g0OJv8CTEsDCueC6ab5JvRy94zoZubG+wbx73qM6ybhCQ2rzW0GqglK8or9xuZkDQtFOZBKAJbvxvjC9AroBv/a+Cb2pu/8+Bbyaufa7qD/hv1w/pbxwu/m8BjojoDsFFbzCE+m+1b2QvBm+sbu+vua6e94evlYGYcTZkR2N/zsDBj4BuZGyKf65LrglOnK0eAYD3GpRAruVPfm8gL33VxAk4kA/JZPbxGHIA8gDPrzlv+m+gts8vKa/jL86vT6CyYASRQ288j8Nuk3ajb6luuW5BznlvLW+ubgtPcTUdrh2BY88/Aib3xW6nr1uw0LBEoUTZmLF6Lr1uSjb1IRjwMa53L+WuMIAXwf8R1wLLb6KP02449zNv1g4ibuNu4k7gbxNvqiSNLRdpdvZvdntvI24nrrNuY297rmouba75bkZuDPfr9ItuXoHtbquU5G8nroJPnW6c1kVplHDrbnFxvW/EbkTxm27lrjUvDlCb8U2Ut24JTqduEHhnb/tu52/ctwdvI64Tb2hvgSqFu4DANuvatxrOM24fbpJun25Sbscu827Tr61vKSuIrirpohCHHYhxy253bmD12Mk/3HUv3W9Kbz1uj24bb31uV68hboNv/xGg75Rwf29AkXtv/2+YDmlvNc9abl9uD67fbplueDFnzxAW8O8nb39vCO89W2duzW8zLhdukW6XblFuV24qr3yuFuiqodbBmqydbg/MnNZ46ShxD27ZRmiBG279bxIulW/1bkxwr29rPZqt8O7F8adumO8fbljuKc/I7gxvh2/fbhsBEYMowMNuGO5U7w1A1O4Gr+dvBG4nLx0upy8zc8Zvg4BLbvdVg/Zmb6Hgq2/8KPaI9q49bgK3624k7jDvAG79r2TvL28aEDm40JCU7iNv729U7gDv1O7I77iv42+ibkduPqGQqILv6O4I7ozuM09M7i5uLW6ub0DuNk8pI4iv5kmhbyeoFrGxbpHE05KfqQax5S+OzutPIaClrmiAZa587gNvAXaSTuogZ9WEbV/aVa/nLtWuza4IDzkuWm+Brn6Pou+7Lox2gXcZURrucGmICepvKu5Nr/6uXjEBrp9uJTeNk8zvny/JtrLui09Ez3LuaiVeubIPf8+DyRaLKwdVCChvhQCq746v3IjPb1evj7Ya7kxvUNWRMY2u2u9Nrqbvza4i72avuc67Li8uBu7O7vLu8LUECG6uJu8JrlmuZu8lN9bP0u85rgUusyay7tFu/lGG7sagmvcK7m8Riu9QMWmKSm4+bg6uSmFRrprQia/9b1RuUXZQL1bvdlqo8K7v4NRu71Hu8va672luHu70BXWvO88G7rHFzu9ugQ+wGa+u7ybuCe7Yz3euFo4Qr6hPF28IL4HuC25nL/muApjqsBCV7JCh7vdAG9QqaKXcyu/Lzv+umC/8bvhuK65e7lAvioMSlfnuqW5M7pKu9G4hb1uOKe/jkPnw7xXBoO9ONW8pLmwuZq4GbtjveW/Z7sDvbW+OFSYuO67zrxzu90G8+A0h3RD27pz3/68l747uwI/V78Lnf7c7r9lusi6V75huj/dV7lP23e9c4XchLe4DCU1vUu6A73NuMu8wjjnvVs9mF4iuee4kVT/Ra2Fg7zKvHoFWxPFu47llb95ufG7Kb+VuKm99rurvTu9l7laCQ2e1YRXvwu9S7ov2om/67qJ3A+/U+NiwgzDL7ruvNW/17tBuzO6sbqPuqvZj7qcvn0fj7i3vMIbW8X/PljH8kBIpmfwd7iYOne4VbtHuqm8D74ao7QFQh9VuHK8tLneun27abp7vGW9r7wWP1PlPeysoFvDD75Xu0u6N7kDvo++tb42S++5KsOJDrAhT7qTO0+4sQ5zQYme8bk7Pc+8n7/PvU7eirmXvW07l7iypqMHPZ/fvfe/Bb6vvnu837lAv6+5osYD5Vpb/7sFv2+8Rb43uIc+77oTOd5bXb21UpWAOGfO2h+7PYEfuJCzSwcfvtncJb6huZO8kN2fvVhFuGfO3IB/Obtfuye9d7rfu2i9QH9cIyB/hbw3v5u9Kr+Af+A+t5GzvfdXZcPMJNC+t7rj4U5kZCUuoIu16L8mPKo9wz2rv0e7Wb4Lc0ZlnWI+Pm+717onvSO9wLkc3PDfgAAAAFf3vaG9BIRTNG3EHLkFvGe8A77luVk8B74RvY+9VjyquZfCqTfvVofiH7/eJo1Bo6G045W5f7olvKm5bbi9vkPH4kUsI9KLG7m33Gm+Y71Lveo9ervrugB787wLTk248HwKvy++I77Nub66MHznOe++W7swfhVArHZXrrB7uQh6QLI8f7iruJ+4l7qfvpO987wNuZTCKkEpwEm917iouSO8ozyU2Ah6HbyjvlW8C0mjurpGKHpfuns8gbhQfGB477mIfJy4QH0Hv9oBtsYqQqbAF7tHbFM01Elv0HB+yH1/vtK5O71wf1oHAeyFM+h4iHlfv7u9fdyofX25i72humOhkzd/QJbFkH0oeoh8ub9ofLO4QHrnveFHhDjywFn2c1H8vs0Hu6E6MwvV6LoCuqfNlzgJuSW5qHzqK+F1grUmQhy4ibg628TcJNwAeN++CH54eEXRPQCTO5h6O94cuzc4B71OvjB577s3vb0CvMW4sL3cK7puJQHA3dIBoMh8wz7xOvm/Lr9/unh9HQqSPx3T2jrYeOK78HyU2p2koHoxuEOHO7i4sHsThb34ucK/BHoRvYh6EzzFo7m6vzlgszdd/zvuQ5gjZ9AMpFm53d5Zufm/EHwWOatiNLLVgzdepHg3vBq5JHwIffh/yH8dumRxFHynsxR7b7w/umB4Hr++v6XfXCvBvMPCULaEHr++srrkgMC55HxyviW4IHteucR9KERP0dR4JHkSv/+56j4kf1B6o7utx69EYDS0eve/ZLvhvw+4MH+0urW42T0TqxG6TTzvMxQkRNX/PZHTjrVhBFK+Q7hHuWw6obzDuyR70q4Yg9IEDHoSuSh8JHg/vZu/tH7EfK/G6byGBEx+3r2uObR+VHtoeIR4ZH/gO1o2OLlZxGXD5bfindR+UUNruP/G9DQ0fl++NHvIfTR8jcO0AwNCrHq0fQ64YH5KuHM6qHlYeHR8L8Fmh2x6AHRUfuu9aHmAfj++LHosP5i79H662eggHLgXv4c/rdEQQGx8Tr/kfVm8Fjye6n+zL/J0JRx+J7sR3ex+WHmvu/h9+kVMwdx50H5MfrR6gHgseJx877joeSx92LpAf+kDzCArvqx74gMrLbB796ZzUbh+VLu4fVS8Vb5sfW26OQY6RNXER9xoepq+ezp9uAo68N1Qf0x5PHm95GQjDYYEetfdBHgRvCx/pH+8fpx+WOp8fYwh2j96QFvF/zpd6q5iRcBewIx5z7gMvox7EHjcfMe7lsWnJ8J9hb3QeBs+vHiPuGW8srjMf49HtD+oeGJ8vHrseaR7LdnWv0J4s79JusJ66H67RGkEBtAJLHQ+t7qzd800HrNzuUO/F7+P2nB4L7gUfMe907zqRKw9dHo0eFI6Z78U2BJ77H48f8h6ZUaNRJJ+1D8CeW++aH81OWJ69H/NvVs6AudgfcqQPj9kIgR+3bzKuA2HXj9kJ2Zreb8ru0R6yHpSf8B8AnyYebxFxHsIexEeQn6Qvfu/0no8egh6MnipPEJ9AcXMedJ/0HnNvDB6LHzCffA9F4pAfseEHGE4edpARHsaQZ5guCLNRRe4Xr4L28S8eLmMfOm6DV2rN+c0SnvQB5B/NT/a2cTa+HuCfIC+ynrFBhswV7zse2Y5Jr7sfoB/wLtnvbJ6nL7Kwyx9JnJtY6vSSEfKeQ6WRLRIV5shGH/yfKp5irsWZ1LGDzeQRup+jbhYfkq7pLgyeYp7Xr7Xhsq489NaetJ8bHpKfNp/6n5KPYS6nH3wOhpqFb1i3c/XcCVyejLZowA3I1zG80eaf4i4CnwvvJh9fmPoxnR/Hmege+J7Ed7afop+lHvafAKtxTv6f9ZgBn8Ufzp9Z79jvvR4LTjIxRp/bUZWg3i3BAKaeZhaEgXb7EUXensEPlJ7f7wJunh7FmEERmqij8aGelR4+tyUedp9BnoCfYm5gYNGfManWn3weD++sntJvbG5LHvqOcJ+WJm0CeOnqBR6fsa/mty9Rwx/h78ieox4xHz6fVJ9bTxKphR5zH8Kfpq4pnyU2We4ObwxvE28trOUfZZ6ZnnRu+p5vHgaf4Z6Gnxkeug4cn18x1qjA0aZuhU8yr9XokVbV0BZvs+6f7iifxZ8Wnh0eDa8A0LZueJ/rr85veo6VnhwvDm6dn0YA+Wx0DxifB88Bn9Bu6R6En9mfpx+hLrmeYSiXANLgnQnhrrpOicxXH22fMh9RTpZvNW/GHrDvroOi3bV0Fx7ln3SfI59JH1We985zn9Cu9x5aHkOej+7vH/Ye//Zer5Gf3w6XHmOegGFqzsP1vXXEenAfl8kDXaWuCHaonlwe1G4WkdjEtoy18aKP1heq77uf+q9TH8U2Ka+pntie/h5tGJ5ZvXSHnglOR58FIMef3R4nn9mvBJ4W7weuQAHJruufSjhQH1nJSWGbnvWIggzdFbyexe+XthxpLThXnhPIXe6MbkBwWzG5yZBub3eXn9cnb56jL7Wfq7danteubRmEuw+eCWACt1+fZMHfnnZuPZ8nn6Ie0p+rn+kPta73n1NKuanbQI+eZm/WpbA1UcjyF9ueSifIL0eeQF9yHr6e+58+YIvU5G3n8cBuX55WFrBfJ8i1n4OfbR69n5uuVZ5irqClH3oGyZ+eNbaAXircni/lnscfkq6tr3WfYB8y7opP1jZWrgsumSR37xufkCHEDkjdpIxfl9Cvms9OITBeb5/IXgCfcF+qb37dzC2ZNum2SF7x7t+f5F9AX7WeEDc+Ho62fh5nnyAuoKSgsVRe2rfUX1GvV54oXmGfYY+oX4Duq5+En8p31jdMHwRfCeHWqERf0raQX3UC2Qn5zG/t0F+k+GiAwxAQuu+eGy44IYuf3F517+62WF8sXivv159676ef0q6MXpTM5Bu1dIBhAF9IXuRe2F9b7jhfbR9J7zefSq/vr9Y34h5cX8Lx/55DocQO0Rw25cIN3wj8X/D4Al+OQeuBgl7oXqr6mHifngBfzF67n7BfTU6JH3Jf4l/er6gPBwSByTRhZPaiXzpfTp6JHuJfuF8nH9Keya9En7c3UBEYXt+vPF9hx70b0sGqX1EfMc5YKWpeDAECXhpeFF8lnw4PoEj9KBBe2l+YX9JfNF8yXyyeYY4lNiZeKO/7HomfZ9SkIVpfiF9OXjRfgF60X+YeiR9KslUfkW+3n9Y3Dh9DNgVRTF8qTpZfopslzXxf1l9Y9/xftl/qXx2enh7mwaaGeglSX9peyF4uXsoerl7Mr7+faZ6+hHtggV+GXs5e3l9RX3eump8Ot74fQ563ngpfoR5xItPw3OyUN/mfimD6cYa8ENnSQoQe6W3k9759/ikaXplv4CH64V77by5vd30w8gA9kGb3UJ/4jwW3YJ9ZTvWvL/Z5X9t7Gq+ijgVf4gCFXsOPdJ6pnyZf7F/DnxxeB/feDuYKyBh38Taull+Q6JDhmwHlEaH4WV8kNM2OgM1hXv4ftV4HqVXsb29+rmmhBV9JkYVf856/jyVfYfeTIc1IVi/xrh1eFV6dXpVfV+7FXtQfdh8gXhxeya5unraPRSESHDin8p4+iJ7mjV4MhfdOfJ42X4D3WV/NXuHvOV/uXyNePWEw8b1fCaEdXlmRnV6gnvRfSV5Jdt1fAY6zXud7ZV4Orn1e6Wz9XtsvIp6ini6fBp94XzlOXq8EDwBOhUHKiQ/w9V/Nnoy3ZzGNbBXxjV8NQU1emMiaR9Ne9l+onwMP6BBQ+wSQbq5rXxsPYK7On2GO7U9LX6Oug0+nX3btAC7lX+dfFV/rXpdfdF+an/ReyV/yX7mv4Xbwbp6OWLdQtgXuJ+LRtvk10F81tv5CuLZwXgUeGLZjri9e4bavXzyOszcZtx/2Nc/ZtoS2uzdYnhw3r6/8t0W2lLfNtm937ba0tgWPX1+pTxjPdzc/X6KPv16fXps3eI//Xzm3AN4QLm22iA/A3/y3IN77t4K3Lp+mX9YB3DfpduufO3FyNsY6wA7pXhV2yuWmLI58/F/k95xUFUktXtqfpRDm4dxpIdGGXmYWma4en5mf8x4+t2xe2G8MnsGeNMdhllfthIcAXnjfsOj43n3vrx8E311e119/dsTejRa43zyO7mi+6JNBZN5iXgTfJ564Xk0Oy1//4p/Bdtdj0bjeTGF438eY5N/ObqvvU88M30M2M/Ay9tTfh5+k3rTfLN50368ebN9XXyFugcAc3lsUnN6XnlzfnAjc3yIffu+goRTfvN495AVlB6n83qTfzN5k34LePl4P7igf3/bs32M3wZEZFKvQzN803oLf9Zis3nRf6W5snltfM89I39teP84o3n1Vh9LOHzxezYnUDGrZmHOkXpjersolnydeg05U38x3mM+YXwLe5Gty39zewF7xoTFfvp/Y393lLi2c1WLfst+63k/A8t8oX2GP+t4lXpTfl3ba3oA8KBTMn4UANN85NnLfJt963z+fy3ZuX1CPUt6f44zfb+WW3rLf1t4m3lLuD+883/539t583qLfybo63yJeut4v8Xgul18u3lLf5t7DdvtJbt7EwY7f1N8e37TeQt6XX3qPrE7m3iLfPt7XqIccft+c3uLfXN563gHfUu+S3zgPrt8i38HeEnfu31be/t4S3rpekt4K3tmf+W5AAUjfuO5OLvBVbOSOnlDOWEXr6V1GLsAa3nU2mt9Y30TfDt4OGaXAIl/R36HeNt/O33TeGYgG3vBeDt6i4INvejLG307ent42nz5etk9s397fAY8W31jkmd5O3izfYd8S3jnf8fq83mJuht5UPTIAwwgF32XfNt7h3i7eCt6R3sHeINul337fWd7O357fK+9138XfLi983qXf+d5fnjHe5d6x3hXfG1723i3f7N6+3hfAbd86343ehd/4368eEd9cDvXf0t8Z3j3eHt693/7f5d993nHeiN6gX8p3SN4EX6G3my+k3+M4rRzQtzxfWw2x0FIIiEz8X4D5tQm6oHuoGe+cH89vud9GEK7kN0Il+UV1AK+Vgko3EaFyz3evkDYAAZXxN1Y2hpsLnppf1llyV86xCcHL3yDfK95qQegITc+Sn8Lf755k69ZRsp5gYfhOe94TIGven2+9tzY2694AAdSWHgzeXd8skXHQ9OOyiMffTs4n34Sgp96XX9w3F9+d3iLevJVRkzvekx7ttrfeNQ533yvv8i8HjpHftCvmmMvfT95GN8/fq96wrgfeQd6H3/iU1ZhP38fe3JF730yHC16XXwfeQl8RHT1hueG/3zfff98n31/fAD/f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"))
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
