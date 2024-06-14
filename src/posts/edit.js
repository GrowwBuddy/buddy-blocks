// Import CSS.
import './editor.scss';

import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PostsSettingsProvider, PostsStylesProviders } from "../commonComponents/CommonProviders";
import RenderPosts from "./components/RenderPosts";
import BlockSettings from "./components/BlockSettings";
import BlockStyles from "./components/BlockStyles";



function Edit( props ) {
    const { attributes, setAttributes } = props;
    const { postsLayout } = attributes.postsStyles;
    const blockProps = useBlockProps( {
        className: 'groww-buddy-posts-blocks ' + (postsLayout === 'grid' ? 'groww-buddy-posts-blocks--grid' : 'groww-buddy-posts-blocks--list')
    } );
    return (
        <PostsSettingsProvider initialSettings={ attributes.postsSettings } setAttributes={ setAttributes }>
            <PostsStylesProviders initialStyles={ attributes.postsStyles } setAttributes={ setAttributes }>
                <div { ...blockProps }>
                    <InspectorControls>
                        <BlockSettings/>
                    </InspectorControls>
                    <InspectorControls group="color">
                        <BlockStyles group="inspectorControls" { ...props } />
                    </InspectorControls>
                    <BlockControls>
                        <BlockStyles/>
                    </BlockControls>
                    <RenderPosts attributes={ attributes }/>
                </div>
            </PostsStylesProviders>
        </PostsSettingsProvider>

    );
}

export default Edit;