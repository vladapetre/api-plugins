export interface CoreSettings {
    initClass: string;
    initContainerId: string;
}

export class Core {

    protected _defaults: CoreSettings = {
        initClass: "api",
        initContainerId: "api"
    }

    protected _settings: CoreSettings;

    /**
     *
     */
    constructor(options?: CoreSettings) {
        debugger;
        this._settings = { ...this._defaults, ...options };

        var container = document.getElementById(this._settings.initContainerId);
        if (container != undefined && container != null)
            container.classList.add(this._settings.initClass);
        else
            throw ('Element with selector ' + this._settings.initContainerId + ' not found! Plugin cannot initialize!');

    }
}