import React from "react";
import "./game-panel.css";
import{Card} from "../index";
function GamePanel(){
    return(
    <section id="panel-game">
    <div id="game">
    <Card name="react"></Card>
    <Card name="vue"></Card>
    <Card name="ember"></Card>
    <Card name="html"></Card>
    <Card name="javascript"></Card>
    <Card name="css"></Card>
    </div>
    </section>
    );
}export default GamePanel;