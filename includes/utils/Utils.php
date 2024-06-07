<?php

namespace GrowwBuddyBlocks;


use WP_REST_Request;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Utils {

	private static $_instance = null;

	/**
	 * Get instance.
	 *
	 * @return Utils
	 */
	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new Utils();
		}

		return self::$_instance;
	}

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->load_files();
		$this->load_instance();
		$this->init();
	}

	/**
	 * Load files.
	 */
	private function load_files() {
	}

	/**
	 * Load instance
	 */
	public function load_instance() {
	}

	/**
	 * Initialize the class
	 */
	public function init() {
	}

	/**
	 * Get rest data.
	 *
	 * @param string $route  Route.
	 * @param string $method Method.
	 * @param array  $params Params.
	 *
	 * @return array
	 */
	public function get_rest_data( $route, $method = "GET", $params = array() ) {
		$members_rest_response = $this->get_rest_response( $route, $method, $params );
		$rest_data             = array();
		if ( 200 === $members_rest_response->status ) {
			$rest_data = $members_rest_response->get_data();
		}

		return $rest_data;
	}

	/**
	 * Get rest response.
	 *
	 * @param string $route  Route.
	 * @param string $method Method.
	 * @param array  $params Params.
	 *
	 * @return mixed
	 */
	public function get_rest_response( $route, $method = "GET", $params = array() ) {
		/**
		 * Redirect to topic endpoint.
		 */
		$request_curl = new WP_REST_Request( $method, $route );

		if ( isset( $params ) ) {
			foreach ( $params as $key => $value ) {
				$request_curl->set_param( $key, $value );
			}
		}

		$response = $this->dispatch( $request_curl );

		return rest_ensure_response( $response );
	}

	/**
	 * Dispatch the request item.
	 *
	 * @param WP_REST_Request $request Rest request.
	 *
	 * @return mixed
	 */
	protected function dispatch( $request ) {
		$query_params = $request->get_params();

		if ( isset( $request->get_query_params()['_embed'] ) ) {
			$query_params['_embed'] = $request->get_query_params()['_embed'];
		}

		$request->set_query_params( $query_params );

		$server   = rest_get_server();
		$response = $server->dispatch( $request );

		return $response;
	}

	public function get_styles( $attributes ) {
		$colors       = block_core_navigation_build_css_colors( $attributes );
		$font_sizes   = block_core_navigation_build_css_font_sizes( $attributes );
		$block_styles = isset( $attributes['styles'] ) ? $attributes['styles'] : '';
		return $block_styles . $colors['inline_styles'] . $font_sizes['inline_styles'];
	}

	public function get_classes( $attributes ) {
		// Restore legacy classnames for submenu positioning.
		$layout_class       = static::get_layout_class( $attributes );
		$colors             = block_core_navigation_build_css_colors( $attributes );
		$font_sizes         = block_core_navigation_build_css_font_sizes( $attributes );
		$is_responsive_menu = static::is_responsive( $attributes );

		// Manually add block support text decoration as CSS class.
		$text_decoration       = $attributes['style']['typography']['textDecoration'] ?? null;
		$text_decoration_class = sprintf( 'has-text-decoration-%s', $text_decoration );

		$classes = array_merge(
			$colors['css_classes'],
			$font_sizes['css_classes'],
			$is_responsive_menu ? array( 'is-responsive' ) : array(),
			$layout_class ? array( $layout_class ) : array(),
			$text_decoration ? array( $text_decoration_class ) : array()
		);
		return implode( ' ', $classes );
	}

	protected function get_layout_class( $attributes ) {
		$layout_justification = array(
			'left'          => 'items-justified-left',
			'right'         => 'items-justified-right',
			'center'        => 'items-justified-center',
			'space-between' => 'items-justified-space-between',
		);

		$layout_class = '';
		if (
			isset( $attributes['layout']['justifyContent'] ) &&
			isset( $layout_justification[ $attributes['layout']['justifyContent'] ] )
		) {
			$layout_class .= $layout_justification[ $attributes['layout']['justifyContent'] ];
		}
		if ( isset( $attributes['layout']['orientation'] ) && 'vertical' === $attributes['layout']['orientation'] ) {
			$layout_class .= ' is-vertical';
		}

		if ( isset( $attributes['layout']['flexWrap'] ) && 'nowrap' === $attributes['layout']['flexWrap'] ) {
			$layout_class .= ' no-wrap';
		}
		return $layout_class;
	}

	protected function is_responsive( $attributes ) {
		/**
		 * This is for backwards compatibility after the `isResponsive` attribute was been removed.
		 */

		$has_old_responsive_attribute = ! empty( $attributes['isResponsive'] ) && $attributes['isResponsive'];
		return isset( $attributes['overlayMenu'] ) && 'never' !== $attributes['overlayMenu'] || $has_old_responsive_attribute;
	}


}