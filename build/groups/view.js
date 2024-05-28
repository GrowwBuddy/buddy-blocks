/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/groups/view.js ***!
  \****************************/
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.wp-block-groww-buddy-groups');
  elements.forEach(element => {
    const attributes = JSON.parse(element.getAttribute('data-attributes'));
    const fetchGroups = async () => {
      try {
        const {
          search,
          perPage,
          currentPage,
          order,
          orderBy,
          type
        } = attributes.groupsSettings;
        const queryParams = new URLSearchParams({
          per_page: perPage,
          page: currentPage,
          orderby: orderBy,
          order: order,
          ...(type && {
            type
          }),
          ...(search && {
            search
          })
        });
        const response = await fetch(`/wp-json/buddyboss/v1/groups?${queryParams.toString()}`, {
          headers: {
            'X-WP-Nonce': GrowwBuddyData.nonce
          }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const groups = await response.json();
        const totalPages = response.headers.get('X-WP-TotalPages');
        const totalGroups = response.headers.get('X-WP-Total');
        element.innerHTML = ''; // Clear the placeholder content

        if (groups.length > 0) {
          const groupList = document.createElement('div');
          groupList.classList.add('group-list');
          groups.forEach(group => {
            const metas = [];
            const groupStatusLabels = {
              public: 'Public',
              private: 'Private',
              hidden: 'Hidden'
            };
            const getGroupStatus = status => groupStatusLabels[status] || '';
            if (getGroupStatus(group.status)) {
              metas.push(getGroupStatus(group.status));
            }
            if (group.growwbuddy_data.last_activity) {
              metas.push(group.growwbuddy_data.last_activity);
            }
            if (group.members_count) {
              metas.push(`${group.members_count} Members`);
            }
            const tmpl = wp.template('groww-buddy-group-item');
            const groupHtml = tmpl({
              group,
              groupsLayout: attributes.groupsStyles.groupsLayout,
              metas
            });
            const groupElement = document.createElement('div');
            groupElement.innerHTML = groupHtml;
            groupList.appendChild(groupElement.firstChild);
          });
          element.appendChild(groupList);
        } else {
          element.innerHTML = '<p>No groups found.</p>';
        }
      } catch (error) {
        console.error('Error fetching groups:', error);
        element.innerHTML = '<p>Error loading groups.</p>';
      }
    };
    fetchGroups();
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map