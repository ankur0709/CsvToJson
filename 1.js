    var count = 0;
	let literate=[]; ///array for literate
	let age1=[]; //array for age
	let census = {}; //object f=in which values will be inserted
	const readline = require('readline')
	const fs = require('fs')
	const rl = readline.createInterface({
	  input: fs.createReadStream('save.csv','utf-8')
	})
	let myWriteStream = fs.createWriteStream('Json1.json')
	rl.on('line', (line) => {
		count++;
		if(count!=1)
		{
		line
		.split('\n')
		let arr = line.split(',');

            if(arr[5]!='All ages') {
			let age=arr[5];
			let val=parseInt(arr[12]);
			let a=age1.indexOf(age); //a takes the index of age
			
			if(a>=0)
			{
				literate[a]+=val;
			}else
			{
				age1.push(age);
				literate.push(val);
			}
          }
         }
        });
      rl.on('close', function(){
        for(i=0;i<age1.length;i++)
           {
		    census[age1[i]] = census[age1[i]] || [];
	            census[age1[i]].push({
	                    "Literate " : literate[i]
	                    }) 
 }
myWriteStream.write(JSON.stringify(census,null,3));
    });