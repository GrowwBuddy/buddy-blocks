import { ServerSideRender } from '@wordpress/element';

const RenderMembers = ( { attributes } ) => (
    <ServerSideRender
        block="groww-buddy/members"
        attributes={ attributes }
    />
)

export default RenderMembers;