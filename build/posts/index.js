/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commonComponents/CommonProviders.js":
/*!*************************************************!*\
  !*** ./src/commonComponents/CommonProviders.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupsSettingsProvider: () => (/* binding */ GroupsSettingsProvider),
/* harmony export */   GroupsStylesProvider: () => (/* binding */ GroupsStylesProvider),
/* harmony export */   MembersSettingsProvider: () => (/* binding */ MembersSettingsProvider),
/* harmony export */   MembersStylesProvider: () => (/* binding */ MembersStylesProvider),
/* harmony export */   PostsSettingsProvider: () => (/* binding */ PostsSettingsProvider),
/* harmony export */   PostsStylesProviders: () => (/* binding */ PostsStylesProviders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Providers_StylesProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Providers/StylesProvider */ "./src/commonComponents/Providers/StylesProvider.js");
/* harmony import */ var _Providers_GenericProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Providers/GenericProvider */ "./src/commonComponents/Providers/GenericProvider.js");




/** Posts Block providers */

const PostsStylesProviders = ({
  children,
  initialStyles,
  setAttributes
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Providers_StylesProvider__WEBPACK_IMPORTED_MODULE_1__.StylesProvider, {
  children: children,
  initialStyles: initialStyles,
  setAttributes: setAttributes,
  blockKey: "postsStyles"
});
const PostsSettingsProvider = ({
  children,
  initialSettings,
  setAttributes
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Providers_GenericProvider__WEBPACK_IMPORTED_MODULE_2__.GenericProvider, {
  initialData: initialSettings,
  setAttributes: setAttributes,
  dataKey: "postsSettings"
}, children);

/** End Posts Block providers */

/** Members Block Providers */
const MembersStylesProvider = ({
  children,
  initialStyles,
  setAttributes
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Providers_StylesProvider__WEBPACK_IMPORTED_MODULE_1__.StylesProvider, {
  children: children,
  initialStyles: initialStyles,
  setAttributes: setAttributes,
  blockKey: "membersStyles"
});
const MembersSettingsProvider = ({
  children,
  initialSettings,
  setAttributes
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Providers_GenericProvider__WEBPACK_IMPORTED_MODULE_2__.GenericProvider, {
  initialData: initialSettings,
  setAttributes: setAttributes,
  dataKey: "membersSettings"
}, children);

/** End Members Block Providers */

/** Groups Block Providers */
const GroupsStylesProvider = ({
  children,
  initialStyles,
  setAttributes
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Providers_StylesProvider__WEBPACK_IMPORTED_MODULE_1__.StylesProvider, {
  children: children,
  initialStyles: initialStyles,
  setAttributes: setAttributes,
  blockKey: "groupsStyles"
});
const GroupsSettingsProvider = ({
  children,
  initialSettings,
  setAttributes
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Providers_GenericProvider__WEBPACK_IMPORTED_MODULE_2__.GenericProvider, {
  initialData: initialSettings,
  setAttributes: setAttributes,
  dataKey: "groupsSettings"
}, children);

/** End Groups Block Providers */

/***/ }),

/***/ "./src/commonComponents/Providers/GenericProvider.js":
/*!***********************************************************!*\
  !*** ./src/commonComponents/Providers/GenericProvider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericProvider: () => (/* binding */ GenericProvider),
/* harmony export */   useGenericContext: () => (/* binding */ useGenericContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const GenericContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useGenericContext = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(GenericContext);
const GenericProvider = ({
  children,
  initialData,
  setAttributes,
  dataKey
}) => {
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);
  const updateData = newData => {
    setData(prevData => ({
      ...prevData,
      ...newData[dataKey]
    }));
    setAttributes({
      [dataKey]: {
        ...data,
        ...newData[dataKey]
      }
    });
  };
  const getData = () => {
    return data;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GenericContext.Provider, {
    value: {
      data,
      updateData,
      getData
    }
  }, children);
};

/***/ }),

/***/ "./src/commonComponents/Providers/StylesProvider.js":
/*!**********************************************************!*\
  !*** ./src/commonComponents/Providers/StylesProvider.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StylesProvider: () => (/* binding */ StylesProvider),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   useStyles: () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const StylesContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useStyles = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(StylesContext);
const getStyles = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(StylesContext).getStyles();
const StylesProvider = ({
  children,
  initialStyles,
  setAttributes,
  blockKey
}) => {
  const [styles, setStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialStyles);
  const updateStyles = newStyles => {
    setStyles(prevStyles => ({
      ...prevStyles,
      ...newStyles[blockKey]
    }));
    setAttributes({
      [blockKey]: {
        ...styles,
        ...newStyles[blockKey]
      }
    });
  };
  const getStyles = () => {
    return styles;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StylesContext.Provider, {
    value: {
      styles,
      updateStyles,
      getStyles
    }
  }, children);
};

/***/ }),

/***/ "./src/posts/components/BackGroundColor.js":
/*!*************************************************!*\
  !*** ./src/posts/components/BackGroundColor.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





function ColorPanelTab({
  isGradient,
  inheritedValue,
  userValue,
  setValue,
  colorGradientControlSettings
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientControl, {
    ...colorGradientControlSettings,
    showTitle: false,
    enableAlpha: true,
    __experimentalIsRenderedInSidebar: true,
    colorValue: isGradient ? undefined : inheritedValue,
    gradientValue: isGradient ? inheritedValue : undefined,
    onColorChange: isGradient ? undefined : setValue,
    onGradientChange: isGradient ? setValue : undefined,
    clearable: inheritedValue === userValue,
    headingLevel: 3
  });
}
const LabeledColorIndicators = ({
  indicators,
  label
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHStack, {
  justify: "flex-start"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalZStack, {
  isLayered: false,
  offset: -8
}, indicators.map((indicator, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, {
  key: index,
  expanded: false
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorIndicator, {
  colorValue: indicator
})))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FlexItem, {
  className: "block-editor-panel-color-gradient-settings__color-name",
  title: label
}, label));
const BackGroundColor = ({
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
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, {
  className: "block-editor-tools-panel-color-gradient-settings__item",
  hasValue: hasValue,
  label: label,
  onDeselect: resetValue,
  isShownByDefault: isShownByDefault,
  panelId: panelId
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
  popoverProps: popoverProps,
  className: "block-editor-tools-panel-color-gradient-settings__dropdown",
  renderToggle: ({
    onToggle,
    isOpen
  }) => {
    const toggleProps = {
      onClick: onToggle,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.clsx)('block-editor-panel-color-gradient-settings__dropdown', {
        'is-open': isOpen
      }),
      'aria-expanded': isOpen,
      'aria-label': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s is the type of color property, e.g., "background" */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color %s styles'), label)
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      ...toggleProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LabeledColorIndicators, {
      indicators: indicators,
      label: label
    }));
  },
  renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalDropdownContentWrapper, {
    paddingSize: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-panel-color-gradient-settings__dropdown-content"
  }, tabs.length === 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPanelTab, {
    key: tabs[0].key,
    ...tabs[0],
    colorGradientControlSettings: colorGradientControlSettings
  }), tabs.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tabs, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tabs.TabList, null, tabs.map(tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tabs.Tab, {
    key: tab.key,
    tabId: tab.key
  }, tab.label, console.log(tab.key)))), tabs.map(tab => {
    const {
      key: tabKey,
      ...restTabProps
    } = tab;
    console.log(tabKey);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tabs.TabPanel, {
      key: tabKey,
      tabId: tabKey,
      focusable: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPanelTab, {
      key: tabKey,
      ...restTabProps,
      colorGradientControlSettings: colorGradientControlSettings
    }));
  }))))
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackGroundColor);

/***/ }),

/***/ "./src/posts/components/BlockSettings.js":
/*!***********************************************!*\
  !*** ./src/posts/components/BlockSettings.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonComponents_Providers_GenericProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonComponents/Providers/GenericProvider */ "./src/commonComponents/Providers/GenericProvider.js");




const BlockSettings = () => {
  const {
    data: settings,
    updateData: updateSettings,
    getData: getSettings
  } = (0,_commonComponents_Providers_GenericProvider__WEBPACK_IMPORTED_MODULE_3__.useGenericContext)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'groww-buddy'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select members by', 'groww-buddy'),
    selected: settings.filter,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filter members', 'groww-buddy'),
      value: 'filter_by'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Specific members', 'groww-buddy'),
      value: 'specific'
    }],
    defaultValue: "filter_by",
    onChange: value => updateSettings({
      membersSettings: {
        ...settings,
        filter: value
      }
    })
  })), settings.filter === 'filter_by' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order by', 'groww-buddy'),
    options: [{
      value: 'active',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Active', 'groww-buddy')
    }, {
      value: 'newest',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Newest', 'groww-buddy')
    }, {
      value: 'alphabetical',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alphabetical', 'groww-buddy')
    }, {
      value: 'random',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Random', 'groww-buddy')
    }, {
      value: 'online',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Online', 'groww-buddy')
    }, {
      value: 'popular',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popular', 'groww-buddy')
    }],
    value: settings.type,
    onChange: value => updateSettings({
      membersSettings: {
        ...settings,
        type: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show number of members', 'groww-buddy'),
    type: "number",
    value: settings.perPage,
    onChange: value => updateSettings({
      membersSettings: {
        ...settings,
        perPage: value
      }
    })
  }))), settings.filter === 'specific' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'groww-buddy'),
    value: settings.search,
    onChange: value => updateSettings({
      membersSettings: {
        ...settings,
        search: value
      }
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSettings);

/***/ }),

/***/ "./src/posts/components/BlockStyles.js":
/*!*********************************************!*\
  !*** ./src/posts/components/BlockStyles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonComponents_Providers_StylesProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonComponents/Providers/StylesProvider */ "./src/commonComponents/Providers/StylesProvider.js");
/* harmony import */ var _BackGroundColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BackGroundColor */ "./src/posts/components/BackGroundColor.js");





const BlockStyles = props => {
  const {
    clientId,
    group
  } = props;
  const {
    styles,
    updateStyles
  } = (0,_commonComponents_Providers_StylesProvider__WEBPACK_IMPORTED_MODULE_3__.useStyles)();
  const {
    postsLayout,
    itemBgColor,
    itemBgHoverColor
  } = styles;
  const handleUpdateStyles = (key, value) => {
    updateStyles({
      postsStyles: {
        [key]: value
      }
    });
  };
  const hasItemBGColor = () => !!itemBgColor || !!itemBgHoverColor;
  const resetBGColor = () => {
    handleUpdateStyles('itemBgColor', '');
    handleUpdateStyles('itemBgHoverColor', '');
  };
  const colors = []; // Define your colors
  const gradients = []; // Define your gradients
  const areCustomSolidsEnabled = true; // Adjust this as needed
  const areCustomGradientsEnabled = true; // Adjust this as needed

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, group === 'inspectorControls' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), group !== 'inspectorControls' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "list-view",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Layout', 'groww-buddy'),
    onClick: () => handleUpdateStyles('postsLayout', 'list'),
    isPressed: postsLayout === 'list'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "grid-view",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid Layout', 'groww-buddy'),
    onClick: () => handleUpdateStyles('postsLayout', 'grid'),
    isPressed: postsLayout === 'grid'
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockStyles);

/***/ }),

/***/ "./src/posts/components/RenderPosts.js":
/*!*********************************************!*\
  !*** ./src/posts/components/RenderPosts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const RenderPosts = ({
  attributes
}) => {
  const memoizedAttributes = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => attributes, [attributes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2___default()), {
    block: "groww-buddy/blog-posts",
    attributes: memoizedAttributes,
    EmptyResponsePlaceholder: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No posts found.', 'groww-buddy')),
    ErrorResponsePlaceholder: ({
      error
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An error occurred while loading the posts.', 'groww-buddy'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, error.message)),
    LoadingResponsePlaceholder: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loading posts...', 'groww-buddy'))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderPosts);

/***/ }),

/***/ "./src/posts/edit.js":
/*!***************************!*\
  !*** ./src/posts/edit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/posts/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonComponents_CommonProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commonComponents/CommonProviders */ "./src/commonComponents/CommonProviders.js");
/* harmony import */ var _components_RenderPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/RenderPosts */ "./src/posts/components/RenderPosts.js");
/* harmony import */ var _components_BlockSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BlockSettings */ "./src/posts/components/BlockSettings.js");
/* harmony import */ var _components_BlockStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BlockStyles */ "./src/posts/components/BlockStyles.js");

// Import CSS.






function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    postsLayout
  } = attributes.postsStyles;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'groww-buddy-posts-blocks ' + (postsLayout === 'grid' ? 'groww-buddy-posts-blocks--grid' : 'groww-buddy-posts-blocks--list')
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_commonComponents_CommonProviders__WEBPACK_IMPORTED_MODULE_3__.PostsSettingsProvider, {
    initialSettings: attributes.postsSettings,
    setAttributes: setAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_commonComponents_CommonProviders__WEBPACK_IMPORTED_MODULE_3__.PostsStylesProviders, {
    initialStyles: attributes.postsStyles,
    setAttributes: setAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockSettings__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    group: "inspectorControls",
    ...props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockStyles__WEBPACK_IMPORTED_MODULE_6__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RenderPosts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/posts/index.js":
/*!****************************!*\
  !*** ./src/posts/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/posts/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/posts/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/posts/edit.js");


// import styles.



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  title: _block_json__WEBPACK_IMPORTED_MODULE_2__.title,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/posts/editor.scss":
/*!*******************************!*\
  !*** ./src/posts/editor.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/posts/style.scss":
/*!******************************!*\
  !*** ./src/posts/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./src/posts/block.json":
/*!******************************!*\
  !*** ./src/posts/block.json ***!
  \******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"groww-buddy/blog-posts","version":"1.0.0","title":"Blog Posts","description":"Display a list of blog posts.","category":"growwbuddy","icon":"admin-users","keywords":["posts","groww-buddy","blog-posts","groww-buddy-blog-posts"],"textdomain":"groww-buddy","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./view.js","style":"file:./style-index.css","render":"file:./render.php","example":{},"attributes":{"postsStyles":{"type":"object","default":{"membersLayout":"list","itemBgColor":"#ffffff","itemBgHoverColor":"#f9f9f9"}},"postsSettings":{"type":"object","default":{"filter":"filter_by","search":"","perPage":10,"type":"newest"}}},"supports":{"align":true,"ariaLabel":true,"anchor":true,"html":false,"reusable":false,"spacing":{"padding":true,"margin":true},"dimensions":{"width":true,"height":true},"responsive":true,"typography":{"lineHeight":true},"color":{"gradients":true,"link":true},"background":{"color":true,"gradients":true}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"posts/index": 0,
/******/ 			"posts/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgroww_buddy_blocks"] = globalThis["webpackChunkgroww_buddy_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["posts/style-index"], () => (__webpack_require__("./src/posts/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map