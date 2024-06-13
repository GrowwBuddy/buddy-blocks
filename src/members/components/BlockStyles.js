import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useStyles } from '../../commonComponents/Providers/StylesProvider';
import BackGroundColor from "./BackGroundColor";

const BlockStyles = ( props ) => {

    const { clientId, group } = props;

    const { styles, updateStyles } = useStyles();
    const { membersLayout, itemBgColor, itemBgHoverColor } = styles;

    const handleUpdateStyles = ( key, value ) => {
        updateStyles( { membersStyles: { [key]: value } } );
    }

    const hasItemBGColor = () => !! itemBgColor || !! itemBgHoverColor;
    const resetBGColor = () => {
        handleUpdateStyles('itemBgColor', '')
        handleUpdateStyles('itemBgHoverColor', '')
    };
    const colors = []; // Define your colors
    const gradients = []; // Define your gradients
    const areCustomSolidsEnabled = true; // Adjust this as needed
    const areCustomGradientsEnabled = true; // Adjust this as needed

    return (
        <>
            { group === 'inspectorControls' && (
                <>
                    {/*<BackGroundColor*/}
                    {/*    key="itemBGColor"*/}
                    {/*    label={__("Item BG Color")}*/}
                    {/*    hasValue={hasItemBGColor}*/}
                    {/*    resetValue={resetBGColor}*/}
                    {/*    isShownByDefault={true}*/}
                    {/*    indicators={[itemBgColor, itemBgHoverColor]}*/}
                    {/*    tabs={[*/}
                    {/*        {*/}
                    {/*            key: 'itemBGColor',*/}
                    {/*            label: __("Default"),*/}
                    {/*            inheritedValue: itemBgColor,*/}
                    {/*            setValue: (color) => handleUpdateStyles('itemBgColor', color),*/}
                    {/*            userValue: itemBgColor,*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            key: 'hover',*/}
                    {/*            label: __("Hover"),*/}
                    {/*            inheritedValue: itemBgHoverColor,*/}
                    {/*            setValue: (color) => handleUpdateStyles('itemBgHoverColor', color),*/}
                    {/*            userValue: itemBgHoverColor,*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*    colorGradientControlSettings={{*/}
                    {/*        colors,*/}
                    {/*        disableCustomColors: !areCustomSolidsEnabled,*/}
                    {/*        gradients,*/}
                    {/*        disableCustomGradients: !areCustomGradientsEnabled,*/}
                    {/*    }}*/}
                    {/*    panelId={clientId}*/}
                    {/*/>*/}
                </>
            ) }

            { group !== 'inspectorControls' && (
                <ToolbarGroup>
                    <ToolbarButton
                        icon="list-view"
                        label={ __( 'List Layout', 'groww-buddy' ) }
                        onClick={ () => handleUpdateStyles( 'membersLayout', 'list' ) }
                        isPressed={ membersLayout === 'list' }
                    />
                    <ToolbarButton
                        icon="grid-view"
                        label={ __( 'Grid Layout', 'groww-buddy' ) }
                        onClick={ () => handleUpdateStyles( 'membersLayout', 'grid' ) }
                        isPressed={ membersLayout === 'grid' }
                    />
                </ToolbarGroup>
            ) }

        </>
    );


};

export default BlockStyles;
