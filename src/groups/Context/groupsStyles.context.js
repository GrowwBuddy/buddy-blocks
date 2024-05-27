import { createContext, useContext, useState } from '@wordpress/element';

const GroupsStylesContext = createContext();

export const useGroupsStyles = () => useContext( GroupsStylesContext );

export const getGroupsStyles = () => useContext( GroupsStylesContext ).getStyles();

export const GroupsStylesProvider = ( { children, initialStyles, setAttributes } ) => {
    const [ styles, setStyles ] = useState( initialStyles );

    const updateStyles = ( newStyles ) => {
        setStyles( ( prevStyles ) => ({
            ...prevStyles,
            ...newStyles.groupsStyles,
        }) );

        setAttributes( { groupsStyles: { ...styles, ...newStyles.groupsStyles } } );
    };

    const getStyles = () => {
        return styles;
    }

    return (
        <GroupsStylesContext.Provider value={ { styles, updateStyles, getStyles } }>
            { children }
        </GroupsStylesContext.Provider>
    );
};
