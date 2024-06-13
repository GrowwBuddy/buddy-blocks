import { registerBlockType } from '@wordpress/blocks';

// import styles.
import './style.scss';


import metadata from './block.json';
import Edit from "./edit";


registerBlockType( metadata.name, {
    title: metadata.title,
    edit: Edit,
    save: ()=>{
        return null;
    }
} );

