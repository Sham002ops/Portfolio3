import React from 'react';
import styled from 'styled-components';

const CButton = () => {
  return (
    <StyledWrapper>
      <button>
        <span>→ View case study</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    background: #fff;
    border:;
    color: black;
    padding: 10px 20px;
    display: inline-block;
    font-size: 15px;
    border-left: 4px solid rgb(20, 20, 20);
    font-weight: 600;
    width: 220px;
    text-transform: uppercase;
    cursor: pointer;
    transform: skew(-21deg);
  }

  span {
    display: inline-block;
    transform: skew(21deg);
  }

  button::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 0;
    background: rgb(20, 20, 20);
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
  }

  button:hover {
    color: #fff;
  }

  button:hover::before {
    left: 0;
    right: 0;
    opacity: 1;
  }`;

export default CButton;
