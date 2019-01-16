function sortedScoreBoard(obj) {
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); 
	
	sortable.sort(function(a, b)
	{
		var x=parseInt(a[1]),
			y=parseInt(b[1]);
		return x<y ? -1 : x>y ? 1 : 0;
	});
	return sortable.reverse(); 
}

export default sortedScoreBoard;