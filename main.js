const inputText = document.querySelector("#input-text1");
const message = document.querySelector("#input-text2");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");

function encryptButton() {
  box2.style.display = "none";
  box3.style.display = "block";
  const encryptedText = encryptMessage(inputText.value);
  message.value = encryptedText;
}

function encryptMessage(sure) {
  let codeMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  sure = sure.toLowerCase();
  for (let i = 0; i < codeMatrix.length; i++) {
    if (sure.includes(codeMatrix[i][0])) {
      sure = sure.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
    }
  }
  return sure;
}

function decryptButton() {
  const textoDesencriptado = decrypt(inputText.value);
  message.value = textoDesencriptado;
}

function decrypt(key) {
  let codeMatrix2 = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  key = key.toLowerCase();
  for (let i = 0; i < codeMatrix2.length; i++) {
    if (key.includes(codeMatrix2[i][0])) {
      key = key.replaceAll(codeMatrix2[i][0], codeMatrix2[i][1]);
    }
  }
  return key;
}

function copyButton() {
  message.select();
  document.execCommand("copy");
  alert("Haz copiado con exito el mensaje");
}
