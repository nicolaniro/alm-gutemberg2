import MyAutocomplete from './MyAutoCompleteOriginal'; // adjust if you saved this file somewhere else.
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('create-block/gutenpride', {
    title: 'Gutenpride',
    description: 'Example block.',
    category: 'formatting',
    icon: 'smiley',
    supports: {
        // Removes support for an HTML mode.
        html: false,
    },

    edit: () => {
        console.log("sss")
        return <div> <MyAutocomplete /></div>;
    },

    save: () => {
        return <div> Hello in Save.</div>;
    },
});
