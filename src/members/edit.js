// Import CSS.
import './editor.scss';

import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';

import { MembersStylesProvider } from "./Context/membersStyles.context";
import { MembersSettingsProvider } from "./Context/membersSettings.context";

import BlockStyles from "./components/BlockStyles";
import BlockSettings from "./components/BlockSettings";
import RenderMembers from "./components/RenderMembers";

function Edit( props ) {
    const { attributes, setAttributes } = props;
    const { membersLayout } = attributes.membersStyles;
    const blockProps = useBlockProps( {
        className: 'groww-buddy-members-blocks ' + (membersLayout === 'grid' ? 'groww-buddy-members-blocks--grid' : 'groww-buddy-members-blocks--list')
    } );
    return (
            <MembersSettingsProvider initialSettings={ attributes.membersSettings } setAttributes={ setAttributes }>
                <MembersStylesProvider initialStyles={ attributes.membersStyles } setAttributes={ setAttributes }>
                    <div { ...blockProps }>
                        <InspectorControls>
                            <BlockSettings/>
                        </InspectorControls>
                        <BlockControls>
                            <BlockStyles/>
                        </BlockControls>
                        <RenderMembers attributes={ attributes }/>
                    </div>
                </MembersStylesProvider>
            </MembersSettingsProvider>

    );
}

export default Edit;