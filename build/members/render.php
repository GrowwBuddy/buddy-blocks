<?php
/**
 * Members render file
 *
 * @package BuddyBlocks
 */

$membersStyles = isset( $attributes['membersStyles'] ) ? $attributes['membersStyles'] : array();
$membersSettings = isset( $attributes['membersSettings'] ) ? $attributes['membersSettings'] : array();
$membersLayout = isset( $membersStyles['membersLayout'] ) ? $membersStyles['membersLayout'] : 'grid';

if ( $membersLayout === 'grid' ) {
	$layout = 'gridview';
} else {
	$layout = 'listview';
}


$members_rest_response = \GrowwBuddyBlocks\Utils::get_instance()->get_rest_response( '/buddyboss/v1/members', 'GET', array(
	'per_page' => isset( $membersSettings['perPage'] ) ? $membersSettings['perPage'] : 10,
	'page'     => 1,
	'type'  => isset( $membersSettings['type'] ) ? $membersSettings['type'] : 'newest',
	'search'   => isset( $membersSettings['search'] ) ? $membersSettings['search'] : '',
) );
$bp_members = array();
if ( 200 === $members_rest_response->status ) {
	$bp_members = $members_rest_response->get_data();
}

?>
<div <?php
get_block_wrapper_attributes(); ?>>
    <div class="container">
        <div class="gridlist-container">
            <div class="gridlist <?php echo esc_attr( $layout ); ?>">
				<?php
				if ( ! empty( $bp_members ) && is_array( $bp_members ) ) {
				    foreach ( $bp_members as $bp_member ) {
					?>
                    <div class="item is-collapsed">
                        <div class="item-container ">
                            <div class="item-cover">
                                <div class="avatar">
                                    <img src="<?php echo esc_url(  $bp_member['avatar_urls']['thumb']); ?>" alt="<?php echo esc_attr( $bp_member['name'] ); ?>">
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="subhead-1 activator"><?php echo esc_html( $bp_member['name'] ); ?></div>
                                <small>Last seen: <?php echo esc_html( bp_get_member_last_active( $bp_member['id'] ) ); ?></small>
                                <div class="actions">
                                    <a href="<?php echo esc_url( $bp_member['link'] ); ?>" class="button">View Profile</a>
                                </div>

                            </div>
                        </div>
                    </div>
					<?php
				    }
                }
				?>
            </div>
        </div>
    </div>
</div>

