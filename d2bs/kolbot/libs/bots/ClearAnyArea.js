/**
*	@filename	ClearAnyArea.js
*	@author		kolton
*	@desc		Clears any area
*/

function ClearAnyArea() {
	var i;

	Town.doChores();

	for (i = 0; i < Config.ClearAnyArea.AreaList.length; i += 1) {
		say('now i clear area ' + Config.ClearAnyArea.AreaList[i])
		if (Pather.journeyTo(Config.ClearAnyArea.AreaList[i])) {
			say('arrived in area ' + Config.ClearAnyArea.AreaList[i] + ' - kill all monsters here')
			Attack.clearLevel(Config.ClearType);
		}
	}

	return true;
}
