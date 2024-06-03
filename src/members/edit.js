// Import CSS.
import './editor.scss';
import { ServerSideRender } from '@wordpress/components';

function Edit( { attributes, setAttributes } ) {
    return (
        <div className="groww-buddy-members">
            <ServerSideRender
                block="groww-buddy/members"
                attributes={ attributes }
            />
        </div>
    );
}

export default Edit;