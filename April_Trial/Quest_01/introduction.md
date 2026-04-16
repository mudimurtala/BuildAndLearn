# Introduction

## Required

- XP: 0.00
- File to submit: hello.sh
- Allowed functions: None specified

## What This First Task Is Teaching You

This introduction task is your setup and orientation stage before deeper programming tasks begin.

You are learning how to:

1. Use a Git repository to store and submit work.
2. Use a Unix shell (terminal) to run commands.
3. Create and run a basic shell script file (.sh).
4. Upload your work correctly using Git add, commit, and push.

If you are a complete beginner, this is normal and expected. This task is designed to help you build confidence with the tools you will keep using during the full trial.

## Key Terms (Beginner Friendly)

- Git:
	A version control tool. It tracks changes in your files over time.
- Gitea:
	The Git hosting platform used for this program. Think of it as the website where your Git repositories live.
- Repository (repo):
	A project folder tracked by Git. Your tasks and solutions are stored here.
- Clone:
	Copying a repository from Gitea to your local computer.
- Unix shell / terminal:
	A text-based interface where you type commands.
- Script:
	A file containing commands/instructions executed by a shell.
- .sh file:
	A shell script file (usually Bash shell commands).
- .go file:
	A Go language source file. You will use this extension later in the program.

File extensions help you and your tools know what kind of file you are working with.

## VS Code and Terminal: What Is the Difference?

Many beginners ask this question, so here is a simple way to think about it:

- VS Code:
	A code editor (the app where you write and organize files).
- Terminal:
	A command interface (where you run commands like git, bash, ls, and cd).

You usually use both together:

- Write or edit files in VS Code.
- Run and test files in the terminal.
- Use Git commands in the terminal to submit work.

Why VS Code is recommended:

- Easy file and folder navigation.
- Helpful syntax highlighting.
- Built-in terminal so everything is in one place.
- Good beginner workflow for editing and running code quickly.

In VS Code, you can open the integrated terminal and run commands without leaving the editor.

## Beginner Unix Shell Commands You Should Know

Before running trial tasks, practice these basic commands.

### Navigation commands

```bash
pwd
```
- Shows your current folder path.

```bash
ls
```
- Lists files/folders in your current directory.

```bash
ls -la
```
- Lists all files, including hidden files, with more details.

```bash
cd folder_name
```
- Moves into a folder.

```bash
cd ..
```
- Moves one folder up (back to parent directory).

```bash
cd -
```
- Returns to your previous directory.

### Create and inspect files/folders

```bash
mkdir my_folder
```
- Creates a new folder.

```bash
touch hello.sh
```
- Creates a new empty file.

```bash
cat hello.sh
```
- Prints the contents of a file in the terminal.

```bash
echo "Hello" > hello.sh
```
- Writes text into a file (overwrites existing content).

### Copy, move, and rename

```bash
cp source.txt copy.txt
```
- Copies a file.

```bash
mv oldname.txt newname.txt
```
- Renames a file (or moves it to another folder).

### Remove with care

```bash
rm file.txt
```
- Deletes a file.

```bash
rm -r folder_name
```
- Deletes a folder and everything inside it.

Be careful with remove commands. Deleted files usually do not go to a recycle bin from terminal commands.

### Run your shell script

```bash
bash hello.sh
```
- Runs your shell script using Bash.

Tip:
- If a command fails, read the terminal error message slowly. Most errors are about wrong folder, wrong file name, or typing mistakes.

## Instructions

### 1. get-ready

Create a repository in your Gitea account named piscine-go.

Why this matters:
- This repository is your official submission workspace.
- All required exercises should be uploaded here so the platform can test them.

After creating it, clone it to your computer.

Open your Unix shell and run:

```bash
git config --global credential.helper store
```

What this command does:
- It asks Git to remember your login credentials locally.
- This helps avoid retyping username/password every time you push.

Now clone your repository (replace choumi with your own username):

```bash
git clone https://acad.learn2earn.ng/git/choumi/piscine-go.git
```

What this command does:
- Downloads the remote repository from Gitea to your local machine.
- Creates a local folder named piscine-go containing your tracked project.

After cloning, move into that folder:

```bash
cd piscine-go
```

### 2. set

Inside your cloned repository folder, create a file named hello.sh using your code editor.

This is your first shell script. Its job is simple:
- Print Hello your_username!

If the username is choumi, expected output is:

```text
Hello choumi!
```

One valid hello.sh example:

```bash
#!/usr/bin/env bash
echo "Hello choumi!"
```

Important:
- Replace choumi with your own program username.
- The first line is called a shebang. It tells the system which interpreter to use.
- echo prints text to the terminal.

Run and test your script:

```bash
bash hello.sh
```

You should see exactly:

```text
Hello choumi!
```

Replace choumi with your username in your actual output.

### 3. go-say-hello

When your script works correctly, upload it to your repository.

Run these commands in order:

```bash
git add hello.sh
git commit -m "My very first commit"
git push
```

What each step means:

- git add hello.sh
	Adds the file to the staging area (prepares it for commit).

- git commit -m "My very first commit"
	Creates a saved snapshot in Git history with a message describing the change.

- git push
	Sends your local commit to the remote repository on Gitea.

Why all three are required:
- add selects what to include.
- commit records it in local history.
- push publishes it online for grading.

## Final Submission Step

After pushing successfully, return to the platform dashboard and click RUN INTRODUCTION TEST.

This runs automated checks against your submitted hello.sh in your repository.

If the test fails:
1. Read the error carefully.
2. Fix your file locally.
3. Repeat add, commit, and push.
4. Run the test again.

## Quick Checklist

- Created piscine-go repository on Gitea.
- Cloned repository to local computer.
- Created hello.sh.
- Script prints exactly Hello your_username!.
- Ran script successfully in terminal.
- Uploaded using add, commit, push.
- Clicked RUN INTRODUCTION TEST.