import { __ } from "@wordpress/i18n";
import Group from "./Group";
import { Spinner } from '@wordpress/components';
import { useContext } from "@wordpress/element";
import { GroupsDetailContext } from "../Context/groupsDetail.context";
const Groups = () => {

    const groupDetails = useContext( GroupsDetailContext );
    const { groups, isLoading, totalGroups } = groupDetails;
    if ( isLoading ) {
        return <div className="groww-buddy-group-block-loading"><Spinner/>{ __( 'Loading...', 'groww-buddy' ) }</div>;
    }

    const hasGroups = groups && groups.length > 0;
    if ( !hasGroups ) {
        return (
            <div className="groww-buddy-group-block-loading">
                { totalGroups > 0 ? <Spinner/> : __( 'No group found.', 'groww-buddy' ) }
            </div>
        );
    }

    return (
        <>
            { groups.map( ( group, index ) => {
                return <Group key={ index } group={ group }/>;
            } ) }
        </>
    );
}

export default Groups;