function sortedScoreBoard(obj)
{
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); 
	
	sortable.sort(function(a, b)
	{
		var x=a[1].toLowerCase(),
			y=b[1].toLowerCase();
		return x<y ? -1 : x>y ? 1 : 0;
	});
	return sortable; 
}

export default sortedScoreBoard;