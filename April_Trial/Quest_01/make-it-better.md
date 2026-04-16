# Make It Better

## Required

- XP: 1
- File to submit: done.tar
- Allowed functions: None specified

## What This Task Is About

This task is a terminal practice exercise.

It is not mainly about writing program logic. It is about learning how to:

- create files and directories,
- change file permissions,
- understand command output,
- set file timestamps,
- create links,
- and pack everything into a tar archive for submission.

If you are a beginner, treat this as a guided lesson in how the Unix shell represents files.

## What You Are Trying to Match

The goal is to arrange your files so that a specific `ls` command shows the expected output pattern.

The command used for checking is:

```bash
TZ=utc ls -l --time-style='+%F %R' | sed 1d | awk '{print $1, $6, $7, $8, $9, $10}'
```

This command looks complicated, so here is what it does in simple parts:

- `TZ=utc`
	Temporarily tells the system to use UTC time.
- `ls -l`
	Shows files in long format, including permissions, owner information, and modification time.
- `--time-style='+%F %R'`
	Makes the date and time display in a clear format like `1986-01-05 00:00`.
- `|`
	Sends the output of one command into the next command.
- `sed 1d`
	Removes the first line of `ls` output, which is usually the `total` line.
- `awk '{print $1, $6, $7, $8, $9, $10}'`
	Selects only the columns needed for the exercise output.

## Key Concepts You Need to Know

### 1. Files and directories

A directory is a folder.
A file is a stored piece of data.

You may use commands such as:

```bash
mkdir folder_name
touch file_name
```

- `mkdir` creates a directory.
- `touch` creates an empty file or updates an existing file's timestamp.

### 2. File permissions

The first part of each `ls -l` line shows permissions.

Examples:

- `-rw-r--r--` means a regular file.
- `drwxr-xr-x` means a directory.
- `lrwxrwxrwx` means a symbolic link.

Permission letters mean:

- `r` = read
- `w` = write
- `x` = execute
- `-` = permission not granted

The three permission groups are:

- owner
- group
- others

For example, `-r-x--x---` means different permissions are set for each of those three groups.

You change permissions with:

```bash
chmod mode file_name
```

`chmod` is one of the main commands you will use in this task.

### 3. Symbolic links

A symbolic link is like a shortcut to another file or folder.

It appears in `ls -l` with an `l` at the beginning, such as:

```text
lrwxrwxrwx 3 -> 0
```

You create one with:

```bash
ln -s target link_name
```

Here:

- `target` is the file the link points to.
- `link_name` is the name of the link itself.

### 4. File timestamps

The task also cares about the date and time shown by `ls -l`.

That means you must understand file modification time.

You can set timestamps with `touch` using date formats, for example:

```bash
touch -t YYYYMMDDhhmm file_name
```

This changes the file's modification time.

### 5. Flags and options

Many commands in this exercise use flags.

Flags are small options added to a command to change how it behaves.

Examples:

- `-l` in `ls -l` means long format.
- `-s` in `ln -s` means symbolic link.
- `-t` in `touch -t` means set a specific time.
- `-r` in some commands means read from a file or use reference information, depending on the command.

Flags are important because they make one command flexible enough to do many different things.

## Beginner Approach to the Exercise

Do not try to solve everything at once.

Work in layers:

1. Create the files and directories first.
2. Set the correct permissions.
3. Set the correct timestamps.
4. Create the symbolic link.
5. Check the output with `ls -l`.
6. Repeat until the output matches.

That is the natural way to work on this type of terminal exercise.

## Understanding the Expected Entries

The output contains entries like `0`, `1`, `2`, `3`, and so on up to `A`.

Each entry represents a file, directory, or link with its own:

- type,
- permissions,
- timestamp,
- and name.

The line for `3` is a symbolic link that points to `0`.

That means `3` is not a normal file. It is a link whose target is another item in the same set.

## Working With the Terminal

If you are new to the terminal, these are the most useful habits for this task:

- Use `ls` often to inspect what already exists.
- Use `pwd` to confirm your current directory.
- Use `cd` to move between folders.
- Use `mkdir` to create directories.
- Use `touch` to create empty files.
- Use `chmod` to adjust permissions.
- Use `ln -s` to create symbolic links.
- Use `stat` if you want more detailed file information while testing.

Example:

```bash
stat 0
```

This can help you inspect a file's mode and timestamps more precisely.

## About Mac Systems

The task note mentions macOS users may need GNU Core Utilities.

On Linux, you usually do not need extra setup for this exercise.

If you are on macOS, the command may use `gls` instead of `ls` after installing GNU tools.

For this guide, the main focus is the Linux-style workflow, since that is the most common environment for this trial.

## Step-By-Step Way To Build The Expected Output

This section shows one practical way to think about the task from start to finish.

You do not need to rush. Build the structure gradually and check your work after each step.

### Step 1: Start with a clean working folder

First, go to the directory where you want to work.

```bash
pwd
ls
```

These commands help you confirm where you are and what is already there.

### Step 2: Create the files and directories

Use `mkdir` for directories and `touch` for files.

For example:

```bash
mkdir 0 A
touch 1 2 4 5 6 7 8 9
```

This creates the basic items you need before changing permissions and timestamps.

If you need more than one directory, create each one separately.

### Step 3: Set up the symbolic link

The item named `3` is a symbolic link that points to `0`.

Create it with:

```bash
ln -s 0 3
```

This means the file named `3` is linked to the file or directory named `0`.

### Step 4: Change permissions one item at a time

Use `chmod` to set the correct mode for each file or directory.

Examples of the kinds of changes you may need:

```bash
chmod 704 0
chmod 602 1
chmod 644 2
chmod 755 4
```

The exact numeric mode depends on the output you are trying to match.

If you are unsure, remember that each digit controls one permission group:

- first digit: owner
- second digit: group
- third digit: others

### Step 5: Set the timestamps

Use `touch -t` to assign the required dates and times.

Example pattern:

```bash
touch -t 198601050000 0
touch -t 198611130001 1
touch -t 198803050010 2
```

Repeat this idea for every file and directory that needs a specific date.

The time format is:

```text
YYYYMMDDhhmm
```

That means:

- YYYY = year
- MM = month
- DD = day
- hh = hour
- mm = minute

### Step 6: Check your work with ls

Use the same inspection command from the task:

```bash
TZ=utc ls -l --time-style='+%F %R' | sed 1d | awk '{print $1, $6, $7, $8, $9, $10}'
```

If something does not match, change only the item that is wrong and check again.

### Step 7: Package everything into done.tar

Once the output matches, create the archive:

```bash
tar -cf done.tar *
```

Then confirm that `done.tar` exists:

```bash
ls
```

At submission time, only `done.tar` should be sent.

## Final Packaging Step

When your files match the expected structure and output, create the archive to submit:

```bash
tar -cf done.tar *
```

What this command means:

- `tar`
	Packs files into a single archive.
- `-c`
	Creates a new archive.
- `-f done.tar`
	Writes the archive to a file named `done.tar`.
- `*`
	Includes the files in the current directory.

This archive is what you submit for grading.

After creating it, you should see the folder contents including `done.tar`:

```bash
ls
```

Only `done.tar` should be submitted.

## Summary of the Learning Goal

This task teaches you how the terminal describes files and how file metadata works.

By completing it, you practice:

- reading `ls -l` output,
- understanding file type and permissions,
- changing timestamps,
- creating symbolic links,
- and packaging a directory for submission.

That is why this exercise matters: it builds the foundation you will use in later terminal and Go tasks.