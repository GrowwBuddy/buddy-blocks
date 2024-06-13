import { createContext, useContext, useState } from '@wordpress/element';

const StylesContext = createContext();

export const useStyles = () => useContext(StylesContext);

export const getStyles = () => useContext(StylesContext).getStyles();

export const StylesProvider = ({ children, initialStyles, setAttributes, blockKey }) => {
    const [styles, setStyles] = useState(initialStyles);

    const updateStyles = (newStyles) => {
        setStyles((prevStyles) => ({
            ...prevStyles,
            ...newStyles[blockKey],
        }));

        setAttributes({ [blockKey]: { ...styles, ...newStyles[blockKey] } });
    };

    const getStyles = () => {
        return styles;
    }

    return (
        <StylesContext.Provider value={{ styles, updateStyles, getStyles }}>
            {children}
        </StylesContext.Provider>
    );
};
