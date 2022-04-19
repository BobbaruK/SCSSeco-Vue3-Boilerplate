<script>
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { gsap } from "gsap";
import languages from "../../composables/translations/languages";
import "../../assets/scss/globals/scsseco_global.scss";
import "../../assets/scss/notfound/scsseco_notfound.scss";
export default {
  name: "PageNotFound",
  setup() {
    // animations

    onMounted(() => {
      const notFoundWrapper = document.querySelector(".notFound");
      const para = notFoundWrapper.querySelector("p");
      const paraSpan = para.querySelectorAll("span");
      const h1 = notFoundWrapper.querySelector("h1");
      const h1Span = h1.querySelectorAll("span");

      let nrParaSpan = 0;
      let nrH1Span = 0;

      const tl = gsap.timeline({
        onComplete: () => {
          tl.restart();
        },
      });

      gsap.set(paraSpan, {
        autoAlpha: 0,
      });
      gsap.set(h1Span, {
        autoAlpha: 0,
      });

      const runAnim = () => {
        // if (nrH1Span > h1Span.length - 1) nrH1Span = 0;
        // gsap.to(h1Span[nrH1Span], {
        //   autoAlpha: 1,
        //   duration: 0.7, // anim duration
        //   onComplete: () => {
        //     setTimeout(() => {
        //       gsap.to(h1Span[nrH1Span], {
        //         autoAlpha: 0,
        //       });
        //       nrH1Span++;
        //       runAnim();
        //     }, 2000); // time on screen
        //   },
        // });

        if (nrParaSpan > paraSpan.length - 1) nrParaSpan = 0;
        gsap.to(paraSpan[nrParaSpan], {
          autoAlpha: 1,
          duration: 0.7, // anim duration
          onComplete: () => {
            setTimeout(() => {
              gsap.to(paraSpan[nrParaSpan], {
                autoAlpha: 0,
              });
              nrParaSpan++;
              runAnim();
            }, 2000); // time on screen
          },
        });
      };
      runAnim();
    });

    // Go Back Go Home
    const router = useRouter();
    console.log(router);
    const { defaultLang } = languages();

    const goBack = () => {
      router.go(-1);
    };
    const goHome = () => {
      window.location.href = `/${defaultLang}`;
    };

    // head tag
    const docTitle = document.querySelector("title");
    docTitle.innerText = `404 | ${process.env.VUE_APP_BRAND_TITLE}`;

    return { goBack, goHome };
  },
};
</script>

<template>
  <section class="notFound">
    <h1>Error</h1>
    <h2>404</h2>
    <hr />
    <p>
      <span data-order="1">Page not found!</span>
      <span data-order="2">Pagina non trovata!</span>
      <span data-order="3">Sayfa bulunamadı</span>
      <span data-order="4">Pagina nu a fost gasita!</span>
      <span data-order="5">Az oldal nem érhető el</span>
      <span data-order="6">لم يتم العثور على الصفحة!</span>
      <span data-order="7">¡Página no encontrada!</span>
      <span data-order="8">Sidan hittades inte!</span>
      <span data-order="9">Sivua ei löydetty!</span>
      <span data-order="10">Strona nie znaleziona!</span>
      <span data-order="11">Laman tidak dijumpai!</span>
    </p>
    <hr />
    <div class="buttons">
      <button @click="goBack">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--ic back"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"></path>
        </svg>
      </button>
      <button @click="goHome">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--clarity home"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 36 36"
        >
          <path
            fill="currentColor"
            d="M33 19a1 1 0 0 1-.71-.29L18 4.41L3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19Z"
            class="clr-i-solid clr-i-solid-path-1"
          ></path>
          <path
            fill="currentColor"
            d="M18 7.79L6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z"
            class="clr-i-solid clr-i-solid-path-2"
          ></path>
          <path fill="none" d="M0 0h36v36H0z"></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/notfound/abstracts/variables" as vars;
@use "../../assets/scss/notfound/abstracts/mixins" as mxns;

.notFound {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  h1,
  p {
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 10px;
    line-height: 1;
    margin: 0;
    text-transform: uppercase;
    @include mxns.mediamin(sm) {
      font-size: 2rem;
    }
    @include mxns.mediamin(md) {
      font-size: 2.2rem;
    }
    @include mxns.mediamin(lg) {
      font-size: 2.5rem;
    }
    @include mxns.mediamin(xl) {
      font-size: 2.7rem;
    }
    @include mxns.mediamin(xxl) {
      font-size: 3rem;
    }
  }

  h2 {
    color: var(--clr-brandSecondaryColor);
    font-size: 7rem;
    font-weight: bold;
    letter-spacing: 10px;
    line-height: 1;
    @include mxns.mediamin(sm) {
      font-size: 7.5rem;
    }
    @include mxns.mediamin(md) {
      font-size: 8rem;
    }
    @include mxns.mediamin(lg) {
      font-size: 8.5rem;
    }
    @include mxns.mediamin(xl) {
      font-size: 9rem;
    }
    @include mxns.mediamin(xxl) {
      font-size: 9.5rem;
    }
  }

  hr {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,000000+50,ffffff+100 */
    background: var(--clr-brandPrimaryColor); /* Old browsers */
    background: -moz-linear-gradient(
      left,
      var(--clr-brandPrimaryColor) 0%,
      var(--clr-white) 50%,
      var(--clr-brandPrimaryColor) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      var(--clr-brandPrimaryColor) 0%,
      var(--clr-white) 50%,
      var(--clr-brandPrimaryColor) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      var(--clr-brandPrimaryColor) 0%,
      var(--clr-white) 50%,
      var(--clr-brandPrimaryColor) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 */
    border: none;
    height: 3px;
    margin: 0;
    width: 80%;
    @include mxns.mediamin(sm) {
      width: 50%;
    }
    @include mxns.mediamin(xxl) {
      width: 700px;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    margin: 1.5rem auto;
    position: relative;
    text-transform: uppercase;
    width: 100%;
    @include mxns.mediamin(sm) {
      font-size: 1.5rem;
    }
    @include mxns.mediamin(md) {
      // font-size: 1.8rem;
    }
    @include mxns.mediamin(lg) {
      // font-size: 2rem;
    }
    @include mxns.mediamin(xl) {
      // font-size: 2.2rem;
    }
    @include mxns.mediamin(xxl) {
      // font-size: 2.7rem;
    }
    span {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }


  .buttons {
    display: flex;
    margin-top: 3rem;
    gap: 7rem;
    @include mxns.mediamin(sm) {
      gap: 10rem;
    }
    @include mxns.mediamin(lg) {
      gap: 15rem;
    }
    button {
      $square: 80px;
      align-content: center;
      align-items: center;
      background: transparent;
      border: 5px solid var(--clr-brandSecondaryColor);
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      height: $square;
      justify-content: center;
      transform: scale(1);
      transition: 350ms;
      width: $square;
      svg {
        &.back {
          width: 100%;
          height: 100%;
          path {
            fill: var(--clr-brandSecondaryColor);
          }
        }
        &.home {
          width: 80%;
          height: 80%;
          .clr-i-solid-path-1,
          .clr-i-solid-path-2 {
            fill: var(--clr-brandSecondaryColor);
          }
        }
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
