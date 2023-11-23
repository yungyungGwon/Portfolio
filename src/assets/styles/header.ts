import styled from 'styled-components'

const Wrapper = styled.div`
    margin-top: 20px;
    padding: 0px 10px 0px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: black;
        text-decoration: none;
    }

    button {
        border: 0;
        outline: 0;
        background: white;
        cursor: pointer;
    }

    li {
        cursor: pointer;
    }

    .title {
        cursor: pointer;
    }
`
export default Wrapper