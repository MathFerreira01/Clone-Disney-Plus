import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: top;
    

    &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        content: "";

        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }
`;

export const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`;

export const CTALogoOne = styled.img`

`;

export const SignUp = styled.a`
    width: 100%;
    padding: 17px 0;

    background-color: #0063e5;
    color: #f9f9f9;
    border-radius: 4px;

    font-size: 18px;
    font-weight: bold;
    text-align: center;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    
    cursor: pointer;

    &:hover {
        background: #0483ee;
    }
`;

export const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

export const CTALogoTwo = styled.img`
    width: 90%;

`;