const fs = require('node:fs');

// fs.writeFile(file, data[, options], callback)

fs.writeFile("File.txt" , "Hey hello data" , function(err){

    if(err)console.log(err);
    else console.log("Everything is okey here!")
})

// fs.appendFile(path, data[, options], callback)

fs.appendFile("File.txt" , " Kyse ho app" ,function(err){
    if(err)console.log(err)
       else console.log("Successfully run appendFile ")
})

// fs.rename(oldPath, newPath, callback)

fs.rename("File.txt" , "Message.tst" , function(err){
    if(err)console.log(err)
       else console.log("Rname Complete!")
})

// fs.copyFile(src, dest[, mode], callback)