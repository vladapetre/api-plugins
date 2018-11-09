export interface Settings {
    initClass: string;
    initContainerId: string;
}

export class Plugin {

    protected _defaults: Settings = {
        initClass: "api",
        initContainerId: "api"
    }

    protected _settings: Settings;
    protected _container: HTMLElement;
    /**
     *
     */
    constructor(options?: Settings) {

        this._settings = { ...this._defaults, ...options };

        var container = document.getElementById(this._settings.initContainerId);
        if (container != undefined && container != null) {
            this._container = container;
            this._container.classList.add(this._settings.initClass);
        }
        else
            throw ('Element with selector ' + this._settings.initContainerId + ' not found! Plugin cannot initialize!');

    }
}