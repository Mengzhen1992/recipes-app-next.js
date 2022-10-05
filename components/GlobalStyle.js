import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --primary-text: 'Kaushan Script';
    --primary-color: slategrey;

}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}



@font-face {
  font-family: 'Kaushan Script';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/kaushan-script-v14-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
    url('/fonts/kaushan-script-v14-latin-regular.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('/fonts/kaushan-script-v14-latin-regular.woff2') format('woff2'),
    /* Super Modern Browsers */ url('/fonts/kaushan-script-v14-latin-regular.woff')
      format('woff'),
    /* Modern Browsers */ url('/fonts/kaushan-script-v14-latin-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('/fonts/kaushan-script-v14-latin-regular.svg#KaushanScript') format('svg'); /* Legacy iOS */
}
`;

export default GlobalStyle;
