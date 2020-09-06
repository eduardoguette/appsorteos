import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetchInstagram from "../Services/index";
const DivFormulario = styled.div`
  width: 550px;
  margin: auto;
  form {
    display: grid;
    justify-content: center;
  }
  input {
    width: 500px;
    height: 2.5em;
    border-radius: 35px;
    outline: none;
    padding-left: 1em;
    font-family: "Montserrat";
    font-size: 1.2em;
    border: none;
    border: 1px solid black;
    transition: 0.4s ease;
    &:focus {
      border: 2px solid #ff6960;
      transition: 0.4s ease;
    }
  }

  button {
    margin-top: 1em;
    border-radius: 25px;
    padding: 1em 2em;
    outline: none;
    width: 150px;
    background-color: #b18aff;
    outline: none;
    border: 2px solid #b18aff;
    font-family: "Montserrat";
    &:active {
      border: 2px solid #7530ff;
      color: #515151;
    }
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    font-weight: 300;
  }
`;

const DivUsers = styled.div`
  display: flex;
  align-items:center;
  margin-top: 1em;
  img{
    height: 50px;
    border-radius: 100%;
  }
  .container-coment{
    display: grid;
    align-items:center;
    margin-left: 1em;
    p{
      margin: 0;
    }
  }
`

function FormIG() {
  const [valueInput, setValueInput] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [callApi, setCallApi] = useState(false);
  const handleInputValue = (e) => {
    setValueInput(e.target.value);
    console.log(valueInput);
  };

  const handleSubmitUrl = (e) => {
    e.preventDefault();
    setCallApi(true);
    fetchInstagram(valueInput)
      .then((elem) =>{ setComentarios(elem.graphql.shortcode_media.edge_media_to_parent_comment.edges)
        console.log(elem)
        
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    
    //console.log(tmp?.graphql?.shortcode_media.edge_media_to_parent_comment.page_info)
   // console.log(tmp.graphql.shortcode_media.edge_media_to_parent_comment.page_info.end_cursor)
  }, [callApi, comentarios]);


  const Results = () => {
   /*  var num = Math.floor(Math.random()*parseInt(comentarios.length))
    console.log(num) */
   
    if(comentarios){
    return comentarios.map((data, i) => (
      <DivUsers key={i}>
        <img src={data.node.owner.profile_pic_url} alt={i}/>
        <div className="container-coment">
        <strong>Comment:</strong>
        <p>{data.node.text}</p>
        </div>
      </DivUsers>
    ))
    }
    return;
  }

  return (
    <DivFormulario>
      <h2>Realiza un sorteo en Instagram</h2>
      <p>Creá sorteos para Instagram online y gratis</p>
      <form action="#" onSubmit={handleSubmitUrl}>
        <input type="text" name="url" value={valueInput} placeholder="Ingresa la URL de una publicación de Instagram" onChange={handleInputValue} />
        <button type="submit">Comenzar</button>
      </form>
      {Results()}
    </DivFormulario>
  );
}

export default FormIG;
