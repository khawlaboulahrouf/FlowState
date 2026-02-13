export const renderStart = (container, onStart) => {
  container.innerHTML = `
    <div 
      class="h-full w-full relative bg-cover bg-center"
      style="background-image: url('todo.jpg');"
    >

      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- Content -->
      <div class="relative h-full flex flex-col justify-end items-center pb-12">
        <button id="startBtn"
          class="bg-[#A557F7] hover:bg-[#8b3eea] text-white px-20 py-3 rounded-full text-lg shadow-2xl transition">
          start >>
        </button>
      </div>

    </div>
  `;

  document.getElementById("startBtn").onclick = onStart;
};

export const renderError = (container, message, onBack) => {
  container.innerHTML = `
    <div class="h-full flex flex-col bg-[#F3EFFA]">
      <header class="bg-[#D8CDEA] p-4 text-center font-semibold">
        Timer
      </header>
      <main class="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p class="text-red-500 font-semibold">Erreur</p>
        <p class="text-sm text-gray-600 max-w-xs">
          ${message}
        </p>
        <button id="backFromError"
          class="mt-2 px-6 py-2 rounded-xl bg-purple-600 text-white text-sm">
          Retour aux tâches
        </button>
      </main>
    </div>
  `;

  document.getElementById("backFromError").onclick = onBack;
};
export const emptyState = () => `
  <p class="text-center text-gray-400 mt-10">
    🌸 Ta liste est vide, ajoute ta première tâche pour entrer en FlowState 🌸
  </p>
`;