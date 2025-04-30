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
    while front_is_clear():
        do_odd_column()
        do_even_column()
    
def do_odd_column():
    put_beeper()
    turn_left()
    move()
    turn_right()
    move()


def do_even_column():
    put_beeper()
    turn_right()
    move()
    turn_left()
    if front_is_clear():
        move()




def turn_right():
    for i in range(3):
        turn_left()


# There is no need to edit code beyond this point

if __name__ == '__main__':
    main()
