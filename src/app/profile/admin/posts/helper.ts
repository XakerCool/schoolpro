// @ts-ignore
export async function handleFileInput(event: any) {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    // Perform actions with the file, such as getting its path
    const imagePath = URL.createObjectURL(file);
    const imgElement = document.getElementById("picked_photo") as HTMLImageElement;
    imgElement.src = imagePath;

    return file;
    // return await convertImageToBytes(file); // Call the function directly without 'this'
  }
}

// export async function convertImageToBytes(file: File): Promise<Uint8Array> {
//   const CHUNK_SIZE = 1024 * 1024; // 1 MB chunk size
//   let offset = 0;
//   const chunks: Uint8Array[] = [];
//
//   return new Promise<Uint8Array>((resolve, reject) => {
//     const reader = new FileReader();
//
//     reader.onload = (event) => {
//       if (event.target?.result instanceof ArrayBuffer) {
//         const chunk = new Uint8Array(event.target.result);
//         chunks.push(chunk);
//         offset += chunk.byteLength;
//
//         if (offset < file.size) {
//           readNextChunk();
//         } else {
//           const concatenatedBytes = new Uint8Array(offset);
//           let offsetConcat = 0;
//           chunks.forEach((c) => {
//             concatenatedBytes.set(c, offsetConcat);
//             offsetConcat += c.byteLength;
//           });
//           resolve(concatenatedBytes);
//         }
//       }
//     };
//
//     reader.onerror = (error) => {
//       reject(error);
//     };
//
//     function readNextChunk() {
//       const slice = file.slice(offset, offset + CHUNK_SIZE);
//       reader.readAsArrayBuffer(slice);
//     }
//
//     readNextChunk();
//   });
// }

