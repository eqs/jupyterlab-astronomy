import {
    JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
    ICommandPalette
} from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-astronomy extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
    id: 'jupyterlab-astronomy',
    autoStart: true,
    requires: [ICommandPalette], 
    activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
        console.log('JupyterLab extension jupyterlab-astronomy is activated!');
        console.log('ICommandPalette:', palette);
    }
};

export default extension;
