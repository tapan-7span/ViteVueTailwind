<template>
  <div class="text-black">
    <VList
      :attrs="state.AttrsDefault"
      :per-page="state.PerPage"
      :endpoint="state.endPoint"
      :title="state.Title"
      :sort-by="state.sortBy"
      :filters="{ tag: filters.tag }"
      :sort-order="state.sortOrder"
      :key="state.key"
    >
      <template #default="{ selection, instance, loadingMore }">
        <span class="SearchS">Search For Name :</span>
        <v-list-search class="VListSearch" />
        <v-list-attributes class="ListAttribute" /><br />
        <div class="SearchS !text-2xl !text-blue-400 w-[90%] text-center">
          {{ state.Title }}
        </div>
        <v-list-table :rowClass="rowClass" class="ListTable">
          <template #th_after="{ AttrsDefault, sortBy, sortOrder }">
            <div
              v-if="state.AttrsDefault.name == state.sortBy"
              style="margin-left: 2px"
            >
              <span v-if="state.sortOrder == 'asc'">&nbsp;⬆</span>
              <span v-else-if="state.sortOrder == 'desc'">&nbsp;⬇</span>
            </div>
          </template>
          <template #th_select="{ toggleSelectAll, selectionState }">
            <button @click="toggleSelectAll()">{{ selectionState }}</button>
          </template>
          <template #select="{ toggleSelect, isSelected }">
            <button v-if="isSelected" @click="toggleSelect()">☑</button>
            <button v-else @click="toggleSelect()">🟦</button>
          </template>
        </v-list-table>
        <v-list-pagination class="Paginate">
          <template #prev="{ prev, hasPrev }">
            <button :disabled="!hasPrev" @click="prev()">◀</button>
          </template>

          <template #page="{ change, value, isActive }">
            <button class="!text-blue-400" v-if="isActive">
              {{ value }}
            </button>
            <button v-else @click="change(value)">
              {{ value }}
            </button>
          </template>

          <template #next="{ next, hasNext }" class="text-xl">
            <button :disabled="!hasNext" @click="next()" class="text-xl">
              ▶
            </button>
          </template>
        </v-list-pagination>

        <v-list-counter class="ListCounters" />
        <v-list-load-more class="LoadMoreBtn" />
        <span class="GoToText">Per Page :</span>
        <v-list-per-page :parent="instance" class="GoTo" />
        <br />
        <span class="GoToText">Go To Page :</span><v-list-go-to class="GoTo" />

        <span class="LoadMore">Status of Loading : {{ loadingMore }} </span>
        <br />

        <span class="SelectionS">Selection :</span>
        <p class="SelectionS">{{ selection }}</p>
      </template>
    </VList>
  </div>
</template>
<script>
import { reactive } from "vue";

export default {
  data() {
    return {
      filters: {
        tag: 1,
      },
    };
  },
  setup() {
    const state = reactive({
      Title: "List Title",
      PerPage: 4,
      key: 0,
      AttrsDefault: [
        {
          name: "select",
        },
        {
          name: "_index",
        },
        {
          name: "id",
          sortable: true,
        },
        {
          name: "name",
          sortable: true,
        },
      ],
      AttrsStr: JSON.stringify([
        {
          name: "select",
        },
        {
          name: "_index",
        },
        {
          name: "id",
          sortable: true,
        },
        {
          name: "name",
          sortable: true,
        },
      ]),
      endPoint: "https://api.pagemaker.dev/api/v1/modules",
      sortBy: "name",
      sortOrder: "desc",
    });
    const SubmitKey = () => {
      state.key++;
      var AttrsPars = JSON.parse(state.AttrsStr);
      state.AttrsDefault = AttrsPars;
    };
    return {
      state,
      SubmitKey,
    };
  },
  methods: {
    rowClass(row, rowIndex) {
      return [
        {
          "in-active": true,
        },
        "disabled",
      ];
    },
    toggleSortOrder() {
      if (state.sortOrder === "asc") state.sortOrder = "desc";
      else state.sortOrder = "asc";
    },
  },
};
</script>
