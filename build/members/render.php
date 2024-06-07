<?php
/**
 * Members render file
 *
 * @package BuddyBlocks
 */

// Generate a unique cache key based on the attributes
$cache_key = 'groww_buddy_members_' . md5( serialize( $attributes ) );
$cached_output = get_transient( $cache_key );

//if ( $cached_output !== false ) {
//	echo $cached_output;
//    return;
//}

$membersStyles = isset( $attributes['membersStyles'] ) ? $attributes['membersStyles'] : array();
$membersSettings = isset( $attributes['membersSettings'] ) ? $attributes['membersSettings'] : array();
$membersLayout = isset( $membersStyles['membersLayout'] ) ? $membersStyles['membersLayout'] : 'grid';


if ( $membersLayout === 'grid' ) {
	$layout = 'gridview';
} else {
	$layout = 'listview';
}

$rest_args = array();

if ( $membersSettings['filter'] === 'filter_by' ) {
	$rest_args['per_page'] = isset( $membersSettings['perPage'] ) ? $membersSettings['perPage'] : 10;
	$rest_args['page']     = 1;
	$rest_args['type']     = isset( $membersSettings['type'] ) ? $membersSettings['type'] : 'newest';
} else {
	$rest_args['search'] = isset( $membersSettings['search'] ) ? $membersSettings['search'] : '';
}

$bp_members = growwbuddy_utils()->get_rest_data( '/buddyboss/v1/members', 'GET', $rest_args );

$classes          = array();

if ( isset( $attributes['backgroundColor'] ) ) {
    $classes[] = 'has-text-align-' . $attributes['backgroundColor'];
}






$style                = growwbuddy_utils()->get_styles( $attributes );
$class                = growwbuddy_utils()->get_classes( $attributes );
$container_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'wp-block-navigation__container ' . $class,
		'style' => $style,
	)
);

$itemBgColor = isset( $membersStyles['itemBgColor'] ) ? $membersStyles['itemBgColor'] : '';
$itemBgHoverColor = isset( $membersStyles['itemBgHoverColor'] ) ? $membersStyles['itemBgHoverColor'] : '';

ob_start();
?>
<style>
    .gridlist .item .item-container {
        background-color: <?php echo esc_attr( $itemBgColor ); ?>;
    }

    .gridlist .item .item-container:hover {
        background-color: <?php echo esc_attr( $itemBgHoverColor ); ?>;
    }
</style>
<div <?php echo $container_attributes; ?>>
    <div class="container">
        <div class="gridlist-container">
            <div class="gridlist <?php echo esc_attr( $layout ); ?>">
				<?php
				if ( ! empty( $bp_members ) && is_array( $bp_members ) ) {
					foreach ( $bp_members as $bp_member ) {
                        $avatar_url = $bp_member['avatar_urls']['thumb'];
                        $name = $bp_member['name'];
                        $last_active = bp_get_member_last_active( $bp_member['id'] );
                        $member_profile_url = $bp_member['link'];

						?>
                        <div class="item is-collapsed">
                            <div class="item-container">
                                <div class="item-cover">
                                    <div class="avatar">
                                        <img src="<?php echo esc_url( $avatar_url ); ?>" alt="<?php echo esc_attr( $name ); ?>">
                                    </div>
                                </div>
                                <div class="item-content">
                                    <div class="subhead-1 activator"><?php echo esc_html( $bp_member['name'] ); ?></div>
                                    <small><?php esc_html__( 'Last active', 'groww-buddy' ); ?> <?php echo esc_html( $last_active ); ?></small>
                                    <div class="actions">
                                        <a href="<?php echo esc_url( $member_profile_url ); ?>" class="button"><?php echo esc_html__( 'View Profile', 'groww-buddy' ); ?></a>
                                    </div>
                                </div>
                            </div>
                        </div>
						<?php
					}
                } else {
                    echo sprintf( '<p>%s</p>', esc_html__( 'No members found.', 'groww-buddy-blocks' ) );
				}
				?>
            </div>
        </div>
    </div>
</div>
<?php
$output = ob_get_clean();

// Cache the rendered output for 12 hours
set_transient( $cache_key, $output, 12 * HOUR_IN_SECONDS );

echo $output;
