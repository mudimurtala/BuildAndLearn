# Stanford Code In Place Program

## Running The Exercises

These folders are Stanford Karel assignments. They are not plain Python scripts, because they depend on the `stanfordkarel` package and Tkinter for the simulator window.

On Ubuntu or Debian, install the system Tkinter package first:

```bash
sudo apt install python3-tk
```

Then create a project virtual environment and install the Python dependency:

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```

Run any folder from inside its own directory with the virtualenv Python:

```bash
cd beeper_path
../.venv/bin/python main.py
```

Repeat that pattern for any other exercise folder, for example `mountain_karel`, `piles`, or `zigzag_karel_one`.