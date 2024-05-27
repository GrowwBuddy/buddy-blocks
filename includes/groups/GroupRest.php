<?php

namespace GrowwBuddyBlocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class GroupRest {

	private static $_instance = null;

	/**
	 * Get instance.
	 *
	 * @return GroupRest
	 */
	public static function get_instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new GroupRest();
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

	public function load_instance() {
	}

	/**
	 * Initialize the class
	 */
	public function init() {
		add_action( 'bp_rest_groups_prepare_value', array( $this, 'groww_buddy_blocks_rest_prepare_value' ), 10, 3 );
	}

	public function groww_buddy_blocks_rest_prepare_value( $response, $request, $group ) {
		$growwbuddy_data = array();

		$growwbuddy_data['description']    = $group->description;
		$growwbuddy_data['last_activity']  = bp_core_time_since( $group->last_activity );


		$response->data['growwbuddy_data'] = $growwbuddy_data;

		return $response;
	}


}