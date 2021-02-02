// Import stylesheets
import "./tailwind.css";
import employees from "./data/employees.js";
import Vue from "vue";

var app = new Vue({
  el: "#app",
  data: {
    name: "Example List!",
    listElements: employees,
    isLoading: true
  },
  computed: {
    renderList() {
      return this.isLoading ? [1, 2, 3, 4, 5] : this.listElements;
    }
  },
  methods: {
    editItem(element) {
      // You can emit the selected element
      // this.$emit('do-edit', element);
      alert(`Your are emitting element: ${JSON.stringify(element, null, 2)}`);
    }
  },
  mounted() {
    setTimeout(() => (this.isLoading = false), 3000);
  },
  template: `
    <div>
      <h1>{{name}}</h1>
      <div class="w-screen bg-transparent flex items-center justify-around">
        <ul class="w-full max-w-md overflow-auto">
          <li v-for="element in renderList" :key="element.id" class="p-4 mb-3 flex items-center justify-between bg-white shadow rounded-lg cursor-move">
            <template>
              <div class="flex items-center">
                <img class="w-10 h-10 rounded-full" :src="element.avatar" :alt="element.name"
                :class="{'animate-pulse bg-gray-400' : isLoading}">
                <p class="ml-2 text-gray-700 font-semibold font-sans tracking-wide break-all md:break-words"
                :class="{'animate-pulse bg-gray-400 w-48 h-6' : isLoading}">
                {{element.name}}</p>
              </div>
              <div class="flex items-center">
                <button class="btn mx-4 px-4 rounded"
                :class="[{'animate-pulse' : isLoading},element.isActive ? 'bg-green-400' : 'bg-red-400']" @click="editItem(element)">
                  <span class="capitalize"
                :class="{'animate-pulse' : isLoading}">Edit</span>
                </button>
              </div>
            </template>
          </li>
        </ul>
      </div>
    </div>
  `
});
