const submitBtn = document.querySelector("#submitBtn");
const taskName = document.querySelector(".taskName");

submitBtn.addEventListener("click", () => alert('clicked'))

console.log(taskName);


const newTaskInput = document.querySelector("#newTask");
console.log(newTaskInput);
newTaskInput.addEventListener("change", (e) => {
    console.log(e);
    if (e.target.checked) {
        taskName.style.textDecoration = "line-through";
    }
    else {
        taskName.style.textDecoration = "none";
    }

})

var completed = []

// function markComplete(e) {
//     const id = e.id;

//     if (!completed.includes(id)) {
//         document.getElementById(id).style.textDecoration = "line-through"
//         completed.push(id)
//     } else {
//         document.getElementById(id).style.textDecoration = "none"
//         const index = completed.indexOf(id);
//         if (index > -1) {
//             completed.splice(index, 1); // 2nd parameter means remove one item only
//         }
//     }
// }

const markComplete = (e) => {
    id = e.id;
    console.log(id);

    if (!completed.includes(id)) {
        document.getElementById(id).style.textDecoration = "line-through"
        completed.push(id);
    } else {
        document.getElementById(id).style.textDecoration = "none"
        const index = completed.indexOf(id);
        if (index > -1) {
            completed.splice(index, 1);
        }
    }
}

// const sunMugi = (e) => {
//     switch (e) {
//         case 'oi':
//             console.log('Ah, Van Mugi!')
//             break;
//         case 'k ra kha':
//             console.log('Tei kha mugi')
//             break;
//         default:
//             console.log('Machikne Kam Xaina, K bolya vai!')
//             return;
//     }
// }

