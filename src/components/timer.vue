<template>
  <span>{{ text }}</span>
</template>

<script>
  export default {
    props: {
      backward: { // 是否是倒计时
        type: Boolean,
        default: false
      },
      minutes: {
        type: Number,
        default: 0,
        twoWay: true
      },
      seconds: {
        type: Number,
        default: 0,
        twoWay: true
      }
    },
    methods: {
      count () {
        const diffSeconds = (Date.now() - this._startTime) / 1000
        const totalSeconds = this.backward ? (this._initSeconds - diffSeconds + 1) : (this._initSeconds + diffSeconds)
        let minutes
        let seconds
        if (totalSeconds > 0) {
          minutes = Math.floor(totalSeconds / 60)
          seconds = Math.floor(totalSeconds % 60)
        } else {
          minutes = 0
          seconds = 0
          this.pause()
          this.$emit('end')
        }
        this.minutes = minutes
        this.seconds = seconds
      },

      pause () {
        window.clearInterval(this._timeId)
      },

      continue () {
        this._startTime = Date.now()
        this._initSeconds = this.minutes * 60 + this.seconds
        this._timeId = window.setInterval(this.count, 1000)
      }
    },
    computed: {
      text () {
        return _.padStart(this.minutes, 2, '0') + ':' + _.padStart(this.seconds, 2, '0')
      }
    },
    beforeDestroy () {
      this.pause()
    }
  }
</script>
