export default class Processing {

  static show() {
    this.timer = setTimeout(() => this.preloader(), 200)
  }

  static preloader() {
    let container = this.container = document.createElement('div');
    container.innerHTML = `
      <style type="text/css">
        .preloader-indicator-overlay {
            visibility: visible;
            opacity: 0;
            background: 0 0
        }
        .preloader-indicator-modal {
            position: absolute;
            left: 50%;
            top: 50%;
            background: rgba(0,0,0,.8);
            margin-left:-30px;
            margin-top:-30px;
            z-index: 11000;
            padding:10px;
            border-radius: 4px;
        }
        .preloader-indicator-modal .preloader {
            display: block;
            width: 40px;
            height: 40px;
             -webkit-transform-origin: 50%;
            transform-origin: 50%;
            -webkit-animation: preloader-spin 1s steps(12,end) infinite;
            animation: preloader-spin 1s steps(12,end) infinite
        }
        .preloader:after {
            display: block;
            content: "";
            width: 100%;
            height: 100%;
            background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
            background-position: 50%;
            background-size: 100%;
            background-repeat: no-repeat
        }
        @-webkit-keyframes preloader-spin {
            100% {
                -webkit-transform: rotate(360deg)
            }
        }
        @keyframes preloader-spin {
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg)
            }
        }
      </style>
      <div class="preloader-indicator-overlay"></div>
      <div class="preloader-indicator-modal"><span class="preloader preloader-white"></span></div>
     `;
    document.body.appendChild(container);
  }

  static hide() {
    clearTimeout(this.timer);
    if (this.container) {
      this.container.parentElement.removeChild(this.container);
    }
  }
}