<template>
  <div
    class="
      h-full
      overflow-hidden
      md:space-x-4
      text-gray-700
      rounded-lg
      shadow-xl
      dark:bg-gray-800 dark:text-gray-300
    "
  >
    <g-link :to="`${category.node.path}/`" class="text-copy-primary">
      <g-image
        class="lg:h-48 md:h-36 w-full object-contain object-center"
        :src="
            '/images/default-thumb.png'
        "
        alt="category.node.title"
      />
    </g-link>
    <div class="p-6">
      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
        <g-link style='text-transform: capitalize;' :to="`${category.node.path}/`" class="text-copy-primary">
         On {{ category.node.id }}
        </g-link>
      </h1>
      <div class="flex items-center flex-wrap">
        <g-link
          :to="`${category.node.path}/`"
          class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0"
          >Read More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
}
</script>
