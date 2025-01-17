import Student from "./Student";
function App() {
  return (
    <>
      <Student name="Sumit kumar " age={20} marks={76} />
      <Student name="Deva kumar "  age={21} marks={79}/>
      <Student name="Niraj kumar "  age={22} marks={80}/>
      <Student age={21} marks={46}/>
      <Student marks={78}/>
      <Student/>
    </>
  );
}
Student.defaultProps={
  name:"Student",
  age:"Not found",
  marks:"NA"
}
export default App;
