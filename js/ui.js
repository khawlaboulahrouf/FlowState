export const renderStart = (container, onStart) => {
  container.innerHTML = `
    <div 
      class="h-full w-full relative bg-cover bg-center"
      style="background-image: url('todo.webp');"
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