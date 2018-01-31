-2018.01.31
--Began project
--I used the previous Rock,Paper,Scissors Shoot version to upgrade to a new game that has buttons and text-boxes.
It wasn't as easy as I thought it would be, since I had to think about the whole process of the new version and
how I can change the old version to fit the new one. The first thing I did was adding a div with class "announce"
that would, as the class name suggests, announce who won, at what round and at what score. So instead of using
console.log to announce the results, I had to make a variable using DOM that would find the div with class "announce"
and print out the result inside the div using "variable.textContent" method. The hard part started for me here where
I had to figure out how to iterate the game process for the new version. In the previous version, I used recursion
(I had to search for this term) to keep the game going until it fails the conditional for having rounds less than 5.
I had to erase all those first because I knew that the iteration had to be done in another way, since we don't have to
prompt the user, or use console.log anymore. I knew that buttons were key for iterating the game, but it took me some time
to figure that out. I did first add an event listener for each of the buttons, and logged out to console the value of
e.target.id (which would be either be 'rock', 'paper', or 'scissors'), to make sure that it logged out the right id. Then I
had to make sure that the event's id would match the string value of the id (for example, e.target.id === 'rock') so that I
can place the id of the button that was clicked to the player. This is getting longer than I thought so I'll keep this brief.
The next thing I fixed was the parameter of the switch function within  the playGame function, and I realized that the
'clicking' of buttons will be the iterator of the game, meaning that clicks will begin new rounds and reset computer's
choice and player's choice. The finishing touch was adding the conditional within the event listener to the button which would
stop the game after 5 rounds of Rock, Paper, Scissor Shoot. 
