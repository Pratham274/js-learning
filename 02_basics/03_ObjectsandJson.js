const course={
    coursename:"JS in Hindi",
    price:"999",
    courseInstructor:"Pratham",
}
// course.courseInstructor

//Object destructuring->
const {courseInstructor: instructor}=course
console.log(instructor);

//Destructuring in React->
// const navbar= ({company}) => {

// }
// navbar(company="Pratham limited");

//APIs->
//JSON object without name
// {
//     "name":"Pratham",
//     "coursename":"JS in Hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]
