let count = 0,literate=[],age1=[],census = []; //Empty arrays for first json
let arr2=[],state1=[],i=0,Female1=[],Male1=[],employee = [];//Empty arrays for second json
let arr3=[],state3=[],edu=[]; //empty arrays for third json
let j=0,val1=0,val2=0,val3=0,val4=0,val5=0,val6=0,val7=0,val8=0,val9=0,val10=0;        
let LiterateWithoutEducation1=[], BelowPrimary1=[];
let Primary1=[], Middle1=[];  MatricOrSecondary1=[];
let HigherSecondaryOrUniversity1=[]; NonTechnical1=[];
let Technical1=[];  GraduateAndAbove1=[];
let UnClassified1=[]; let array3=[];
const readline = require('readline')   //read line by line
const fs = require('fs')  //imports the file system
const rl = readline.createInterface({    //rl is a variable 
	input: fs.createReadStream('../csv/Census.csv','utf-8') //reads file chunk by chunk
})
let myWriteStream =  fs.createWriteStream('../json/Agewise.json')//writestream for first json
let myWriteStream2 = fs.createWriteStream('../json/Statewise.json')//writestream for second json
let myWriteStream3 = fs.createWriteStream('../json/Categorywise.json')//writestream for third json
rl.on('line', (line) => {
	count++;
	if(count!=1)//Does not takes the heading line
			{
		line
		.split('\n')
		{
			let arr2 = line.split(',');		//creating an array and splitting it according to comma		
			if(i!=0)	{
				let Male=parseInt(arr2[40]); let Female=parseInt(arr2[41]);					
				let state=arr2[3]; let total=arr2[4];					
				let age=arr2[5];
				if(total=="Total"&&age=="All ages")	{
					state1.push(state);
					Female1.push(Female);
					Male1.push(Male);	}
			}i++;}		
			let arr = line.split(',');
			if(arr[5]!='All ages') {
				let age=arr[5];
				let val=parseInt(arr[12]);
					let a=age1.indexOf(age); //a takes the index of age						
					if(a>=0)  {
						literate[a]+=val;
					}else{
						age1.push(age);
						literate.push(val);
					} } 	       
					let arr3 = line.split(',');
					if(j!=0){
						let state=arr3[3], total=arr3[4];
						let age=arr3[5];				
						let LiterateWithoutEducation=parseInt(arr3[15]);
						let BelowPrimary=parseInt(arr3[18]); //finds people below primary
						let Primary=parseInt(arr3[21]);//finds people in  primary
						let Middle=parseInt(arr3[24]); //finds people in middle
						let MatricOrSecondary=parseInt(arr3[27]);
						let HigherSecondaryOrUniversity=parseInt(arr3[30]);
						let NonTechnical=parseInt(arr3[33]);
						let Technical=parseInt(arr3[36]);
						let GraduateAndAbove=parseInt(arr3[39]);
						let UnClassified=parseInt(arr3[42]);				
						if(total=="Total"&&age=="All ages")	{
							state3.push(state);
							LiterateWithoutEducation1.push(LiterateWithoutEducation);
							BelowPrimary1.push(BelowPrimary);
							Primary1.push(Primary);	Middle1.push(Middle);
							MatricOrSecondary1.push(MatricOrSecondary);
							HigherSecondaryOrUniversity1.push(HigherSecondaryOrUniversity);
							NonTechnical1.push(NonTechnical);	Technical1.push(Technical);
							GraduateAndAbove1.push(GraduateAndAbove);
							UnClassified1.push(UnClassified);
						}
					}j++ }
				});
rl.on('close', ()=>
{
	for(i in age1) {  
	  //Age is the object in which literate property is stored
		census.push({ 
		"age" : age1[i], //Pushing values/properties for literates
			"Literate" : literate[i]
		})  }
	 for(i in state1){
			employee.push({
				"state":state1[i],
				"Male": Male1[i],
				"Female": Female1[i]
			})	}
			let key=["LiterateWithoutEducation","BelowPrimary","Primary","Middle","MatricOrSecondary","HigherSecondaryOrUniversity","NonTechnical","Technical","GraduateAndAbove","UnClassified"];
			 for(j in state3)  {
				val1+=LiterateWithoutEducation1[j];	val2+=BelowPrimary1[j];
				val3+=Primary1[j];					val4+=Middle1[j];
				val5+=MatricOrSecondary1[j];		val6+=HigherSecondaryOrUniversity1[j];
				val7+=NonTechnical1[j];				val8+=Technical1[j];
				val9+=GraduateAndAbove1[j];
				val10+=UnClassified1[j];
			}	
			array3.push(val1,val2,val3,val4,val5,val6,val7,val8,val9,val10);
			for( let k=0;k<10;k++)	{
			edu.push({
				"Category":key[k],
				"Persons":array3[k]
			})	
			}		
			myWriteStream.write(JSON.stringify(census,null,3));
			myWriteStream2.write(JSON.stringify(employee,null,3));
			myWriteStream3.write(JSON.stringify(edu,null,11));
		});
