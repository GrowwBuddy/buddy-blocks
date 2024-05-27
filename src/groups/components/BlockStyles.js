import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';
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
            <PanelBody
                title={ __( 'Group Style', 'groww-buddy' ) }
                initialOpen={ true }
            >
                <PanelRow>
                    <ToggleControl
                        label={ __( 'Layout', 'groww-buddy' ) }
                        help={
                            groupsLayout === 'grid'
                                ? __( 'Display groups in grid layout.', 'groww-buddy' )
                                : __( 'Display groups in list layout.', 'groww-buddy' )
                        }
                        checked={ groupsLayout === 'grid' }
                        onChange={ handleGroupsLayoutChange }
                    />
                </PanelRow>
            </PanelBody>

        </>
    );


};

export default BlockStyles;
