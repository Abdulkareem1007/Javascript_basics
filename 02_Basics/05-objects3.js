// de-structure of object.

const course = {
  courseName: "Javascript",
  price: "999",
  courseInstructor: "Hitesh",
};

const { courseInstructor } = course; // de structuring

console.log(courseInstructor); // after de structring we can the property directly without using (.) operator.

// we can also use alias name for the property.

const { courseInstructor: Instructor } = course;

console.log(Instructor);
