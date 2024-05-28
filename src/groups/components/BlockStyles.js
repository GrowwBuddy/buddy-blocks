import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { GroupsStylesProvider } from "../Context/groupsStyles.context";
import { useGroupsStyles } from "../Context/groupsStyles.context";


const BlockStyles = () => {

    const { styles, updateStyles } = useGroupsStyles();
    const { groupsLayout } = styles;

    const handleGroupsLayoutChange = ( newLayout ) => {
        updateStyles( { groupsStyles: { groupsLayout: newLayout ? 'grid' : 'list' } } );
    }

    return (
        <>
            <ToolbarGroup>
                <ToolbarButton
                    icon="list-view"
                    label={__('List Layout', 'GrowwBuddy')}
                    onClick= { () => handleGroupsLayoutChange( false ) }
                    isPressed={groupsLayout === 'list'}
                />
                <ToolbarButton
                    icon="grid-view"
                    label={__('Grid Layout', 'GrowwBuddy')}
                    onClick= { () => handleGroupsLayoutChange( true ) }
                    isPressed={groupsLayout === 'grid'}
                />
            </ToolbarGroup>

        </>
    );


};

export default BlockStyles;
