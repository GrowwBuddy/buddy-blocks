import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl, TextControl, SelectControl } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { GroupsDetailContext } from "../Context/groupsDetail.context";
import { useGroupsSettings } from "../Context/groupsSettings.context";

const BlockSettings = () => {
    const { settings, updateSettings } = useGroupsSettings();
    const groupDetails = useContext( GroupsDetailContext );
    const { totalPages } = groupDetails;

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
                            groupsSettings: {
                                ...settings,
                                search: value
                            }
                        } ) }/>
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label={ __( 'Type', 'groww-buddy' ) }
                        options={ [
                            { value: '', label: __( 'Select', 'groww-buddy' ) },
                            { value: 'newest', label: __( 'Newest', 'groww-buddy' ) },
                            { value: 'popular', label: __( 'Popular', 'groww-buddy' ) },
                            { value: 'active', label: __( 'Active', 'groww-buddy' ) },
                            { value: 'alphabetical', label: __( 'Alphabetical', 'groww-buddy' ) },
                            { value: 'random', label: __( 'Random', 'groww-buddy' ) },
                        ] }
                        defaultValue=''
                        onChange={ ( value ) => updateSettings( { groupsSettings: { ...settings, type: value } } ) }
                    />
                </PanelRow>
                { settings.type === '' && (
                    <>
                        <PanelRow>
                            <SelectControl
                                label={ __( 'Order', 'groww-buddy' ) }
                                options={ [
                                    { value: 'desc', label: __( 'Descending', 'groww-buddy' ) },
                                    { value: 'asc', label: __( 'Ascending', 'groww-buddy' ) },
                                ] }
                                onChange={ ( value ) => updateSettings( {
                                    groupsSettings: {
                                        ...settings,
                                        order: value
                                    }
                                } ) }
                            />
                        </PanelRow>
                        <PanelRow>
                            <SelectControl
                                label={ __( 'Order By', 'groww-buddy' ) }
                                options={ [
                                    { value: 'date_created', label: __( 'Date Created', 'groww-buddy' ) },
                                    { value: 'id', label: __( 'ID', 'groww-buddy' ) },
                                    { value: 'name', label: __( 'Name', 'groww-buddy' ) },
                                    { value: 'last_activity', label: __( 'Last Activity', 'groww-buddy' ) },
                                    { value: 'total_member_count', label: __( 'Total Member Count', 'groww-buddy' ) },
                                    { value: 'random', label: __( 'Random', 'groww-buddy' ) },
                                ] }
                                onChange={ ( value ) => updateSettings( {
                                    groupsSettings: {
                                        ...settings,
                                        orderBy: value
                                    }
                                } ) }
                            />
                        </PanelRow></>
                ) }

                <PanelRow>
                    <TextControl
                        label={ __( 'Groups per page', 'groww-buddy' ) }
                        type="number"
                        value={ settings.perPage }
                        onChange={ ( value ) => updateSettings( { groupsSettings: { ...settings, perPage: value } } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label={ __( 'Current Page', 'groww-buddy' ) }
                        value={ settings.currentPage }
                        options={ Array.from( { length: totalPages }, ( v, i ) => ({ value: i + 1, label: i + 1 }) ) }
                        onChange={ ( value ) => updateSettings( {
                            groupsSettings: {
                                ...settings,
                                currentPage: value
                            }
                        } ) }
                    />
                </PanelRow>
            </PanelBody>

        </>
    );


};

export default BlockSettings;
