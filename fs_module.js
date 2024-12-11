//Read file
const fs=require("fs")
fs.readFile('eg.txt','utf8',(err,data)=>{ //UTF-8 is "8-bit Unicode Transformation Format".
    if(err)
    {
        console.log("error while reading",err)
    }
    else{
        console.log("file has been successfully read:",data)
    }
});

// write file
var writecontent="To learn node js and graphql"
fs.writeFile("eg.txt",writecontent,(err)=>{
    if(err)
    {
        console.log("erro while writing the file",err)
    }
    else{
        console.log("successfully written:")
    }
});

//append content to a file

var appendcontent="\n also learn prisma and postgresql"

fs.appendFile("eg.txt",appendcontent,(err)=>{
    if(err)
    {
        console.log("erro while appending",err)
    }
    else{
        console.log('appended successfully')
    }
});

//delete file

fs.unlink("eg.txt",(err)=>{
    if(err)
    {
        console.log(" file deletion unsuccessful",err)
    }
    else{
        console.log("file has been deleted")
    }
});

// renaming the file
fs.rename("eg.txt","example.txt",(err)=>{
    if(err)
    {
        console.log("error while renaming a file",err)
    }
    else{
        console.log("renamed a file")
    }
});

// creating a directory

fs.mkdir("js_folder",(err)=>{
    if(err)
    {
        console.log("cannot create the folder",err)
    }
    else{
        console.log("js_folder has been created")
    }
});

// deleting the directory

fs.rmdir("js_folder",(err)=>{
    if(err)
    {
        console.log("cannot be deleted",err)
    }
    else{
        console.log("directory has been deleted")
    }

});