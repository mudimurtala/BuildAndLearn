tasks = []

next_task_id = 1

def add_task(title, description, due_date, priority):

    global next_task_id

    task = {
        "id": next_task_id,
        "title": title, 
        "description": description, 
        "due_date": due_date, 
        "priority": priority
    }

    tasks.append(task)
    next_task_id += 1

    print(f"Task '{title}' added successfully with ID {task['id']}!")
    return task

def list_tasks():
    if not tasks:
        print("No tasks available yet.")
        return
    
    print("\nYour Tasks:")
    print("-" * 50)
    for task in tasks:
        print(
            f"ID: {task['id']} | "
            f"Title: {task['title']} | "
            f"Due: {task['due_date']} | "
            f"Priority: {task['priority']}"
        )
    print("-" * 50)

def update_task(task_id, **kwargs):
    pass

def delete_task(task_id):
    pass

def search_tasks(keyword):
    pass

