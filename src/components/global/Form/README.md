# SCSSeco Vue3 Form

## How to use

`<Form />` needs 2 props:

- `:lang` (String) - limba in care va fi afisat meniul;
- `:formDetails` (Object) - detaliile formului. `formDetails` tre sa fie un _Object_ care sa aiba urmatoarele:
  - `formID` (String) - id-ul modalului;
  - `layout` (Number) - form layout
    1. | First Name | <br> | Last Name | <br> | Email | <br> | Country | <br> | Phone | <br> | Agreement(s) | <br> | Submit |
    2. | First Name || Last Name | <br> | Email | <br> | Country | <br> | Phone | <br> | Agreement(s) | <br> | Submit |
    3. | First Name || Last Name || Email | <br> | Country || Phone || Submit | <br> | Agreement(s) |
  - `button` (Object) - textul din button in diferite limbi

## Example

Section1.vue

```javascript
import Form from "../../../../components/global/Form/Form.vue";

export default {
  name: "LP~Demo2~Home~Section1",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    const formDetails = {
      formID: "demo2-section1",
      layout: 3,
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

    return { formDetails };
  },
};
```

```html
<Form :lang="lang" :formDetails="formDetails" />
```
