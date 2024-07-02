//const maxStackHeight = 500; // Maximum height for the stack (in pixels)


    const add = () => {
        const getStackHeight =  document.getElementById('stack').offsetHeight; // Get the current height of the stack
        //console.log(getStackHeight);
        var stack = document.getElementById('stack');

        // Calculate the total height of all child elements
        var totalHeight = 0;
        for (var i = 0; i < stack.children.length; i++) {
            totalHeight += stack.children[i].offsetHeight;
        }

        if (totalHeight + 50 > getStackHeight) { // 50 is the height of the new element to be added
            alert('Stack is full!');
            return;
        }

        var rano = Math.floor(Math.random() * 10000);

        var boxDiv = document.createElement('div');
        boxDiv.style.width = "100%";
        boxDiv.style.height = "50px";
        boxDiv.style.backgroundColor = "red";
        boxDiv.innerHTML = rano;
        stack.appendChild(boxDiv);
    }