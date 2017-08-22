	let count = 0;
	let literate=[]; ///array for literate
	let age1=[]; //array for age
	let census = {}; //object in which values will be inserted
	let arr2=[],arr3=[];
	let state1=[];
	let i=0;      
	let female1=[];
	let male1=[];			
	let employee = {};	 
	let state3=[];
	let edu=[];
	let j=0,val1=0,val2=0,val3=0,val4=0,val5=0,val6=0,val7=0,val8=0,val9=0,val10=0;        
	let LiterateWithoutEducation1=[];
	let BelowPrimary1=[];
	let Primary1=[];
	let Middle1=[];
	let MatricOrSecondary1=[];
	let HigherSecondaryOrUniversity1=[];
	let NonTechnical1=[];
	let Technical1=[];
	let GraduateAndAbove1=[];
	let UnClassified1=[];
	const readline = require('readline')
	const fs = require('fs')
	const rl = readline.createInterface({
		input: fs.createReadStream('save.csv','utf-8')
	})
	let myWriteStream = fs.createWriteStream('Json1.json')
	let myWriteStream2 = fs.createWriteStream('Json2.json')
	let myWriteStream3 = fs.createWriteStream('Json3.json')
	rl.on('line', (line) => {
		count++;
		if(count!=1)
		{
			line
			.split('\n')
			{
				let arr2 = line.split(',');				
				if(i!=0)	{
					let male=arr2[40];
					let female=arr2[41];
					let state=arr2[3];
					let total=arr2[4];
					let age=arr2[5];
					if(total=="Total"&&age=="All ages")	{
						state1.push(state);
						female1.push(female);
						male1.push(male);
					}
				}i++;}		
				let arr = line.split(',');
				if(arr[5]!='All ages') {
					let age=arr[5];
					let val=parseInt(arr[12]);
						let a=age1.indexOf(age); //a takes the index of age
						
						if(a>=0)
						{
							literate[a]+=val;
						}else{
							age1.push(age);
							literate.push(val);
						} } 	       
						let arr3 = line.split(',');
						if(j!=0){
							let state=arr3[3];
							let total=arr3[4];
							let age=arr3[5];				
							let LiterateWithoutEducation=parseInt(arr3[15]);
							let BelowPrimary=parseInt(arr3[18]);
							let Primary=parseInt(arr3[21]);
							let Middle=parseInt(arr3[24]);
							let MatricOrSecondary=parseInt(arr3[27]);
							let HigherSecondaryOrUniversity=parseInt(arr3[30]);
							let NonTechnical=parseInt(arr3[33]);
							let Technical=parseInt(arr3[36]);
							let GraduateAndAbove=parseInt(arr3[39]);
							let UnClassified=parseInt(arr3[42]);				
							if(total=="Total"&&age=="All ages")
							{
								state3.push(state);
								LiterateWithoutEducation1.push(LiterateWithoutEducation);
								BelowPrimary1.push(BelowPrimary);
								Primary1.push(Primary);
								Middle1.push(Middle);
								MatricOrSecondary1.push(MatricOrSecondary);
								HigherSecondaryOrUniversity1.push(HigherSecondaryOrUniversity);
								NonTechnical1.push(NonTechnical);
								Technical1.push(Technical);
								GraduateAndAbove1.push(GraduateAndAbove);
								UnClassified1.push(UnClassified);
							}
						}j++; }
					});
	rl.on('close', function()
	{
		for(i=0;i<age1.length;i++) {
			census[age1[i]] = census[age1[i]] || [];
			census[age1[i]].push({
				"Literate" : literate[i]
			})  }
			for(i in state1){
				employee[state1[i]] = employee[state1[i]] || [];
				employee[state1[i]].push({
					"Male_Graduate": male1[i],
					"Female_Graduate": female1[i]
				})	}
				for(j in state3) {
					val1=val1+LiterateWithoutEducation1[j];
					val2=val2+BelowPrimary1[j];
					val3=val3+Primary1[j];
					val4=val4+Middle1[j];
					val5=val5+MatricOrSecondary1[j];
					val6=val6+HigherSecondaryOrUniversity1[j];
					val7=val7+NonTechnical1[j];
					val8=val8+Technical1[j];
					val9=val9+GraduateAndAbove1[j];
					val10=val10+UnClassified1[j];
				}
				edu.push({  
					"LiterateWithoutEducation": val1,
					"BelowPrimary": val2,
					"Primary": val3,
					"Middle": val4,
					"MatricOrSecondary": val5,
					"HigherSecondaryOrUniversity": val6,
					"NonTechnical": val7,
					"Technical": val8,
					"GraduateAndAbove": val9,
					"UnClassified": val10		
				});
				myWriteStream.write(JSON.stringify(census,null,3));
				myWriteStream2.write(JSON.stringify(employee,null,3));
				myWriteStream3.write(JSON.stringify(edu,null,11));

			});
