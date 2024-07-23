var xls = require('excel');
const fs = require("fs")
xls.default("mpk2.xlsx").then(e => {
    let data = []
    console.log(e);
        for (let i = 2;i < 39;i++) {
            // console.log(e[i]);
            data.push({
                nis : e[i][1],
                nama : e[i][2],
                jenis_kelamin : e[i][3]
            })
        }
        console.log(data);
        fs.writeFileSync("mpk_2.json",JSON.stringify(data,null,2),"utf-8")     
    // console.log(e);
}).catch(e => {
    console.log((e));
})


