import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    return (
        <div {...useBlockProps.save()} data-attributes={JSON.stringify(attributes)}>
            <div className="group-buddy-groups-placeholder">
                <p>{__('Loading groups...', 'GrowwBuddy')}</p>
            </div>
        </div>
    );
};

export default Save;
