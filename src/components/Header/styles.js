import styled from "styled-components";

export const Nav = styled.nav `
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`;

export const Logo = styled.img`
    width: 80px;
`

export const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &::after {
                content: "";
                height: 2px;
                background: white;

                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;

                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0.5);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

export const UserImg = styled.img `
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;