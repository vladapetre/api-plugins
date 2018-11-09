import * as core from './api-plugin.core'
import * as ui from './api-plugins.ui'

export interface SearchSettings extends core.Settings {
    from?: Number,
    to?: Number,
    min?: Number,
    max?: Number,
    value?: Number
}

export class Search extends ui.UI {
    /**
     *
     */
    constructor(options: SearchSettings) {
        super(options);
    }

    protected loadFromDataAttributes(): SearchSettings {

        var settings:SearchSettings;

        if (this._settings == null) {
            settings = {
                initClass: "",
                initContainerId: "",
                from: Number(this._container.dataset.from),
                to: Number(this._container.dataset.to),
                min: Number(this._container.dataset.min),
                max: Number(this._container.dataset.max),
                value: Number(this._container.dataset.value),
            };
        }else{
            settings = {
                initClass: "",
                initContainerId: "",
            };
        }

        return settings;
    }
}