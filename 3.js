        let arr =[];
        let state1=[];
		let emp=[];
        let i=0,val1=0,val2=0,val3=0,val4=0,val5=0,val6=0,val7=0,val8=0,val9=0,val10=0;        
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
		
		
        let employee = {};
        const readline = require('readline')
        const fs = require('fs')
        const rl = readline.createInterface({
          input: fs.createReadStream('save.csv','utf-8')
      })
        let myWriteStream = fs.createWriteStream('Json3.json')
        rl.on('line', (line) => {
            line
            .split('\n')

            var arr = line.split(',');
			if(i!=0){
				let state=arr[3];
				let total=arr[4];
				let age=arr[5];
				
				let LiterateWithoutEducation=parseInt(arr[15]);
		        let BelowPrimary=parseInt(arr[18]);
		        let Primary=parseInt(arr[21]);
	         	let Middle=parseInt(arr[24]);
		        let MatricOrSecondary=parseInt(arr[27]);
		        let HigherSecondaryOrUniversity=parseInt(arr[30]);
		        let NonTechnical=parseInt(arr[33]);
		        let Technical=parseInt(arr[36]);
		        let GraduateAndAbove=parseInt(arr[39]);
		        let UnClassified=parseInt(arr[42]);
				
				if(total=="Total"&&age=="All ages")
				{
					state1.push(state);
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
		}i++;}
                    );
        rl.on('close', function(){
			for(i in state1)
			{
				val1=val1+LiterateWithoutEducation1[i];
				val2=val2+BelowPrimary1[i];
				val3=val3+Primary1[i];
				val4=val4+Middle1[i];
				val5=val5+MatricOrSecondary1[i];
				val6=val6+HigherSecondaryOrUniversity1[i];
				val7=val7+NonTechnical1[i];
				val8=val8+Technical1[i];
				val9=val9+GraduateAndAbove1[i];
				val10=val10+UnClassified1[i];
				
			}
			
			emp.push({  
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
			
					
        myWriteStream.write(JSON.stringify(emp,null,11));
         });
