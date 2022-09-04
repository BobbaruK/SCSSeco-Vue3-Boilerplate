# SCSSeco Vue3 Modal

## How to use

`<Modal></Modal>` needs 2 props, v-model and `@closeModal`:

- `:lang` (String) - limba in care va fi afisat meniul;
- `:modalDetails` (Object) - detaliile modalului. `modalDetails` tre sa fie un _Object_ care sa aiba urmatoarele:
	- `modalID` (String) - id-ul modalului; 
	- `maxWidth` (String) - cat de lat sa fie modalul (default: 500px);
- `v-model="showModal"` (Boolean) - un _Boolean_ arata sau ascunde modalul. Daca e nevoie si de `setTimeout()`;
- `@closeModal="closeModal"` - un emit care schimba `v-model`-ul;

## Example

Section1.vue

```javascript
import Modal from "../../../components/global/Modal/Modal.vue";
import Form from "../../../components/global/Form/Form.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Brand~Home~Section1",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {

    // Modal with form
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form",
      maxWidth: "600px",
    };

    const showModalFormFunct = () => {
      showModalForm.value = true;
      clearTimeout(timeOut);
    };

    const timeOut = setTimeout(showModalFormFunct, 3000);

    const closeModalForm = () => {
      showModalForm.value = false;
    };

    const formDetails = {
      formID: "brand-modal",
      layout: 2,
      button: {
        en: "Join",
        it: "Giuntura",
        tr: "Katılmak",
        ro: "Alătură-te",
        hu: "Csatlakozik",
        ar: "انضم",
        de: "Beitreten",
        es: "Entrar",
        sv: "Ansluta sig",
        pt: "Juntar",
        fi: "Liittyä seuraan",
        pl: "Dołączyć",
        th: "เข้าร่วม",
        ms: "Sertai",
      },
    };

    // Modal other
    const modalDetailsOther = {
      modalID: "brand-home-modal-other",
    };

    const showModalOther = ref(false);

    const showModalOtherFunct = () => {
      showModalOther.value = true;
      clearTimeout(timeOut);
    };

    const closeModalOther = () => {
      showModalOther.value = false;
    };

    return {
      showModalForm,
      modalDetailsForm,
      showModalFormFunct,
      closeModalForm,
      formDetails,
      modalDetailsOther,
      showModalOther,
      showModalOtherFunct,
      closeModalOther,
    };
  },
};
```

```html
<Modal :lang="lang" :details="modalDetailsForm" v-model="showModalForm" @closeModal="closeModalForm">
  <h1>Lorem, ipsum dolor.</h1>
  <form :lang="lang" :formDetails="formDetails" />
</Modal>
<Modal :lang="lang" :details="modalDetailsOther" v-model="showModalOther" @closeModal="closeModalOther">
  <h1>Lorem, ipsum dolor.</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate asperiores culpa fuga corporis excepturi?
    Molestias quam minima assumenda numquam error.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa perspiciatis similique eum hic earum adipisci
    quod nobis reiciendis, consectetur provident rerum exercitationem impedit quia incidunt dicta nesciunt. Nesciunt,
    similique.
  </p>
  <hr />
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ducimus.</p>
</Modal>
```
