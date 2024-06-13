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


require_once plugin_dir_path( __FILE__ ) . 'constants.php';



if ( ! defined( 'GROWW_BUDDY_BLOCKS_VERSION' ) ) {
	return;
}

if ( ! class_exists( 'GrowwBuddyBlocks' ) ) {
	class GrowwBuddyBlocks {

		private static $instance = null;


		/**
		 * Get instance.
		 *
		 * @return GrowwBuddyBlocks
		 */
		public static function get_instance() {
			if ( is_null( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor
		 */
		private function __construct() {
			register_activation_hook( __FILE__, array( $this, 'activation_hook' ) );
			register_deactivation_hook( __FILE__, array( $this, 'deactivation_hook' ) );

			$this->includes();
			$this->load_instance();
			$this->hooks();

		}

		/**
		 * Load files.
		 */
		private function includes() {
			require_once GROWW_BUDDY_BLOCKS_DIR . '/includes/functions.php';
			require_once GROWW_BUDDY_BLOCKS_DIR . '/includes/groups/Groups.php';
			require_once GROWW_BUDDY_BLOCKS_DIR . '/includes/utils/Utils.php';
		}

		/**
		 * Load instance
		 */
		public function load_instance() {
			Groups::get_instance();
		}

		/**
		 * Initialize the class
		 */
		public function hooks() {
			add_action( 'init', array( $this, 'buddy_blocks_register_block' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ) );
			add_action( 'enqueue_block_assets', array( $this, 'enqueue_block_editor_assets' ) );

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
			wp_localize_script(
				'groww-buddy-groups-view-script',
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
			register_block_type( GROWW_BUDDY_BLOCKS_DIR . '/build/groups' );
			register_block_type( GROWW_BUDDY_BLOCKS_DIR . '/build/members' );
			register_block_type( GROWW_BUDDY_BLOCKS_DIR . '/build/posts' );
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
						'title' => __( 'GrowwBuddy', 'groww-buddy' ),
					),
				)
			);
		}

		/**
		 * Activation hook
		 */
		public static function activation_hook() {
			// Add activation code here
		}

		/**
		 * Deactivation hook
		 */
		public static function deactivation_hook() {
			// Add deactivation code here
		}

	}
}

GrowwBuddyBlocks::get_instance();

