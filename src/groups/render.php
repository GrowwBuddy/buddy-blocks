<?php
$extra_attributes = array();

if ( ! empty( $attributes['groupsStyles']['groupsLayout'] ) ) {
    $extra_attributes['data-groups-layout'] = $attributes['groupsStyles']['groupsLayout'];
	$extra_attributes['class'] = 'groww-buddy-groups-blocks groww-buddy-groups-blocks--' . $attributes['groupsStyles']['groupsLayout'];
}


?>

<div <?php echo get_block_wrapper_attributes($extra_attributes); ?>>
	<?php
	$groups_styles = isset( $attributes['groupsStyles'] ) ? $attributes['groupsStyles'] : array();
	$layout        = isset( $groups_styles['groupsLayout'] ) ? $groups_styles['groupsLayout'] : 'grid';

	$groups_settings = isset( $attributes['groupsSettings'] ) ? $attributes['groupsSettings'] : array();

    $group_args = array();
	if ( ! empty( $groups_settings['search'] ) ) {
		$group_args['search'] = $groups_settings['search'];
	}

    if ( ! empty( $groups_settings['perPage'] ) ) {
		$group_args['per_page'] = $groups_settings['perPage'];
	}

    if ( ! empty( $groups_settings['groupsOrderBy'] ) ) {
		$group_args['orderby'] = $groups_settings['groupsOrderBy'];
	}

    if ( ! empty( $groups_settings['currentPage'] ) ) {
		$group_args['page'] = $groups_settings['currentPage'];
	}

    if ( ! empty( $groups_settings['order'] ) ) {
		$group_args['order'] = $groups_settings['order'];
	}

    if ( ! empty( $groups_settings['orderBy'] ) ) {
		$group_args['orderby'] = $groups_settings['orderBy'];
	}

	$groups = groups_get_groups( $group_args );

	if ( empty( $groups ) ) {
		return;
	}

	if ( empty( $groups['groups'] ) ) {
		$groups = array( 'groups' => array() );
	}

	$groups = $groups['groups'];

	?>
	<?php
	foreach ( $groups as $group ) : ?>

        <?php
		$group_meta = array();
		if ( ! empty( $group->status ) ) {
			$group_meta['status'] = bp_get_group_status( $group );
		}
		if ( ! empty( $group->last_activity ) ) {
			$group_meta['last_activity'] = bp_get_group_last_active( $group );
		}
		if ( ! empty( $group->members_count ) ) {
			$group_meta['total_member_count'] = bp_get_group_total_members( $group );
		}

        ?>

        <div class="groww-buddy-group-block-item">
			<?php
			if ( 'grid' === $layout ) {
				?>
                <div class="groww-buddy-group-block-item-cover">
                    <img src="<?php echo esc_url( bp_get_group_cover_url( $group ) ); ?>" alt="<?php echo esc_html( bp_get_group_name( $group ) ); ?>"/>
                </div>
				<?php
			}
			?>
            <div class="groww-buddy-group-block-item-avatar">
                <img src="<?php echo esc_url( bp_get_group_avatar_url( $group ) ); ?>" alt="<?php echo esc_html( bp_get_group_name( $group ) ); ?>"/>
            </div>
            <div class="groww-buddy-group-block-item-content">
                <h4 class="groww-buddy-group-block-item-title">
                    <a href="<?php echo esc_url( bp_get_group_permalink( $group ) ); ?>"><?php echo esc_html( bp_get_group_name( $group ) ); ?></a>
                </h4>
                <?php if( 'list' === $layout ) { ?>
                    <div class="groww-buddy-group-block-item-description"><?php echo wp_kses_post( bp_get_group_description_excerpt( $group ) ); ?></div>
                <?php } ?>

                <div class="groww-buddy-group-block-item-meta">
                    <?php
                    if ( ! empty( $group_meta ) ) {
                        foreach ( $group_meta as $key => $value ) {
                            ?>
                            <span class="groww-buddy-group-block-item-meta-item"><?php echo esc_html( $value ); ?></span>
                            <?php
                        }
                    }
                    ?>
                </div>
                <div class="groww-buddy-group-block-item-actions">
                    <a href="<?php echo esc_url( bp_get_group_permalink( $group ) ); ?>" class="groww-buddy-group-block-item-link"><?php _e( 'View Group', 'groww-buddy' ); ?></a>
                </div>
            </div>
        </div>
	<?php
	endforeach; ?>
</div>