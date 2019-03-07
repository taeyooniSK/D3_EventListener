/*
    Adding event listeners

    selection.on(eventType, callback)
                  eventType : Type of event
                  callback: Code to run when event is triggered


        
    
    The Event Object
    d3.event

    this property on d3 will contain all of the event information 
    when referenced insided of an event handler.
    그래서 밑에 폼 태그의 submit 이벤트의 디폴트 동작을 금지하기 위해서 d3.event로 접근함
 
 
    Appending Elements (append method)
    
    selection.append(tagName)

    Appends a new element of type tagName to every element in the selection
    and return a new d3 selection.

    그래서 밑에 .append("p") 이후에 나오는 메소드들은 리턴된 p태그에 적용시키는 것임
    
    Accessing Properties (property method)

    selection.property(name, [, newValue])

    Access a property (e.g. an input value) which is not accessible as an element attribute.
    이 의미는 input.value 이런식으로 Vanila JS에서 처럼 attribute로 바로 접근할 수 있는게 아니라 
    proeprty라는 메소드로 접근해서 접근하려하는 attribute의 이름을 넣고(첫번째 argument로), 새로운 값을 넣어줌(두번째 argument로)



    Removing Elements (remove method)
    
    selection.remove()

    Remove the selection from the DOM

    d3.selectAll("p").remove(); 이렇게 하면 모든 p태그 요소들이 DOM에서 제거됨

*/



/*
노트가 추가가 된 후에 글자를 치면 노트의 박스 색깔이 바뀌고
글자 치는 내용이 그대로 노트 박스에 보임
*/ 

let isSubmitted = false;
let note;

d3.select("#note-form").on("submit",  () => {
    d3.event.preventDefault();
    isSubmitted = true;
    const input = d3.select("#note-form__input");
    d3.select("#notes")
      .append("p")
        .classed("note", true)
        .text(input.property("value"))
    input.property("value", "");
    isbSubmitted = true;
    note.remove();
});



const input_form = d3.select("#note-form__input");


/*

// if (!isTriggered){
    input_form.on("keyup",  () => {
        // isTriggered = true;
        const input = d3.select("#note-form__input");
       
        //if(isTriggered){
            
            if (d3.selectAll("p.note.active").nodes().length < 1 ){
                note = d3.select("#notes")
                             .append("p")
                                .classed("note active", true);
                                // .text(input.property("value"));
                input_form.on("keyup", null);
            }
           
            
        //}
        
        
    })

    
    if(input_form.property("value").length > 0){
        input_form.on("keyup", () => {
            note.text(input_form.property("value"));
        });    
    }


*/

    /*
        인풋창에 글자를 처음으로 쓴다(keydown)
        프리뷰 노트창이 뜬다. 그리고 keydown 이벤트는 작동되지않는다.
        키업 이벤트가 작동되면서 프리뷰 노트창에 글자가 입력되는게 보인다. 
        내용을 제출하면 프리뷰 노트는 DOM에서 지워진다 ( 평범한 노트 창이 보인다)
    */


    // let hasActive = d3.select(".active").node().className;

    // input_form.on("keydown", () => {
    //     note = d3.select("#notes")
    //              .append("p")
    //                 .classed("note active", true);
            

    //     input_form.on("keyup", () => { 
    //         input_form.on("keydown", null);
    //         for ( let i = 0; i < d3.selectAll(".note").nodes().length; i++ ){
    //             // if ( d3.selectAll("p.note").nodes()[i].className === "active"){

    //             // }
    //             if ( d3.selectAll(".active").nodes().length === 1 ){
    //                 d3.select(".active").text(input_form.property("value"));
    //                 input_form.on("keydown", null);
    //             }
    //         }
    //     })
        
    // })




    // input_form.on("keydown", () => {
    //     let target = d3.event;
    //     console.log(target);
       
    //     if (d3.select(".active").size() === 0 && input_form.property("value").length > 0 ) {
    //         note = d3.select("#notes")
    //                  .append("p")
    //                     .classed("note active", true);
                        
    //         input_form.on("keyup", () => {
    //             input_form.on("keydown", null);
    //             note.text(input_form.property("value"));
    //         })
    //     }
    // })



    input_form.on("keydown", keyDown);
    input_form.on("keyup", keyUp);


    function keyDown(){
        if (d3.select(".active").size() === 0 && input_form.property("value").length > 0 ) {
            note = d3.select("#notes")
                    .append("p")
                        .classed("note active", true);
        }
    };

    function keyUp(){

        input_form.on("keydown", null);
        note.text(input_form.property("value"));
        keyDown();
                   
    };