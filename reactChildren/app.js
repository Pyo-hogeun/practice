function Draggable(props){
  function dragStart(event){
    console.log('드래그시작');
  }
  return (
    <div className="draggable">
      hello
      {props.children}
    </div>
  )
}

function Box(props){
  return(
    <div className="box">

    </div>
  )
}

function Home(props){
  return(
    <Draggable>
      <Box></Box>
    </Draggable>
  )
}

ReactDOM.render(
  <Home />,
  document.querySelector('#app')
);