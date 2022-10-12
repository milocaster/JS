const data = {
    "data": [
      {
        "id": 1,
        "firstname": "john",
        "surname": "maller",
        "skill": ["php", "C#", "nodJS", "html"],
        "role": "Developer",
        "age": 35,
        "status": true
      },
      {
        "id": 2,
        "firstname": "silly",
        "surname": "fool",
        "skill": ["speak lao", "word", "excel"],
        "role": "PO",
        "age": 22,
        "status": true
      },
      {
        "id": 3,
        "firstname": "sam",
        "surname": "fool",
        "skill": ["management", "word", "excel"],
        "role": "PM",
        "age": 41,
        "status": true
      },
      {
        "id": 4,
        "firstname": "glote",
        "surname": "xamless",
        "skill": [],
        "role": "INTURN",
        "age": 21,
        "status": true
      },
      {
        "id": 5,
        "firstname": "sadean",
        "surname": "pla",
        "skill": [],
        "role": "",
        "age": 14,
        "status": false
      }
    ]
  };






// อยากให้แสดงค่าออกมาเป็น ตาราง แสดง firstname, lastname, skill, role, age
//ตารางแรกเป็น ข้อมูลที่ status = true เท่านั้น
//ตารางที่สองต้องเป้น คนที่มี skill word
//โดยใช้ function map / for / foreach

//function getFullName(item) {
  //return [item.status].join("TRUE");
//}


console.log(data) 
