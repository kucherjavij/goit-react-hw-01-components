import styled from '@emotion/styled'

export const ProfileContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
max-width: fit-content;
font-size: 21px;
border: solid 1px;
border-radius: 5px;
box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 20%);
`;

export const ImgContainer = styled.div`
min-width: 300px;
`;

export const Img = styled.img`
max-width: 200px;
padding-top: 20px;
`;

export const ProfileInfo = styled.p`
margin: 5px;
`;

export const StatisticsList = styled.ul`
display: flex;
padding: 0px;
`;
export const StatisticsItems = styled.li`
display: flex;
    flex-direction: column;
    font-size: 16px;
    margin: 6px;
`;