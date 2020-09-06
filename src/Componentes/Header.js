import React from "react";
import styled from "styled-components";
const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 4em;
  nav {
    display: flex;
    justify-content: space-between;
    li {
      margin-left: 1em;
      list-style: none;
      a{
        text-decoration: none;
      }
      .button-header{
        padding: .8em 1.5em;
        border-radius: 25px;
        background: linear-gradient(to left, #7530ff 0%,  #B18AFF 100%);
        color: white;
        box-shadow: 2px 2px 10px #848484;
      }
    }
  }
`;
function Header() {
  return (
    <DivHeader>
      <label>Logo</label>
      <nav>
        <li>
          <a href="/">Ayuda</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
        <li>
          <a className="button-header" href="/">
            Hacer un sorteo
          </a>
        </li>
      </nav>
    </DivHeader>
  );
}

export default Header;
