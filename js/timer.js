let time = 1500;
let interval = null;
let currentTask = null;
let phase = "focus"; // "focus" ou "break"

const DURATIONS = {
  focus: 1500,
  break: 300
};

const format = () => {
  const m = String(Math.floor(time / 60)).padStart(2, "0");
  const s = String(time % 60).padStart(2, "0");
  return `${m} : ${s}`;
};

const resetTimer = () => {
  clearInterval(interval);
  interval = null;
  time = DURATIONS[phase];
};

export const renderTimer = (container, task, onBack) => {
  currentTask = task;
  phase = "focus";
  resetTimer();

  const render = () => {
    container.innerHTML = `
      <div class="flex flex-col h-full bg-[#F3EFFA]">
        <header class="bg-[#D8CDEA] p-4 text-center font-semibold">
          Timer
        </header>

        <main class="flex-1 flex flex-col items-center justify-center space-y-6">
        <img src="pomo.jpg"
        alt="Illustration FlowState"
        class="w-40 h-40 object-contain mx-auto drop-shadow-xl" />
          <p class="text-sm text-gray-500 uppercase tracking-wide">
            ${phase === "focus" ? "Focus 25 min" : "Break 5 min"}
          </p>
          <h2 class="font-semibold">${currentTask.title}</h2>
          <div class="text-5xl font-bold">${format()}</div>
          <div class="flex gap-4">
            <button id="start"
              class="bg-purple-600 text-white px-6 py-2 rounded-xl">
              Start
            </button>
            <button id="stop"
              class="bg-gray-300 px-6 py-2 rounded-xl">
              Stop
            </button>
          </div>
          <button id="back"
            class="text-sm text-gray-500 underline">
            Back to tasks
          </button>
        </main>
      </div>
    `;

    document.getElementById("start").onclick = () => {
      if (interval) return;
      interval = setInterval(() => {
        time -= 1;
        container.querySelector(".text-5xl").innerText = format();
        if (time <= 0) {
          clearInterval(interval);
          interval = null;
          if (phase === "focus") {
            phase = "break";
            resetTimer();
            alert("Bravo, fais une pause de 5 minutes !");
            render();
          } else {
            alert("Cycle Pomodoro terminé 💜");
            phase = "focus";
            resetTimer();
            render();
          }
        }
      }, 1000);
    };

    document.getElementById("stop").onclick = () => {
      clearInterval(interval);
      interval = null;
    };

    document.getElementById("back").onclick = () => {
      clearInterval(interval);
      interval = null;
      phase = "focus";
      resetTimer();
      onBack();
    };
  };

  render();
};
