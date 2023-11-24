import styled from 'styled-components'

const Wrapper = styled.div`
    margin-top: 20px;
    padding: 0px 10px 0px 10px;
    position: relative;

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

    .title {
        cursor: pointer;
        font-weight: 600;
    }

    .gnbItem {
        width: 100%;
        left: 0;
        text-align: center;
        position: absolute;

        background-color: rgba(255,255,255,0.9);

        li {
            height: 20px;
            line-height: 20px;
            padding: 10px 0px 10px 0px;
            cursor: pointer;

            &: hover {
                color: rgb(35,102,246);
            }
        }
        button {
            font-weight: 600;
        }
    }
`
export default Wrapper