import { getGroupsStyles } from "../Context/groupsStyles.context";


const Group = ( props ) => {

    const groupStyle = getGroupsStyles();
    const { groupsLayout } = groupStyle;
console.log(props.group);
    const { growwbuddy_data } = props.group;

    const groupStatusLabels = {
        public: 'Public',
        private: 'Private',
        hidden: 'Hidden',
    }
    const getGroupStatus = ( status ) => {
        return groupStatusLabels[status] || '';
    }

    const getGroupsMetas = ( group ) => {
        let metas = [];
        if ( getGroupStatus( group.status ) ) {
            metas.push( getGroupStatus( group.status ) );
        }
        if ( group.growwbuddy_data.last_activity ) {
            metas.push( group.growwbuddy_data.last_activity );
        }
        if ( group.members_count ) {
            metas.push( group.members_count + ' Members' );
        }
        return metas
    }

    return (
        <div className="groww-buddy-group-block-item">
            { groupsLayout === 'grid' && (
                <div className="groww-buddy-group-block-item-cover">
                    <img src={ props.group.cover_url } alt={ props.group.name }/>
                </div>
            ) }
            <div className="groww-buddy-group-block-item-avatar">
                <img src={ props.group.avatar_urls.thumb } alt={ props.group.name }/>
            </div>
            <div className="groww-buddy-group-block-item-content">
                <h4 className="groww-buddy-group-block-item-title">
                    <a href="javascript:void(0);" data-href={ props.group.link }>{ props.group.name }</a>
                </h4>
                { groupsLayout === 'list' && (
                    <div className="groww-buddy-group-block-item-description">{ growwbuddy_data.description }</div>
                ) }
                <div className="groww-buddy-group-block-item-meta">
                    { getGroupsMetas( props.group ).length > 0 && getGroupsMetas( props.group ).map( ( meta, index ) => (
                        <span key={ index } className={ `groww-buddy-group-block-item-meta-item${ meta.toLowerCase().replace( ' ', '-' ) }` }>{ meta } </span>

                    ) ) }
                </div>
                <div className="groww-buddy-group-block-item-actions">
                    <a href="javascript:void(0);" data-href={ props.group.link } className="groww-buddy-group-block-item-link">View
                        Group</a>
                </div>
            </div>
        </div>
    );
}

export default Group;