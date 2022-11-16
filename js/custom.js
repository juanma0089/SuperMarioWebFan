"use strict";

    let arraySonidos = ['./sound/mario/mario-bros-here-we-go-hoo.mp3','./sound/mario/mario-bros-mamma-mia.mp3',
    './sound/luigi/luigi.wav','./sound/luigi/luigi2.wav','./sound/peach/peach.wav','./sound/peach/peach2.wav',
    './sound/toad/toad.m4a','./sound/toad/toad2.m4a','./sound/bowser/Bowser.wav','./sound/bowser/browser2.wav','./sound/yoshi/yoshi.wav','./sound/yoshi/yoshi2.wav'];
    
function playMusic(pos){
    let music = new Audio(arraySonidos[pos]);
    music.play();}

    