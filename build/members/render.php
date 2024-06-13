<?php
/**
 * Members render file
 *
 * @package BuddyBlocks
 */

// Generate a unique cache key based on the attributes
$cache_key = 'groww_buddy_members_' . md5( maybe_serialize( $attributes ) );
$cached_output = get_transient( $cache_key );

//if ( $cached_output !== false ) {
//	$allowed_html = wp_kses_allowed_html( 'post');
//	$allowed_html['style'] = array();
//	echo wp_kses( $cached_output,$allowed_html );
//    return;
//}

$membersStyles = isset( $attributes['membersStyles'] ) ? $attributes['membersStyles'] : array();
$membersSettings = isset( $attributes['membersSettings'] ) ? $attributes['membersSettings'] : array();
$membersLayout = isset( $membersStyles['membersLayout'] ) ? $membersStyles['membersLayout'] : 'grid';

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
		'class' => 'groww-buddy-container groww-buddy-' . esc_attr( $membersLayout ) . '-view ' . $class,
		'style' => $style,
	)
);

$itemBgColor = isset( $membersStyles['itemBgColor'] ) ? $membersStyles['itemBgColor'] : '';
$itemBgHoverColor = isset( $membersStyles['itemBgHoverColor'] ) ? $membersStyles['itemBgHoverColor'] : '';

ob_start();
?>
<style>
    .groww-buddy-card{
        background-color: <?php echo esc_attr( $itemBgColor ); ?>;
    }
    .groww-buddy-card:hover {
        background-color: <?php echo esc_attr( $itemBgHoverColor ); ?>;
    }
</style>
    <div <?php echo wp_kses_post( $container_attributes ); ?>>
        <?php
        if ( ! empty( $bp_members ) && is_array( $bp_members ) ) {
	        foreach ( $bp_members as $bp_member ) {
		        $avatar_url         = $bp_member['avatar_urls']['thumb'];
		        $name               = $bp_member['name'];
		        $last_active        = bp_get_member_last_active( $bp_member['id'] );
		        $member_profile_url = $bp_member['link'];

		        ?>
                <div class="groww-buddy-card">
                    <img src="<?php echo esc_url( $avatar_url ); ?>" alt="<?php echo esc_attr( $name ); ?>" class="groww-buddy-avatar">
                    <div class="groww-buddy-content">
                        <h2><?php echo esc_html( $name ); ?></h2>
                        <p class="groww-buddy-meta"><?php echo esc_html( $last_active ); ?></p>
                    </div>
                    <a href="<?php echo esc_url( $member_profile_url ); ?>" class="groww-buddy-view-button"><?php echo esc_html__( 'View Profile', 'groww-buddy' ); ?></a>
                </div>
		        <?php
	        }
        }
        ?>
    </div>
<?php
$output = ob_get_clean();

// Cache the rendered output for 12 hours
set_transient( $cache_key, $output, 12 * HOUR_IN_SECONDS );

$allowed_html = wp_kses_allowed_html( 'post');
$allowed_html['style'] = array();
echo wp_kses( $output,$allowed_html );
