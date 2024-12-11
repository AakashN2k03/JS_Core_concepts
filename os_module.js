const os = require('os');

// Get the platform of the OS
console.log('OS Platform:', os.platform());  // Example output: 'linux'

// Get the architecture of the OS
console.log('OS Architecture:', os.arch());  // Example output: 'x64'

// Get CPU information
const cpuInfo = os.cpus();
console.log('CPU Information:', cpuInfo);

// Get free memory in bytes
console.log('Free Memory:', os.freemem(), 'bytes');

// Get total memory in bytes
console.log('Total Memory:', os.totalmem(), 'bytes');

// Get system uptime in seconds (how long the system has been running).
console.log('System Uptime:', os.uptime(), 'seconds');

// Get the system's hostname
console.log('System Hostname:', os.hostname());

// Get the endianness of the OS
console.log('OS Endianness:', os.endianness());  // 'LE' or 'BE'

// Get the temp directory of the OS it refers to endianness, which is the byte order used to represent data in computer memory. 
console.log('Temporary Files Directory:', os.tmpdir());

// Get information about the current user
const userInfo = os.userInfo();
console.log('Current User Information:', userInfo);
