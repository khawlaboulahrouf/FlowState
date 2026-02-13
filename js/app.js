
import { renderStart, renderError } from "./ui.js";
import { renderTodo } from "./todo.js";
import { renderTimer } from "./timer.js";

const root = document.getElementById("app");
let activeTask = null;

const showStart = () => renderStart(root, showTodo);
const showTodo = () => renderTodo(root, handleTaskTimer);
const showTimer = () => {
  if (!activeTask) return showError("Configure une tâche avant de lancer le minuteur.");
  renderTimer(root, activeTask, showTodo);
};
const handleTaskTimer = (task) => {
  activeTask = task;
  showTimer();
};
const showError = (message) => renderError(root, message, showTodo);

showStart();