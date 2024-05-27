import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const blockProps = useBlockProps.save();
    return (
        <div {...blockProps}></div>
    );
};

export default Save;
