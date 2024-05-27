import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

// Import CSS.
import './editor.scss';

// Load components.
import Groups from "./components/Groups";
import BlockSettings from "./components/BlockSettings";
import { GroupsDetailProvider } from "./Context/groupsDetail.context";
import { GroupsSettingsProvider } from "./Context/groupsSettings.context";
import { GroupsStylesProvider } from "./Context/groupsStyles.context";
import BlockStyles from "./components/BlockStyles";


function Edit( { attributes, setAttributes } ) {
    const { groupsLayout } = attributes.groupsStyles;
    const blockProps = useBlockProps( {
        className: 'groww-buddy-groups-blocks ' + (groupsLayout === 'grid' ? 'groww-buddy-groups-blocks--grid' : 'groww-buddy-groups-blocks--list')
    } );

    return (
        <GroupsSettingsProvider initialSettings={ attributes.groupsSettings } setAttributes={ setAttributes }>
            <GroupsStylesProvider initialStyles={ attributes.groupsStyles } setAttributes={ setAttributes }>
                <GroupsDetailProvider setAttributes={ setAttributes } attributes={ attributes }>
                    <div { ...blockProps }>
                        <InspectorControls>
                            <BlockSettings/>
                        </InspectorControls>
                        <InspectorControls group="styles">
                            <BlockStyles/>
                        </InspectorControls>
                        <Groups/>
                    </div>
                </GroupsDetailProvider>
            </GroupsStylesProvider>
        </GroupsSettingsProvider>
    );
}

export default Edit;