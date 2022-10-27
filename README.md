# 💣 Minesweeper 💣
The classic game of minesweeper made with pure javascript and react!   
The goal of the game is to clear every non-bomb tile. Numbers on tiles correspond to how many bombs in the surrounding tiles there are. If a tile is blank there are no bombs in the surrounding tiles.

# Project live at: https://minesweeper-project-ga.herokuapp.com/  
![1](https://i.imgur.com/fxt2MQ4.png)

## Packages used  
React toast for pop-up messages when you either lose or win and Use-Sound for the bomb and flag sounds

## Project background  
After messing around with ideas of other web-apps and projects I wanted to go back to something more basic and accessible. I did tic-tac-toe as my first project so why not do another classic programming assignment esque game?  
When deciding what technologies I wanted to use it came down to if I wanted to use react or not -- and of course after learning it over the course of the last four weeks I wanted to give it a shot. Using javascript and react gives me access to tons of documentation and resources to use which ended up helping me a ton.  

When planning my project I originally wanted to make an app that had tons of features and would be a complete website that I could host online and people could actually use and populate -- after a day of planning it I realised the scope was too large and my timeframe was too small. For planning my minesweeper app I had a few basic ideas in terms of using arrays and rendering a full board to populate with bomb tiles. I didn't find sketches or wireframing necissary in developing a classic windows game so I just starting coding with the general idea of it needs to work (and look) like the original windows game.  

I created a 2D array for the board in which elements would either be 'X' if its a bomb and 0-8 depending on adjacent tiles. Tiles also needed to be flagged (or not flagged) and shown or hidden depending on what the user clicks. To actually render the board I used useState and useEffect from react which took a lot of time to understand fully. One of the toughest things to get working was having when the user clicks on a tile with zero bombs it also needs to reveal the tiles connected to the original that are also zero - this continues until the area is surrounded (the most satisfying part about minesweeper IMO).

## Bugs and problems  
Sometimes the sound doesnt load on heroku  
The board will reset into an already completed state under certain conditions  
I didnt finish the code to get the whole app to pause while it reloads after a bomb explodes, if you spam click it will spam toast messages and sound effects.  
Let me know on github if you find more bugs and ill try to fix them.
