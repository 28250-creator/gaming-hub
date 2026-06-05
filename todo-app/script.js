// To-Do List Application with Local Storage

class TodoApp {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.taskInput = document.getElementById('taskInput');
        this.taskList = document.getElementById('taskList');
        this.addBtn = document.getElementById('addBtn');
        this.clearCompletedBtn = document.getElementById('clearCompletedBtn');
        this.clearAllBtn = document.getElementById('clearAllBtn');
        this.emptyState = document.getElementById('emptyState');
        
        this.init();
    }

    init() {
        // Load tasks from localStorage
        this.loadTasks();
        
        // Render tasks
        this.render();
        
        // Event listeners
        this.addBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());
    }

    // Add new task
    addTask() {
        const text = this.taskInput.value.trim();
        
        if (!text) {
            alert('⚠️ Please enter a task!');
            return;
        }

        const task = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleDateString()
        };

        this.tasks.unshift(task);
        this.saveTasks();
        this.render();
        this.taskInput.value = '';
        this.taskInput.focus();
    }

    // Toggle task completion
    toggleTask(id) {
        this.tasks = this.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        this.saveTasks();
        this.render();
    }

    // Delete task
    deleteTask(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(task => task.id !== id);
            this.saveTasks();
            this.render();
        }
    }

    // Clear completed tasks
    clearCompleted() {
        if (this.tasks.some(task => task.completed)) {
            if (confirm('Delete all completed tasks?')) {
                this.tasks = this.tasks.filter(task => !task.completed);
                this.saveTasks();
                this.render();
            }
        } else {
            alert('ℹ️ No completed tasks to clear!');
        }
    }

    // Clear all tasks
    clearAll() {
        if (this.tasks.length > 0) {
            if (confirm('⚠️ This will delete ALL tasks! Are you sure?')) {
                this.tasks = [];
                this.saveTasks();
                this.render();
            }
        } else {
            alert('ℹ️ No tasks to clear!');
        }
    }

    // Filter tasks
    filterTasksGlobal(filter) {
        this.currentFilter = filter;
        this.render();
    }

    // Get filtered tasks
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    // Update stats
    updateStats() {
        const total = this.tasks.length;
        const active = this.tasks.filter(task => !task.completed).length;
        const completed = this.tasks.filter(task => task.completed).length;

        document.getElementById('totalCount').textContent = total;
        document.getElementById('activeCount').textContent = active;
        document.getElementById('completedCount').textContent = completed;
    }

    // Render tasks
    render() {
        const filteredTasks = this.getFilteredTasks();
        this.taskList.innerHTML = '';

        if (filteredTasks.length === 0) {
            this.emptyState.style.display = 'block';
            this.taskList.style.display = 'none';
        } else {
            this.emptyState.style.display = 'none';
            this.taskList.style.display = 'block';

            filteredTasks.forEach(task => {
                const li = document.createElement('li');
                li.className = `task-item ${task.completed ? 'completed' : ''}`;
                
                li.innerHTML = `
                    <div class="checkbox" onclick="app.toggleTask(${task.id})"></div>
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                    <span class="task-date">${task.createdAt}</span>
                    <button class="delete-btn" onclick="app.deleteTask(${task.id})">🗑️</button>
                `;
                
                this.taskList.appendChild(li);
            });
        }

        this.updateStats();
    }

    // Save to localStorage
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Load from localStorage
    loadTasks() {
        const stored = localStorage.getItem('tasks');
        this.tasks = stored ? JSON.parse(stored) : [];
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Global filter function
function filterTasks(filter) {
    app.filterTasksGlobal(filter);
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});