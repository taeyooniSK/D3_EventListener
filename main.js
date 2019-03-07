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






d3.select("#note-form").on("submit",  () => {
    d3.event.preventDefault();
    const input = d3.select("#note-form__input");
    d3.select("#notes")
      .append("p")
        .classed("note", true)
        .text(input.property("value"))
    input.property("value", "");
});
