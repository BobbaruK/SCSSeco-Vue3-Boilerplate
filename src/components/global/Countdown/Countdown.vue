<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import translationsGlossary from "../../../composables/global/translationsGlossary";

export default {
  name: "CountDown",
  props: {
    countdownDetails: Object,
    lang: String,
  },
  setup(props) {
    const textSeconds = translationsGlossary.s.seconds;
    const textMinutes = translationsGlossary.m.minutes;
    const textHours = translationsGlossary.h.hours;
    const textDays = translationsGlossary.d.days;
    const textWeeks = translationsGlossary.w.weeks;

    const autoRemove = ref(
      !props.countdownDetails.autoRemove ? true : props.countdownDetails.autoRemove == "true" ? true : false
    );

    const seconds = ref(null);
    const minutes = ref(null);
    const hours = ref(null);
    const days = ref(null);
    const weeks = ref(null);

    const hideS = ref();
    const hideM = ref();
    const hideH = ref();
    const hideD = ref();
    const hideW = ref();

    if (autoRemove.value == true) {
      hideS.value = props.countdownDetails.hideSeconds == "true" ? true : false;
      hideM.value = props.countdownDetails.hideMinutes == "true" ? true : false;
      hideH.value = props.countdownDetails.hideHours == "true" ? true : hideM.value == true ? true : false;
      hideD.value = props.countdownDetails.hideDays == "true" ? true : hideH.value == true ? true : false;
      hideW.value = props.countdownDetails.hideWeeks == "true" ? true : hideD.value == true ? true : false;
    } else {
      hideS.value = props.countdownDetails.hideSeconds == "true" ? true : false;
      hideM.value = props.countdownDetails.hideMinutes == "true" ? true : false;
      hideH.value = props.countdownDetails.hideHours == "true" ? true : false;
      hideD.value = props.countdownDetails.hideDays == "true" ? true : false;
      hideW.value = props.countdownDetails.hideWeeks == "true" ? true : false;
    }

    const countTo = props.countdownDetails.countdownTo;

    const updateCountdown = () => {
      const currentTime = new Date();

      // console.log(props.countdownDetails.countdownID, "currentTime", currentTime);
      // console.log(props.countdownDetails.countdownID, "countTo", countTo);
      // console.log(currentTime < countTo);

      const gap = countTo - currentTime;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const week = day * 7;

      let w, d, h, m, s;

      if (autoRemove.value == true) {
        w = Math.floor(gap / week);
        d = hideW.value ? Math.floor(gap / day) : Math.floor((gap % week) / day);
        h = hideD.value ? Math.floor(gap / hour) : Math.floor((gap % day) / hour);
        m = hideH.value ? Math.floor(gap / minute) : Math.floor((gap % hour) / minute);
        s = hideM.value ? Math.floor(gap / second) : Math.floor((gap % minute) / second);
      } else {
        w = Math.floor(gap / week);
        d = hideW.value ? Math.floor(gap / day) : Math.floor((gap % week) / day);
        h = hideD.value ? Math.floor((gap % week) / hour) : Math.floor((gap % day) / hour);
        m = hideH.value
          ? hideD.value
            ? Math.floor((gap % week) / minute)
            : Math.floor((gap % day) / minute)
          : Math.floor((gap % hour) / minute);
        s = hideM.value
          ? hideH.value
            ? hideD.value
              ? Math.floor((gap % week) / second)
              : Math.floor((gap % day) / second)
            : Math.floor((gap % hour) / second)
          : Math.floor((gap % minute) / second);
      }
      // if (hideW.value) {
      //   d = Math.floor(gap / day);
      //   h = Math.floor((gap % day) / hour);
      //   m = Math.floor((gap % hour) / minute);
      //   s = Math.floor((gap % minute) / second);
      // } else if (hideD.value) {
      //   console.log("asdsad");
      //   h = Math.floor(gap / hour);
      //   m = Math.floor((gap % hour) / minute);
      //   s = Math.floor((gap % minute) / second);
      // } else if (hideH.value) {
      //   w = Math.floor(gap / week);
      //   d = Math.floor((gap % week) / day);
      //   m = Math.floor((gap % day) / minute);
      //   s = Math.floor((gap % minute) / second);
      // } else if (hideM.value) {
      //   w = Math.floor(gap / week);
      //   d = Math.floor((gap % week) / day);
      //   h = Math.floor((gap % day) / hour);
      //   s = Math.floor((gap % hour) / second);
      // } else {
      //   w = Math.floor(gap / week);
      //   d = Math.floor((gap % week) / day);
      //   h = Math.floor((gap % day) / hour);
      //   m = Math.floor((gap % hour) / minute);
      //   s = Math.floor((gap % minute) / second);
      // }

      // days.value.innerHTML = d < 0 ? Math.abs(d + 1) : d < 10 ? (d >= 0 ? `0${d}` : d) : d;
      if (props.countdownDetails.stopEnd) {
        if (!hideW.value) {
          weeks.value.innerHTML = w <= 0 ? "00" : w < 10 ? `0${w}` : w;
        }

        if (!hideD.value) {
          days.value.innerHTML = d <= 0 ? "00" : d < 10 ? `0${d}` : d;
        }

        if (!hideH.value) {
          hours.value.innerHTML = h <= 0 ? "00" : h < 10 ? `0${h}` : h;
        }

        if (!hideM.value) {
          minutes.value.innerHTML = m <= 0 ? "00" : m < 10 ? `0${m}` : m;
        }

        if (!hideS.value) {
          seconds.value.innerHTML = s <= 0 ? "00" : s < 10 ? `0${s}` : s;
        }

        return;
      }

      if (!hideW.value) {
        weeks.value.innerHTML =
          currentTime < countTo
            ? w < 10
              ? w >= 0
                ? `0${w}`
                : w
              : w
            : w >= -10
            ? `0${Math.abs(w + 1)}`
            : Math.abs(w + 1);
      }

      if (!hideD.value) {
        days.value.innerHTML =
          currentTime < countTo
            ? d < 10
              ? d >= 0
                ? `0${d}`
                : d
              : d
            : d >= -10
            ? `0${Math.abs(d + 1)}`
            : Math.abs(d + 1);
      }

      if (!hideH.value) {
        hours.value.innerHTML =
          currentTime < countTo
            ? h < 10
              ? h >= 0
                ? `0${h}`
                : h
              : h
            : h >= -10
            ? `0${Math.abs(h + 1)}`
            : Math.abs(h + 1);
      }

      if (!hideM.value) {
        minutes.value.innerHTML =
          currentTime < countTo
            ? m < 10
              ? m >= 0
                ? `0${m}`
                : m
              : m
            : m >= -10
            ? `0${Math.abs(m + 1)}`
            : Math.abs(m + 1);
      }

      if (!hideS.value) {
        seconds.value.innerHTML =
          currentTime < countTo
            ? s < 10
              ? s >= 0
                ? `0${s}`
                : s
              : s
            : s >= -10
            ? `0${Math.abs(s + 1)}`
            : Math.abs(s + 1);
      }
    };

    let interval;
    const stopInterval = () => {
      clearInterval(interval);
    };

    onMounted(() => {
      interval = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      stopInterval();
    });

    return {
      textSeconds,
      textMinutes,
      textHours,
      textDays,
      textWeeks,
      autoRemove,
      seconds,
      minutes,
      hours,
      days,
      weeks,
      hideS,
      hideM,
      hideH,
      hideD,
      hideW,
    };
  },
};
</script>
<template>
  <div :id="countdownDetails.countdownID" class="countdown">
    <div v-if="!hideW">{{ textWeeks[lang] }} <span ref="weeks">00</span></div>
    <div v-if="!hideD">{{ textDays[lang] }} <span ref="days">00</span></div>
    <div v-if="!hideH">{{ textHours[lang] }} <span ref="hours">00</span></div>
    <div v-if="!hideM">{{ textMinutes[lang] }} <span ref="minutes">00</span></div>
    <div v-if="!hideS">{{ textSeconds[lang] }} <span ref="seconds">00</span></div>
  </div>
</template>

<style lang="scss">
.countdown,
.countdown > div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.countdown {
  flex-wrap: wrap;
  justify-content: flex-start;
  // padding: 3rem 0;
  span {
    display: block;
    font-size: 130%;
    font-weight: bold;
  }
}
.countdown > div {
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
