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



	public function get_rest_response( $route,$method="GET", $params = array()) {
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


}