const classList = [

    {
        code: "WDD 130",
        title: "Web Fundamentals",
        credits: 2,
        category: "WDD",
        done: true
    },

    {
        code: "WDD 131",
        title: "Dynamic Web Fundamentals",
        credits: 2,
        category: "WDD",
        done: true
    },

    {
        code: "WDD 231",
        title: "Frontend Development I",
        credits: 2,
        category: "WDD",
        done: false
    },

    {
        code: "CSE 110",
        title: "Programming Building Blocks",
        credits: 2,
        category: "CSE",
        done: true
    },

    {
        code: "CSE 111",
        title: "Programming with Functions",
        credits: 2,
        category: "CSE",
        done: false
    }

];

// HTML Elements

const courseArea = document.getElementById("courseList");

const creditInfo = document.getElementById("creditInfo");

// Show Courses Function

function showCourses(courses) {

    courseArea.innerHTML = "";

    courses.forEach((course) => {

        const div = document.createElement("div");

        div.classList.add("course-item");

        if (course.done) {
            div.classList.add("finished");
        }

        div.innerHTML = `
            ${course.code} - ${course.title}
        `;

        courseArea.appendChild(div);
    });

    // Total Credits

    const total = courses.reduce((sum, course) => {

        return sum + course.credits;

    }, 0);

    creditInfo.textContent =
        `Total Credits: ${total}`;
}

// Initial Courses

showCourses(classList);

// Buttons

document.getElementById("showAll")
.addEventListener("click", () => {

    showCourses(classList);
});

document.getElementById("showWdd")
.addEventListener("click", () => {

    const wddCourses = classList.filter((course) => {

        return course.category === "WDD";
    });

    showCourses(wddCourses);
});

document.getElementById("showCse")
.addEventListener("click", () => {

    const cseCourses = classList.filter((course) => {

        return course.category === "CSE";
    });

    showCourses(cseCourses);
});