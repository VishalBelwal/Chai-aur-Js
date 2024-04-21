//destructuring of an object

const course = {
    coursename: "Js in Hindi",
    coursePrice: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

/*AGAR ZYADA BAAR KISI BHI KEY KOP RINT KARNA HA TOdusra format bhi use kar sakte hai*/

/*Value ko destructure karna ya fir object ko destructure karna*/
const {courseInstructor: instructor} = course
console.log(instructor);