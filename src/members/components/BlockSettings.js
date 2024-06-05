import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl, TextControl, SelectControl } from '@wordpress/components';
import { useMembersSettings } from "../Context/membersSettings.context";

const BlockSettings = () => {
    const { settings, updateSettings } = useMembersSettings();

    return (
        <>
            <PanelBody
                title={ __( 'Settings', 'groww-buddy' ) }
                initialOpen={ true }
            >
                <PanelRow>
                    <TextControl
                        label={ __( 'Search', 'groww-buddy' ) } value={ settings.search }
                        onChange={ ( value ) => updateSettings( {
                            membersSettings: {
                                ...settings,
                                search: value
                            }
                        } ) }/>
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label={ __( 'Type', 'groww-buddy' ) }
                        options={ [
                            { value: 'active', label: __( 'Active', 'groww-buddy' ) },
                            { value: 'newest', label: __( 'Newest', 'groww-buddy' ) },
                            { value: 'alphabetical', label: __( 'Alphabetical', 'groww-buddy' ) },
                            { value: 'random', label: __( 'Random', 'groww-buddy' ) },
                            { value: 'online', label: __( 'Online', 'groww-buddy' ) },
                            { value: 'popular', label: __( 'Popular', 'groww-buddy' ) },
                        ] }
                        value={ settings.type }
                        onChange={ ( value ) => updateSettings( {
                            membersSettings: {
                                ...settings,
                                type: value
                            }
                        } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <TextControl
                        label={ __( 'Members per page', 'groww-buddy' ) }
                        type="number"
                        value={ settings.perPage }
                        onChange={ ( value ) => updateSettings( { membersSettings: { ...settings, perPage: value } } ) }
                    />
                </PanelRow>
            </PanelBody>

        </>
    );


};

export default BlockSettings;
