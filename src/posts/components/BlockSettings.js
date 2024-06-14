import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RadioControl, TextControl, SelectControl } from '@wordpress/components';
import { useGenericContext } from "../../commonComponents/Providers/GenericProvider";

const BlockSettings = () => {
    const { data: settings, updateData: updateSettings, getData: getSettings } = useGenericContext();

    return (
        <>
            <PanelBody
                title={ __( 'Settings', 'groww-buddy' ) }
                initialOpen={ true }
            >
                <PanelRow>
                    <RadioControl
                        label={ __( 'Select members by', 'groww-buddy' ) }
                        selected={ settings.filter }
                        options={ [
                            { label: __( 'Filter members', 'groww-buddy' ), value: 'filter_by' },
                            { label: __( 'Specific members', 'groww-buddy' ), value: 'specific' },
                        ] }
                        defaultValue="filter_by"
                        onChange={ ( value ) => updateSettings( {
                            membersSettings: {
                                ...settings,
                                filter: value
                            }
                        } ) }
                    />
                </PanelRow>

                { settings.filter === 'filter_by' && (
                    <>
                        <PanelRow>
                            <SelectControl
                                label={ __( 'Order by', 'groww-buddy' ) }
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
                                label={ __( 'Show number of members', 'groww-buddy' ) }
                                type="number"
                                value={ settings.perPage }
                                onChange={ ( value ) => updateSettings( { membersSettings: { ...settings, perPage: value } } ) }
                            />
                        </PanelRow>
                    </>
                )}

                { settings.filter === 'specific' && (
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
                ) }


            </PanelBody>

        </>
    );


};

export default BlockSettings;
