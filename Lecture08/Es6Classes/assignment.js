let list = new TodoList('todoList') // where todoList is id: eg <ul id='todoList' ></ul>

let btn;
btn.onclick = () => {
    return new Todo('title', false)
}
let t = new Todo("adsasdsa", false)
t.setDone(true)

list.addTodo(new Todo("aaa", true))
list.removeTodo(4) //removes 4th todo
list.shiftUp(4) //shifts 4th upto 3, and 3 to 4
list.shiftDown(5)
list.clearDone() //clears all that done == true

