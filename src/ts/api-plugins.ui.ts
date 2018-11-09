import * as core from './api-plugin.core'

export class UI extends core.Core {
    /**
     *
     */
    constructor(options?: core.CoreSettings) {
        super(options);
        console.log(this);
    }

    public createElement(tag: string, innerHtml: string) {
        var element = document.createElement(tag);
        element.innerHTML = innerHtml;
        element.classList.add(this._settings.initClass);
        return element;
    }
}