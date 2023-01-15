export default {
  template: "#userProductModal",
  props: {
    product: {
      type: Object, // 預設值，當 product 沒有傳入值時不會變成 undefined，而是空物件
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      status: {},
      modal: "",
      qty: 1,
    };
  },
  mounted() {
    this.modal = new bootstrap.Modal(this.$refs.modal, {  // 透過 ref 屬性直接抓取 dom 元素
      keyboard: false,
      backdrop: "static",
    });
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
};