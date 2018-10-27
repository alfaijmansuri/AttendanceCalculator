function calculateAttendance() {
	var z = Date.parse(document.getElementById("attendance_till").value);
	var x = Date.parse(new Date());
	var date_difference = Math.round((x-z)/86400000);
	
	var attended = parseInt( document.getElementById("attended").value );
	var lecture_count = parseInt( document.getElementById("lecture_count").value );
	var new_cycle_bunks = parseInt( document.getElementById("new_cycle_bunks").value );
	var future_estimate = parseInt(document.getElementById("future_estimate").value);
	var desired_percentage = parseInt(document.getElementById("desired_percentage").value);
	
	var past_lecture_bunks = lecture_count -  attended;
	var past_total_days = lecture_count/5;
	var past_percentage = (attended / lecture_count)*100;
	var new_working_days = date_difference + future_estimate;
	var total_lectures_till_yet = (new_working_days + past_total_days)*5;
	var lectures_bunked_till_yet = new_cycle_bunks + past_lecture_bunks;
	var lectures_attended_till_yet = total_lectures_till_yet - lectures_bunked_till_yet;
	var todays_attendance = (lectures_attended_till_yet/total_lectures_till_yet)*100;
	
	
	var sentence = "Your Present Attendance is Calculated to be " + todays_attendance + " \n Do you want to know how much lectures you can bunk and still maintain your desired attendance  ?"
	
	var ad = confirm(sentence);
	
	if(ad = true){
	 	
	 	var suggested_lecture_bunks = 0;
		
		if(todays_attendance > desired_percentage){
		  while( todays_attendance > desired_percentage ){
			  
			  total_lectures_till_yet += 1 ;
			  todays_attendance = (lectures_attended_till_yet/total_lectures_till_yet)*100;
			  
			  suggested_lecture_bunks += 1;
			  
		 }
		} else {
		 	while(todays_attendance < desired_percentage){
				
				lectures_attended_till_yet += 1;
				total_lectures_till_yet += 1;
				todays_attendance = (lectures_attended_till_yet/total_lectures_till_yet)*100;
				
				suggested_lecture_bunks -= 1;
				
			}
		}
	 
	 	if(suggested_lecture_bunks > 0){
		 alert("You may bunk next " + suggested_lecture_bunks + " lectures !");
		} else {
		 alert("You should not bunk and come regularly for next " + (-1*suggested_lecture_bunks) + " lectures !");
		}
	 
	}
	
}
