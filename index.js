window.jsPDF = window.jspdf.jsPDF;

$(function () {
  const dataGrid = $("#dataGrid")
    .dxDataGrid({
      dataSource: gridData,
      keyExpr: "ID",
      columnAutoWidth: true,
      columnFixing: {
        enabled: true,
      },
      columns: [
        "PLANNING_MONTH",
        "TERMINAL_ID",
        "LOCK_NOMINATION",
        "NOMINATION_DATE",
        "OPENING_INVENTORY_PROPANE",
        "OPENING_INVENTORY_BUTANE",
        "TERMINAL_AVAILS_PROPANE",
        "TERMINAL_AVAILS_BUTANE",
        "MIN_SAFE_INVENTORY_PROPANE",
        "MIN_SAFE_INVENTORY_BUTANE",
        "MAX_SAFE_INVENTORY_PROPANE",
        "MAX_SAFE_INVENTORY_BUTANE",
        "CUSTOMER_ID",
        "CUSTOMER_NAME",
        "NOMINATION_TEMP_KEY",
        "CUSTOMER_LIFTING_PROPANE",
        "CUSTOMER_LIFTING_BUTANE",
        "SCENARIO_PLANNING_VERSION",
        "SCENARIO_PLANNING_SUB_VERSION",
        "PLAN_CYCLE_CLICK_VERSION",
        "CHANGED_NOMINATION_DATE",
        "CREATED_BY",
        "CREATED_DTTM",
        "UPDATED_BY",
        "UPDATED_DTTM",
        "BUSINESS_UNIT",
        "ROW_COUNT",
        "ROW_ORDER",
        "PROPANE",
        "BUTANE",
        {
          dataField: "REGION",
          groupIndex: 0,
        },
      ],
      filterRow: { visible: true },
      searchPanel: { visible: true },
      groupPanel: { visible: true },
      summary: {
        groupItems: [
          {
            summaryType: "count",
          },
        ],
      },
      rowDragging: {
        allowReordering: true,
        onReorder: function (e) {
          const visibleRows = e.component.getVisibleRows();
          const sourceRowData = e.itemData;
          const targetRowData = visibleRows[e.toIndex].data;

          // Perform necessary actions when a row is reordered
          // For example, update the gridData or trigger an API call
          console.log("Reorder", sourceRowData, targetRowData);
        },
      },
    })
    .dxDataGrid("instance");

  $("#autoExpand").dxCheckBox({
    value: true,
    text: "Expand All Groups",
    onValueChanged(data) {
      dataGrid.option("grouping.autoExpandAll", data.value);
    },
  });
});
