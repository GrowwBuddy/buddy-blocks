import { createContext, useState, useEffect } from "@wordpress/element";
import { addQueryArgs } from "@wordpress/url";
import { getGroupsSettings } from "./groupsSettings.context";

export const GroupsDetailContext = createContext( {
    isLoading: true,
    groups: [],
    totalPages: 1,
    totalGroups: 0,
    setGroupsDetails: () => {
    },
} );

export const GroupsDetailProvider = ( { children, setAttributes, attributes } ) => {

    const settings = getGroupsSettings();

    const [ groupDetails, updateGroupsDetails ] = useState( {
        isLoading: true,
        groups: [],
        totalPages: 1,
        totalGroups: 0,
        setGroupsDetails: ( value ) => {
            updateGroupsDetails( prevState => {
                return {
                    ...prevState,
                    ...value,
                };

            } );
        }
    } );

    useEffect( () => {
        const queryParams = {
            per_page: settings.perPage,
            page: settings.currentPage,
            orderby: settings.orderBy,
            order: settings.order,

        };

        if( '' !== settings.type ) {
            queryParams.type = settings.type;
        }
        if( '' !== settings.search ) {
            queryParams.search = settings.search;
        }

        console.log(queryParams);
        console.log(settings);
        const url = addQueryArgs( '/wp-json/buddyboss/v1/groups', queryParams );

        fetch( url, {
            headers: {
                'X-WP-Nonce': GrowwBuddyData.nonce,
            },
        } )
            .then( response => {

                if ( !response.ok ) {
                    throw new Error( 'Network response was not ok' );
                }

                if ( response.headers.get( 'X-WP-TotalPages' ) ) {
                    updateGroupsDetails( prevState => ({
                        ...prevState,
                        totalPages: parseInt( response.headers.get( 'X-WP-TotalPages' ) ),
                    }) );
                }

                if ( response.headers.get( 'X-WP-Total' ) ) {
                    updateGroupsDetails( prevState => ({
                        ...prevState,
                        totalGroups: parseInt( response.headers.get( 'X-WP-Total' ) ),
                    }) );
                }

                return response.json();

            } )
            .then( data => {
                updateGroupsDetails( prevState => {
                    return {
                        ...prevState,
                        groups: data,
                        isLoading: false,
                    };
                } );

                // Update the block's attributes with fetched data
            } )
            .catch( error => {
                console.error( error );

                updateGroupsDetails( prevState => {
                    return {
                        ...prevState,
                        groups: [],
                        isLoading: false,
                    };
                } )

                // Update the block's attributes with fetched data
                setAttributes( { ...attributes, groups: [] } );

            } );

    }, [ settings ] );


    return (
        <GroupsDetailContext.Provider value={ groupDetails }>
            { children }
        </GroupsDetailContext.Provider>
    );

}

