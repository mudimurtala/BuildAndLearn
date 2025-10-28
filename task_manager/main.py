import tasks
import sys

def show_menu():
    items = ["Menu: ", "1. Add task", "2. List tasks", "3. Update task", "4. Delete task", "5. Search tasks", "6. Quit"]
    for item in items:
        print(item)

def print_loop():
    choice = input("Enter your choice: ")
    if choice == "1":
        title = input("Enter task title: ")
        description = input("Enter task description: ")
        due_date = input("Enter due date: ")
        priority = input("Enter priority: ")
        tasks.add_task(title, description, due_date, priority)
    elif choice == "2":
        tasks.list_tasks()
    elif choice == "3":
        pass
    elif choice == "4":
        pass
    elif choice == "5":
        pass
    elif choice == "6":
        print("Exiting program...")
        sys.exit()
    else:
        print("Invalid choice. Please try again.")

def main():
    while True:
        show_menu()
        print_loop()
        

if __name__ == '__main__':
    main()
