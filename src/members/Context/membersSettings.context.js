import { createContext, useContext, useState } from '@wordpress/element';

const MembersSettingsContext = createContext();

export const useMembersSettings = () => useContext( MembersSettingsContext );

export const getMembersSettings = () => useContext( MembersSettingsContext ).getSettings();

export const MembersSettingsProvider = ( { children, initialSettings, setAttributes } ) => {
    const [ settings, setSettings ] = useState( initialSettings );

    const updateSettings = ( newSettings ) => {
        setSettings( ( prevSettings ) => ({
            ...prevSettings,
            ...newSettings.membersSettings,
        }) );

        setAttributes( { membersSettings: { ...settings, ...newSettings.membersSettings } } );
    };

    const getSettings = () => {
        return settings;
    }

    return (
        <MembersSettingsContext.Provider value={ { settings, updateSettings, getSettings } }>
            { children }
        </MembersSettingsContext.Provider>
    );
};
