let myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
let emojiesFromLocalStorage = JSON.parse(localStorage.getItem("myEmojies"));

if(myEmojis === Array) {
    myEmojis.push("as")
    localStorage.setItem("myEmojies", JSON.stringify(myEmojis))
    render(myEmojis);
}
else {

}

if(emojiesFromLocalStorage) {
    myEmojis = emojiesFromLocalStorage;
    render(myEmojis)
}
else {

}

function render(emojis) {
    emojiContainer.innerHTML = "";
    for (let i = 0; i < emojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = emojis[i]
        emojiContainer.append(emoji)
    }
}

render(myEmojis)

function pushAndUnshift(eve, emojis) {
    if (emojiInput.value) {
        eve
        emojiInput.value = ""
        render(emojis)
    }
    localStorage.setItem("myEmojies", JSON.stringify(emojis))
}

function popAndShift(eve, emojis) {
    eve
    localStorage.setItem("myEmojies", JSON.stringify(emojis))
    render(emojis)
}

pushBtn.addEventListener("click", function(){
    pushAndUnshift(myEmojis.push(emojiInput.value), myEmojis)
})

unshiftBtn.addEventListener("click", function(){
    pushAndUnshift(myEmojis.unshift(emojiInput.value), myEmojis)
})

popBtn.addEventListener("click", function() {
    popAndShift(myEmojis.pop(), myEmojis)
})

shiftBtn.addEventListener("click", function() {
    popAndShift(myEmojis.shift(), myEmojis)
})
