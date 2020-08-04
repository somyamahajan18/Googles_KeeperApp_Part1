import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Note from './components/note';
import Notes from './notes';

function notesmail(notess){
  return(
    <Note
    key={notess.key}
  title={notess.titlee}
  content={notess.contentt}
  />
);
}

function App(){
  return (
    <div>
    <Header/>
    {Notes.map(notesmail)}
    <Footer/>
    </div>
  );
}
export default App;
