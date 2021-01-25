//this is the function that caluclates the grades
function calc_grade()
{ 
    //assign variables for each of the inputs from the user
    var asnmts =  parseFloat(document.getElementById("asnmts").value);
    var gp =  parseFloat(document.getElementById("gp").value);
    var quiz =  parseFloat(document.getElementById("quiz").value);
    var exam =  parseFloat(document.getElementById("exam").value);
    var intex =  parseFloat(document.getElementById("intex").value);
    var final_grade;
    var tot_percent;

    //calculate the total number of points earned by the student
    tot_percent = (asnmts * 1000) + (gp * 200) + (quiz * 200) + (exam * 400) + (intex * 200);
    //turn the total number of points earned into a percent
    tot_percent = (tot_percent / 2000);

    //Figure out what the letter grade should be for the final percentage
    if (tot_percent > 92.9) {
        final_grade = 'A';
    }
    else if (tot_percent > 89.9 && tot_percent < 93.0) {
        final_grade = 'A-'
    }
    else if (tot_percent > 86.9 && tot_percent < 90.0) {
        final_grade = 'B+'
    }
    else if (tot_percent > 82.9 && tot_percent < 87.0) {
        final_grade = 'B'
    }
    else if (tot_percent > 79.9 && tot_percent < 83.0) {
        final_grade = 'B-'
    }
    else if (tot_percent > 76.9 && tot_percent < 80.0) {
        final_grade = 'C+'
    }
    else if (tot_percent > 72.9 && tot_percent < 77.0) {
        final_grade = 'C'
    }
    else if (tot_percent > 69.9 && tot_percent < 73.0) {
        final_grade = 'C-'
    }
    else if (tot_percent > 66.9 && tot_percent < 70.0) {
        final_grade = 'D+'
    }
    else if (tot_percent > 62.9 && tot_percent < 67.0) {
        final_grade = 'D'
    }
    else if (tot_percent > 59.9 && tot_percent < 60.0) {
        final_grade = 'D-'
    }
    else {
        final_grade = 'E'
    }

    //display the final score and final grade in an alert box
    alert('The final grade of ' + tot_percent + "% earns you a " + final_grade);
    

}



