const html = require('choo/html');
const Component = require('choo/component');

class Footer extends Component {
  constructor(name, state) {
    super(name);
    this.state = state;
  }

  update() {
    return false;
  }

  createElement() {
    const translate = this.state.translate;
    return html`
      <footer
        class="flex flex-col md:flex-row items-start w-full flex-none self-start p-6 md:p-8 font-medium text-xs text-grey-60 dark:text-grey-40 md:items-center justify-between"
      >
        <a class="mozilla-logo m-2" href="https://qiita.com/moritalous/">
          moritalous
        </a>
        <ul
          class="flex flex-col md:flex-row items-start md:items-center md:justify-end"
        >
          <li class="m-2">
            <del>
              ${translate('footerLinkLegal')}
            </del>
          </li>
          <li class="m-2">
            <del> ${translate('footerLinkPrivacy')} </del>
          </li>
          <li class="m-2">
            <del>
              ${translate('footerLinkCookies')}
            </del>
          </li>
          <li class="m-2">
            <a href="https://github.com/moritalous/send">GitHub </a>
          </li>
        </ul>
      </footer>
    `;
  }
}

module.exports = Footer;
