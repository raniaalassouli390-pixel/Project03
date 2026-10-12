// Function 1: calculateGrade with input validation and strict equality
function calculateGrade(score) {
    if (typeof score !== "number" || isNaN(score) || score < 0 || score > 100) {
        return "Invalid score";
    }
    
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Function 2: checkAccess based on multiple logical criteria
function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }
    return (age >= 18) && hasTicket;
}

// Testing Function 1 in console with boundary cases
console.log("--- Testing calculateGrade ---");
console.log("Score 90:", calculateGrade(90));   // Expected: A
console.log("Score 89:", calculateGrade(89));   // Expected: B
console.log("Score 0:", calculateGrade(0));     // Expected: F
console.log("Score 100:", calculateGrade(100)); // Expected: A
console.log("Invalid (-5):", calculateGrade(-5)); // Expected: Invalid score

// Testing Function 2 in console with various cases
console.log("--- Testing checkAccess ---");
console.log("Age 20, Ticket true:", checkAccess(20, true));   // Expected: true
console.log("Age 16, Ticket true:", checkAccess(16, true));   // Expected: false
console.log("Age 25, Ticket false:", checkAccess(25, false)); // Expected: false