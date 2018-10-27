import { createGlobalStyle } from 'styled-components';

const normalize = `
  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
`;

const slick = `
.slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}/*# sourceMappingURL=slick.min.css.map */
`;

const slickTheme = `
  @charset 'UTF-8';.slick-dots,.slick-next,.slick-prev{position:absolute;display:block;padding:0}.slick-dots li button:before,.slick-next:before,.slick-prev:before{font-family:slick;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-loading .slick-list{background:url(ajax-loader.gif) center center no-repeat #fff}@font-face{font-family:slick;font-weight:400;font-style:normal;src:url(fonts/slick.eot);src:url(fonts/slick.eot?#iefix) format('embedded-opentype'),url(fonts/slick.woff) format('woff'),url(fonts/slick.ttf) format('truetype'),url(fonts/slick.svg#slick) format('svg')}.slick-next,.slick-prev{font-size:0;line-height:0;top:50%;width:20px;height:20px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;color:transparent;border:none;outline:0;background:0 0}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-size:20px;line-height:1;opacity:.75;color:#fff}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:'Ã¢â€ Â'}.slick-next:before,[dir=rtl] .slick-prev:before{content:'Ã¢â€ â€™'}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}[dir=rtl] .slick-next:before{content:'Ã¢â€ Â'}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;width:100%;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'Ã¢â‚¬Â¢';text-align:center;opacity:.25;color:#000}.slick-dots li.slick-active button:before{opacity:.75;color:#000}/*# sourceMappingURL=slick-theme.min.css.map */
  .slick-dots-custom {
    display: flex;
    text-align: center;
  }
  .slick-dots-custom li {
    list-style: none;
    padding: 0px 20px;
    display: inline;
  }
  .slick-dots-custom li button {
    border: none;
    background: rgba(256, 256, 256, 0.5);
    height: 10px 10px;
    border-radius: 50%;
    color: rgba(256, 256, 256, 0);
    cursor: pointer;
  }
  li.slick-active button {
    background: rgba(256, 256, 256, 1);
    color: rgba(256, 256, 256, 1);
  }

  .slick-prev:before {
    content: none;
  }  .slick-next:before {
    content: none;
  }
  @media only screen and (max-width: 600px) {
    .slick-prev {
      left: 0px
    }
    .slick-next {
      right: 0px
    }
    .slick-dots-custom {
      padding: 0;
    }
  }
`;

const svg = `.cls-1 {
      fill: #fff;
        stroke: #707070;
      }

      .cls-2 {
        fill: none;
      }

      .cls-3 {
        fill: url(#linear-gradient);
      }

      .cls-4 {
        clip-path: url(#clip-path);
      }

      .cls-5 {
        opacity: 0.7;
      }

      .cls-10, .cls-11, .cls-12, .cls-13, .cls-6, .cls-7, .cls-8, .cls-9 {
        opacity: 0.66;
      }

      .cls-6 {
        fill: url(#linear-gradient-2);
      }

      .cls-7 {
        fill: url(#linear-gradient-3);
      }

      .cls-8 {
        fill: url(#linear-gradient-4);
      }

      .cls-9 {
        fill: url(#linear-gradient-5);
      }

      .cls-10 {
        fill: url(#linear-gradient-6);
      }

      .cls-11 {
        fill: url(#linear-gradient-7);
      }

      .cls-12 {
        fill: url(#linear-gradient-8);
      }

      .cls-13 {
        fill: url(#linear-gradient-9);
      }

      .cls-14 {
        fill: url(#linear-gradient-10);
      }

      .cls-15 {
        fill: url(#linear-gradient-11);
      }

      .cls-16 {
        fill: url(#linear-gradient-12);
      }

      .cls-17 {
        fill: url(#linear-gradient-13);
      }

      .cls-18 {
        fill: url(#linear-gradient-14);
      }

      .cls-19 {
        fill: url(#linear-gradient-15);
      }

      .cls-20 {
        fill: url(#linear-gradient-16);
      }

      .cls-21 {
        fill: #24126a;
      }

      .cls-22 {
        opacity: 0.51;
      }

      .cls-23 {
        fill: #453c9e;
      }

      .cls-24 {
        fill: url(#linear-gradient-17);
      }

      .cls-25 {
        fill: url(#linear-gradient-18);
      }

      .cls-26 {
        fill: #2842a2;
      }

      .cls-27 {
        fill: #adb1f2;
      }

      .cls-28 {
        fill: #9198db;
      }

      .cls-29 {
        fill: url(#linear-gradient-19);
      }

      .cls-30 {
        opacity: 0.11;
      }

      .cls-31 {
        clip-path: url(#clip-path-2);
      }

      .cls-32 {
        fill: url(#linear-gradient-20);
      }

      .cls-33 {
        fill: url(#linear-gradient-21);
      }

      .cls-34 {
        fill: url(#linear-gradient-22);
      }

      .cls-35 {
        fill: url(#linear-gradient-23);
      }

      .cls-36 {
        fill: url(#radial-gradient);
      }

      .cls-37 {
        fill: url(#linear-gradient-24);
      }

      .cls-38 {
        fill: url(#linear-gradient-25);
      }

      .cls-39, .cls-40 {
        fill: #42e8e0;
      }

      .cls-39 {
        opacity: 0.5;
      }`;

export default createGlobalStyle`
  ${normalize}
  ${slick}
  ${slickTheme}
  ${svg}
  @import url('https://fonts.googleapis.com/css?family=Lato|Noto+Serif+JP');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/fonts/slick.ttf');
`;