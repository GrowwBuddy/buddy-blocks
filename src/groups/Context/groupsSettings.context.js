import { createContext, useContext, useState } from '@wordpress/element';

const GroupsSettingsContext = createContext();

export const useGroupsSettings = () => useContext( GroupsSettingsContext );

export const getGroupsSettings = () => useContext( GroupsSettingsContext ).getSettings();

export const GroupsSettingsProvider = ( { children, initialSettings, setAttributes } ) => {
    const [ settings, setSettings ] = useState( initialSettings );

    const updateSettings = ( newSettings ) => {
        setSettings( ( prevSettings ) => ({
            ...prevSettings,
            ...newSettings.groupsSettings,
        }) );

        setAttributes( { groupsSettings: { ...settings, ...newSettings.groupsSettings } } );
    };

    const getSettings = () => {
        return settings;
    }

    return (
        <GroupsSettingsContext.Provider value={ { settings, updateSettings, getSettings } }>
            { children }
        </GroupsSettingsContext.Provider>
    );
};
