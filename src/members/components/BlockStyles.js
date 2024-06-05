import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { MembersStylesProvider } from "../Context/membersStyles.context";
import { useMembersStyles } from "../Context/membersStyles.context";


const BlockStyles = () => {

    const { styles, updateStyles } = useMembersStyles();
    const { membersLayout } = styles;

    const handleMembersLayoutChange = ( newLayout ) => {
        updateStyles( { membersStyles: { membersLayout: newLayout ? 'grid' : 'list' } } );
    }

    return (
        <>
            <ToolbarGroup>
                <ToolbarButton
                    icon="list-view"
                    label={__('List Layout', 'GrowwBuddy')}
                    onClick= { () => handleMembersLayoutChange( false ) }
                    isPressed={membersLayout === 'list'}
                />
                <ToolbarButton
                    icon="grid-view"
                    label={__('Grid Layout', 'GrowwBuddy')}
                    onClick= { () => handleMembersLayoutChange( true ) }
                    isPressed={membersLayout === 'grid'}
                />
            </ToolbarGroup>

        </>
    );


};

export default BlockStyles;
