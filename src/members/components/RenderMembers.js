import { __ } from '@wordpress/i18n';
import ServerSideRender  from '@wordpress/server-side-render';
import { Placeholder, Spinner } from '@wordpress/components';
const RenderMembers = ( { attributes } ) => (
    <ServerSideRender
        block="groww-buddy/members"
        attributes={ attributes }
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
)

export default RenderMembers;