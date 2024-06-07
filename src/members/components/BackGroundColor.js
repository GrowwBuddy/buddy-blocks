import { __, sprintf } from '@wordpress/i18n';
import { clsx } from 'clsx';

import {
    __experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';

import {
    __experimentalDropdownContentWrapper as DropdownContentWrapper,
    __experimentalToolsPanelItem as ToolsPanelItem,
    __experimentalHStack as HStack,
    __experimentalZStack as ZStack,
    ColorIndicator,
    Flex,
    FlexItem,
    Dropdown,
    Button,
    privateApis as componentsPrivateApis,
} from '@wordpress/components';

import { __dangerousOptInToUnstableAPIsOnlyForCoreModules } from '@wordpress/private-apis';

const { lock, unlock } =
    __dangerousOptInToUnstableAPIsOnlyForCoreModules(
        'I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.',
        '@wordpress/block-editor'
    );


const { Tabs } = unlock( componentsPrivateApis );

function ColorPanelTab( {
                            isGradient,
                            inheritedValue,
                            userValue,
                            setValue,
                            colorGradientControlSettings,
                        } ) {
    return (
        <ColorGradientControl
            { ...colorGradientControlSettings }
            showTitle={ false }
            enableAlpha
            __experimentalIsRenderedInSidebar
            colorValue={ isGradient ? undefined : inheritedValue }
            gradientValue={ isGradient ? inheritedValue : undefined }
            onColorChange={ isGradient ? undefined : setValue }
            onGradientChange={ isGradient ? setValue : undefined }
            clearable={ inheritedValue === userValue }
            headingLevel={ 3 }
        />
    );
}

const LabeledColorIndicators = ( { indicators, label } ) => (
    <HStack justify="flex-start">
        <ZStack isLayered={ false } offset={ -8 }>
            { indicators.map( ( indicator, index ) => (
                <Flex key={ index } expanded={ false }>
                    <ColorIndicator colorValue={ indicator }/>
                </Flex>
            ) ) }
        </ZStack>
        <FlexItem
            className="block-editor-panel-color-gradient-settings__color-name"
            title={ label }
        >
            { label }
        </FlexItem>
    </HStack>
);


const BackGroundColor = ( {
                              key,
                              label,
                              hasValue,
                              resetValue,
                              isShownByDefault,
                              indicators,
                              tabs,
                              panelId,
                              colorGradientControlSettings,
                              popoverProps
                          } ) => (
    <ToolsPanelItem
        className="block-editor-tools-panel-color-gradient-settings__item"
        hasValue={ hasValue }
        label={ label }
        onDeselect={ resetValue }
        isShownByDefault={ isShownByDefault }
        panelId={ panelId }
    >
        <Dropdown
            popoverProps={ popoverProps }
            className="block-editor-tools-panel-color-gradient-settings__dropdown"
            renderToggle={ ( { onToggle, isOpen } ) => {
                const toggleProps = {
                    onClick: onToggle,
                    className: clsx(
                        'block-editor-panel-color-gradient-settings__dropdown',
                        { 'is-open': isOpen }
                    ),
                    'aria-expanded': isOpen,
                    'aria-label': sprintf(
                        /* translators: %s is the type of color property, e.g., "background" */
                        __( 'Color %s styles' ),
                        label
                    ),
                };

                return (
                    <Button { ...toggleProps }>
                        <LabeledColorIndicators
                            indicators={ indicators }
                            label={ label }
                        />
                    </Button>
                );
            } }
            renderContent={ () => (
                <DropdownContentWrapper paddingSize="none">
                    <div className="block-editor-panel-color-gradient-settings__dropdown-content">
                        { tabs.length === 1 && (
                            <ColorPanelTab
                                key={ tabs[0].key }
                                { ...tabs[0] }
                                colorGradientControlSettings={ colorGradientControlSettings }
                            />
                        ) }
                        { tabs.length > 1 && (
                            <Tabs defaultTabId={ tabs[0].key }>
                                <Tabs.TabList>
                                    { tabs.map( tab => (
                                        <Tabs.Tab
                                            key={ tab.key }
                                            tabId={ tab.key }
                                        >
                                            { tab.label }
                                        </Tabs.Tab>
                                    ) ) }
                                </Tabs.TabList>

                                { tabs.map( tab => {
                                    const { key: tabKey, ...restTabProps } = tab;
                                    return (
                                        <Tabs.TabPanel
                                            key={ tabKey }
                                            tabId={ tabKey }
                                            focusable={ false }
                                        >
                                            <ColorPanelTab
                                                key={ tabKey }
                                                { ...restTabProps }
                                                colorGradientControlSettings={ colorGradientControlSettings }
                                            />
                                        </Tabs.TabPanel>
                                    );
                                } ) }
                            </Tabs>
                        ) }
                    </div>
                </DropdownContentWrapper>
            ) }
        />
    </ToolsPanelItem>
);

export default BackGroundColor;
