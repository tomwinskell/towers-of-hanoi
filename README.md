# Documentation for the Tower of Hanoi Game

This program implements the **Tower of Hanoi** game using JavaScript, with a customizable number of pegs and rings. The game simulates a puzzle where the player must move rings between pegs following a set of rules: only one ring can be moved at a time, and a larger ring cannot be placed on top of a smaller one.

### **Functions**

#### 1. `Peg(numOfRings = 0)`
- **Purpose**: Constructor function for creating a peg that holds a stack of rings.
- **Parameters**:
  - `numOfRings` (default `0`): The number of rings to initialize on the peg.
- **Returns**: A new peg object with a `rings` property, which is an array representing the stack of rings. The rings are initialized in descending order from largest to smallest.
  
  Example:
  ```javascript
  const peg = new Peg(3); // Creates a peg with 3 rings: [3, 2, 1]
  ```

---

#### 2. `Board(numOfPegs = 3)`
- **Purpose**: Constructor function for creating a game board with a specified number of pegs and a fixed number of rings.
- **Parameters**:
  - `numOfPegs` (default `3`): The number of pegs on the board.
- **Returns**: A new game board object with the following properties and methods:
  
  - **Properties**:
    - `pegs`: An object that stores each peg with an ID (e.g., `1`, `2`, etc.). Each peg is an instance of `Peg` containing an array of rings.
  
  - **Methods**:
    - `moveDisc(start, end)`: Moves a ring from the peg specified by `start` to the peg specified by `end`. The method ensures that only valid moves (i.e., a smaller ring is placed on top of a larger one) are allowed. After the move, the board state is printed.
      - **Parameters**:
        - `start`: The peg from which to move the ring.
        - `end`: The peg to which the ring should be moved.
      - **Returns**: None (prints the board and checks if the player has won).
      
    - `printBoard(string = 'The board is currently:')`: Prints the current state of the game board.
      - **Parameters**:
        - `string` (optional): A custom message to print before the board's state.
      - **Returns**: None (prints the board to the console).
      
    - `winner()`: Checks if the player has completed the game by successfully moving all the rings to the last peg in the correct order.
      - **Returns**: `true` if the player has won, otherwise `false`.
      
  Example:
  ```javascript
  const board = new Board(3); // Creates a board with 3 pegs, each initialized with rings
  board.printBoard(); // Prints the board's initial state
  ```

---

#### 3. `startGame()`
- **Purpose**: Starts the game by prompting the user to select the number of pegs and initiating the game loop.
- **Parameters**: None
- **Returns**: None
  
  The function begins by asking the player to specify the number of pegs to use. It then enters a loop where the player can make moves by specifying the start and end pegs. The game continues until the player either wins or quits. The board is updated and printed after each move.

---

### **Example Usage**

```javascript
// Start the game with the default number of pegs (3) and rings (5)
startGame();
```

---

### **How the Game Works**
1. **Initial Setup**: The game starts with 3 pegs and 5 rings. The rings are arranged on the first peg in descending order (largest ring at the bottom).
2. **Making Moves**: The player is asked to choose a starting peg and an ending peg. The goal is to move all the rings to the last peg, following the rules of the Tower of Hanoi:
   - Only one ring can be moved at a time.
   - A larger ring cannot be placed on top of a smaller one.
3. **Winning the Game**: The game is won when all the rings are correctly stacked in descending order on one peg, starting with the smallest on top.
4. **Quitting the Game**: The player can type `quit` at any time to stop playing.

---

### **Example Game Flow**

```bash
Enter number of pegs to play with:
    Leave blank for default, which is 3
# Player chooses 3 pegs (or presses Enter for default)

The board is currently:
--- 54321
--- 
--- 

Enter 1 ,2 ,3 to move ring from:
    (enter 'quit' to quit.)
# Player chooses peg 1

Move peg to:
    (enter 'quit' to quit.)
# Player chooses peg 2

That move was successful, board is now:
--- 5432
--- 1
--- 
...
```

---

### **Notes**
- **Customization**: You can adjust the number of pegs by changing the `numOfPegs` parameter in `Board(numOfPegs)`. By default, the game uses 3 pegs and 5 rings, but this can be changed to customize the difficulty.
  
- **Invalid Moves**: The game prevents invalid moves (such as placing a larger ring on a smaller one), providing feedback to the player about the error.

- **Coloring**: The game uses ANSI escape codes to color the printed board in the console, adding emphasis on certain parts (like highlighting "now" and "still" in purple).

---

### **Potential Improvements**
- **Input Validation**: Handle edge cases like invalid inputs or non-integer values for peg numbers.
- **Game Difficulty**: Allow players to choose the number of rings to increase the difficulty.
- **Graphical Interface**: Implement a graphical interface for a better user experience (e.g., using HTML5 and CSS).

