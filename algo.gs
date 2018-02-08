
function getAllClassesAndProcess(datesAndDays, allClasses) {
	var result;
	var chartData = [];
    var days = datesAndDays[2]
		getOngoingClassData(function(originalData) {
			filterByDays(originalData, days, function(refinedByDayData) {              
				getAllActionData(datesAndDays, function(data) {                 
					result = devideClassDataByCenter(data, refinedByDayData);
				})
			})
		})
	for (var i in result[0]) {
		var obj = {};
		obj.name = i
		obj.data = result[0][i].data
		chartData.push(obj)
	}

	return [chartData,result[1]]
    
}

 var extractProgrammeLevels = {
   'jumpstart-levels': {'levels': ['L3','L4','L5','L6','L7','L8','L9','L10','L11'], },
   'superjunior-levels': {'levels': ['J1A','J1B','J2A','J2B','J3A','J3B','J4A','J4B','J5A','J5B','J6A','J6B','J7A','J7B','J8A','J8B'], 'color':'orange'},
   'smartteen-levels':{'levels': ['S1A','S1B','S2A','S2B','S3A','S3B','S4A','S4B','S5A','J5B','S5C','S6A','S6B','S6C','S7A','S7B','S7C','S8A','S8B','S8C'], 'color':'lightgreen'},   
 }
 
function extractLevel(classcode){
   if(classcode.indexOf("Y") >=0){
     var start = classcode.indexOf('Y');
     var finish = classcode.lastIndexOf('-')
     var level = classcode.substring(start+1,finish).replace("-","").replace("K","")
     return level;
   } else {

   return undefined
   } 
 }

function devideClassDataByCenter(data, refinedByDayData) {
     var ss = SpreadsheetApp.openById(ALL_REMINDER_DATA);
   var sheet = ss.getSheetByName('Sheet1')
	var centerListing = {}
	for (var i in centersList) {
		centerListing[i] = {
			'didntOpenApp': {},
			'didntAddReminderTemplate': {},
			'didntAddStandardContent': {},
            'total': {}
		};
	}
	var result = {}
	for (var x in centersList) {
		result[x] = {
			'data': [0, 0, 0, 0]
		}
	}
	for (var i in refinedByDayData) {
		if (i !== 'lng') {
            
			var classCode = refinedByDayData[i][2].toString()
            
			var center = refinedByDayData[i][1]
            if(center === 'TC-DN1'){
              Logger.log(classCode)
            }
            var level = extractLevel(classCode)
            result[center].data[0] += 1			
			if (data.OpenedApp[classCode] === undefined) {
                   result[center].data[1] += 1              
				if (centerListing[center].didntOpenApp[level] === undefined && level !== undefined) {
					centerListing[center].didntOpenApp[level] = 1
				} else if (level !== undefined) {
					centerListing[center].didntOpenApp[level] += 1;
				}
			}
			if (data.AddedReminderTemplate[classCode] === undefined) {
                   result[center].data[2] += 1
				if (centerListing[center].didntAddReminderTemplate[level] === undefined && level !== undefined) {
					centerListing[center].didntAddReminderTemplate[level] = 1
                    
				} else if (level !== undefined) {
					centerListing[center].didntAddReminderTemplate[level] += 1;
				}
			}
			if (data.AddedStandardContent[classCode] === undefined) {
                    result[center].data[3] += 1
				if (centerListing[center].didntAddStandardContent[level] === undefined && level !== undefined) {
					centerListing[center].didntAddStandardContent[level] = 1
				} else if (level !== undefined) {
					centerListing[center].didntAddStandardContent[level] += 1;
				}
			}
            if (centerListing[center].total[level] === undefined && level !== undefined) {
					centerListing[center].total[level] = 1
				} else if (level !== undefined) {
					centerListing[center].total[level] += 1;
				}
			
		}
	}

	return [result,centerListing];
}