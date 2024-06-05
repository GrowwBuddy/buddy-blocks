/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/groups/Context/groupsDetail.context.js":
/*!****************************************************!*\
  !*** ./src/groups/Context/groupsDetail.context.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupsDetailContext: () => (/* binding */ GroupsDetailContext),
/* harmony export */   GroupsDetailProvider: () => (/* binding */ GroupsDetailProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _groupsSettings_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groupsSettings.context */ "./src/groups/Context/groupsSettings.context.js");




const GroupsDetailContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  isLoading: true,
  groups: [],
  totalPages: 1,
  totalGroups: 0,
  setGroupsDetails: () => {}
});
const GroupsDetailProvider = ({
  children,
  setAttributes,
  attributes
}) => {
  const settings = (0,_groupsSettings_context__WEBPACK_IMPORTED_MODULE_3__.getGroupsSettings)();
  const [groupDetails, updateGroupsDetails] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isLoading: true,
    groups: [],
    totalPages: 1,
    totalGroups: 0,
    setGroupsDetails: value => {
      updateGroupsDetails(prevState => {
        return {
          ...prevState,
          ...value
        };
      });
    }
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const queryParams = {
      per_page: settings.perPage,
      page: settings.currentPage,
      orderby: settings.orderBy,
      order: settings.order
    };
    if ('' !== settings.type) {
      queryParams.type = settings.type;
    }
    if ('' !== settings.search) {
      queryParams.search = settings.search;
    }
    console.log(queryParams);
    console.log(settings);
    const url = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('/wp-json/buddyboss/v1/groups', queryParams);
    fetch(url, {
      headers: {
        'X-WP-Nonce': GrowwBuddyData.nonce
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.headers.get('X-WP-TotalPages')) {
        updateGroupsDetails(prevState => ({
          ...prevState,
          totalPages: parseInt(response.headers.get('X-WP-TotalPages'))
        }));
      }
      if (response.headers.get('X-WP-Total')) {
        updateGroupsDetails(prevState => ({
          ...prevState,
          totalGroups: parseInt(response.headers.get('X-WP-Total'))
        }));
      }
      return response.json();
    }).then(data => {
      updateGroupsDetails(prevState => {
        return {
          ...prevState,
          groups: data,
          isLoading: false
        };
      });

      // Update the block's attributes with fetched data
    }).catch(error => {
      console.error(error);
      updateGroupsDetails(prevState => {
        return {
          ...prevState,
          groups: [],
          isLoading: false
        };
      });

      // Update the block's attributes with fetched data
      setAttributes({
        ...attributes,
        groups: []
      });
    });
  }, [settings]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GroupsDetailContext.Provider, {
    value: groupDetails
  }, children);
};

/***/ }),

/***/ "./src/groups/Context/groupsSettings.context.js":
/*!******************************************************!*\
  !*** ./src/groups/Context/groupsSettings.context.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupsSettingsProvider: () => (/* binding */ GroupsSettingsProvider),
/* harmony export */   getGroupsSettings: () => (/* binding */ getGroupsSettings),
/* harmony export */   useGroupsSettings: () => (/* binding */ useGroupsSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const GroupsSettingsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useGroupsSettings = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(GroupsSettingsContext);
const getGroupsSettings = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(GroupsSettingsContext).getSettings();
const GroupsSettingsProvider = ({
  children,
  initialSettings,
  setAttributes
}) => {
  const [settings, setSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSettings);
  const updateSettings = newSettings => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings.groupsSettings
    }));
    setAttributes({
      groupsSettings: {
        ...settings,
        ...newSettings.groupsSettings
      }
    });
  };
  const getSettings = () => {
    return settings;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GroupsSettingsContext.Provider, {
    value: {
      settings,
      updateSettings,
      getSettings
    }
  }, children);
};

/***/ }),

/***/ "./src/groups/Context/groupsStyles.context.js":
/*!****************************************************!*\
  !*** ./src/groups/Context/groupsStyles.context.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupsStylesProvider: () => (/* binding */ GroupsStylesProvider),
/* harmony export */   getGroupsStyles: () => (/* binding */ getGroupsStyles),
/* harmony export */   useGroupsStyles: () => (/* binding */ useGroupsStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const GroupsStylesContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useGroupsStyles = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(GroupsStylesContext);
const getGroupsStyles = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(GroupsStylesContext).getStyles();
const GroupsStylesProvider = ({
  children,
  initialStyles,
  setAttributes
}) => {
  const [styles, setStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialStyles);
  const updateStyles = newStyles => {
    setStyles(prevStyles => ({
      ...prevStyles,
      ...newStyles.groupsStyles
    }));
    setAttributes({
      groupsStyles: {
        ...styles,
        ...newStyles.groupsStyles
      }
    });
  };
  const getStyles = () => {
    return styles;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GroupsStylesContext.Provider, {
    value: {
      styles,
      updateStyles,
      getStyles
    }
  }, children);
};

/***/ }),

/***/ "./src/groups/components/BlockSettings.js":
/*!************************************************!*\
  !*** ./src/groups/components/BlockSettings.js ***!
  \************************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Context_groupsDetail_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/groupsDetail.context */ "./src/groups/Context/groupsDetail.context.js");
/* harmony import */ var _Context_groupsSettings_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/groupsSettings.context */ "./src/groups/Context/groupsSettings.context.js");






const BlockSettings = () => {
  const {
    settings,
    updateSettings
  } = (0,_Context_groupsSettings_context__WEBPACK_IMPORTED_MODULE_5__.useGroupsSettings)();
  const groupDetails = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Context_groupsDetail_context__WEBPACK_IMPORTED_MODULE_4__.GroupsDetailContext);
  const {
    totalPages
  } = groupDetails;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'groww-buddy'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'groww-buddy'),
    value: settings.search,
    onChange: value => updateSettings({
      groupsSettings: {
        ...settings,
        search: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type', 'groww-buddy'),
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select', 'groww-buddy')
    }, {
      value: 'newest',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Newest', 'groww-buddy')
    }, {
      value: 'popular',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Popular', 'groww-buddy')
    }, {
      value: 'active',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Active', 'groww-buddy')
    }, {
      value: 'alphabetical',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alphabetical', 'groww-buddy')
    }, {
      value: 'random',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Random', 'groww-buddy')
    }],
    defaultValue: "",
    onChange: value => updateSettings({
      groupsSettings: {
        ...settings,
        type: value
      }
    })
  })), settings.type === '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order', 'groww-buddy'),
    options: [{
      value: 'desc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Descending', 'groww-buddy')
    }, {
      value: 'asc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ascending', 'groww-buddy')
    }],
    onChange: value => updateSettings({
      groupsSettings: {
        ...settings,
        order: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order By', 'groww-buddy'),
    options: [{
      value: 'date_created',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date Created', 'groww-buddy')
    }, {
      value: 'id',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ID', 'groww-buddy')
    }, {
      value: 'name',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name', 'groww-buddy')
    }, {
      value: 'last_activity',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Last Activity', 'groww-buddy')
    }, {
      value: 'total_member_count',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Total Member Count', 'groww-buddy')
    }, {
      value: 'random',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Random', 'groww-buddy')
    }],
    onChange: value => updateSettings({
      groupsSettings: {
        ...settings,
        orderBy: value
      }
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Groups per page', 'groww-buddy'),
    type: "number",
    value: settings.perPage,
    onChange: value => updateSettings({
      groupsSettings: {
        ...settings,
        perPage: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Current Page', 'groww-buddy'),
    value: settings.currentPage,
    options: Array.from({
      length: totalPages
    }, (v, i) => ({
      value: i + 1,
      label: i + 1
    })),
    onChange: value => updateSettings({
      groupsSettings: {
        ...settings,
        currentPage: value
      }
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSettings);

/***/ }),

/***/ "./src/groups/components/BlockStyles.js":
/*!**********************************************!*\
  !*** ./src/groups/components/BlockStyles.js ***!
  \**********************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Context_groupsStyles_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/groupsStyles.context */ "./src/groups/Context/groupsStyles.context.js");






const BlockStyles = () => {
  const {
    styles,
    updateStyles
  } = (0,_Context_groupsStyles_context__WEBPACK_IMPORTED_MODULE_4__.useGroupsStyles)();
  const {
    groupsLayout
  } = styles;
  const handleGroupsLayoutChange = newLayout => {
    updateStyles({
      groupsStyles: {
        groupsLayout: newLayout ? 'grid' : 'list'
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "list-view",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Layout', 'GrowwBuddy'),
    onClick: () => handleGroupsLayoutChange(false),
    isPressed: groupsLayout === 'list'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "grid-view",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid Layout', 'GrowwBuddy'),
    onClick: () => handleGroupsLayoutChange(true),
    isPressed: groupsLayout === 'grid'
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockStyles);

/***/ }),

/***/ "./src/groups/components/Group.js":
/*!****************************************!*\
  !*** ./src/groups/components/Group.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_groupsStyles_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context/groupsStyles.context */ "./src/groups/Context/groupsStyles.context.js");


const Group = props => {
  const groupStyle = (0,_Context_groupsStyles_context__WEBPACK_IMPORTED_MODULE_1__.getGroupsStyles)();
  const {
    groupsLayout
  } = groupStyle;
  console.log(props.group);
  const {
    growwbuddy_data
  } = props.group;
  const groupStatusLabels = {
    public: 'Public',
    private: 'Private',
    hidden: 'Hidden'
  };
  const getGroupStatus = status => {
    return groupStatusLabels[status] || '';
  };
  const getGroupsMetas = group => {
    let metas = [];
    if (getGroupStatus(group.status)) {
      metas.push(getGroupStatus(group.status));
    }
    if (group.growwbuddy_data.last_activity) {
      metas.push(group.growwbuddy_data.last_activity);
    }
    if (group.members_count) {
      metas.push(group.members_count + ' Members');
    }
    return metas;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "groww-buddy-group-block-item"
  }, groupsLayout === 'grid' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "groww-buddy-group-block-item-cover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: props.group.cover_url,
    alt: props.group.name
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "groww-buddy-group-block-item-avatar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: props.group.avatar_urls.thumb,
    alt: props.group.name
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "groww-buddy-group-block-item-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "groww-buddy-group-block-item-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "javascript:void(0);",
    "data-href": props.group.link
  }, props.group.name)), groupsLayout === 'list' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "groww-buddy-group-block-item-description"
  }, growwbuddy_data.description), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "groww-buddy-group-block-item-meta"
  }, getGroupsMetas(props.group).length > 0 && getGroupsMetas(props.group).map((meta, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    key: index,
    className: `groww-buddy-group-block-item-meta-item${meta.toLowerCase().replace(' ', '-')}`
  }, meta, " "))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "groww-buddy-group-block-item-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "javascript:void(0);",
    "data-href": props.group.link,
    className: "groww-buddy-group-block-item-link"
  }, "View Group"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);

/***/ }),

/***/ "./src/groups/components/Groups.js":
/*!*****************************************!*\
  !*** ./src/groups/components/Groups.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Group */ "./src/groups/components/Group.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context_groupsDetail_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/groupsDetail.context */ "./src/groups/Context/groupsDetail.context.js");






const Groups = () => {
  const groupDetails = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Context_groupsDetail_context__WEBPACK_IMPORTED_MODULE_5__.GroupsDetailContext);
  const {
    groups,
    isLoading,
    totalGroups
  } = groupDetails;
  if (isLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "groww-buddy-group-block-loading"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loading...', 'groww-buddy'));
  }
  const hasGroups = groups && groups.length > 0;
  if (!hasGroups) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "groww-buddy-group-block-loading"
    }, totalGroups > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No group found.', 'groww-buddy'));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, groups.map((group, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Group__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      group: group
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Groups);

/***/ }),

/***/ "./src/groups/edit.js":
/*!****************************!*\
  !*** ./src/groups/edit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/groups/editor.scss");
/* harmony import */ var _components_Groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Groups */ "./src/groups/components/Groups.js");
/* harmony import */ var _components_BlockSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BlockSettings */ "./src/groups/components/BlockSettings.js");
/* harmony import */ var _Context_groupsDetail_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Context/groupsDetail.context */ "./src/groups/Context/groupsDetail.context.js");
/* harmony import */ var _Context_groupsSettings_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Context/groupsSettings.context */ "./src/groups/Context/groupsSettings.context.js");
/* harmony import */ var _Context_groupsStyles_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context/groupsStyles.context */ "./src/groups/Context/groupsStyles.context.js");
/* harmony import */ var _components_BlockStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BlockStyles */ "./src/groups/components/BlockStyles.js");



// Import CSS.


// Load components.






function Edit({
  attributes,
  setAttributes
}) {
  const {
    groupsLayout
  } = attributes.groupsStyles;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'groww-buddy-groups-blocks ' + (groupsLayout === 'grid' ? 'groww-buddy-groups-blocks--grid' : 'groww-buddy-groups-blocks--list')
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Context_groupsSettings_context__WEBPACK_IMPORTED_MODULE_6__.GroupsSettingsProvider, {
    initialSettings: attributes.groupsSettings,
    setAttributes: setAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Context_groupsStyles_context__WEBPACK_IMPORTED_MODULE_7__.GroupsStylesProvider, {
    initialStyles: attributes.groupsStyles,
    setAttributes: setAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Context_groupsDetail_context__WEBPACK_IMPORTED_MODULE_5__.GroupsDetailProvider, {
    setAttributes: setAttributes,
    attributes: attributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockSettings__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockStyles__WEBPACK_IMPORTED_MODULE_8__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Groups__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/groups/index.js":
/*!*****************************!*\
  !*** ./src/groups/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/groups/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/groups/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/groups/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/groups/save.js");


// import styles.




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  title: _block_json__WEBPACK_IMPORTED_MODULE_2__.title,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/groups/save.js":
/*!****************************!*\
  !*** ./src/groups/save.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(),
    "data-attributes": JSON.stringify(attributes)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group-buddy-groups-placeholder"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loading groups...', 'GrowwBuddy'))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/groups/editor.scss":
/*!********************************!*\
  !*** ./src/groups/editor.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/groups/style.scss":
/*!*******************************!*\
  !*** ./src/groups/style.scss ***!
  \*******************************/
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

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./src/groups/block.json":
/*!*******************************!*\
  !*** ./src/groups/block.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"groww-buddy/groups","version":"1.0.0","title":"Groups","description":"A block to display BuddyBoss groups.","category":"growwbuddy","icon":"groups","keywords":["buddyboss","groww-buddy","groups"],"textdomain":"GrowwBuddy","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./view.js","style":"file:./style-index.css","render":"file:./render.php","example":{},"attributes":{"groupsStyles":{"type":"object","default":{"groupsLayout":"grid"}},"groupsSettings":{"type":"object","default":{"search":"","perPage":10,"currentPage":1,"order":"desc","orderBy":"date_created","type":""}}},"supports":{"align":true,"ariaLabel":true,"anchor":true,"html":false,"reusable":false,"spacing":{"padding":true,"margin":true},"dimensions":{"width":true,"height":true},"responsive":true,"typography":{"lineHeight":true},"color":{"gradients":true,"link":true},"background":{"color":true,"gradients":true}}}');

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
/******/ 			"groups/index": 0,
/******/ 			"groups/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["groups/style-index"], () => (__webpack_require__("./src/groups/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map