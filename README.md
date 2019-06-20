# arcadeGame
# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
## The following steps done by me inorder to complete this project.
## How to download the project.
. I observed the **GitHub** link provided by the **Udacity** and by using that link I downloaded the project.
https://github.com/udacity/frontend-nanodegree-arcade-game
## Coding part
. After the cloning the project from Udacity I observed the files provided in it .The files present in it are:
      app.js, endine.js, resource.js, index.html, readme.md, images folder.
. I had open total the code given in files, After observing all the files I concluded what I need to do in order to implement the project.
. I observed, that most of the modifications will takes place in app.js.
## Some Modifications are done by me.
. While developing this project I had taken two characters mainly Gamer and sprite.
. The main theme of this project is the Gamer moves up, right, left whenever the enemysprite
 touches , the Gamer gets killed ,then the game will restart.
. While executing the code in console provided by Udacity through GitHub , initially an error  allEnemies is found , and I solved the errors.
. Similarly I found some more errors , which I resolved it to get the game on screen.
. In app.js file I declared three functions namely:
  + render()
  + update()
  + handleInput()
. **render()** function is applicable to both player and enemysprite.The main function of render() is to fix the position of object.
. **update()** function is applicable to both player and enemysprite.The main function of update() is to update the change in position of player as well as sprite.
. **handleInput()** function is mainly used for keys to move the Gamer in the game.
 + I used `up arrow` to move the player upwards , so that only `y` position of the player changes.
 + I used `down arrow` to move the player downwards ,so only `y` position of the player changes.
 + I used `left arrow` to make the player to move towards left side so that only `x` position of the player changes.
 + I used `right arrow` to make the player to move towards the right so only `x` position of the player changes.
. I used `score` variable to show the score of the player. Whenever the player reaches the water layer incremented by `1`.
. When the player touches the bug, then the pop menu is displayed. While clicking `restart` in the pop up , then the game will be `reloaded`.
## How to play the game
. By using arrow keys to move the Gamer up, down, left and right.
. open the project in browser from `index.html`  
