        let arr =[];
        let state1=[];
        let i=0;        
		let female1=[];
		var male1=[];
		
        let employee = {};
        const readline = require('readline')
        const fs = require('fs')
        const rl = readline.createInterface({
          input: fs.createReadStream('save.csv','utf-8')
      })
        let myWriteStream = fs.createWriteStream('Json2.json')
        rl.on('line', (line) => {
            line
            .split('\n')

            var arr = line.split(',');
			if(i!=0){
				let male=arr[40];
				let female=arr[41];
				let state=arr[3];
				let total=arr[4];
				let age=arr[5];
				if(total=="Total"&&age=="All ages")
				{
					state1.push(state);
					female1.push(female);
					male1.push(male);
				}
		}i++;}
                    );
        rl.on('close', function(){
			for(i in state1){
			employee[state1[i]] = employee[state1[i]] || [];
                employee[state1[i]].push({
                    "Male Graduate": male1[i],
                    "Female Graduate": female1[i]
				})
			}
					
        myWriteStream.write(JSON.stringify(employee,null,3));
         });
