import { __ } from '@wordpress/i18n';
import ServerSideRender  from '@wordpress/server-side-render';
import { useMemo,useEffect } from '@wordpress/element';
import { Placeholder, Spinner } from '@wordpress/components';
const RenderPosts = ( { attributes } ) => {
    const memoizedAttributes = useMemo(() => attributes, [attributes]);

    return (
        <ServerSideRender
            block="groww-buddy/blog-posts"
            attributes={ memoizedAttributes }
            EmptyResponsePlaceholder={() => (
                <Placeholder>
                    { __('No posts found.', 'groww-buddy') }
                </Placeholder>
            )}
            ErrorResponsePlaceholder={({ error }) => (
                <Placeholder>
                    { __('An error occurred while loading the posts.', 'groww-buddy') }
                    <div>{ error.message }</div>
                </Placeholder>
            )}
            LoadingResponsePlaceholder={ () => (
                <Placeholder>
                    <Spinner />
                    {__('Loading posts...', 'groww-buddy')}
                </Placeholder>
            )}
        />
    );
}

export default RenderPosts;