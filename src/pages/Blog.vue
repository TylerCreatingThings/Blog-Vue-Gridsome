<template>
  <Layout>
    <section class="body-font">
      <div class="container mx-auto flex flex-wrap py-8">
        <div class="w-full md:w-3/3 flex flex-col pr-0 md:pr-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="post in $page.posts.edges" :key="post.id">
              <post-card :post="post"></post-card>
            </div>
          </div>

          <pagination-posts
            class="mt-10"
            v-if="$page.posts.pageInfo.totalPages > 1"
            base="/blog"
            :totalPages="$page.posts.pageInfo.totalPages"
            :currentPage="$page.posts.pageInfo.currentPage"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        categories {
          id
          path
        }
        date (format: "MMMM D, Y")
        summary
        thumbnail
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog',
  },
  components: {
    AppSidebar: () => import('~/components/parts/AppSidebar'),
    PaginationPosts: () => import('~/components/PaginationPosts'),
    PostCard: () => import('~/components/PostCard'),
  },
}
</script>
