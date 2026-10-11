function calculateGrade (score){

    if (typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 100) {
        return "Invalid Score";
}
if (score >=90 ) {
    return "A";
    
}else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
function checkAccess(age, hasTicket){

    let isEligibleAge = (age >= 18 || age < 12);
    let isValidTicket = (hasTicket === true);
if (isEligibleAge && isValidTicket) {
        return true;
    } else {
        return false;
    }
}

console.log("=== Testing calculateGrade ===");
console.log("Score 100 (Boundary):", calculateGrade(100))
console.log("Score 90 (Boundary):", calculateGrade(90));
console.log("Score 89 (Boundary):", calculateGrade(89));
console.log("Score 60 (Boundary):", calculateGrade(60));
console.log("Score 59 (Boundary):", calculateGrade(59));
console.log("Score 0 (Boundary):", calculateGrade(0));
console.log("Score -5 (Invalid):", calculateGrade(-5));
console.log("Score '90' (Invalid Type):", calculateGrade("90"));

console.log("\n=== Testing checkAccess ===");
console.log("Age 20, Ticket true:", checkAccess(20, true));
console.log("Age 16, Ticket true:", checkAccess(16, true));
console.log("Age 10, Ticket true:", checkAccess(10, true));
console.log("Age 25, Ticket false:", checkAccess(25, false));