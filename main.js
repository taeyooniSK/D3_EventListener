/*
 first of all, I need to know there is [Input] event ( when value of input is altered, it's fired)
 이 이벤트를 알았다면 더 쉽게 코드를 짤 수 있었을 듯.. 
 다시 만들어보기 
 */



const remove = d3.select("#removeAll-btn");
const lucky = d3.select("#lucky-btn");
const input = d3.select("#note-form__input");
const preview = d3.select("#preview");

d3.select("#note-form").on("submit", () => {
    const event = d3.event;
    event.preventDefault();
    let warningMsg = d3.select(".warning");

    if ( input.property("value").length === 0 ){
        warningMsg.style("display", "block");
        setTimeout(() => {
            warningMsg.style("display", "none");
        }, 1500);
    } else if (input.property("value").length > 0){
        d3.select("#notes")
        .append("p")
            .classed("note", true)
            .text(input.property("value"));
        input.property("value", "");
    }
      
    setPreview("");
})

input.on("input", () => {
    const note = d3.event.target.value;
    setPreview(note);    
});
function setPreview(val){
    preview.text(val)
            .classed("hide", val === "");
}

remove.on("click", () => {
    d3.selectAll(".note").remove();
})

lucky.on("click", () => {
    d3.selectAll(".note")
      .style("font-size", () => {
          return `${Math.floor(Math.random() * 70)}px` 
      })
})
