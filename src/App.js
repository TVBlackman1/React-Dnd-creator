import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPageScroller from "react-page-scroller";
import PageRace from "./my-components/dnd/page/race/race";
import Page from "./my-components/dnd/page/page";
import LeftScroll from "./my-components/dnd/left-scroll/left-scroll";

export default class App extends React.Component{

  render() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <div>
        {/*<ReactPageScroller*/}
        {/*    animationTimer={250}*/}
        {/*>*/}
          <PageRace />
          <Page color="#54617d"/>
        {/*</ReactPageScroller>*/}
        <LeftScroll />
        </div>
    );
  }
}