<template>
  <div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="請選擇班別類型與日期"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleSubmit"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="班別類型：">
          <b-form-select
            v-model="typeSelected"
            :options="shiftType"
            text-field="Subject"
            value-field="Subject"
          >
            <template #first>
              <b-form-select-option :value="null" disabled
                >-- Please select an option --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group label="日期：" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            id="date-checkbox-group"
            v-model="dateSelected"
            :options="datesArray"
            :aria-describedby="ariaDescribedby"
          ></b-form-checkbox-group>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import ShiftTypeCSV from "../assets/shiftType.json";
import utils from "../apis/utils.js";
export default {
  props: ["dates"],
  data() {
    return {
      shiftType: ShiftTypeCSV,
      typeSelected: null,
      dateSelected: [],
      orgnizeData: [],
    };
  },
  computed: {
    datesArray() {
      return this.dates.map((value) => value.date);
    },
  },
  methods: {
    resetModal() {
      this.typeSelected = null;
      this.dateSelected = [];
    },
    handleSubmit() {
      // 歷遍勾選的日期，將選擇的類型帶回 dates 的 type 欄位裡
      this.dates.forEach((d) => {
        if (this.dateSelected.includes(d.date)) {
          d.type = this.typeSelected;
        }
      });
      this.orgnizeData = utils.mapData(this.dates);
      this.$emit("orgnizeData", this.orgnizeData);
    },
  },
};
</script>
