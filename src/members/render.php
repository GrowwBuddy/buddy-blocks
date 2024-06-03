<?php
function render_server_side_render_block( $attributes ) {
	$content = isset( $attributes['content'] ) ? $attributes['content'] : 'Hello, World!';
	return '<div class="server-side-render-block">' . esc_html( $content ) . '</div>';
}

register_block_type( __DIR__, array(
	'render_callback' => 'render_server_side_render_block',
) );
