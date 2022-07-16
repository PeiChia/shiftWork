<template>
  <div id="shift">
    <b-container class="ml-2 mr-2">
      <b-row class="mt-3">
        <b-col cols="4">
          <h5>請選擇日期區段</h5>
        </b-col>
        <b-col cols="8">
          <h5>班表資訊</h5>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="start_date_group"
              label="開始時間："
              label-for="start_date"
            >
              <b-form-datepicker
                id="start_date"
                v-model="startDate"
                :disabled="okStatus"
              ></b-form-datepicker>
            </b-form-group>
            <b-form-group
              id="end_date_group"
              label="結束時間："
              label-for="end_date"
            >
              <b-form-datepicker
                id="end_date"
                v-model="endDate"
                :disabled="okStatus"
              ></b-form-datepicker>
            </b-form-group>

            <b-button
              pill
              type="submit"
              variant="primary"
              class="mr-2"
              :disabled="okStatus"
              >OK</b-button
            >
            <b-button
              pill
              variant="primary"
              class="mr-2"
              :disabled="addStatus"
              v-b-modal.modal-prevent-closing
              >Add</b-button
            >
            <b-button pill type="reset" variant="danger" class="mr-2"
              >Reset All</b-button
            >
            <b-button pill variant="info" :disabled="exportStatus"
              ><ExportCSV :data="exportCsv" name="shift.csv"
                >Export to CSV</ExportCSV
              ></b-button
            >
          </b-form>
        </b-col>
        <b-col cols="8">
          <b-card class="mb-5">
            <b-card-text>
              <label v-if="rows == 0">目前無資料</label>
              <b-table
                striped
                hover
                :items="dates"
                :busy="isBusy"
                :per-page="perPage"
                :current-page="currentPage"
              >
                <template #table-busy>
                  <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle mr-2"></b-spinner>
                    <strong>Loading...</strong>
                  </div>
                </template>
              </b-table>
            </b-card-text>
            <b-card-text>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
                pills
              ></b-pagination>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <AddData :dates="dates" @orgnizeData="orgnizeData"></AddData>
  </div>
</template>

<style scoped></style>

<script>
import utils from "../apis/utils.js";
import AddData from "@/components/addData.vue";
// 版本有問題，目前固定 v1.2.11
import ExportCSV from "vue-json-csv";
import moment from "moment";
export default {
  components: {
    AddData,
    ExportCSV,
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      dates: [],
      isBusy: false,
      rows: 0,
      perPage: 30,
      currentPage: 1,
      okStatus: false,
      addStatus: true,
      exportStatus: true,
      exportCsv: [],
    };
  },
  methods: {
    onSubmit() {
      event.preventDefault();
      this.okStatus = true;
      this.addStatus = false;
      let startValue = moment(this.startDate);
      let endValue = moment(this.endDate);
      // 注意：rows 是相差的天數 + 1天 (開始日期)
      this.rows = utils.diffDays(startValue, endValue) + 1;
      this.dates = utils.writeDates(startValue, endValue);
      this.isBusy = true;
      setTimeout(() => {
        this.isBusy = false;
      }, 500);
    },
    onReset() {
      this.startDate = "";
      this.endDate = "";
      this.rows = 0;
      this.dates = [];
      this.exportCsv = [];
      this.okStatus = false;
      this.addStatus = true;
      this.exportStatus = true;
    },
    orgnizeData(val) {
      this.exportCsv = val;
    },
  },
  watch: {
    exportCsv: {
      handler: function (value) {
        if (value.includes(undefined)) {
          this.exportStatus = true;
        } else {
          this.exportStatus = false;
        }
      },
      deep: true,
    },
  },
};
</script>
