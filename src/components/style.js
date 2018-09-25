import styled from 'styled-components';

export const SwitcherContainer = styled.div `
    width: 30px;
    height: 60px; 
    display: flex;
    justify-content: center;
    align-items: center;
    
    .navswitcher {
                width: 100%;
                height: 100%;
                border-radius: 20px;
                border: 2px solid white;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                cursor: pointer; 
                &:hover {
                    .navswitcher_angle {
                        animation: none!important;
                        .navswitcher_angle {
                            transition: all 300 ms!important;
                        }
                    }
                }
                .navswitcher_dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 100%;
                    background-color: white;
                }
                .navswitcher_angle {
                    width: 10px;
                    height: 10px;
                    border-radius: 3px;
                    border-left: 2px solid white;
                    border-bottom: 2px solid white;
                    transform: rotate(-45deg);
                    animation: swing 1300ms ease;
                    animation-iteration-count: infinite;
                }
    }

    @keyframes swing {
        from {
            transform: translate(0px, 0px) rotate(-45deg);
        }
        50% {
            transform: translate(0px, -6px) rotate(-45deg);
        }
        to {
            transform: translate(0px, 0px) rotate(-45deg);
        }
    }
`;