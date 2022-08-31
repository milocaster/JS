function showGrade() {
    var score = document.getElementById("score").value;
    var div = document.getElementById("div");
    var result = "คะแนนที่ได้คือ "+score+"<br>เกรดของคุณคือ ";

        if( score >= 90 ) {
            result += "<B> A <br> ยอดเยี่ยม!!";
        } else if( score >= 80 ) {
            result += "<B> B+ <br> ดีมาก!!";
        } else if( score >= 70 ) {
            result += "<B> B <br> ดี!!";
        } else if( score >= 60 ) {
            result += "<B> C+ <br> ค่อนข้างดี!!";
        } else if( score >= 50 ) {
            result += "<B> C <br> ปานกลาง!!";
            } else if( score >= 40 ) {
            result += "<B> D+ <br> อ่านหนังสือเพิ่ม!!";
        } else if( score >= 30 ) {
            result += "<B> D <br> ตั้งใจเรียนหน่อย!!";
        } else {
            result += "<B> F <br> มาติดต่อขอสอบใหม่ค่ะ!!!";
            }

    div.innerHTML = result;
        }