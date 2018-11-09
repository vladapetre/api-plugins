import * as core from './api-plugin.core'

export abstract class UI extends core.Plugin {
    /**
     *
     */
    constructor(options?: core.Settings) {
        super(options);
        console.log(this);
    }

    protected abstract loadFromDataAttributes(): core.Settings;
}