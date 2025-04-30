"""
This is a worked example. This code is starter code; you should edit and run it to 
solve the problem. You can click the blue show solution button on the left to see 
the answer if you get too stuck or want to check your work!
"""

from stanfordkarel import *

def main():
    """
    Places beepers in a zig zag pattern.
    """
    
    do_first_row()
    move_to_secondRow()
    do_second_row()
    end()
    


def do_first_row():
    while front_is_clear():
        put_beeper()
        move()
        if front_is_clear():
            move()


def move_to_secondRow():
    turn_around()
    move_to_wall()
    turn_right()
    move()
    turn_right()


def do_second_row():
    while front_is_clear():
        move()
        put_beeper()
        if front_is_clear():
            move()


def end():
    turn_right()
    move()
    turn_left()

def turn_right():
    for i in range(3):
        turn_left()


def move_to_wall():
    while front_is_clear():
        move()


def turn_around():
    turn_left()
    turn_left()

# There is no need to edit code beyond this point

if __name__ == '__main__':
    main()
