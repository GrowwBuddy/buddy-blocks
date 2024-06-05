import { createContext, useContext, useState } from '@wordpress/element';

const MembersStylesContext = createContext();

export const useMembersStyles = () => useContext( MembersStylesContext );

export const getMembersStyles = () => useContext( MembersStylesContext ).getStyles();

export const MembersStylesProvider = ( { children, initialStyles, setAttributes } ) => {
    const [ styles, setStyles ] = useState( initialStyles );

    const updateStyles = ( newStyles ) => {
        setStyles( ( prevStyles ) => ({
            ...prevStyles,
            ...newStyles.membersStyles,
        }) );

        setAttributes( { membersStyles: { ...styles, ...newStyles.membersStyles } } );
    };

    const getStyles = () => {
        return styles;
    }

    return (
        <MembersStylesContext.Provider value={ { styles, updateStyles, getStyles } }>
            { children }
        </MembersStylesContext.Provider>
    );
};
