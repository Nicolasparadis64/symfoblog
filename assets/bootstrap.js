// Nous commentons l'import de Stimulus qui cause l'erreur
// import { startStimulusApp } from '@symfony/stimulus-bundle';

// Créons un faux startStimulusApp pour éviter l'erreur
const startStimulusApp = () => {
    return {
        register: () => {}
    };
};

const app = startStimulusApp();
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
