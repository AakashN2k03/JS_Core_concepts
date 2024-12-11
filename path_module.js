// 1. path.join([...paths])
// Joins all given path segments together.
// It automatically adds the necessary directory separator (/ on Linux/macOS and \ on Windows).
// Helps create paths by joining multiple parts.

const path = require('path');

// Joining multiple parts to create a file path
const filePath = path.join('folder', 'subfolder', 'file.txt');
console.log(filePath);  // Output will depend on the platform, e.g., 'folder/subfolder/file.txt' on Linux

// 2. path.resolve([...paths])
// Resolves a sequence of paths into an absolute path.
// It processes each path from right to left, using the first absolute path it encounters as the base. 
// If no absolute path is found, it uses the current working directory.

//absolute path- full path to a file or directory that starts from the root of the file system
// eg Windows: C:\Users\user\Documents\file.txt

const absolutepath=path.resolve("folder","subfolder","eg.txt")
console.log(absolutepath)

// 3. path.basename(path)
// Returns the last part of a path (i.e., the file name).

const basename=path.basename("/foldersubfolder/eg.txt")
console.log(basename)

//4. path.dirname(path)
//Returns the directory name of a path (i.e., the folder).

const dirname=path.dirname("/folder/subfolder/eg.txt")
console.log(dirname)

//5. path.extname(path)
//Returns the extension of the file (if any), including the dot (.).


const extensiom=path.extname("/folder/subfolder/eg.txt")
console.log(extensiom)

// 6. path.isAbsolute(path)
// Checks if a path is an absolute path.

const checkabsolutepath1=path.isAbsolute("folder/subfolder/eg.txt")
const checkabsolutepath2=path.isAbsolute("/folder/subfolder/eg.txt")
console.log(checkabsolutepath1)
console.log(checkabsolutepath2)

// 7.path.parse(path)
// Returns an object with various components of the given path (e.g., root, dir, base, ext, name).

const parseitems=path.parse('/folder/subfolder/eg.txt')
console.log(parseitems)


// Summary of path Module Methods:
// Method	Description
// path.join()	Joins multiple path segments into one path.
// path.resolve()	Resolves given paths into an absolute path.
// path.basename()	Gets the last part of a path (file name).
// path.dirname()	Gets the directory name of a path.
// path.extname()	Gets the extension of the file.
// path.isAbsolute()	Checks if the path is absolute.
// path.parse()	Breaks down a path into components (dir, file, etc.).