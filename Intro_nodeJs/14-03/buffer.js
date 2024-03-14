// Create a buffer with a string
const buffer = Buffer.from('Hello, World!', 'utf8');

// Get the length of the buffer
const length = buffer.length;

// Convert the buffer to a string
const str = buffer.toString('utf8');

// Access individual bytes in the buffer
for (let i = 0; i < length; i++) {
    const byte = buffer[i];
    console.log(`Byte at index ${i}: ${byte}`);
}

// Modify bytes in the buffer
buffer[0] = 72; // ASCII code for 'H'
buffer[1] = 101; // ASCII code for 'e'

// Concatenate buffers
const buffer1 = Buffer.from('Hello, ');
const buffer2 = Buffer.from('World!');
const concatenatedBuffer = Buffer.concat([buffer1, buffer2]);

// Compare buffers
const bufferA = Buffer.from('Hello');
const bufferB = Buffer.from('World');
const isEqual = bufferA.equals(bufferB);

// Slice a buffer
const slicedBuffer = buffer.slice(0, 5); // 'Hello'

// Fill a buffer with a value
const filledBuffer = Buffer.alloc(10, 0); // 10 bytes filled with zeros

// Write to a buffer
const writeBuffer = Buffer.alloc(10);
writeBuffer.write('Hello', 'utf8');

// Read from a buffer
const readBuffer = Buffer.from('Hello');
const bytesRead = readBuffer.readUInt8(0); // Read the first byte as an unsigned 8-bit integer


const buf=Buffer.alloc(5, 'a');
console.log(buf);
