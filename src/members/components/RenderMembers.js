import { __ } from '@wordpress/i18n';
import ServerSideRender  from '@wordpress/server-side-render';
import { useMemo,useEffect } from '@wordpress/element';
import { Placeholder, Spinner } from '@wordpress/components';
const RenderMembers = ( { attributes } ) => {
    const memoizedAttributes = useMemo(() => attributes, [attributes]);

    useEffect(() => {
        console.log('RenderMembers re-rendered');
    });

    return (
        <ServerSideRender
            block="groww-buddy/members"
            attributes={ memoizedAttributes }
            EmptyResponsePlaceholder={() => (
                <Placeholder>
                    { __('No members found.', 'groww-buddy') }
                </Placeholder>
            )}
            ErrorResponsePlaceholder={({ error }) => (
                <Placeholder>
                    { __('An error occurred while loading the members.', 'groww-buddy') }
                    <div>{ error.message }</div>
                </Placeholder>
            )}
            LoadingResponsePlaceholder={ () => (
                <Placeholder>
                    <Spinner />
                    {__('Loading members...', 'groww-buddy')}
                </Placeholder>
            )}
        />
    );
}

export default RenderMembers;