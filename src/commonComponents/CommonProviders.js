import { StylesProvider } from "./Providers/StylesProvider";
import { GenericProvider } from "./Providers/GenericProvider";

/** Members Block Providers */
export const MembersStylesProvider = ({ children, initialStyles, setAttributes }) => (
    <StylesProvider
        children={children}
        initialStyles={initialStyles}
        setAttributes={setAttributes}
        blockKey="membersStyles"
    />
);


export const MembersSettingsProvider = ({ children, initialSettings, setAttributes }) => (
    <GenericProvider
        initialData={initialSettings}
        setAttributes={setAttributes}
        dataKey="membersSettings"
    >
        {children}
    </GenericProvider>
);

/** End Members Block Providers */

/** Groups Block Providers */
export const GroupsStylesProvider = ({ children, initialStyles, setAttributes }) => (
    <StylesProvider
        children={children}
        initialStyles={initialStyles}
        setAttributes={setAttributes}
        blockKey="groupsStyles"
    />
);

export const GroupsSettingsProvider = ({ children, initialSettings, setAttributes }) => (
    <GenericProvider
        initialData={initialSettings}
        setAttributes={setAttributes}
        dataKey="groupsSettings"
    >
        {children}
    </GenericProvider>
);

/** End Groups Block Providers */