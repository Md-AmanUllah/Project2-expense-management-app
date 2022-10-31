import {useState} from 'react'

function App() {

  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: ""
  })

  function handleInput(event){
    console.log(event.target.value);
    setForm({...form,[event.target.name]:event.target.value});
  }

  async function handleSubmit(event){
    event.preventDefault();
    //console.log(form);
    const res = fetch("http://localhost:4000/transction",{
      method: "POST",
      body: form,
    });

    console.log(res);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="number" name="amount" value={form.amount} onChange={handleInput} placeholder="Enter transaction amount"></input>
      <input type="text" name="description" value={form.description} onChange={handleInput} placeholder="Enter transaction details"></input>
      <input type="date" name="date" value={form.date} onChange={handleInput}></input>

      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
