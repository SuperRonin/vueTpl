<template>
     <div class="bg-box" onclick="javascript:void(0)">
         <div class="fading-circle fadingCircle">
             <img src="@/assets/img/loading.gif" class="loadImg">
        </div>
    </div>
</template>


<style lang="scss" scoped>
.fading-circle {
    width: 2rem;
    height: 1.2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -1rem;
    margin-top: -0.6rem;
    background: rgba(0, 0, 0, .3);
    z-index: 9999;
    text-align: center;
    border-radius: 0.1rem;
}
.bg-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.loadImg {
  height: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -19px;
  margin-top: -12.5px;
}
</style>

<script>
export default {
  props: ["isShow"],
  data() {
    return {};
  },
  mounted() {
    // this.loading();
  },
  methods: {
    loading() {
      var loading_container = document.getElementById("loadingContainer");
      var ps = -230;
      var busloading_animate = setInterval(function() {
        ps -= 220;
        if (ps === -14090) {
          ps = -14310;
        }
        if (ps === -27950) {
          ps = -230;
        }
        loading_container.style.backgroundPosition = ps + "px -10px";
      }, 20);
    },
    hideLoading() {
      document.getElementById("busLoading");
      busLoading.style.display = "none";
    }
  }
};
</script>
