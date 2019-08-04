import {
    JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab-astronomy extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
    id: 'jupyterlab-astronomy',
    autoStart: true,
    activate: (app: JupyterFrontEnd) => {
        console.log('JupyterLab extension jupyterlab-astronomy is activated!');
    }
};

export default extension;
