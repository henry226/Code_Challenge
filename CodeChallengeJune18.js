/****************************************************************************** 
# Without directly modifying the data structures, create a script in either
# python or javascript that cycles through all the parents and prints to the
# terminal the proper activities for their child's age group. When there are no
# more activities for that parent, print “Curriculum complete!”..
#
# (Make sure your script accounts for any edge cases in the provided data!)
*******************************************************************************/

var parents = {
    'Henry': {'childName': 'Calvin', 'age': 1},
    'Ada': {'childName': 'Lily', 'age': 4},
    'Emilia': {'childName': 'Petra', 'age': 2},
    'Biff': {'childName': 'Biff Jr', 'age': 3},
    'Milo': {}
}

var activities = [
    {
        'age': 1,
        'activity': [
            'Go outside and feel surfaces.',
            'Try singing a song together.',
            'Point and name objects.'
            ]
    },
    {
        'age': 2,
        'activity': [
            'Draw with crayons.',
            'Play with soundmaking toys or instruments.',
            'Look at family pictures together.'
            ]
    },
    {
        'age': 3,
        'activity': [
            'Build with blocks.',
            'Try a simple puzzle.',
            'Read a story together.'
            ]
    }
]

/*****************************************************************************
# Want to really shine and show us your chops?  Work in some of these stretch
# goals using any tools or libraries you see fit.
# - Document your creation process with proper git workflow.
# - Personalize the message output to make it more friendly.
# - Allow users to input new activities & parents before executing the script.
# - Print one activity at a time per parent and continue cycling through until
#   all parents have recieved all their activities.
******************************************************************************/

var str = "";
function myFunction() {

    // Stored parents input values
    var parent_name = document.getElementById("parent_name").value;
    var child_name = document.getElementById("child_name").value;
    var child_age = document.getElementById("child_age").value;

    // Stored age input value 
    var a_age = document.getElementById("age").value;
    var a_activity = document.getElementById("activity").value;

    //Added parents input value
    if(parent_name)
        parents[parent_name] = {};
    if(child_name)
        parents[parent_name] = {'childName': child_name};
    if(child_age)
        parents[parent_name] = {'childName': child_name, 'age': child_age};

    //Added activities input value
    if(a_age > 3 && a_activity) {
        let new_activity = {
            'age': a_age,
            'activity': [a_activity]
        };
        activities.push(new_activity);
    }
    else if(a_age <= 3 && a_activity) {
        activities[a_age-1].activity.push(a_activity);
    }
    
    // Loop through all data and stored in str
    for (var p in parents) {
        str += "Parent's Name: " + p + "<br>";
        var p_obj = parents[p];
        // Check if the object of the parent is empty
        if(jQuery.isEmptyObject(p_obj)){
            str += "Missing Child Info!<br><br>";
        }
        // Output parent's child info
        else {
            for(var prop in p_obj) {
                if(prop == "age"){
                    str += "Age: " + p_obj[prop] + "<br>";
                    ageCheck(p_obj[prop]);
                }
                else if (prop == "childName") {
                    str += "Child: " + p_obj[prop] + "<br>";
                }
            }
        }
    }
    //Output the result
    document.getElementById("result").innerHTML = str + "Curriculum complete!<br>";

    //Clean up str
    str= "";
}

// This function checks and output the activities
function ageCheck(age) {
    var i, j, counter = 0;
    for(i=0; i<activities.length; i++) {
        // If child's age is matched to activities' age
        if(age == activities[i].age) {
            var x = "";
            for(j in activities[i].activity) {
                let k = Number(j)+1;
                x += "Activity " + k + ": " + activities[i].activity[j] + "<br> ";
            }
            // stored children's activities in str
            str += x + "<br>";
            counter++;
            break;
        } 
    }
    //If child's age is not matched to all activities ages, output error message
    if(counter == 0){
        str += "Can't Find Info!" + "<br><br>";
    }
}