//	/d2bs/kolbot/libs/config/Builds/Class.Build.js

/**
*
* Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
*
* Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
* Stat IDs:
*
* 	Strength	= 0
* 	Energy		= 1
* 	Dexterity	= 2
* 	Vitality	=
*
*/
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };

var AutoBuildTemplate = {

	1:	{
			//SkillPoints: [-1],								// This doesn't matter. We don't have skill points to spend at lvl 1
			//StatPoints: [-1,-1,-1,-1,-1],						// This doesn't matter. We don't have stat points to spend at lvl 1
			Update: function () {
				Config.AttackSkill = [0,0,0,0,0,0,0];
				Config.LowManaSkill = [0,-1];

				Scripts.ClearAnyArea = true;							// We are only level 1 so we will start by clearing Blood Moor
					Config.ClearAnyArea.AreaList = [2, 8, 3, 17, 18, 19, 4, 10, 14, 5, 6, 7, 27 ];
				Config.ClearType = 0; 									// Monster spectype to kill in level clear scripts (0 = all)

				// Config.PickitFiles.push("level/1.nip");				// File "level/1.nip" is not included, it's just an example.

				Config.OpenChests		= true; 						// Open chests. Controls key buying.
				Config.LogExperience	= true; 						// Print experience statistics in the manager.
				Config.StashGold 		= 200;							// Minimum amount of gold to stash.
				Config.ScanShrines		= [15, 13, 12, 14, 7, 6, 2];
				Config.BeltColumn		= ["hp", "hp", "hp", "mp"];		// Keep tons of health potions!
			}
		},

	2:	{
			SkillPoints: [70], //raise skele
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	3:	{
			SkillPoints: [67], //teeth
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.AttackSkill = [-1,67,-1,67,-1,-1,-1];
				Config.LowManaSkill = [0,0];
				Config.ClearAnyArea.AreaList = [3, 17, 18, 19, 4, 10, 14, 5, 6, 7, 27 ];
			}
		},

	4:	{
			SkillPoints: [66], //ampdamage
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	5:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	6:	{
			SkillPoints: [74],
			StatPoints: [2,2,2,2,2],
			Update: function () {
				Config.ExplodeCorpses = 74;
				Config.ClearAnyArea.AreaList = [4, 10, 14, 5, 6, 7, 27 ];
			}
		},

	7:	{
			SkillPoints: [70],
			StatPoints: [2,2,2,2,2],
			Update: function () {
			}
		},

	8:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.ClearAnyArea.AreaList = [5, 6, 7, 27 ];
			}
		},

	9:	{
			SkillPoints: [70],
			StatPoints: [0,0,0,0,0],
			Update: function () {
				// Scripts.Countess = true;
			}
		},

	10:	{
			SkillPoints: [70],
			StatPoints: [0,0,0,0,0],
			Update: function () {
			}
		},

	11:	{
			SkillPoints: [69], //skele mastery
			StatPoints: [0,0,0,0,0],
			Update: function () {
			}
		},

	12:	{
			SkillPoints: [68], //bonearmor
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.ClearAnyArea.AreaList = [5, 6, 7, 27, 28, 29, 30, 31, 32, 33];
				// Scripts.Tristram = true;
			}
		},

	13:	{
			SkillPoints: [75], //golem
			StatPoints: [3,3,3,3,3],
			Update: function () {
			Config.Golem = "Clay";
			}
		},

	14:	{
			SkillPoints: [80], // mage
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.SkeletonMages = max;
			}
		},

	15:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.ClearAnyArea.AreaList = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
			}
		},

	16:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.AttackSkill = [107,97,98,0,98,0,0];
				Config.LowManaSkill = [0,108];
			}
		},

	17:	{
			SkillPoints: [80], // blessed aim
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.ClearAnyArea.AreaList = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
			}
		},

	18:	{
			SkillPoints: [80], // concentration
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.ClearAnyArea.AreaList = [34, 35, 36, 37, 47, 48, 49];
				Scripts.Andariel = true;
			}
		},

	19:	{
			SkillPoints: [70], // blessed hammer
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.AttackSkill = [-1,112,113,112,113,101,-1];
				Config.LowManaSkill = [0,112];
			}
		},

	20:	{
			SkillPoints: [70], // vigor
			StatPoints: [3,3,3,3,3],
			Update: function () {
				Config.Vigor = true; // Swith to Vigor when running
				Config.ClearAnyArea.AreaList = [34, 35, 36, 37, 47, 48, 49, 41, 42, 43, 44, 45];
			}
		},

	21:	{
			SkillPoints: [70], // conc blessed
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	22:	{
			SkillPoints: [70], // conc blessed
			StatPoints: [0,0,0,0,0],
			Update: function () {
			}
		},

	23:	{
			SkillPoints: [70], // conc blessed
			StatPoints: [0,0,0,0,0],
			Update: function () {
			}
		},

	24:	{
			SkillPoints: [70], // holy shield
			StatPoints: [0,0,0,0,0],
			Update: function () {
				Config.AttackSkill = [-1,112,113,112,113,101,-1];
				Config.LowManaSkill = [-1,112];
			}
		},

	25:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	26:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	27:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	28:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	29:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	30:	{
			SkillPoints: [70],
			StatPoints: [0,0,0,0,0],
			Update: function () {


			}
		},

	31:	{
			SkillPoints: [70],
			StatPoints: [0,0,0,0,0],
			Update: function () {


			}
		},

	32:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	33:	{
			SkillPoints: [70],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	34:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	35:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	36:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	37:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	38:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	39:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	40:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	41:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	42:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	43:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	44:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	45:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	46:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	47:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	48:	{
			SkillPoints: [80],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	49:	{
			SkillPoints: [112],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	50:	{
			SkillPoints: [113],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	51:	{
			SkillPoints: [112],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	52:	{
			SkillPoints: [113],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	53:	{
			SkillPoints: [112],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	54:	{
			SkillPoints: [113],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	55:	{
			SkillPoints: [112],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	56:	{
			SkillPoints: [113],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	57:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	58:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	59:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	60:	{
			SkillPoints: [115],
			StatPoints: [0,0,0,0,0],
			Update: function () {
			}
		},

	61:	{
			SkillPoints: [115],
			StatPoints: [0,0,0,0,0],
			Update: function () {
			}
		},

	62:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	63:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	64:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	65:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	66:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	67:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	68:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	69:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {

			}
		},

	70:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {
			}
		},

	71:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {


			}
		},

	72:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {

			}
		},

	73:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {

			}
		},

	74:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {

			}
		},

	75:	{
			SkillPoints: [115],
			StatPoints: [3,3,3,3,3],
			Update: function () {

			}
		},

	76:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	77:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	78:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	79:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	80:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	81:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	82:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	83:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	84:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	85:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	86:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	87:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	88:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	89:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	90:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	91:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	92:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	93:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	94:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	95:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	96:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	97:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	98:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		},

	99:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {

			}
		}
};
