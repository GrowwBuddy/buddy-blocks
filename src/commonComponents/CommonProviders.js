import { StylesProvider } from "./Providers/StylesProvider";
import { GenericProvider } from "./Providers/GenericProvider";

/** Posts Block providers */

export const PostsStylesProviders = ({ children, initialStyles, setAttributes }) => (
    <StylesProvider
        children={children}
        initialStyles={initialStyles}
        setAttributes={setAttributes}
        blockKey="postsStyles"
    />
);

export const PostsSettingsProvider = ({ children, initialSettings, setAttributes }) => (
    <GenericProvider
        initialData={initialSettings}
        setAttributes={setAttributes}
        dataKey="postsSettings"
    >
        {children}
    </GenericProvider>
);

/** End Posts Block providers */

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