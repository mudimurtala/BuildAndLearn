# Import full path
import mytools.mathstuff.add
print(mytools.mathstuff.add.add_numbers(2, 3))

# Import submodule directly
from mytools.mathstuff import multiply
print(multiply.multiply_numbers(4, 5))

# Import function directly
from mytools.textstuff.shout import shout_text
print(shout_text("hello world"))
