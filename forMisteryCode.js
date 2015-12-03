$('table').each(function() {
	var tableRows = $(this).find('tr');
	var tableHeads = $(this).find('th');
		// 每个td添加顺序、列属性，绑定click事假
		tableHeads.each(function() {
			$(this).attr({order: 'descend', col: tableHeads.index($(this))}).bind('click', function() {
				tableSort(tableRows, this);
			});
		});
	});
function tableSort(tableRows, tableHead) {
	var order = tableHead.getAttribute("order");
	var col = tableHead.getAttribute("col");
	// 创建用于排序的临时数组
	var tempArr = [];
	for (var i = 1; i < tableRows.length; i++)
		tempArr.push(tableRows[i]);

	// 	排序并修改order属性
	tempArr.sort(function(rowA, rowB) {
		var a = rowA.cells[col].innerHTML;
		var b = rowB.cells[col].innerHTML;
		if (order == "ascend") {
			tableHead.setAttribute("order", "descend");
			return a < b;
		}
		else {
			tableHead.setAttribute("order", "ascend");
			return a > b;
		}
	});

	// 按照排序结果修改排列
	for(var i = 0; i < tableRows.length-1; i++)
		tempArr[i] = tempArr[i].innerHTML;
	for(var i = 1; i < tableRows.length; i++)
		tableRows[i].innerHTML = tempArr[i - 1];
}
