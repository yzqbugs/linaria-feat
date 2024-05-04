import React from 'react'
import ReactDOM from 'react-dom/client'
 import styled from 'styled-components';
 import {css} from '@linaria/core'
 
import { StyleSheetManager } from 'styled-components';
const rootEl=document.getElementById('root')!

rootEl.innerHTML = `<div id='linaria'></div><div id='styled'></div>`;

// get the tow containers
const linaria = document.getElementById("linaria")!;
const styleComponentsEl = document.getElementById("styled")!


const rootShadow=linaria?.attachShadow({mode:'open'})
const styledShadow=styleComponentsEl?.attachShadow({mode:'open'})

//below is where react mounted
const rootWrap=document.createElement('div')

const styledWrap=document.createElement('div')

linaria.appendChild(rootWrap)
styledShadow.appendChild(styledWrap)

const bgRed =  css`
 width:200px;
  height:200px;
  background-color:red;
`;
ReactDOM.createRoot( rootWrap).render(
  <React.StrictMode>
     <LinariaApp></LinariaApp>
  </React.StrictMode>,
)

ReactDOM.createRoot(styledWrap).render(
  <React.StrictMode>
   <StyleSheetManager target={styledShadow}>
    <StyledApp></StyledApp>
   </StyleSheetManager>
  </React.StrictMode>
);
const StyledDiv=styled.div`
  width:200px;
  height:200px;
  background-color:red;
`
function StyledApp(){
  return <div>
    <StyledDiv></StyledDiv>
  </div>
}


function LinariaApp(){
  return <div className={bgRed}></div>
}
