const footerTransl = () => {
  const content = {
    // en: "",
    // it: "",
    // tr: "",
    // ro: "",
    // hu: "",
    // ar: "",
    // de: "",
    // es: "",
    // sv: "",
    // pt: "",
    // fi: "",
    // pl: "",
    // th: "",
    // ms: ""

    en: `
    <p>Trading carries a high level of risk to your capital due to the volatility of the underlying market. Trading is not suitable for everyone and may result in you losing all your investment. ${
      process.env.VUE_APP_BRAND_TITLE
    } products may not be suitable for all investors. Therefore, you should ensure that you understand the risks and seek advice from an independent and suitably licensed financial advisor.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - All rights reserved</p>
    `,
    it: `
    <p>Il trading comporta un elevato livello di rischio per il tuo capitale a causa della volatilità del mercato sottostante. Il trading non è adatto a tutti e potrebbe farti perdere tutto il tuo investimento. I prodotti ${
      process.env.VUE_APP_BRAND_TITLE
    } potrebbero non essere adatti a tutti gli investitori. Pertanto , dovresti assicurarti di aver compreso i rischi e chiedere consiglio a un consulente finanziario indipendente e adeguatamente autorizzato.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Tutti i diritti riservati</p>
    `,
    tr: `
    <p>İşlem yapmak, piyasadaki hareketlilik nedeniyle sermayeniz için yüksek risk oluşturur. İşlem yapmak herkes için uygun değildir ve tüm yatırımınızı kaybetmeniz ile sonuçlanabilir. ${
      process.env.VUE_APP_BRAND_TITLE
    } 'nun sunduğu ürünler, tüm yatırımcılar için uygun olmayabilir. Bu nedenle, riskleri anladığınızdan emin olmalı ve bağımsız ve uygun lisansa sahip bir finansal danışmandan tavsiye almalısınız.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Tüm hakları saklıdır.</p>
    `,
    ro: `
    <p>Tranzacționarea implică un nivel ridicat de risc pentru capitalul dvs. din cauza volatilității pieței subiacente. Tranzacționarea nu este potrivită pentru toată lumea și vă poate duce la pierderea tuturor investițiilor. Este posibil ca produsele ${
      process.env.VUE_APP_BRAND_TITLE
    } să nu fie potrivite pentru toți investitorii. Prin urmare , trebuie să vă asigurați că înțelegeți riscurile și să solicitați sfatul unui consilier financiar independent și autorizat corespunzător.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Toate drepturile rezervate</p>
    `,
    hu: `
    <p>A kereskedés magas kockázattal jár az Ön tőkéjére a mögöttes piac volatilitása miatt. A kereskedés nem mindenki számára megfelelő, és az összes befektetés elvesztéséhez vezethet. Előfordulhat, hogy a ${
      process.env.VUE_APP_BRAND_TITLE
    } termékei nem minden befektető számára megfelelőek. Ezért gondoskodnia kell arról, hogy megértse a kockázatokat, és kérjen tanácsot független és megfelelő engedéllyel rendelkező pénzügyi tanácsadótól.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Minden jog fenntartva</p>
    `,
    ar: `
    <p>ينطوي التداول على مستوى عال من المخاطر على رأس المال الخاص بك بسبب تقلبات السوق الأساسية. التداول غير مناسب للجميع وقد يؤدي إلى خسارتك لكل استثماراتك. قد لا تكون منتجات ${
      process.env.VUE_APP_BRAND_TITLE
    } مناسبة لجميع المستثمرين. لذلك ، يجب عليك التأكد من فهمك للمخاطر وطلب المشورة من مستشار مالي مستقل ومرخص بشكل مناسب.</p>
    <p>&#169; حقوق الطبع والنشر ${new Date().getFullYear()} - جميع الحقوق محفوظة</p>
    `,
    de: ``,
    es: `
    <p>Operar conlleva un alto nivel de riesgo para su capital debido a la volatilidad del mercado subyacente. Operar no es adecuado para todos y puede hacer que pierda toda su inversión. Es posible que los productos de ${
      process.env.VUE_APP_BRAND_TITLE
    } no sean adecuados para todos los inversores. Por lo tanto, debe asegurarse de comprender los riesgos y buscar el asesoramiento de un asesor financiero independiente y debidamente autorizado.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Todos los derechos reservados</p>
    `,
    sv: `
    <p>Handel medför en hög risknivå för ditt kapital på grund av volatiliteten på den underliggande marknaden. Handel är inte lämplig för alla och kan leda till att du förlorar hela din investering. ${
      process.env.VUE_APP_BRAND_TITLE
    }-produkter kanske inte är lämpliga för alla investerare. Därför bör du se till att du förstår riskerna och söker råd från en oberoende och lämpligt licensierad finansiell rådgivare.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Alla rättigheter reserverade</p>
    `,
    pt: ``,
    fi: `
    <p>Kaupankäyntiin liittyy korkea riski pääomallesi kohde-etuuden markkinoiden epävakauden vuoksi. Kaupankäynti ei sovi kaikille ja voi johtaa koko sijoituksesi menetykseen. ${
      process.env.VUE_APP_BRAND_TITLE
    } -tuotteet eivät välttämättä sovellu kaikille sijoittajille. Siksi sinun tulee varmistaa, että ymmärrät riskit ja kysy neuvoa riippumattomalta ja asianmukaisesti lisensoidulta talousneuvojalta.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Kaikki oikeudet pidätetään</p>
    `,
    pl: `
    <p>Handel niesie ze sobą wysoki poziom ryzyka dla Twojego kapitału ze względu na zmienność rynku bazowego. Handel nie jest odpowiedni dla wszystkich i może skutkować utratą całej inwestycji. Produkty ${
      process.env.VUE_APP_BRAND_TITLE
    } mogą nie być odpowiednie dla wszystkich inwestorów. , powinieneś upewnić się, że rozumiesz ryzyko i zasięgnąć porady niezależnego i odpowiednio licencjonowanego doradcy finansowego.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Wszelkie prawa zastrzeżone</p>
    `,
    th: ``,
    ms: `
    <p>Dagangan membawa tahap risiko yang tinggi kepada modal anda disebabkan oleh turun naik pasaran asas. Dagangan tidak sesuai untuk semua orang dan boleh mengakibatkan anda kehilangan semua pelaburan anda. Produk ${
      process.env.VUE_APP_BRAND_TITLE
    } mungkin tidak sesuai untuk semua pelabur. Oleh itu, anda harus memastikan bahawa anda memahami risiko dan mendapatkan nasihat daripada penasihat kewangan bebas dan berlesen yang sesuai.</p>
    <p>&#169; Copyright ${new Date().getFullYear()} - Semua hak terpelihara</p>
    `,
  };

  return { content };
};

export default footerTransl;
