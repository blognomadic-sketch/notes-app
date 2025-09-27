import React, {useEffect, useState} from 'react';
export default function App(){
const [notes, setNotes] = useState([]);
const [text, setText] = useState('');
useEffect(()=>{ fetch('/notes').then(r=>r.json()).then(setNotes); },[]);
async function add(){
const res = await fetch('/notes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text})});
const n = await res.json(); setNotes(s=>[...s,n]); setText('');
}
return (<div><h1>Notes</h1>
<input value={text} onChange={e=>setText(e.target.value)} />
<button onClick={add}>Add</button>
<ul>{notes.map(n=> <li key={n.id}>{n.text}</li>)}</ul>
</div>);
}
