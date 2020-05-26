

const initialState = "(O_O)";
const face = document.getElementById('face');

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case "happy": 
        return "(X‿X)"
     case 'sad':
        return "(X^^X)"
      case 'angry':
        return "(x__x)"
      case 'confused':
          return  "(X || X)"
    default:
        return state
    }
}

store = Redux.createStore(rootReducer);

function render() {
  face.innerHTML = store.getState().toString()
}

render();
store.subscribe(render);



// let getFace = 

document.getElementById("happy").addEventListener("click", () => {
  store.dispatch({type: "happy"})
} )


document.getElementById("sad").addEventListener("click", () => {
  store.dispatch({type: "sad"})
} )

document.getElementById("angry").addEventListener("click", () => {
  store.dispatch({type: "angry"})
} )

document.getElementById("confused").addEventListener("click", () => {
  store.dispatch({type: "confused"})
} )



