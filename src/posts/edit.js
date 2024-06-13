// Import CSS.
import './editor.scss';

import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';




function Edit( props ) {
    const { attributes, setAttributes } = props;
    const { membersLayout } = attributes.membersStyles;
    const blockProps = useBlockProps( {
        className: 'groww-buddy-members-blocks ' + (membersLayout === 'grid' ? 'groww-buddy-members-blocks--grid' : 'groww-buddy-members-blocks--list')
    } );
    return (
        <>
            Hello
            </>
            // <MembersSettingsProvider initialSettings={ attributes.membersSettings } setAttributes={ setAttributes }>
            //     <MembersStylesProvider initialStyles={ attributes.membersStyles } setAttributes={ setAttributes }>
            //         <div { ...blockProps }>
            //             <InspectorControls>
            //                 <BlockSettings/>
            //             </InspectorControls>
            //             <InspectorControls group="color">
            //                 <BlockStyles group="inspectorControls" {...props} />
            //             </InspectorControls>
            //             <BlockControls>
            //                 <BlockStyles/>
            //             </BlockControls>
            //             <RenderMembers attributes={ attributes }/>
            //         </div>
            //     </MembersStylesProvider>
            // </MembersSettingsProvider>

    );
}

export default Edit;