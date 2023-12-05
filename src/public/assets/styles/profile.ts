import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 25%;
    
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    .introductionContent {
        display: flex;
        flex-direction: column;

        text-align: center;
        border-bottom: 1px solid #848484;
        padding: 10% 10%;

        .name {
            padding: 10px 0px;
            font-size: 60px;
        }

        .breifIntroduction {
            padding: 60px 0px;
        }
    }

    .experienceContent {
        display: grid;
        grid-template-columns: 0.25fr 1fr;

        .tenure {
            // margin: 15px 0px;
            padding: 15px 20px;
            text-align: center;
            border-right: 1px solid #848484;

            div {
                // padding: 10px 0px;
            }
        }

        .info {
            display: flex;
            flex-direction: column;

            margin: 0px 10px;
            text-align: left;
            
            div {
                padding: 10px 0px;
            }

            .companyName {
                    font-size: 17px;
                    font-weight: 700;
            }
        }

    }

    .skillContent {

    }

`
export default Wrapper
