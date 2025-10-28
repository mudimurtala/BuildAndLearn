from stanfordkarel import *

# Example from the video!

def main():
    """
    Clear the world, row by row. Each time a row is
    cleared, reset to the start of the row to create
    a consistent pre/post of the while loop
    Left is clear until you are on the top row
    """
    while left_is_clear():
        clear_row()
        reset_to_next_row()
    # fencepost problem! One more row to clear
    clear_row()
    
    
    
def clear_row():
    """
    Clear an entire row
    Pre: Karel is facing right (East) at the start of the row
    Post: Karel is at the end of a cleared row, facing right (East)
    """
    while front_is_clear():  # We don't know for sure how large the world may be, so use a while loop!
        clear_corner()  
        move()
    # Fencepost problem! This last clear_corner() fixes it.
    clear_corner()
    
    
def clear_corner():
    """
    Cleans a corner so that there are no beepers on it.
    Pre: The corner Karel is on has 0 or 1 beepers present.
    Post: The corner Karel is on has zero beepers present.
    """
    if beepers_present():
        pick_beeper()
        
        
def reset_to_next_row():
    """
    Pre: Karel is at the end of a row, facing right (East)
    Post: Karel is at the start of the next row, facing right (East)
    """
    turn_around()
    move_to_wall()
    turn_right()
    move()
    turn_right()
    

def move_to_wall():
    while front_is_clear():
        move()
    
    
def turn_right():
    for i in range(3):
        turn_left()
        
        
def turn_around():
    turn_left()
    turn_left()



# This is "boilerplate" code which launches your code
# when you hit the run button
if __name__ == '__main__':
    main()
