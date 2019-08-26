<template>
  <div class="relative">
    <main class="bg-white pb-16 pt-12 h-screen flex items-center justify-center">
      <div class="test-container border border-solid">
        <header class="h-12 bg-gray-900">
          <div class="text-white flex flex-col md:flex-row justify-between items-center py-1 px-3 h-full">
            <h4>Check 01: Lorem input sitrum</h4>
            <div class="flex items-center">
              <span>Completed: </span>
              <div class="w-64 h-4 ml-3 bg-white inline-block">
                <div class="w-1/2 h-full bg-blue-300"></div>
              </div>
            </div>
          </div>
        </header>
        <memory-put />
        <footer class="h-12 bg-gray-900">
          <div class="flex justify-between items-center h-full py-1 px-3">
            <div>
              <button class="py-2 px-4 mx-1 bg-gray-200 hover:bg-gray-400 rounded">Ignore</button>
              <button class="py-2 px-4 mx-1 bg-gray-200 hover:bg-gray-400 rounded">I dont know</button>
            </div>
            <div>
              <button class="py-2 px-4 mx-1 bg-gray-200 hover:bg-gray-400 rounded">Next</button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
import MemoryPut from '@/components/pages/MemoryPut'

export default {
  name: 'BlankPage',
  components: {
    MemoryPut
  }
}
</script>

<style>
.test-container {
  width: 643px;
  height: 497px;
}
</style>
