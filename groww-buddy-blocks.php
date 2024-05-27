<?php
/**
 * Plugin Name: Groww Buddy Blocks
 * Plugin URI: https://growwbuddy.com
 * Version: 1.0.0
 * Description: Groww Buddy Blocks is a collection of blocks for the WordPress block editor.
 * Author: GrowwBuddy
 * Author URI: https://growwbuddy.com
 * License: GPLv2 or later
 *
 */

namespace GrowwBuddyBlocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'BuddyBlocks' ) ) {
	class GrowwBuddyBlocks {

		private static $_instance = null;

		/**
		 * Get instance.
		 *
		 * @return GrowwBuddyBlocks
		 */
		public static function get_instance() {
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new GrowwBuddyBlocks();
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
			require_once __DIR__ . '/includes/groups/GroupRest.php';
		}

		public function load_instance() {
			GroupRest::get_instance();
		}

		/**
		 * Initialize the class
		 */
		public function init() {
			add_action( 'init', array( $this, 'buddy_blocks_register_block' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );

			if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ) {
				add_filter( 'block_categories_all', array( $this, 'buddy_blocks_register_layout_category' ) );
			} else {
				add_filter( 'block_categories', array( $this, 'buddy_blocks_register_layout_category' ) );
			}
		}

		/**
		 * Enqueue block editor assets
		 */
		public function enqueue_block_editor_assets() {

			wp_localize_script(
				'groww-buddy-groups-editor-script',
				'GrowwBuddyData',
				array(
					'nonce' => wp_create_nonce( 'wp_rest' ),
				)
			);
		}

		/**
		 * Register block
		 */
		public function buddy_blocks_register_block() {
			// Register block
			register_block_type( __DIR__ . '/build' );
		}

		/**
		 * Register layout category
		 */
		public function buddy_blocks_register_layout_category( $categories ) {
			return array_merge(
				$categories,
				array(
					array(
						'slug' => 'growwbuddy',
						'title' => __( 'GrowwBuddy', 'GrowwBuddy' ),
					),
				)
			);
		}

	}
}

GrowwBuddyBlocks::get_instance();

