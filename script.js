// script.js

const contentDiv = document.getElementById("content");
const messageBox = document.getElementById("message-box");
const messageText = document.getElementById("message-text");

// مجموعة من الأسطر البرمجية العشوائية
const codeLines = [
    "function initializeSystem() {",
    "    console.log('System initializing...');",
    "    let status = checkStatus();",
    "    if (status) {",
    "        startProtocol();",
    "    } else {",
    "        alert('Initialization failed!');",
    "    }",
    "}",
    "",
    "const matrix = [1, 2, 3, 4, 5];",
    "for (let i = 0; i < matrix.length; i++) {",
    "    console.log(matrix[i]);",
    "}",
    "",
    "while (running) {",
    "    processData();",
    "    if (isError()) break;",
    "}",
    "",
    "fetch('/api/data')",
    "    .then(response => response.json())",
    "    .then(data => console.log(data));"
];

// تابع الكتابة العشوائية مع المحاذاة
function typeCode() {
    // اختيار سطر عشوائي وإضافته
    const randomCode = codeLines[Math.floor(Math.random() * codeLines.length)];
    contentDiv.textContent += randomCode + "\n";
    
    // تمرير الشاشة تلقائيًا لأسفل
    contentDiv.scrollTop = contentDiv.scrollHeight;

    // استمرار الكتابة بسرعة مناسبة
    setTimeout(typeCode, 50);
}

// تشغيل كتابة الأكواد لمدة 8 ثوانٍ
typeCode();

// بعد 8 ثواني، عرض الرسالة مع الكتابة التدريجية
setTimeout(() => {
    contentDiv.style.display = "none";
    messageBox.style.display = "block";

    // بدء الكتابة التدريجية للجملة
    let message = "تم سحب البيانات";
    let i = 0;
    function typeMessage() {
        if (i < message.length) {
            messageText.textContent += message.charAt(i);
            i++;
            setTimeout(typeMessage, 100);  // السرعة بين كل حرف وحرف
        }
    }

    typeMessage();
}, 8000);

// إغلاق الصفحة بعد 11 ثانية
setTimeout(() => {
    window.close();
}, 11000);
