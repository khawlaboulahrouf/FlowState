import { Storage } from "./storage.js";
import { emptyState } from "./ui.js";

export const renderTodo = (container, onOpenTimer) => {
  let tasks = Storage.get("tasks");
  const regex = /^[A-Za-z0-9\s]+$/;

  const rerender = () => renderTodo(container, onOpenTimer);

  container.innerHTML = `
    <div class="flex flex-col h-full bg-[#F3EFFA]">

      <!-- HEADER -->
      <header class="flex justify-between items-center px-5 py-4 bg-[#D8CDEA] z-10">
        <button class="text-2xl">☰</button>
        <span class="font-semibold text-base">Home</span>
        <button class="text-xl">🔔</button>
      </header>

      <!-- ILLUSTRATION + TITLE -->
      <div class="flex flex-col items-center mt-4 px-6">
        <img src="todoH.webp" class="w-65 drop-shadow-lg mb-2" />
        <h2 class="text-center font-semibold text-lg mb-4">
          What do you want to do today
        </h2>
      </div>

      <!-- TASKS LIST + ADD INPUT -->
      <main class="px-6 space-y-3 pb-32">
        ${tasks.length === 0 ? emptyState() :
          tasks.map(t => `
            <div class="bg-white p-4 rounded-2xl flex justify-between items-center shadow-md">
              <div class="flex items-center gap-3">
                <input type="checkbox" ${t.done ? "checked" : ""}
                  data-id="${t.id}" class="toggle accent-purple-600 w-5 h-5">
                <span class="${t.done ? "line-through text-gray-400" : "text-gray-800"} text-sm">
                  ${t.title}
                </span>
              </div>
              <div class="flex gap-3">
                <button class="timerBtn text-sm" data-id="${t.id}">⏱️</button>
                <button class="deleteBtn text-sm" data-id="${t.id}">🗑️</button>
              </div>
            </div>
          `).join("")
        }

        <!-- INPUT TO ADD TASK, hidden by default -->
        <div id="newTaskContainer" class="hidden mt-3 flex gap-2">
          <input id="taskInput" type="text" placeholder="New task"
            class="flex-1 border border-purple-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <button id="confirmAddBtn"
            class="bg-purple-600 text-white px-4 rounded-r-full font-semibold">
            Add
          </button>
        </div>
      </main>

      <!-- FLOATING ADD BUTTON -->
      <button id="addBtn"
        class="fixed bottom-20 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#A557F7] text-white text-3xl shadow-2xl z-20">
        +
      </button>
    </div>
  `;
  // ----- INTERACTIONS -----
  const addBtn = document.getElementById("addBtn");
  const newTaskContainer = document.getElementById("newTaskContainer");
  const confirmAddBtn = document.getElementById("confirmAddBtn");
  const taskInput = document.getElementById("taskInput");
   // Toggle input visibility
  addBtn.onclick = () => {
    newTaskContainer.classList.toggle("hidden");
    if (!newTaskContainer.classList.contains("hidden")) taskInput.focus();
  };
      }
