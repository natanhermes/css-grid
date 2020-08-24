import styled from 'styled-components';

export const Container = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-gap: 5px;
    grid-template: 1fr 1fr 1fr/1fr 1fr 1fr;

/*
    grid-template-rows: 10px 10px 10px;
    grid-template-columns: 10px 10px 10px;
*/

    justify-items: end;
    align-items: end;

> div {
    background-color: #7159c1;
    width: 50%;
    height: 50%;
}
`;
