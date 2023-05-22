import axios from "axios";

export function processFiles(files) {
  return new Promise((resolve, reject) => {
    const fileDataArray = [];

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (event) {
          const fileContent = event.target.result;
          fileDataArray.push({ filename: file.name, content: fileContent });
          console.log(fileDataArray);

          // Check if all files have been processed
          if (fileDataArray.length === files.length) {
            axios({
              method: "post",
              url: "https://chestx.localto.net",
              data: fileDataArray,
            })
              .then((res) => {
                resolve(res.data.results[0].probabilities); // Resolve with the data
              })
              .catch((err) => {
                reject(err); // Reject with the error
              });
          }
        };

        reader.readAsDataURL(file);
      }
    } else {
      // Handle error when no files are uploaded
      console.log("No files selected");
      reject(new Error("No files selected"));
    }
  });
}
