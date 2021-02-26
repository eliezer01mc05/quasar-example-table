<template>
  <q-page>
    <div class="row">
      <q-table
        dense
        title="Treats"
        :data="posts"
        :columns="columns"
        row-key="id"
        class="col"
        separator="cell"
        selection="single"
        :selected.sync="selected"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn
                size="sm"
                color="accent"
                round
                dense
                @click="props.expand = !props.expand"
                :icon="props.expand ? 'remove' : 'add'"
              />
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left">
                {{ props.row.body }}.
              </div>
            </q-td>
          </q-tr>
        </template>
        <!-- <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn
              icon="delete"
              color="negative"
              size="small"
              @click="deletePost(props.row)"
              dense
            />
            <q-btn
              icon="edit"
              color="primary"
              size="small"
              class="q-ml-sm"
              @click="editPost(props.row)"
              dense
            />
          </q-td>
        </template> -->
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      columns: [
        {
          name: "id",
          label: "ID Post",
          field: "id",
          align: "left",
          sortable: true,
        },
        {
          name: "title",
          label: "Title",
          field: "title",
          align: "left",
          sortable: true,
        },
        // {
        //   name: "action",
        //   label: "Action",
        //   field: "id",
        //   align: "left",
        //   sortable: true,
        // },
      ],
      posts: [],
      selected: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    editPost(idPost) {
      console.log(idPost);
    },
    deletePost(idPost) {
      console.log(idPost);
    },
  },
};
</script>
