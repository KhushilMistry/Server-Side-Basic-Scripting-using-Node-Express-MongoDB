var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		unique:true,
		required:true,
		index:true
	},
	adress:
	{
		wing:{
			type:String,
			required:true
		},
		room:{
			type:String,
			required:true
		},
		HOR:{
			type:String,
			required:true
		}

	},
	college:{
		type:String,
		default:'DA-IICT'
	},
	skills:{
		intrestAreas:{
			type:[String],
			required:true
		},
		programmingLang:{
			type:[String],
			required:true
		},
		ToolsandTech:{
			type:[String],
			required:true
		},
		Electives:{
			type:[String],
		}
	},

	internship:{
		Rural:{
			name:{
				type:String
			},
			guideName:{
				type:String
			},
			description:{
				type:String,
				maxlength:50
			},
			teamSize:{
				type:Number
			}
		}
	},
	projects:{
		type:String,
		required:true
	},

	positionOfRes:{
		type:String,
		required:true
	},

	awardsAndAchive:{
		type:[String],
		required:true
	},

	intrestsAndHobby:{
		type:[String],
		required:true
	}


});

module.exports=mongoose.model('Place',UserSchema);