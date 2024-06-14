<?php
/**
 * Post render file
 *
 * @package BuddyBlocks
 */

$postsStyles = isset( $attributes['postsStyles'] ) ? $attributes['postsStyles'] : array();
$postsSettings = isset( $attributes['postsSettings'] ) ? $attributes['postsSettings'] : array();
$postsLayout = isset( $postsStyles['postsLayout'] ) ? $postsStyles['postsLayout'] : 'grid';

$rest_args = array();

if ( $postsSettings['filter'] === 'filter_by' ) {
	$rest_args['per_page'] = isset( $postsSettings['perPage'] ) ? $postsSettings['perPage'] : 10;
	$rest_args['page']     = 1;
	$rest_args['type']     = isset( $postsSettings['type'] ) ? $postsSettings['type'] : 'newest';
} else {
	$rest_args['search'] = isset( $postsSettings['search'] ) ? $postsSettings['search'] : '';
}

$gb_posts = growwbuddy_utils()->get_rest_data( '/wp/v2/posts', 'GET', $rest_args );

$classes          = array();

if ( isset( $attributes['backgroundColor'] ) ) {
	$classes[] = 'has-text-align-' . $attributes['backgroundColor'];
}


$style                = growwbuddy_utils()->get_styles( $attributes );
$class                = growwbuddy_utils()->get_classes( $attributes );
$container_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'groww-buddy-' . esc_attr( $postsLayout ) . '-view ' . $class,
		'style' => $style,
	)
);

$itemBgColor = isset( $postsStyles['itemBgColor'] ) ? $postsStyles['itemBgColor'] : '';
$itemBgHoverColor = isset( $postsStyles['itemBgHoverColor'] ) ? $postsStyles['itemBgHoverColor'] : '';

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
		if ( ! empty( $gb_posts ) && is_array( $gb_posts ) ) {
			foreach ( $gb_posts as $gb_post ) {
				$title       = get_the_title( $gb_post['id'] );
				$url         = get_permalink( $gb_post['id'] );
				$feature_url = wp_get_attachment_image_url( get_post_thumbnail_id( $gb_post['id'] ) );
				$description = get_the_excerpt( $gb_post['id'] );

				if ( empty( $feature_url ) ) {
					$feature_url = 'https://via.placeholder.com/300x150';
				}
				?>

                <div class="groww-buddy-card">
                    <img src="<?php echo esc_url( $feature_url ); ?>" alt="<?php echo esc_attr( $title ); ?>" class="groww-buddy-cover-image">
                    <div class="groww-buddy-content">
                        <div class="groww-buddy-header">
                            <img src="https://via.placeholder.com/50" alt="Avatar Image" class="groww-buddy-avatar">
                            <div class="groww-buddy-text-content">
                                <h2>Author</h2>
                                <p class="groww-buddy-meta">Meta Information</p>
                            </div>
                        </div>
                        <h2><?php echo esc_html( $title ); ?></h2>
                        <p class="groww-buddy-description"><?php echo wp_kses_post( $description ); ?></p>
                        <div class="groww-buddy-footer">
                            <div class="groww-buddy-labels">
                                <span class="groww-buddy-label">Category 1</span>
                                <span class="groww-buddy-label">Category 2</span>
                            </div>
                            <a href="<?php echo  esc_url($url)?>" class="groww-buddy-view-button"><?php echo esc_html__('View More', 'groww-buddy'); ?></a>
                        </div>
                    </div>
                </div>
				<?php
			}
		}
		?>
    </div>
<?php
$output = ob_get_clean();

// Cache the rendered output for 12 hours

$allowed_html          = wp_kses_allowed_html( 'post' );
$allowed_html['style'] = array();
echo wp_kses( $output, $allowed_html );