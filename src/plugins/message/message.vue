<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
    @after-leave="handleAfterLeave"
  >
    <div class="message-box" v-show="alertVisiable" :style="{top: verticalOffset+'px'}">
      <v-alert
        :dense="dense"
        class="alert"
        :type="type"
        variant="contained-text"
        max-width="300"
        :color="color"
      >{{message}}</v-alert>
    </div>
  </transition>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      alertVisiable: false,
      verticalOffset: 20,
      closed: false,
      onClose: null,
      timer: null,
    };
  },
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "info",
      validator: (value) => {
        return ["success", "warning", "error", "info"].includes(value);
      },
    },
    duration: {
      type: Number,
      default: 3000,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: ''
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.alertVisiable = false;
      }
    },
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },

    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose();
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.animate__animated.animate__fadeInDown,
.animate__animated.animate__fadeOutUp {
  --animate-duration: 0.5s;
}
.message-box {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: top 0.3s linear;
}
.alert {
  margin: auto;
}
</style>