import dataSite from "../../../dataSite.json";

const getCountry = async (countryValue, validate) => {
  const logs = process.env.VUE_APP_LOG_ERRORS;
  const logStylesAPI = ["font-size: 14px", "font-weight: bold"].join(";");
  const logStylesAPImsg = ["font-size: 12px", "font-weight: bold", "color: magenta"].join(";");

  try {
    //* Main country API
    let data = "";
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("DNT", "1");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const urlencoded = new URLSearchParams();
    urlencoded.append("Token", dataSite.Token);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    const loadDataFXAPI = await fetch(dataSite.fxoroCountryAPI, requestOptions);

    if (!loadDataFXAPI.ok) {
      throw Error();
    }

    data = await loadDataFXAPI.json();
    countryValue.value = data.Language.toUpperCase(); // set country
    validate.value = false;
  } catch (err) {
    if (logs === "true") {
      console.log(`%cLooks like there was a problem with main API(s):`, logStylesAPI, err);
      console.log("%c> Loading backup API(s)...", logStylesAPImsg);
    }

    try {
      let data = "";
      //* Backup country API
      const loadDataIPAPI = await fetch("http://ip-api.com/json/?fields=countryCode");

      if (!loadDataIPAPI.ok) {
        throw Error(`${loadDataIPAPI.status} ${loadDataIPAPI.statusText}`);
      }

      data = await loadDataIPAPI.json();
      countryValue.value = data.countryCode; // set country
      validate.value = false;

      if (logs === "true") {
        console.log("%c> Backup API(s) loaded", logStylesAPImsg);
      }
    } catch (e) {
      validate.value = false;

      if (logs === "true") {
        console.log(`%cLooks like there was a problem with backup API(s):`, logStylesAPI, e);
        console.log("%c> Cannot fetch backup API(s). Please select country manually!", logStylesAPImsg);
      }
    }
  }
};

export default getCountry;
