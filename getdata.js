async function getData() {

    const response = await fetch('sample_fitdata.csv');

    const data = await response.text();
    //console.log(data);
        const calburnt = [];
        const stepstaken = [];
        const distscore  = [];
        const heartrate  = [];
        const sleephrs  = [];
   

    const table = data.split('\n').slice(1);
    table.forEach(row => {

        const columns = row.split(',');
        const days = columns[0];
        const tokens = days.split('-');

        const yyyy = parseInt(tokens[0]);
        const mm = parseInt(tokens[1] - 1);
        const dd = parseInt(tokens[2]);
        const formatDate = Date.UTC(yyyy, mm, dd);

        xlabels.push(days);

        
        calburnt.push(parseFloat(columns[1]));
        stepstaken.push(parseFloat(columns[2]));
        distscore.push(parseFloat(columns[3]));
        heartrate.push(parseFloat(columns[4]));
        sleephrs.push(parseFloat(columns[5]));

    }); 
    
    return {xlabels,calburnt,stepstaken,distscore,heartrate,sleephrs};

}