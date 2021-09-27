qTeams = {aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    };


    var sortable = [];
    for (var teamname in qTeams) {
        sortable.push([teamname, qTeams[teamname]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    sortable.reverse();
  
    for(let i = 0; i< sortable.length; i++){
        console.log(sortable[i][0]);
    }
   